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
  const formatChipLabel = (value: string) => value.replace(/\b\w/g, (char) => char.toUpperCase())
  const invNo = String(filteredVariants.length).padStart(3, '0')

  return (
    <main className="min-h-screen bg-surface pb-8">
      <ScrollRestore storageKey={scrollKey} />

      {/* Hero — natural_source_vetiver (scaled) */}
      <section className="relative flex min-h-[min(55vh,560px)] items-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 z-0 bg-surface-variant">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
        </div>
        <div className="relative z-10 max-w-2xl py-16">
          <div className="mb-4">
            <span className="provenance-chip">Provenance: {category.region}</span>
          </div>
          <h1 className="font-headline text-5xl leading-[0.95] tracking-tight text-primary italic md:text-8xl">
            {category.name}
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-on-surface-variant whitespace-pre-line">
            {category.description}
          </p>
          <div className="mt-10">
            <a
              href="#product-family"
              className="inline-block bg-primary px-8 py-4 font-label text-xs tracking-[0.2em] text-on-primary uppercase transition-transform active:scale-95"
            >
              Discover the collection
            </a>
          </div>
        </div>
      </section>

      {/* Sticky wayfinding */}
      <header className="sticky top-20 z-40 border-b border-outline-variant/10 bg-surface/95 backdrop-blur-md md:top-24">
        <div className="stitch-wide flex items-center justify-between py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 16l-8-8m0 0l8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <span className="stitch-label-muted">{category.name}</span>
        </div>
      </header>

      {/* Product family grid — vetiver */}
      <section id="product-family" className="scroll-mt-24 bg-surface py-16 md:px-12 md:py-24">
        <div className="stitch-wide">
          <div className="mb-10 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xs">
              <h2 className="stitch-label mb-4">The product family</h2>
              <p className="font-headline text-2xl italic text-primary">Forms we carry in this source line.</p>
            </div>
            <div className="font-serif text-primary/40 italic">Inventory № {invNo}</div>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-2 overflow-x-auto pb-2 no-scrollbar md:gap-4">
            <span className="stitch-label shrink-0">Filter:</span>
            <div className="flex gap-2">
              {variantTypes.map((variantType) => {
                const isActive = variantType === activeType
                const href = new URLSearchParams()
                if (variantType !== 'all') href.set('type', variantType)
                href.set('sort', activeSort)
                return (
                  <Link
                    key={variantType}
                    href={`/categories/${category.id}${href.toString() ? `?${href.toString()}` : ''}`}
                    className={`shrink-0 border px-4 py-1.5 font-label text-xs tracking-wider uppercase transition-all ${
                      isActive
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low'
                    }`}
                  >
                    {variantType === 'all' ? 'All types' : formatChipLabel(variantType)}
                  </Link>
                )
              })}
            </div>
            <div className="ml-auto flex gap-2">
              <Link
                href={`/categories/${category.id}${activeType === 'all' ? '?sort=price-asc' : `?type=${activeType}&sort=price-asc`}`}
                className={`border px-3 py-1.5 font-body text-[10px] font-medium tracking-wide uppercase ${
                  activeSort === 'price-asc' ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant/30'
                }`}
              >
                Price ↑
              </Link>
              <Link
                href={`/categories/${category.id}${activeType === 'all' ? '?sort=price-desc' : `?type=${activeType}&sort=price-desc`}`}
                className={`border px-3 py-1.5 font-body text-[10px] font-medium tracking-wide uppercase ${
                  activeSort === 'price-desc' ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant/30'
                }`}
              >
                Price ↓
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 md:gap-y-20">
            {filteredVariants.map((variant, idx) => (
              <div
                key={variant.id}
                className={`group cursor-pointer ${idx % 3 === 1 ? 'md:mt-12' : ''}`}
              >
                <ScrollRestoreLink
                  storageKey={scrollKey}
                  href={`/categories/${category.id}/products/${variant.id}`}
                  className="block"
                >
                  <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-surface-container-low transition-colors duration-400 group-hover:bg-surface-container">
                    <div className="flex h-full w-full items-center justify-center bg-surface-variant/60 transition-transform duration-700 group-hover:scale-105">
                      <span className="text-center font-body text-xs text-on-surface-variant">{variant.type}</span>
                    </div>
                  </div>
                </ScrollRestoreLink>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-label text-[11px] uppercase tracking-widest text-primary">{variant.type}</h3>
                    <p className="mt-1 font-headline text-lg text-primary">{variant.name}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-on-surface-variant">{variant.description}</p>
                  </div>
                  <QuickAddButton
                    label={variant.name}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-on-primary transition-colors hover:bg-primary-container"
                  />
                </div>
                <p className="mt-3 font-body text-sm text-primary">CHF {(variant.price ?? 19.99).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story band */}
      <section className="overflow-hidden bg-surface-container-low py-20 md:py-32">
        <div className="stitch-wide grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <div className="absolute -top-8 -left-8 hidden h-64 w-64 border border-outline-variant/15 md:block" />
            <div className="relative z-10 aspect-[3/4] bg-surface-variant">
              <div className="flex h-full items-center justify-center text-on-surface-variant/50">
                <span className="font-body text-xs uppercase tracking-widest">Harvest note</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="stitch-label mb-6">The ritual &amp; provenance</h2>
            <h3 className="mb-8 font-headline text-4xl leading-tight tracking-tight text-primary italic">
              From soil to jar—with room for the full story.
            </h3>
            <div className="max-w-lg space-y-6 font-body leading-relaxed text-on-surface-variant whitespace-pre-line">
              {category.description}
            </div>
            <div className="mt-12 flex flex-wrap gap-12 border-t border-outline-variant/20 pt-12">
              <div>
                <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-primary">Region</span>
                <span className="font-headline text-lg italic text-primary">{category.region}</span>
              </div>
              <div>
                <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-primary">Forms</span>
                <span className="font-headline text-lg italic text-primary">{category.variants.length} variants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stitch-wide py-16 text-center">
        <p className="font-headline text-2xl leading-snug text-primary italic md:text-3xl">
          &ldquo;A modest channel between growers and whoever opens the jar.&rdquo;
        </p>
        <cite className="mt-6 block font-label text-[11px] not-italic tracking-widest text-secondary uppercase">
          — What Anvaya stands for
        </cite>
      </section>
    </main>
  )
}
