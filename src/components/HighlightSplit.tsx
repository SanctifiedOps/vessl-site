type HighlightSplitProps = {
  onPrimaryClick: () => void
}

const HighlightSplit = ({ onPrimaryClick }: HighlightSplitProps) => (
  <section className="section reveal" id="about">
    <div className="container split-grid">
      <div className="split-copy">
        <p className="eyebrow">About VESSL</p>
        <h2>Build a stronger body with a calmer system.</h2>
        <p className="body">
          VESSL blends strength, mobility, and conditioning into a clear weekly rhythm. Train hard,
          recover smart, and keep momentum without the noise.
        </p>
        <ul className="feature-list">
          <li>Progressive plans you can follow without guesswork.</li>
          <li>Mobility-first strength for longevity and confidence.</li>
          <li>Flexible sessions that fit into real schedules.</li>
        </ul>
        <button className="btn primary" onClick={onPrimaryClick}>
          Start training
        </button>
      </div>
      <div className="split-media">
        <div className="image-frame">
          Drop in a coaching or training photo that represents the VESSL style.
        </div>
      </div>
    </div>
  </section>
)

export default HighlightSplit
