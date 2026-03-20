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
        className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-2xl font-body font-semibold text-lg active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
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
        <div className="fixed inset-0 z-50 flex items-end sm:items-center">
          <div className="w-full sm:max-w-lg sm:mx-auto bg-background rounded-t-2xl sm:rounded-2xl border-t sm:border border-border p-6 max-h-[90vh] overflow-y-auto shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-text-primary">
                Pre-Order
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {isSubmitted ? (
              /* Success State */
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="1.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-xl text-text-primary mb-2">Pre-Order Submitted!</p>
                  <p className="font-body text-base text-text-secondary">
                    Check your email for confirmation details.
                  </p>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Product Summary */}
                <div className="bg-gradient-to-br from-primary/10 to-accent-warm/5 rounded-xl p-5 border border-primary/10 mb-6">
                  <p className="font-body text-xs text-text-secondary uppercase tracking-wider font-bold mb-2">
                    Product
                  </p>
                  <p className="font-serif text-lg font-semibold text-text-primary mb-1">
                    {variant.name}
                  </p>
                  <p className="font-body text-sm text-text-secondary">
                    {variant.type}
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block font-body text-xs text-text-secondary uppercase tracking-wider font-bold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-xs text-text-secondary uppercase tracking-wider font-bold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-body text-xs text-text-secondary uppercase tracking-wider font-bold mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block font-body text-xs text-text-secondary uppercase tracking-wider font-bold mb-2">
                      Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                    <label className="block font-body text-xs text-text-secondary uppercase tracking-wider font-bold mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Any special requests?"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Info Banner */}
                <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Pre-orders typically ship within 4-6 weeks. You'll receive a confirmation email with tracking details and estimated delivery.
                  </p>
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-body font-semibold active:scale-95 transition-transform duration-200"
                  >
                    Confirm Pre-Order
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 px-4 bg-white border-2 border-border text-text-primary rounded-xl font-body font-semibold active:scale-95 transition-transform duration-200"
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
