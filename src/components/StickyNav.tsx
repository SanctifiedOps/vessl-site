import { useEffect, useState } from 'react'
import logo from '../assets/vessl-logo.svg'

type StickyNavProps = {
  onPlanClick: () => void
  onWaitlistClick: () => void
}

const StickyNav = ({ onPlanClick, onWaitlistClick }: StickyNavProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="VESSL home">
          <img src={logo} alt="VESSL logo" className="brand-mark" />
          <span className="brand-name">VESSL</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#trainers">Coaches</a>
          <a href="#pricing">Plans</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <button className="btn ghost" onClick={onWaitlistClick}>
            Join waitlist
          </button>
          <button className="btn primary" onClick={onPlanClick}>
            Choose plan
          </button>
        </div>
      </div>
    </header>
  )
}

export default StickyNav
