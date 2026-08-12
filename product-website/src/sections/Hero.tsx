import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ProductVisualPlaceholder } from '@/components/ui/ProductVisualPlaceholder'
import { useTranslations } from '@/lib/locale-context'

export function Hero() {
  const t = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  }

  const visualVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const, delay: shouldReduceMotion ? 0 : 0.1 },
    },
  }

  return (
    <section className="bg-surface pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex flex-col gap-6 xl:gap-8"
          >
            <p className="text-sm font-semibold tracking-wide text-brand-600">{t.hero.eyebrow}</p>

            {/* Sized to stay on two lines down to ~360px phones and once xl:grid-cols-2 narrows this column. */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
              {t.hero.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="max-w-xl text-lg text-ink-muted">{t.hero.supportingText}</p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg">{t.nav.requestDemo}</Button>
              <Button size="lg" variant="outline">
                {t.nav.contactSales}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={visualVariants}
            className="mx-auto w-full max-w-2xl xl:max-w-none"
          >
            <ProductVisualPlaceholder />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
