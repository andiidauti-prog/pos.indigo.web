import { cn } from '@/lib/cn'

export interface ProductVisualPlaceholderProps {
  className?: string
}

/**
 * Framed stand-in for a real onlinePOS product screenshot. Purely
 * abstract structure — no fabricated numbers, charts, or UI copy — so it
 * reads as an intentional design choice rather than a broken image.
 * Swap the "layout skeleton" block below for a real <img> once an
 * approved screenshot exists.
 */
export function ProductVisualPlaceholder({ className }: ProductVisualPlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-surface shadow-card-hover',
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-border bg-surface-muted px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          onlinePOS
        </div>
      </div>

      {/* Abstract layout skeleton — no product data */}
      <div className="flex gap-4 p-5 sm:p-6">
        <div className="hidden flex-col gap-3 sm:flex">
          <div className="h-8 w-8 rounded-md bg-slate-100" />
          <div className="h-8 w-8 rounded-md bg-slate-100" />
          <div className="h-8 w-8 rounded-md bg-slate-100" />
          <div className="h-8 w-8 rounded-md bg-slate-100" />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="h-7 w-2/5 rounded-md bg-surface-muted" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="col-span-2 h-28 rounded-lg border border-border bg-surface-muted" />
            <div className="h-28 rounded-lg border border-border bg-surface-muted" />
            <div className="h-16 rounded-lg border border-border bg-surface-muted" />
            <div className="h-16 rounded-lg border border-border bg-surface-muted" />
            <div className="h-16 rounded-lg border border-border bg-surface-muted" />
          </div>
        </div>
      </div>
    </div>
  )
}
