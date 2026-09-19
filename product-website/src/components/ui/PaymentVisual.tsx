import { cn } from '@/lib/cn'
import imgPayments from '@/assets/pos-picture-335.jpg'

export interface PaymentVisualProps {
  /** Localized accessible name */
  ariaLabel: string
  className?: string
}

/**
 * Real OninePOS counter photo with the orders screen, receipt printer and
 * card reader in frame. Cropped to 4:3 around the screen and payment hardware;
 * shown as a photo card (no window chrome) to differ from the screenshot frames.
 */
export function PaymentVisual({ ariaLabel, className }: PaymentVisualProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        'group rounded-3xl bg-gradient-to-br from-brand-50 via-brand-100/40 to-surface-muted p-2.5 sm:p-3',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-900 shadow-xl ring-1 ring-stone-900/10">
        <img
          src={imgPayments}
          alt="OninePOS orders screen beside a receipt printer and card reader at the counter"
          width={1432}
          height={736}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </div>
  )
}
