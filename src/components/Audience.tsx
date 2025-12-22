type AudienceProps = {
  items: { title: string; copy: string }[]
}

const Audience = ({ items }: AudienceProps) => (
  <section className="section reveal" id="audience">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Built for</p>
        <h2>Designed for how you really train.</h2>
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

export default Audience
