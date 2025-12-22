import { type RefObject } from 'react'
import { type Plan, type PlanId } from '../types'

type PricingProps = {
  plans: Plan[]
  selectedPlan: PlanId | null
  onSelect: (plan: PlanId) => void
  sectionRef: RefObject<HTMLElement | null>
}

const Pricing = ({ plans, selectedPlan, onSelect, sectionRef }: PricingProps) => (
  <section ref={sectionRef} id="pricing" className="section reveal">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Founding pricing</p>
        <h2>Choose the structure that fits your season.</h2>
        <p className="body">
          Prices may change after launch. Founding members keep their founding rate.
        </p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => {
          const active = selectedPlan === plan.id
          return (
            <div
              key={plan.id}
              className={`plan-card glass ${active ? 'active' : ''} ${plan.badge ? 'popular' : ''}`}
            >
              {plan.badge && <span className="badge">{plan.badge}</span>}
              <div className="plan-head">
                <div className="plan-title-row">
                  <h3>{plan.name}</h3>
                  <span className="pill subtle">{plan.bestFor}</span>
                </div>
                <p className="price">
                  {plan.price}
                  <span className="per">/mo</span>
                </p>
              </div>
              <p className="body">{plan.description}</p>
              <ul className="feature-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                className="btn primary block"
                onClick={() => onSelect(plan.id)}
                aria-pressed={active}
              >
                Choose {plan.name}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Pricing
