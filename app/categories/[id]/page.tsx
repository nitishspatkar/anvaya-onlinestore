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
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-4">
        <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M12 16l-8-8m0 0l8-8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6">
        <div className="relative w-full aspect-[4/3] bg-accent-blush rounded-2xl overflow-hidden border border-border/50 mb-6">
          <Image
            src={`/images/categories/${category.imageId}.jpg`}
            alt={category.name}
            width={500}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="space-y-3">
          <h1 className="font-serif text-3xl text-text-primary">
            {category.name}
          </h1>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {category.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary pt-2">
            <span>{category.region}</span>
            <span className="text-border">•</span>
            <span>{category.variants.length} variants</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-6">
        <h2 className="font-serif text-xl text-text-primary mb-4">
          Available Forms
        </h2>

        <div className="space-y-3">
          {category.variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/categories/${category.id}/products/${variant.id}`}
              className="block p-4 bg-white border border-border/50 rounded-xl active:opacity-70 transition-opacity"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-serif text-base text-text-primary">
                      {variant.name}
                    </h3>
                    <span className="font-body text-xs text-text-secondary bg-muted rounded px-2 py-1">
                      {variant.type}
                    </span>
                  </div>
                  <p className="font-body text-xs text-text-secondary mb-2 line-clamp-2">
                    {variant.description}
                  </p>
                  <p className="font-body text-xs text-text-secondary">
                    Made by {variant.maker.name}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  className="text-text-secondary flex-shrink-0 mt-1"
                >
                  <path d="M6 12l6-6m0 0L6 0" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="px-4 py-6 mt-4">
        <div className="bg-accent-blush/30 rounded-xl p-4 space-y-2">
          <p className="font-body text-xs uppercase text-text-secondary tracking-wider font-medium">
            Pre-Order Only
          </p>
          <p className="font-body text-sm text-text-primary">
            Each batch is made fresh. Select a variant to place your pre-order and meet the maker.
          </p>
        </div>
      </section>
    </main>
  )
}
