import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-01-25.acacia',
})

export const PLANS = {
  free: {
    id: 'free',
    name: 'Free',
    price: 0,
    features: [
      '1 podcast channel',
      '5 episodes per month',
      'Basic AI voices',
      '720p audio quality',
      'Community support',
    ],
    limits: {
      channels: 1,
      episodesPerMonth: 5,
      maxDuration: 'short',
    },
  },
  creator: {
    id: 'creator',
    name: 'Creator',
    price: 29,
    priceId: process.env.STRIPE_PRO_PLAN_PRICE_ID,
    features: [
      '3 podcast channels',
      '30 episodes per month',
      'Premium AI voices',
      'High-quality audio',
      'Priority support',
      'Custom branding',
      'Analytics dashboard',
    ],
    limits: {
      channels: 3,
      episodesPerMonth: 30,
      maxDuration: 'long',
    },
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: 99,
    features: [
      '10 podcast channels',
      'Unlimited episodes',
      'Voice cloning',
      'Studio-quality audio',
      '24/7 support',
      'White-label option',
      'Advanced analytics',
      'API access',
    ],
    limits: {
      channels: 10,
      episodesPerMonth: -1, // unlimited
      maxDuration: 'long',
    },
  },
}

export async function createCheckoutSession(options: {
  userId: string
  email: string
  planId: string
}) {
  const plan = PLANS[options.planId as keyof typeof PLANS]
  
  if (!plan || plan.price === 0) {
    throw new Error('Invalid plan or free plan selected')
  }

  const session = await stripe.checkout.sessions.create({
    customer_email: options.email,
    line_items: [
      {
        price: plan.priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    metadata: {
      userId: options.userId,
      planId: options.planId,
    },
  })

  return session
}

export async function createPortalSession(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
  })

  return session
}
