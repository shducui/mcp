import { ref, readonly } from 'vue';

export function useAudioRecorder(onTranscriptionComplete: (text: string) => void) {
  const isRecording = ref(false);
  const error = ref('');
  const isSupported = ref(true);

  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];
  let recognition: any = null;

  // 检查浏览器支持
  const checkSupport = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    isSupported.value = !!SpeechRecognition;
    return SpeechRecognition;
  };

  const initSpeechRecognition = () => {
    const SpeechRecognition = checkSupport();
    if (!SpeechRecognition) return null;

    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'zh-CN';

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        // 检查是否包含结束对话的命令
        const text = finalTranscript.trim();
        if (['结束对话', '退出语音', '关闭语音', '结束语音', '停止录音', '结束对话。', '退出语音。', '关闭语音。', '结束语音。', '停止录音。'].includes(text)) {
          console.log('[ASR] 检测到结束对话命令，自动停止录音');
          stop(); // 自动停止录音
          return; // 不传递给回调函数
        }
        onTranscriptionComplete(finalTranscript);
      }
    };

    recognition.onerror = (event: any) => {
      error.value = `语音识别错误: ${event.error}`;
      isRecording.value = false;
    };

    recognition.onend = () => {
      isRecording.value = false;
    };

    return recognition;
  };

  const start = async () => {
    if (isRecording.value) return;
    
    error.value = '';
    
    // 优先使用 Web Speech API
    if (checkSupport()) {
      try {
        if (!recognition) {
          recognition = initSpeechRecognition();
        }
        if (recognition) {
          recognition.start();
          isRecording.value = true;
          return;
        }
      } catch (e: any) {
        console.warn('Web Speech API 启动失败，使用录音模式:', e.message);
      }
    }

    // 降级到录音上传模式
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
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      isRecording.value = true;
    } catch (e: any) {
      error.value = `启动录音失败: ${e.message}`;
    }
  };

  const stop = () => {
    if (!isRecording.value) return;
    
    if (recognition && checkSupport()) {
      try {
        recognition.stop();
      } catch (e) {
        console.warn('停止语音识别失败:', e);
      }
    }
    
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
    
    isRecording.value = false;
  };

  const uploadAudio = async (audioBlob: Blob) => {
    // 这里可以实现客户端音频处理或上传到其他服务
    error.value = '当前环境不支持服务器端转录，请使用支持 Web Speech API 的浏览器';
  };

  return {
    isRecording: readonly(isRecording),
    error: readonly(error),
    isSupported: readonly(isSupported),
    start,
    stop,
  };
}
