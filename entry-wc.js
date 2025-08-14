import { defineCustomElement } from 'vue';
import AiChatBubble from './src/AiChatBubble.vue';

// 将 Vue 组件转换为 Web Component
const AiChatBubbleElement = defineCustomElement(AiChatBubble);

// 注册为 ai-chat-bubble（与使用时保持一致）
customElements.define('ai-chat-bubble', AiChatBubbleElement);

// 导出以便使用
export { AiChatBubbleElement };