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
      {/* Header - Single Logo Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 py-5 flex items-center justify-between">
          <h1 className="font-serif text-3xl font-bold text-primary">
            Anvaya
          </h1>
          <div className="text-xs font-semibold text-primary uppercase tracking-wider">
            Pre-Orders Open
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8">
        <div className="space-y-3">
          <h2 className="font-serif text-4xl font-bold text-text-primary leading-tight">
            Rare botanical essences from Indian makers
          </h2>
          <p className="font-body text-base text-text-secondary leading-relaxed max-w-sm">
            We're accepting pre-orders now. Direct from farmers to your home.
          </p>
        </div>
      </section>

      {/* Categories Grid - No Horizontal Scroll */}
      <section className="px-4 py-8">
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-6">
          Collections
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group active:scale-95 transition-transform duration-200"
            >
              <div className="space-y-3 h-full">
                {/* Image Placeholder */}
                <div className="relative w-full aspect-square bg-muted rounded-2xl overflow-hidden border border-border/30 shadow-sm">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                    <span className="text-text-secondary text-sm font-medium">
                      {category.name}
                    </span>
                  </div>
                </div>

                {/* Name & Count */}
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <p className="font-body text-sm text-text-secondary">
                    {category.variants.length} items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* What Anvaya Stands For Section */}
      <section className="px-4 py-10 mt-4">
        <div className="bg-gradient-to-br from-primary/10 to-accent-warm/5 rounded-2xl p-6 space-y-4 border border-primary/10">
          <h3 className="font-serif text-2xl font-bold text-text-primary">
            What Anvaya Stands For
          </h3>
          <p className="font-body text-base text-text-secondary leading-relaxed">
            We believe in empowering grassroot farmers and artisanal producers. Every product tells a story of tradition, craft, and care. We connect you directly with the makers who pour their knowledge into creating unique botanical essences the world should know about.
          </p>
          <p className="font-body text-sm text-text-secondary italic">
            Fair trade. Direct. Transparent. Always.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pt-8 pb-4">
        <Link
          href={`/categories/${categories[0]?.id || '#'}`}
          className="block w-full py-5 px-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-2xl font-body font-semibold text-center active:scale-95 transition-transform duration-200 shadow-lg"
        >
          Explore Collections
        </Link>
      </section>
    </main>
  )
}
