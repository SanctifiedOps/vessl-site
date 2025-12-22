import { type RefObject } from 'react'

type CommunityCalloutProps = {
  sectionRef: RefObject<HTMLElement | null>
  onCtaClick: () => void
  onPlanClick: () => void
}

const CommunityCallout = ({ sectionRef, onCtaClick, onPlanClick }: CommunityCalloutProps) => (
  <section ref={sectionRef} className="section reveal community-panel">
    <div className="container community-card glass">
      <div>
        <p className="eyebrow">Join our community</p>
        <h2>Structured, supportive, and ready when you are.</h2>
        <p className="body">
          Get personalized workouts, mobility plans, and calm accountability. Replace this copy with
          real community stats when available.
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
  </section>
)

export default CommunityCallout
