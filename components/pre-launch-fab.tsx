'use client'

import { Calendar } from 'lucide-react'

export function PreLaunchFab() {
  return (
    <div className="fixed bottom-24 right-6 z-40 md:bottom-8">
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-xl transition-transform hover:scale-110 active:scale-95"
        aria-label="Reserve for launch"
      >
        <Calendar className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </div>
  )
}
