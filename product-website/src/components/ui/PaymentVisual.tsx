import { cn } from '@/lib/cn'

export interface PaymentVisualProps {
  /** Localized accessible name — this illustration stands in for a real product screenshot. */
  ariaLabel: string
  className?: string
}

/**
 * Abstract, clearly non-functional placeholder for the payments part of
 * onlinePOS. A terminal silhouette sits between a cash silhouette and a
 * card silhouette to suggest "multiple methods, one point of sale" — no
 * card numbers, amounts, transaction IDs, or provider/bank marks. Swap for
 * a real, approved image once one exists.
 */
export function PaymentVisual({ ariaLabel, className }: PaymentVisualProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
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

      {/* Abstract terminal + card + cash composition — no payment data */}
      <div className="flex justify-center bg-surface-muted p-8 sm:p-12">
        <div className="relative flex h-48 w-full max-w-[260px] items-center justify-center sm:h-56">
          {/* Cash silhouette */}
          <div className="absolute left-0 top-9 flex h-14 w-20 -rotate-6 items-center justify-center rounded-md border border-border bg-surface shadow-card sm:left-2 sm:top-11 sm:h-16 sm:w-24">
            <span className="h-5 w-5 rounded-full border-2 border-slate-300" />
          </div>

          {/* Terminal silhouette */}
          <div className="relative z-10 w-36 rounded-xl border border-border bg-surface p-3 shadow-card-hover sm:w-40">
            <div className="h-14 rounded-md bg-brand-50 sm:h-16" />
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-3 rounded-sm bg-slate-200" />
              ))}
            </div>
            <div className="mt-2.5 h-1.5 rounded-full bg-slate-300" />
          </div>

          {/* Card silhouette */}
          <div className="absolute right-0 top-5 z-20 h-14 w-20 rotate-6 rounded-lg bg-brand-600 p-2.5 shadow-card-hover sm:right-2 sm:top-7 sm:h-16 sm:w-24">
            <div className="h-3 w-4 rounded-sm bg-white/30" />
            <div className="mt-4 h-1.5 w-9 rounded-full bg-white/40 sm:w-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
