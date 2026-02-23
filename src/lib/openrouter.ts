import OpenAI from 'openai'

export const openrouter = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.OPENROUTER_SITE_URL,
    'X-Title': process.env.OPENROUTER_SITE_NAME,
  },
})

export async function generatePodcastScript(options: {
  topic: string
  niche: string
  tone: 'professional' | 'casual' | 'entertaining' | 'educational'
  duration: 'short' | 'medium' | 'long'
}): Promise<string> {
  const durationMap = {
    short: '3-5 minutes (approximately 500-700 words)',
    medium: '8-12 minutes (approximately 1200-1800 words)',
    long: '15-20 minutes (approximately 2200-3000 words)',
  }

  const toneMap = {
    professional: 'professional, authoritative, and informative',
    casual: 'friendly, conversational, and relatable',
    entertaining: 'engaging, humorous, and captivating',
    educational: 'clear, structured, and instructive',
  }

  const response = await openrouter.chat.completions.create({
    model: 'anthropic/claude-3.5-sonnet',
    messages: [
      {
        role: 'system',
        content: `You are a professional podcast scriptwriter. Create engaging, well-structured podcast scripts that sound natural when read aloud. Include:
- Catchy intro with hook
- Main content with clear sections
- Smooth transitions
- Memorable outro with call-to-action

Write in a way that flows naturally for audio. Use conversational language, rhetorical questions, and varied sentence structure.`,
      },
      {
        role: 'user',
        content: `Create a podcast script about "${options.topic}" for a ${options.niche} audience.

Tone: ${toneMap[options.tone]}
Target Duration: ${durationMap[options.duration]}

Include:
1. Episode title (catchy and relevant)
2. Episode description (2-3 sentences)
3. Full script with natural speaking cues
4. Suggested background music mood

Format the response as JSON with keys: title, description, script, musicMood`,
      },
    ],
    temperature: 0.7,
    max_tokens: 2000,
  })

  const content = response.choices[0]?.message?.content || ''
  
  // Try to parse JSON, fallback to raw text
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      return parsed.script || content
    }
  } catch {
    // Return raw content if JSON parsing fails
  }

  return content
}
