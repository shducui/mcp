// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt'
// import vueCustomElement from '@vitejs/plugin-vue-custom-element'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    // openaiApiKey: process.env.OPENAI_API_KEY,
    deepseekApiKey: process.env.DEEPSEEK_API_KEY,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],
  ssr: false, // Web Component 只能在客户端渲染，所以关闭 SSR

  vite: {
    build: {
      // 开启库模式
      lib: {
        entry: 'entry-wc.js', // 指向我们的 Web Component 入口文件
        name: 'AiFloatingBall', // 库的全局变量名
        fileName: 'ai-ball', // 输出的文件名
        formats: ['es', 'umd'], // 输出格式，'es' 是现代浏览器模块格式
      },
      // 确保 CSS 也被打包
      cssCodeSplit: false,
    },
    define: {
        // 定义一个全局变量来告诉组件它正在以 Web Component 模式运行
        'process.env.NODE_ENV': JSON.stringify('production'),
        '__VUE_PROD_DEVTOOLS__': false,
    },
  },

  // Nuxt 3.8+ 可能需要如下配置来启用 WC 模式
  experimental: {
      componentIslands: true,
      payloadExtraction: false,
  },
  vue: {
      compilerOptions: {
          isCustomElement: (tag: string) => tag.includes('-'),
      },
  },

  nitro: {
    preset: 'vercel', // 确保这里是 'vercel' 或 'vercel-edge'
  }


})