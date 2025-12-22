type FAQProps = {
  items: { question: string; answer: string }[]
}

const FAQ = ({ items }: FAQProps) => (
  <section className="section reveal" id="faq">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">FAQs</p>
        <h2>Clear answers, no fluff.</h2>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question} className="faq-item glass">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQ
