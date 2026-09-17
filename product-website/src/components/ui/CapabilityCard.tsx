import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface CapabilityCardProps {
  icon: LucideIcon
  title: string
  description: string
  /** default: icon-over-text card. featured: larger, emphasized. banner: full-width, icon beside text on sm+. */
  variant?: 'default' | 'featured' | 'banner'
  className?: string
}

export function CapabilityCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
  className,
}: CapabilityCardProps) {
  const isFeatured = variant === 'featured'
  const isBanner = variant === 'banner'

  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface p-6 shadow-card transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover',
        isFeatured && 'border-brand-200/70 bg-gradient-to-br from-brand-50/60 via-surface to-surface',
        isBanner && 'border-brand-200/70 bg-gradient-to-r from-brand-50/50 via-surface to-surface',
        isBanner ? 'flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6' : 'flex flex-col gap-4',
        className,
      )}
    >
      <div
        className={cn(
          'flex shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600',
          isFeatured ? 'h-12 w-12' : 'h-10 w-10',
        )}
      >
        <Icon className={isFeatured ? 'h-6 w-6' : 'h-5 w-5'} aria-hidden="true" />
      </div>

      <div>
        <h3 className={cn('font-semibold text-ink', isFeatured ? 'text-xl' : 'text-base')}>{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  )
}
