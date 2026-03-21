import { getCategoryById, getProductVariantById, getAllCategories } from '@/lib/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PreOrderModal } from '@/components/preorder-modal'

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
    <main className="min-h-screen bg-surface pb-12">
      <header className="sticky top-20 z-40 border-b border-outline-variant/10 bg-surface/95 backdrop-blur-md md:top-24">
        <div className="stitch-wide flex items-center justify-between py-4">
          <Link
            href={`/categories/${category.id}`}
            className="text-on-surface-variant transition-colors hover:text-primary"
            aria-label="Back to category"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M12 16l-8-8m0 0l8-8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span className="stitch-label-muted">{category.name}</span>
          <span className="w-5" aria-hidden />
        </div>
      </header>

      {/* Hero editorial */}
      <section className="relative min-h-[min(50vh,480px)] px-6 md:px-12">
        <div className="absolute inset-0 bg-surface-variant">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4">
              <span className="provenance-chip">Provenance: {variant.maker.location}</span>
            </div>
            <p className="stitch-label mb-3">{variant.type}</p>
            <h1 className="font-headline text-5xl leading-[0.95] tracking-tight text-primary italic md:text-7xl">
              {variant.name}
            </h1>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-on-surface-variant">
              {variant.description}
            </p>
          </div>
          <div className="aspect-[4/3] bg-surface-container-low lg:mb-0">
            <div className="flex h-full w-full items-center justify-center bg-surface-variant/50">
              <span className="text-sm text-on-surface-variant">{variant.name}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="stitch-wide py-12 lg:grid lg:grid-cols-[1fr_min(340px,38%)] lg:items-start lg:gap-12">
        <div className="min-w-0 space-y-10">
          <section>
            <h2 className="stitch-label mb-4">Artifact details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-surface-container-low p-5">
                <p className="stitch-label mb-2">How to use</p>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">{variant.description}</p>
              </div>
              <div className="bg-surface-container-low p-5">
                <p className="stitch-label mb-2">Storage</p>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Keep in a cool, dry place away from direct sunlight.
                </p>
              </div>
              <div className="bg-surface-container-low p-5 sm:col-span-2">
                <p className="stitch-label mb-2">Best for</p>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
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
          </section>

          <section className="bg-surface-container-low p-6 md:p-8">
            <h2 className="mb-4 font-headline text-2xl text-primary">About this form</h2>
            <p className="font-body text-sm leading-relaxed text-on-surface-variant">
              {variant.description} Each batch honours traditional methods and natural ingredients—a direct connection to
              the people who made it.
            </p>
          </section>
        </div>

        <aside className="mt-10 lg:sticky lg:top-28 lg:mt-0 lg:self-start">
          <div className="bg-surface-container-low p-6 stitch-ghost-border">
            <p className="stitch-label mb-1">Price</p>
            <p className="font-headline text-3xl text-primary">CHF {variant.price?.toFixed(2) || 'TBD'}</p>
            <p className="mt-2 text-xs text-on-surface-variant">{category.name}</p>
            <div className="mt-6">
              <PreOrderModal variant={variant} category={category} />
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
