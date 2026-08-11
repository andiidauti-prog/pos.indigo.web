import type { Locale, LocaleConfig } from '@/types/i18n'

export const DEFAULT_LOCALE: Locale = 'mk'

/**
 * Structural locale metadata only — no page copy/translations live here yet.
 * A translation-loading system will be introduced in a later milestone.
 */
export const locales: LocaleConfig[] = [
  { code: 'mk', label: 'Македонски', htmlLang: 'mk' },
  { code: 'sq', label: 'Shqip', htmlLang: 'sq' },
  { code: 'en', label: 'English', htmlLang: 'en' },
]
