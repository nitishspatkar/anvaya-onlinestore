'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, LayoutGrid, Sparkles } from 'lucide-react'

export function BottomNav() {
  const pathname = usePathname()
  const collectionActive = pathname === '/' || pathname.startsWith('/categories')

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-outline-variant/20 bg-surface/95 px-4 backdrop-blur-md md:hidden"
      aria-label="Primary"
    >
      <Link
        href="#"
        className="flex flex-col items-center justify-center text-on-surface/40 transition-all active:scale-95 hover:text-primary"
      >
        <BookOpen className="h-5 w-5" strokeWidth={1.25} />
        <span className="mt-0.5 font-body text-[9px] font-medium tracking-wider">Our Story</span>
      </Link>
      <Link
        href="/"
        className={`flex flex-col items-center justify-center transition-all active:scale-95 ${
          collectionActive ? 'scale-105 text-primary' : 'text-on-surface/40 hover:text-primary'
        }`}
      >
        <LayoutGrid className="h-5 w-5" strokeWidth={collectionActive ? 2 : 1.25} />
        <span className="mt-0.5 font-body text-[9px] font-medium tracking-wider">Collection</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center justify-center text-on-surface/40 transition-all active:scale-95 hover:text-primary"
      >
        <Sparkles className="h-5 w-5" strokeWidth={1.25} />
        <span className="mt-0.5 font-body text-[9px] font-medium tracking-wider">The Circle</span>
      </Link>
    </nav>
  )
}
