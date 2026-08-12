import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface FiscalizationVisualProps {
  /** Localized accessible name — this illustration stands in for a real product screenshot. */
  ariaLabel: string
  className?: string
}

const TEETH = 10
const TOOTH_DEPTH = 8

/**
 * Builds a zigzag polygon for the receipt silhouette's bottom edge. Purely
 * decorative geometry — not derived from any real fiscal document.
 */
function buildTornEdgeClipPath() {
  const points = ['0% 0%', '100% 0%']
  const step = 100 / TEETH

  for (let i = 0; i <= TEETH; i++) {
    const x = 100 - i * step
    const y = i % 2 === 0 ? 100 : 100 - TOOTH_DEPTH
    points.push(`${x}% ${y}%`)
  }

  return `polygon(${points.join(', ')})`
}

const tornEdgeClipPath = buildTornEdgeClipPath()
const receiptLineWidths = ['w-full', 'w-5/6', 'w-full', 'w-2/3', 'w-4/5']

/**
 * Abstract, clearly non-functional placeholder for the fiscalization part of
 * onlinePOS. The receipt silhouette carries no numbers, tax IDs, QR codes,
 * fiscal device UI, or government marks — structure only. Swap for a real,
 * approved screenshot once the fiscalization implementation is finalized.
 */
export function FiscalizationVisual({ ariaLabel, className }: FiscalizationVisualProps) {
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

      {/* Abstract receipt silhouette — no fiscal data */}
      <div className="flex justify-center bg-surface-muted p-8 sm:p-10">
        <div className="relative w-full max-w-[220px]">
          <div
            className="border border-border bg-surface p-5 pb-8 shadow-card"
            style={{ clipPath: tornEdgeClipPath }}
          >
            <div className="mx-auto h-2 w-16 rounded-full bg-brand-100" />
            <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-slate-200" />

            <div className="mt-5 border-t border-dashed border-border" />

            <div className="mt-5 flex flex-col gap-2.5">
              {receiptLineWidths.map((width, i) => (
                <div key={i} className={cn('h-1.5 rounded-full bg-slate-200', width)} />
              ))}
            </div>
          </div>

          {/* Abstract confirmation indicator */}
          <div className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 shadow-card-hover ring-4 ring-surface-muted">
            <Check className="h-4 w-4 text-white" aria-hidden="true" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
