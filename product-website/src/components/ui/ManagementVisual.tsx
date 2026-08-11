import { cn } from '@/lib/cn'

export interface ManagementVisualProps {
  className?: string
}

const chartBarHeights = ['h-10', 'h-16', 'h-8', 'h-20', 'h-12', 'h-24', 'h-14']

/**
 * Placeholder for a real business-management/statistics screenshot. The
 * stat blocks and chart silhouette carry no numbers, percentages, axis
 * labels, or legends — structure only, nothing that could be mistaken for
 * real data. Swap for a real <img> once an approved screenshot exists.
 */
export function ManagementVisual({ className }: ManagementVisualProps) {
  return (
    <div
      role="img"
      aria-label="onlinePOS — визуелен приказ на управувањето со бизнисот (наскоро)"
      className={cn('overflow-hidden rounded-2xl border border-border bg-surface shadow-card-hover', className)}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-border bg-surface-muted px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          onlinePOS
        </div>
      </div>

      {/* Abstract statistics + chart skeleton — no data */}
      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-border bg-surface-muted p-4">
              <div className="h-2 w-10 rounded-full bg-slate-300" />
              <div className="mt-3 h-5 w-14 rounded-md bg-surface" />
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-border bg-surface-muted p-5 sm:mt-6">
          <div className="h-2.5 w-20 rounded-full bg-slate-300" />
          <div className="mt-5 flex h-24 items-end gap-2 sm:gap-3">
            {chartBarHeights.map((height, i) => (
              <div key={i} className={cn('flex-1 rounded-t-md bg-brand-100', height)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
