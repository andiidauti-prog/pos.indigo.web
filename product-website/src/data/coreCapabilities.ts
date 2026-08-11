import { BarChart3, CreditCard, FileCheck, MonitorSmartphone, Package, Receipt } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Static Macedonian copy, same stage as the Hero — no locale switching yet.
 */
export const coreCapabilitiesContent = {
  eyebrow: 'МОЌ И КОНТРОЛ',
  headline: 'Сè што ви треба. На едно место.',
  supportingText:
    'onlinePOS ги обединува продажбата, залихата, фискализацијата и управувањето со вашиот бизнис во едно решение.',
}

export interface Capability {
  icon: LucideIcon
  title: string
  description: string
  /** default: standard card. featured: emphasized, wider. banner: full-width closing strip. */
  variant?: 'default' | 'featured' | 'banner'
  /** Grid placement classes for the asymmetric layout — kept with the data so the two stay in sync. */
  gridClassName?: string
}

export const capabilities: Capability[] = [
  {
    icon: Receipt,
    title: 'Продажба',
    description: 'Извршувајте продажби брзо и едноставно преку современ POS интерфејс.',
    variant: 'featured',
    gridClassName: 'sm:col-span-2 lg:col-span-2',
  },
  {
    icon: Package,
    title: 'Залиха',
    description: 'Следете ја и управувајте со залихата на вашиот бизнис на едно место.',
  },
  {
    icon: FileCheck,
    title: 'Фискализација',
    description: 'Фискализирајте ги вашите продажби директно преку onlinePOS.',
  },
  {
    icon: BarChart3,
    title: 'Статистики и извештаи',
    description: 'Прегледувајте статистики и извештаи за работењето на вашиот бизнис.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Далечинско управување',
    description: 'Управувајте и следете го вашиот бизнис од далечина, во секое време.',
  },
  {
    icon: CreditCard,
    title: 'Плаќања',
    description: 'Прифаќајте плаќања во готово, со картичка и на други начини.',
    variant: 'banner',
    gridClassName: 'sm:col-span-2 lg:col-span-3',
  },
]
