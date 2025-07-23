<template>
  <div
    ref="containerRef"
    class="ai-bubble-container"
    :style="{ left: bubblePos.x + 'px', top: bubblePos.y + 'px' }"
  >
    <!-- 悬浮球 -->
    <div
      class="floating-ball"
      @mousedown="startDrag"
      @click="handleBubbleClick"
    >AI</div>

    <!-- 聊天面板关闭按钮 -->
    <div
      v-if="isChatOpen"
      class="close-btn"
      @click="toggleChat"
    >×</div>

    <!-- 聊天面板 -->
    <div v-if="isChatOpen" class="chat-panel">
      <div class="messages">
        <div v-if="messages.length === 0" class="msg-empty">
          有什么可以帮您的吗？
        </div>
        <div
          v-for="m in messages"
          :key="m.id"
          class="msg-line"
          :class="m.role === 'user' ? 'msg-user' : 'msg-ai'"
        >
          <template v-if="isAudioUrl(m.content)">
            <audio
              :src="extractAudioSrc(m.content)!"
              controls autoplay
            ></audio>
          </template>
          <template v-else>
            {{ m.content }}
          </template>
        </div>
        <div v-if="isLoading" class="msg-line msg-ai">
          <span v-if="isRollingDice" class="dice">⚀⚂⚅</span>
          <span v-else>思考中...</span>
        </div>
      </div>
      <form @submit.prevent="handleSubmit" class="input-area">
        <textarea
          v-model="input"
          class="input-text"
          rows="1"
          placeholder="请输入..."
          @keydown.enter.exact.prevent="handleSubmit"
        ></textarea>
        <button
          type="button"
          class="btn-voice"
          :class="{ listening: isRecording }"
          @click="isRecording ? stop() : start()"
          title="语音输入"
        >🎤</button>
        <button
          type="submit"
          class="btn-send"
          :disabled="isLoading || !input.trim()"
        >➤</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { ref, watch, reactive, computed, onMounted } from 'vue'
import { useAudioRecorder } from '../composables/useAudioRecorder'

const props = defineProps<{ apiUrl: string }>()
const { messages, input, handleSubmit, isLoading } = useChat({ api: props.apiUrl })
const { isRecording, start, stop } = useAudioRecorder((text) => {
  const t = text.trim()
  if (['发送','提交','发出'].includes(t)) return void handleSubmit()
  if (['清空','清除','删除'].includes(t)) return void (input.value = '')
  input.value = t
})

const isChatOpen = ref(false)
const bubblePos = reactive({ x: 0, y: 0 })
const containerRef = ref<HTMLElement|null>(null)
const isDragging = ref(false)

function toggleChat() {
  isChatOpen.value = !isChatOpen.value
}

function handleBubbleClick() {
  if (!isDragging.value) toggleChat()
}

function isAudioUrl(c: string) { return c.trim().startsWith('<audio') }
function extractAudioSrc(h: string) {
  const m = h.match(/src="([^"]+)"/)
  return m ? m[1] : null
}

const isRollingDice = computed(() => {
  if (!isLoading.value) return false
  const u = [...messages.value].reverse().find(m=>m.role==='user')
  return !!(u && /摇骰子|掷骰子/.test(u.content))
})

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
})
</script>

<style>
.ai-bubble-container { position: fixed; z-index:9999; font-size:12px; }

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
  position:absolute;
  top:0; left:80px; /* 紧邻悬浮球右侧 */
  width:300px; height:400px;
  background:#fff; border-radius:8px;
  box-shadow:0 8px 24px rgba(0,0,0,0.15);
  display:flex; flex-direction:column; overflow:hidden;
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
