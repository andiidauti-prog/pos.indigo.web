import type { FooterLinkGroup, NavItem } from '@/types/navigation'

/**
 * Structural navigation data only — labels live in the translation dictionary
 * (`t.nav[item.id]`) so the same routes render in every locale.
 */
export const navItems: NavItem[] = [
  { id: 'home', to: '/' },
  { id: 'features', to: '/features' },
  { id: 'businesses', to: '/businesses' },
  { id: 'about', to: '/about' },
  { id: 'contact', to: '/contact' },
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
      { id: 'contact', to: '/contact' },
    ],
  },
]
