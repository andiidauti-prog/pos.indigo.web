import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DEFAULT_LOCALE, locales } from '@/data/locales'
import type { Locale } from '@/types/i18n'
import { LocaleContext } from '@/lib/locale-context'

const STORAGE_KEY = 'onlinepos-locale'

function isLocale(value: string | null): value is Locale {
  return locales.some((item) => item.code === value)
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return isLocale(stored) ? stored : DEFAULT_LOCALE
}

/**
 * Holds the selected UI locale for the navbar/footer language selectors.
 * Persists the choice to localStorage and keeps document.documentElement.lang
 * in sync so the active language is reflected in the page's HTML.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locales.find((item) => item.code === locale)?.htmlLang ?? locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  // Every component reads this via useTranslations(), so keep its identity
  // stable across renders that don't actually change the locale.
  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
