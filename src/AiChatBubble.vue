<template> 
  <div 
    ref="containerRef" 
    class="ai-bubble-container" 
    :style="{ left: bubblePos.x + 'px', top: bubblePos.y + 'px' }" 
  > 
    <div class="floating-ball" @mousedown="startDrag" @click="handleBubbleClick">AI</div> 

    <div v-if="isChatOpen" class="chat-panel"> 
      <div v-if="isChatOpen" class="close-btn" @click="toggleChat">×</div> 
      <div class="messages" ref="messagesContainerRef"> 
        <div v-if="messages.length === 0" class="msg-empty"> 
          有什么可以帮您的吗？<br> 
          <small v-if="isGlobalSpeechMode"> 
            💡 当前为朗读开启模式，所有回答都会自动语音播报 
          </small> 
          <small v-else> 
            💡 当前为朗读关闭模式，在问题后加上"语音播报"可以听到回答 
          </small> 
        </div> 
        <div 
          v-for="m in messages" 
          :key="m.id" 
          class="msg-line" 
          :class="m.role === 'user' ? 'msg-user' : 'msg-ai'" 
        > 
          <template v-if="m.role === 'user' || m.role === 'assistant'"> 
            <!-- <div v-if="isAudioUrl(m.content)" v-html="m.content"></div> 
            <div v-else class="msg-content">{{ m.content }}</div>  -->
            <div class="msg-content">{{ m.content }}</div> 
          </template> 
        </div> 
        <div v-if="isLoading" class="msg-line msg-ai"> 
          <span>思考中...</span> 
        </div> 
      </div> 
       <div class="chat-toolbar"> 
        <button 
          @click="toggleGlobalSpeech" 
          class="toolbar-btn" 
          :class="{ active: isGlobalSpeechMode }" 
          :title="isGlobalSpeechMode ?   
          '关闭连续语音播报模式（将只在明确要求时播报）' : 
          '开启连续语音播报模式（所有回答都将自动播报）'" 
        > 
           {{ isGlobalSpeechMode ? '🔊 朗读开启' : '🔇 朗读关闭' }} 
           <span v-if="isGlobalSpeechMode" class="speech-indicator"></span>
        </button> 
        
        <!-- 🆕 新增：清除历史按钮 -->
        <button 
          @click="clearHistory" 
          class="toolbar-btn clear-btn" 
          title="清除对话历史"
        > 
          🗑️ 清除
        </button> 
      </div> 
      <form @submit.prevent="handleSubmit" class="input-area"> 
        <textarea v-model="input" class="input-text" rows="1" placeholder="请输入..." @keydown.enter.exact.prevent="handleSubmit"></textarea> 
        <button type="button" class="btn-voice" :class="{ listening: isRecording }" @click="isRecording ? stop() : start()" title="语音输入">🎤</button> 
        <button type="submit" class="btn-send" :disabled="isLoading || !input.trim()">➤</button> 
      </form> 
    </div> 
  </div> 
</template> 

<script setup lang="ts"> 
import { useChat } from '@ai-sdk/vue' 
import { ref, watch, reactive, computed, onMounted, nextTick } from 'vue' 
import { useAudioRecorder } from '../composables/useAudioRecorder' 

// const isStreamSpeaking = ref(false);
// const lastSpokenLength = ref(0);
// const currentSpeechTimeout = ref<NodeJS.Timeout | null>(null);
// const speechQueue = ref<string[]>([]);
// const isProcessingSpeech = ref(false);
// const streamSpeechDebounceTimer = ref<NodeJS.Timeout | null>(null);
// const lastProcessedMessageId = ref<string>(''); // 避免重复处理同一消息

const props = defineProps<{ apiUrl: string }>() 

// 🆕 存储相关常量
const STORAGE_KEY = 'ai-chat-bubble-data'
const POSITION_KEY = 'ai-chat-bubble-position'
const STORAGE_EXPIRE_HOURS = 24

const isGlobalSpeechMode = ref(false); 

const currentUtterance = ref<SpeechSynthesisUtterance | null>(null);
// 1. 回归 useChat 
// 补充 UIMessage 类型定义，添加 toolName 可选属性 
type UIMessage = { 
  id: string 
  role: 'system' | 'user' | 'assistant' | 'data' | 'tool' 
  content: string 
  result?: any 
  toolName?: string 
  toolInvocations?: any[] 
} 

// 🆕 存储数据类型
type StoredData = {
  messages: UIMessage[]
  timestamp: number
  speechMode: boolean
  chatOpen: boolean
}

type StoredPosition = {
  x: number
  y: number
  timestamp: number
} 

const chatResult = useChat({ 
  // 修复API路径 - 移除错误的路径处理逻辑 
  api: props.apiUrl.includes('/chat') ? props.apiUrl : props.apiUrl.replace('/assistant', '/chat'), 
  onToolCall: async ({ toolCall }) => { 
    console.log('[onToolCall] 工具被调用:', toolCall); 
    
    // 直接在这里处理工具调用结果 
    if (toolCall.toolName === 'navigateToPage') { 
      const path = (toolCall.args as { path: string }).path; 
      console.log(`[onToolCall] 导航工具调用: ${path}`); 

      executeNavigation(path); 

      // 返回工具执行结果 
      return { path: path, success: true }; 
    } 
    
    if (toolCall.toolName === 'zoomInOnPhoto') { 
      const photoTitle = (toolCall.args as { photoTitle: string }).photoTitle; 
      console.log(`[onToolCall] 图片放大工具调用: ${photoTitle}`); 
      window.dispatchEvent(new CustomEvent('ai-zoom-photo', { 
        detail: { title: photoTitle }, 
        bubbles: true, 
        composed: true 
      })); 
      
      // 返回工具执行结果 
      return { title: photoTitle }; 
    } 
    
    if (toolCall.toolName === 'zoomOutPhoto') { 
      const action = (toolCall.args as { action?: string }).action || 'close'; 
      console.log(`[onToolCall] 图片缩小工具调用: ${action}`); 
      window.dispatchEvent(new CustomEvent('ai-zoom-out-photo', { 
        detail: { action }, 
        bubbles: true, 
        composed: true 
      })); 
      
      // 返回工具执行结果 
      return { action, success: true }; 
    } 
    
    if (toolCall.toolName === 'toggleSpeechMode') { 
      const status = (toolCall.args as { action: 'on' | 'off' }).action; 
      isGlobalSpeechMode.value = (status === 'on'); 
      console.log(`[onToolCall] 语音模式已${status === 'on' ? '开启' : '关闭'}，前端状态强制更新为: ${isGlobalSpeechMode.value}`); 
      
      return { 
        status, 
        message: `语音播报模式已${status === 'on' ? '开启' : '关闭'}` 
      }; 
    } 

    // 处理单次语音播报
     if (toolCall.toolName === 'speakOnce') { 
      const { textToSpeak } = toolCall.args as { textToSpeak: string }; 
      console.log(`[onToolCall] 执行单次语音播报: "${textToSpeak.substring(0, 50)}..."`); 
      // 立即执行播报
      speakWithBrowser(textToSpeak);
      return { text: textToSpeak, mode: 'once', executed: true }; 
    } 

    // 处理停止播报 - 只停止播报，不改变模式 
    if (toolCall.toolName === 'stopSpeech') { 
      stopSpeechPlayback(); 
      console.log('[onToolCall] 停止播报（模式保持不变：' + isGlobalSpeechMode.value + '）'); 
      return { status: 'stopped', message: '语音播报已停止' }; 
    } 
    
    // 其他工具的默认处理 
    return {}; 
  },
  onFinish: (message) => {
    console.log('[onFinish] AI回复完成:', message.content);
    
    // 🆕 保存对话历史
    saveConversationHistory();
    
    // 检查是否需要语音播报
    if (isGlobalSpeechMode.value && message.content) {
      console.log('[onFinish] 全局语音模式开启，开始播报');
      speakWithBrowser(message.content);
    }
  },
}); 

const messages = chatResult.messages as import('vue').Ref<UIMessage[]>; 
const input = chatResult.input as import('vue').Ref<string>; 
const handleSubmit = chatResult.handleSubmit as (e?: Event) => void; 
const isLoading = chatResult.isLoading as import('vue').Ref<boolean>; 
const error = chatResult.error as import('vue').Ref<any>; 

// ... ASR 和其他 UI 逻辑保持不变 ... 
const { isRecording, start, stop, error: asrError } = useAudioRecorder((text) => { 
  const t = text.trim(); 
  
  // 1.  优先处理前端直接操作指令 
  //     如果匹配成功，则执行动作并用 `return` 立即终止函数，避免后续操作。 
  
  //  处理“发送”指令： 
  if (['发送', '提交', '发出','发送。','提交。', '发出。'].includes(t)) { 
    if (input.value.trim()) { 
      console.log('[语音指令] 执行发送，内容:', `"${input.value}"`); 
      //  创建一个模拟的提交事件来触发 handleSubmit 
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true }); 
      handleSubmit(submitEvent); 
    } else { 
      console.log('[语音指令] 输入框为空，无可发送内容'); 
    } 
    return; //  <--- 关键：处理完后必须 return 
  } 
  
  //  处理“清空”指令： 
  if (['清空', '清除', '删除','清除。','清空。','删除。'].includes(t)) { 
    console.log('[语音指令] 执行清空'); 
    input.value = ''; 
    return; //  <--- 关键：处理完后必须 return 
  } 

   if (['停止播报', '停止', '别说了', '安静'].includes(t)) { 
    console.log('[语音指令] 执行停止播报（不改变模式）'); 
    stopSpeechPlayback(); 
    return; // 直接在前端处理，不发送给AI 
  } 
  
  // 组合指令 
  if (t.endsWith('发送') && t.length > 2) { 
    const content = t.slice(0, -2).trim(); 
    if (content) { 
      input.value = content; 
      nextTick(() => handleSubmit()); 
    } 
    return; 
  } 

  console.log(`[语音指令] 设置输入内容: "${t}"`); 
  input.value = t; 
}); 
  

const isChatOpen = ref(false) 
const bubblePos = reactive({ x: 0, y: 0 }) 
const containerRef = ref<HTMLElement|null>(null) 
const messagesContainerRef = ref<HTMLElement|null>(null) 
const isDragging = ref(false) 

function toggleChat() { 
  isChatOpen.value = !isChatOpen.value
  // 🆕 保存对话框状态
  saveConversationHistory()
}
function handleBubbleClick() { if (!isDragging.value) toggleChat() }

// 🆕 本地存储相关函数
function saveConversationHistory() {
  try {
    const data: StoredData = {
      messages: messages.value,
      timestamp: Date.now(),
      speechMode: isGlobalSpeechMode.value,
      chatOpen: isChatOpen.value
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    console.log(`[存储] 已保存 ${messages.value.length} 条对话记录`)
  } catch (error) {
    console.error('[存储] 保存对话历史失败:', error)
  }
}

function restoreConversationHistory() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      console.log('[存储] 没有找到历史记录')
      return
    }

    const data: StoredData = JSON.parse(stored)
    const now = Date.now()
    const expireTime = STORAGE_EXPIRE_HOURS * 60 * 60 * 1000 // 24小时

    // 检查是否过期
    if (now - data.timestamp > expireTime) {
      console.log('[存储] 历史记录已过期，清除数据')
      localStorage.removeItem(STORAGE_KEY)
      return
    }

    // 恢复对话历史
    if (data.messages && Array.isArray(data.messages)) {
      // 清空当前消息，然后添加历史消息
      messages.value.length = 0
      data.messages.forEach(msg => {
        messages.value.push(msg)
      })
      console.log(`[存储] 已恢复 ${data.messages.length} 条对话记录`)
    }

    // 恢复语音模式
    if (typeof data.speechMode === 'boolean') {
      isGlobalSpeechMode.value = data.speechMode
      console.log(`[存储] 已恢复语音模式: ${data.speechMode}`)
    }

    // 恢复对话框状态
    if (typeof data.chatOpen === 'boolean') {
      isChatOpen.value = data.chatOpen
      console.log(`[存储] 已恢复对话框状态: ${data.chatOpen}`)
    }

  } catch (error) {
    console.error('[存储] 恢复对话历史失败:', error)
    localStorage.removeItem(STORAGE_KEY)
  }
}

function savePosition() {
  try {
    const posData: StoredPosition = {
      x: bubblePos.x,
      y: bubblePos.y,
      timestamp: Date.now()
    }
    localStorage.setItem(POSITION_KEY, JSON.stringify(posData))
    console.log('[存储] 已保存悬浮球位置')
  } catch (error) {
    console.error('[存储] 保存位置失败:', error)
  }
}

function restorePosition() {
  try {
    const stored = localStorage.getItem(POSITION_KEY)
    if (!stored) return

    const posData: StoredPosition = JSON.parse(stored)
    
    // 检查位置有效性
    const el = containerRef.value
    if (el) {
      const maxX = window.innerWidth - el.offsetWidth
      const maxY = window.innerHeight - el.offsetHeight
      
      if (posData.x >= 0 && posData.x <= maxX && posData.y >= 0 && posData.y <= maxY) {
        bubblePos.x = posData.x
        bubblePos.y = posData.y
        console.log('[存储] 已恢复悬浮球位置')
        return
      }
    }
    
    // 位置无效，使用默认位置
    setDefaultPosition()
  } catch (error) {
    console.error('[存储] 恢复位置失败:', error)
    setDefaultPosition()
  }
}

function setDefaultPosition() {
  const el = containerRef.value
  if (el) {
    const m = 20
    bubblePos.x = window.innerWidth - el.offsetWidth - m
    bubblePos.y = window.innerHeight - el.offsetHeight - m
  }
}

// 🆕 清除历史功能
function clearHistory() {
  if (confirm('确定要清除所有对话历史吗？此操作无法撤销。')) {
    // 清除对话消息
    messages.value.length = 0
    
    // 清除输入框
    input.value = ''
    
    // 清除本地存储
    localStorage.removeItem(STORAGE_KEY)
    
    // 停止当前播报
    stopSpeechPlayback()
    
    console.log('[清除历史] 对话历史已完全清除')
  }
}
// function isAudioUrl(c: string) { return c.trim().startsWith('<audio') } 
// function extractAudioSrc(h: string) { const m = h.match(/src="([^"]+)"/); return m ? m[1] : null } 

function toggleGlobalSpeech() { 
  const newMode = !isGlobalSpeechMode.value; 
  isGlobalSpeechMode.value = newMode; 
  
  console.log(`[语音模式] 用户${newMode ? '开启' : '关闭'}语音模式，状态已更新为：${isGlobalSpeechMode.value}`); 
  
  // 🆕 立即保存语音模式状态
  saveConversationHistory()
  
  // 向AI发送模式切换指令 
  const modeText = newMode ? '开启语音模式' : '关闭语音模式'; 
  input.value = modeText; 
  
  // 使用 nextTick 确保状态更新后再提交
  nextTick(() => { 
    handleSubmit(); 
    // 清空输入框 
    setTimeout(() => { 
      input.value = ''; 
    }, 100); 
  }); 
  
  // 如果关闭模式，停止当前播报 
  if (!newMode) { 
    stopSpeechPlayback(); 
  } else {
    // 如果开启模式，播报一个简短的确认
    speakWithBrowser("准备就绪");
  }
}
// 浏览器语音合成 (TTS) 功能函数 
function speakWithBrowser(text: string) { 
  if ('speechSynthesis' in window) { 
    // 停止上一次可能未完成的播报 
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text); 
    utterance.lang = 'zh-CN';
    utterance.rate = 1.5; // 添加更快的语速设置
    window.speechSynthesis.speak(utterance); 
  } else { 
    console.error('您的浏览器不支持语音合成功能。'); 
  } 
} 


function stopSpeechPlayback() { 
  if ('speechSynthesis' in window) { 
    console.log('[TTS] 停止播报'); 
    window.speechSynthesis.cancel();
    currentUtterance.value = null;
  } 
} 

const isRollingDice = computed(() => { 
  if (!isLoading.value) return false 
  const u = [...messages.value].reverse().find(m=>m.role==='user') 
  return !!(u && /摇骰子|掷骰子/.test(u.content)) 
}) 


// 简化原有的 watch messages（只负责滚动和基本处理）
watch(messages, async (newMessages, oldMessages) => { 
  // 🆕 自动保存对话历史
  if (newMessages.length > 0) {
    saveConversationHistory()
  }
  
  // 自动滚动到底部
  await nextTick(); 
  if (messagesContainerRef.value) { 
    messagesContainerRef.value.scrollTop = messagesContainerRef.value.scrollHeight; 
  } 
}, { deep: true });

// 🆕 监听语音模式变化
watch(isGlobalSpeechMode, (newMode) => {
  saveConversationHistory()
})

// 🆕 监听对话框开关状态
watch(isChatOpen, (newState) => {
  saveConversationHistory()
})



// 表单提交处理函数 
function onFormSubmit() { 
  if (!input.value.trim() || isLoading.value) return; 
  handleSubmit(new Event('submit') as any); 
} 

// 监控错误状态 
watch(error, (newError) => { 
  if (newError) { 
    console.error('[Assistant] An error occurred:', newError); 
  } 
}); 

// 监控ASR错误 
watch(asrError, (newError) => { 
  if (newError) { 
    console.error('[ASR] 语音识别错误:', newError); 
    // 在聊天界面显示错误提示 
    if (messagesContainerRef.value) { 
      const errorDiv = document.createElement('div'); 
      errorDiv.className = 'msg-line msg-ai error-msg'; 
      errorDiv.textContent = `语音识别错误: ${newError}`; 
      messagesContainerRef.value.appendChild(errorDiv); 
      messagesContainerRef.value.scrollTop = messagesContainerRef.value.scrollHeight; 
    } 
  } 
}); 

function startDrag(e: MouseEvent) { 
  e.preventDefault() 
  const el = containerRef.value! 
  const sx = e.clientX, sy = e.clientY 
  const ox = bubblePos.x, oy = bubblePos.y 
  let moved = false 

  function mm(ev: MouseEvent) { 
    const dx = ev.clientX - sx, dy = ev.clientY - sy 
    if (!moved && (Math.abs(dx)>5 || Math.abs(dy)>5)) { 
      moved = true; isDragging.value = true 
    } 
    if (moved) { 
      const nx = Math.min(Math.max(0, ox+dx), window.innerWidth - el.offsetWidth) 
      const ny = Math.min(Math.max(0, oy+dy), window.innerHeight - el.offsetHeight) 
      bubblePos.x = nx; bubblePos.y = ny 
    } 
  } 
  function mu() { 
    document.removeEventListener('mousemove', mm) 
    document.removeEventListener('mouseup', mu) 
    setTimeout(()=>{
      isDragging.value=false
      // 🆕 拖拽结束后保存位置
      if (moved) {
        savePosition()
      }
    }, 10) 
  } 
  document.addEventListener('mousemove', mm) 
  document.addEventListener('mouseup', mu) 
} 

onMounted(()=>{ 
  const el = containerRef.value! 
  
  // 🆕 先恢复位置，如果没有历史位置则使用默认位置
  nextTick(() => {
    restorePosition()
    
    // 🆕 恢复对话历史
    restoreConversationHistory()
  })
}) 

// submitMessage is provided by useAssistant, so no need to redefine it here. 
function handleToolInvocation(invocation: any) { 
  if (!invocation || !invocation.toolName) return; 

  switch (invocation.toolName) { 
    case 'navigateToPage': { 
    const result = invocation.result as { path?: string };  // ← 改为 path 
    if (result?.path) {  // ← 改为 path 
      console.log(`[handleToolInvocation] 导航到页面: ${result.path}`);  // ← 改为 path 
      executeNavigation(result.path);  // ← 改为 path 
    } 
  break; 
} 
    case 'zoomInOnPhoto': { 
      const result = invocation.result as { title?: string }; 
      if (result?.title) { 
        console.log(`[handleToolInvocation] 放大图片: ${result.title}`); 
        window.dispatchEvent(new CustomEvent('ai-zoom-photo', { 
          detail: { title: result.title }, 
          bubbles: true, 
          composed: true 
        })); 
      } 
      break; 
    } 
    case 'zoomOutPhoto': { 
      const result = invocation.result as { action?: string }; 
      if (result?.action) { 
        console.log(`[handleToolInvocation] 缩小图片: ${result.action}`); 
        window.dispatchEvent(new CustomEvent('ai-zoom-out-photo', { 
          detail: { action: result.action }, 
          bubbles: true, 
          composed: true 
        })); 
      } 
      break; 
    } 
    default: 
      console.warn(`[handleToolInvocation] 未知工具: ${invocation.toolName}`, invocation); 
  } 
} 


function executeNavigation(path: string) {
  // 🆕 导航前保存当前状态
  saveConversationHistory()
  savePosition()
  
  // 实现页面导航逻辑
  if (typeof path === 'string' && path.length > 0) {
    // 这里可以根据实际路由方式选择跳转方法
    window.location.href = path;
    console.log(`[Navigation] 页面跳转到: ${path}`);
  } else {
    console.error('[Navigation] 跳转路径无效:', path);
  }
}
</script> 

<style> 
.ai-bubble-container { 
  position: fixed; 
  z-index: 99999; /* 增加z-index，确保在放大图片之上 */ 
  font-size: 16px; 
} 

/* 悬浮球 */ 
/* 悬浮球: 蓝紫渐变（调整为浅一些的配色） */ 
.floating-ball { 
  width: 70px; height: 70px; 
  border-radius: 50%; 
  /* 更浅的蓝紫渐变 */ 
  background: linear-gradient(45deg, #7b64d3, #5a8cf3); 
  color: #fff; font-weight: 600; font-size: 18px; 
  display: flex; align-items: center; justify-content: center; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); 
  cursor: grab; user-select: none; 
} 
.floating-ball:active { cursor: grabbing; transform: scale(0.95); } 
.floating-ball:active { cursor:grabbing; transform:scale(0.95); } 

/* 关闭 × */ 
/* 关闭按钮: 固定在聊天面板右上角 */ 
.close-btn { 
  position: absolute; 
  /* 相对于 .chat-panel 定位 */ 
  top: 8px; 
  right: 8px; 
  width: 24px; 
  height: 24px; 
  line-height: 24px; 
  background: rgba(0, 0, 0, 0.6); 
  color: #fff; 
  border-radius: 50%; 
  text-align: center; 
  cursor: pointer; 
  font-size: 14px; 
  z-index: 10; 
} 

/* 聊天面板 */ 
.chat-panel { 
  position: relative; 
  top: 0; 
  left: 80px; /* 紧邻悬浮球右侧 */ 
  width: 400px; 
  height: 520px; 
  background: #fff; 
  border-radius: 10px; 
  box-shadow: 0 8px 24px rgba(0,0,0,0.15); 
  display: flex; 
  flex-direction: column; 
  overflow: hidden; 
  z-index: 99999; /* 确保聊天面板也在最上方 */ 
} 

/* 新增：消息内容样式 */ 
.msg-content { 
  white-space: pre-wrap; /* 保留换行符和空格 */ 
  word-break: break-word; 
  line-height: 1.5; 
} 

/* 消息区 */ 
.messages { 
  flex:1; padding:8px; overflow-y:auto; 
  background:#f5f5f5; 
} 
.msg-empty { color:#999; text-align:center; margin-top:40px; } 
.msg-line { 
  margin-bottom:6px; line-height:1.4; word-break:break-word; 
} 
.msg-user { color:#007bff; } 
.msg-ai   { color:#000; } 

/* 输入区 */ 
.input-area { 
  display:flex; align-items:center; 
  padding:6px; border-top:1px solid #ddd; 
} 
.input-text { 
  flex:1; resize:none; border:1px solid #ccc; 
  border-radius:999px; padding:6px 16px; 
  font-size:16px; line-height:1.3; 
  background:#fafafa; outline:none; 
  max-height:80px; overflow-y:auto; 
} 
.btn-voice, .btn-send { 
  width:36px; height:36px; margin-left:8px; 
  border:none; border-radius:50%; cursor:pointer; 
  display:flex; align-items:center; justify-content:center; 
  font-size:16px; 
} 
.btn-voice { background:transparent; color:#555; } 
.btn-voice.listening { background:#4caf50; color:#fff; animation:pulse 1.2s infinite; } 
.btn-send { background:#007bff; color:#fff; } 
.btn-send:disabled { background:#aaa; cursor:not-allowed; } 

/* 动画 */ 
@keyframes pulse { 
  0% { box-shadow:0 0 0 0 rgba(76,175,80,0.7); } 
  70%{ box-shadow:0 0 0 10px rgba(76,175,80,0); } 
  100%{ box-shadow:0 0 0 0 rgba(76,175,80,0); } 
} 

.chat-toolbar { 
  padding: 4px 8px; 
  background: #f0f0f0; 
  border-top: 1px solid #ddd; 
  display: flex;
  justify-content: space-between;
  align-items: center;
} 
.toolbar-btn { 
  background: #e0e0e0; 
  border: 1px solid #ccc; 
  border-radius: 12px; 
  padding: 6px 12px; 
  font-size: 12px; 
  cursor: pointer; 
  transition: all 0.3s ease; 
  font-weight: 500; 
} 

.toolbar-btn.active { 
  background: #4caf50; 
  color: white; 
  border-color: #4caf50; 
  box-shadow: 0 2px 4px rgba(76, 175, 80, 0.3); 
} 

/* 🆕 清除按钮样式 */
.toolbar-btn.clear-btn {
  background: #ff6b6b;
  color: white;
  border-color: #ff6b6b;
  font-size: 11px;
  padding: 4px 8px;
}

.toolbar-btn.clear-btn:hover {
  background: #ff5252;
  transform: translateY(-1px);
}

.toolbar-btn:hover { 
  transform: translateY(-1px); 
  box-shadow: 0 2px 8px rgba(0,0,0,0.15); 
} 
.speech-indicator {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 5px;
  animation: pulse-speech 1.5s infinite;
}

@keyframes pulse-speech {
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}
</style> 
