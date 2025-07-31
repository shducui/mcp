import { createReadStream } from 'fs'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { spawn } from 'child_process'

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event)
    const audioFile = formData?.find(item => item.name === 'audio')
    
    if (!audioFile) {
      throw createError({
        statusCode: 400,
        statusMessage: '未找到音频文件'
      })
    }

    // 保存临时音频文件
    const tempPath = join(process.cwd(), 'temp', `audio_${Date.now()}.webm`)
    await writeFile(tempPath, audioFile.data)

    try {
      // 使用 Python 脚本处理 Vosk 识别
      const transcript = await transcribeWithVosk(tempPath)
      
      // 清理临时文件
      await unlink(tempPath)
      
      return { transcript }
    } catch (error) {
      // 确保清理临时文件
      await unlink(tempPath).catch(() => {})
      throw error
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
