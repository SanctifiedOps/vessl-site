type FooterProps = {
  onPlanClick: () => void
  onWaitlistClick: () => void
}

const Footer = ({ onPlanClick, onWaitlistClick }: FooterProps) => (
  <footer className="section footer reveal">
    <div className="container footer-grid">
      <div>
        <p className="eyebrow">VESSL</p>
        <h2>Strength in Motion</h2>
        <p className="body">Structured training that fits real life.</p>
        <div className="cta-row">
          <button className="btn primary" onClick={onPlanClick}>
            Choose your plan
          </button>
          <button className="btn ghost" onClick={onWaitlistClick}>
            Join the waitlist
          </button>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#pricing">Plans</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="#trainers">Coaches</a>
          <a href="#get-started">Get started</a>
          <a href="#home">Top</a>
        </div>
        <div className="footer-form">
          <h4>Stay in the loop</h4>
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button className="btn primary" type="button" onClick={onWaitlistClick}>
            Join waitlist
          </button>
        </div>
      </div>
    </div>
    <div className="container footer-meta">
      <p>(c) {new Date().getFullYear()} VESSL. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
