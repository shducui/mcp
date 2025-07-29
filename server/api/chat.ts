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
    system: `你是一个部署在网站上的智能助手。
             你的任务是与用户聊天并根据指令调用工具来控制网页。
             当用户想要切换页面时，必须使用 navigateToPage 工具。
             当用户想要放大照片时，必须使用 zoomInOnPhoto 工具。`,
    // 工具定义保持不变
    tools: {
      navigateToPage: {
        description: '当用户想要切换或导航到网站的某个特定页面时使用此工具。',
        parameters: z.object({
          pageName: z.enum(['portfolio', 'about', 'contact', 'blog', 'archives']),
        }),
        execute: async ({ pageName }) => ({ page: pageName }),
      },
      zoomInOnPhoto: {
        description: '当用户想要放大、查看或聚焦某一张照片时使用此工具。',
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