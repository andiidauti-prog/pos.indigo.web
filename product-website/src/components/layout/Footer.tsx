import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { CONTACT_ROUTE, footerLinkGroups } from '@/data/navigation'
import { useTranslations } from '@/lib/locale-context'

const footerGroupLabelKey = {
  product: 'productGroup',
  company: 'companyGroup',
} as const

export function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="flex flex-col gap-12 py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <Link to="/" className="focus-ring w-fit rounded-sm text-lg font-semibold tracking-tight text-ink">
              onlinePOS
            </Link>
            <Button to={CONTACT_ROUTE} variant="outline" size="sm" className="w-fit">
              {t.nav.requestDemo}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerLinkGroups.map((group) => (
              <div key={group.id} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-ink">{t.footer[footerGroupLabelKey[group.id]]}</h3>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="focus-ring rounded-sm text-sm text-ink-muted transition-colors hover:text-ink"
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

        <div className="border-t border-border pt-6 text-sm text-ink-subtle">
          {t.footer.copyright.replace('{year}', String(year))}
        </div>
      </Container>
    </footer>
  )
}
