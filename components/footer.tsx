'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/50 backdrop-blur-sm">
      <div className="px-4 py-12 max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-lg font-bold text-text-primary mb-3">
              Anvaya
            </h4>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Direct trade botanical essences from Indian artisans and farmers.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h5 className="font-body text-xs uppercase font-bold text-text-primary tracking-wider mb-3">
              Collections
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  Browse All
                </Link>
              </li>
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-body text-xs uppercase font-bold text-text-primary tracking-wider mb-3">
              Company
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-body text-xs uppercase font-bold text-text-primary tracking-wider mb-3">
              Support
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mb-6">
          {/* Newsletter Signup */}
          <div className="max-w-sm mb-6">
            <p className="font-body text-sm text-text-primary font-medium mb-3">
              Get updates on new collections
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-body text-sm font-medium active:scale-95 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-body text-xs text-text-secondary">
            © 2024 Anvaya. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="font-body text-xs text-text-secondary hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="font-body text-xs text-text-secondary hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="font-body text-xs text-text-secondary hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
