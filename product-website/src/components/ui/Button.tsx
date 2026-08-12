import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { buttonVariants } from './button-variants'

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  className?: string
  children: ReactNode
}

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never }
type ButtonAsLink = ButtonBaseProps & Omit<ComponentProps<typeof Link>, 'className' | 'children'>

export type ButtonProps = ButtonAsButton | ButtonAsLink

/**
 * Renders a <button> by default, or a react-router <Link> when a `to` prop
 * is passed — same visual variants either way, so CTAs can navigate without
 * a separate "link button" component.
 */
export function Button({ className, variant, size, children, ...rest }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if ('to' in rest) {
    const { to, ...linkProps } = rest as ButtonAsLink
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
