type AppPreviewProps = {
  chips: string[]
}

const AppPreview = ({ chips }: AppPreviewProps) => (
  <section className="section reveal" id="system">
    <div className="container preview-grid">
      <div className="preview-copy">
        <p className="eyebrow">Weekly flow</p>
        <h2>Every session has a clear place.</h2>
        <p className="body">
          Follow a simple weekly structure that balances intensity, recovery, and progression.
          Adjust the focus without losing momentum.
        </p>
        <div className="chip-row">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
        <p className="microcopy">Add real session screenshots once the app UI is final.</p>
      </div>
      <div className="preview-visual">
        <div className="schedule-card">
          <h3>Sample Week</h3>
          <ul className="schedule-list">
            <li>
              <span>Mon</span>
              <strong>Strength + Mobility</strong>
              <span>40 min</span>
            </li>
            <li>
              <span>Wed</span>
              <strong>Conditioning Flow</strong>
              <span>30 min</span>
            </li>
            <li>
              <span>Fri</span>
              <strong>Progressive Strength</strong>
              <span>45 min</span>
            </li>
            <li>
              <span>Sat</span>
              <strong>Recovery Reset</strong>
              <span>25 min</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default AppPreview
