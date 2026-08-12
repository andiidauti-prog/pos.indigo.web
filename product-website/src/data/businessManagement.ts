import { BarChart3, MonitorSmartphone, Package } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ManagementAreaId } from '@/types/i18n'

/**
 * Structural data only — titles/descriptions live in the translation
 * dictionary, keyed by `id` (`t.businessManagement.areas[area.id]`).
 */
export interface ManagementArea {
  id: ManagementAreaId
  icon: LucideIcon
}

export const managementAreas: ManagementArea[] = [
  { id: 'reports', icon: BarChart3 },
  { id: 'remoteManagement', icon: MonitorSmartphone },
  { id: 'inventorySales', icon: Package },
]
