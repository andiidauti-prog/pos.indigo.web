import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'
import pic1 from '@/assets/pic-1.jpg'
import fiscalPrinter from '@/assets/element-1-cutout.webp'

export interface ProductVisualPlaceholderProps {
  className?: string
}

/**
 * Hero visual featuring the real OninePOS counter terminal photo (pic-1).
 * Each product image is used once across the site, so depth comes from a
 * layered backdrop panel rather than a second photo.
 *
 * A transparent cut-out of the fiscal receipt printer (element-1) sits on the
 * bottom-left corner of the frame as a floating element: it rises in after the
 * photo settles, then drifts gently while its ground shadow breathes in sync.
 */
export function ProductVisualPlaceholder({ className }: ProductVisualPlaceholderProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={cn('relative mx-auto w-full max-w-2xl lg:max-w-none', className)}>
      {/* Warm ambient background glow matching the hardware photo lighting */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/15 via-amber-200/20 to-transparent blur-2xl"
        aria-hidden="true"
      />

      {/* Offset backdrop panel adds depth behind the photo */}
      <div
        className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-brand-200/60 bg-brand-50 sm:translate-x-4 sm:translate-y-4"
        aria-hidden="true"
      />

      {/* Main composition container */}
      <div className="relative rounded-2xl border border-border bg-surface p-2 shadow-2xl sm:p-3">
        <div className="group relative overflow-hidden rounded-xl border border-stone-800/20 bg-stone-950 shadow-card">
          <div className="flex items-center justify-between border-b border-stone-800/40 bg-stone-900/90 px-4 py-2 text-xs text-stone-300 backdrop-blur">
            <div className="flex min-w-0 items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                {!shouldReduceMotion && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
                )}
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="truncate font-medium">OninePOS Hardware Terminal</span>
            </div>
            <span className="ml-3 hidden shrink-0 rounded bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-300 sm:inline-block">
              Live Counter Setup
            </span>
          </div>

          {/* Native ratio of the photo (~16:9) so the terminal is never cropped */}
          <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
            <img
              src={pic1}
              alt="OninePOS touchscreen ordering terminal on a restaurant terrace counter"
              width={1671}
              height={941}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Floating fiscal printer. Overhang stays within the page gutter at every width. */}
      <motion.div
        className="pointer-events-none absolute -bottom-5 -left-2 z-20 w-[34%] sm:-bottom-7 sm:-left-5 sm:w-[32%] lg:-left-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.88, rotate: -5 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        transition={{
          opacity: { duration: 0.7, ease: 'easeOut', delay: 0.55 },
          default: { type: 'spring', stiffness: 70, damping: 15, mass: 1, delay: 0.55 },
        }}
      >
        {/* Ground shadow: shrinks and fades as the printer lifts */}
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-1 left-[8%] h-[9%] w-[84%] rounded-[50%] bg-stone-950/40 blur-md"
          animate={shouldReduceMotion ? undefined : { scaleX: [1, 0.9, 1], opacity: [0.9, 0.55, 0.9] }}
          transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity, delay: 1.7 }}
        />
        <motion.img
          src={fiscalPrinter}
          alt="OninePOS fiscal thermal receipt printer"
          width={718}
          height={620}
          decoding="async"
          loading="eager"
          className="relative block h-auto w-full drop-shadow-[0_16px_14px_rgba(28,25,23,0.35)]"
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity, delay: 1.7 }}
        />
      </motion.div>
    </div>
  )
}
