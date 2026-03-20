import { getCategoryById, getProductVariantById, getAllCategories } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
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

  const otherVariants = category.variants.filter(v => v.id !== variant.id)

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-4 flex items-center justify-between">
        <Link href={`/categories/${category.id}`} className="text-text-secondary hover:text-text-primary transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M12 16l-8-8m0 0l8-8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="text-xs text-text-secondary">{category.name}</div>
        <div className="w-5" />
      </header>

      {/* Product Image */}
      <section className="px-4 py-4">
        <div className="relative w-full aspect-square bg-accent-blush rounded-2xl overflow-hidden border border-border/50 mb-6">
          <Image
            src={`/images/products/${variant.id.split('-').slice(0, -1).join('-') || variant.id}.jpg`}
            alt={variant.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Product Info */}
      <section className="px-4 py-4 space-y-4">
        <div>
          <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-1">
            {variant.type}
          </p>
          <h1 className="font-serif text-3xl text-text-primary mb-2">
            {variant.name}
          </h1>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {variant.description}
          </p>
        </div>

        {/* Maker Quick Info */}
        <div className="bg-accent-blush/30 rounded-xl p-4">
          <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-2">Made by</p>
          <p className="font-serif text-base text-text-primary">
            {variant.maker.name}
          </p>
          <p className="font-body text-xs text-text-secondary mt-1">
            {variant.maker.location}
          </p>
        </div>
      </section>

      {/* Pre-Order CTA */}
      <section className="px-4 py-4 sticky bottom-0 z-30 bg-background border-t border-border">
        <PreOrderModal 
          variant={variant}
          category={category}
        />
      </section>

      {/* Maker Full Story */}
      <section className="px-4 py-8 border-t border-border">
        <div className="space-y-6">
          <div className="relative w-full aspect-square bg-accent-blush rounded-2xl overflow-hidden border border-border/50">
            <Image
              src={`/images/portraits/${variant.maker.portraitId}.jpg`}
              alt={variant.maker.name}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-body text-xs text-text-secondary uppercase tracking-wider mb-1">
                Meet the Maker
              </p>
              <h2 className="font-serif text-2xl text-text-primary">
                {variant.maker.name}
              </h2>
              <p className="font-body text-sm text-text-secondary mt-1">
                {variant.maker.role} • {variant.maker.location}
              </p>
            </div>

            <p className="font-body text-sm text-text-secondary leading-relaxed">
              {variant.maker.brief}
            </p>
          </div>
        </div>
      </section>

      {/* Why This Product */}
      <section className="px-4 py-8 border-t border-border">
        <h3 className="font-serif text-xl text-text-primary mb-4">
          Why This Product
        </h3>
        <p className="font-body text-sm text-text-secondary leading-relaxed">
          This {variant.type.toLowerCase()} from {category.name} is created with meticulous care by {variant.maker.name}. Every batch is sourced sustainably, processed traditionally, and verified to meet our standards of quality and purity. This is more than a product — it's a direct connection to the people and land that created it.
        </p>
      </section>

      {/* Other Variants */}
      {otherVariants.length > 0 && (
        <section className="px-4 py-8 border-t border-border">
          <h3 className="font-serif text-xl text-text-primary mb-4">
            More from {category.name}
          </h3>
          <div className="space-y-2">
            {otherVariants.map((v) => (
              <Link
                key={v.id}
                href={`/categories/${category.id}/products/${v.id}`}
                className="block p-3 bg-white border border-border/50 rounded-xl active:opacity-70 transition-opacity"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm text-text-primary">
                      {v.name}
                    </p>
                    <p className="font-body text-xs text-text-secondary">
                      {v.type}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    className="text-text-secondary flex-shrink-0"
                  >
                    <path d="M6 12l6-6m0 0L6 0" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
