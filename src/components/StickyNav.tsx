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
        <div className="brand">
          <img src={logo} alt="VESSL logo" className="brand-mark" />
        </div>
        <div className="nav-actions">
          <button className="btn ghost" onClick={onWaitlistClick}>
            Be The First
          </button>
          <button className="btn primary" onClick={onPlanClick}>
            Choose your plan
          </button>
        </div>
      </div>
    </header>
  )
}

export default StickyNav
