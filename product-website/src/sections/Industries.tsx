import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { IndustryCard } from '@/components/ui/IndustryCard'
import { industries } from '@/data/industries'
import { useTranslations } from '@/lib/locale-context'

export function Industries() {
  const t = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-brand-600">{t.industries.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.industries.headline}</h2>
          <p className="mt-4 text-lg text-ink-muted">{t.industries.supportingText}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {industries.map((industry, index) => {
            const copy = t.industries.items[industry.id]
            return (
              <motion.div
                key={industry.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={cardVariants}
                transition={{ duration: 0.45, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.06 }}
              >
                <IndustryCard icon={industry.icon} title={copy.title} description={copy.description} className="h-full" />
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
