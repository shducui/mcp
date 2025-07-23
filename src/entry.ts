import { defineCustomElement } from 'vue'
import Comp from './AiChatBubble.vue'

const CE = defineCustomElement(Comp)
customElements.define('ai-chat-bubble', CE)