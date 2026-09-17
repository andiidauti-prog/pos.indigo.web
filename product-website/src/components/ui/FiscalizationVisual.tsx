import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import pic2 from '@/assets/pic-2.jpg'

export interface FiscalizationVisualProps {
  /** Localized accessible name */
  ariaLabel: string
  className?: string
}

/**
 * Display real fiscal thermal receipt printer and compliance setup from pic-2.
 */
export function FiscalizationVisual({ ariaLabel, className }: FiscalizationVisualProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn('group overflow-hidden rounded-2xl border border-border bg-surface shadow-xl', className)}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-border bg-surface-muted px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="ml-2 flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            onlinePOS Fiscalization & Thermal Printer
          </div>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
          <Check className="h-3.5 w-3.5" />
          <span>Compliant</span>
        </div>
      </div>

      {/* Real Hardware Receipt Printer & Fiscal Setup Photo */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
        <img
          src={pic2}
          alt="onlinePOS fiscal receipt thermal printer and admin hardware setup (pic-2)"
          className="h-full w-full object-cover object-right-bottom transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />

        {/* Floating Fiscalization Verified Badge */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-stone-900/90 px-3 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-lg">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-stone-950">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </span>
          <span>Integrated Thermal Fiscal Printer</span>
        </div>
      </div>
    </div>
  )
}
