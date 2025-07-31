// composables/useAudioRecorder.ts
import { ref, readonly } from 'vue';

export function useAudioRecorder(onTranscriptionComplete: (text: string) => void) {
  const isRecording = ref(false);
  const error = ref('');

  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];

  const start = async () => {
    console.log('[ASR DEBUG] 开始录音流程');
    if (isRecording.value) {
      console.log('[ASR DEBUG] 已在录音中，跳过');
      return;
    }
    
    try {
      console.log('[ASR DEBUG] 检查浏览器支持...');
      // 检查浏览器支持
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('浏览器不支持音频录制功能');
      }

      // 检查HTTPS环境（公网部署必需）
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        throw new Error('音频录制需要HTTPS环境');
      }

      console.log('[ASR DEBUG] 请求麦克风权限...');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000
        } 
      });
      
      console.log('[ASR DEBUG] 麦克风权限获取成功');
      // 使用更兼容的音频格式
      const options = { mimeType: 'audio/webm;codecs=opus' };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options.mimeType = 'audio/webm';
      }
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options.mimeType = 'audio/mp4';
      }

      mediaRecorder = new MediaRecorder(stream, options);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: mediaRecorder?.mimeType });
        await uploadAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start(250); // 每250ms收集一次数据
      isRecording.value = true;
      error.value = '';
      
    } catch (e: any) {
      console.error('[ASR DEBUG] 录音启动失败:', e);
      error.value = `启动录音失败: ${e.message}`;
    }
  };

  const stop = () => {
    if (!isRecording.value || !mediaRecorder) return;
    
    try {
      mediaRecorder.stop();
      isRecording.value = false;
    } catch (e: any) {
      console.error('Recording stop error:', e);
      isRecording.value = false;
    }
  };

  const uploadAudio = async (audioBlob: Blob) => {
    if (audioBlob.size === 0) {
      error.value = '录音数据为空';
      return;
    }

    // 检查文件大小
    if (audioBlob.size > 4.5 * 1024 * 1024) {
      error.value = '录音文件过大，请缩短录音时间';
      return;
    }

    const formData = new FormData();
    // 根据MIME类型选择文件扩展名
    const extension = audioBlob.type.includes('webm') ? 'webm' : 
                     audioBlob.type.includes('mp4') ? 'm4a' : 'wav';
    formData.append('audio', audioBlob, `recording.${extension}`);
    
    console.log(`[ASR] 上传音频文件: ${audioBlob.size} bytes, type: ${audioBlob.type}`);
    
    try {
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = await response.text() || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('[ASR] 转录结果:', data);
      
      if (data.transcript && data.transcript.trim()) {
        onTranscriptionComplete(data.transcript.trim());
      } else {
        error.value = '未识别到语音内容，请重试';
      }
      
    } catch (e: any) {
      error.value = `语音转录失败: ${e.message}`;
      console.error('Upload audio error:', e);
    }
  };

  return {
    isRecording: readonly(isRecording),
    error: readonly(error),
    start,
    stop,
  };
}