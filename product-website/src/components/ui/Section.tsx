import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

const backgroundByVariant = {
  default: 'bg-surface',
  muted: 'bg-surface-muted',
  inverted: 'bg-surface-inverted text-white',
} as const

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  variant?: keyof typeof backgroundByVariant
  children: ReactNode
}

/**
 * Structural wrapper that gives every page section consistent vertical
 * rhythm and background handling. Holds no content of its own.
 */
export function Section({
  as: Tag = 'section',
  variant = 'default',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn('py-16 sm:py-20 lg:py-28', backgroundByVariant[variant], className)} {...props}>
      {children}
    </Tag>
  )
}
