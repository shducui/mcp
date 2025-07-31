import sys
import json
import wave
import vosk
import subprocess
import os
import tempfile

def convert_to_wav(input_path):
    """将音频文件转换为 WAV 格式"""
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as temp_wav:
        temp_wav_path = temp_wav.name
    
    # 使用 ffmpeg 转换音频格式
    cmd = [
        'ffmpeg', '-i', input_path, 
        '-ar', '16000', '-ac', '1', '-f', 'wav', 
        temp_wav_path, '-y'
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise Exception(f"音频转换失败: {result.stderr}")
    
    return temp_wav_path

def transcribe_audio(wav_path, model_path):
    """使用 Vosk 转录音频"""
    if not os.path.exists(model_path):
        raise Exception(f"模型路径不存在: {model_path}")
    
    model = vosk.Model(model_path)
    rec = vosk.KaldiRecognizer(model, 16000)
    
    wf = wave.open(wav_path, 'rb')
    
    if wf.getnchannels() != 1 or wf.getsampwidth() != 2 or wf.getframerate() != 16000:
        raise Exception("音频格式必须是 16kHz 单声道 WAV")
    
    results = []
    while True:
        data = wf.readframes(4000)
        if len(data) == 0:
            break
        if rec.AcceptWaveform(data):
            result = json.loads(rec.Result())
            if result.get('text'):
                results.append(result['text'])
    
    # 获取最终结果
    final_result = json.loads(rec.FinalResult())
    if final_result.get('text'):
        results.append(final_result['text'])
    
    wf.close()
    return ' '.join(results)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("用法: python vosk_transcribe.py <音频文件路径> <模型路径>")
        sys.exit(1)
    
    audio_path = sys.argv[1]
    model_path = sys.argv[2]
    
    try:
        # 转换音频格式
        wav_path = convert_to_wav(audio_path)
        
        try:
            # 转录音频
            transcript = transcribe_audio(wav_path, model_path)
            print(transcript)
        finally:
            # 清理临时 WAV 文件
            if os.path.exists(wav_path):
                os.unlink(wav_path)
                
    except Exception as e:
        print(f"错误: {str(e)}", file=sys.stderr)
        sys.exit(1)
