import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { CONTACT_ROUTE } from '@/data/navigation'
import { useTranslations } from '@/lib/locale-context'

export function FinalCTA() {
  const t = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="border-t border-border bg-surface-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={cardVariants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-2xl border border-brand-100 bg-brand-50 px-6 py-16 text-center shadow-card-hover sm:px-12 sm:py-20 lg:py-24"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-600">{t.finalCta.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{t.finalCta.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">{t.finalCta.supportingText}</p>

          <div className="mt-8 flex justify-center">
            <Button to={CONTACT_ROUTE} size="lg">
              {t.finalCta.primaryCta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
