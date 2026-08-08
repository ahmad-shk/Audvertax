'use client'

import { createContext, useContext, useMemo, useState } from 'react'

export interface CartItem {
  productId: string
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  count: number
  addItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const value = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    addItem: (productId) => setItems((current) => {
      const found = current.find((item) => item.productId === productId)
      return found
        ? current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { productId, quantity: 1 }]
    }),
    updateQuantity: (productId, quantity) => setItems((current) => quantity < 1 ? current.filter((item) => item.productId !== productId) : current.map((item) => item.productId === productId ? { ...item, quantity: Math.min(quantity, 10) } : item)),
    removeItem: (productId) => setItems((current) => current.filter((item) => item.productId !== productId)),
    clear: () => setItems([]),
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
