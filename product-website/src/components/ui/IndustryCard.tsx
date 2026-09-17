import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import pic1 from '@/assets/pic-1.png'
import pic2 from '@/assets/pic-2.png';
import wearhouseImg from '@/assets/wearhouse-pos.png';

export interface IndustryCardProps {
  id?: string
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * Editorial industry card featuring real product photos for Hospitality/Retail
 * and rich decorative hardware visual compositions for Warehouses/Enterprises.
 */
export function IndustryCard({ id, icon: Icon, title, description, className }: IndustryCardProps) {
  const isRestaurant = id === 'restaurants'
  const isStore = id === 'stores'
  const isWarehouse = id === 'warehouses'

  return (
    <div
      className={cn(
        'group overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover flex flex-col',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-stone-900">
        {isRestaurant ? (
          <>
            <img
              src={pic1}
              alt={title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          </>
        ) : isStore ? (
          <>
            <img
              src={pic2}
              alt={title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          </>
        ) : isWarehouse ? (
          <>
            <img
              src={wearhouseImg}
              alt="Warehouse POS system"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          </>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-900 via-amber-950/30 to-stone-950 p-6">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d3872c_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-stone-900/90 px-4 py-2 text-xs text-stone-300 backdrop-blur shadow-lg">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span>Custom Enterprise Infrastructure</span>
            </div>
          </div>
        )}

        {/* Floating Icon Emblem Badge */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-surface/90 text-brand-600 shadow-md backdrop-blur transition-transform duration-200 group-hover:scale-105">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="rounded-md bg-stone-900/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            {title}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
        </div>
      </div>
    </div>
  )
}
