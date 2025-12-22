type HeroProps = {
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

const Hero = ({ onPrimaryClick, onSecondaryClick }: HeroProps) => (
  <section className="section hero reveal">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Launching soon | Founding pricing available</p>
        <h1>Strength in Motion</h1>
        <p className="subhead">
          A structured training system built for real life. Programmes that
          progress, sessions you can actually stick to.
        </p>
        <div className="cta-row">
          <button className="btn primary" onClick={onPrimaryClick}>
            Choose your plan
          </button>
          <button className="btn ghost" onClick={onSecondaryClick}>
            Be The First
          </button>
        </div>
        <p className="microcopy">Launching soon. Founding members get founding pricing.</p>
      </div>
      <div className="hero-visual">
        <div className="glass hero-card">
          <div className="device-top">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="device-body">
            <div className="metric">
              <p className="label">Today's focus</p>
              <p className="value">Strength + Mobility</p>
            </div>
            <div className="session-card">
              <p className="label">Next session</p>
              <p className="value">40 min | Guided pacing</p>
              <p className="hint">Built for consistency, not chaos.</p>
            </div>
            <div className="progress-row">
              <div className="progress-label">
                <span className="pill">Momentum</span>
                <span className="hint">12-day streak</span>
              </div>
              <div className="progress-bar">
                <span className="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
