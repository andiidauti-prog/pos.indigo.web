import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ProductShowcaseVisual } from '@/components/ui/ProductShowcaseVisual'
import { useTranslations } from '@/lib/locale-context'

export function ProductShowcase() {
  const t = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const introVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  }

  const visualVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  const highlightVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="border-t border-border bg-surface-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={introVariants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-600">{t.productShowcase.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t.productShowcase.headline}</h2>
          <p className="mt-4 text-lg text-ink-muted">{t.productShowcase.supportingText}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={visualVariants}
          transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.1 }}
          className="mx-auto mt-12 max-w-5xl lg:mt-16"
        >
          <ProductShowcaseVisual />
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-16">
          {t.productShowcase.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={highlightVariants}
              transition={{ duration: 0.4, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="border-t border-border pt-5"
            >
              <h3 className="text-base font-semibold text-ink">{highlight.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
