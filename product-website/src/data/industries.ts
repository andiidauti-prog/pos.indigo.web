import { Building2, Store, UtensilsCrossed, Warehouse } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Static Macedonian copy, same stage as the Hero/Core Capabilities — no
 * locale switching yet.
 */
export const industriesContent = {
  eyebrow: 'ЗА РАЗЛИЧНИ БИЗНИСИ',
  headline: 'Еден POS. Различни бизниси.',
  supportingText:
    'Без разлика на видот на вашиот бизнис, onlinePOS ви помага да ги управувате секојдневните продажни и оперативни процеси од едно место.',
}

export interface Industry {
  icon: LucideIcon
  title: string
  description: string
}

/**
 * Descriptions are deliberately generic — we have not confirmed which POS
 * features are specific to each industry, so none are claimed here.
 */
export const industries: Industry[] = [
  {
    icon: UtensilsCrossed,
    title: 'Ресторани',
    description: 'onlinePOS им помага на рестораните да го организираат секојдневното работење и продажба.',
  },
  {
    icon: Store,
    title: 'Продавници',
    description: 'Продавниците можат да го користат onlinePOS за поедноставено секојдневно работење и продажба.',
  },
  {
    icon: Warehouse,
    title: 'Магацини',
    description: 'onlinePOS е погоден и за бизниси каде следењето и управувањето со залихата се од клучно значење.',
  },
  {
    icon: Building2,
    title: 'Други бизниси',
    description: 'onlinePOS може да се прилагоди и на други видови бизниси, во зависност од нивните оперативни потреби.',
  },
]
