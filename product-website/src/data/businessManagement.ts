import { BarChart3, MonitorSmartphone, Package } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Static Macedonian copy, same stage as the other homepage sections — no
 * locale switching yet.
 */
export const businessManagementContent = {
  eyebrow: 'УПРАВУВАЈТЕ СО БИЗНИСОТ',
  headline: 'Секогаш имајте преглед над вашето работење.',
  supportingText:
    'Следете ги клучните аспекти на вашиот бизнис и управувајте со продажбата, залихата и деловните податоци од едно место.',
}

export interface ManagementArea {
  icon: LucideIcon
  title: string
  description: string
}

/**
 * Kept intentionally generic — no unconfirmed sub-features (real-time
 * monitoring, mobile app, notifications, specific reports, employee or
 * multi-location management, etc.) are claimed here.
 */
export const managementAreas: ManagementArea[] = [
  {
    icon: BarChart3,
    title: 'Статистики и извештаи',
    description: 'Пристапете до статистики и извештаи кои ви даваат преглед на работењето на бизнисот.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Далечинско управување',
    description: 'Управувајте со вашиот бизнис од далечина, преку onlinePOS.',
  },
  {
    icon: Package,
    title: 'Залиха и продажба',
    description: 'Продажбата и залихата се управуваат заедно, од едно место.',
  },
]
