// server/api/chat.ts
import { defineLazyEventHandler, defineEventHandler, readBody } from 'h3';
import { useRuntimeConfig } from '#imports';
//#imports 是 Nuxt3 特有的自动导入机制，useRuntimeConfig() 读取运行时配置（如 API 密钥等敏感信息）。
import { streamText, tool, CoreMessage } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';// TypeScript 的类型校验库，用于定义工具参数的类型结构。
import { experimental_createMCPClient as createMCPClient } from 'ai';
import path from 'path'; 
import { Experimental_StdioMCPTransport as StdioMCPTransport } from 'ai/mcp-stdio';
import fetch from 'node-fetch';


//这是一个懒加载事件处理器，表示服务器首次访问 /api/chat 时才会真正加载这个函数。
//async 表示这是一个异步函数。await 表示等待这个操作完成（比如网络请求），等返回结果后再往下执行。
/*异步函数就是不会“卡住”整个程序执行的函数，它可以在执行耗时操作（比如：网络请求、文件读写）时，
 把控制权“交还给程序”，先去做别的事，等结果回来了再继续这个进程处理。*/
export default defineLazyEventHandler(async () => {
  console.log('Lazy event handler for /api/chat is being set up.');//在开发时输出信息到控制台
  ////////////////////////////
  //数据准备部分
  const apiKey = useRuntimeConfig().deepseekApiKey;
  if (!apiKey) {
    console.error('CRITICAL ERROR: API_KEY is missing or undefined!');
    throw new Error('Missing API key');
  } else {
    console.log(`API Key successfully loaded. Starts with: ${apiKey.substring(0, 5)}...`);
  }
  const openai = createOpenAI({
    apiKey,
    baseURL: 'https://api.deepseek.com/v1',
  });
//创建一个mcpclient，通过标准输入输出（stdio）kokoro工具服务的 index.js。
const kokoroClient=await createMCPClient({
  transport: new StdioMCPTransport({
    command: 'node',
    args: ['D:\\affair\\kokoro_mcp\\build\\index.js'],
  }),
});
//获取 kokoro 工具集（例如 text_to_speech）
const kokoroTool = await kokoroClient.tools();


///////////////////////////////
//用户调用 /api/chat 接口时的具体处理过程。
  return defineEventHandler(async (event) => {
    console.log('Received a new request to /api/chat.');

    try {
      const { messages: userMessages } = await readBody<{ messages: CoreMessage[] }>(event);
      console.log('Request body parsed. Messages received:', userMessages.length);

    //插入一个 systemMessage 来告诉 AI 当前上下文的行为规范（比如如何返回语音）
    const systemMessage: CoreMessage = {
      role: 'system',
      content: ['你是一个智能助手。当调用 text_to_speech 工具成功后，直接输出音频的 <audio> HTML 标签，格式：<audio controls src="音频URL"></audio>，不要任何额外说明。',
                '除非用户明确要求“转换为语音”，否则不要调用任何语音合成工具。'].join('\n\n'),
    };
    const messages: CoreMessage[] = [systemMessage, ...userMessages];

      const result = await streamText({
        model: openai('deepseek-chat'),
        messages,
        tools: {
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

          text_to_speech: kokoroTool.text_to_speech,//把获取到的kokoro工具加到ai的工具集中。
        }
      });

      return result.toDataStreamResponse();//流式响应后端边生成边返回，一段一段“流”给前端
    } catch (error) {//错误处理逻辑，保证即使 AI 出错也能返回合理的 JSON 报错信息。
      console.error('An error occurred in the chat handler:', error);
      return new Response(
        JSON.stringify({
          error: 'An internal server error occurred.',
          details: error instanceof Error ? error.message : 'Unknown error',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  });
});
