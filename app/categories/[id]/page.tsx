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
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 16l-8-8m0 0l8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-body text-sm font-medium">Back</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8">
        {/* Image Placeholder */}
        <div className="relative w-full aspect-[4/3] bg-muted rounded-2xl overflow-hidden border border-border/30 shadow-md mb-8">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <span className="text-text-secondary text-sm font-medium">{category.name}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-serif text-4xl font-bold text-text-primary">
            {category.name}
          </h1>
          <p className="font-body text-base text-text-secondary leading-relaxed max-w-lg">
            {category.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary pt-2 border-t border-border/30">
            <span className="font-body">{category.region}</span>
            <span className="text-border">•</span>
            <span className="font-body">{category.variants.length} variants</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-8">
        <h2 className="font-serif text-2xl font-bold text-text-primary mb-6">
          Our Forms
        </h2>

        <div className="grid grid-cols-2 gap-5">
          {category.variants.map((variant) => (
            <div
              key={variant.id}
              className="group"
            >
              <Link
                href={`/categories/${category.id}/products/${variant.id}`}
                className="block active:scale-95 transition-transform duration-200"
              >
                <div className="bg-white rounded-3xl p-4 border border-border/40 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  {/* Image/Video Placeholder */}
                  <div className="relative w-full aspect-square bg-muted/40 rounded-2xl overflow-hidden flex-shrink-0 mb-3">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/20">
                      <div className="text-center">
                        <div className="text-3xl mb-2">✨</div>
                        <span className="text-text-secondary text-xs font-medium px-2">{variant.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-1">
                      {variant.type}
                    </p>
                    <h3 className="font-serif text-base font-semibold text-text-primary mb-2">
                      {variant.name}
                    </h3>
                    <p className="font-body text-xs text-text-secondary mb-4 leading-relaxed line-clamp-2">
                      {variant.description}
                    </p>
                  </div>

                  {/* Price & Button Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/30">
                    <div>
                      <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-1">Price</p>
                      <p className="font-serif text-xl font-bold text-text-primary">
                        CHF {variant.price?.toFixed(2) || 'TBD'}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14m-7-7h14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="px-4 py-8 mt-4">
        <div className="bg-gradient-to-br from-primary/10 to-accent-warm/5 rounded-2xl p-6 space-y-3 border border-primary/10">
          <p className="font-body text-xs uppercase font-bold text-primary tracking-wider">
            Pre-Order Only
          </p>
          <p className="font-body text-base text-text-primary leading-relaxed">
            Select a form to explore how it's used and place your pre-order.
          </p>
        </div>
      </section>
    </main>
  )
}
