import RSS from 'rss'

export interface PodcastEpisode {
  id: string
  title: string
  description: string
  audioUrl: string
  pubDate: Date
  duration: string
  imageUrl?: string
}

export interface PodcastChannel {
  id: string
  title: string
  description: string
  link: string
  imageUrl?: string
  author: string
  email: string
  episodes: PodcastEpisode[]
}

export function generateRSSFeed(channel: PodcastChannel): string {
  const feed = new RSS({
    title: channel.title,
    description: channel.description,
    feed_url: `${channel.link}/feed.xml`,
    site_url: channel.link,
    image_url: channel.imageUrl || `${channel.link}/default-podcast-image.png`,
    author: channel.author,
    custom_namespaces: {
      itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
      media: 'http://search.yahoo.com/mrss/',
    },
    custom_elements: [
      { 'itunes:author': channel.author },
      { 'itunes:summary': channel.description },
      { 'itunes:owner': [
        { 'itunes:name': channel.author },
        { 'itunes:email': channel.email },
      ]},
      { 'itunes:category': [
        { _attr: { text: 'Technology' } },
      ]},
      { 'itunes:explicit': 'false' },
      { 'itunes:image': { _attr: { href: channel.imageUrl } } },
    ],
  })

  channel.episodes.forEach(episode => {
    feed.item({
      title: episode.title,
      description: episode.description,
      url: `${channel.link}/episode/${episode.id}`,
      guid: episode.id,
      date: episode.pubDate,
      custom_elements: [
        { 'itunes:author': channel.author },
        { 'itunes:subtitle': episode.description },
        { 'itunes:summary': episode.description },
        { 'itunes:duration': episode.duration },
        { 'itunes:image': { _attr: { href: episode.imageUrl } } },
        { 'enclosure': [
          { _attr: {
            url: episode.audioUrl,
            length: '0',
            type: 'audio/mpeg',
          }},
        ]},
      ],
    })
  })

  return feed.xml({ indent: true })
}

export function generateEpisodeRSS(episode: PodcastEpisode, channel: PodcastChannel): string {
  const feed = new RSS({
    title: episode.title,
    description: episode.description,
    feed_url: `${channel.link}/episode/${episode.id}/feed.xml`,
    site_url: `${channel.link}/episode/${episode.id}`,
  })

  feed.item({
    title: episode.title,
    description: episode.description,
    url: `${channel.link}/episode/${episode.id}`,
    guid: episode.id,
    date: episode.pubDate,
    custom_elements: [
      { 'enclosure': [
        { _attr: {
          url: episode.audioUrl,
          length: '0',
          type: 'audio/mpeg',
        }},
      ]},
    ],
  })

  return feed.xml({ indent: true })
}
