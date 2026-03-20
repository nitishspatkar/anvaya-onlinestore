'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
          Not Found
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
