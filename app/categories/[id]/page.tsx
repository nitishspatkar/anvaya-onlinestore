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
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-primary/5 to-transparent backdrop-blur-sm border-b border-border px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 16l-8-8m0 0l8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-body text-sm font-medium">Back</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8">
        <div className="relative w-full aspect-[4/3] bg-accent-blush rounded-2xl overflow-hidden border border-border/30 shadow-md mb-8">
          <Image
            src={`/images/categories/${category.imageId}.jpg`}
            alt={category.name}
            width={500}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
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
            <span className="font-body">{category.variants.length} variants available</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-8">
        <h2 className="font-serif text-2xl font-bold text-text-primary mb-6">
          Available Forms
        </h2>

        <div className="space-y-4">
          {category.variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/categories/${category.id}/products/${variant.id}`}
              className="block p-5 bg-white border border-border/30 rounded-2xl active:scale-95 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-text-primary">
                      {variant.name}
                    </h3>
                    <span className="font-body text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                      {variant.type}
                    </span>
                  </div>
                  <p className="font-body text-sm text-text-secondary mb-3 line-clamp-2">
                    {variant.description}
                  </p>
                  <p className="font-body text-xs text-text-secondary">
                    <span className="font-medium text-primary">Maker:</span> {variant.maker.name}
                  </p>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary flex-shrink-0 mt-1"
                  strokeWidth="1.5"
                >
                  <path d="M6 12l6-6m0 0L6 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
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
            Each batch is made fresh to order. Select a variant to place your pre-order and discover the story behind your essences.
          </p>
        </div>
      </section>
    </main>
  )
}
