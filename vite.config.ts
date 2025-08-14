import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
      template: { 
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
  ],
  server: {
    port: 3000,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  },
  define: {
    'process.env': {}
  },
  build: {
    target: 'esnext',
    lib: {
      entry: 'entry-wc.js',
      name: 'AiChatBubble',
      formats: ['es', 'umd'],
      fileName: (format) => `ai-chat-bubble.${format}.js`
    },
    outDir: 'public/dist', // 确保输出到 public/dist
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    },
    sourcemap: false,
  }
})