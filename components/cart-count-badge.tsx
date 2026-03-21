'use client'

import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'

const CART_COUNT_KEY = 'anvaya-cart-count'

type Variant = 'mobile' | 'desktop'

export function CartCountBadge({ variant = 'mobile' }: { variant?: Variant }) {
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

  if (variant === 'desktop') {
    return (
      <div className="relative inline-flex text-primary">
        <ShoppingBag className="h-6 w-6 cursor-pointer transition-opacity hover:opacity-70" strokeWidth={1.25} />
        {count > 0 && (
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-sm bg-primary px-0.5 font-body text-[9px] font-bold text-on-primary">
            {count}
          </span>
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      className="relative text-primary transition-colors hover:text-secondary active:scale-95"
      aria-label={`Bag, ${count} items`}
    >
      <ShoppingBag className="h-6 w-6" strokeWidth={1.25} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-sm bg-primary px-0.5 font-body text-[8px] font-bold text-on-primary">
          {count}
        </span>
      )}
    </button>
  )
}
