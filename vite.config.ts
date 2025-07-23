import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'), // Web Component 的入口文件
      name: 'AiChatBubble', // 全局变量名，如果需要
      fileName: (format) => `ai-chat-bubble.${format}.js`,
      formats: ['es', 'umd'], // 同时生成 ES Module 和 UMD 格式
    },
    rollupOptions: {
      external: ['vue'], // 将 Vue 作为外部依赖，如果宿主页面已经有 Vue，可以避免重复打包
      output: {
        globals: {
          vue: 'Vue',
        },
        // 配置 Web Component 的 CSS 文件内联到 JS 中
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'ai-chat-bubble.css'; // 如果需要单独的 CSS 文件
          }
          return assetInfo.name ?? 'asset-[hash][extname]';
        },
      },
    },
  },
});