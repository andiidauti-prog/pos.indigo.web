import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { User } from '@supabase/supabase-js'
import { isSupabaseConfigured, supabase } from '@/lib/supabase'

const MOCK_ADMIN_SESSION_KEY = 'onlinepos_mock_admin_session'

interface AuthContextType {
  user: User | { email: string; id: string } | null
  loading: boolean
  signIn: (email: string, pass: string) => Promise<{ error: Error | null }>
  signInDemo: (email?: string) => void
  signOut: () => Promise<void>
  isLocalDemoSession: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function getInitialLocalMockUser(): { email: string; id: string } | null {
  const savedMock = localStorage.getItem(MOCK_ADMIN_SESSION_KEY)
  if (savedMock) {
    try {
      return JSON.parse(savedMock)
    } catch {
      localStorage.removeItem(MOCK_ADMIN_SESSION_KEY)
    }
  }
  return null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | { email: string; id: string } | null>(getInitialLocalMockUser)
  const [loading, setLoading] = useState<boolean>(isSupabaseConfigured)
  const [isLocalDemoSession, setIsLocalDemoSession] = useState<boolean>(() => Boolean(getInitialLocalMockUser()))

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return
    }

    // Check active Supabase session
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user)
          setIsLocalDemoSession(false)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
        setIsLocalDemoSession(false)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  function signInDemo(demoEmail = 'admin@onlinepos.com') {
    const mockUser = { email: demoEmail, id: 'admin-local-session-id' }
    localStorage.setItem(MOCK_ADMIN_SESSION_KEY, JSON.stringify(mockUser))
    setUser(mockUser)
    setIsLocalDemoSession(true)
  }

  async function signIn(email: string, pass: string): Promise<{ error: Error | null }> {
    if (!isSupabaseConfigured) {
      if (import.meta.env.DEV && email.trim() && pass.length >= 6) {
        signInDemo(email)
        return { error: null }
      }
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

      if (data.session?.user) {
        setUser(data.session.user)
        setIsLocalDemoSession(false)
      }

      return { error: null }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      console.warn('Supabase Auth fetch failed:', msg)
      return {
        error: new Error(
          'Could not connect to Supabase Auth (' +
            msg +
            '). If you have not created an admin user in Supabase yet, click "Sign In with Demo Mode" below.',
        ),
      }
    }
  }

  async function signOut() {
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut()
      } catch {
        // Ignore signout fetch errors
      }
    }
    localStorage.removeItem(MOCK_ADMIN_SESSION_KEY)
    setUser(null)
    setIsLocalDemoSession(false)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signInDemo, signOut, isLocalDemoSession }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
