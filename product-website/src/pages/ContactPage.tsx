import { DemoRequestForm } from '@/components/forms/DemoRequestForm'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { useTranslations } from '@/lib/locale-context'

export function ContactPage() {
  const t = useTranslations()

  return (
    <Section className="relative overflow-hidden py-12 sm:py-16">
      {/* Decorative background: same warm glow + dot-grid language as the Hero,
          kept subtle since this page's job is the form, not the artwork. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#9a651d_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold tracking-wide text-brand-600 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            {t.contact.eyebrow}
          </span>
          <h1 className="mt-4 text-heading">{t.contact.headline}</h1>
          <p className="mt-4 text-base sm:text-lg text-ink-muted">{t.contact.supportingText}</p>
        </div>

        {/* Layered backdrop panel behind the card, echoing the depth treatment used
            on the Hero's product visual so the form feels like a considered surface
            rather than a flat box floating on the page. */}
        <div className="relative mx-auto max-w-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-lg border border-brand-200/60 bg-brand-50 sm:translate-x-3 sm:translate-y-3"
          />
          {/* `relative` makes this its own positioned layer so it paints above the
              absolutely-positioned backdrop above, regardless of DOM order. */}
          <div className="relative">
            <DemoRequestForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
