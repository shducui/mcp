<script setup lang="ts">
import { useChat } from '@ai-sdk/vue';
import { ref, watch, nextTick, reactive, computed, onMounted } from 'vue';
import { useAudioRecorder } from '../composables/useAudioRecorder'; // 确保这个路径是正确的

// 定义组件接收的 props
const props = defineProps<{
  apiUrl: string; // 后端 API 的绝对路径
}>();

// =================================================================
// 核心聊天 Hook
// =================================================================
const { messages, input, handleSubmit, isLoading } = useChat({ api: props.apiUrl });

// ASR (语音识别) 功能
const { isRecording, start: startRecording, stop: stopRecording } = useAudioRecorder((transcript) => {
  const text = transcript.trim();
  // -------- 语音命令处理 (已精简) --------
  if (["发送", "提交", "发出"].includes(text)) {
    handleSubmit();
    return;
  }
  if (["清空", "清除", "删除"].includes(text)) {
    input.value = '';
    return;
  }
  // 默认是文字输入
  input.value = text;
});

// =================================================================
// UI 状态控制
// =================================================================
const isChatOpen = ref(false);

// 悬浮球的位置
const bubblePos = reactive({ x: 0, y: 0 });

// 切换聊天窗口的显示状态
function toggleChat() {
  isChatOpen.value = !isChatOpen.value;
}

// =================================================================
// 功能辅助函数 (音频, 骰子)
// =================================================================
const audioRef = ref<HTMLAudioElement | null>(null);

function isAudioUrl(content: string): boolean {
  return content.trim().startsWith('<audio');
}

function extractAudioSrc(html: string): string | null {
  const m = html.match(/src="([^"]+)"/);
  return m ? m[1] : null;
}

const isRollingDice = computed(() => {
  if (!isLoading.value) return false;
  const lastUserMessage = [...messages.value].reverse().find(m => m.role === 'user');
  if (lastUserMessage && /摇骰子|摇色子|掷骰子/.test(lastUserMessage.content)) {
    return true;
  }
  return false;
});

// =================================================================
// 监听与副作用
// =================================================================
watch(messages, async (msgs) => {
  const last = msgs[msgs.length - 1];
  if (last?.role === 'assistant' && isAudioUrl(last.content)) {
    const src = extractAudioSrc(last.content);
    if (!src) return;
    await nextTick();
    audioRef.value?.play().catch(() => {
      console.warn('Audio autoplay was prevented by the browser.');
    });
  }
}, { deep: true });

// =================================================================
// 拖拽逻辑
// =================================================================
const isDragging = ref(false);

function startDrag(e: MouseEvent) {
  e.preventDefault();
  const startX = e.clientX;
  const startY = e.clientY;
  const origX = bubblePos.x;
  const origY = bubblePos.y;
  let hasMoved = false;

  function onMouseMove(ev: MouseEvent) {
    const dx = ev.clientX - startX;
    const dy = ev.clientY - startY;

    // 只有当移动超过一个很小的阈值时才认为是拖拽
    if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        hasMoved = true;
        isDragging.value = true;
    }

    if (hasMoved) {
        bubblePos.x = origX + dx;
        bubblePos.y = origY + dy;
    }
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    // 使用 nextTick 确保 click 事件在 isDragging 状态更新后触发
    nextTick(() => {
        isDragging.value = false;
    });
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// 点击悬浮球的逻辑：如果不是在拖拽，则切换聊天窗口
function handleBubbleClick() {
    if (!isDragging.value) {
        toggleChat();
    }
}

// =================================================================
// 组件挂载时设置悬浮球初始位置
// =================================================================
onMounted(() => {
  // 初始位置设置在右下角
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // 假设按钮大小为 70px，边距为 20px
  bubblePos.x = vw - 70 - 20;
  bubblePos.y = vh - 70 - 20;
});
</script>

<template>
  <div
    class="ai-bubble-container"
    :style="{ left: bubblePos.x + 'px', top: bubblePos.y + 'px' }"
  >
    <div
      class="floating-button"
      @click="handleBubbleClick"
      @mousedown="startDrag"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="38px"
        height="38px"
      >
        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </div>

    <div v-if="isChatOpen" class="chat-main">
      <div class="toolbar">
        <div class="toolbar-title">AI助手</div>
        <button class="toolbar-btn close-chat-btn" @click="toggleChat">❌</button>
      </div>

      <div class="messages-area">
        <div
          v-for="m in messages"
          :key="m.id"
          class="message-wrapper"
          :class="{ 'is-user': m.role === 'user' }"
        >
          <div class="message-row">
            <template v-if="m.role === 'assistant'">
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
            </template>
          </div>
        </div>

        <div v-if="isLoading" class="message-wrapper">
          <div class="message-row">
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
          placeholder="请输入您的问题..."
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

    </div>
</template>

<style>
/* 所有样式都直接写在这里，因为 Web Component 的 Shadow DOM 会自动封装它们 */

/* 整体容器：定位悬浮球及其相关弹窗 */
.ai-bubble-container {
  position: fixed; /* 改为通过 left/top 定位 */
  z-index: 9999;
  font-family: "Microsoft YaHei", sans-serif;
  box-sizing: border-box;
}

/* 悬浮球按钮样式 - 已修改 */
.floating-button {
  width: 70px;  /* 增大尺寸 */
  height: 70px; /* 增大尺寸 */
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab; /* 默认显示为可抓取手势 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
}
.floating-button:active {
    cursor: grabbing; /* 拖拽时变为抓紧手势 */
}
.floating-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* 聊天主窗口样式 */
.chat-main {
  position: absolute;
  bottom: 85px; /* 向上偏移，以便在悬浮球上方显示 */
  right: 0;
  width: 380px;
  height: 500px; /* 固定高度 */
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 工具栏 - 已修改 */
.toolbar {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 使元素分散对齐 */
  background-color: #f7f7f7;
  flex-shrink: 0;
}
.toolbar-title {
  font-weight: bold;
  color: #333;
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
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #ffffff;
}
.message-wrapper {
  margin-bottom: 0.8rem;
  display: flex;
}
.message-wrapper.is-user {
  justify-content: flex-end; /* 用户消息靠右对齐 */
}
.message-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 100%;
}
/* message-label 样式已移除 */
.message-bubble {
  padding: 0.6rem 1rem;
  border-radius: 18px;
  max-width: 100%; /* 气泡最大宽度，由 message-row 的 flex 决定 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  word-break: break-word;
  white-space: pre-wrap;
  font-size: 0.95rem;
}
.ai-bubble {
  background-color: #E9ECEF; /* AI 消息气泡为灰色 */
  color: #212529;
}
.user-bubble {
  background-color: #007bff; /* 用户消息气泡为蓝色 */
  color: white;
}
.text-content {
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
.message-bubble audio {
  width: 100%;
  max-width: 250px;
  height: 30px;
}

/* 输入区域 */
.input-form {
  flex-shrink: 0;
  display: flex;
  padding: 0.5rem;
  border-top: 1px solid #eee;
  align-items: center;
  background-color: #f7f7f7;
}
.chat-textarea {
  flex: 1;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  line-height: 1.5;
  height: 3rem;
  overflow-y: auto;
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
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.6rem;
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 1.2rem;
}
.mic-button.is-listening {
  background-color: #28a745 !important;
  color: white;
  box-shadow: 0 0 8px #28a745;
  animation: pulse 1.2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
  100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
}
</style>