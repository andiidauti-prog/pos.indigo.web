import { useState } from 'react'
import { cn } from '@/lib/cn'
import pic1 from '@/assets/pic-1.jpg'
import pic2 from '@/assets/pic-2.jpg'
import imgMenu from '@/assets/cashier-interface.jpg'
import imgOrders from '@/assets/orders-checkout.jpg'
import imgTables from '@/assets/tables-pos.jpg'
import imgStats from '@/assets/stats-pos.jpg'

export interface ProductShowcaseVisualProps {
  /** Localized accessible name */
  ariaLabel: string
  className?: string
}

type TabKey = 'terminal' | 'admin' | 'menu' | 'orders' | 'tables' | 'stats'

const tabs: { key: TabKey; label: string; src: string; alt: string; tag: string }[] = [
  {
    key: 'terminal',
    label: 'POS Terminal',
    src: pic1,
    alt: 'onlinePOS touchscreen hardware terminal in live restaurant counter environment',
    tag: 'Hardware Photo',
  },
  {
    key: 'admin',
    label: 'Printer & Admin Setup',
    src: pic2,
    alt: 'onlinePOS hardware setup with touchscreen monitor and compact thermal receipt printer',
    tag: 'Hardware Photo',
  },
  {
    key: 'menu',
    label: 'Cashier Interface',
    src: imgMenu,
    alt: 'onlinePOS intuitive touchscreen order cashier interface',
    tag: 'Software Screen',
  },
  {
    key: 'orders',
    label: 'Orders & Checkout',
    src: imgOrders,
    alt: 'onlinePOS table service order management and billing checkout screen',
    tag: 'Software Screen',
  },
  {
    key: 'tables',
    label: 'Tables & Zones',
    src: imgTables,
    alt: 'onlinePOS real-time floor plan table availability management',
    tag: 'Software Screen',
  },
  {
    key: 'stats',
    label: 'Revenue Analytics',
    src: imgStats,
    alt: 'onlinePOS revenue statistics and business performance analytics dashboard',
    tag: 'Software Screen',
  },
]

export function ProductShowcaseVisual({ ariaLabel, className }: ProductShowcaseVisualProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('terminal')

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
            <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            onlinePOS Showcase
          </div>
        </div>

        {/* View mode switcher */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-surface p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'rounded-md px-3 py-1.5 text-xs font-medium transition-all focus-ring',
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
      <div className="group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-stone-950">
        <img
          key={currentItem.key}
          src={currentItem.src}
          alt={currentItem.alt}
          className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.008]"
          loading="eager"
        />

        {/* Floating details overlay tag */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-lg border border-white/10 bg-stone-900/80 px-3 py-1.5 text-xs font-medium text-stone-200 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span>{currentItem.alt}</span>
          <span className="ml-2 rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-300">
            {currentItem.tag}
          </span>
        </div>
      </div>
    </div>
  )
}
