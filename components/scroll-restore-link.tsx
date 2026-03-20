'use client'

import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

interface ScrollRestoreLinkProps extends Omit<ComponentProps<typeof Link>, 'onClick'> {
  storageKey: string
  children: ReactNode
}

export function ScrollRestoreLink({ storageKey, children, ...props }: ScrollRestoreLinkProps) {
  return (
    <Link
      {...props}
      onClick={() => {
        window.sessionStorage.setItem(storageKey, String(window.scrollY))
      }}
    >
      {children}
    </Link>
  )
}
