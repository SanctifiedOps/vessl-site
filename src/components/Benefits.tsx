type BenefitsProps = {
  items: { title: string; copy: string }[]
}

const Benefits = ({ items }: BenefitsProps) => (
  <section className="section reveal" id="benefits">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Why VESSL</p>
        <h2>Structure that keeps you moving.</h2>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <div key={item.title} className="info-card glass">
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Benefits
