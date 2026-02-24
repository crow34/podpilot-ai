import { createClient } from '@supabase/supabase-js'

function getEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`${name} is required.`)
  }
  return value
}

export const createBrowserClient = () => {
  const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL')
  const supabaseAnonKey = getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const createServerClient = () => {
  const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL')
  const serviceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY')

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
