import { createContext, useContext } from 'react'
import type { Locale } from '@/types/i18n'
import { translations } from '@/data/translations'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}

/** Returns the full translation dictionary for the active locale. */
export function useTranslations() {
  const { locale } = useLocale()
  return translations[locale]
}
