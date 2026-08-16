'use client'

import { useEffect, useState } from 'react'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { startCheckoutSession } from '@/app/actions/stripe'
import type { CartItem } from '@/components/cart-provider'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = publishableKey ? loadStripe(publishableKey) : null
 
export default function Checkout({ items }: { items: CartItem[] }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function createSession() {
      try {
        setError(null)
        setClientSecret(null)
        const secret = await startCheckoutSession(items)
        if (!cancelled) setClientSecret(secret)
      } catch (sessionError) {
        if (!cancelled) {
          setError(sessionError instanceof Error ? sessionError.message : 'Unable to start checkout.')
        }
      }
    }

    void createSession()
    return () => {
      cancelled = true
    }
  }, [items])

  if (!publishableKey) {
    return <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">Stripe publishable key is not configured for this deployment.</div>
  }

  if (error) {
    return <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">{error}</div>
  }

  if (!clientSecret) {
    return <div className="flex min-h-64 items-center justify-center rounded-xl bg-slate-50 text-sm font-medium text-slate-500">Preparing secure payment…</div>
  }

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  )
}
