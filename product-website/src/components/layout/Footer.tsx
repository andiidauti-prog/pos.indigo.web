import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { CONTACT_ROUTE, footerLinkGroups, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from '@/data/navigation'
import { useTranslations } from '@/lib/locale-context'
import logo from '@/assets/onine-pos-logo.jpg'

const footerGroupLabelKey = {
  product: 'productGroup',
  company: 'companyGroup',
} as const

export function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="flex flex-col gap-10 py-12 sm:gap-12 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="focus-ring flex w-fit items-center rounded-xl border border-stone-800 bg-stone-950 px-3 py-2 shadow-sm transition-transform hover:scale-[1.02]"
            >
              <img src={logo} alt="OninePOS logo" className="h-7 w-auto object-contain" />
            </Link>
            <Button to={CONTACT_ROUTE} variant="outline" size="sm" className="w-fit">
              {t.nav.requestDemo}
            </Button>

            <div className="flex items-center gap-4">
              <a
                href={PHONE_TEL}
                className="focus-ring -mx-1 inline-flex min-h-11 items-center gap-2 rounded-sm px-1 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.social.instagramLabel}
                title={t.social.instagramLabel}
                className="focus-ring group inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-200 bg-surface text-brand-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:shadow-md"
              >
                <InstagramIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 sm:gap-x-16">
            {footerLinkGroups.map((group) => (
              <div key={group.id} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-ink">{t.footer[footerGroupLabelKey[group.id]]}</h3>
                <ul className="flex flex-col">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="focus-ring -mx-1 inline-flex min-h-11 items-center rounded-sm px-1 text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {t.nav[link.id]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-ink">{t.footer.languagesLabel}</h3>
              <LanguageSelector variant="inline" />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-sm text-ink-muted">
          {t.footer.copyright.replace('{year}', String(year))}
        </div>
      </Container>
    </footer>
  )
}
