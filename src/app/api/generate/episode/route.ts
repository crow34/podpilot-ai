import { NextResponse } from 'next/server'
import { generatePodcastScript } from '@/lib/openrouter'
import { generateSpeech } from '@/lib/elevenlabs'
import { createServerClient } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { podcastId, topic, tone, duration, voiceId } = await request.json()

    if (!podcastId || !topic) {
      return NextResponse.json(
        { error: 'Podcast ID and topic are required' },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    // Get podcast details
    const { data: podcast, error: podcastError } = await supabase
      .from('podcasts')
      .select('*')
      .eq('id', podcastId)
      .single()

    if (podcastError || !podcast) {
      return NextResponse.json(
        { error: 'Podcast not found' },
        { status: 404 }
      )
    }

    // Create episode record
    const { data: episode, error: episodeError } = await supabase
      .from('episodes')
      .insert({
        podcast_id: podcastId,
        title: `Episode: ${topic}`,
        description: `AI-generated episode about ${topic}`,
        script: '',
        status: 'generating',
        duration: duration || 'medium',
      })
      .select()
      .single()

    if (episodeError || !episode) {
      return NextResponse.json(
        { error: 'Failed to create episode' },
        { status: 500 }
      )
    }

    // Generate script using AI
    const script = await generatePodcastScript({
      topic,
      niche: podcast.niche,
      tone: tone || podcast.tone || 'professional',
      duration: duration || 'medium',
    })

    // Update episode with script
    await supabase
      .from('episodes')
      .update({ script, title: `Episode: ${topic}` })
      .eq('id', episode.id)

    // Generate audio using ElevenLabs
    const audioBuffer = await generateSpeech({
      text: script,
      voiceId: voiceId || podcast.voice_id || undefined,
    })

    // In production: Upload audio to S3/storage
    // For now, we'll skip actual upload and just mark as complete
    const audioUrl = `https://storage.example.com/episodes/${episode.id}.mp3`

    // Update episode as published
    await supabase
      .from('episodes')
      .update({
        audio_url: audioUrl,
        status: 'published',
        published_at: new Date().toISOString(),
      })
      .eq('id', episode.id)

    return NextResponse.json({
      success: true,
      episode: {
        id: episode.id,
        title: episode.title,
        script,
        audioUrl,
      },
    })
  } catch (error) {
    console.error('Generate episode error:', error)
    return NextResponse.json(
      { error: 'Failed to generate episode', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
