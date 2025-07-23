import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      // 将 .vue 文件编译为可注册的 Custom Element
      customElement: true,
      // 取消默认生成的 scopeId，因为我们要内联样式且不采用 scoped
      template: { compilerOptions: {} }
    }),
  ],
  define: {
    // 兼容 process.env 使用
    'process.env': {}
  },
  build: {
    target: 'esnext',
    lib: {
      // 打包入口指向 Vue SFC，内部会包含 defineCustomElement 注册逻辑
      entry: 'src/entry.ts',
      name: 'AiChatBubble',
      // 输出两种格式：ES Module 和 UMD
      formats: ['es', 'umd'],
      fileName: (format) => `ai-chat-bubble.${format}.js`
    },
    // 禁用 CSS 拆分，样式会内联到 JS 中
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // 保证动态导入被内联，单文件输出
        inlineDynamicImports: true,
      }
    },
    // 可根据需求开启 sourcemap
    sourcemap: false,
  }
})
