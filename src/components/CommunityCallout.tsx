import { type RefObject } from 'react'

type CommunityCalloutProps = {
  sectionRef: RefObject<HTMLElement | null>
  onCtaClick: () => void
  onPlanClick: () => void
}

const CommunityCallout = ({ sectionRef, onCtaClick, onPlanClick }: CommunityCalloutProps) => (
  <section ref={sectionRef} className="section reveal cta-band">
    <div className="container">
      <div className="cta-card">
        <div>
          <p className="eyebrow">Ready to move</p>
          <h2>Join the new standard for structured training.</h2>
          <p className="body">
            Everything you need to build strength, stay mobile, and keep momentum.
          </p>
        </div>
        <div className="cta-row">
          <button className="btn primary" onClick={onCtaClick}>
            Join now
          </button>
          <button className="btn ghost" onClick={onPlanClick}>
            Choose your plan
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default CommunityCallout
