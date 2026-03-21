'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search } from 'lucide-react'
import { CartCountBadge } from '@/components/cart-count-badge'

const navLink =
  'font-label text-xs uppercase tracking-[0.2em] text-on-surface/60 transition-all hover:text-primary'
const navLinkActive =
  'font-label border-b border-primary pb-1 text-xs uppercase tracking-[0.2em] text-primary'

export function Navigation() {
  const pathname = usePathname()
  const isCollection =
    pathname === '/' || pathname.startsWith('/categories')

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-surface/90 backdrop-blur-md">
      {/* Mobile — quick_access prototype */}
      <div className="flex items-center justify-between px-6 py-4 md:hidden">
        <button
          type="button"
          className="text-primary transition-colors hover:text-secondary active:scale-95"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" strokeWidth={1.25} />
        </button>
        <Link href="/" className="font-serif text-2xl font-bold tracking-[0.2em] text-primary">
          ANVAYA
        </Link>
        <CartCountBadge variant="mobile" />
      </div>

      {/* Desktop — collection / vetiver prototype */}
      <nav className="stitch-wide hidden items-center justify-between py-6 md:flex">
        <Link href="/" className="font-headline text-3xl tracking-tighter text-primary">
          Anvaya
        </Link>
        <div className="flex items-center gap-12">
          <Link href="/" className={isCollection ? navLinkActive : navLink}>
            Collections
          </Link>
          <Link href="#" className={navLink}>
            Our Story
          </Link>
          <Link href="#" className={navLink}>
            Provenances
          </Link>
          <Link href="#" className={navLink}>
            The Archives
          </Link>
        </div>
        <div className="flex items-center gap-6 text-primary">
          <button
            type="button"
            className="transition-opacity hover:opacity-70"
            aria-label="Search"
          >
            <Search className="h-6 w-6" strokeWidth={1.25} />
          </button>
          <CartCountBadge variant="desktop" />
        </div>
      </nav>
    </header>
  )
}
