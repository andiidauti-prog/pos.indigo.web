import { ContactForm } from '@/components/forms/ContactForm'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { useTranslations } from '@/lib/locale-context'

export function ContactPage() {
  const t = useTranslations()

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-600">{t.contact.eyebrow}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl">{t.contact.headline}</h1>
          <p className="mt-4 text-lg text-ink-muted">{t.contact.supportingText}</p>
        </div>

        <Card className="mx-auto mt-12 max-w-xl p-6 sm:p-8 lg:mt-16">
          <ContactForm />
        </Card>
      </Container>
    </Section>
  )
}
