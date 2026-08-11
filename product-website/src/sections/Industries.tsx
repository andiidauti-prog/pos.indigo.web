import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { IndustryCard } from '@/components/ui/IndustryCard'
import { industries, industriesContent } from '@/data/industries'

export function Industries() {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-brand-600">{industriesContent.eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{industriesContent.headline}</h2>
          <p className="mt-4 text-lg text-ink-muted">{industriesContent.supportingText}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariants}
              transition={{ duration: 0.45, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.06 }}
            >
              <IndustryCard
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
