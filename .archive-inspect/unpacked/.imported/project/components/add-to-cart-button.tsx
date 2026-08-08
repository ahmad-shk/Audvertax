'use client'

import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/components/cart-provider'

export default function AddToCartButton({ productId }: { productId: string }) {
  const router = useRouter()
  const { addItem } = useCart()

  return (
    <button
      type="button"
      onClick={() => { addItem(productId); router.push('/cart') }}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
    >
      <ShoppingCart size={18} />
      Add to cart
    </button>
  )
}
