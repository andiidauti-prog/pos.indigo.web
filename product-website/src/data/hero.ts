import { CONTACT_SALES_LABEL, REQUEST_DEMO_LABEL } from './navigation'

/**
 * Static Macedonian copy for the homepage hero. Locale-aware content
 * loading is introduced in a later milestone — for now this is the only
 * visible language, matching the rest of the site shell.
 */
export const heroContent = {
  eyebrow: 'onlinePOS',
  headlineLines: ['Вашиот бизнис.', 'Под ваша контрола.'],
  supportingText:
    'Современ POS систем за продажба, залиха, фискализација и управување со вашиот бизнис.',
  primaryCta: REQUEST_DEMO_LABEL,
  secondaryCta: CONTACT_SALES_LABEL,
} as const
