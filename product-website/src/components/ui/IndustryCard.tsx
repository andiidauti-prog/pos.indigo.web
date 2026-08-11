import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface IndustryCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * Editorial industry tile: a large visual placeholder up top (standing in
 * for an approved photo later) with title/description below. Deliberately
 * different composition from CapabilityCard so the section reads distinctly.
 */
export function IndustryCard({ icon: Icon, title, description, className }: IndustryCardProps) {
  return (
    <div
      className={cn(
        'group overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover',
        className,
      )}
    >
      <div
        role="img"
        aria-label={`${title} — визуелен приказ (наскоро)`}
        className="flex aspect-[16/10] items-center justify-center border-b border-border bg-surface-muted"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface text-brand-600 transition-transform duration-200 group-hover:scale-105">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  )
}
