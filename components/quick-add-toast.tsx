'use client'

import { useEffect, useState } from 'react'

export function QuickAddToast() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const onAdded = (event: Event) => {
      const customEvent = event as CustomEvent<{ label?: string }>
      const label = customEvent.detail?.label ?? 'Item'
      setMessage(`${label} added to cart`)
      window.setTimeout(() => setMessage(''), 1600)
    }

    window.addEventListener('cart:added', onAdded)
    return () => window.removeEventListener('cart:added', onAdded)
  }, [])

  if (!message) return null

  return (
    <div className="fixed bottom-28 left-1/2 z-[60] -translate-x-1/2 rounded-sm bg-primary px-4 py-2 text-xs font-medium text-on-primary shadow-lg md:bottom-6">
      {message}
    </div>
  )
}
