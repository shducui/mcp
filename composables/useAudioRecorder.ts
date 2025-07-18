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
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: mediaRecorder?.mimeType });
        await uploadAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop()); // 停止麦克风
      };
      
      mediaRecorder.start();
      isRecording.value = true;
      error.value = '';
    } catch (e: any) {
      error.value = `启动录音失败: ${e.message}`;
    }
  };

  const stop = () => {
    if (!isRecording.value || !mediaRecorder) return;
    mediaRecorder.stop();
    isRecording.value = false;
  };

  const uploadAudio = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.webm');
    
    try {
      // 调用我们自己的 Nuxt 后端代理 API
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('转录请求失败');

      const data = await response.json();
      if (data.transcript) {
        onTranscriptionComplete(data.transcript);
      }
    } catch (e: any) {
      error.value = `上传音频失败: ${e.message}`;
    }
  };

  return {
    isRecording: readonly(isRecording),
    error: readonly(error),
    start,
    stop,
  };
}