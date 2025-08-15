# AI Chat Bubble - 智能悬浮球聊天组件

一个功能强大的AI聊天悬浮球组件，支持流式语音输入、实时文本显示、语音合成播报等高级功能。

## 🚀 核心功能

### 🎤 流式语音识别
- **实时文本显示**：用户说话时文字实时出现在输入框中
- **3秒智能静默检测**：停止说话3秒后自动发送消息给AI
- **持久化录音模式**：一键开启连续语音交互，无需重复点击
- **增量文本处理**：避免重复发送，确保每次只发送新内容

### 🎯 智能语音指令
支持本地处理的语音指令，无需发送给AI：
- `"清空"/"清除"` - 清空对话历史
- `"发送"` - 立即发送当前输入内容
- `"停止播报"` - 停止语音播报
- `"朗读关闭/开启"` - 控制TTS开关
- `"结束对话"` - 退出持久化录音模式

### 🔊 语音合成播报 (TTS)
- **连续播报模式**：所有AI回复自动语音播报
- **单次播报模式**：仅在明确要求时播报
- **快速语速设置**：1.5倍速播报，提升交互效率
- **播报控制**：随时停止或切换播报模式

### 💾 数据持久化
- **对话历史保存**：24小时内自动恢复对话记录
- **状态记忆**：记住语音模式、对话框状态、麦克风设置
- **位置记忆**：悬浮球位置自动保存和恢复
- **过期清理**：超过24小时自动清理数据

### 🛠 智能工具调用
- **页面导航**：`navigateToPage` - 智能页面跳转
- **图片操作**：`zoomInOnPhoto`/`zoomOutPhoto` - 图片放大缩小
- **语音控制**：`toggleSpeechMode`/`speakOnce`/`stopSpeech` - 语音模式控制

## 🏗 技术架构

### 前端技术栈
- **Vue 3** + **Composition API** - 现代响应式框架
- **TypeScript** - 类型安全开发
- **Vite** - 高性能构建工具
- **Web Speech API** - 浏览器原生语音识别
- **Speech Synthesis API** - 浏览器原生语音合成

### AI集成
- **@ai-sdk/vue** - AI SDK Vue集成
- **流式响应处理** - 实时AI对话体验
- **工具调用支持** - 扩展AI功能边界

### 核心组件结构
```
src/
├── AiChatBubble.vue          # 主组件 - UI界面和交互逻辑
├── entry.ts                  # Web Component入口文件
└── composables/
    └── useAudioRecorder.ts   # 语音识别逻辑封装
```

### 关键技术实现

#### 1. 流式语音识别 (`useAudioRecorder.ts`)
```typescript
// 双回调架构
useAudioRecorder(
  // 完成识别回调（3秒静默后）
  (finalText: string) => { /* 处理最终文本 */ },
  // 流式更新回调（实时显示）
  (streamingText: string) => { /* 实时更新UI */ }
)
```

#### 2. 静默检测机制
```typescript
const resetSilenceTimer = () => {
  if (silenceTimer) clearTimeout(silenceTimer);
  silenceTimer = setTimeout(() => {
    // 3秒后自动发送
    onTranscriptionComplete(finalText);
  }, 3000);
};
```

#### 3. 增量文本处理
```typescript
// 避免重复发送的关键逻辑
let lastFinalResultIndex = 0;
let lastKnownFinalCount = 0;

// 只处理新的最终结果
if (i >= lastFinalResultIndex) {
  newFinalSegments += res[0].transcript;
}
```

## 📦 部署集成指南

### 1. 作为独立Web Component部署

#### 构建Web Component
```bash
# 克隆项目
git clone <repository-url>
cd my-ai-app

# 安装依赖
pnpm install

# 构建Web Component
npx vite build --config vite.lib.config.ts
```

#### 在任意网站中使用
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <!-- 你的网站内容 -->
  
  <!-- 引入AI悬浮球 -->
  <script type="module" src="./dist/ai-chat-bubble.es.js"></script>
  
  <!-- 使用组件 -->
  <ai-chat-bubble api-url="https://your-api.com/chat"></ai-chat-bubble>
</body>
</html>
```

### 2. Vue 3项目集成

#### 安装依赖
```bash
npm install @ai-sdk/vue
```

#### 复制核心文件
```bash
# 复制组件文件到你的项目
cp src/AiChatBubble.vue your-project/src/components/
cp composables/useAudioRecorder.ts your-project/src/composables/
```

#### 在Vue项目中使用
```vue
<template>
  <div>
    <!-- 你的应用内容 -->
    
    <!-- AI悬浮球 -->
    <AiChatBubble :api-url="apiUrl" />
  </div>
</template>

<script setup>
import AiChatBubble from '@/components/AiChatBubble.vue'

const apiUrl = 'https://your-api.com/chat'
</script>
```

### 3. Nuxt 3项目集成

#### 安装依赖
```bash
npm install @ai-sdk/vue
```

#### 配置nuxt.config.ts
```typescript
export default defineNuxtConfig({
  // 其他配置...
  
  ssr: false, // 如果使用语音功能，建议关闭SSR
  
  css: [
    // 如果需要全局样式
  ],
  
  vite: {
    optimizeDeps: {
      include: ['@ai-sdk/vue']
    }
  }
})
```

#### 创建插件文件
```typescript
// plugins/ai-chat-bubble.client.ts
import AiChatBubble from '~/components/AiChatBubble.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('AiChatBubble', AiChatBubble)
})
```

#### 在页面中使用
```vue
<template>
  <div>
    <!-- 你的页面内容 -->
    
    <!-- AI悬浮球 - 仅在客户端渲染 -->
    <ClientOnly>
      <AiChatBubble :api-url="apiUrl" />
    </ClientOnly>
  </div>
</template>

<script setup>
const apiUrl = useRuntimeConfig().public.aiApiUrl
</script>
```

### 4. React项目集成

#### 安装依赖
```bash
npm install @ai-sdk/react
```

#### 创建React包装组件
```tsx
// components/AiChatBubbleWrapper.tsx
import { useEffect, useRef } from 'react';

interface AiChatBubbleProps {
  apiUrl: string;
}

export default function AiChatBubbleWrapper({ apiUrl }: AiChatBubbleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 动态加载Web Component
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/dist/ai-chat-bubble.es.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const element = document.createElement('ai-chat-bubble');
      element.setAttribute('api-url', apiUrl);
      containerRef.current.appendChild(element);

      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    }
  }, [apiUrl]);

  return <div ref={containerRef}></div>;
}
```

#### 在React应用中使用
```tsx
// App.tsx
import AiChatBubbleWrapper from './components/AiChatBubbleWrapper';

function App() {
  return (
    <div className="App">
      {/* 你的应用内容 */}
      
      {/* AI悬浮球 */}
      <AiChatBubbleWrapper apiUrl="https://your-api.com/chat" />
    </div>
  );
}

export default App;
```

## 🔧 配置选项

### API接口要求
```typescript
// POST /chat
{
  "messages": [
    {
      "role": "user",
      "content": "用户消息"
    }
  ]
}

// 响应格式
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "AI回复",
        "tool_calls": [
          // 可选的工具调用
        ]
      }
    }
  ]
}
```

### 环境变量配置
```bash
# .env
NUXT_PUBLIC_AI_API_URL=https://your-api.com/chat
```

### 浏览器兼容性
- **Chrome 25+** - 完整支持
- **Firefox 44+** - 完整支持  
- **Safari 14.1+** - 完整支持
- **Edge 79+** - 完整支持

> **注意**：语音识别功能需要HTTPS环境或localhost

## 🎨 样式定制

### CSS变量定制
```css
.ai-bubble-container {
  /* 悬浮球颜色 */
  --bubble-bg: linear-gradient(45deg, #7b64d3, #5a8cf3);
  
  /* 聊天面板尺寸 */
  --panel-width: 400px;
  --panel-height: 520px;
  
  /* 主题色 */
  --primary-color: #007bff;
  --success-color: #4caf50;
}
```

### 响应式适配
```css
@media (max-width: 768px) {
  .chat-panel {
    width: 90vw;
    height: 70vh;
    left: 5vw;
  }
}
```

## 🚨 故障排除

### 常见问题

#### 1. 语音识别不工作
```bash
# 检查浏览器支持
console.log('支持语音识别:', !!window.SpeechRecognition || !!window.webkitSpeechRecognition)

# 检查权限
navigator.permissions.query({name: 'microphone'})
```

#### 2. 网络错误处理
当遇到网络问题时，系统会自动降级到MediaRecorder模式，记录音频但不进行实时识别。

#### 3. 跨域问题
```javascript
// vite.config.ts
export default defineConfig({
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
      'Cross-Origin-Opener-Policy': 'unsafe-none'
    }
  }
})
```

### 调试模式
打开浏览器控制台查看详细日志：
- `[ASR]` - 语音识别相关
- `[流式输入]` - 实时文本更新
- `[语音指令]` - 指令处理
- `[自动发送]` - 自动发送逻辑
- `[存储]` - 数据持久化

## 📄 许可证

MIT License

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目！

### 开发环境设置
```bash
# 开发模式
pnpm run dev

# 构建测试
pnpm run build:wc

# 类型检查
pnpm run type-check
```

---

> **提示**：首次使用时，浏览器会请求麦克风权限，请确保允许访问以使用语音功能。

