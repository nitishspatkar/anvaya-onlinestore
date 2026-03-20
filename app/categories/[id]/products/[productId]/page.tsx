import { getCategoryById, getProductVariantById, getAllCategories } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: Promise<{ id: string; productId: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id, productId } = await params
  const variant = getProductVariantById(id, productId)

  if (!variant) {
    return {
      title: 'Product Not Found',
      description: 'This product does not exist.',
    }
  }

  return {
    title: `${variant.name} | Anvaya`,
    description: variant.description,
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  const params: Array<{ id: string; productId: string }> = []
  
  categories.forEach((category) => {
    category.variants.forEach((variant) => {
      params.push({
        id: category.id,
        productId: variant.id,
      })
    })
  })

  return params
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id, productId } = await params
  const category = getCategoryById(id)
  const variant = getProductVariantById(id, productId)

  if (!category || !variant) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Anvaya
            </Link>
            <span>/</span>
            <Link href={`/categories/${category.id}`} className="hover:text-primary transition-colors">
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-text-primary">{variant.name}</span>
          </div>

          {/* Product Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div className="relative w-full aspect-square bg-accent-blush rounded-sm overflow-hidden border border-border">
              <Image
                src={`/images/products/${category.id}-${variant.id}.jpg`}
                alt={variant.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-start py-4">
              <div className="mb-6">
                <p className="font-body text-xs text-text-secondary uppercase tracking-wide mb-2">
                  {category.name}
                </p>
                <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-4">
                  {variant.name}
                </h1>
                <p className="font-body text-lg text-text-secondary">
                  {variant.description}
                </p>
              </div>

              {/* Product Type */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-body text-xs text-text-secondary uppercase tracking-wide mb-2">
                  Type
                </p>
                <p className="font-body text-lg text-text-primary">
                  {variant.type}
                </p>
              </div>

              {/* CTA */}
              <button className="mt-12 w-full bg-primary text-primary-foreground font-body font-medium py-4 px-6 rounded-sm hover:bg-opacity-90 transition-all duration-300">
                Pre-Order
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Maker Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Maker Portrait */}
          <div className="relative w-full aspect-square bg-accent-blush rounded-sm overflow-hidden border border-border">
            <Image
              src={`/images/portraits/${variant.maker.portraitId}.jpg`}
              alt={variant.maker.name}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Maker Info */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="font-body text-xs text-text-secondary uppercase tracking-wide mb-4">
              Made By
            </p>
            <h2 className="font-serif text-4xl text-text-primary mb-2">
              {variant.maker.name}
            </h2>
            <p className="font-body text-lg text-accent-warm mb-6 uppercase tracking-wide">
              {variant.maker.role}
            </p>

            {/* Maker Brief */}
            <p className="font-body text-text-secondary leading-relaxed mb-8">
              {variant.maker.brief}
            </p>

            {/* Maker Details */}
            <div className="space-y-4 pt-8 border-t border-border">
              <div>
                <p className="font-body text-xs text-text-secondary uppercase tracking-wide mb-2">
                  Location
                </p>
                <p className="font-body text-lg text-text-primary">
                  {variant.maker.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-2xl">
          <h3 className="font-serif text-3xl text-text-primary mb-6">
            Why this product
          </h3>
          <p className="font-body text-lg text-text-secondary leading-relaxed mb-8">
            This {variant.type.toLowerCase()} from {category.name} is created with meticulous care by {variant.maker.name}. Every batch is sourced sustainably, processed traditionally, and verified to meet our standards of quality and purity. This is more than a product — it's a direct connection to the people and land that created it.
          </p>
        </div>
      </section>

      {/* Other Variants in This Category */}
      {category.variants.length > 1 && (
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <h3 className="font-serif text-3xl text-text-primary mb-8">
            Explore other {category.name} variants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.variants.map((v) => {
              if (v.id === variant.id) return null
              return (
                <Link
                  key={v.id}
                  href={`/categories/${category.id}/products/${v.id}`}
                  className="group"
                >
                  <div className="border border-border rounded-sm p-4 hover:border-primary hover:bg-accent-blush/20 transition-all duration-300">
                    <h4 className="font-serif text-xl text-text-primary group-hover:text-primary transition-colors mb-2">
                      {v.name}
                    </h4>
                    <p className="font-body text-xs text-text-secondary uppercase tracking-wide mb-3">
                      {v.type}
                    </p>
                    <p className="font-body text-sm text-text-secondary line-clamp-2">
                      {v.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Back Navigation */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <Link
          href={`/categories/${category.id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-accent-warm transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
            <path d="M10 12l-6-6m0 0l6-6" strokeWidth="1.5" />
          </svg>
          <span className="font-body text-sm">Back to {category.name}</span>
        </Link>
      </section>
    </main>
  )
}
