import { d as defineEventHandler, b as readMultipartFormData } from '../../_/nitro.mjs';
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

const transcribe_post = defineEventHandler(async (event) => {
  const PYTHON_API_URL = "http://127.0.0.1:8000/transcribe";
  try {
    const multipart = await readMultipartFormData(event);
    const audioPart = multipart == null ? void 0 : multipart.find((part) => part.name === "audio");
    if (!audioPart || !audioPart.data) {
      throw new Error("\u627E\u4E0D\u5230\u97F3\u9891\u6570\u636E");
    }
    const formData = new FormData();
    const audioBlob = new Blob([audioPart.data], { type: audioPart.type });
    formData.append("audio_file", audioBlob, audioPart.filename || "recording.webm");
    console.log("\u5C06\u97F3\u9891\u8F6C\u53D1\u5230 Python ASR \u670D\u52A1...");
    const response = await fetch(PYTHON_API_URL, {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Python ASR \u670D\u52A1\u8FD4\u56DE\u9519\u8BEF: ${response.status} - ${errorText}`);
    }
    const result = await response.json();
    console.log("\u4ECE Python ASR \u670D\u52A1\u6536\u5230\u7ED3\u679C:", result);
    return result;
  } catch (error) {
    console.error("\u4EE3\u7406\u5230 ASR \u670D\u52A1\u65F6\u51FA\u9519:", error);
    event.res.statusCode = 500;
    return { error: error.message };
  }
});

export { transcribe_post as default };
//# sourceMappingURL=transcribe.post.mjs.map
