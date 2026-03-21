import { getCategoryById, getProductVariantById, getAllCategories } from '@/lib/products'
import { resolveProductPdp } from '@/lib/product-pdp'
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
  const paramsList: Array<{ id: string; productId: string }> = []

  categories.forEach((category) => {
    category.variants.forEach((variant) => {
      paramsList.push({
        id: category.id,
        productId: variant.id,
      })
    })
  })

  return paramsList
}

function LocationIcon(props: { className?: string }) {
  return (
    <svg className={props.className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id, productId } = await params
  const category = getCategoryById(id)
  const variant = getProductVariantById(id, productId)

  if (!category || !variant) {
    notFound()
  }

  const pdp = resolveProductPdp(variant, category)
  const priceLabel = variant.price != null ? `CHF ${variant.price.toFixed(2)}` : 'Price TBD'

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

      {/* Hero: mobile = stacked editorial; lg = Stitch split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[min(88vh,900px)]">
        <div className="relative min-h-[min(52vh,520px)] overflow-hidden bg-surface-container-low lg:min-h-0 lg:h-full">
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-tr from-surface-container-high/30 to-transparent" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pdp.heroImage}
            alt={variant.name}
            className="absolute inset-0 z-0 h-full w-full object-cover mix-blend-multiply opacity-90 scale-105"
          />
          {pdp.heroOverlay ? (
            <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-10 sm:left-10 sm:right-auto lg:bottom-12 lg:left-12">
              <div className="max-w-xs bg-surface-container-lowest/80 p-6 shadow-sm backdrop-blur-sm">
                <p className="mb-2 font-headline text-sm italic text-primary">{pdp.heroOverlay.title}</p>
                <p className="text-xs leading-relaxed text-on-surface-variant">{pdp.heroOverlay.body}</p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col justify-center bg-surface px-6 py-10 sm:px-10 lg:px-16 xl:px-24">
          <nav className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest text-on-surface-variant">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href={`/categories/${category.id}`} className="transition-colors hover:text-primary">
              {category.name}
            </Link>
            <span aria-hidden>/</span>
            <span className="font-bold text-primary">{variant.type}</span>
          </nav>

          <h1 className="mb-6 font-headline text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            {pdp.headlinePrimary}
            <br />
            <span className="font-light italic text-secondary">{pdp.headlineAccent}</span>
          </h1>

          <div className="mb-10 flex flex-wrap items-baseline gap-4">
            <span className="text-2xl font-light text-on-surface">{priceLabel}</span>
            {pdp.weightLabel ? (
              <span className="font-label text-sm uppercase tracking-wider text-on-surface-variant">
                {pdp.weightLabel}
              </span>
            ) : (
              <span className="font-label text-sm uppercase tracking-wider text-on-surface-variant">{variant.type}</span>
            )}
          </div>

          <p className="mb-12 max-w-md font-body text-base leading-relaxed text-on-surface-variant lg:text-lg">
            {pdp.longDescription}
          </p>

          <div className="mb-10 flex flex-col space-y-4">
            <PreOrderModal
              variant={variant}
              category={category}
              triggerClassName="group flex w-full items-center justify-center gap-4 bg-primary py-5 px-10 font-body text-sm font-medium uppercase tracking-[0.2em] text-on-primary transition-all duration-500 hover:bg-primary-container active:scale-[0.99] sm:px-12"
              triggerLabel={
                <>
                  <span>Reserve for launch</span>
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              }
            />
            <p className="text-center text-[10px] uppercase tracking-widest text-on-surface-variant">
              No payment today—we&apos;ll confirm timelines before fulfilment.
            </p>
          </div>

          <div className="flex items-start gap-4 border border-outline-variant/15 bg-tertiary-container/10 p-6">
            <LocationIcon className="mt-0.5 shrink-0 text-on-tertiary-container" />
            <div>
              <h2 className="mb-1 text-xs font-bold uppercase tracking-widest text-on-tertiary-container">
                {pdp.provenanceChipTitle}
              </h2>
              <p className="text-sm leading-relaxed text-on-surface-variant">{pdp.provenanceChipBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Botanical + ritual */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              <h2 className="mb-8 font-headline text-xs uppercase tracking-[0.3em] text-secondary">Botanical composition</h2>
              <ul className="space-y-6">
                {pdp.ingredients.map((item) => (
                  <li key={item.title} className="border-b border-outline-variant/20 pb-4">
                    <span className="block font-headline text-lg text-primary">{item.title}</span>
                    <span className="text-xs uppercase tracking-wider text-on-surface-variant">{item.subtitle}</span>
                  </li>
                ))}
              </ul>
            </div>
            {pdp.botanicalImage ? (
              <div className="mt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pdp.botanicalImage}
                  alt=""
                  className="aspect-square w-full object-cover opacity-80 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ) : null}
          </div>

          <div className="relative overflow-hidden bg-surface-container-low p-8 sm:p-12 lg:col-span-8 lg:p-16 xl:p-24">
            <div className="relative z-10">
              <h2 className="mb-10 font-headline text-3xl text-primary sm:mb-12 sm:text-4xl lg:text-5xl">The ritual</h2>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                {pdp.ritualSteps.map((step, i) => (
                  <div key={step.title} className="space-y-4">
                    <span className="font-headline text-2xl italic text-secondary">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provenance band */}
      <section className="overflow-hidden bg-primary py-20 text-on-primary sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full border border-on-primary/10 sm:-left-12 sm:-top-12 lg:h-64 lg:w-64" />
            {pdp.provenanceImage ? (
              <div className="relative z-10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pdp.provenanceImage}
                  alt={`${category.name} provenance`}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            ) : (
              <div className="relative z-10 aspect-[4/5] w-full bg-primary-container/40" />
            )}
          </div>
          <div>
            <p className="mb-8 font-headline text-xs uppercase tracking-[0.4em] text-on-primary-container">The provenance</p>
            <h2 className="mb-8 font-headline text-4xl leading-tight lg:text-5xl">
              {pdp.provenanceHeading}
              <br />
              <span className="font-light italic">{pdp.provenanceSubheading}</span>
            </h2>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-on-primary-container">{pdp.provenanceBody}</p>
            <Link
              href={`/categories/${category.id}`}
              className="inline-flex items-center gap-4 border-b border-on-primary pb-1 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-secondary"
            >
              <span>Back to {category.name}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <path d="M7 17L17 7M7 7h10v10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
