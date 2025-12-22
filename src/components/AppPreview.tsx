type AppPreviewProps = {
  chips: string[]
}

const AppPreview = ({ chips }: AppPreviewProps) => (
  <section className="section reveal" id="app-preview">
    <div className="container preview-grid">
      <div className="preview-copy">
        <p className="eyebrow">The system</p>
        <h2>A training system you can actually stick to.</h2>
        <p className="body">
          Programmes that progress, sessions that fit your week, and simple
          tracking to keep you consistent. Layer in recovery, conditioning, and mobility
          without guesswork.
        </p>
        <div className="chip-row">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
        <p className="microcopy">
          Swap these placeholders with real app screens and workout photography.
        </p>
        <div className="card-grid">
          <div className="image-placeholder">
            Hero photography placeholder - add a strong portrait or in-motion training shot.
          </div>
          <div className="image-placeholder">
            Secondary photography placeholder - show mobility work or strength session detail.
          </div>
        </div>
      </div>
      <div className="preview-visual">
        <div className="phone-frame glass">
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
    </div>
  </section>
)

export default AppPreview
