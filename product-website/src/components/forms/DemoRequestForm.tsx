import { useState, type FormEvent } from 'react'
import { Check, CheckCircle2, ChevronLeft, ChevronRight, Store, UtensilsCrossed, Warehouse, Building2, Layers, ShieldCheck, BarChart3, MapPin, Sparkles, Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/cn'
import { useTranslations } from '@/lib/locale-context'
import { isSupabaseConfigured, supabase, type LeadRecord } from '@/lib/supabase'

export interface DemoFormData {
  contact_name: string
  business_name: string
  email: string
  phone: string
  business_type: 'restaurant' | 'shop' | 'warehouse' | 'other' | ''
  interests: string[]
  message: string
  preferred_contact: 'phone' | 'email' | 'either'
}

const initialFormData: DemoFormData = {
  contact_name: '',
  business_name: '',
  email: '',
  phone: '',
  business_type: '',
  interests: [],
  message: '',
  preferred_contact: 'either',
}

export function DemoRequestForm() {
  const t = useTranslations()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState<DemoFormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function updateField<K extends keyof DemoFormData>(field: K, value: DemoFormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  function toggleInterest(interestKey: string) {
    setFormData((prev) => {
      const exists = prev.interests.includes(interestKey)
      const newInterests = exists
        ? prev.interests.filter((i) => i !== interestKey)
        : [...prev.interests, interestKey]
      return { ...prev, interests: newInterests }
    })
    if (errors.interests) {
      setErrors((prev) => ({ ...prev, interests: '' }))
    }
  }

  function validateStep(step: number): boolean {
    const newErrors: Record<string, string> = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (step === 1) {
      if (!formData.contact_name.trim()) {
        newErrors.contact_name = t.demoWizard.validation.nameRequired
      }
      if (!formData.business_name.trim()) {
        newErrors.business_name = t.demoWizard.validation.businessNameRequired
      }
      if (!formData.email.trim()) {
        newErrors.email = t.demoWizard.validation.emailRequired
      } else if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t.demoWizard.validation.emailInvalid
      }
    } else if (step === 2) {
      if (!formData.business_type) {
        newErrors.business_type = t.demoWizard.validation.businessTypeRequired
      }
    } else if (step === 3) {
      if (formData.interests.length === 0) {
        newErrors.interests = t.demoWizard.validation.interestsRequired
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleNext() {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5))
    }
  }

  function handleBack() {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    setSubmitError(null)

    const payload = {
      contact_name: formData.contact_name.trim(),
      business_name: formData.business_name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      business_type: formData.business_type || 'other',
      interests: formData.interests,
      message: formData.message.trim(),
      preferred_contact: formData.preferred_contact,
      status: 'new',
    }

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.from('leads').insert([payload])
        if (error) throw error
      } else {
        // Fallback local storage repository for local development testing
        const existingRaw = localStorage.getItem('onlinepos_local_leads')
        const existing: LeadRecord[] = existingRaw ? JSON.parse(existingRaw) : []
        const newLead: LeadRecord = {
          ...payload,
          id: 'lead-' + Date.now(),
          business_type: payload.business_type as LeadRecord['business_type'],
          status: 'new',
          admin_notes: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
        localStorage.setItem('onlinepos_local_leads', JSON.stringify([newLead, ...existing]))
        // Artificial delay for smooth UX feedback
        await new Promise((resolve) => setTimeout(resolve, 600))
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error('Lead submission error:', err)
      setSubmitError(t.demoWizard.validation.submitFailed)
    } finally {
      setIsSubmitting(false)
    }
  }

  function resetForm() {
    setFormData(initialFormData)
    setCurrentStep(1)
    setIsSubmitted(false)
    setSubmitError(null)
    setErrors({})
  }

  if (isSubmitted) {
    return (
      <Card className="mx-auto max-w-xl p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-ink">{t.demoWizard.confirmation.title}</h2>
        <p className="mt-3 text-base text-ink-muted">{t.demoWizard.confirmation.message}</p>
        <div className="mt-8">
          <Button onClick={resetForm} variant="outline" size="md">
            {t.demoWizard.confirmation.submitAnother}
          </Button>
        </div>
      </Card>
    )
  }

  const stepText = t.demoWizard.stepIndicator
    .replace('{current}', String(currentStep))
    .replace('{total}', '5')

  return (
    <Card className="mx-auto max-w-2xl overflow-hidden p-6 sm:p-8 shadow-xl">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold tracking-wide text-ink-muted">
          <span>{stepText}</span>
          <span className="text-brand-600 font-bold">{Math.round((currentStep / 5) * 100)}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-muted">
          <div
            className="h-full bg-gradient-to-r from-brand-600 to-amber-500 transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* STEP 1: Contact Information */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-ink">{t.demoWizard.steps.step1.title}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t.demoWizard.steps.step1.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                  {t.demoWizard.steps.step1.fullName} *
                </label>
                <input
                  type="text"
                  value={formData.contact_name}
                  onChange={(e) => updateField('contact_name', e.target.value)}
                  placeholder="e.g. Marko Petrovski"
                  className={cn(
                    'mt-1.5 focus-ring w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-ink transition-colors',
                    errors.contact_name ? 'border-danger' : 'border-border hover:border-border-strong',
                  )}
                />
                {errors.contact_name && <p className="mt-1 text-xs text-danger">{errors.contact_name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                  {t.demoWizard.steps.step1.businessName} *
                </label>
                <input
                  type="text"
                  value={formData.business_name}
                  onChange={(e) => updateField('business_name', e.target.value)}
                  placeholder="e.g. Bistro Central"
                  className={cn(
                    'mt-1.5 focus-ring w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-ink transition-colors',
                    errors.business_name ? 'border-danger' : 'border-border hover:border-border-strong',
                  )}
                />
                {errors.business_name && <p className="mt-1 text-xs text-danger">{errors.business_name}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                  {t.demoWizard.steps.step1.email} *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="name@company.com"
                  className={cn(
                    'mt-1.5 focus-ring w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-ink transition-colors',
                    errors.email ? 'border-danger' : 'border-border hover:border-border-strong',
                  )}
                />
                {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink">
                  {t.demoWizard.steps.step1.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+389 70 123 456"
                  className="mt-1.5 focus-ring w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink transition-colors hover:border-border-strong"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Business Type */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-ink">{t.demoWizard.steps.step2.title}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t.demoWizard.steps.step2.description}</p>
            </div>

            {errors.business_type && <p className="text-xs font-medium text-danger">{errors.business_type}</p>}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { key: 'restaurant', label: t.demoWizard.steps.step2.options.restaurant, icon: UtensilsCrossed },
                { key: 'shop', label: t.demoWizard.steps.step2.options.shop, icon: Store },
                { key: 'warehouse', label: t.demoWizard.steps.step2.options.warehouse, icon: Warehouse },
                { key: 'other', label: t.demoWizard.steps.step2.options.other, icon: Building2 },
              ].map((item) => {
                const isSelected = formData.business_type === item.key
                const Icon = item.icon
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => updateField('business_type', item.key as DemoFormData['business_type'])}
                    className={cn(
                      'focus-ring flex items-center gap-3.5 rounded-xl border p-4 text-left transition-all',
                      isSelected
                        ? 'border-brand-600 bg-brand-50/50 text-brand-900 shadow-sm'
                        : 'border-border bg-surface text-ink hover:border-border-strong hover:bg-surface-muted',
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                        isSelected ? 'bg-brand-600 text-white' : 'bg-surface-muted text-ink-muted',
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Interests */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-ink">{t.demoWizard.steps.step3.title}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t.demoWizard.steps.step3.description}</p>
            </div>

            {errors.interests && <p className="text-xs font-medium text-danger">{errors.interests}</p>}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { key: 'pos', label: t.demoWizard.steps.step3.options.pos, icon: Layers },
                { key: 'stock', label: t.demoWizard.steps.step3.options.stock, icon: Warehouse },
                { key: 'fiscalization', label: t.demoWizard.steps.step3.options.fiscalization, icon: ShieldCheck },
                { key: 'reports', label: t.demoWizard.steps.step3.options.reports, icon: BarChart3 },
                { key: 'multiLocation', label: t.demoWizard.steps.step3.options.multiLocation, icon: MapPin },
                { key: 'other', label: t.demoWizard.steps.step3.options.other, icon: Sparkles },
              ].map((item) => {
                const isChecked = formData.interests.includes(item.key)
                const Icon = item.icon
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleInterest(item.key)}
                    className={cn(
                      'focus-ring flex items-center justify-between rounded-xl border p-3.5 text-left transition-all',
                      isChecked
                        ? 'border-brand-600 bg-brand-50/50 text-brand-900 shadow-sm'
                        : 'border-border bg-surface text-ink hover:border-border-strong hover:bg-surface-muted',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm',
                          isChecked ? 'bg-brand-600 text-white' : 'bg-surface-muted text-ink-muted',
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>

                    <div
                      className={cn(
                        'flex h-5 w-5 items-center justify-center rounded border transition-colors',
                        isChecked ? 'border-brand-600 bg-brand-600 text-white' : 'border-border bg-surface',
                      )}
                    >
                      {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Additional Information */}
        {currentStep === 4 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-ink">{t.demoWizard.steps.step4.title}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t.demoWizard.steps.step4.description}</p>
            </div>

            <div>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder={t.demoWizard.steps.step4.placeholder}
                className="focus-ring w-full rounded-xl border border-border bg-surface p-4 text-sm text-ink transition-colors hover:border-border-strong"
              />
            </div>
          </div>
        )}

        {/* STEP 5: Preferred Contact Method & Submit */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-ink">{t.demoWizard.steps.step5.title}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t.demoWizard.steps.step5.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { key: 'phone', label: t.demoWizard.steps.step5.options.phone, icon: Phone },
                { key: 'email', label: t.demoWizard.steps.step5.options.email, icon: Mail },
                { key: 'either', label: t.demoWizard.steps.step5.options.either, icon: CheckCircle2 },
              ].map((item) => {
                const isSelected = formData.preferred_contact === item.key
                const Icon = item.icon
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => updateField('preferred_contact', item.key as DemoFormData['preferred_contact'])}
                    className={cn(
                      'focus-ring flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all',
                      isSelected
                        ? 'border-brand-600 bg-brand-50/50 text-brand-900 shadow-sm'
                        : 'border-border bg-surface text-ink hover:border-border-strong hover:bg-surface-muted',
                    )}
                  >
                    <Icon className={cn('h-5 w-5', isSelected ? 'text-brand-600' : 'text-ink-muted')} />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Summary Box */}
            <div className="rounded-xl border border-border bg-surface-muted p-4 text-xs text-ink-muted">
              <h4 className="font-semibold uppercase tracking-wider text-ink mb-2">Request Summary</h4>
              <p>
                <strong className="text-ink">Contact:</strong> {formData.contact_name} ({formData.business_name})
              </p>
              <p>
                <strong className="text-ink">Email:</strong> {formData.email} {formData.phone ? `| ${formData.phone}` : ''}
              </p>
              <p className="mt-1">
                <strong className="text-ink">Interests:</strong> {formData.interests.length} feature area(s) selected
              </p>
            </div>

            {submitError && <p className="text-xs font-medium text-danger">{submitError}</p>}
          </div>
        )}

        {/* Wizard Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" size="md" onClick={handleBack} disabled={isSubmitting}>
              <ChevronLeft className="mr-1 h-4 w-4" />
              {t.demoWizard.navigation.back}
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <Button type="button" size="md" onClick={handleNext}>
              {t.demoWizard.navigation.next}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[180px]">
              {isSubmitting ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  {t.demoWizard.navigation.submitting}
                </>
              ) : (
                <>
                  {t.demoWizard.steps.step5.submitButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </Card>
  )
}
