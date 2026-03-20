import { getCategoryById, getAllCategories } from '@/lib/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CartCountBadge } from '@/components/cart-count-badge'
import { QuickAddButton } from '@/components/quick-add-button'
import { ScrollRestore } from '@/components/scroll-restore'
import { ScrollRestoreLink } from '@/components/scroll-restore-link'

interface CategoryPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ type?: string; sort?: string }>
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

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { id } = await params
  const { type, sort } = await searchParams
  const category = getCategoryById(id)

  if (!category) {
    notFound()
  }

  const variantTypes = ['all', ...new Set(category.variants.map((variant) => variant.type.toLowerCase()))]
  const activeType = variantTypes.includes(type ?? '') ? (type as string) : 'all'
  const activeSort = sort === 'price-asc' || sort === 'price-desc' ? sort : 'price-asc'

  const filteredVariants = category.variants
    .filter((variant) => (activeType === 'all' ? true : variant.type.toLowerCase() === activeType))
    .sort((a, b) => {
      const priceA = a.price ?? 19.99
      const priceB = b.price ?? 19.99
      return activeSort === 'price-desc' ? priceB - priceA : priceA - priceB
    })

  const scrollKey = `category-${category.id}-scroll-y`

  return (
    <main className="min-h-screen bg-background pb-24">
      <ScrollRestore storageKey={scrollKey} />

      {/* Header */}
      <header className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-border px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 16l-8-8m0 0l8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-body text-sm font-medium">Back</span>
        </Link>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <CartCountBadge />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6">
        {/* Image Placeholder */}
        <div className="relative w-full aspect-[4/3] bg-muted rounded-2xl overflow-hidden border border-border/30 shadow-md mb-6">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <span className="text-text-secondary text-sm font-medium">{category.name}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-serif text-3xl font-semibold text-text-primary">
            {category.name}
          </h1>
          <p className="font-body text-sm text-text-secondary leading-relaxed max-w-lg">
            {category.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary pt-2 border-t border-border/30">
            <span className="font-body">{category.region}</span>
            <span className="text-border">•</span>
            <span className="font-body">{category.variants.length} variants</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="sticky top-[9.25rem] z-30 border-y border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
        <div className="mb-2 flex gap-2 overflow-x-auto">
          {variantTypes.map((variantType) => {
            const isActive = variantType === activeType
            const href = new URLSearchParams()
            if (variantType !== 'all') href.set('type', variantType)
            href.set('sort', activeSort)
            return (
              <Link
                key={variantType}
                href={`/categories/${category.id}${href.toString() ? `?${href.toString()}` : ''}`}
                className={`rounded-full border px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-white text-text-secondary hover:text-text-primary'
                }`}
              >
                {variantType === 'all' ? 'All types' : variantType}
              </Link>
            )
          })}
        </div>
        <div className="flex gap-2">
          <Link
            href={`/categories/${category.id}${activeType === 'all' ? '?sort=price-asc' : `?type=${activeType}&sort=price-asc`}`}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors ${
              activeSort === 'price-asc'
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-white text-text-secondary'
            }`}
          >
            Price low-high
          </Link>
          <Link
            href={`/categories/${category.id}${activeType === 'all' ? '?sort=price-desc' : `?type=${activeType}&sort=price-desc`}`}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors ${
              activeSort === 'price-desc'
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-white text-text-secondary'
            }`}
          >
            Price high-low
          </Link>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-6">
        <h2 className="font-serif text-xl font-semibold text-text-primary mb-4">
          Our Forms
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {filteredVariants.map((variant) => (
            <div key={variant.id} className="group">
              <ScrollRestoreLink
                storageKey={scrollKey}
                href={`/categories/${category.id}/products/${variant.id}`}
                className="block active:scale-[0.99] transition-transform duration-200"
              >
                <div className="bg-white rounded-2xl p-3 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  {/* Image/Video Placeholder */}
                  <div className="relative w-full aspect-square bg-muted/40 rounded-xl overflow-hidden flex-shrink-0 mb-2">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/20">
                      <div className="text-center">
                        <div className="text-3xl mb-2">✨</div>
                        <span className="text-text-secondary text-xs font-medium px-2">{variant.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <p className="font-body text-[11px] text-text-secondary uppercase tracking-wider mb-1 line-clamp-1">
                      {variant.type}
                    </p>
                    <h3 className="font-serif text-sm font-semibold text-text-primary mb-2 line-clamp-1">
                      {variant.name}
                    </h3>
                    <div className="flex items-center justify-between pt-2 border-t border-border/40">
                      <div>
                        <p className="font-body text-[10px] text-text-secondary uppercase tracking-wider mb-1">Price</p>
                        <p className="font-serif text-base font-semibold text-text-primary">
                          CHF {(variant.price ?? 19.99).toFixed(2)}
                        </p>
                      </div>
                      <QuickAddButton label={variant.name} />
                    </div>
                  </div>
                </div>
              </ScrollRestoreLink>
            </div>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="px-4 py-6 mt-2">
        <div className="bg-gradient-to-br from-primary/10 to-accent-warm/5 rounded-2xl p-5 space-y-3 border border-primary/10">
          <p className="font-body text-xs uppercase font-bold text-primary tracking-wider">
            Pre-Order Only
          </p>
          <p className="font-body text-sm text-text-primary leading-relaxed">
            Select a form to explore how it's used and place your pre-order.
          </p>
        </div>
      </section>
    </main>
  )
}
