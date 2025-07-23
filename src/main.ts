import { defineCustomElement } from 'vue';
import AiChatBubble from './AiChatBubble.vue'; // 确保路径正确

// 创建自定义元素
const AiChatBubbleElement = defineCustomElement(AiChatBubble);

// 注册自定义元素
customElements.define('ai-chat-bubble', AiChatBubbleElement);

// 如果您的组件需要 props，您可以在这里设置默认值或传递
// 或者通过元素的 attribute 来传递
// 例如：document.querySelector('ai-chat-bubble').setAttribute('api-url', '...');
