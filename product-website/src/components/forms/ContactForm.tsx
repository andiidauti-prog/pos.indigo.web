import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import { useTranslations } from '@/lib/locale-context'
import type { BusinessTypeId } from '@/types/i18n'

type SubmitStatus = 'idle' | 'submitting' | 'submitted'

const businessTypeIds: BusinessTypeId[] = ['restaurant', 'store', 'warehouse', 'other']

const fieldClassName =
  'focus-ring w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-ink transition-colors hover:border-border-strong'

/**
 * There is no contact/demo backend or API yet (Milestone 11). This function
 * is the single place a real request will be wired in later — swap the body
 * for a real call (e.g. `fetch('/api/contact', { method: 'POST', body: data })`)
 * and the surrounding submit/status flow in ContactForm won't need to change.
 */
async function submitContactRequest(data: FormData): Promise<void> {
  void data
  return Promise.resolve()
}

interface FormFieldProps {
  id: string
  label: string
  required?: boolean
  children: ReactNode
}

function FormField({ id, label, required, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="ml-0.5 text-danger" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  )
}

export function ContactForm() {
  const t = useTranslations()
  const formId = useId()
  const [status, setStatus] = useState<SubmitStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    await submitContactRequest(new FormData(event.currentTarget))
    setStatus('submitted')
  }

  if (status === 'submitted') {
    return (
      <div role="status" className="rounded-lg border border-border bg-surface-muted p-6 text-center">
        <p className="text-sm font-medium text-ink">{t.contact.form.submittedMessage}</p>
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p className="text-xs text-ink-subtle">{t.contact.form.requiredFieldNote}</p>

      <FormField id={`${formId}-name`} label={t.contact.form.nameLabel} required>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClassName}
        />
      </FormField>

      <FormField id={`${formId}-company`} label={t.contact.form.companyLabel}>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          className={fieldClassName}
        />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id={`${formId}-email`} label={t.contact.form.emailLabel} required>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClassName}
          />
        </FormField>

        <FormField id={`${formId}-phone`} label={t.contact.form.phoneLabel}>
          <input id={`${formId}-phone`} name="phone" type="tel" autoComplete="tel" className={fieldClassName} />
        </FormField>
      </div>

      <FormField id={`${formId}-business-type`} label={t.contact.form.businessTypeLabel}>
        <select
          id={`${formId}-business-type`}
          name="businessType"
          defaultValue=""
          className={fieldClassName}
        >
          <option value="" disabled>
            {t.contact.form.businessTypePlaceholder}
          </option>
          {businessTypeIds.map((id) => (
            <option key={id} value={id}>
              {t.contact.form.businessTypeOptions[id]}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id={`${formId}-message`} label={t.contact.form.messageLabel}>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className={cn(fieldClassName, 'resize-y')}
        />
      </FormField>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-2 w-full sm:w-auto"
      >
        {isSubmitting ? t.contact.form.submittingLabel : t.contact.form.submitLabel}
      </Button>
    </form>
  )
}
