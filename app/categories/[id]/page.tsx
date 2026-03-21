import { getCategoryById, getAllCategories } from '@/lib/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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
  const formatChipLabel = (value: string) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase())

  return (
    <main className="min-h-screen bg-background pb-24">
      <ScrollRestore storageKey={scrollKey} />

      {/* Header */}
      <header className="sticky top-20 z-40 border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="content-container flex items-center justify-between py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 16l-8-8m0 0l8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-body text-sm font-medium">Back</span>
          </Link>
          <span className="text-xs uppercase tracking-wider text-text-secondary">{category.name}</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="content-container py-8">
        <div className="detail-shell grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border/30 bg-muted">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <span className="text-sm font-medium text-text-secondary">{category.name}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="detail-title">{category.name}</h1>
            <p className="font-body whitespace-pre-line text-sm leading-relaxed text-text-secondary sm:text-base">
              {category.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 border-t border-border/30 pt-2 text-xs text-text-secondary sm:text-sm">
              <span className="font-body">{category.region}</span>
              <span className="text-border">•</span>
              <span className="font-body">{category.variants.length} variants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="sticky top-[9.25rem] z-30 border-y border-border bg-background/95 py-3 backdrop-blur-sm">
        <div className="content-container">
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
                  {variantType === 'all' ? 'All types' : formatChipLabel(variantType)}
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
        </div>
      </section>

      {/* Products Grid */}
      <section className="content-container py-8">
        <h2 className="mb-4 font-serif text-xl font-semibold text-text-primary">
          Our Forms
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filteredVariants.map((variant) => (
            <div key={variant.id} className="group">
              <ScrollRestoreLink
                storageKey={scrollKey}
                href={`/categories/${category.id}/products/${variant.id}`}
                className="block h-full active:scale-[0.99] transition-transform duration-200"
              >
                <div className="h-full rounded-2xl border border-border/50 bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4">
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
                  <div className="flex min-h-[7rem] flex-col">
                    <p className="font-body text-[11px] text-text-secondary uppercase tracking-wider mb-1 line-clamp-1">
                      {variant.type}
                    </p>
                    <h3 className="font-serif text-sm font-semibold text-text-primary mb-2 line-clamp-1">
                      {variant.name}
                    </h3>
                    <div className="mt-auto flex items-center justify-between border-t border-border/40 pt-2">
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
      <section className="content-container mt-2 py-6">
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
