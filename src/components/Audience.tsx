type AudienceProps = {
  items: { name: string; role: string; copy: string }[]
}

const Audience = ({ items }: AudienceProps) => (
  <section className="section reveal" id="trainers">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Professional coaches</p>
        <h2>Guidance that keeps you strong and steady.</h2>
        <p className="body">Meet the style of coaching behind the VESSL training system.</p>
      </div>
      <div className="trainer-grid">
        {items.map((item) => (
          <div key={item.name} className="trainer-card">
            <div className="trainer-photo">Coach portrait placeholder</div>
            <div className="trainer-body">
              <h3>{item.name}</h3>
              <p className="trainer-role">{item.role}</p>
              <p className="body">{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Audience
