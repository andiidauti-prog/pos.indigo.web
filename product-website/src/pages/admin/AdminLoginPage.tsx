import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, LogIn, AlertCircle, Sparkles } from 'lucide-react'
import logo from '@/assets/onine-pos-logo.jpg'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAuth } from '@/lib/auth-context'

export function AdminLoginPage() {
  const navigate = useNavigate()
  const { signIn, signInDemo } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter your admin email and password.')
      return
    }

    setIsSubmitting(true)
    setError(null)

    const res = await signIn(email, password)
    setIsSubmitting(false)

    if (res.error) {
      setError(res.error.message || 'Authentication failed. Please verify your admin credentials.')
    } else {
      navigate('/admin', { replace: true })
    }
  }

  function handleDemoLogin() {
    signInDemo(email || 'admin@onlinepos.com')
    navigate('/admin', { replace: true })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-4 py-12 text-stone-100">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center rounded-2xl border border-stone-800 bg-stone-900 p-3 shadow-lg">
            <img src={logo} alt="onlinePOS logo" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">Admin Console</h1>
          <p className="mt-2 text-sm text-stone-400">Sign in to manage lead requests & sales pipeline</p>
        </div>

        <Card className="border-stone-800 bg-stone-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex flex-col gap-2 rounded-lg border border-red-500/30 bg-red-950/40 p-3.5 text-xs text-red-300">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 stroke-[2.5] mt-0.5 text-red-400" />
                  <span className="leading-relaxed">{error}</span>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@onlinepos.com"
                className="mt-1.5 focus-ring w-full rounded-lg border border-stone-700 bg-stone-950 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 transition-colors hover:border-stone-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300">
                Password
              </label>
              <div className="relative mt-1.5">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="focus-ring w-full rounded-lg border border-stone-700 bg-stone-950 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 transition-colors hover:border-stone-600"
                />
                <Lock className="pointer-events-none absolute right-3.5 top-3 h-4 w-4 text-stone-500" />
              </div>
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full mt-2">
              {isSubmitting ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Authenticating...
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In to Dashboard
                </>
              )}
            </Button>
          </form>

          <div className="relative flex items-center justify-center border-t border-stone-800 pt-5">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleDemoLogin}
              className="w-full border-stone-800 bg-stone-950 text-amber-400 hover:bg-stone-800 hover:text-amber-300"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Sign In with Demo Mode (Instant Preview)
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
