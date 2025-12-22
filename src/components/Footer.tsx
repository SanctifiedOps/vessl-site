type FooterProps = {
  onPlanClick: () => void
  onWaitlistClick: () => void
}

const Footer = ({ onPlanClick, onWaitlistClick }: FooterProps) => (
  <footer className="section footer reveal">
    <div className="container footer-grid">
      <div>
        <p className="eyebrow">VESSL</p>
        <h2>Be The First.</h2>
        <p className="body">Strength in Motion. Structured training that fits real life.</p>
        <div className="cta-row">
          <button className="btn primary" onClick={onPlanClick}>
            Choose your plan
          </button>
          <button className="btn ghost" onClick={onWaitlistClick}>
            Join the waitlist
          </button>
        </div>
      </div>
      <div className="footer-meta">
        <p className="microcopy">(c) {new Date().getFullYear()} VESSL. All rights reserved.</p>
        <p className="microcopy subtle">Structured, mobility-first strength for real life.</p>
      </div>
    </div>
  </footer>
)

export default Footer
