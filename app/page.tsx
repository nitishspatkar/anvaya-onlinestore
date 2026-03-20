import Link from 'next/link'
import Image from 'next/image'
import { getAllCategories } from '@/lib/products'

export const metadata = {
  title: 'Anvaya — Rare Botanicals from India',
  description: 'Discover rare, artisan-crafted botanical essences. Sourced directly from Indian farmers and cooperatives, crafted with Swiss precision.',
}

export default function HomePage() {
  const categories = getAllCategories()

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-text-primary text-pretty">
            Anvaya
          </h1>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            Rare botanical essences sourced directly from Indian farmers and artisans. Each product tells a story of precision, sustainability, and human craft.
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group cursor-pointer"
            >
              {/* Category Card */}
              <div className="h-full flex flex-col">
                {/* Image Container */}
                <div className="relative w-full aspect-square bg-accent-blush rounded-sm overflow-hidden mb-6 border border-border transition-all duration-300 group-hover:border-primary">
                  <Image
                    src={`/images/categories/${category.imageId}.jpg`}
                    alt={category.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Category Info */}
                <div className="flex-1 flex flex-col">
                  <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <p className="font-body text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {category.description}
                  </p>
                  <p className="font-body text-xs text-text-secondary uppercase tracking-wide">
                    {category.variants.length} variant{category.variants.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-6 inline-flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-body text-sm">Explore</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M6 12l6-6m0 0L6 0" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="font-body text-text-secondary text-sm leading-relaxed max-w-2xl">
          Every product is sourced directly from Indian farmers, artisans, and cooperatives who have perfected their craft across generations. We bring these essences to you with Swiss precision, transparency, and respect.
        </p>
      </section>
    </main>
  )
}
