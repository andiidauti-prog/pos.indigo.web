import type { Translations } from '@/types/i18n'

/**
 * Macedonian — the source-of-meaning translation. Every other locale is a
 * faithful translation of this content; none may add claims, features, or
 * information beyond what is written here.
 */
export const mk: Translations = {
  nav: {
    home: 'Почетна',
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
    copyright: '© {year} OninePOS. Сите права се задржани.',
  },
  languageSelector: {
    selectLanguage: 'Изберете јазик',
  },
  hero: {
    eyebrow: 'OninePOS',
    headlineLines: ['Вашиот бизнис.', 'Под ваша контрола.'],
    supportingText: 'Современ POS систем за продажба, залиха, фискализација и управување со вашиот бизнис.',
  },
  coreCapabilities: {
    eyebrow: 'МОЌ И КОНТРОЛ',
    headline: 'Сè што ви треба. На едно место.',
    supportingText:
      'OninePOS ги обединува продажбата, залихата, фискализацијата и управувањето со вашиот бизнис во едно решение.',
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
        description: 'Фискализирајте ги вашите продажби директно преку OninePOS.',
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
      'Без разлика на видот на вашиот бизнис, OninePOS ви помага да ги управувате секојдневните продажни и оперативни процеси од едно место.',
    items: {
      restaurants: {
        title: 'Ресторани',
        description: 'OninePOS им помага на рестораните да го организираат секојдневното работење и продажба.',
      },
      stores: {
        title: 'Продавници',
        description: 'Продавниците можат да го користат OninePOS за поедноставено секојдневно работење и продажба.',
      },
      warehouses: {
        title: 'Магацини',
        description: 'OninePOS е погоден и за бизниси каде следењето и управувањето со залихата се од клучно значење.',
      },
      other: {
        title: 'Други бизниси',
        description:
          'OninePOS може да се прилагоди и на други видови бизниси, во зависност од нивните оперативни потреби.',
      },
    },
  },
  productShowcase: {
    eyebrow: 'ПРЕГЛЕД НА ПРОДУКТОТ',
    headline: 'Вашиот бизнис, на едно место.',
    supportingText:
      'Од продажба и залиха до статистики и управување — OninePOS ви овозможува да ги следите клучните активности на вашиот бизнис од едно место.',
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
        description: 'Управувајте со вашиот бизнис од далечина, преку OninePOS.',
      },
      inventorySales: {
        title: 'Залиха и продажба',
        description: 'Продажбата и залихата се управуваат заедно, од едно место.',
      },
    },
    highlight: {
      primary: 'Продажба • Залиха • Вработени • Статистика',
      secondary: 'Генерирајте PDF извештаи за цел период или за одредени датуми.',
    },
    visualLabel: 'Визуелен приказ на управувањето со бизнисот (наскоро)',
  },
  fiscalization: {
    eyebrow: 'ФИСКАЛИЗАЦИЈА',
    headline: 'Фискализацијата, дел од вашето секојдневно работење.',
    supportingText:
      'OninePOS ја вклучува фискализацијата како дел од процесот на продажба, со цел вашето работење да биде поедноставно и поорганизирано.',
    supportingStatement: 'Фискализацијата е интегрирана директно во текот на продажбата во OninePOS.',
    visualLabel: 'Визуелен приказ на фискализацијата (наскоро)',
  },
  payments: {
    eyebrow: 'ПЛАЌАЊА',
    headline: 'Повеќе начини на плаќање. Едно место за продажба.',
    supportingText: 'OninePOS овозможува работење со различни начини на плаќање, вклучувајќи готовина и картички.',
    methods: {
      cash: {
        title: 'Готовина',
        description: 'Прифаќајте готовински плаќања како дел од секојдневната продажба.',
      },
      card: {
        title: 'Картичка',
        description: 'Прифаќајте плаќања со картичка директно преку OninePOS.',
      },
      other: {
        title: 'Други начини',
        description: 'Поддршка и за други начини на плаќање, според потребите на бизнисот.',
      },
    },
    visualLabel: 'Визуелен приказ на плаќањата (наскоро)',
  },
  contact: {
    eyebrow: 'ПОБАРАЈТЕ ДЕМО',
    headline: 'Дознајте како OninePOS може да му помогне на вашиот бизнис.',
    supportingText: 'Пополнете го ова брзо чекор-по-чекор барање и нашиот тим ќе ве контактира.',
  },
  demoWizard: {
    stepIndicator: 'Чекор {current} од {total}',
    steps: {
      step1: {
        title: 'Контакт информации',
        description: 'Внесете ги вашите податоци за нашиот тим да ве контактира.',
        fullName: 'Име и презиме',
        businessName: 'Име на бизнисот',
        email: 'Email адреса',
        phone: 'Телефонски број',
      },
      step2: {
        title: 'Кажете ни за вашиот бизнис',
        description: 'Изберете ја примарната дејност на вашиот бизнис.',
        options: {
          restaurant: 'Ресторан / Кафуле',
          shop: 'Продавница / Малопродажба',
          warehouse: 'Магацин / Големопродажба',
          other: 'Друг бизнис',
        },
      },
      step3: {
        title: 'За што сте заинтересирани?',
        description: 'Изберете ги сите функционалности што ви се потребни.',
        options: {
          pos: 'Пос Терминал (POS)',
          stock: 'Управување со залихи',
          fiscalization: 'Фискализација',
          reports: 'Извештаи и статистика',
          multiLocation: 'Повеќе локации',
          other: 'Други функционалности',
        },
      },
      step4: {
        title: 'Дополнителни информации',
        description: 'Кажете ни малку повеќе за тоа што го барате.',
        placeholder: 'Опишете ги вашите потреби, хардвер или временска рамка...',
      },
      step5: {
        title: 'Претпочитан начин на контакт',
        description: 'Како би сакале нашиот продажен тим да ве контактира?',
        options: {
          phone: 'Телефонски повик',
          email: 'Email порака',
          either: 'Било кој начин (телефон или email)',
        },
        summary: {
          title: 'Преглед на барањето',
          contactLabel: 'Контакт',
          emailLabel: 'Email',
          interestsLabel: 'Избрани се {count} функционалност(и)',
        },
        submitButton: 'Побарајте демо',
      },
    },
    confirmation: {
      title: 'Барањето е примено',
      message: 'Ви благодариме за интересот за OninePOS. Нашиот тим ќе ве контактира наскоро.',
      submitAnother: 'Испратете ново барање',
    },
    navigation: {
      back: 'Назад',
      next: 'Продолжи',
      submitting: 'Испраќање на барањето...',
    },
    validation: {
      nameRequired: 'Внесете име и презиме',
      businessNameRequired: 'Внесете име на бизнисот',
      emailRequired: 'Внесете email адреса',
      emailInvalid: 'Внесете валидна email адреса',
      phoneRequired: 'Внесете телефонски број',
      businessTypeRequired: 'Изберете тип на бизнис',
      interestsRequired: 'Изберете барем една функционалност',
      preferredContactRequired: 'Изберете претпочитан начин на контакт',
      submitFailed: 'Неуспешно испраќање. Ве молиме проверете ја врската и обидете се повторно.',
    },
  },
  finalCta: {
    eyebrow: 'ПОБАРАЈТЕ ДЕМО',
    headline: 'Запознајте го OninePOS.',
    supportingText: 'Дознајте повеќе за решението и разговарајте со нашиот тим.',
    primaryCta: 'Побарајте демо',
  },
}
