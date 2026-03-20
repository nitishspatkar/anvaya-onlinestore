import { getCategoryById, getProductVariantById, getAllCategories } from '@/lib/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PreOrderModal } from '@/components/preorder-modal'
import { CartCountBadge } from '@/components/cart-count-badge'

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
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-20 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="content-container flex items-center justify-between py-4">
          <Link href={`/categories/${category.id}`} className="text-text-secondary hover:text-text-primary transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M12 16l-8-8m0 0l8-8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="text-[11px] uppercase tracking-wider text-text-secondary">{category.name}</div>
          <CartCountBadge />
        </div>
      </header>

      <div className="content-container py-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-start">
          {/* Content Column */}
          <section className="space-y-6">
            <div>
              <p className="detail-meta mb-2">{variant.type}</p>
              <h1 className="detail-title">{variant.name}</h1>
              <p className="mt-1 font-body text-sm text-text-secondary">{category.name}</p>
            </div>

            {/* Mobile-first: image directly after title for coherent flow */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm lg:hidden">
              <div className="aspect-square w-full bg-gradient-to-br from-muted/30 to-muted/10">
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm font-medium text-text-secondary">{variant.name}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <div className="detail-shell rounded-xl p-4">
                <p className="mb-1 text-[11px] uppercase tracking-wider text-text-secondary">How to Use</p>
                <p className="font-body text-sm leading-relaxed text-text-primary">{variant.description}</p>
              </div>
              <div className="detail-shell rounded-xl p-4">
                <p className="mb-1 text-[11px] uppercase tracking-wider text-text-secondary">Storage</p>
                <p className="font-body text-sm leading-relaxed text-text-primary">
                  Keep in a cool, dry place away from direct sunlight.
                </p>
              </div>
              <div className="detail-shell rounded-xl p-4 sm:col-span-2 xl:col-span-1">
                <p className="mb-1 text-[11px] uppercase tracking-wider text-text-secondary">Best For</p>
                <p className="font-body text-sm leading-relaxed text-text-primary">
                  {variant.type === 'Powder'
                    ? 'Face masks, beauty rituals, and culinary use.'
                    : variant.type === 'Sachet'
                      ? 'Cooling water, fragrance, and home rituals.'
                      : variant.type === 'Preserve'
                        ? 'Culinary wellness and premium gifting.'
                        : 'Daily rituals and wellness practices.'}
                </p>
              </div>
            </div>

            <div className="detail-shell p-5">
              <h2 className="mb-3 font-serif text-xl font-semibold text-text-primary">About</h2>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {variant.description} Each batch is handcrafted with care, honoring traditional methods and natural ingredients. This is more than a product - it is a direct connection to the artisans who created it.
              </p>
            </div>

            {/* Mobile purchase block */}
            <div className="detail-shell p-5 lg:hidden">
              <p className="mb-2 font-body text-xs uppercase tracking-wider text-text-secondary">Price</p>
              <p className="mb-4 font-serif text-2xl font-semibold text-text-primary">
                CHF {variant.price?.toFixed(2) || 'TBD'}
              </p>
              <PreOrderModal variant={variant} category={category} />
            </div>
          </section>

          {/* Desktop/Tablet purchase column */}
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <div className="detail-shell p-5">
              <div className="relative mb-5 w-full overflow-hidden rounded-xl border border-border/40 bg-muted">
                <div className="aspect-square w-full bg-gradient-to-br from-muted/30 to-muted/10">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm font-medium text-text-secondary">{variant.name}</span>
                  </div>
                </div>
              </div>
              <p className="mb-2 font-body text-xs uppercase tracking-wider text-text-secondary">Price</p>
              <p className="mb-4 font-serif text-2xl font-semibold text-text-primary">
                CHF {variant.price?.toFixed(2) || 'TBD'}
              </p>
              <PreOrderModal variant={variant} category={category} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
