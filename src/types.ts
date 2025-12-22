export type PlanId = 'starter' | 'progress' | 'coach'

export type Plan = {
  id: PlanId
  name: string
  price: string
  description: string
  bestFor: string
  features: string[]
  badge?: string
}
