import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/cn'
import { locales } from '@/data/locales'
import { useLocale, useTranslations } from '@/lib/locale-context'

export interface LanguageSelectorProps {
  variant?: 'dropdown' | 'inline'
  className?: string
}

/**
 * Desktop renders a compact dropdown; mobile/footer render the three
 * language codes as inline buttons (better for touch, no nested popover).
 */
export function LanguageSelector({ variant = 'dropdown', className }: LanguageSelectorProps) {
  const { locale, setLocale } = useLocale()
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  if (variant === 'inline') {
    return (
      <div className={cn('flex flex-wrap items-center gap-2', className)} role="group" aria-label={t.languageSelector.selectLanguage}>
        {locales.map((item) => (
          <button
            key={item.code}
            type="button"
            aria-pressed={item.code === locale}
            onClick={() => setLocale(item.code)}
            className={cn(
              'focus-ring inline-flex min-h-11 min-w-12 items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors',
              item.code === locale
                ? 'border-brand-600 bg-brand-50 text-brand-700'
                : 'border-border text-ink-muted hover:border-border-strong hover:text-ink',
            )}
          >
            {item.code.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  const current = locales.find((item) => item.code === locale) ?? locales[0]

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.languageSelector.selectLanguage}
        className="focus-ring inline-flex min-h-11 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink md:pointer-fine:min-h-9"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {current.code.toUpperCase()}
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.footer.languagesLabel}
          className="absolute right-0 z-50 mt-2 w-40 rounded-md border border-border bg-surface py-1 shadow-card-hover"
        >
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              role="menuitemradio"
              aria-checked={item.code === locale}
              onClick={() => {
                setLocale(item.code)
                setOpen(false)
              }}
              className={cn(
                'focus-ring flex min-h-11 w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors md:pointer-fine:min-h-9',
                item.code === locale
                  ? 'font-medium text-brand-600'
                  : 'text-ink-muted hover:bg-surface-muted hover:text-ink',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
