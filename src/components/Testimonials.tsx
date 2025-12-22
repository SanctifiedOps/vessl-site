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
  <section className="section reveal panel">
    <div className="container">
      <div className="section-header centered">
        <p className="eyebrow">What our users say</p>
        <h2>Trusted by people who want to move better and stay consistent.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial-card glass">
            <div className="image-placeholder">
              Drop in a lifestyle or training photo for {item.name}.
            </div>
            <div className="testimonial-overlay">
              <p className="quote">{item.quote}</p>
              <p className="meta">
                {item.name} - {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots" aria-hidden="true">
        {testimonials.map((_, index) => (
          <span key={index} className={`dot ${index === 0 ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
