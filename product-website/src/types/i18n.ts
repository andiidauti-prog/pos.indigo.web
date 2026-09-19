/**
 * Supported website locales.
 * mk = Macedonian, sq = Albanian, en = English.
 */
export type Locale = 'mk' | 'sq' | 'en'

export interface LocaleConfig {
  code: Locale
  /** Language name, written in that language (for the language switcher). */
  label: string
  /** BCP 47 tag used for the html[lang] attribute. */
  htmlLang: string
}

/**
 * Shape of a single translated title/description pair — used for any
 * section that renders a list of icon-bearing items (capabilities,
 * industries, management areas, payment methods, ...).
 */
export interface TextItem {
  title: string
  description: string
}

/** Shared shape for a section's intro block (eyebrow + headline + supporting text). */
export interface SectionIntro {
  eyebrow: string
  headline: string
  supportingText: string
}

export type NavItemId = 'home' | 'contact'
export type FooterGroupId = 'product' | 'company'

export type CapabilityId = 'sales' | 'inventory' | 'fiscalization' | 'reports' | 'remoteManagement' | 'payments'
export type IndustryId = 'restaurants' | 'stores' | 'warehouses' | 'other'
export type ManagementAreaId = 'reports' | 'remoteManagement' | 'inventorySales'
export type PaymentMethodId = 'cash' | 'card' | 'other'

export interface NavTranslations extends Record<NavItemId, string> {
  requestDemo: string
  contactSales: string
  openMenu: string
  closeMenu: string
}

export interface FooterTranslations {
  productGroup: string
  companyGroup: string
  languagesLabel: string
  /** Contains the literal placeholder "{year}", replaced at render time. */
  copyright: string
}

export interface LanguageSelectorTranslations {
  selectLanguage: string
}

export interface HeroTranslations {
  eyebrow: string
  headlineLines: [string, string]
  supportingText: string
}

export interface CoreCapabilitiesTranslations extends SectionIntro {
  items: Record<CapabilityId, TextItem>
}

export interface IndustriesTranslations extends SectionIntro {
  items: Record<IndustryId, TextItem>
}

export interface ProductShowcaseTranslations extends SectionIntro {
  highlights: TextItem[]
  /** Accessible name for the section's decorative product-preview illustration. */
  visualLabel: string
}

export interface BusinessManagementTranslations extends SectionIntro {
  areas: Record<ManagementAreaId, TextItem>
  /** Compact feature highlight: primary capability line + supporting PDF-reporting line. */
  highlight: {
    primary: string
    secondary: string
  }
  /** Accessible name for the section's decorative product-preview illustration. */
  visualLabel: string
}

export interface FiscalizationTranslations extends SectionIntro {
  supportingStatement: string
  /** Accessible name for the section's decorative product-preview illustration. */
  visualLabel: string
}

export interface PaymentsTranslations extends SectionIntro {
  methods: Record<PaymentMethodId, TextItem>
  /** Accessible name for the section's decorative product-preview illustration. */
  visualLabel: string
}

export type ContactTranslations = SectionIntro

export interface DemoWizardTranslations {
  stepIndicator: string
  steps: {
    step1: {
      title: string
      description: string
      fullName: string
      businessName: string
      email: string
      phone: string
    }
    step2: {
      title: string
      description: string
      options: {
        restaurant: string
        shop: string
        warehouse: string
        other: string
      }
    }
    step3: {
      title: string
      description: string
      options: {
        pos: string
        stock: string
        fiscalization: string
        reports: string
        multiLocation: string
        other: string
      }
    }
    step4: {
      title: string
      description: string
      placeholder: string
    }
    step5: {
      title: string
      description: string
      options: {
        phone: string
        email: string
        either: string
      }
      summary: {
        title: string
        contactLabel: string
        emailLabel: string
        /** Contains the literal placeholder "{count}", replaced at render time. */
        interestsLabel: string
      }
      submitButton: string
    }
  }
  confirmation: {
    title: string
    message: string
    submitAnother: string
  }
  navigation: {
    back: string
    next: string
    submitting: string
  }
  validation: {
    nameRequired: string
    businessNameRequired: string
    emailRequired: string
    emailInvalid: string
    phoneRequired: string
    businessTypeRequired: string
    interestsRequired: string
    preferredContactRequired: string
    submitFailed: string
  }
}

export interface FinalCtaTranslations extends SectionIntro {
  primaryCta: string
}

export interface Translations {
  nav: NavTranslations
  footer: FooterTranslations
  languageSelector: LanguageSelectorTranslations
  hero: HeroTranslations
  coreCapabilities: CoreCapabilitiesTranslations
  industries: IndustriesTranslations
  productShowcase: ProductShowcaseTranslations
  businessManagement: BusinessManagementTranslations
  fiscalization: FiscalizationTranslations
  payments: PaymentsTranslations
  contact: ContactTranslations
  demoWizard: DemoWizardTranslations
  finalCta: FinalCtaTranslations
}
