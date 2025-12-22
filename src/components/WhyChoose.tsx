type WhyChooseProps = {
  onPrimaryClick: () => void
}

const WhyChoose = ({ onPrimaryClick }: WhyChooseProps) => (
  <section className="section panel soft reveal" id="why">
    <div className="container split-grid">
      <div className="media-card glass">
        <div className="phone-frame glass tall">
          <div className="phone-top">
            <span />
            <span />
          </div>
          <div className="screen-placeholder">
            <div className="screen-card" />
            <div className="screen-card muted" />
            <div className="screen-card" />
          </div>
        </div>
      </div>
      <div className="split-copy">
        <p className="eyebrow">Why choose VESSL</p>
        <h2>Achieve lasting results.</h2>
        <p className="body">
          Designed to keep you moving: structured plans, mobility-first strength, and progress
          tracking that fits into your day. Replace these placeholders with real app screenshots and
          workout photography when ready.
        </p>
        <ul className="feature-list bullet">
          <li>Programmes adapt to your goals and schedule.</li>
          <li>Monitor improvements and stay accountable.</li>
          <li>Connect with people chasing similar outcomes.</li>
          <li>Simple nutrition reminders that respect real life.</li>
        </ul>
        <button className="btn primary" onClick={onPrimaryClick}>
          Get started
        </button>
      </div>
    </div>
  </section>
)

export default WhyChoose
