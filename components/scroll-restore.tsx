'use client'

import { useEffect } from 'react'

interface ScrollRestoreProps {
  storageKey: string
}

export function ScrollRestore({ storageKey }: ScrollRestoreProps) {
  useEffect(() => {
    const saved = window.sessionStorage.getItem(storageKey)
    if (!saved) return
    const y = Number(saved)
    if (!Number.isNaN(y)) {
      window.requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'auto' }))
    }
    window.sessionStorage.removeItem(storageKey)
  }, [storageKey])

  return null
}
