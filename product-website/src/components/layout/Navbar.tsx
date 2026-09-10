import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { CONTACT_ROUTE, navItems } from '@/data/navigation'
import { useTranslations } from '@/lib/locale-context'
import { MobileMenu } from './MobileMenu'
import logo from '@/assets/onine-pos-logo.jpg';

export function Navbar() {
  const t = useTranslations()
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
          <Link to="/" className="flex items-center">
            <img src={logo} alt="onlinePOS logo" className="h-8 w-auto object-contain" />
          </Link>

          <nav className="hidden items-stretch gap-1 lg:flex" aria-label="Primary">
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
                {t.nav[item.id]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSelector />
            <Button to={CONTACT_ROUTE} size="sm">
              {t.nav.requestDemo}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((value) => !value)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
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
