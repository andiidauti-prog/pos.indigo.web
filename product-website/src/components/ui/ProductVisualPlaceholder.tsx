import { cn } from '@/lib/cn'
import pic1 from '@/assets/pic-1.png'
import pic2 from '@/assets/pic-2.png'

export interface ProductVisualPlaceholderProps {
  className?: string
}

/**
 * Hero visual featuring real onlinePOS hardware photos (pic-1 & pic-2).
 * Integrates the primary point-of-sale terminal on the counter with an
 * overlapping inset of the admin insights dashboard and receipt printer setup.
 */
export function ProductVisualPlaceholder({ className }: ProductVisualPlaceholderProps) {
  return (
    <div className={cn('relative mx-auto w-full max-w-2xl xl:max-w-none', className)}>
      {/* Warm ambient background glow matching the hardware photo lighting */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/15 via-amber-200/20 to-transparent blur-2xl dark:from-amber-600/10"
        aria-hidden="true"
      />

      {/* Main composition container */}
      <div className="relative rounded-2xl border border-border bg-stone-900/5 p-2 sm:p-3 shadow-2xl backdrop-blur-sm">
        {/* Main POS Terminal photo (pic-1: Touchscreen POS ordering hardware on lounge counter) */}
        <div className="group relative overflow-hidden rounded-xl border border-stone-800/20 bg-stone-950 shadow-card">
          <div className="flex items-center justify-between border-b border-stone-800/40 bg-stone-900/90 px-4 py-2 text-xs text-stone-300 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-medium">onlinePOS Hardware Terminal</span>
            </div>
            <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[11px] font-semibold text-amber-300">
              Live Counter Setup
            </span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
            <img
              src={pic1}
              alt="onlinePOS touchscreen ordering terminal hardware on counter (pic-1)"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
              loading="eager"
            />
          </div>
        </div>

        {/* Secondary overlapping card (pic-2: Admin insights dashboard & compact thermal printer setup) */}
        <div className="absolute -bottom-4 -right-2 z-10 w-3/5 max-w-[280px] sm:-bottom-6 sm:-right-4 sm:max-w-[340px] rounded-xl border-2 border-surface bg-surface p-1.5 shadow-2xl transition-transform duration-300 hover:translate-y-[-2px]">
          <div className="overflow-hidden rounded-lg border border-border bg-stone-900">
            <div className="flex items-center justify-between border-b border-border bg-surface-muted px-2.5 py-1 text-[11px] font-medium text-ink-muted">
              <span className="truncate">Admin & Printer Setup</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
              <img
                src={pic2}
                alt="onlinePOS admin management insights dashboard and receipt printer (pic-2)"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
