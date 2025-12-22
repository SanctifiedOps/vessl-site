type HeroShowcaseProps = {
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

const HeroShowcase = ({ onPrimaryClick, onSecondaryClick }: HeroShowcaseProps) => (
  <section className="section hero showcase reveal">
    <div className="container showcase-grid">
      <div className="showcase-text">
        <p className="eyebrow">Structured | Mobile-first | Ready soon</p>
        <h1>
          Strength in Motion
        </h1>
        <p className="subhead">
          VESSL gives you mobility-first strength sessions, clear progression, and simple tracking
          you can stick to anywhere.
        </p>
        <div className="cta-row hero-cta">
          <button className="btn primary" onClick={onPrimaryClick}>
            Choose your plan
          </button>
          <button className="btn ghost" onClick={onSecondaryClick}>
            Be The First
          </button>
        </div>
      </div>
      <div className="hero-media flat">
        <img src="/src/assets/vessl-hero.gif" alt="VESSL training preview" />
      </div>
    </div>
  </section>
)

export default HeroShowcase
