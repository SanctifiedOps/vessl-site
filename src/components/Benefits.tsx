type BenefitsProps = {
  items: { title: string; copy: string; meta: string }[]
}

const Benefits = ({ items }: BenefitsProps) => (
  <section className="section reveal" id="programs">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Core programmes</p>
        <h2>Train with intent, not randomness.</h2>
        <p className="body">
          Every plan is built to give you clarity and progression without burning you out.
        </p>
      </div>
      <div className="program-grid">
        {items.map((item) => (
          <div key={item.title} className="program-card">
            <div className="program-media">Training visual placeholder</div>
            <span className="program-meta">{item.meta}</span>
            <h3>{item.title}</h3>
            <p className="body">{item.copy}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Benefits
