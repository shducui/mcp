import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'AiChatBubble',
      fileName: (format) => `ai-chat-bubble.${format}.js`,
      formats: ['es', 'umd'],
    },
    // 删除或注释掉整个 rollupOptions.external 和 output.globals
    
    rollupOptions: {
      // external: ['vue'], // <--- 删除这一行
      output: {
        globals: {
          // vue: 'Vue', // <--- 删除这一行
        },
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'ai-chat-bubble.css';
          }
          return assetInfo.name ?? 'asset-[name][extname]';
        },
      },
    },
  },
});