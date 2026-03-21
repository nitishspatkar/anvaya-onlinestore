'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-16 bg-surface-container-low text-primary md:mt-24">
      <div className="stitch-wide grid grid-cols-1 gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="flex flex-col space-y-6">
          <div className="font-headline text-xl text-primary">Anvaya</div>
          <p className="font-body text-sm font-light leading-relaxed tracking-wide text-on-surface/70">
            Curating botanical essences between growers in India and careful hands elsewhere. Our practice is slow,
            intentional, and grounded in plain words—not loud claims.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-label text-xs uppercase tracking-widest text-primary">Shop</span>
          <Link href="/" className="text-sm font-light text-on-surface/70 transition-colors hover:text-secondary">
            Collections
          </Link>
          <Link href="#" className="text-sm font-light text-on-surface/70 transition-colors hover:text-secondary">
            Shipping &amp; returns
          </Link>
          <Link href="#" className="text-sm font-light text-on-surface/70 transition-colors hover:text-secondary">
            Wholesale
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-label text-xs uppercase tracking-widest text-primary">Legal</span>
          <Link href="#" className="text-sm font-light text-on-surface/70 transition-colors hover:text-secondary">
            Privacy policy
          </Link>
          <Link href="#" className="text-sm font-light text-on-surface/70 transition-colors hover:text-secondary">
            Terms of service
          </Link>
          <Link href="#" className="text-sm font-light text-on-surface/70 transition-colors hover:text-secondary">
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-6">
          <h4 className="font-label text-xs uppercase tracking-widest text-primary">Journal</h4>
          <p className="text-sm font-light text-on-surface/70">
            Occasional notes on provenance and harvest—light touch, no noise.
          </p>
          <div className="border-b border-primary/20 pb-2">
            <input
              className="w-full border-none bg-transparent p-0 text-sm placeholder:text-primary/30 focus:ring-0"
              placeholder="Email address"
              type="email"
              readOnly
              aria-label="Email (coming soon)"
            />
          </div>
        </div>
      </div>
      <div className="stitch-wide flex flex-col items-center justify-between gap-4 border-t border-outline-variant/10 px-6 py-8 sm:flex-row">
        <p className="font-serif text-xs italic opacity-60">
          © {new Date().getFullYear()} Anvaya. Crafted with care between soil and shelf.
        </p>
      </div>
    </footer>
  )
}
