import { useState, type ReactNode } from 'react'
import { DEFAULT_LOCALE } from '@/data/locales'
import type { Locale } from '@/types/i18n'
import { LocaleContext } from '@/lib/locale-context'

/**
 * Holds the selected UI locale for the navbar/footer language selectors.
 * No translation loading yet — that lands in a later milestone.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)
  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
