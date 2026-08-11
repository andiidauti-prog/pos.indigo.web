/**
 * Supported website locales.
 * mk = Macedonian, sq = Albanian, en = English.
 */
export type Locale = 'mk' | 'sq' | 'en'

export interface LocaleConfig {
  code: Locale
  /** Language name, written in that language (for the language switcher). */
  label: string
  /** BCP 47 tag used for the html[lang] attribute. */
  htmlLang: string
}
