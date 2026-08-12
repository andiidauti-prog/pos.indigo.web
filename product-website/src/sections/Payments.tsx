import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { PaymentVisual } from '@/components/ui/PaymentVisual'
import { paymentsContent, paymentMethods } from '@/data/payments'

export function Payments() {
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
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand-600">{paymentsContent.eyebrow}</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{paymentsContent.headline}</h2>
              <p className="mt-4 text-lg text-ink-muted">{paymentsContent.supportingText}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {paymentMethods.map((method) => (
                <div key={method.title} className="border-t border-border pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-muted">
                    <method.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-ink">{method.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{method.description}</p>
                </div>
              ))}
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
            <PaymentVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
