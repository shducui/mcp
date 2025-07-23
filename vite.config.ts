// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // 确保这里导入了 vue

import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        // 这个选项通常用于 Web Components
        // 告诉 Vue 编译器不要将 style 标签内容注入到组件内部
        // 而是期望样式通过外部 CSS 文件加载
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'), // 识别自定义元素
        },
      },
      // 进一步尝试控制 CSS 编译行为
      // 注意: 以下选项可能需要根据您的 Vue 和 Vite 版本进行调整和测试
      style: {
        // 如果设置为 true，将不会将 scoped CSS 注入到 JS 中
        // 但您的 `<style>` 已经没有 scoped，所以这里可能不是直接原因
        // 这里只是为了确保没有隐藏的注入行为
        // 某些旧版本可能没有此选项或行为不同
     
      },
      // 对于 Web Component 模式，可以尝试禁用 CSS 代码分割，确保样式被内联处理（与之前尝试的方向一致）
      // 虽然您说 `main.css` 没有 `data-v-`，但可能 JS 仍然在处理 `data-v-`
      // 如果禁用 CSS 注入和 CSS 代码分割，理论上不应该生成 CSS 文件，样式应该完全由 JS 处理
      // 但您的需求是外部 CSS，所以这个地方需要权衡
    }),
  ],
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
    // 强制将 CSS 提取到单独的文件，并命名为 ai-chat-bubble.css
    // 这里的目的不是内联，而是确保 CSS 文件能正确生成且没有data-v-
    cssCodeSplit: true, // 保持为 true，以生成外部 CSS 文件
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'ai-chat-bubble.css'; // 强制 CSS 文件名
          }
          return assetInfo.name ?? '[name]-[hash][extname]';
        },
      },
    },
    sourcemap: false,
  },
});