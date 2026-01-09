const testimonials = [
  {
    name: 'Amira Gage',
    role: 'Designer',
    quote:
      '"Finally, an app that combines workouts, mobility, and tracking in one place. Simple and clear."',
  },
  {
    name: 'Nicklas Mejia',
    role: 'Finance',
    quote: '"VESSL has changed the way I move. I feel stronger every week without overtraining."',
  },
  {
    name: 'Sophie Tran',
    role: 'Product',
    quote: '"The structure and pacing make it impossible to guess. I actually look forward to sessions."',
  },
]

const Testimonials = () => (
  <section className="section reveal">
    <div className="container">
      <div className="section-header centered">
        <p className="eyebrow">What people say</p>
        <h2>Confidence built on consistency.</h2>
        <p className="body">Real words from early VESSL users and testers.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial-card">
            <p className="testimonial-quote">{item.quote}</p>
            <p className="testimonial-meta">
              {item.name} - {item.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
