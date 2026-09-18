import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { CONTACT_ROUTE, navItems } from '@/data/navigation'
import { useTranslations } from '@/lib/locale-context'

export interface MobileMenuProps {
  isOpen: boolean
  onNavigate: () => void
}

export function MobileMenu({ isOpen, onNavigate }: MobileMenuProps) {
  const t = useTranslations()

  return (
    <div
      id="mobile-menu"
      inert={!isOpen}
      aria-hidden={!isOpen}
      className={cn(
        'grid overflow-hidden border-t transition-[grid-template-rows] duration-300 ease-in-out md:hidden',
        isOpen ? 'grid-rows-[1fr] border-border' : 'grid-rows-[0fr] border-transparent',
      )}
    >
      {/* Scrolls on short (landscape) screens so the CTA is always reachable. */}
      <div className="max-h-[calc(100dvh-4rem)] min-h-0 overflow-y-auto overscroll-contain">
        <nav className="flex flex-col gap-1 px-6 py-4 sm:px-8" aria-label="Mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'focus-ring flex min-h-11 items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors',
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-ink-muted hover:bg-surface-muted hover:text-ink',
                )
              }
            >
              {t.nav[item.id]}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-border px-6 py-5 sm:px-8">
          <LanguageSelector variant="inline" />
          <Button to={CONTACT_ROUTE} className="w-full" onClick={onNavigate}>
            {t.nav.requestDemo}
          </Button>
        </div>
      </div>
    </div>
  )
}
