'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

const CART_COUNT_KEY = 'anvaya-cart-count'

interface QuickAddButtonProps {
  label: string
  className?: string
}

export function QuickAddButton({ label, className }: QuickAddButtonProps) {
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = () => {
    const current = Number(window.localStorage.getItem(CART_COUNT_KEY) ?? '0')
    const next = current + 1
    window.localStorage.setItem(CART_COUNT_KEY, String(next))
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: { count: next } }))
    window.dispatchEvent(new CustomEvent('cart:added', { detail: { label } }))

    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1000)
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      aria-label={`Add ${label} to cart`}
      className={
        className ??
        'inline-flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors hover:bg-primary/90'
      }
    >
      {justAdded ? <span className="text-xs font-medium">OK</span> : <Plus size={16} />}
    </button>
  )
}
