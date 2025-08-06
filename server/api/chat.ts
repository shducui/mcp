// server/api/chat.ts
import { H3Event } from 'h3';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai'; // 从 'ai' 核心包导入
import { z } from 'zod';
import fetch from 'node-fetch'; 

// 从 runtimeConfig 读取 apiKey，这是 Nuxt 的最佳实践
// const apiKey = useRuntimeConfig().deepseekApiKey;
const apiKey = useRuntimeConfig().OPENAI_API_KEY;
const kanbanApiBaseUrl = 'http://localhost:3132';
// const openai = createOpenAI({
//   apiKey: apiKey, 
//   baseURL: 'https://api.deepseek.com/v1',
// });

const openai = createOpenAI({
  apiKey: apiKey, 
  baseURL: 'https://api.v3.cm/v1',
});


// 定义一个通用的API调用函数，用于和看板API交互
async function callKanbanApi(endpoint: string, params: Record<string, string> = {}) {
  if (!kanbanApiBaseUrl) {
    throw new Error('KANBAN_API_BASE_URL 环境变量未设置');
  }
  
  const queryParams = new URLSearchParams(params);
  const url = `${kanbanApiBaseUrl}${endpoint}?${queryParams.toString()}`;
  console.log(`[Kanban API Caller] Calling: ${url}`);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API请求失败，状态码: ${response.status}`);
    }
    const result = await response.json() as { success: boolean; error?: string; data?: any };
    if (!result.success) {
      throw new Error(`API返回错误: ${result.error}`);
    }
    return result.data; // 直接返回data字段的内容
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : String(error);
    console.error(`[Kanban API Caller] 调用失败: ${errorMessage}`);
    return { error: `无法获取数据: ${errorMessage}` };
  }
}


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
      system:`你是一个部署在名为 "KANBAN" 的复杂生产管理系统中的智能助手。
      你的核心任务是根据用户的语音或文字指令，调用工具来快速导航到系统的各个功能页面。

      【指令规则】
      1. 当用户的意图是导航、跳转、打开、查看任何一个功能页面时，你 **必须** 使用 'navigateToPage' 工具。
      2. 你必须从下面的可用路径列表中选择一个完全匹配的路径作为参数。**严禁** 编造路径或猜测路径。
      3. 例如：用户说“带我去看用户管理”，你应该调用工具并传入路径 '/admin/system/users'。用户说“首页”或“仪表板”，你应该传入 '/dashboard'。
      4. 完成工具调用后，用简洁的语言确认操作即可。
      5. 当用户询问概览、统计或整体情况时，调用 'getDashboardStats' 工具。
      6. 当用户询问具体的工单列表或按状态查询工单时，调用 'getWorkOrders' 工具。
      7. 当用户询问某个生产线的具体情况时，可以将生产线ID作为参数传给相应工具。
      8. 获取到JSON数据后，你需要将其中的关键信息（如总数、状态分布、效率等）提炼出来，形成一段通俗易懂的总结。
      9. 在总结后，可以建议用户导航到相关的看板页面查看图表。

      【可用路径列表】
      - '/dashboard': 主仪表板/首页
      - '/dashboard/rcps': RCPS管理
      - '/dashboard/production-office': 生产办公室
      - '/dashboard/workshop': 车间看板
      `,
      tools: {

         getDashboardStats: {
          description: '获取仪表板的全局实时统计数据，包括工单总数、各状态工单数量、工作站状态分布、生产效率等。',
          parameters: z.object({
            // 参照API文档，可以添加 startDate, endDate, lineId 等可选参数
            lineId: z.string().optional().describe('可选的生产线ID，用于筛选特定生产线的数据'),
          }),
          execute: async ({ lineId }) => {
            const params: Record<string, string> = {};
            if (lineId) params.lineId = lineId;
            // 调用 /api/dashboard/stats 接口
            return await callKanbanApi('/api/dashboard/stats', params);
          },
        },
        // 工具二：获取工单列表
        getWorkOrders: {
          description: '获取工单列表，支持按状态、优先级等条件进行筛选。',
          parameters: z.object({
            status: z.enum(['PENDING', 'RUNNING', 'PAUSED', 'COMPLETED', 'CANCELLED']).optional().describe('工单状态筛选'),
            priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional().describe('工含优先级筛选'),
            lineId: z.string().optional().describe('生产线ID筛选'),
          }),
          execute: async ({ status, priority, lineId }) => {
            const params: Record<string, string> = {};
            if (status) params.status = status;
            if (priority) params.priority = priority;
            if (lineId) params.lineId = lineId;
            // 调用 /api/production/work-orders 接口
            return await callKanbanApi('/api/production/work-orders', params);
          },
        },


        navigateToPage: tool({
          description: '用于将用户导航或跳转到网站的特定页面',
          parameters: z.object({
            path:z.enum([
              '/dashboard',
              '/dashboard/rcps',
              '/dashboard/production-office',
              '/dashboard/workshop',
              // '/admin',
              // '/admin/infrastructure/production-lines',
              // '/admin/infrastructure/work-stations',
              // '/admin/production/products',
              // '/admin/production/work-orders',
              // '/admin/system/users',
              // '/admin/system/roles',
              // '/admin/system/departments',
            ]).describe('目标页面的URL路径，必须从可用路径列表中严格选择。'),
          }),
          execute: async ({ path }) => {
            console.log(`[ToolExecuted][navigateToPage] path = ${path}`);
            return { path: path, success: true };
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