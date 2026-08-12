import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ManagementVisual } from '@/components/ui/ManagementVisual'
import { managementAreas } from '@/data/businessManagement'
import { useTranslations } from '@/lib/locale-context'

export function BusinessManagement() {
  const t = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  }

  const visualVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={contentVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-10 lg:order-2"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-brand-600">
                {t.businessManagement.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{t.businessManagement.headline}</h2>
              <p className="mt-4 text-lg text-ink-muted">{t.businessManagement.supportingText}</p>
            </div>

            <div className="flex flex-col gap-6">
              {managementAreas.map((area) => {
                const copy = t.businessManagement.areas[area.id]
                return (
                  <div key={area.id} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <area.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{copy.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{copy.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={visualVariants}
            transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.1 }}
            className="lg:order-1"
          >
            <ManagementVisual ariaLabel={t.businessManagement.visualLabel} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
