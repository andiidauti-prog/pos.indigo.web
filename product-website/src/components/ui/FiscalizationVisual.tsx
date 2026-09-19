import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import imgFiscal from '@/assets/pos-picture-337.jpg'

export interface FiscalizationVisualProps {
  /** Localized accessible name */
  ariaLabel: string
  className?: string
}

/**
 * Display the real receipt printer and counter hardware (pos-picture-337).
 */
export function FiscalizationVisual({ ariaLabel, className }: FiscalizationVisualProps) {
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
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
            <span className="truncate">OninePOS Fiscalization & Thermal Printer</span>
          </div>
        </div>
        <div className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-emerald-700 min-[400px]:flex">
          <Check className="h-3.5 w-3.5" />
          <span>Compliant</span>
        </div>
      </div>

      {/* Real receipt printer, printed receipts and card reader (pos-picture-337),
          zoomed into the lower-right of the photo so the hardware is the subject. */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
        <img
          src={imgFiscal}
          alt="OninePOS thermal receipt printer, printed receipts and card reader on the counter"
          width={1433}
          height={736}
          className="h-full w-full origin-bottom-right scale-[1.7] object-cover object-right-bottom transition-transform duration-500 group-hover:scale-[1.75]"
          loading="lazy"
        />

        {/* Floating Fiscalization Verified Badge */}
        <div className="absolute right-3 top-3 z-10 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-lg sm:right-4 sm:top-4 border border-emerald-500/30 bg-stone-900/90 px-3 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-lg">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-stone-950">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </span>
          <span className="leading-tight">Integrated Thermal Fiscal Printer</span>
        </div>
      </div>
    </div>
  )
}
