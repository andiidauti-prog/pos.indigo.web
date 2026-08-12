import type { Translations } from '@/types/i18n'

/**
 * Macedonian — the source-of-meaning translation. Every other locale is a
 * faithful translation of this content; none may add claims, features, or
 * information beyond what is written here.
 */
export const mk: Translations = {
  nav: {
    home: 'Почетна',
    features: 'Карактеристики',
    businesses: 'Бизниси',
    about: 'За нас',
    contact: 'Контакт',
    requestDemo: 'Побарајте демо',
    contactSales: 'Контактирајте нè',
    openMenu: 'Отвори мени',
    closeMenu: 'Затвори мени',
  },
  footer: {
    productGroup: 'Продукт',
    companyGroup: 'Компанија',
    languagesLabel: 'Јазици',
    copyright: '© {year} onlinePOS. Сите права се задржани.',
  },
  languageSelector: {
    selectLanguage: 'Изберете јазик',
  },
  hero: {
    eyebrow: 'onlinePOS',
    headlineLines: ['Вашиот бизнис.', 'Под ваша контрола.'],
    supportingText: 'Современ POS систем за продажба, залиха, фискализација и управување со вашиот бизнис.',
  },
  coreCapabilities: {
    eyebrow: 'МОЌ И КОНТРОЛ',
    headline: 'Сè што ви треба. На едно место.',
    supportingText:
      'onlinePOS ги обединува продажбата, залихата, фискализацијата и управувањето со вашиот бизнис во едно решение.',
    items: {
      sales: {
        title: 'Продажба',
        description: 'Извршувајте продажби брзо и едноставно преку современ POS интерфејс.',
      },
      inventory: {
        title: 'Залиха',
        description: 'Следете ја и управувајте со залихата на вашиот бизнис на едно место.',
      },
      fiscalization: {
        title: 'Фискализација',
        description: 'Фискализирајте ги вашите продажби директно преку onlinePOS.',
      },
      reports: {
        title: 'Статистики и извештаи',
        description: 'Прегледувајте статистики и извештаи за работењето на вашиот бизнис.',
      },
      remoteManagement: {
        title: 'Далечинско управување',
        description: 'Управувајте и следете го вашиот бизнис од далечина, во секое време.',
      },
      payments: {
        title: 'Плаќања',
        description: 'Прифаќајте плаќања во готово, со картичка и на други начини.',
      },
    },
  },
  industries: {
    eyebrow: 'ЗА РАЗЛИЧНИ БИЗНИСИ',
    headline: 'Еден POS. Различни бизниси.',
    supportingText:
      'Без разлика на видот на вашиот бизнис, onlinePOS ви помага да ги управувате секојдневните продажни и оперативни процеси од едно место.',
    items: {
      restaurants: {
        title: 'Ресторани',
        description: 'onlinePOS им помага на рестораните да го организираат секојдневното работење и продажба.',
      },
      stores: {
        title: 'Продавници',
        description: 'Продавниците можат да го користат onlinePOS за поедноставено секојдневно работење и продажба.',
      },
      warehouses: {
        title: 'Магацини',
        description: 'onlinePOS е погоден и за бизниси каде следењето и управувањето со залихата се од клучно значење.',
      },
      other: {
        title: 'Други бизниси',
        description:
          'onlinePOS може да се прилагоди и на други видови бизниси, во зависност од нивните оперативни потреби.',
      },
    },
  },
  productShowcase: {
    eyebrow: 'ПРЕГЛЕД НА ПРОДУКТОТ',
    headline: 'Вашиот бизнис, на едно место.',
    supportingText:
      'Од продажба и залиха до статистики и управување — onlinePOS ви овозможува да ги следите клучните активности на вашиот бизнис од едно место.',
    highlights: [
      { title: 'Продажба', description: 'Управувајте со секојдневната продажба преку едноставен интерфејс.' },
      { title: 'Залиха', description: 'Следете ја залихата на вашиот бизнис на едно место.' },
      { title: 'Управување', description: 'Имајте увид и контрола врз работењето на вашиот бизнис.' },
    ],
    visualLabel: 'Визуелен приказ на производот (наскоро)',
  },
  businessManagement: {
    eyebrow: 'УПРАВУВАЈТЕ СО БИЗНИСОТ',
    headline: 'Секогаш имајте преглед над вашето работење.',
    supportingText:
      'Следете ги клучните аспекти на вашиот бизнис и управувајте со продажбата, залихата и деловните податоци од едно место.',
    areas: {
      reports: {
        title: 'Статистики и извештаи',
        description: 'Пристапете до статистики и извештаи кои ви даваат преглед на работењето на бизнисот.',
      },
      remoteManagement: {
        title: 'Далечинско управување',
        description: 'Управувајте со вашиот бизнис од далечина, преку onlinePOS.',
      },
      inventorySales: {
        title: 'Залиха и продажба',
        description: 'Продажбата и залихата се управуваат заедно, од едно место.',
      },
    },
    visualLabel: 'Визуелен приказ на управувањето со бизнисот (наскоро)',
  },
  fiscalization: {
    eyebrow: 'ФИСКАЛИЗАЦИЈА',
    headline: 'Фискализацијата, дел од вашето секојдневно работење.',
    supportingText:
      'onlinePOS ја вклучува фискализацијата како дел од процесот на продажба, со цел вашето работење да биде поедноставно и поорганизирано.',
    supportingStatement: 'Фискализацијата е интегрирана директно во текот на продажбата во onlinePOS.',
    visualLabel: 'Визуелен приказ на фискализацијата (наскоро)',
  },
  payments: {
    eyebrow: 'ПЛАЌАЊА',
    headline: 'Повеќе начини на плаќање. Едно место за продажба.',
    supportingText: 'onlinePOS овозможува работење со различни начини на плаќање, вклучувајќи готовина и картички.',
    methods: {
      cash: {
        title: 'Готовина',
        description: 'Прифаќајте готовински плаќања како дел од секојдневната продажба.',
      },
      card: {
        title: 'Картичка',
        description: 'Прифаќајте плаќања со картичка директно преку onlinePOS.',
      },
      other: {
        title: 'Други начини',
        description: 'Поддршка и за други начини на плаќање, според потребите на бизнисот.',
      },
    },
    visualLabel: 'Визуелен приказ на плаќањата (наскоро)',
  },
  contact: {
    eyebrow: 'КОНТАКТИРАЈТЕ НÈ',
    headline: 'Дознајте како onlinePOS може да му помогне на вашиот бизнис.',
    supportingText: 'Побарајте демо или контактирајте го нашиот продажен тим за повеќе информации.',
    form: {
      nameLabel: 'Име',
      companyLabel: 'Компанија',
      emailLabel: 'Email',
      phoneLabel: 'Телефон',
      businessTypeLabel: 'Тип на бизнис',
      businessTypePlaceholder: 'Изберете тип на бизнис',
      businessTypeOptions: {
        restaurant: 'Ресторан',
        store: 'Продавница',
        warehouse: 'Магацин',
        other: 'Друго',
      },
      messageLabel: 'Порака',
      requiredFieldNote: '* Задолжително поле',
      submitLabel: 'Испрати',
      submittingLabel: 'Испраќање...',
      submittedMessage: 'Формата е подготвена за поврзување со системот за испраќање.',
    },
  },
  finalCta: {
    eyebrow: 'ПОБАРАЈТЕ ДЕМО',
    headline: 'Запознајте го onlinePOS.',
    supportingText: 'Дознајте повеќе за решението и разговарајте со нашиот тим.',
    primaryCta: 'Побарајте демо',
  },
}
