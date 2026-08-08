import 'server-only'

import Stripe from 'stripe'

const secretKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_MCP_KEY

export function getStripeClient() {
  if (!secretKey) {
    throw new Error('Stripe is not configured. Connect Stripe in the project integrations.')
  }

  return new Stripe(secretKey)
}
