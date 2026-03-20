'use client'

import { useState } from 'react'
import type { ProductVariant, Category } from '@/lib/products'

interface PreOrderModalProps {
  variant: ProductVariant
  category: Category
}

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
    // In a real app, this would send data to a backend/database
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
        onClick={() => setIsOpen(true)}
        className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-xl font-body font-medium active:opacity-80 transition-opacity"
      >
        Pre-Order Now
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="w-full bg-background rounded-t-2xl border-t border-border p-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-text-primary">
                Pre-Order {variant.name}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {isSubmitted ? (
              /* Success State */
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
                    <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-lg text-text-primary mb-1">Pre-Order Submitted!</p>
                  <p className="font-body text-sm text-text-secondary">
                    We'll confirm your order soon.
                  </p>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product Summary */}
                <div className="bg-accent-blush/30 rounded-xl p-4 mb-6">
                  <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-1">
                    Product
                  </p>
                  <p className="font-serif text-base text-text-primary">
                    {variant.name}
                  </p>
                  <p className="font-body text-xs text-text-secondary mt-2">
                    {variant.type} • Made by {variant.maker.name}
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block font-body text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-body text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block font-body text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((q) => (
                      <option key={q} value={q}>
                        {q} unit{q !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-body text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white"
                    placeholder="Any special requests? (optional)"
                    rows={3}
                  />
                </div>

                {/* Info */}
                <p className="font-body text-xs text-text-secondary bg-muted/50 rounded-lg p-3">
                  Pre-orders are typically fulfilled within 4-6 weeks. You'll receive a confirmation email with tracking details.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-xl font-body font-medium active:opacity-80 transition-opacity"
                >
                  Confirm Pre-Order
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 bg-white border border-border text-text-primary rounded-xl font-body font-medium active:opacity-80 transition-opacity"
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
