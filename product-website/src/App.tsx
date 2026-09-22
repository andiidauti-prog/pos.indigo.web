import { lazy, Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/layouts/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { ContactPage } from '@/pages/ContactPage'
import { AuthProvider } from '@/lib/auth-context'
import { ProtectedAdminRoute } from '@/components/admin/ProtectedAdminRoute'

// Admin console code (Supabase auth + the leads dashboard) is only ever
// needed by staff visiting /admin/*, so it's split into its own chunk
// instead of shipping in the bundle every public landing-page visitor
// downloads.
const AdminLoginPage = lazy(() =>
  import('@/pages/admin/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage })),
)
const AdminDashboardPage = lazy(() =>
  import('@/pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })),
)

// Matches the loading state ProtectedAdminRoute already shows while
// verifying a session, so this reads as the same admin loading moment
// rather than a new one.
function AdminRouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-950 text-white">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
        <p className="text-sm font-medium text-stone-400">Loading admin console...</p>
      </div>
    </div>
  )
}

/**
 * Scopes Supabase auth (session verification + auth-state listener) to the
 * admin routes only, so public marketing pages never pay for an auth round
 * trip they never use.
 */
function AdminAuthGate() {
  return (
    <AuthProvider>
      <Suspense fallback={<AdminRouteFallback />}>
        <Outlet />
      </Suspense>
    </AuthProvider>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route element={<AdminAuthGate />}>
        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="admin" element={<AdminDashboardPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
