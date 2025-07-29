// server/api/chat.ts
import { H3Event } from 'h3';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai'; // 从 'ai' 核心包导入
import { z } from 'zod';

// 从 runtimeConfig 读取 apiKey，这是 Nuxt 的最佳实践
// const apiKey = useRuntimeConfig().deepseekApiKey;
const apiKey = useRuntimeConfig().OPENAI_API_KEY;

// const openai = createOpenAI({
//   apiKey: apiKey, 
//   baseURL: 'https://api.deepseek.com/v1',
// });

const openai = createOpenAI({
  apiKey: apiKey, 
  baseURL: 'https://api-gpt-ge.apifox.cn/v1',
});

export default defineEventHandler(async (event: H3Event) => {
  // 确保 OPTIONS 预检请求能被正确处理
  if (event.node.req.method === 'OPTIONS') {
    // 预检请求的处理可以交给 vercel.json，或者在这里简单处理
    event.node.res.statusCode = 204;
    event.node.res.end();
    return;
  }
  
  const { messages } = await readBody(event);
console.log('[API/chat] 收到消息：', JSON.stringify(messages, null, 2));
  // 使用最核心的 streamText 函数
  const result = await streamText({
    // model: openai('deepseek-chat'),
    model: openai('gpt-4o'),
    messages,
    system:`
你是网站智能助手。

**当用户要求跳转页面时，一定** 调用 navigateToPage 工具，参数 pageName 必须是：
  portfolio, about, contact, blog, archives

不要直接回答“好的”，也不要写普通文字，直接调用工具即可：
 
{"toolName":"navigateToPage","args":{"pageName":"about"}}

同样，放大图片时调用 zoomInOnPhoto。
`,
    // 工具定义保持不变
    tools: {
      navigateToPage: {
        description:  '用于将用户导航或跳转到网站的特定页面。接收一个页面名称作为参数。',
        parameters: z.object({
          pageName: z.enum(['portfolio', 'about', 'contact', 'blog', 'archives']),
        }),
        execute: async ({ pageName }) => ({ page: pageName }),
      },
      zoomInOnPhoto: {
        description: '用于放大显示用户指定的某一张照片。接收照片的标题作为参数。',
        parameters: z.object({
          photoTitle: z.string().describe('照片的标题'),
        }),
        execute: async ({ photoTitle }) => ({ title: photoTitle }),
      },
        add: tool({
            description: '计算两个数字的和。',
            parameters: z.object({
              a: z.number().describe('第一个数字'),
              b: z.number().describe('第二个数字'),
            }),
            execute: async ({ a, b }) => {
              console.log(`[Tool Executed] add: a=${a}, b=${b}`);
              return { result: a + b };
            },
          }),

           rollDice: tool({
            description: '摇一个或多个六面骰子，并返回结果。',
            parameters: z.object({
              count: z.number().min(1).max(100).describe('要摇的骰子数量'),
            }),
            execute: async ({ count }) => {
              console.log(`[Tool Executed] rollDice: count=${count}`);
              const results = [];
              let total = 0;
              for (let i = 0; i < count; i++) {
                const roll = Math.floor(Math.random() * 6) + 1;
                results.push(roll);
                total += roll;
              }
              // 返回一个结构化的结果
              return {
                count,
                results,
                total,
              };
            },
          }),

    },
  });
console.log('[API/chat] 已调用 streamText，准备返回流');
  // 使用 toDataStreamResponse 将完整的、包含所有消息部分的流返回给前端
  return result.toDataStreamResponse();
});