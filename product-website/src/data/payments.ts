import { Banknote, CreditCard, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PaymentMethodId } from '@/types/i18n'

/**
 * Structural data only — titles/descriptions live in the translation
 * dictionary, keyed by `id` (`t.payments.methods[method.id]`).
 */
export interface PaymentMethod {
  id: PaymentMethodId
  icon: LucideIcon
}

export const paymentMethods: PaymentMethod[] = [
  { id: 'cash', icon: Banknote },
  { id: 'card', icon: CreditCard },
  { id: 'other', icon: Wallet },
]
