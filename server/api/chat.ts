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
  baseURL: 'https://api.v3.cm/v1',
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
  
  // 移除消息清理逻辑，直接使用原始消息
  try {
    // 使用最核心的 streamText 函数
    const result = await streamText({
      model: openai('gpt-4'),
      messages,
      maxSteps: 5, // 添加这个参数，允许AI在工具调用后继续生成响应
      system:`
你是网站智能助手。

**重要：当你调用任何工具后，必须立即向用户报告工具执行的结果，不要等待用户追问。**

**当用户要求跳转页面时，必须调用 navigateToPage 工具**，参数 pageName 必须是：
  portfolio, about, contact, blog, archives

用户说"跳转到关于我"、"关于我"、"about"时，调用 navigateToPage 工具，参数为 "about"
用户说"跳转到首页"、"主页"、"portfolio"时，调用 navigateToPage 工具，参数为 "portfolio"  
用户说"跳转到联系方式"、"联系"、"contact"时，调用 navigateToPage 工具，参数为 "contact"

**当用户要求放大图片时，调用 zoomInOnPhoto 工具**
**当用户要求缩小图片、关闭图片、恢复图片等时，调用 zoomOutPhoto 工具**

**摇骰子工具使用后，必须告诉用户具体的点数结果和总数。**

跳转成功后，不要说"页面已跳转"之类的话，而是要根据当前页面内容来回应用户。
`,
      tools: {
        navigateToPage: tool({
          description: '用于将用户导航或跳转到网站的特定页面',
          parameters: z.object({
            pageName: z.enum(['portfolio', 'about', 'contact', 'blog', 'archives']),
          }),
          execute: async ({ pageName }) => {
            console.log(`[ToolExecuted][navigateToPage] pageName = ${pageName}`);
            return { page: pageName, success: true };
          },
        }),
        zoomInOnPhoto: tool({
          description: '用于放大显示用户指定的某一张照片',
          parameters: z.object({
            photoTitle: z.string().describe('照片的标题'),
          }),
          execute: async ({ photoTitle }) => {
            console.log(`[ToolExecuted][zoomInOnPhoto] photoTitle = ${photoTitle}`);
            return { title: photoTitle };
          },
        }),
        zoomOutPhoto: tool({
          description: '用于缩小或关闭当前放大的图片，恢复到正常显示状态',
          parameters: z.object({
            action: z.enum(['close', 'restore']).optional().describe('操作类型：关闭或恢复'),
          }),
          execute: async ({ action = 'close' }) => {
            console.log(`[ToolExecuted][zoomOutPhoto] action = ${action}`);
            return { action, success: true };
          },
        }),
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
          description: '摇一个或多个六面骰子，并返回结果。调用后必须向用户报告具体的点数。',
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
      // 工具调用轮次配置已移除，避免类型错误
    });

    console.log('[API/chat] 已调用 streamText，准备返回流');
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('[API/chat] StreamText 错误:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'AI处理失败，请重试'
    });
  }
});