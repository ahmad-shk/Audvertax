'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Checkout from '@/components/checkout'
import { useCart } from '@/components/cart-provider'
import { useUser } from '@/app/user-context'
import { getProduct, formatProductPrice } from '@/lib/products'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CheckoutPage() {
  const { items, clear } = useCart()
  const { user, addPurchasedServices } = useUser()
  const router = useRouter()
  const [isPaid, setIsPaid] = useState(false)

  const completeOrder = () => {
    if (!user) { router.push('/login'); return }
    addPurchasedServices(items.map((item) => { 
      const product = getProduct(item.productId) 
      return { 
        serviceId: item.productId, 
        serviceName: product?.name ?? item.productId, 
        price: product ? formatProductPrice(product) : 'Contact us', 
        datePurchased: new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date()), 
        quantity: item.quantity 
      } 
    }))
    clear()
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
          <ArrowLeft size={16} /> Back to cart
        </Link>
        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Secure payment</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-950">Complete your order</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Pay securely by card or another eligible payment method. Audvetax checkout is powered by Stripe.</p>
        </div>
        <div className="mt-8 rounded-2xl bg-white p-3 shadow-xl sm:p-6">
          {items.length ? (
            <>
              <Checkout items={items} onPaymentComplete={() => setIsPaid(true)} />
              {isPaid && (
                <button 
                  onClick={completeOrder} 
                  className="mt-6 w-full rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-blue-500 hover:text-white"
                >
                  I&apos;ve completed payment — open dashboard
                </button>
              )}
            </>
          ) : (
            <div className="p-8 text-center">
              <p className="font-semibold text-slate-900">Your cart is empty.</p>
              <Link href="/services" className="mt-4 inline-block text-blue-600">Browse services</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}