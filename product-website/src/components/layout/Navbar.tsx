import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { navItems, REQUEST_DEMO_LABEL } from '@/data/navigation'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  useEffect(() => {
    if (!isMobileOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMobileOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-surface transition-shadow duration-200',
        isScrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link to="/" className="focus-ring rounded-sm text-lg font-semibold tracking-tight text-ink">
            onlinePOS
          </Link>

          <nav className="hidden items-stretch gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center border-b-2 px-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'border-brand-600 text-brand-600'
                      : 'border-transparent text-ink-muted hover:text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageSelector />
            <Button size="sm">{REQUEST_DEMO_LABEL}</Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((value) => !value)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isMobileOpen} onNavigate={() => setIsMobileOpen(false)} />
    </header>
  )
}
