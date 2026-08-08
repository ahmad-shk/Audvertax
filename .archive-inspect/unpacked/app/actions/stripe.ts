'use server'

import { getStripeClient } from '@/lib/stripe'
import { getProduct } from '@/lib/products'

interface CheckoutItem {
  productId: string
  quantity: number
}

function integrationIdentifier() {
  const suffix = Math.random().toString(36).slice(2, 10).replace(/[^a-z]/g, 'a')
  return `audvetax_${suffix}`
}

export async function startCheckoutSession(items: CheckoutItem[]) {
  if (!items.length) throw new Error('Your cart is empty.')

  const validatedItems = items.map(({ productId, quantity }) => {
    const product = getProduct(productId)
    if (!product || product.priceInCents <= 0) throw new Error('This service is not available for online checkout.')
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) throw new Error('Invalid quantity.')
    return { product, quantity }
  })

  const stripe = getStripeClient()

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded_page',
    redirect_on_completion: 'never',
    line_items: validatedItems.map(({ product, quantity }) => ({
      price_data: {
        currency: product.currency,
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: product.priceInCents,
      },
      quantity,
    })),
    mode: 'payment',
    integration_identifier: integrationIdentifier(),
  })

  return session.client_secret
}
