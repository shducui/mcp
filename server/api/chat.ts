// server/api/chat.ts
import { H3Event } from 'h3';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

// 从 Nuxt 的 runtimeConfig 读取环境变量，这是最佳实践
const apiKey = useRuntimeConfig().OPENAI_API_KEY;

// 使用官方 OpenAI API
const openai = createOpenAI({
  apiKey: apiKey,
});

export default defineEventHandler(async (event: H3Event) => {
  // --- 新增本地开发的 CORS 处理 ---
  if (process.env.NODE_ENV === 'development') {
    // 允许你的看板本地开发服务器的地址访问
    setResponseHeaders(event, {
      'Access-Control-Allow-Origin': 'http://localhost:3132', // ！！！请替换为您看板项目的实际端口
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
  } // <-- 添加此大括号以结束 if 块

  // 处理跨域预检请求
  if (event.node.req.method === 'OPTIONS') {
    event.node.res.statusCode = 204;
    event.node.res.end();
    return;
  }
  
  try {
    const { messages } = await readBody(event);
    console.log('[API/chat] 收到消息：', JSON.stringify(messages, null, 2));

    if (!apiKey) {
      throw new Error("OPENAI_API_KEY 未在服务器端配置！");
    }

    const result = await streamText({
      model: openai('gpt-4o'),
      messages,
      system: `你是一个部署在名为 "KANBAN" 的复杂生产管理系统中的智能助手。
      你的核心任务是根据用户的语音或文字指令，调用工具来快速导航到系统的各个功能页面。

      【指令规则】
      1. 当用户的意图是导航、跳转、打开、查看任何一个功能页面时，你 **必须** 使用 'navigateToPage' 工具。
      2. 你必须从下面的可用路径列表中选择一个完全匹配的路径作为参数。**严禁** 编造路径或猜测路径。
      3. 例如：用户说“带我去看用户管理”，你应该调用工具并传入路径 '/admin/system/users'。用户说“首页”或“仪表板”，你应该传入 '/dashboard'。
      4. 完成工具调用后，用简洁的语言确认操作即可。

      【可用路径列表】
      - '/dashboard': 主仪表板/首页
      - '/dashboard/pms/safety/pyramid': 安全金字塔
      - '/dashboard/pms/quality/fpy-daily': FPY日报
      - '/admin': 管理后台首页
      - '/admin/system/users': 用户管理
      - '/admin/system/roles': 角色管理
      - '/admin/system/departments': 部门管理
      - '/admin/production/products': 产品管理
      - '/admin/production/work-orders': 工单管理`,
      tools: {
        navigateToPage: {
          description: '用于将用户导航或跳转到看板系统的某个特定功能页面。',
          parameters: z.object({
            path: z.enum([
              '/dashboard',
              '/dashboard/pms/safety/pyramid',
              '/dashboard/pms/quality/fpy-daily',
              '/admin',
              '/admin/system/users',
              '/admin/system/roles',
              '/admin/system/departments',
              '/admin/production/products',
              '/admin/production/work-orders',
            ]).describe('目标页面的URL路径，必须从可用路径列表中严格选择。'),
          }),
          execute: async ({ path }) => {
            console.log(`[ToolExecuted][navigateToPage] path = ${path}`);
            return { path: path };
          },
        },
        // 如果看板项目有图片展示功能，可以保留此工具
        zoomInOnPhoto: {
          description: '用于放大显示用户指定的某一张照片。',
          parameters: z.object({
            photoTitle: z.string().describe('照片的标题'),
          }),
          execute: async ({ photoTitle }) => ({ title: photoTitle }),
        },
      },
    });

    console.log('[API/chat] 已调用 streamText，准备返回流');
    return result.toDataStreamResponse();

  } catch (error: any) {
    console.error('[API/chat] 发生严重错误:', error);
    event.node.res.statusCode = 500;
    event.node.res.end(JSON.stringify({ error: 'Internal Server Error', details: error.message }));
  }
});