import { DemoRequestForm } from '@/components/forms/DemoRequestForm'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { useTranslations } from '@/lib/locale-context'

export function ContactPage() {
  const t = useTranslations()

  return (
    <Section className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-10">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-600">{t.contact.eyebrow}</p>
          <h1 className="mt-3 text-heading">{t.contact.headline}</h1>
          <p className="mt-4 text-base sm:text-lg text-ink-muted">{t.contact.supportingText}</p>
        </div>

        <DemoRequestForm />
      </Container>
    </Section>
  )
}
