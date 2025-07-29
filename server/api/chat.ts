// server/api/chat.ts
import { H3Event } from 'h3';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai'; // 从 'ai' 核心包导入
import { z } from 'zod';

// 从 runtimeConfig 读取 apiKey，这是 Nuxt 的最佳实践
const apiKey = useRuntimeConfig().deepseekApiKey;

const openai = createOpenAI({
  apiKey: apiKey, 
  baseURL: 'https://api.deepseek.com/v1',
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

  // 使用最核心的 streamText 函数
  const result = await streamText({
    model: openai('deepseek-chat'),
    messages,
    system:`你是一个功能强大的网站智能助手。你的主要任务是理解用户意图并调用合适的工具来执行操作，而不是进行闲聊。
可用页面列表如下：
- 'portfolio': 作品集或主页
- 'about': 关于我页面
- 'contact': 联系方式页面
- 'blog': 感官日志页面
- 'archives': 历史存档页面

【指令规则】
1. 当用户的意图是切换、跳转、打开、导航或查看任何一个可用页面时，你 **必须** 使用 'navigateToPage' 工具。例如，当用户说“看看你的作品”、“关于你”、“怎么联系你”或“跳转到博客”，都必须调用此工具。
2. 当用户的意图是放大、查看大图或聚焦某张照片时，你 **必须** 使用 'zoomInOnPhoto' 工具。
3. 对于计算或摇骰子等其他任务，使用对应的工具。
4. **不要** 自己编造页面名称或图片标题。严格使用工具参数中定义的枚举值或用户提供的标题。
5. 完成工具调用后，用简洁的语言确认操作已执行即可。`,
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

  // 使用 toDataStreamResponse 将完整的、包含所有消息部分的流返回给前端
  return result.toDataStreamResponse();
});