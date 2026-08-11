import type { FooterLinkGroup, NavItem } from '@/types/navigation'

export const REQUEST_DEMO_LABEL = 'Побарајте демо'
export const CONTACT_SALES_LABEL = 'Контактирајте нè'

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Businesses', to: '/businesses' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Businesses', to: '/businesses' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]
