'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface">
      <div className="max-w-md px-6 text-center">
        <h1 className="mb-4 font-headline text-4xl text-primary italic md:text-5xl">Not found</h1>
        <p className="mb-8 font-body text-lg text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary px-8 py-3 font-body text-[10px] font-bold tracking-[0.2em] text-on-primary uppercase transition-opacity hover:opacity-90"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
