import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/layouts/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { ContactPage } from '@/pages/ContactPage'
import { AuthProvider } from '@/lib/auth-context'
import { ProtectedAdminRoute } from '@/components/admin/ProtectedAdminRoute'
import { AdminLoginPage } from '@/pages/admin/AdminLoginPage'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="admin" element={<AdminDashboardPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
