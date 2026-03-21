'use client'

import { useState } from 'react'
import type { ProductVariant, Category } from '@/lib/products'

interface PreOrderModalProps {
  variant: ProductVariant
  category: Category
}

const fieldClass =
  'w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-0 focus:outline-none'

export function PreOrderModal({ variant, category }: PreOrderModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', quantity: '1', notes: '' })
    }, 2000)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full bg-primary px-6 py-4 font-body text-[10px] font-bold tracking-[0.2em] text-on-primary uppercase transition-all hover:bg-primary-container active:scale-[0.99]"
      >
        Reserve for launch
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-[2px]" onClick={() => setIsOpen(false)} />
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center sm:p-4">
          <div className="max-h-[90vh] w-full overflow-y-auto border-t border-outline-variant/10 bg-surface p-6 shadow-[0_24px_80px_-24px_rgba(27,28,28,0.18)] sm:max-w-lg sm:border sm:border-outline-variant/10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-headline text-2xl text-primary">Pre-order</h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant transition-colors hover:text-primary"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {isSubmitted ? (
              <div className="space-y-4 py-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center bg-primary-container/20">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-primary"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-headline text-xl text-primary">Request received</p>
                <p className="font-body text-sm text-on-surface-variant">We&apos;ll follow up by email with next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-6 bg-surface-container-low p-5">
                  <p className="stitch-label mb-2">Product</p>
                  <p className="font-headline text-lg text-primary">{variant.name}</p>
                  <p className="font-body text-sm text-on-surface-variant">
                    {variant.type} · {category.name}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="stitch-label mb-1 block">Full name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="stitch-label mb-1 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={fieldClass}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="stitch-label mb-1 block">Phone (optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={fieldClass}
                      placeholder="+41 …"
                    />
                  </div>
                  <div>
                    <label className="stitch-label mb-1 block">Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((q) => (
                        <option key={q} value={q}>
                          {q} unit{q !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="stitch-label mb-1 block">Notes</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className={`${fieldClass} resize-none`}
                      placeholder="Allergies, gifting, or timing…"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="bg-surface-container-low p-4">
                  <p className="font-body text-xs leading-relaxed text-on-surface-variant">
                    Pre-orders are placeholders until fulfilment is live—we&apos;ll confirm timelines clearly before any
                    payment.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary py-4 font-body text-[10px] font-bold tracking-[0.2em] text-on-primary uppercase transition-all hover:bg-primary-container active:scale-[0.99]"
                  >
                    Confirm request
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full border border-outline-variant/20 bg-surface py-4 font-body text-[10px] font-bold tracking-[0.2em] text-primary uppercase transition-colors hover:bg-surface-container-low active:scale-[0.99]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
