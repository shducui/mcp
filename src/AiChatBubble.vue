<script setup lang="ts">
import { useChat, type Message } from '@ai-sdk/vue';
import { ref, watch, nextTick, reactive, computed, onMounted } from 'vue'; // 引入 onMounted
import { useAudioRecorder } from '../composables/useAudioRecorder'; // 确保这个路径是正确的

// 定义组件接收的 props
const props = defineProps<{
  apiUrl: string; // 后端 API 的绝对路径，例如 'https://your-nuxt-backend.com/api/chat'
}>();

// =================================================================
// 核心聊天 Hook
// =================================================================
// 使用传入的 apiUrl 作为聊天 API 的端点
const { messages, input, handleSubmit, isLoading } = useChat({ api: props.apiUrl });

// ASR (语音识别) 功能
const { isRecording, start: startRecording, stop: stopRecording, error: recorderError } = useAudioRecorder((transcript) => {
  const text = transcript.trim();

  // -------- 语音命令处理 --------
  if (["发送", "提交", "发出"].includes(text)) {
    handleSubmit(); // 提交当前 input 内容
    return;
  }
  if (["清空", "清除", "删除"].includes(text)) {
    input.value = '';
    return;
  }
  if (["打开日志", "显示日志", "日志"].includes(text)) {
    showLog.value = true;
    return;
  }
  if (["关闭", "隐藏"].includes(text)) {
    showLog.value = false;
    showLibrary.value = false;
    return;
  }
  if (["打开窗口", "备注", "语音库"].includes(text)) {
    showLibrary.value = true;
    return;
  }
  // 默认是文字输入
  input.value = text;
});

// =================================================================
// UI 状态控制 (悬浮球开关, 悬浮窗, 主题)
// =================================================================
const isChatOpen = ref(false); // 控制聊天窗口的显示/隐藏
const showLog = ref(false);     // 控制日志窗口的显示/隐藏
const showLibrary = ref(false); // 控制备注窗口的显示/隐藏

// 悬浮窗口的初始位置
const logPos = reactive({ x: 600, y: 80 });
const libPos = reactive({ x: 600, y: 200 });

// 主题颜色控制
const themeColor = ref('#ffffff');
const colors = [
  { name: '白色', value: '#ffffff' },
  { name: '浅灰', value: '#f7f7f7' },
  { name: '青色', value: '#e0f7fa' },
  { name: '橙色', value: '#ffe0b2' },
  { name: '粉色', value: '#fce4ec' },
  { name: '绿色', value: '#e8f5e9' },
  { name: '蓝色', value: '#e3f2fd' },
  { name: '紫色', value: '#f3e5f5' },
];

// 切换聊天窗口的显示状态
function toggleChat() {
  isChatOpen.value = !isChatOpen.value;
  // 当聊天窗口关闭时，关闭所有子浮窗
  if (!isChatOpen.value) {
    showLog.value = false;
    showLibrary.value = false;
  }
}

// =================================================================
// 功能辅助函数 (音频, 骰子)
// =================================================================

// --- 音频处理 ---
const audioRef = ref<HTMLAudioElement | null>(null); // 用于引用 audio 元素

// 判断内容是否为音频 HTML 标签
function isAudioUrl(content: string): boolean {
  return content.trim().startsWith('<audio');
}

// 从音频 HTML 标签中提取 src URL
function extractAudioSrc(html: string): string | null {
  const m = html.match(/src="([^"]+)"/);
  return m ? m[1] : null;
}

// --- 摇骰子处理 ---
// 判断当前是否在进行摇骰子操作
const isRollingDice = computed(() => {
  if (!isLoading.value) return false;
  // 检查最后一条用户消息是否包含摇骰子的关键词
  const lastUserMessage = [...messages.value].reverse().find(m => m.role === 'user');
  if (lastUserMessage && /摇骰子|摇色子|掷骰子/.test(lastUserMessage.content)) {
    return true;
  }
  return false;
});

// 骰子面图标映射
const diceFaces: Record<number, string> = { 1: '⚀', 2: '⚁', 3: '⚂', 4: '⚃', 5: '⚄', 6: '⚅' };

// 解析并显示骰子结果 (目前只是返回原内容，实际可以用于更复杂的动画或展示)
function parseAndShowDice(content: string): string {
  // 匹配 "结果是 4, 1, 6" 或 "results: [4, 1, 6]" 等模式
  const match = content.match(/(结果是|results:?)\s*\[?([\d, ]+)\]?/);
  if (match && match[2]) {
    const numbers = match[2].split(',').map(n => parseInt(n.trim(), 10));
    const diceIcons = numbers.map(n => diceFaces[n] || n).join(' ');
    return content; // AI 的回复已经很自然，我们只在前端做日志或特殊渲染
  }
  return content;
}

// =================================================================
// 监听与副作用
// =================================================================

// 监听新消息以自动播放音频
watch(messages, async (msgs) => {
  const last = msgs[msgs.length - 1];
  if (last?.role === 'assistant' && isAudioUrl(last.content)) {
    const src = extractAudioSrc(last.content);
    if (!src) return;
    await nextTick(); // 确保 DOM 更新后才尝试播放
    // 注意：现代浏览器可能会阻止自动播放，除非用户有交互
    audioRef.value?.play().catch(() => {
      console.warn('Audio autoplay was prevented by the browser.');
    });
  }
}, { deep: true });

// =================================================================
// 拖拽逻辑 (用于日志和备注窗口)
// =================================================================
function startDrag(pos: { x: number; y: number }, e: MouseEvent) {
  e.preventDefault();
  const startX = e.clientX;
  const startY = e.clientY;
  const origX = pos.x;
  const origY = pos.y;

  function onMouseMove(ev: MouseEvent) {
    pos.x = origX + (ev.clientX - startX);
    pos.y = origY + (ev.clientY - startY);
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// =================================================================
// 组件挂载时设置悬浮窗默认位置（如果需要）
// =================================================================
onMounted(() => {
  // 您可以在这里根据屏幕大小动态调整初始位置
  // 例如：
  // const vw = window.innerWidth;
  // const vh = window.innerHeight;
  // logPos.x = vw - 400; // 离右边 400px
  // logPos.y = 50;
  // libPos.x = vw - 400;
  // libPos.y = 350;
});
</script>

<template>
  <div class="ai-bubble-container">
    <div class="floating-button" @click="toggleChat">
      🤖 AI
    </div>

    <div v-if="isChatOpen" class="chat-main" :style="{ backgroundColor: themeColor }">
      <div class="toolbar">
        <button class="toolbar-btn" @click="showLog = true">📜日志</button>
        <button class="toolbar-btn" @click="showLibrary = true">📚备注</button>
        <select v-model="themeColor" class="theme-select">
          <option v-for="c in colors" :key="c.value" :value="c.value">
            {{ c.name }}
          </option>
        </select>
        <button class="toolbar-btn close-chat-btn" @click="toggleChat">❌</button>
      </div>

      <div class="messages-area">
        <div
          v-for="m in messages"
          :key="m.id"
          class="message-wrapper"
          :class="{ 'is-user': m.role === 'user' }"
        >
          <div class="message-row" :class="{ 'is-user-row': m.role === 'user' }">
            <template v-if="m.role === 'assistant'">
              <span class="message-label">AI</span>
              <div class="message-bubble ai-bubble">
                <audio
                  v-if="m.content.trim().startsWith('<audio')"
                  ref="audioRef"
                  :src="extractAudioSrc(m.content) ?? ''"
                  controls
                  autoplay
                ></audio>
                <p v-else class="text-content">{{ m.content }}</p>
              </div>
            </template>

            <template v-else-if="m.role === 'user'">
              <div class="message-bubble user-bubble">
                <p class="text-content">{{ m.content }}</p>
              </div>
              <span class="message-label">You</span>
            </template>
          </div>
        </div>

        <div v-if="isLoading" class="message-wrapper">
          <div class="message-row">
            <span class="message-label">AI</span>
            <div class="message-bubble ai-bubble">
              <div v-if="isRollingDice" class="dice-animation">
                <span class="die">⚀</span>
                <span class="die">⚂</span>
                <span class="die">⚅</span>
              </div>
              <div v-else>思考中...</div>
            </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="input-form">
        <textarea
          v-model="input"
          placeholder="请输入您的问题，或点击麦克风说话："
          class="chat-textarea"
          rows="2"
          @keydown.enter.exact.prevent="handleSubmit"
        ></textarea>
        <button
          type="button"
          @click="isRecording ? stopRecording() : startRecording()"
          class="mic-button"
          :class="{ 'is-listening': isRecording }"
          title="语音输入"
        >
          🎤
        </button>
        <button type="submit" :disabled="isLoading">发送</button>
      </form>
    </div>

    <div
      v-if="isChatOpen && showLog"
      class="draggable-modal"
      :style="{ left: logPos.x + 'px', top: logPos.y + 'px' }"
    >
      <div class="modal-header" @mousedown="startDrag(logPos, $event)">
        <span>Debug Log</span>
        <button class="close-btn" @click="showLog = false">✖</button>
      </div>
      <div class="modal-content">
        <div v-for="m in messages" :key="m.id" class="log-entry">
          <pre>{{ JSON.stringify(m, null, 2) }}</pre>
          <hr />
        </div>
      </div>
    </div>

    <div
      v-if="isChatOpen && showLibrary"
      class="draggable-modal"
      :style="{ left: libPos.x + 'px', top: libPos.y + 'px' }"
    >
      <div class="modal-header" @mousedown="startDrag(libPos, $event)">
        <span>备注</span>
        <button class="close-btn" @click="showLibrary = false">✖</button>
      </div>
      <div class="modal-content pre-wrap text-center">
        <div>中文语音库</div>
        <div>zf_xiaobei</div>
        <div>zf_xiaoni</div>
        <div>zf_xiaoxiao</div>
        <div>zf_xiaoyi</div>
        <div>zm_yunjian</div>
        <div>zm_yunxi</div>
        <div>zm_yunxia</div>
        <div>zm_yunyang</div>
      </div>
    </div>
  </div>
</template>

<style>
/* 所有样式都直接写在这里，因为 Web Component 的 Shadow DOM 会自动封装它们 */

/* 整体容器：定位悬浮球及其相关弹窗 */
.ai-bubble-container {
  position: fixed;
  bottom: 20px; /* 离页面底部 20px */
  right: 20px;  /* 离页面右侧 20px */
  z-index: 9999; /* 确保悬浮在大多数页面元素之上 */
  font-family: "Microsoft YaHei", sans-serif; /* 应用字体 */
  box-sizing: border-box; /* 确保所有元素盒模型一致 */
}

/* 悬浮球按钮样式 */
.floating-button {
  width: 60px;
  height: 60px;
  border-radius: 50%; /* 圆形按钮 */
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  transition: background-color 0.3s, transform 0.3s; /* 过渡动画 */
}

.floating-button:hover {
  background-color: #0056b3; /* 鼠标悬停时的背景色 */
  transform: scale(1.05); /* 鼠标悬停时稍微放大 */
}

/* 聊天主窗口样式 */
.chat-main {
  position: absolute; /* 相对于 .ai-bubble-container 定位 */
  bottom: 80px; /* 向上偏移，以便在悬浮球上方显示 */
  right: 0;
  width: 380px; /* 聊天窗口宽度 */
  height: 500px; /* 聊天窗口高度 */
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 隐藏超出部分 */
}

/* 工具栏 */
.toolbar {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between; /* 使元素分散对齐，关闭按钮靠右 */
  background-color: #f7f7f7;
  flex-shrink: 0; /* 防止工具栏被压缩 */
}

.toolbar-btn, .theme-select {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}
.theme-select {
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 0.4rem;
}

.close-chat-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
}

/* 消息区域 */
.messages-area {
  flex: 1; /* 消息区域占据剩余空间 */
  padding: 1rem;
  overflow-y: auto; /* 允许滚动 */
  background-color: #fcfcfc;
}
.message-wrapper {
  margin-bottom: 0.8rem;
  display: flex; /* 使用 flexbox 布局消息，方便对齐 */
}
.message-wrapper.is-user {
  justify-content: flex-end; /* 用户消息靠右对齐 */
}
.message-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.message-row.is-user-row {
  justify-content: flex-end; /* 针对用户消息行的特殊对齐 */
}
.message-label {
  font-weight: bold;
  min-width: 2rem; /* 确保标签宽度一致 */
  padding-top: 0.5rem;
  color: #555;
}
.message-bubble {
  padding: 0.6rem 0.9rem; /* 调整气泡内边距 */
  border-radius: 18px; /* 更圆润的气泡 */
  max-width: 75%; /* 气泡最大宽度 */
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  word-break: break-word; /* 单词内部换行 */
  white-space: pre-wrap; /* 保留空白符和换行符 */
  font-size: 0.95rem;
}
.ai-bubble {
  background-color: white;
  color: black;
  border: 1px solid #eee;
}
.user-bubble {
  background-color: #007bff;
  color: white;
}
.text-content {
  margin: 0; /* 移除默认的段落外边距 */
  padding: 0;
  line-height: 1.6;
}
/* 音频标签样式 */
.message-bubble audio {
  width: 100%; /* 让音频播放器充满气泡宽度 */
  max-width: 250px; /* 限制音频播放器最大宽度 */
  height: 30px; /* 调整高度 */
}

/* 输入区域 */
.input-form {
  flex-shrink: 0; /* 防止输入区域被压缩 */
  display: flex;
  padding: 0.5rem;
  border-top: 1px solid #eee;
  align-items: center;
  background-color: #f7f7f7;
}
.chat-textarea {
  flex: 1; /* 文本框占据大部分空间 */
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none; /* 禁止用户调整大小 */
  line-height: 1.5;
  height: 3rem; /* 初始高度 */
  overflow-y: auto; /* 文本溢出时显示滚动条 */
}
.input-form button {
  margin-left: 0.5rem;
  padding: 0.6rem 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1rem;
}
.input-form button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
.input-form button:hover:not(:disabled) {
  background-color: #0056b3;
}

/* 悬浮可拖拽窗口 (日志/备注) */
.draggable-modal {
  position: absolute; /* 相对于 .ai-bubble-container 定位 */
  width: 300px;
  height: 300px;
  background: #f8f8f8;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 10000; /* 确保它在聊天主窗口之上 */
  border: 1px solid #ddd;
  overflow: hidden;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #eee;
  cursor: grab; /* 鼠标样式表示可拖拽 */
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-shrink: 0;
}
.modal-header span {
  font-weight: bold;
  color: #333;
}
.close-btn {
  background: transparent;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #666;
}
.close-btn:hover {
  color: #000;
}
.modal-content {
  flex: 1;
  padding: 0.8rem;
  overflow-y: auto; /* 内容溢出时滚动 */
  font-size: 0.9rem;
}
.pre-wrap {
  white-space: pre-wrap; /* 保留空白符和换行符 */
}
.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}
.log-entry pre {
  margin: 0;
  font-size: 0.75rem;
  background: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #eee;
  overflow-x: auto; /* 水平滚动，防止长内容溢出 */
}
.log-entry hr {
  border: none;
  border-top: 1px dashed #ccc;
  margin: 0.8rem 0;
}

/* 骰子动画 */
.dice-animation {
  display: inline-flex;
  gap: 0.5rem;
  font-size: 1.5rem;
  padding: 0.5rem 0;
}
.dice-animation .die {
  display: inline-block;
  animation: roll 0.7s infinite ease-in-out;
}
.dice-animation .die:nth-child(2) { animation-delay: 0.1s; }
.dice-animation .die:nth-child(3) { animation-delay: 0.2s; }

@keyframes roll {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.8); }
  100% { transform: rotate(360deg) scale(1); }
}

/* 麦克风按钮动画 */
.mic-button {
  /* 确保麦克风按钮样式正确 */
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.6rem;
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 1.2rem; /* 增大麦克风图标 */
}

.mic-button.is-listening {
  background-color: #28a745 !important; /* 绿色 */
  color: white;
  box-shadow: 0 0 8px #28a745;
  animation: pulse 1.2s infinite; /* 脉冲动画 */
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(40, 167, 69, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
  }
}
</style>