import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { CONTACT_ROUTE, footerLinkGroups } from '@/data/navigation'
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
