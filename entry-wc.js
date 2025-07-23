// entry-wc.js
import { defineCustomElement } from 'vue';
import YourMainComponent from './src/App.vue'; // 确保指向你的主 Vue 组件

// 1. 将你的主 Vue 组件转换为一个 Web Component 构造器
const AiFloatingBallElement = defineCustomElement(YourMainComponent);

// 2. 在浏览器中注册这个新的自定义 HTML 标签
//    当浏览器在 HTML 中看到 <ai-floating-ball> 时，就会用我们的组件来渲染它
customElements.define('ai-floating-ball', AiFloatingBallElement);