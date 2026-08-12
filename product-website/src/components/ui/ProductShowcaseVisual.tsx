import { cn } from '@/lib/cn'

export interface ProductShowcaseVisualProps {
  /** Localized accessible name — this illustration stands in for a real product screenshot. */
  ariaLabel: string
  className?: string
}

/**
 * Large, application-style placeholder standing in for a real onlinePOS
 * screenshot. Structure only — no fabricated prices, sales, charts, or
 * copy. Swap the "application body" block below for a real <img> (or a
 * responsive image component) once an approved screenshot exists.
 */
export function ProductShowcaseVisual({ ariaLabel, className }: ProductShowcaseVisualProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-surface shadow-card-hover',
        className,
      )}
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

      {/* Application body */}
      <div className="flex">
        {/* Sidebar skeleton */}
        <div className="hidden w-16 shrink-0 flex-col items-center gap-4 border-r border-border bg-surface-muted py-6 sm:flex">
          <div className="h-8 w-8 rounded-lg bg-brand-100" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-8 w-8 rounded-lg bg-slate-200/70" />
          ))}
        </div>

        {/* Main content skeleton */}
        <div className="flex-1 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="h-6 w-28 rounded-md bg-surface-muted sm:w-40" />
            <div className="flex gap-2">
              <div className="hidden h-8 w-20 rounded-md border border-border sm:block" />
              <div className="h-8 w-8 rounded-md bg-brand-600" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface-muted p-4 lg:col-span-2">
              <div className="flex flex-col gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-md bg-surface" />
                    <div className="h-3 flex-1 rounded-full bg-surface" />
                    <div className="hidden h-3 w-12 rounded-full bg-surface sm:block" />
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden flex-col gap-4 lg:flex">
              <div className="h-24 rounded-lg border border-border bg-surface-muted" />
              <div className="h-24 rounded-lg border border-border bg-surface-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
