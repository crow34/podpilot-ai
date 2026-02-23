export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          stripe_customer_id: string | null
          plan: 'free' | 'creator' | 'pro'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          plan?: 'free' | 'creator' | 'pro'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          plan?: 'free' | 'creator' | 'pro'
          created_at?: string
          updated_at?: string
        }
      }
      podcasts: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          niche: string
          tone: 'professional' | 'casual' | 'entertaining' | 'educational'
          voice_id: string | null
          image_url: string | null
          rss_feed_url: string | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          niche: string
          tone?: 'professional' | 'casual' | 'entertaining' | 'educational'
          voice_id?: string | null
          image_url?: string | null
          rss_feed_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          niche?: string
          tone?: 'professional' | 'casual' | 'entertaining' | 'educational'
          voice_id?: string | null
          image_url?: string | null
          rss_feed_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      episodes: {
        Row: {
          id: string
          podcast_id: string
          title: string
          description: string
          script: string
          audio_url: string | null
          duration: string
          status: 'draft' | 'generating' | 'published' | 'failed'
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          podcast_id: string
          title: string
          description: string
          script: string
          audio_url?: string | null
          duration?: string
          status?: 'draft' | 'generating' | 'published' | 'failed'
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          podcast_id?: string
          title?: string
          description?: string
          script?: string
          audio_url?: string | null
          duration?: string
          status?: 'draft' | 'generating' | 'published' | 'failed'
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
