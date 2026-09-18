import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { CapabilityCard } from '@/components/ui/CapabilityCard'
import { capabilities } from '@/data/coreCapabilities'
import { useTranslations } from '@/lib/locale-context'

export function CoreCapabilities() {
  const t = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="border-t border-border bg-surface-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-600">{t.coreCapabilities.eyebrow}</p>
          <h2 className="mt-3 text-heading">{t.coreCapabilities.headline}</h2>
          <p className="mt-4 text-lg text-ink-muted">{t.coreCapabilities.supportingText}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const copy = t.coreCapabilities.items[capability.id]
            return (
              <motion.div
                key={capability.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={cardVariants}
                transition={{ duration: 0.45, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.06 }}
                className={capability.gridClassName}
              >
                <CapabilityCard
                  icon={capability.icon}
                  title={copy.title}
                  description={copy.description}
                  variant={capability.variant}
                  className="h-full"
                />
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
