import { Building2, Store, UtensilsCrossed, Warehouse } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IndustryId } from '@/types/i18n'

/**
 * Structural data only — titles/descriptions live in the translation
 * dictionary, keyed by `id` (`t.industries.items[industry.id]`).
 */
export interface Industry {
  id: IndustryId
  icon: LucideIcon
}

export const industries: Industry[] = [
  { id: 'restaurants', icon: UtensilsCrossed },
  { id: 'stores', icon: Store },
  { id: 'warehouses', icon: Warehouse },
  { id: 'other', icon: Building2 },
]
