import { cn } from '@/lib/cn'
import imgStats from '@/assets/stats-pos.jpg'

export interface ManagementVisualProps {
  /** Localized accessible name */
  ariaLabel: string
  className?: string
}

/**
 * Display real OninePOS Statistics and Analytics dashboard screenshot
 * in the Business Management section.
 */
export function ManagementVisual({ ariaLabel, className }: ManagementVisualProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn('group overflow-hidden rounded-2xl border border-border bg-surface shadow-xl', className)}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-muted px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="hidden shrink-0 gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex min-w-0 items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted sm:ml-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
            <span className="truncate">OninePOS Management & Statistics</span>
          </div>
        </div>
        <span className="hidden shrink-0 rounded bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700 min-[400px]:inline-block">
          Analytics
        </span>
      </div>

      {/* Real Statistics Screenshot */}
      <div className="relative aspect-[1750/899] overflow-hidden bg-surface-muted">
        <img
          src={imgStats}
          alt="OninePOS statistics screen with daily revenue, orders and 15-day summary"
          width={1750}
          height={899}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
          loading="lazy"
        />
      </div>
    </div>
  )
}
