import { useId, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, LogIn, AlertCircle } from 'lucide-react'
import logo from '@/assets/onine-pos-logo.jpg'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAuth } from '@/lib/auth-context'

export function AdminLoginPage() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const uid = useId()

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

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-stone-950 px-4 py-8 text-stone-100 sm:py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center rounded-2xl border border-stone-800 bg-stone-900 p-3 shadow-lg">
            <img src={logo} alt="onlinePOS logo" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">Admin Console</h1>
          <p className="mt-2 text-sm text-stone-400">Sign in to manage demo requests and your sales pipeline</p>
        </div>

        <Card className="border-stone-800 bg-stone-900/90 p-5 shadow-2xl backdrop-blur-md sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div role="alert" className="flex flex-col gap-2 rounded-lg border border-red-500/30 bg-red-950/40 p-3.5 text-sm text-red-300">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 stroke-[2.5] mt-0.5 text-red-400" />
                  <span className="leading-relaxed">{error}</span>
                </div>
              </div>
            )}

            <div>
              <label htmlFor={`${uid}-email`} className="block text-xs font-semibold uppercase tracking-wider text-stone-300">
                Admin Email
              </label>
              <input
                id={`${uid}-email`}
                name="email"
                type="email"
                inputMode="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@onlinepos.com"
                className="mt-1.5 focus-ring min-h-12 w-full rounded-lg border border-stone-700 bg-stone-950 px-3.5 py-2.5 text-base text-white placeholder-stone-400 transition-colors hover:border-stone-600"
              />
            </div>

            <div>
              <label htmlFor={`${uid}-password`} className="block text-xs font-semibold uppercase tracking-wider text-stone-300">
                Password
              </label>
              <div className="relative mt-1.5">
                <input
                  id={`${uid}-password`}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="focus-ring min-h-12 w-full rounded-lg border border-stone-700 bg-stone-950 py-2.5 pl-3.5 pr-11 text-base text-white placeholder-stone-400 transition-colors hover:border-stone-600"
                />
                <Lock aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
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
        </Card>
      </div>
    </div>
  )
}
