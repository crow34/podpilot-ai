import axios from 'axios'

const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1'

export interface VoiceOptions {
  text: string
  voiceId?: string
  stability?: number
  similarity?: number
  style?: number
}

export const DEFAULT_VOICES = {
  professional: '21m00Tcm4TlvDq8ikWAM', // Rachel - professional, warm
  casual: 'AZnzlk1XvdvUeBnXmlld', // Doma - friendly, conversational
  entertaining: 'EXAVITQu4vr4xnSDxMaL', // Bella - expressive, engaging
  educational: 'MF3mGyEYCl7XYWbV9V6O', // Josh - clear, authoritative
}

export async function generateSpeech(options: VoiceOptions): Promise<Buffer> {
  const voiceId = options.voiceId || DEFAULT_VOICES.professional
  
  const response = await axios.post(
    `${ELEVENLABS_API_URL}/text-to-speech/${voiceId}`,
    {
      text: options.text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: options.stability ?? 0.5,
        similarity_boost: options.similarity ?? 0.75,
        style: options.style ?? 0,
      },
    },
    {
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY!,
        'Content-Type': 'application/json',
      },
      responseType: 'arraybuffer',
    }
  )

  return Buffer.from(response.data)
}

export async function listVoices() {
  const response = await axios.get(`${ELEVENLABS_API_URL}/voices`, {
    headers: {
      'xi-api-key': process.env.ELEVENLABS_API_KEY!,
    },
  })

  return response.data.voices
}
