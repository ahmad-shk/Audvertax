'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

export default function CartLink() {
  const { count } = useCart()
  return <Link href="/cart" aria-label={`Shopping cart with ${count} item${count === 1 ? '' : 's'}`} className="relative inline-flex rounded-xl p-2 text-slate-700 hover:bg-cyan-50 hover:text-blue-600"><ShoppingCart size={21} />{count > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[11px] font-bold text-slate-950">{count}</span>}</Link>
}
