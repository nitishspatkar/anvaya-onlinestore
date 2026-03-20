'use client'

import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'

const CART_COUNT_KEY = 'anvaya-cart-count'

export function CartCountBadge() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const sync = () => setCount(Number(window.localStorage.getItem(CART_COUNT_KEY) ?? '0'))
    const onUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ count?: number }>
      if (typeof customEvent.detail?.count === 'number') {
        setCount(customEvent.detail.count)
        return
      }
      sync()
    }

    sync()
    window.addEventListener('cart:updated', onUpdate)
    return () => window.removeEventListener('cart:updated', onUpdate)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs text-text-primary">
      <ShoppingCart size={14} />
      <span className="font-medium">{count}</span>
    </div>
  )
}
