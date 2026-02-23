import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { generateRSSFeed } from '@/lib/rss'

export async function GET(
  request: Request,
  { params }: { params: { podcastId: string } }
) {
  try {
    const { podcastId } = params

    const supabase = createServerClient()

    // Get podcast details
    const { data: podcast, error: podcastError } = await supabase
      .from('podcasts')
      .select('*')
      .eq('id', podcastId)
      .single()

    if (podcastError || !podcast) {
      return new NextResponse('Podcast not found', { status: 404 })
    }

    // Get published episodes
    const { data: episodes, error: episodesError } = await supabase
      .from('episodes')
      .select('*')
      .eq('podcast_id', podcastId)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(50)

    if (episodesError) {
      return new NextResponse('Failed to fetch episodes', { status: 500 })
    }

    // Generate RSS feed
    const rssXml = generateRSSFeed({
      id: podcast.id,
      title: podcast.title,
      description: podcast.description,
      link: `${process.env.NEXT_PUBLIC_APP_URL}/podcast/${podcast.id}`,
      imageUrl: podcast.image_url || undefined,
      author: podcast.user_id, // In production, get from user profile
      email: 'support@podpilot.ai', // In production, get from user
      episodes: episodes?.map(ep => ({
        id: ep.id,
        title: ep.title,
        description: ep.description,
        audioUrl: ep.audio_url || '',
        pubDate: new Date(ep.published_at || ep.created_at),
        duration: ep.duration,
      })) || [],
    })

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300', // 5 minutes
      },
    })
  } catch (error) {
    console.error('RSS feed error:', error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}
