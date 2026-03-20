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
      {/* Mobile Header */}
      <header className="sticky top-20 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-4 flex items-center justify-between">
        <Link href={`/categories/${category.id}`} className="text-text-secondary hover:text-text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M12 16l-8-8m0 0l8-8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="text-[11px] text-text-secondary uppercase tracking-wider">{category.name}</div>
        <CartCountBadge />
      </header>

      {/* Two Column Layout - Plant Explore Style */}
      <div className="md:flex md:gap-8 md:px-8 md:py-8">
        {/* Left Column - Specs */}
        <div className="md:flex-shrink-0 md:w-80 px-4 py-5 md:py-0">
          {/* Product Title */}
          <div className="mb-6">
            <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-2">
              {variant.type}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary mb-3">
              {variant.name}
            </h1>
            <p className="font-body text-sm text-text-secondary">
              {category.name}
            </p>
          </div>

          {/* Specs - Label Value Pairs */}
          <div className="space-y-5 mb-6">
            <div>
              <p className="font-body text-xs text-text-secondary uppercase tracking-wider font-semibold mb-2">
                How to Use
              </p>
              <p className="font-body text-sm text-text-primary leading-relaxed">
                {variant.description}
              </p>
            </div>

            <div>
              <p className="font-body text-xs text-text-secondary uppercase tracking-wider font-semibold mb-2">
                Storage
              </p>
              <p className="font-body text-sm text-text-primary leading-relaxed">
                Keep in a cool, dry place away from direct sunlight.
              </p>
            </div>

            <div>
              <p className="font-body text-xs text-text-secondary uppercase tracking-wider font-semibold mb-2">
                Best For
              </p>
              <p className="font-body text-sm text-text-primary leading-relaxed">
                {variant.type === 'Powder' ? 'Face masks, beauty rituals, culinary use.' : variant.type === 'Sachet' ? 'Refreshing water, fragrance, home rituals.' : variant.type === 'Preserve' ? 'Culinary, wellness, gifting.' : 'Daily rituals and wellness practices.'}
              </p>
            </div>
          </div>

          {/* Price & CTA - Anchored at bottom on desktop */}
          <div className="md:fixed md:bottom-8 md:left-8 md:w-80">
            <div className="mb-4">
              <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-2">
                Price
              </p>
              <p className="font-serif text-2xl font-semibold text-text-primary">
                CHF {variant.price?.toFixed(2) || 'TBD'}
              </p>
            </div>
            <PreOrderModal variant={variant} category={category} />
          </div>
        </div>

        {/* Right Column - Image (Mobile: Below Specs) */}
        <div className="px-4 py-5 md:py-0 md:flex-1">
          <div className="relative w-full aspect-square bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
              <span className="text-text-secondary text-sm font-medium">{variant.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Full Width Below */}
      <div className="px-4 md:px-8 pb-12">
        <div className="bg-white rounded-2xl p-5 md:p-8 border border-border/40 shadow-sm max-w-4xl">
          <h2 className="font-serif text-xl font-semibold text-text-primary mb-3">
            About
          </h2>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {variant.description} Each batch is handcrafted with care, honoring traditional methods and natural ingredients. This is more than a product—it's a direct connection to the artisans who created it.
          </p>
        </div>
      </div>
    </main>
  )
}
