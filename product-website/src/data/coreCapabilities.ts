import { BarChart3, CreditCard, FileCheck, MonitorSmartphone, Package, Receipt } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { CapabilityId } from '@/types/i18n'

/**
 * Structural data only — titles/descriptions live in the translation
 * dictionary, keyed by `id` (`t.coreCapabilities.items[capability.id]`).
 */
export interface Capability {
  id: CapabilityId
  icon: LucideIcon
  /** default: standard card. featured: emphasized, wider. banner: full-width closing strip. */
  variant?: 'default' | 'featured' | 'banner'
  /** Grid placement classes for the asymmetric layout — kept with the data so the two stay in sync. */
  gridClassName?: string
}

export const capabilities: Capability[] = [
  {
    id: 'sales',
    icon: Receipt,
    variant: 'featured',
    gridClassName: 'sm:col-span-2 lg:col-span-2',
  },
  { id: 'inventory', icon: Package },
  { id: 'fiscalization', icon: FileCheck },
  { id: 'reports', icon: BarChart3 },
  { id: 'remoteManagement', icon: MonitorSmartphone },
  {
    id: 'payments',
    icon: CreditCard,
    variant: 'banner',
    gridClassName: 'sm:col-span-2 lg:col-span-3',
  },
]
