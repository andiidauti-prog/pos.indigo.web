import { Banknote, CreditCard, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Static Macedonian copy, same stage as the other homepage sections — no
 * locale switching yet. Deliberately limited to what has been confirmed:
 * cash, card, and other general payment methods. No specific providers,
 * banks, terminals, card networks, or wallets are named — those have not
 * been confirmed yet.
 */
export const paymentsContent = {
  eyebrow: 'ПЛАЌАЊА',
  headline: 'Повеќе начини на плаќање. Едно место за продажба.',
  supportingText:
    'onlinePOS овозможува работење со различни начини на плаќање, вклучувајќи готовина и картички.',
}

export interface PaymentMethod {
  icon: LucideIcon
  title: string
  description: string
}

export const paymentMethods: PaymentMethod[] = [
  {
    icon: Banknote,
    title: 'Готовина',
    description: 'Прифаќајте готовински плаќања како дел од секојдневната продажба.',
  },
  {
    icon: CreditCard,
    title: 'Картичка',
    description: 'Прифаќајте плаќања со картичка директно преку onlinePOS.',
  },
  {
    icon: Wallet,
    title: 'Други начини',
    description: 'Поддршка и за други начини на плаќање, според потребите на бизнисот.',
  },
]
