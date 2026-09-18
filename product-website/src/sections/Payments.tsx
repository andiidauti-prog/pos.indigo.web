import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { PaymentVisual } from '@/components/ui/PaymentVisual'
import { paymentMethods } from '@/data/payments'
import { useTranslations } from '@/lib/locale-context'

export function Payments() {
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={contentVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-10 lg:order-2"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-brand-600">{t.payments.eyebrow}</p>
              <h2 className="mt-3 text-heading">{t.payments.headline}</h2>
              <p className="mt-4 text-lg text-ink-muted">{t.payments.supportingText}</p>
            </div>

            {/* 3 columns only where the text column is wide enough; stacked in the narrow lg two-column layout. */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {paymentMethods.map((method) => {
                const copy = t.payments.methods[method.id]
                return (
                  <div key={method.id} className="border-t border-border pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-muted">
                      <method.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-ink">{copy.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{copy.description}</p>
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
            <PaymentVisual ariaLabel={t.payments.visualLabel} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
