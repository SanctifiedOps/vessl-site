type HowItWorksProps = {
  steps: string[]
}

const HowItWorks = ({ steps }: HowItWorksProps) => (
  <section className="section reveal" id="how-it-works">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">How it works</p>
        <h2>Built for clarity, not guesswork.</h2>
      </div>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={step} className="step-card glass">
            <div className="step-number">{index + 1}</div>
            <p className="step-text">{step}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default HowItWorks
