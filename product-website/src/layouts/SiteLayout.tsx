import { Outlet } from 'react-router-dom'
import { LocaleProvider } from '@/components/LocaleProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function SiteLayout() {
  return (
    <LocaleProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  )
}
