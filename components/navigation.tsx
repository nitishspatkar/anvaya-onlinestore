'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CartCountBadge } from '@/components/cart-count-badge'

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo/Home Link */}
        <Link href="/" className="group">
          <h1 className="font-serif text-2xl text-primary group-hover:text-accent-warm transition-colors">
            Anvaya
          </h1>
        </Link>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <div className="hidden sm:flex items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-text-primary">Explore</span>
            </div>
          )}
          <CartCountBadge />
        </div>
      </nav>
    </header>
  )
}
