import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return new NextResponse('Webhook Error: Invalid signature', { status: 400 })
  }

  const supabase = createServerClient()

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session

      if (session.mode === 'subscription') {
        const userId = session.metadata?.userId
        const planId = session.metadata?.planId

        if (userId && planId) {
          // Update user's plan
          await supabase
            .from('users')
            .update({
              plan: planId,
              stripe_customer_id: session.customer as string,
            })
            .eq('id', userId)
        }
      }
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const userId = subscription.metadata?.userId

      if (userId) {
        const planId = subscription.status === 'active' 
          ? subscription.metadata?.planId || 'free'
          : 'free'

        await supabase
          .from('users')
          .update({
            plan: planId,
          })
          .eq('id', userId)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const userId = subscription.metadata?.userId

      if (userId) {
        await supabase
          .from('users')
          .update({
            plan: 'free',
          })
          .eq('id', userId)
      }
      break
    }

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return new NextResponse(null, { status: 200 })
}
