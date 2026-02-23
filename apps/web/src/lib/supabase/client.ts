import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yzlhlsduhapuiukateif.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bGhsc2R1aGFwdWl1a2F0ZWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NDA4MTcsImV4cCI6MjA4NzIxNjgxN30.CPRT37XvZnXW0KEiN2cm4u6Zxz--ZAZATur76m0pab0'
    )
}
