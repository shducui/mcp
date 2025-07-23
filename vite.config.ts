// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],

  define: {
    'process.env': {}
  },

  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'AiChatBubble',
      fileName: (format) => `ai-chat-bubble.${format}.js`,
      formats: ['es', 'umd'],
    },
    cssCodeSplit: true, // <--- 确保这一行存在且为 true，强制进行 CSS 代码分割
    rollupOptions: {
      // external: ['vue'], // 继续保持注释，以便打包Vue
      output: {
        // globals: { 'vue': 'Vue' }, // 继续保持注释
        inlineDynamicImports: true,
        
        // 确保 CSS 文件被命名并输出
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') { // Vite 默认将所有 CSS 合并到 style.css
            return 'ai-chat-bubble.css'; // 将其重命名为您想要的名称
          }
          return assetInfo.name ?? 'asset-[name][extname]';
        },
      },
    },
    sourcemap: false,
  },
});