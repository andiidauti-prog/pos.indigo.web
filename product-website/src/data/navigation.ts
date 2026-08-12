import type { FooterLinkGroup, NavItem } from '@/types/navigation'

/**
 * Single source of truth for the contact/demo route. "Request a demo" and
 * "Contact sales" CTAs across the site both point here — see Milestone 11.
 */
export const CONTACT_ROUTE = '/contact'

/**
 * Structural navigation data only — labels live in the translation dictionary
 * (`t.nav[item.id]`) so the same routes render in every locale.
 */
export const navItems: NavItem[] = [
  { id: 'home', to: '/' },
  { id: 'features', to: '/features' },
  { id: 'businesses', to: '/businesses' },
  { id: 'about', to: '/about' },
  { id: 'contact', to: CONTACT_ROUTE },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: 'product',
    links: [
      { id: 'features', to: '/features' },
      { id: 'businesses', to: '/businesses' },
    ],
  },
  {
    id: 'company',
    links: [
      { id: 'about', to: '/about' },
      { id: 'contact', to: CONTACT_ROUTE },
    ],
  },
]
