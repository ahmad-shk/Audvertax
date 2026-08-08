'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Checkout from '@/components/checkout'
import { useCart } from '@/components/cart-provider'

export default function CheckoutPage() {
  const { items } = useCart()
  return <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 md:py-12"><div className="mx-auto max-w-5xl"><Link href="/cart" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600"><ArrowLeft size={16} /> Back to cart</Link><div className="mt-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Secure payment</p><h1 className="mt-2 text-4xl font-bold text-slate-950">Complete your order</h1><p className="mt-3 max-w-2xl text-slate-600">Pay securely by card or another eligible payment method. Audvetax checkout is powered by Stripe.</p></div><div className="mt-8 rounded-2xl bg-white p-3 shadow-xl sm:p-6">{items.length ? <Checkout items={items} /> : <div className="p-8 text-center"><p className="font-semibold text-slate-900">Your cart is empty.</p><Link href="/services" className="mt-4 inline-block text-blue-600">Browse services</Link></div>}</div></div></main>
}
