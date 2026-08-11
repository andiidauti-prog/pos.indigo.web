import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

const maxWidthBySize = {
  narrow: 'max-w-3xl',
  default: 'max-w-7xl',
  wide: 'max-w-[90rem]',
} as const

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  size?: keyof typeof maxWidthBySize
  children: ReactNode
}

/**
 * Centers content and applies the site's standard horizontal gutters.
 * This is the single source of truth for page content width.
 */
export function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full px-6 sm:px-8 lg:px-10', maxWidthBySize[size], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
