/**
 * Static Macedonian copy, same stage as the other homepage sections — no
 * locale switching yet.
 */
export const productShowcaseContent = {
  eyebrow: 'ПРЕГЛЕД НА ПРОДУКТОТ',
  headline: 'Вашиот бизнис, на едно место.',
  supportingText:
    'Од продажба и залиха до статистики и управување — onlinePOS ви овозможува да ги следите клучните активности на вашиот бизнис од едно место.',
}

export interface ShowcaseHighlight {
  title: string
  description: string
}

/**
 * Kept intentionally generic — no specific sub-features are confirmed yet.
 */
export const showcaseHighlights: ShowcaseHighlight[] = [
  {
    title: 'Продажба',
    description: 'Управувајте со секојдневната продажба преку едноставен интерфејс.',
  },
  {
    title: 'Залиха',
    description: 'Следете ја залихата на вашиот бизнис на едно место.',
  },
  {
    title: 'Управување',
    description: 'Имајте увид и контрола врз работењето на вашиот бизнис.',
  },
]
