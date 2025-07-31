import { NextRequest, NextResponse } from 'next/server';

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;
    
    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    // 检查文件大小限制 (4.5MB for Whisper API)
    if (audioFile.size > 4.5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Audio file too large. Maximum size is 4.5MB' }, { status: 400 });
    }

    // 使用OpenAI Whisper API进行转录
    const openaiFormData = new FormData();
    openaiFormData.append('file', audioFile);
    openaiFormData.append('model', 'whisper-1');
    openaiFormData.append('language', 'zh'); // 指定中文
    openaiFormData.append('response_format', 'json');

    const response = await fetch('https://api.v3.cm/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: openaiFormData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    
    if (!result.text || result.text.trim() === '') {
      return NextResponse.json({ 
        transcript: '',
        success: true,
        message: 'No speech detected' 
      });
    }
    
    return NextResponse.json({ 
      transcript: result.text.trim(),
      success: true 
    });

  } catch (error: any) {
    console.error('Transcription error:', error);
    return NextResponse.json({ 
      error: 'Transcription failed',
      details: error.message 
    }, { status: 500 });
  }
}
