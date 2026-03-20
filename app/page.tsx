import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts } from '@/lib/products'

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border pt-16 pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6 leading-tight">
            Anvaya
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
            Rare botanical essences sourced directly from Indian farmers and communities, crafted with Swiss precision. Each product carries a story of heritage, care, and connection.
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <section className="px-6 md:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="bg-white border border-border rounded-sm p-8 md:p-12 transition-all duration-300 hover:shadow-lg hover:border-accent-gold">
                  {/* Product Image Placeholder */}
                  <div className="w-full aspect-square bg-accent-blush rounded-sm mb-8 flex items-center justify-center overflow-hidden">
                    <Image
                      src={`/images/products/${product.id}.jpg`}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-serif text-3xl text-primary group-hover:text-accent-warm transition-colors">
                        {product.name}
                      </h2>
                      {product.isFavourite && (
                        <span className="text-xs font-medium text-accent-gold uppercase tracking-widest whitespace-nowrap">
                          Gift Favourite
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary text-lg">
                      {product.descriptor}
                    </p>
                    <p className="text-sm text-accent-gold uppercase tracking-widest pt-2">
                      {product.region}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6 md:px-8 mt-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-text-secondary text-sm leading-relaxed">
            Engineered in Switzerland. Sourced in India. Crafted with care.
          </p>
        </div>
      </footer>
    </main>
  )
}
