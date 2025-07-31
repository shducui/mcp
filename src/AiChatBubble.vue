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
        <div v-if="messages.length === 0" class="msg-empty">有什么可以帮您的吗？</div>
        <div
          v-for="m in messages"
          :key="m.id"
          class="msg-line"
          :class="m.role === 'user' ? 'msg-user' : 'msg-ai'"
        >
          <template v-if="m.role === 'user' || m.role === 'assistant'">
            <div v-if="isAudioUrl(m.content)" v-html="m.content"></div>
            <div v-else>{{ m.content }}</div>
          </template>
        </div>
        <div v-if="isLoading" class="msg-line msg-ai">
          <span v-if="isRollingDice" class="dice">⚀⚂⚅</span>
          <span v-else>思考中...</span>
        </div>
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

const props = defineProps<{ apiUrl: string }>()

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

const chatResult = useChat({
  // 确保 API 地址指向我们新的 /api/chat
  api: props.apiUrl.includes('/chat') ? props.apiUrl : props.apiUrl.replace('/assistant', '/chat'),
  onToolCall: async ({ toolCall }) => {
    console.log('[onToolCall] 工具被调用:', toolCall);
    
    // 直接在这里处理工具调用结果
    if (toolCall.toolName === 'navigateToPage') {
      const pageName = (toolCall.args as { pageName: string }).pageName;
      console.log(`[onToolCall] 导航工具调用: ${pageName}`);
      
      executeNavigation(pageName);
      
      // 返回工具执行结果
      return { page: pageName, success: true };
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
    
    // 其他工具的默认处理
    return {};
  }
});

const messages = chatResult.messages as import('vue').Ref<UIMessage[]>;
const input = chatResult.input as import('vue').Ref<string>;
const handleSubmit = chatResult.handleSubmit as (e?: Event) => void;
const isLoading = chatResult.isLoading as import('vue').Ref<boolean>;
const error = chatResult.error as import('vue').Ref<any>;

// ... ASR 和其他 UI 逻辑保持不变 ...
const { isRecording, start, stop, error: asrError } = useAudioRecorder((text) => {
  const t = text.trim()
  if (['发送','提交','发出'].includes(t)) return void handleSubmit()
  if (['清空','清除','删除'].includes(t)) return void (input.value = '')
  input.value = t
})
const isChatOpen = ref(false)
const bubblePos = reactive({ x: 0, y: 0 })
const containerRef = ref<HTMLElement|null>(null)
const messagesContainerRef = ref<HTMLElement|null>(null)
const isDragging = ref(false)
function toggleChat() { isChatOpen.value = !isChatOpen.value }
function handleBubbleClick() { if (!isDragging.value) toggleChat() }
function isAudioUrl(c: string) { return c.trim().startsWith('<audio') }
function extractAudioSrc(h: string) { const m = h.match(/src="([^"]+)"/); return m ? m[1] : null }
const isRollingDice = computed(() => {
  if (!isLoading.value) return false
  const u = [...messages.value].reverse().find(m=>m.role==='user')
  return !!(u && /摇骰子|掷骰子/.test(u.content))
})

// 2. 增强 watch 方案，添加更详细的调试
watch(messages, async (newMessages, oldMessages) => {
  if (!newMessages || newMessages.length === (oldMessages?.length || 0)) return;

  // 检查所有新增的消息
  const newCount = newMessages.length;
  const oldCount = oldMessages?.length || 0;
  
  for (let i = oldCount; i < newCount; i++) {
    const message = newMessages[i];
    console.log(`[Watcher] 检查消息 ${i}:`, JSON.stringify(message, null, 2));
    
    // 检查是否为助手消息且包含工具调用
    if (message.role === 'assistant' && message.toolInvocations) {
      console.log(`[Watcher] 发现助手工具调用:`, message.toolInvocations);
      for (const invocation of message.toolInvocations) {
        if (invocation.state === 'result') {
          console.log(`[Watcher] 工具调用完成:`, invocation);
          handleToolInvocation(invocation);
        }
      }
    }
  }

  await nextTick();
  if (messagesContainerRef.value) {
    messagesContainerRef.value.scrollTop = messagesContainerRef.value.scrollHeight;
  }
}, { deep: true });

// 执行页面导航
function executeNavigation(page: string) {
  let targetPath = '/';
  switch (page) {
    case 'portfolio': 
    case 'blog': 
    case 'archives': 
      targetPath = '/'; 
      break;
    case 'about': 
      targetPath = '/about'; 
      break;
    case 'contact': 
      targetPath = '/contact'; 
      break;
    default: 
      console.error(`[Navigation] 未知目标: ${page}`); 
      return;
  }
  
  console.log(`[Navigation] 执行跳转到: ${targetPath}`);
  
  // 直接跳转，不保存任何状态
  setTimeout(() => {
    window.location.href = targetPath;
  }, 100);
}

// 2. 保留原有的watch作为备用方案
watch(messages, async (newMessages, oldMessages) => {
  if (!newMessages || newMessages.length === (oldMessages?.length || 0)) return;

  const lastMessage = newMessages[newMessages.length - 1];
  if (!lastMessage) return;

  // 这是调试的关键，再次确认消息结构
  console.log('最新消息对象结构:', JSON.stringify(lastMessage, null, 2));

  // 我们期望这次能在这里捕获到 role: 'tool' 的消息
  if (lastMessage.role === 'tool' && lastMessage.toolName) {
    switch (lastMessage.toolName) {
      case 'navigateToPage': {
        const result = (lastMessage as any).result as { page?: string };
        if (result?.page) {
          console.log(`[Watcher] 检测到导航指令, 目标: ${result.page}`);
          let targetPath = '/';
          switch (result.page) {
            case 'portfolio': case 'blog': case 'archives': targetPath = '/'; break;
            case 'about': targetPath = '/about'; break;
            case 'contact': targetPath = '/contact'; break;
            default: console.error(`[Watcher] 未知导航目标: ${result.page}`); return;
          }
          console.log(`[Watcher] 执行页面跳转到: ${targetPath}`);
          window.location.href = targetPath;
        }
        break;
      }
      case 'zoomInOnPhoto': {
        const result = (lastMessage as any).result as { title?: string };
        if (result?.title) {
          console.log(`[Watcher] 检测到放大图片指令, 目标: ${result.title}`);
          window.dispatchEvent(new CustomEvent('ai-zoom-photo', {
            detail: { title: result.title },
            bubbles: true,
            composed: true
          }));
        }
        break;
      }
      case 'zoomOutPhoto': {
        const result = (lastMessage as any).result as { action?: string };
        if (result?.action) {
          console.log(`[Watcher] 检测到缩小图片指令, 动作: ${result.action}`);
          window.dispatchEvent(new CustomEvent('ai-zoom-out-photo', {
            detail: { action: result.action },
            bubbles: true,
            composed: true
          }));
        }
        break;
      }
    }
  }

  await nextTick();
  if (messagesContainerRef.value) {
    messagesContainerRef.value.scrollTop = messagesContainerRef.value.scrollHeight;
  }
}, { deep: true });

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
    setTimeout(()=>isDragging.value=false, 10)
  }
  document.addEventListener('mousemove', mm)
  document.addEventListener('mouseup', mu)
}

onMounted(()=>{
  const el = containerRef.value!
  const m = 20
  bubblePos.x = window.innerWidth - el.offsetWidth - m
  bubblePos.y = window.innerHeight - el.offsetHeight - m
  
  // 移除恢复对话历史的调用
  // restoreConversationHistory();
})


// submitMessage is provided by useAssistant, so no need to redefine it here.
function handleToolInvocation(invocation: any) {
  if (!invocation || !invocation.toolName) return;

  switch (invocation.toolName) {
    case 'navigateToPage': {
      const result = invocation.result as { page?: string };
      if (result?.page) {
        console.log(`[handleToolInvocation] 导航到页面: ${result.page}`);
        executeNavigation(result.page);
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

</script>

<style>
.ai-bubble-container { 
  position: fixed; 
  z-index: 99999; /* 增加z-index，确保在放大图片之上 */
  font-size: 12px; 
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
  width: 300px; 
  height: 400px;
  background: #fff; 
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  display: flex; 
  flex-direction: column; 
  overflow: hidden;
  z-index: 99999; /* 确保聊天面板也在最上方 */
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
  border-radius:999px; padding:4px 12px;
  font-size:12px; line-height:1.2;
  background:#fafafa; outline:none;
  max-height:60px; overflow-y:auto;
}
.btn-voice, .btn-send {
  width:32px; height:32px; margin-left:6px;
  border:none; border-radius:50%; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  font-size:14px;
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
</style>