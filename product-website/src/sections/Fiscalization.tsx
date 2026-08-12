import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { FiscalizationVisual } from '@/components/ui/FiscalizationVisual'
import { fiscalizationContent } from '@/data/fiscalization'

export function Fiscalization() {
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
    <section className="border-t border-border bg-surface-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={contentVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand-600">{fiscalizationContent.eyebrow}</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{fiscalizationContent.headline}</h2>
              <p className="mt-4 text-lg text-ink-muted">{fiscalizationContent.supportingText}</p>
            </div>

            <div className="flex items-start gap-3 border-t border-border pt-6">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{fiscalizationContent.supportingStatement}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={visualVariants}
            transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <FiscalizationVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
