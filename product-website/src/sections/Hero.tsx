import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ProductVisualPlaceholder } from '@/components/ui/ProductVisualPlaceholder'
import { CONTACT_ROUTE } from '@/data/navigation'
import { useTranslations } from '@/lib/locale-context'

export function Hero() {
  const t = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  // Parent just orchestrates timing; each child fades/rises in on its own turn
  // so the hero reads as a considered sequence rather than one flat block.
  const contentVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09, delayChildren: shouldReduceMotion ? 0 : 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
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
    <section className="relative overflow-hidden bg-surface pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Decorative background: subtle warm glows + fine dot-grid texture, echoing the
          brand accents used in FinalCTA / IndustryCard so the page feels of one piece. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#9a651d_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-400/15 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        {/* Bottom fade so the section eases into CoreCapabilities' surface-muted tone
            instead of cutting off flat. */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface-muted/60" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold tracking-wide text-brand-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              {t.hero.eyebrow}
            </motion.span>

            {/* text-display: fluid on phones/tablets, resized for the half-width column from lg.
                Final line gets a warm brand-gradient treatment for a premium focal point. */}
            <motion.h1 variants={itemVariants} className="text-display">
              {t.hero.headlineLines.map((line, index) => {
                const isLastLine = index === t.hero.headlineLines.length - 1
                return (
                  <span
                    key={line}
                    className={
                      isLastLine
                        ? 'block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 bg-clip-text text-transparent'
                        : 'block'
                    }
                  >
                    {line}
                  </span>
                )
              })}
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-xl text-base text-ink-muted sm:text-lg">
              {t.hero.supportingText}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Button to={CONTACT_ROUTE} size="lg" className="group w-full sm:w-auto">
                {t.nav.requestDemo}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
              <Button to={CONTACT_ROUTE} size="lg" variant="outline" className="w-full sm:w-auto">
                {t.nav.contactSales}
              </Button>
            </motion.div>
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
