import Link from 'next/link'
import Image from 'next/image'
import { getAllCategories } from '@/lib/products'

export const metadata = {
  title: 'Anvaya — Rare Botanicals from India',
  description: 'Pre-order rare botanical essences sourced directly from Indian farmers and artisans.',
}

export default function HomePage() {
  const categories = getAllCategories()

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-primary/5 to-transparent backdrop-blur-sm border-b border-border">
        <div className="px-4 py-5 flex items-center justify-between">
          <h1 className="font-serif text-3xl font-bold text-primary">
            Anvaya
          </h1>
          <div className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
            Pre-Order
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8">
        <div className="space-y-3 mb-10">
          <h2 className="font-serif text-4xl font-bold text-text-primary leading-tight">
            Fresh botanical essences from Indian makers
          </h2>
          <p className="font-body text-base text-text-secondary leading-relaxed max-w-sm">
            Direct from farmers to your home. Handcrafted, transparent, always fresh.
          </p>
        </div>
      </section>

      {/* Category Carousel - Mobile Optimized */}
      <section className="mb-12">
        <div className="px-4 mb-5">
          <h3 className="font-serif text-2xl font-bold text-text-primary">
            Collections
          </h3>
        </div>

        <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 pb-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="flex-shrink-0 w-44 snap-start group active:scale-95 transition-transform duration-200"
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="relative w-full aspect-square bg-accent-blush rounded-2xl overflow-hidden border border-border/30 group-hover:border-primary/30 transition-colors shadow-sm">
                  <Image
                    src={`/images/categories/${category.imageId}.jpg`}
                    alt={category.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Name & Count */}
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <p className="font-body text-sm text-text-secondary">
                    {category.variants.length} items available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 mb-12">
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-6">
          How Pre-Orders Work
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-md">
              1
            </div>
            <div className="pt-1">
              <p className="font-body font-semibold text-text-primary mb-1">
                Browse Collections
              </p>
              <p className="font-body text-sm text-text-secondary">
                Explore fresh batches from Indian farmers and artisans
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent-warm to-accent-warm/70 text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-md">
              2
            </div>
            <div className="pt-1">
              <p className="font-body font-semibold text-text-primary mb-1">
                Place Your Pre-Order
              </p>
              <p className="font-body text-sm text-text-secondary">
                Reserve your batch with just a few details
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent-terracotta to-accent-terracotta/70 text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-md">
              3
            </div>
            <div className="pt-1">
              <p className="font-body font-semibold text-text-primary mb-1">
                Receive & Enjoy
              </p>
              <p className="font-body text-sm text-text-secondary">
                Fresh essences arrive with maker stories included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Anvaya Section */}
      <section className="px-4 mb-12">
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-6">
          Why Anvaya
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl border border-primary/10 space-y-2">
            <p className="font-body text-xs uppercase font-bold text-primary tracking-wider">
              Direct Trade
            </p>
            <p className="font-body text-sm text-text-primary leading-tight">
              Farmer direct. No middlemen.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-accent-warm/5 to-transparent rounded-2xl border border-accent-warm/10 space-y-2">
            <p className="font-body text-xs uppercase font-bold text-accent-warm tracking-wider">
              Transparent
            </p>
            <p className="font-body text-sm text-text-primary leading-tight">
              Meet every maker behind your order
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-accent-terracotta/5 to-transparent rounded-2xl border border-accent-terracotta/10 space-y-2">
            <p className="font-body text-xs uppercase font-bold text-accent-terracotta tracking-wider">
              Handcrafted
            </p>
            <p className="font-body text-sm text-text-primary leading-tight">
              Traditional methods, always fresh
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-2xl border border-accent-gold/10 space-y-2">
            <p className="font-body text-xs uppercase font-bold text-accent-gold tracking-wider">
              Pre-Order Only
            </p>
            <p className="font-body text-sm text-text-primary leading-tight">
              Batches made to order, never stale
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-8">
        <Link
          href={`/categories/${categories[0]?.id || '#'}`}
          className="block w-full py-5 px-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-2xl font-body font-semibold text-center active:scale-95 transition-transform duration-200 shadow-lg hover:shadow-xl"
        >
          Start Pre-Ordering Now
        </Link>
      </section>
    </main>
  )
}
