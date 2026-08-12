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

export type NavItemId = 'home' | 'features' | 'businesses' | 'about' | 'contact'
export type FooterGroupId = 'product' | 'company'

export type CapabilityId = 'sales' | 'inventory' | 'fiscalization' | 'reports' | 'remoteManagement' | 'payments'
export type IndustryId = 'restaurants' | 'stores' | 'warehouses' | 'other'
export type ManagementAreaId = 'reports' | 'remoteManagement' | 'inventorySales'
export type PaymentMethodId = 'cash' | 'card' | 'other'
export type BusinessTypeId = 'restaurant' | 'store' | 'warehouse' | 'other'

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
}

export interface BusinessManagementTranslations extends SectionIntro {
  areas: Record<ManagementAreaId, TextItem>
}

export interface FiscalizationTranslations extends SectionIntro {
  supportingStatement: string
}

export interface PaymentsTranslations extends SectionIntro {
  methods: Record<PaymentMethodId, TextItem>
}

export interface ContactFormTranslations {
  nameLabel: string
  companyLabel: string
  emailLabel: string
  phoneLabel: string
  businessTypeLabel: string
  businessTypePlaceholder: string
  businessTypeOptions: Record<BusinessTypeId, string>
  messageLabel: string
  requiredFieldNote: string
  submitLabel: string
  submittingLabel: string
  /**
   * Shown after submit instead of a fake success message — there is no
   * backend/API yet, so this must never claim the message was sent.
   */
  submittedMessage: string
}

export interface ContactTranslations extends SectionIntro {
  form: ContactFormTranslations
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
}
