type FeatureTagsProps = {
  items: { value: string; label: string }[]
}

const FeatureTags = ({ items }: FeatureTagsProps) => (
  <section className="stats-strip reveal" aria-label="VESSL highlights">
    <div className="container stats-grid">
      {items.map((item) => (
        <div key={item.label} className="stat">
          <span className="stat-value">{item.value}</span>
          <span className="stat-label">{item.label}</span>
        </div>
      ))}
    </div>
  </section>
)

export default FeatureTags
