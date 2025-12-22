type HighlightSplitProps = {
  onPrimaryClick: () => void
}

const HighlightSplit = ({ onPrimaryClick }: HighlightSplitProps) => (
  <section className="section panel reveal">
    <div className="container split-grid">
      <div className="split-copy">
        <p className="eyebrow">Elevate your fitness</p>
        <h2>Structured training built for real life.</h2>
        <p className="body">
          Join now to access tailored training plans, progress tracking, and momentum from a calm,
          supportive community. Swap any exercise, keep the streak alive, and know exactly what to
          do next.
        </p>
        <div className="chip-row">
          <span className="pill subtle">50+ session templates</span>
          <span className="pill subtle">Mobility + conditioning</span>
          <span className="pill subtle">Scheduling guidance</span>
          <span className="pill subtle">Community accountability</span>
        </div>
        <button className="btn primary" onClick={onPrimaryClick}>
          Get started
        </button>
      </div>
      <div className="media-card glass">
        <div className="image-placeholder">
          Replace with a hero training photo (pushups, kettlebells, or mobility work).
        </div>
      </div>
    </div>
  </section>
)

export default HighlightSplit
