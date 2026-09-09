import { cn } from '@/lib/cn'
import imgOrders from '@/assets/image (3).png'

export interface PaymentVisualProps {
  /** Localized accessible name */
  ariaLabel: string
  className?: string
}

/**
 * Display real onlinePOS Orders & Payment processing screen.
 */
export function PaymentVisual({ ariaLabel, className }: PaymentVisualProps) {
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
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            onlinePOS Order & Payment Checkout
          </div>
        </div>
        <span className="rounded bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-600">
          Transactions
        </span>
      </div>

      {/* Real Orders & Payments Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
        <img
          src={imgOrders}
          alt="onlinePOS active order billing and payment checkout screen"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
          loading="lazy"
        />
      </div>
    </div>
  )
}
