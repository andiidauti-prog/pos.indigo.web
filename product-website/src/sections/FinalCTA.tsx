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
          className="relative overflow-hidden rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-surface to-brand-100/30 px-6 py-16 text-center shadow-xl sm:px-12 sm:py-20 lg:py-24"
        >
          {/* Subtle warm glow background accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-sm font-semibold tracking-wide text-brand-600">{t.finalCta.eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{t.finalCta.headline}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">{t.finalCta.supportingText}</p>

            <div className="mt-8 flex justify-center">
              <Button to={CONTACT_ROUTE} size="lg" className="shadow-lg shadow-brand-600/20">
                {t.finalCta.primaryCta}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
