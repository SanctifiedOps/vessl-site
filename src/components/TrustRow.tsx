type TrustRowProps = {
  items: string[]
}

const TrustRow = ({ items }: TrustRowProps) => (
  <section className="section trust reveal">
    <div className="container trust-row">
      {items.map((item) => (
        <div key={item} className="trust-item glass">
          <span className="dot-spot" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  </section>
)

export default TrustRow
