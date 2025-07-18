// server/api/transcribe.post.ts
import { defineEventHandler, readMultipartFormData } from 'h3';

export default defineEventHandler(async (event) => {
  const PYTHON_API_URL = 'http://127.0.0.1:8000/transcribe';

  try {
    // 1. 读取前端上传的表单数据
    const multipart = await readMultipartFormData(event);
    const audioPart = multipart?.find(part => part.name === 'audio');

    if (!audioPart || !audioPart.data) {
      throw new Error('找不到音频数据');
    }

    // 2. 创建一个新的 FormData 对象，将音频数据转发给 Python 服务
    const formData = new FormData();
    // 需要将 Buffer 转换为 Blob 来附加
    const audioBlob = new Blob([audioPart.data], { type: audioPart.type });
    formData.append('audio_file', audioBlob, audioPart.filename || 'recording.webm');

    // 3. 使用 fetch 调用 Python API
    console.log('将音频转发到 Python ASR 服务...');
    const response = await fetch(PYTHON_API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Python ASR 服务返回错误: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('从 Python ASR 服务收到结果:', result);
    
    // 4. 将结果返回给前端
    return result;

  } catch (error: any) {
    console.error('代理到 ASR 服务时出错:', error);
    event.res.statusCode = 500;
    return { error: error.message };
  }
});
