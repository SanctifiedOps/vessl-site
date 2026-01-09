import { useEffect, useRef, useState, type RefObject } from 'react'
import StickyNav from './components/StickyNav'
import HeroShowcase from './components/HeroShowcase'
import FeatureTags from './components/FeatureTags'
import HighlightSplit from './components/HighlightSplit'
import Benefits from './components/Benefits'
import AppPreview from './components/AppPreview'
import Audience from './components/Audience'
import Pricing from './components/Pricing'
import GetStartedForm from './components/GetStartedForm'
import Testimonials from './components/Testimonials'
import CommunityCallout from './components/CommunityCallout'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { type Plan, type PlanId } from './types'

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'GBP 9.99',
    description: 'Start strong with simple structure.',
    bestFor: 'Getting consistent',
    features: [
      'Full on-demand workout library',
      'Beginner-friendly programmes',
      'Weekly scheduling guidance',
    ],
  },
  {
    id: 'progress',
    name: 'Progress',
    price: 'GBP 14.99',
    description: 'The full system for consistent progress.',
    bestFor: 'Structured progression',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Strength / mobility / conditioning tracks',
      'Progress tracking (check-ins, streaks)',
    ],
  },
  {
    id: 'coach',
    name: 'Coach',
    price: 'GBP 24.99',
    description: 'Extra guidance, faster clarity.',
    bestFor: 'Deeper support',
    features: [
      'Everything in Progress',
      'Personalised plan inputs',
      'Priority support / feedback channel',
    ],
  },
]

const stats = [
  { value: '03', label: 'Training paths' },
  { value: '30-45', label: 'Minute sessions' },
  { value: '12', label: 'Week progressions' },
  { value: '24/7', label: 'On-demand access' },
]

const programs = [
  {
    title: 'Strength Foundations',
    meta: '4-week block',
    copy: 'Build base strength with guided tempo, form cues, and weekly progressions.',
  },
  {
    title: 'Mobility Power',
    meta: 'Daily reset',
    copy: 'Keep joints happy and movement clean with mobility-first strength sessions.',
  },
  {
    title: 'Conditioning Flow',
    meta: '30-minute push',
    copy: 'Short, focused conditioning sessions that build stamina without burnout.',
  },
  {
    title: 'Hybrid Builder',
    meta: 'Performance mix',
    copy: 'Blend strength and mobility with flexible programming for busy weeks.',
  },
]

const coaches = [
  {
    name: 'Riley Chen',
    role: 'Strength + Mobility',
    copy: 'Precision-focused coaching that keeps your movement clean and confident.',
  },
  {
    name: 'Amara Knox',
    role: 'Conditioning',
    copy: 'Efficient, effective sessions designed to build stamina without stress.',
  },
  {
    name: 'Julian Reyes',
    role: 'Progression Coach',
    copy: 'Structured progression that makes it easy to see measurable wins.',
  },
]

const faqs = [
  {
    question: 'Is VESSL for beginners?',
    answer: 'Yes. The system starts simple, then layers progression as you build confidence.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'A pair of dumbbells or kettlebells is enough to start. Bodyweight options are included.',
  },
  {
    question: 'Can I train around an old injury?',
    answer: "VESSL is mobility-first with scalable options. Always follow your clinician's advice.",
  },
  {
    question: 'How long are sessions?',
    answer: 'Most sessions run 30-45 minutes with clear pacing so you can stay consistent.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No long contracts. Founding pricing is yours for as long as you stay.',
  },
  {
    question: 'When do I get access?',
    answer: "Launching soon. Drop your email and plan choice and we'll send early access first.",
  },
]

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const pricingRef = useRef<HTMLElement | null>(null)
  const formRef = useRef<HTMLElement | null>(null)
  const communityRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    const targets = document.querySelectorAll<HTMLElement>('.reveal')
    targets.forEach((target) => {
      const bounds = target.getBoundingClientRect()
      if (bounds.top < window.innerHeight * 0.9) {
        target.classList.add('is-visible')
      }
      observer.observe(target)
    })

    document.body.classList.add('motion-ready')

    return () => {
      observer.disconnect()
      document.body.classList.remove('motion-ready')
    }
  }, [])

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePlanSelect = (planId: PlanId) => {
    setSelectedPlan(planId)
    scrollToSection(formRef)
  }

  const scrollToPricing = () => scrollToSection(pricingRef)
  const scrollToForm = () => scrollToSection(formRef)
  return (
    <>
      <StickyNav onPlanClick={scrollToPricing} onWaitlistClick={scrollToForm} />
      <main>
        <HeroShowcase onPrimaryClick={scrollToPricing} onSecondaryClick={scrollToForm} />
        <FeatureTags items={stats} />
        <HighlightSplit onPrimaryClick={scrollToPricing} />
        <Benefits items={programs} />
        <AppPreview chips={['Strength', 'Mobility', 'Conditioning', 'Recovery']} />
        <Audience items={coaches} />
        <Pricing
          plans={plans}
          selectedPlan={selectedPlan}
          onSelect={handlePlanSelect}
          sectionRef={pricingRef}
        />
        <GetStartedForm selectedPlan={selectedPlan} sectionRef={formRef} />
        <Testimonials />
        <CommunityCallout
          sectionRef={communityRef}
          onCtaClick={scrollToForm}
          onPlanClick={scrollToPricing}
        />
        <FAQ items={faqs} />
      </main>
      <Footer onPlanClick={scrollToPricing} onWaitlistClick={scrollToForm} />
    </>
  )
}

export default App
