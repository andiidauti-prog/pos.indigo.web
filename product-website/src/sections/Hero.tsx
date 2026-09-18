import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ProductVisualPlaceholder } from '@/components/ui/ProductVisualPlaceholder'
import { CONTACT_ROUTE } from '@/data/navigation'
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <p className="text-sm font-semibold tracking-wide text-brand-600">{t.hero.eyebrow}</p>

            {/* text-display: fluid on phones/tablets, resized for the half-width column from lg. */}
            <h1 className="text-display">
              {t.hero.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="max-w-xl text-base text-ink-muted sm:text-lg">{t.hero.supportingText}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button to={CONTACT_ROUTE} size="lg" className="w-full sm:w-auto">
                {t.nav.requestDemo}
              </Button>
              <Button to={CONTACT_ROUTE} size="lg" variant="outline" className="w-full sm:w-auto">
                {t.nav.contactSales}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={visualVariants}
            className="mx-auto w-full max-w-2xl lg:max-w-none"
          >
            <ProductVisualPlaceholder />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
