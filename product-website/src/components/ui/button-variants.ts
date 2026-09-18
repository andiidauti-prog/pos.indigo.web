import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-md text-sm font-medium transition-all duration-150 focus-ring',
    'active:scale-[0.98]',
    'disabled:pointer-events-none disabled:opacity-50 disabled:active:scale-100',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-brand-600 text-white shadow-sm shadow-brand-900/10 hover:bg-brand-700 hover:shadow-md hover:shadow-brand-900/15',
        secondary: 'bg-surface-muted text-ink hover:bg-slate-200',
        outline: 'border border-border-strong bg-transparent text-ink hover:border-border-strong hover:bg-surface-muted',
        ghost: 'bg-transparent text-ink hover:bg-surface-muted',
      },
      size: {
        // 44px touch target by default; compact only for a fine pointer at desktop widths.
        sm: 'h-11 px-4 text-sm md:pointer-fine:h-9',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)
