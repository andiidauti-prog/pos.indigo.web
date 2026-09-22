import type { FooterLinkGroup, NavItem } from '@/types/navigation'

/**
 * Single source of truth for the contact/demo route. "Request a demo" and
 * "Contact sales" CTAs across the site both point here — see Milestone 11.
 */
export const CONTACT_ROUTE = '/contact'

/** OninePOS's official Instagram profile — social links across the site point here. */
export const INSTAGRAM_URL = 'https://www.instagram.com/onine.pos'

/** OninePOS's contact phone number. `tel:` link target and its display format. */
export const PHONE_TEL = 'tel:+38970593560'
export const PHONE_DISPLAY = '+389 70 593 560'

/**
 * Structural navigation data only — labels live in the translation dictionary
 * (`t.nav[item.id]`) so the same routes render in every locale.
 */
export const navItems: NavItem[] = [
  { id: 'home', to: '/' },
  { id: 'contact', to: CONTACT_ROUTE },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: 'company',
    links: [
      { id: 'contact', to: CONTACT_ROUTE },
    ],
  },
];
