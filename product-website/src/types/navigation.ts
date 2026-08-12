import type { FooterGroupId, NavItemId } from '@/types/i18n'

export interface NavItem {
  id: NavItemId
  to: string
}

export interface FooterLinkGroup {
  id: FooterGroupId
  links: NavItem[]
}
