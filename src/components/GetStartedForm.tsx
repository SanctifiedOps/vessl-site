import { type FormEvent, useMemo, useState, type RefObject } from 'react'
import { type PlanId } from '../types'

type GetStartedFormProps = {
  selectedPlan: PlanId | null
  sectionRef: RefObject<HTMLElement | null>
}

const planLabels: Record<PlanId, string> = {
  starter: 'Starter',
  progress: 'Progress',
  coach: 'Coach',
}

const GetStartedForm = ({ selectedPlan, sectionRef }: GetStartedFormProps) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const planToStore = useMemo<PlanId>(() => selectedPlan ?? 'progress', [selectedPlan])
  const isSubmitting = status === 'submitting'
  const isSuccess = status === 'success'

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const emailPattern = /^\S+@\S+\.\S+$/
    if (!emailPattern.test(email.trim())) {
      setError('Please enter a valid email.')
      return
    }

    setStatus('submitting')

    const payload = {
      email: email.trim(),
      firstName: firstName.trim(),
      plan: planToStore,
      timestamp: new Date().toISOString(),
    }

    // TODO: replace with Stripe + email provider integrations when ready.
    setTimeout(() => {
      try {
        const key = 'vessl-waitlist'
        const existing = JSON.parse(localStorage.getItem(key) ?? '[]')
        const updated = Array.isArray(existing) ? existing : []
        updated.push(payload)
        localStorage.setItem(key, JSON.stringify(updated))
      } catch {
        // If storage fails, keep going and still log.
      }

      // Intentional console to assist future integrations.
      // eslint-disable-next-line no-console
      console.log('VESSL waitlist submission', payload)
      setStatus('success')
    }, 450)
  }

  return (
    <section ref={sectionRef} id="get-started" className="section reveal">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Get started</p>
          <h2>Lock in founding pricing and get first access.</h2>
        </div>
        <div className="form-card">
          <div className="selected-plan">
            <p>Selected plan</p>
            <span className="pill">{planLabels[planToStore]}</span>
            {!selectedPlan && (
              <span className="hint">No plan chosen yet. Progress is pre-selected.</span>
            )}
          </div>
          {isSuccess ? (
            <div className="success-state">
              <h3>You&apos;re in.</h3>
              <p>We&apos;ll email you when VESSL opens, with your founding pricing.</p>
              <p className="hint">No spam. Unsubscribe anytime.</p>
              <p className="microcopy">What happens next: expect launch details and next steps.</p>
            </div>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit} noValidate>
              <label className="field">
                <span>Email*</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(error)}
                />
              </label>
              <label className="field">
                <span>First name (optional)</span>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Alex"
                  disabled={isSubmitting}
                />
              </label>
              <input type="hidden" name="plan" value={planToStore} />
              {error && (
                <p role="alert" className="error">
                  {error}
                </p>
              )}
              <button className="btn primary block" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Join now'}
              </button>
              <p className="microcopy privacy">No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default GetStartedForm
