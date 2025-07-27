// server/api/assistant.ts
import { H3Event } from 'h3';
import { createOpenAI } from '@ai-sdk/openai';
import { streamUI } from 'ai/rsc';
import { z } from 'zod';

const openai = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY, // 从环境变量直接读取
  baseURL: 'https://api.deepseek.com/v1',
});

export default defineEventHandler(async (event: H3Event) => {
  const { messages } = await readBody(event);

  // streamUI 是 useAssistant 配套的后端函数
  const result = await streamUI({
    model: openai('deepseek-chat'),
    messages,
    // System Prompt 可以在这里提供
    system: `你是一个部署在网站上的智能助手。
             你的任务是与用户聊天并根据指令调用工具来控制网页。
             当用户想要切换页面时，必须使用 navigateToPage 工具。
             当用户想要放大照片时，必须使用 zoomInOnPhoto 工具。`,
    tools: {
      // 工具的定义和之前完全一样
      navigateToPage: {
        description: '当用户想要切换或导航到网站的某个特定页面时使用此工具。',
        parameters: z.object({
          pageName: z.enum(['portfolio', 'about', 'contact', 'blog', 'archives'])
            .describe('目标页面的名称。`portfolio` 是作品集/首页，`blog` 是感官日志。'),
        }),
        // generate 函数是可选的，这里我们不需要它，因为跳转在前端完成
        async *generate({ pageName }) {
          // 这个函数可以用来在UI中显示一个加载状态
          yield `好的，正在为您跳转到 ${pageName} 页面...`;
          // 返回最终结果，这个结果会传递给前端
          return { page: pageName };
        }
      },
      zoomInOnPhoto: {
        description: '当用户想要放大、查看或聚焦某一张照片时使用此工具。',
        parameters: z.object({
          photoTitle: z.string().describe('用户想要放大的照片的标题，例如 "老街时光"。'),
        }),
        async *generate({ photoTitle }) {
          yield `好的，正在为您放大《${photoTitle}》。`;
          return { title: photoTitle };
        }
      }
    },
  });

  return result;
});