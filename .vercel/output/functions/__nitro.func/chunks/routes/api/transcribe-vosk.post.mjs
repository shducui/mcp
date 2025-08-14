import { d as defineEventHandler, c as createError, b as readMultipartFormData } from '../../_/nitro.mjs';
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

const transcribeVosk_post = defineEventHandler(async (event) => {
  if (process.env.VERCEL || process.env.NETLIFY) {
    throw createError({
      statusCode: 501,
      statusMessage: "\u4E91\u5E73\u53F0\u4E0D\u652F\u6301\u670D\u52A1\u5668\u7AEF\u8BED\u97F3\u8BC6\u522B\uFF0C\u8BF7\u4F7F\u7528 Web Speech API"
    });
  }
  try {
    const formData = await readMultipartFormData(event);
    const audioFile = formData == null ? void 0 : formData.find((item) => item.name === "audio");
    if (!audioFile) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u672A\u627E\u5230\u97F3\u9891\u6587\u4EF6"
      });
    }
    return {
      transcript: "\u672C\u5730\u8F6C\u5F55\u529F\u80FD\u9700\u8981\u914D\u7F6E Vosk \u73AF\u5883",
      message: "\u8BF7\u4F7F\u7528 Web Speech API \u8FDB\u884C\u8BED\u97F3\u8BC6\u522B"
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `\u8F6C\u5F55\u5931\u8D25: ${error.message}`
    });
  }
});

export { transcribeVosk_post as default };
//# sourceMappingURL=transcribe-vosk.post.mjs.map
