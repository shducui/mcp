import { d as defineEventHandler, s as setHeader, c as createError, r as readBody, a as useRuntimeConfig } from '../../_/nitro.mjs';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:url';
import 'ipx';

// https://github.com/node-fetch/node-fetch
// Native browser APIs
const fetch = (...args) => globalThis.fetch(...args);
// Top-level exported helpers (from node-fetch v3)
const redirectStatus = new Set([
	301,
	302,
	303,
	307,
	308
]);
const isRedirect = (code) => redirectStatus.has(code);
// node-fetch v2
fetch.Promise = globalThis.Promise;
fetch.isRedirect = isRedirect;

const apiKey = useRuntimeConfig().OPENAI_API_KEY;
const kanbanApiBaseUrl = "http://localhost:3132";
const openai = createOpenAI({
  apiKey,
  baseURL: "https://api.v3.cm/v1"
});
async function callKanbanApi(endpoint, params = {}) {
  const queryParams = new URLSearchParams(params);
  const url = `${kanbanApiBaseUrl}${endpoint}?${queryParams.toString()}`;
  console.log(`[Kanban API Caller] Calling: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801: ${response.status}`);
    }
    const result = await response.json();
    if (!result.success) {
      throw new Error(`API\u8FD4\u56DE\u9519\u8BEF: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`[Kanban API Caller] \u8C03\u7528\u5931\u8D25: ${errorMessage}`);
    return { error: `\u65E0\u6CD5\u83B7\u53D6\u6570\u636E: ${errorMessage}` };
  }
}
const chat = defineEventHandler(async (event) => {
  if (event.node.req.method === "OPTIONS") {
    setHeader(event, "Access-Control-Allow-Origin", "*");
    setHeader(event, "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    setHeader(event, "Access-Control-Allow-Headers", "Content-Type, Authorization");
    return null;
  }
  setHeader(event, "Access-Control-Allow-Origin", "*");
  setHeader(event, "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  setHeader(event, "Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (event.node.req.method === "GET") {
    return {
      message: "AI Chat API is running",
      version: "1.0.0",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      endpoints: {
        chat: "POST /api/chat",
        health: "GET /api/chat"
      }
    };
  }
  if (event.node.req.method !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: `Method ${event.node.req.method} Not Allowed. Use POST for chat requests.`
    });
  }
  const { messages } = await readBody(event);
  console.log("[API/chat] \u6536\u5230\u6D88\u606F\uFF1A", JSON.stringify(messages, null, 2));
  try {
    const result = await streamText({
      // model: openai('gpt-4'),
      model: openai("gpt-3.5-turbo"),
      messages,
      maxSteps: 5,
      // 添加这个参数，允许AI在工具调用后继续生成响应
      system: `\u4F60\u662FKANBAN\u5236\u9020\u7BA1\u7406\u7CFB\u7EDF\u7684\u667A\u80FD\u52A9\u624B\u3002\u4F60\u53EF\u4EE5\uFF1A

\u{1F50D} \u67E5\u8BE2\u529F\u80FD\uFF1A
- \u83B7\u53D6\u751F\u4EA7\u72B6\u6001\u3001\u5DE5\u4F5C\u7AD9\u72B6\u6001
- \u67E5\u8BE2\u5DE5\u5355\u8FDB\u5EA6\u548C\u4EA7\u54C1\u4FE1\u606F  
- \u68C0\u67E5\u8D28\u91CF\u6570\u636E\u548C\u5B89\u706F\u8B66\u62A5
- \u67E5\u770B\u8F66\u95F4\u4EEA\u8868\u677F\u548C\u7EDF\u8BA1\u6570\u636E
- \u83B7\u53D6\u6D41\u7A0B\u6A21\u677F\u548C\u5DE5\u5355\u72B6\u6001
- \u67E5\u8BE2\u7528\u6237\u548C\u90E8\u95E8\u4FE1\u606F

\u{1F9ED} \u5BFC\u822A\u529F\u80FD\uFF1A
- \u8DF3\u8F6C\u5230\u7CFB\u7EDF\u5404\u4E2A\u9875\u9762\u6A21\u5757

\u26A0\uFE0F \u91CD\u8981\u63D0\u9192\uFF1A\u4F60\u53EA\u80FD\u67E5\u8BE2\u548C\u663E\u793A\u6570\u636E\uFF0C\u65E0\u6CD5\u521B\u5EFA\u3001\u4FEE\u6539\u6216\u5220\u9664\u4EFB\u4F55\u8BB0\u5F55\u3002
\u{1F4CA} **\u56DE\u7B54\u6A21\u677F**\uFF1A
\u56DE\u7B54\u7528\u6237\u95EE\u9898\u65F6\uFF0C\u5FC5\u987B\u6309\u7167\u4EE5\u4E0B\u683C\u5F0F\uFF1A

[\u6570\u636E\u5185\u5BB9 - \u6BCF\u4E2A\u8981\u70B9\u5355\u72EC\u4E00\u884C]

 \u3010\u6307\u4EE4\u89C4\u5219\u3011
      1.  \u6839\u636E\u7528\u6237\u610F\u56FE\u8C03\u7528\u76F8\u5E94\u5DE5\u5177\u83B7\u53D6\u6570\u636E\u6216\u6267\u884C\u5BFC\u822A\u3002
      2.  **\u5355\u6B21\u64AD\u62A5**: \u5982\u679C\u7528\u6237\u7684\u8BF7\u6C42\u4E2D\u660E\u786E\u5305\u542B\u201C\u8BED\u97F3\u64AD\u62A5\u201D\u3001\u201C\u8BFB\u51FA\u6765\u201D\u3001\u201C\u7528\u8BED\u97F3\u56DE\u7B54\u201D\u7B49\u5173\u952E\u8BCD\uFF0C\u4F60\u5FC5\u987B\u5728\u751F\u6210\u6700\u7EC8\u6587\u672C\u56DE\u590D\u7684\u540C\u65F6\uFF0C\u8C03\u7528 'speakOnce' \u5DE5\u5177\uFF0C\u5E76\u5C06\u5B8C\u6574\u7684\u56DE\u590D\u6587\u672C\u4F5C\u4E3A textToSpeak \u53C2\u6570\u3002
      3.  **\u6A21\u5F0F\u5207\u6362**: \u5982\u679C\u7528\u6237\u8BF7\u6C42\u201C\u5F00\u542F\u8BED\u97F3\u6A21\u5F0F\u201D\u3001\u201C\u6717\u8BFB\u6A21\u5F0F\u201D\u3001\u201C\u540E\u7EED\u90FD\u7528\u8BED\u97F3\u56DE\u7B54\u201D\uFF0C\u4F60\u5FC5\u987B\u8C03\u7528 'toggleSpeechMode' \u5DE5\u5177\uFF0C\u5E76\u5C06 a'c'tion \u53C2\u6570\u8BBE\u4E3A 'on'\u3002\u5982\u679C\u7528\u6237\u8BF7\u6C42\u201C\u5173\u95ED\u8BED\u97F3\u6A21\u5F0F\u201D\uFF0C\u5219\u5C06 a'c'tion \u8BBE\u4E3A 'off'\u3002
      4.  \u603B\u7ED3\u6570\u636E\u540E\uFF0C\u603B\u662F\u5EFA\u8BAE\u7528\u6237\u53EF\u4EE5\u5BFC\u822A\u5230\u76F8\u5173\u9875\u9762\u67E5\u770B\u8BE6\u60C5\u3002
\u5E38\u7528\u9875\u9762\u8DEF\u5F84\uFF1A
- '/dashboard': \u4E3B\u4EEA\u8868\u677F
- '/dashboard/rcps': RCPS\u7BA1\u7406  
- '/dashboard/production-office': \u751F\u4EA7\u529E\u516C\u5BA4
- '/dashboard/workshop': \u8F66\u95F4\u770B\u677F

\u8BF7\u6839\u636E\u7528\u6237\u9700\u6C42\u8C03\u7528\u76F8\u5E94\u5DE5\u5177\uFF0C\u5E76\u4EE5\u53CB\u597D\u6613\u61C2\u7684\u65B9\u5F0F\u89E3\u91CA\u67E5\u8BE2\u7ED3\u679C\u3002`,
      tools: {
        speakOnce: {
          description: "\u5F53\u7528\u6237 **\u5355\u6B21** \u8BF7\u6C42\u8BED\u97F3\u64AD\u62A5\u3001\u6717\u8BFB\u6216\u7528\u8BED\u97F3\u56DE\u7B54\u65F6\uFF0C\u4F7F\u7528\u6B64\u5DE5\u5177\u6765\u6807\u8BB0\u9700\u8981\u8FDB\u884C\u8BED\u97F3\u5408\u6210\u7684\u6587\u672C\u3002",
          parameters: z.object({
            textToSpeak: z.string().describe("\u9700\u8981\u88AB\u8BED\u97F3\u64AD\u62A5\u7684\u5B8C\u6574\u56DE\u590D\u5185\u5BB9\u3002")
          }),
          execute: async ({ textToSpeak }) => {
            console.log(`[ToolExecuted][speakOnce] \u51C6\u5907\u5355\u6B21\u64AD\u62A5: ${textToSpeak}`);
            return { text: textToSpeak, mode: "once" };
          }
        },
        toggleSpeechMode: {
          description: "\u7528\u4E8E\u5F00\u542F\u6216\u5173\u95ED\u5168\u5C40\u7684\u8FDE\u7EED\u8BED\u97F3\u64AD\u62A5\u6A21\u5F0F\u3002",
          parameters: z.object({
            action: z.enum(["on", "off"]).describe("\u5F00\u542F\u6A21\u5F0F\u8BBE\u4E3A'on'\uFF0C\u5173\u95ED\u6A21\u5F0F\u8BBE\u4E3A'off'\u3002")
          }),
          execute: async ({ action }) => {
            console.log(`[ToolExecuted][toggleSpeechMode] \u5207\u6362\u64AD\u62A5\u6A21\u5F0F\u4E3A: ${action}`);
            return { mode: "toggle", status: action };
          }
        },
        getProductionStatus: tool({
          description: "\u83B7\u53D6\u5F53\u524D\u751F\u4EA7\u72B6\u6001\u6982\u89C8\uFF0C\u5305\u62EC\u751F\u4EA7\u7EBF\u72B6\u6001\u3001\u5DE5\u4F5C\u7AD9\u72B6\u6001\u7B49",
          parameters: z.object({
            lineId: z.string().optional().describe("\u7279\u5B9A\u751F\u4EA7\u7EBFID")
          }),
          execute: async ({ lineId }) => {
            const params = {};
            if (lineId) params.lineId = lineId;
            return await callKanbanApi("/api/realtime/production-lines", params);
          }
        }),
        getWorkStationStatus: tool({
          description: "\u83B7\u53D6\u5DE5\u4F5C\u7AD9\u5B9E\u65F6\u72B6\u6001\u4FE1\u606F",
          parameters: z.object({
            stationId: z.string().optional().describe("\u7279\u5B9A\u5DE5\u4F5C\u7AD9ID"),
            lineId: z.string().optional().describe("\u751F\u4EA7\u7EBFID\u7B5B\u9009")
          }),
          execute: async ({ stationId, lineId }) => {
            const params = {};
            if (stationId) params.stationId = stationId;
            if (lineId) params.lineId = lineId;
            return await callKanbanApi("/api/realtime/work-stations", params);
          }
        }),
        getQualityStats: tool({
          description: "\u83B7\u53D6\u8D28\u91CF\u7EDF\u8BA1\u6570\u636E\uFF0C\u5305\u62EC\u5408\u683C\u7387\u3001\u68C0\u9A8C\u8BB0\u5F55\u7B49",
          parameters: z.object({
            period: z.enum(["daily", "weekly", "monthly"]).optional().describe("\u7EDF\u8BA1\u5468\u671F"),
            stationId: z.string().optional().describe("\u5DE5\u4F5C\u7AD9ID\u7B5B\u9009")
          }),
          execute: async ({ period, stationId }) => {
            const params = {};
            if (period) params.period = period;
            if (stationId) params.stationId = stationId;
            return await callKanbanApi("/api/quality/stats", params);
          }
        }),
        getQualityInspections: tool({
          description: "\u83B7\u53D6\u8D28\u91CF\u68C0\u9A8C\u8BB0\u5F55",
          parameters: z.object({
            serialNumber: z.string().optional().describe("\u4EA7\u54C1\u5E8F\u5217\u53F7"),
            status: z.string().optional().describe("\u68C0\u9A8C\u72B6\u6001")
          }),
          execute: async ({ serialNumber, status }) => {
            const params = {};
            if (serialNumber) params.serialNumber = serialNumber;
            if (status) params.status = status;
            return await callKanbanApi("/api/quality/inspections", params);
          }
        }),
        getAndonAlerts: tool({
          description: "\u83B7\u53D6\u5F53\u524D\u5B89\u706F\u8B66\u62A5\u4FE1\u606F",
          parameters: z.object({
            status: z.enum(["PENDING", "RESOLVED"]).optional().describe("\u8B66\u62A5\u72B6\u6001"),
            priority: z.enum(["NORMAL", "HIGH", "CRITICAL"]).optional().describe("\u4F18\u5148\u7EA7")
          }),
          execute: async ({ status, priority }) => {
            const params = {};
            if (status) params.status = status;
            if (priority) params.priority = priority;
            return await callKanbanApi("/api/andon/alerts", params);
          }
        }),
        getAndonReports: tool({
          description: "\u83B7\u53D6\u5B89\u706F\u62A5\u544A\u5386\u53F2\u8BB0\u5F55",
          parameters: z.object({
            stationId: z.string().optional().describe("\u5DE5\u4F5C\u7AD9ID"),
            status: z.enum(["PENDING", "RESOLVED"]).optional().describe("\u5904\u7406\u72B6\u6001")
          }),
          execute: async ({ stationId, status }) => {
            const params = {};
            if (stationId) params.stationId = stationId;
            if (status) params.status = status;
            return await callKanbanApi("/api/andon/andon-reports", params);
          }
        }),
        getProductInfo: tool({
          description: "\u6839\u636E\u5E8F\u5217\u53F7\u67E5\u8BE2\u4EA7\u54C1\u4FE1\u606F\u548C\u751F\u4EA7\u5386\u53F2",
          parameters: z.object({
            serialNumber: z.string().describe("\u4EA7\u54C1\u5E8F\u5217\u53F7")
          }),
          execute: async ({ serialNumber }) => {
            return await callKanbanApi("/api/production/products", {
              search: serialNumber
            });
          }
        }),
        getProductionHistory: tool({
          description: "\u83B7\u53D6\u4EA7\u54C1\u7684\u751F\u4EA7\u5C65\u5386\u548C\u8FC7\u7A0B\u8BB0\u5F55",
          parameters: z.object({
            workOrderId: z.string().optional().describe("\u5DE5\u5355ID"),
            serialNumber: z.string().optional().describe("\u4EA7\u54C1\u5E8F\u5217\u53F7")
          }),
          execute: async ({ workOrderId, serialNumber }) => {
            const params = {};
            if (workOrderId) params.workOrderId = workOrderId;
            if (serialNumber) params.search = serialNumber;
            return await callKanbanApi("/api/production/products", params);
          }
        }),
        getProcessTemplates: tool({
          description: "\u83B7\u53D6\u53EF\u7528\u7684\u6D41\u7A0B\u6A21\u677F\u5217\u8868",
          parameters: z.object({
            search: z.string().optional().describe("\u6A21\u677F\u540D\u79F0\u641C\u7D22")
          }),
          execute: async ({ search }) => {
            const params = {};
            if (search) params.search = search;
            return await callKanbanApi("/api/process-management/templates", params);
          }
        }),
        getProcessWorkOrders: tool({
          description: "\u83B7\u53D6\u6D41\u7A0B\u5DE5\u5355\u72B6\u6001\u548C\u8FDB\u5EA6",
          parameters: z.object({
            status: z.string().optional().describe("\u5DE5\u5355\u72B6\u6001")
          }),
          execute: async ({ status }) => {
            const params = {};
            if (status) params.status = status;
            return await callKanbanApi("/api/process-management/work-orders", params);
          }
        }),
        getWorkshopDashboard: tool({
          description: "\u83B7\u53D6\u8F66\u95F4\u4EEA\u8868\u677F\u6570\u636E\u548C\u5B9E\u65F6\u72B6\u6001",
          parameters: z.object({
            workshopId: z.string().optional().describe("\u8F66\u95F4ID")
          }),
          execute: async ({ workshopId }) => {
            const params = {};
            if (workshopId) params.workshopId = workshopId;
            return await callKanbanApi("/api/workshop/dashboard", params);
          }
        }),
        getSystemUsers: tool({
          description: "\u83B7\u53D6\u7CFB\u7EDF\u7528\u6237\u5217\u8868\uFF08\u4EC5\u57FA\u672C\u4FE1\u606F\uFF09",
          parameters: z.object({
            search: z.string().optional().describe("\u7528\u6237\u59D3\u540D\u641C\u7D22")
          }),
          execute: async ({ search }) => {
            const params = {};
            if (search) params.search = search;
            return await callKanbanApi("/api/system/users", params);
          }
        }),
        getDepartments: tool({
          description: "\u83B7\u53D6\u90E8\u95E8\u5217\u8868\u4FE1\u606F",
          parameters: z.object({}),
          execute: async () => {
            return await callKanbanApi("/api/system/departments");
          }
        }),
        getDashboardStats: {
          description: "\u83B7\u53D6\u4EEA\u8868\u677F\u7684\u5168\u5C40\u5B9E\u65F6\u7EDF\u8BA1\u6570\u636E\uFF0C\u5305\u62EC\u5DE5\u5355\u603B\u6570\u3001\u5404\u72B6\u6001\u5DE5\u5355\u6570\u91CF\u3001\u5DE5\u4F5C\u7AD9\u72B6\u6001\u5206\u5E03\u3001\u751F\u4EA7\u6548\u7387\u7B49\u3002",
          parameters: z.object({
            // 参照API文档，可以添加 startDate, endDate, lineId 等可选参数
            lineId: z.string().optional().describe("\u53EF\u9009\u7684\u751F\u4EA7\u7EBFID\uFF0C\u7528\u4E8E\u7B5B\u9009\u7279\u5B9A\u751F\u4EA7\u7EBF\u7684\u6570\u636E")
          }),
          execute: async ({ lineId }) => {
            const params = {};
            if (lineId) params.lineId = lineId;
            return await callKanbanApi("/api/dashboard/stats", params);
          }
        },
        // 工具二：获取工单列表
        getWorkOrders: {
          description: "\u83B7\u53D6\u5DE5\u5355\u5217\u8868\uFF0C\u652F\u6301\u6309\u72B6\u6001\u3001\u4F18\u5148\u7EA7\u7B49\u6761\u4EF6\u8FDB\u884C\u7B5B\u9009\u3002",
          parameters: z.object({
            status: z.enum(["PENDING", "RUNNING", "PAUSED", "COMPLETED", "CANCELLED"]).optional().describe("\u5DE5\u5355\u72B6\u6001\u7B5B\u9009"),
            priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).optional().describe("\u5DE5\u542B\u4F18\u5148\u7EA7\u7B5B\u9009"),
            lineId: z.string().optional().describe("\u751F\u4EA7\u7EBFID\u7B5B\u9009")
          }),
          execute: async ({ status, priority, lineId }) => {
            const params = {};
            if (status) params.status = status;
            if (priority) params.priority = priority;
            if (lineId) params.lineId = lineId;
            return await callKanbanApi("/api/production/work-orders", params);
          }
        },
        navigateToPage: tool({
          description: "\u7528\u4E8E\u5C06\u7528\u6237\u5BFC\u822A\u6216\u8DF3\u8F6C\u5230\u7F51\u7AD9\u7684\u7279\u5B9A\u9875\u9762",
          parameters: z.object({
            path: z.enum([
              "/dashboard",
              "/dashboard/rcps",
              "/dashboard/production-office",
              "/dashboard/workshop"
              // '/admin',
              // '/admin/infrastructure/production-lines',
              // '/admin/infrastructure/work-stations',
              // '/admin/production/products',
              // '/admin/production/work-orders',
              // '/admin/system/users',
              // '/admin/system/roles',
              // '/admin/system/departments',
            ]).describe("\u76EE\u6807\u9875\u9762\u7684URL\u8DEF\u5F84\uFF0C\u5FC5\u987B\u4ECE\u53EF\u7528\u8DEF\u5F84\u5217\u8868\u4E2D\u4E25\u683C\u9009\u62E9\u3002")
          }),
          execute: async ({ path }) => {
            console.log(`[ToolExecuted][navigateToPage] path = ${path}`);
            return { path, success: true };
          }
        }),
        zoomInOnPhoto: tool({
          description: "\u7528\u4E8E\u653E\u5927\u663E\u793A\u7528\u6237\u6307\u5B9A\u7684\u67D0\u4E00\u5F20\u7167\u7247",
          parameters: z.object({
            photoTitle: z.string().describe("\u7167\u7247\u7684\u6807\u9898")
          }),
          execute: async ({ photoTitle }) => {
            console.log(`[ToolExecuted][zoomInOnPhoto] photoTitle = ${photoTitle}`);
            return { title: photoTitle };
          }
        }),
        zoomOutPhoto: tool({
          description: "\u7528\u4E8E\u7F29\u5C0F\u6216\u5173\u95ED\u5F53\u524D\u653E\u5927\u7684\u56FE\u7247\uFF0C\u6062\u590D\u5230\u6B63\u5E38\u663E\u793A\u72B6\u6001",
          parameters: z.object({
            action: z.enum(["close", "restore"]).optional().describe("\u64CD\u4F5C\u7C7B\u578B\uFF1A\u5173\u95ED\u6216\u6062\u590D")
          }),
          execute: async ({ action = "close" }) => {
            console.log(`[ToolExecuted][zoomOutPhoto] action = ${action}`);
            return { action, success: true };
          }
        }),
        add: tool({
          description: "\u8BA1\u7B97\u4E24\u4E2A\u6570\u5B57\u7684\u548C\u3002",
          parameters: z.object({
            a: z.number().describe("\u7B2C\u4E00\u4E2A\u6570\u5B57"),
            b: z.number().describe("\u7B2C\u4E8C\u4E2A\u6570\u5B57")
          }),
          execute: async ({ a, b }) => {
            console.log(`[Tool Executed] add: a=${a}, b=${b}`);
            return { result: a + b };
          }
        }),
        rollDice: tool({
          description: "\u6447\u4E00\u4E2A\u6216\u591A\u4E2A\u516D\u9762\u9AB0\u5B50\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002\u8C03\u7528\u540E\u5FC5\u987B\u5411\u7528\u6237\u62A5\u544A\u5177\u4F53\u7684\u70B9\u6570\u3002",
          parameters: z.object({
            count: z.number().min(1).max(100).describe("\u8981\u6447\u7684\u9AB0\u5B50\u6570\u91CF")
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
            return {
              count,
              results,
              total
            };
          }
        })
      }
      // 工具调用轮次配置已移除，避免类型错误
    });
    console.log("[API/chat] \u5DF2\u8C03\u7528 streamText\uFF0C\u51C6\u5907\u8FD4\u56DE\u6D41");
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("[API/chat] StreamText \u9519\u8BEF:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "AI\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"
    });
  }
});

export { chat as default };
//# sourceMappingURL=chat.mjs.map
