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
  if (["发送", "提交", "发出"].includes(text)) {
    handleSubmit();
    return;
  }
  if (["清空", "清除", "删除"].includes(text)) {
    input.value = '';
    return;
  }
  input.value = text;
});

// =================================================================
// UI 状态与位置控制
// =================================================================
const isChatOpen = ref(false);
const bubblePos = reactive({ x: 0, y: 0 });
const containerRef = ref<HTMLElement | null>(null); // 引用容器元素

function toggleChat() {
  isChatOpen.value = !isChatOpen.value;
}

// =================================================================
// 功能辅助函数
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
  return !!(lastUserMessage && /摇骰子|摇色子|掷骰子/.test(lastUserMessage.content));
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
    audioRef.value?.play().catch(() => console.warn('Audio autoplay was prevented.'));
  }
}, { deep: true });

// =================================================================
// 拖拽逻辑 (已重构并修复 Bug)
// =================================================================
const isDragging = ref(false);

function startDrag(e: MouseEvent) {
  e.preventDefault();
  const el = containerRef.value;
  if (!el) return;

  const startX = e.clientX;
  const startY = e.clientY;
  const origX = bubblePos.x;
  const origY = bubblePos.y;
  let hasMoved = false;

  function onMouseMove(ev: MouseEvent) {
    const dx = ev.clientX - startX;
    const dy = ev.clientY - startY;

    if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      hasMoved = true;
      isDragging.value = true;
    }

    if (hasMoved) {
      const newX = origX + dx;
      const newY = origY + dy;

      // 边界检查，防止拖出屏幕外
      if (!el) return;
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;
      const boundedX = Math.max(0, Math.min(newX, window.innerWidth - elWidth));
      const boundedY = Math.max(0, Math.min(newY, window.innerHeight - elHeight));

      bubblePos.x = boundedX;
      bubblePos.y = boundedY;
    }
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    // 延迟重置 isDragging 状态，以防止拖拽结束时触发点击事件
    setTimeout(() => {
      isDragging.value = false;
    }, 10);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

function handleBubbleClick() {
  if (!isDragging.value) {
    toggleChat();
  }
}

// =================================================================
// 组件挂载时设置初始位置
// =================================================================
onMounted(() => {
  const el = containerRef.value;
  if (!el) return;
  // 初始位置设置在右下角
  const initialMargin = 20;
  bubblePos.x = window.innerWidth - el.offsetWidth - initialMargin;
  bubblePos.y = window.innerHeight - el.offsetHeight - initialMargin;
});
</script>

<template>
  <div
    ref="containerRef"
    class="ai-bubble-container"
    :style="{ left: bubblePos.x + 'px', top: bubblePos.y + 'px' }"
  >
    <div
      class="floating-button"
      @click="handleBubbleClick"
      @mousedown="startDrag"
    >
      :)
    </div>

    <button v-if="isChatOpen" class="chat-close-button" @click="toggleChat">
      ✕
    </button>

    <div v-if="isChatOpen" class="chat-main">
      <div class="messages-area">
        <div v-if="messages.length === 0" class="welcome-message">
          有什么可以帮您的吗？
        </div>

        <div v-for="m in messages" :key="m.id" class="message-entry">
          <p :class="m.role === 'user' ? 'message-user' : 'message-ai'">
            <audio
              v-if="m.content.trim().startsWith('<audio')"
              ref="audioRef"
              :src="extractAudioSrc(m.content) ?? ''"
              controls
              autoplay
            ></audio>
            <span v-else>{{ m.content }}</span>
          </p>
        </div>

        <div v-if="isLoading" class="message-entry">
          <p class="message-ai">
            <span v-if="isRollingDice" class="dice-animation">
              <span class="die">⚀</span><span class="die">⚂</span><span class="die">⚅</span>
            </span>
            <span v-else>思考中...</span>
          </p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="input-form">
        <textarea
          v-model="input"
          placeholder="请输入..."
          class="chat-textarea"
          rows="1"
          @keydown.enter.exact.prevent="handleSubmit"
        ></textarea>
        <button
          type="button"
          @click="isRecording ? stopRecording() : startRecording()"
          class="mic-button"
          :class="{ 'is-listening': isRecording }"
          title="语音输入"
        >🎤</button>
        <button type="submit" :disabled="isLoading || !input.trim()" class="send-button">➤</button>
      </form>
    </div>
  </div>
</template>

<style>
/* 确保所有元素盒模型一致 */
.ai-bubble-container * {
  box-sizing: border-box;
}

/* 整体容器 */
.ai-bubble-container {
  position: fixed;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* 悬浮球按钮样式 - 全新外观 */
.floating-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFD700, #FFA500); /* 黄色到橙色渐变 */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  cursor: grab;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.5);
  user-select: none; /* 防止拖拽时选中文本 */
}
.floating-button:active {
  cursor: grabbing;
  transform: scale(0.95);
}

/* 关闭按钮 - 新增 */
.chat-close-button {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  z-index: 10001;
  padding: 0;
  line-height: 1;
}
.chat-close-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* 聊天主窗口样式 */
.chat-main {
  position: absolute;
  bottom: 75px; /* 向上偏移 */
  right: 0;
  width: 350px; /* 宽度调小 */
  height: 450px; /* 高度调小 */
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

/* 消息区域 - 已重构 */
.messages-area {
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  background-color: #f9f9f9;
}
.welcome-message {
  text-align: center;
  color: #999;
  font-size: 13px;
  padding: 20px 0;
}
.message-entry {
  margin-bottom: 10px;
}
.message-entry p {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 14px; /* 调小字体 */
  white-space: pre-wrap;
  word-wrap: break-word;
}
.message-user {
  color: #007bff; /* 用户消息为蓝色 */
}
.message-ai {
  color: #000000; /* AI 消息为黑色 */
}

/* 输入区域 */
.input-form {
  flex-shrink: 0;
  display: flex;
  padding: 8px;
  border-top: 1px solid #e0e0e0;
  align-items: center;
  background-color: #ffffff;
}
.chat-textarea {
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 18px; /* 更圆润的输入框 */
  resize: none;
  line-height: 1.4;
  height: 36px;
  max-height: 100px;
  overflow-y: auto;
  background-color: #f4f4f4;
}
.chat-textarea:focus {
  outline: none;
  border-color: #007bff;
  background-color: #fff;
}
.input-form button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
}
.mic-button {
  color: #555;
  background: transparent;
}
.mic-button:hover {
  background-color: #f0f0f0;
}
.mic-button.is-listening {
  background-color: #28a745 !important;
  color: white;
  animation: pulse 1.2s infinite;
}
.send-button {
  background: #007bff;
  color: #fff;
}
.send-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
.send-button:hover:not(:disabled) {
  background-color: #0056b3;
}

/* 骰子动画 */
.dice-animation .die {
  display: inline-block;
  animation: roll 0.7s infinite ease-in-out;
  margin: 0 2px;
}
.dice-animation .die:nth-child(2) { animation-delay: 0.1s; }
.dice-animation .die:nth-child(3) { animation-delay: 0.2s; }
@keyframes roll {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-5px) rotate(180deg); }
}

/* 脉冲动画 */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
  100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
}
</style>