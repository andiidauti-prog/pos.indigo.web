import { useState } from 'react'
import { cn } from '@/lib/cn'
import imgMenu from '@/assets/pos-picture-336.jpg'
import imgOrders from '@/assets/orders-checkout.jpg'
import imgTables from '@/assets/tables-pos.jpg'

export interface ProductShowcaseVisualProps {
  /** Localized accessible name */
  ariaLabel: string
  className?: string
}

type TabKey = 'menu' | 'orders' | 'tables'

/**
 * The switcher shows real software screens only. Every other product image is
 * used exactly once elsewhere on the site, so none is repeated here.
 */
const tabs: { key: TabKey; label: string; src: string; alt: string; tag: string }[] = [
  {
    key: 'menu',
    label: 'Cashier Interface',
    src: imgMenu,
    alt: 'OninePOS cashier screen with product menu, categories and current order',
    tag: 'Software Screen',
  },
  {
    key: 'orders',
    label: 'Orders & Checkout',
    src: imgOrders,
    alt: 'OninePOS order list with the selected order ready to charge',
    tag: 'Software Screen',
  },
  {
    key: 'tables',
    label: 'Tables & Zones',
    src: imgTables,
    alt: 'OninePOS table overview showing availability per zone',
    tag: 'Software Screen',
  },
]

export function ProductShowcaseVisual({ ariaLabel, className }: ProductShowcaseVisualProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('menu')

  const currentItem = tabs.find((t) => t.key === activeTab) || tabs[0]

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl transition-all duration-300',
        className,
      )}
    >
      {/* Window Header with interactive View Switcher Tabs */}
      <div className="flex flex-col gap-3 border-b border-border bg-surface-muted p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1 text-xs font-semibold text-ink">
            <span className="h-2 w-2 rounded-full bg-brand-600 motion-safe:animate-pulse" />
            OninePOS Showcase
          </div>
        </div>

        {/* View mode switcher: equal-width 44px segments on phones, inline pills from sm. */}
        <div
          role="group"
          aria-label="Product screens"
          className="grid grid-cols-3 gap-1 rounded-lg border border-border bg-surface p-1 sm:flex sm:flex-wrap sm:items-center sm:gap-1.5"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={activeTab === tab.key}
              className={cn(
                'focus-ring min-h-11 rounded-md px-2 py-1 text-center text-xs font-medium leading-tight transition-all sm:px-3 md:pointer-fine:min-h-9',
                activeTab === tab.key
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-ink-muted hover:bg-surface-muted hover:text-ink',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Image Display Area */}
      {/* Native screenshot ratio (~1.95:1) so no part of the UI is cropped */}
      <div className="group relative aspect-[1920/987] overflow-hidden bg-surface-muted">
        <img
          key={currentItem.key}
          src={currentItem.src}
          alt={currentItem.alt}
          width={1920}
          height={987}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.008]"
          loading="lazy"
        />

        {/* Floating details overlay tag (hidden on phones so it never covers the UI) */}
        <div className="absolute bottom-3 left-3 z-10 hidden items-center gap-2 rounded-lg border border-white/10 bg-stone-900/80 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          {currentItem.tag}
        </div>
      </div>
    </div>
  )
}
