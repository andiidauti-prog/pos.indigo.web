import type { Locale, Translations } from '@/types/i18n'
import { mk } from './mk'
import { sq } from './sq'
import { en } from './en'

export const translations: Record<Locale, Translations> = { mk, sq, en }
