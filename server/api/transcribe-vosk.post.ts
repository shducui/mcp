import { createReadStream } from 'fs'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { spawn } from 'child_process'

export default defineEventHandler(async (event) => {
  // 在 Vercel 等云平台上返回不支持消息
  if (process.env.VERCEL || process.env.NETLIFY) {
    throw createError({
      statusCode: 501,
      statusMessage: '云平台不支持服务器端语音识别，请使用 Web Speech API'
    })
  }

  // 本地开发环境的处理逻辑
  try {
    const formData = await readMultipartFormData(event)
    const audioFile = formData?.find(item => item.name === 'audio')
    
    if (!audioFile) {
      throw createError({
        statusCode: 400,
        statusMessage: '未找到音频文件'
      })
    }

    // 这里可以添加本地 Vosk 处理逻辑
    return { 
      transcript: '本地转录功能需要配置 Vosk 环境',
      message: '请使用 Web Speech API 进行语音识别'
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: `转录失败: ${error.message}`
    })
  }
})

function transcribeWithVosk(audioPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const pythonScript = join(process.cwd(), 'scripts', 'vosk_transcribe.py')
    const modelPath = join(process.cwd(), 'public', 'models', 'vosk-model-cn')
    
    const python = spawn('python', [pythonScript, audioPath, modelPath])
    
    let output = ''
    let error = ''
    
    python.stdout.on('data', (data) => {
      output += data.toString()
    })
    
    python.stderr.on('data', (data) => {
      error += data.toString()
    })
    
    python.on('close', (code) => {
      if (code === 0) {
        resolve(output.trim())
      } else {
        reject(new Error(`Python script failed: ${error}`))
      }
    })
  })
}
