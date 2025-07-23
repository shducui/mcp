// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
      template: { compilerOptions: { scopeId: '' } }
    }),
  ],
  define: {
    'process.env': {}
  },
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/AiChatBubble.vue',
      name: 'ai-chat-bubble',
      formats: ['es'],
      fileName: 'ai-chat-bubble'
    },
    // **** 关键改动：禁用 CSS 代码分割，让 CSS 内联到 JS 中 ****
    cssCodeSplit: false, 
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        // **** 移除 CSS 文件的 assetFileNames 规则，因为它不再是独立文件 ****
        assetFileNames: (assetInfo) => {
          // if (assetInfo.name && assetInfo.name.endsWith('.css')) {
          //   return 'ai-chat-bubble.css'; // 这行现在不需要了
          // }
          return assetInfo.name ?? '[name]-[hash][extname]';
        },
      },
    },
    sourcemap: false,
  },
})