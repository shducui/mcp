<script setup lang="ts">
import { useChat, type Message } from '@ai-sdk/vue';
import { ref, watch, nextTick, reactive, computed } from 'vue';
import { useAudioRecorder } from '../composables/useAudioRecorder';
// =================================================================
// 核心聊天 Hook
// =================================================================
const { messages, input, handleSubmit, isLoading } = useChat({ api: '/api/chat' });
//asr
const { isRecording, start: startRecording, stop: stopRecording, error: recorderError } = useAudioRecorder((transcript) => {
  
  // input.value = transcript;
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
//asr
// =================================================================
// UI 状态控制 (悬浮窗, 主题)
// =================================================================
const showLog = ref(false);
const showLibrary = ref(false);
const logPos = reactive({ x: 600, y: 80 });
const libPos = reactive({ x: 600, y: 200 });
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

// =================================================================
// 功能辅助函数 (音频, 骰子, 日落)
// =================================================================

// --- 音频处理 ---
const audioRef = ref<HTMLAudioElement | null>(null);
function isAudioUrl(content: string): boolean {
  // 检查内容是否是包含 <audio> 标签的 HTML 字符串
  return content.trim().startsWith('<audio');
}
function extractAudioSrc(html: string): string | null {
  const m = html.match(/src="([^"]+)"/);
  return m ? m[1] : null;
}

// --- 摇骰子处理 ---
const isRollingDice = computed(() => {
  if (!isLoading.value) return false;
  // 检查最后一条用户消息是否包含摇骰子的关键词
  const lastUserMessage = [...messages.value].reverse().find(m => m.role === 'user');
  if (lastUserMessage && /摇骰子|摇色子|掷骰子/.test(lastUserMessage.content)) {
    return true;
  }
  return false;
});

const diceFaces: Record<number, string> = { 1: '⚀', 2: '⚁', 3: '⚂', 4: '⚃', 5: '⚄', 6: '⚅' };
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
    await nextTick();
    // 注意：现代浏览器可能会阻止自动播放，除非用户有交互
    audioRef.value?.play().catch(() => {
      console.warn('Audio autoplay was prevented by the browser.');
    });
  }
}, { deep: true });




// 拖拽逻辑
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
</script>

<template>
  <div class="chat-container" :style="{ backgroundColor: themeColor }">
    <div class="chat-main">
      <div class="toolbar">
        <button class="toolbar-btn" @click="showLog = true">📜日志</button>
        <button class="toolbar-btn" @click="showLibrary = true">📚备注</button>
        <select v-model="themeColor" class="theme-select">
          <option v-for="c in colors" :key="c.value" :value="c.value">
            {{ c.name }}
          </option>
        </select>
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
              <div v-else>Thinking...</div>
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

        <button type="submit" :disabled="isLoading">Send</button>
      </form>
    </div>

    <div
      v-if="showLog"
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
      v-if="showLibrary"
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

<style scoped>
/* 根容器 */
.chat-container {
  position: relative;
  width: 90%;
  height: 85vh;
  margin: 2rem auto;
  display: flex;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
  font-family: "Microsoft YaHei", sans-serif;
}
.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 工具栏 */
.toolbar {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.toolbar-btn, .theme-select {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}
.theme-select {
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
}

/* 消息区域 */
.messages-area {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}
.message-wrapper {
  margin-bottom: 0.8rem;
}
.message-wrapper.is-user {
  display: flex;
  justify-content: flex-end;
}
.message-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.message-row.is-user-row {
  justify-content: flex-end;
}
.message-label {
  font-weight: bold;
  min-width: 2rem;
  padding-top: 0.5rem;
}
.message-bubble {
  padding: 0.15rem 0.7rem;
  border-radius: 12px;
  max-width: 70%;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  word-break: break-word;
  white-space: pre-wrap;
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
  margin: 0.5rem 0;
  padding: 0;
  line-height: 1.6;
}

/* 输入区域 */
.input-form {
  flex-shrink: 0;
  display: flex;
  padding: 0.5rem;
  border-top: 1px solid #eee;
  align-items: center;
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
  padding: 0.5rem 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.input-form button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
.input-form button:hover:not(:disabled) {
  background-color: #0056b3;
}

/* 悬浮窗 */
.draggable-modal {
  position: absolute;
  width: 33%;
  height: 60%;
  background: #f8f8f8;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  border: 1px solid #ddd;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #eee;
  cursor: move;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.close-btn {
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}
.modal-content {
  flex: 1;
  padding: 0.5rem;
  overflow-y: auto;
}
.pre-wrap {
  white-space: pre-wrap;
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
}
.log-entry hr {
  border: none;
  border-top: 1px dashed #ccc;
  margin: 0.5rem 0;
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

/*麦克风动画*/
.mic-button.is-listening {
  background-color: #28a745 !important;
  color: white;
  box-shadow: 0 0 8px #28a745;
  animation: pulse 1.2s infinite;
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