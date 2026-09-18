import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { isSupabaseConfigured, supabase } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, pass: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

/**
 * A session read from local storage is only a claim. Ask Supabase Auth to
 * validate the access token so a stale or tampered session never counts as signed in.
 */
async function verifySession(session: Session | null): Promise<User | null> {
  if (!session) return null
  const { data, error } = await supabase.auth.getUser(session.access_token)
  return error ? null : data.user
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return
    }

    let active = true

    // Restore and verify any existing Supabase session.
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => verifySession(session))
      .catch(() => null)
      .then((verifiedUser) => {
        if (!active) return
        setUser(verifiedUser)
        setLoading(false)
      })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      // The initial session is verified above.
      if (event === 'INITIAL_SESSION') return
      // Sign-out (this or another tab) or an expired/unrefreshable session ends access.
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [])

  async function signIn(email: string, pass: string): Promise<{ error: Error | null }> {
    if (!isSupabaseConfigured) {
      return {
        error: new Error(
          'Admin sign-in is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY for this environment.',
        ),
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
      })

      if (error) {
        return { error: new Error(error.message) }
      }

      if (!data.session?.user) {
        return { error: new Error('Sign-in did not return a session. Please try again.') }
      }

      setUser(data.session.user)
      return { error: null }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      console.warn('Supabase Auth fetch failed:', msg)
      return {
        error: new Error('Could not connect to the authentication service (' + msg + '). Please try again.'),
      }
    }
  }

  async function signOut() {
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut()
      } catch {
        // Ignore signout fetch errors; local state is cleared below either way.
      }
    }
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signOut }}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
