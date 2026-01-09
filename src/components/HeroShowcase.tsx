type HeroShowcaseProps = {
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

const HeroShowcase = ({ onPrimaryClick, onSecondaryClick }: HeroShowcaseProps) => (
  <section className="section hero reveal" id="home">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">VESSL training system</p>
        <h1>Strength in Motion</h1>
        <p className="subhead">
          Structured strength, mobility, and conditioning built for real life. Train with clarity,
          stay consistent, and move better every week.
        </p>
        <div className="cta-row">
          <button className="btn primary" onClick={onPrimaryClick}>
            Choose your plan
          </button>
          <button className="btn outline" onClick={onSecondaryClick}>
            Be The First
          </button>
        </div>
        <div className="hero-meta">
          <span className="pill">Launching soon</span>
          <span className="microcopy">Founding pricing available.</span>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-frame">
          <img src="/src/assets/vessl-hero.gif" alt="VESSL training preview" />
          <div className="hero-overlay">
            <div className="hero-overlay-card">
              <p className="label">Focus</p>
              <p className="value">Strength + Mobility</p>
            </div>
            <div className="hero-overlay-card">
              <p className="label">Session</p>
              <p className="value">35-45 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroShowcase
