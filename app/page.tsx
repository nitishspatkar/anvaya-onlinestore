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
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="font-serif text-2xl text-text-primary">
            Anvaya
          </h1>
          <div className="text-xs text-text-secondary">Pre-Order</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6">
        <div className="space-y-2 mb-8">
          <h2 className="font-serif text-3xl text-text-primary">
            Indian Botanicals
          </h2>
          <p className="font-body text-sm text-text-secondary">
            Rare essences from farmers and artisans. Pre-order now.
          </p>
        </div>
      </section>

      {/* Category Carousel - Mobile Optimized */}
      <section className="mb-10">
        <div className="px-4 mb-4">
          <h3 className="font-serif text-lg text-text-primary">
            Collections
          </h3>
        </div>

        <div className="overflow-x-auto snap-x snap-mandatory flex gap-3 px-4 pb-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="flex-shrink-0 w-40 snap-start group active:opacity-70 transition-opacity"
            >
              <div className="space-y-2">
                {/* Image */}
                <div className="relative w-full aspect-square bg-accent-blush rounded-xl overflow-hidden border border-border/50">
                  <Image
                    src={`/images/categories/${category.imageId}.jpg`}
                    alt={category.name}
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name & Count */}
                <div>
                  <h4 className="font-serif text-base text-text-primary">
                    {category.name}
                  </h4>
                  <p className="font-body text-xs text-text-secondary">
                    {category.variants.length} items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 mb-10">
        <h3 className="font-serif text-lg text-text-primary mb-4">
          How Pre-Orders Work
        </h3>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-serif text-sm text-primary">1</span>
            </div>
            <div className="pt-0.5">
              <p className="font-body text-sm text-text-primary font-medium">
                Browse & Select
              </p>
              <p className="font-body text-xs text-text-secondary">
                Explore collections from artisans
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-serif text-sm text-primary">2</span>
            </div>
            <div className="pt-0.5">
              <p className="font-body text-sm text-text-primary font-medium">
                Reserve Your Batch
              </p>
              <p className="font-body text-xs text-text-secondary">
                Pre-order fresh essences
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-serif text-sm text-primary">3</span>
            </div>
            <div className="pt-0.5">
              <p className="font-body text-sm text-text-primary font-medium">
                Receive & Discover
              </p>
              <p className="font-body text-xs text-text-secondary">
                Get your products with maker stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Anvaya Section */}
      <section className="px-4 mb-10">
        <h3 className="font-serif text-lg text-text-primary mb-4">
          Why Anvaya
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-white rounded-xl border border-border/50 space-y-2">
            <p className="font-body text-xs uppercase text-text-secondary tracking-wider">
              Direct Trade
            </p>
            <p className="font-body text-xs text-text-primary">
              Sourced from farmers we know and trust
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border/50 space-y-2">
            <p className="font-body text-xs uppercase text-text-secondary tracking-wider">
              Transparent
            </p>
            <p className="font-body text-xs text-text-primary">
              Meet the makers behind each batch
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border/50 space-y-2">
            <p className="font-body text-xs uppercase text-text-secondary tracking-wider">
              Fresh & Handcrafted
            </p>
            <p className="font-body text-xs text-text-primary">
              Traditional methods, modern quality
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border/50 space-y-2">
            <p className="font-body text-xs uppercase text-text-secondary tracking-wider">
              Pre-Order Only
            </p>
            <p className="font-body text-xs text-text-primary">
              Fresh batches from India to you
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-6">
        <Link
          href={`/categories/${categories[0]?.id || '#'}`}
          className="block w-full py-4 px-4 bg-primary text-primary-foreground rounded-xl font-body font-medium text-center active:opacity-80 transition-opacity"
        >
          Start Pre-Ordering
        </Link>
      </section>
    </main>
  )
}
