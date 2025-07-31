// composables/useAudioRecorder.ts
import { ref, readonly } from 'vue';

export function useAudioRecorder(onTranscriptionComplete: (text: string) => void) {
  const isRecording = ref(false);
  const error = ref('');

  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];

  const start = async () => {
    if (isRecording.value) return;
    
    try {
      // 检查浏览器支持
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('浏览器不支持音频录制功能');
      }

      // 检查HTTPS环境（公网部署必需）
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        throw new Error('音频录制需要HTTPS环境');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000
        } 
      });
      
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
      error.value = `启动录音失败: ${e.message}`;
      console.error('Recording start error:', e);
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

    const formData = new FormData();
    // 根据MIME类型选择文件扩展名
    const extension = audioBlob.type.includes('webm') ? 'webm' : 
                     audioBlob.type.includes('mp4') ? 'm4a' : 'wav';
    formData.append('audio', audioBlob, `recording.${extension}`);
    
    try {
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      if (data.transcript && data.transcript.trim()) {
        onTranscriptionComplete(data.transcript.trim());
      } else {
        error.value = '未识别到语音内容';
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