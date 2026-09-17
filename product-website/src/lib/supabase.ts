import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  },
)

export interface LeadRecord {
  id: string
  contact_name: string
  business_name: string
  email: string
  phone: string
  business_type: 'restaurant' | 'shop' | 'warehouse' | 'other'
  interests: string[]
  message: string
  preferred_contact: 'phone' | 'email' | 'either'
  status: 'new' | 'contacted' | 'demo_scheduled' | 'converted' | 'closed'
  admin_notes: string | null
  created_at: string
  updated_at: string
}
