import { getCategoryById, getAllCategories } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { id } = await params
  const category = getCategoryById(id)

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'This category does not exist.',
    }
  }

  return {
    title: `${category.name} | Anvaya`,
    description: category.description,
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    id: category.id,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params
  const category = getCategoryById(id)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with Back Link */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:text-accent-warm transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <path d="M10 12l-6-6m0 0l6-6" strokeWidth="1.5" />
            </svg>
            <span className="font-body text-sm">Back to categories</span>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Category Image */}
            <div className="relative w-full aspect-square bg-accent-blush rounded-sm overflow-hidden border border-border">
              <Image
                src={`/images/categories/${category.imageId}.jpg`}
                alt={category.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Category Info */}
            <div className="py-4">
              <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-6">
                {category.name}
              </h1>
              <p className="font-body text-lg text-text-secondary leading-relaxed mb-8">
                {category.description}
              </p>
              <div className="space-y-2">
                <p className="font-body text-sm text-text-secondary">
                  <span className="uppercase tracking-wide font-medium text-text-primary">Region:</span> {category.region}
                </p>
                <p className="font-body text-sm text-text-secondary">
                  <span className="uppercase tracking-wide font-medium text-text-primary">Variants:</span> {category.variants.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Products List */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl text-text-primary mb-12">Discover our variants</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/categories/${category.id}/products/${variant.id}`}
              className="group"
            >
              <div className="border border-border rounded-sm p-6 hover:border-primary hover:bg-accent-blush/20 transition-all duration-300">
                {/* Product Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-text-primary group-hover:text-primary transition-colors mb-2">
                    {variant.name}
                  </h3>
                  <p className="font-body text-xs text-text-secondary uppercase tracking-wide">
                    {variant.type}
                  </p>
                </div>

                {/* Description */}
                <p className="font-body text-text-secondary text-sm leading-relaxed mb-6">
                  {variant.description}
                </p>

                {/* Maker Info - Subtle */}
                <div className="flex items-start gap-3 pt-4 border-t border-border/50">
                  <div className="flex-1">
                    <p className="font-body text-xs font-medium text-text-primary uppercase tracking-wide">
                      Made by
                    </p>
                    <p className="font-body text-sm text-text-secondary mt-1">
                      {variant.maker.name}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    className="text-text-secondary group-hover:text-primary transition-colors mt-1 flex-shrink-0"
                  >
                    <path d="M6 12l6-6m0 0L6 0" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Note */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="font-body text-text-secondary text-sm leading-relaxed max-w-2xl">
          Click on any variant to learn more about the artisans and makers behind each product.
        </p>
      </section>
    </main>
  )
}
