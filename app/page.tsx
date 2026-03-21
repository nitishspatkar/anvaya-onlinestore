import Link from 'next/link'
import { Sparkles, Zap } from 'lucide-react'
import { getAllCategories, getCategoryById, getFeaturedProducts } from '@/lib/products'
import { QuickAddButton } from '@/components/quick-add-button'
import { ScrollRestore } from '@/components/scroll-restore'
import { ScrollRestoreLink } from '@/components/scroll-restore-link'

export const metadata = {
  title: 'Anvaya — Botanical essences from India',
  description:
    'A small store for roots, oils, and botanicals we trust—offered in the hope they find a quiet place in your home.',
}

function categoryIdFromHref(href: string): string | null {
  const m = href.match(/^\/categories\/([^/]+)/)
  return m ? m[1] : null
}

function regionHint(href: string): string {
  const id = categoryIdFromHref(href)
  if (!id) return 'India'
  const cat = getCategoryById(id)
  if (!cat?.region) return 'India'
  const first = cat.region.split(',')[0]?.trim() ?? 'India'
  return first.length > 18 ? `${first.slice(0, 16)}…` : first
}

export default async function HomePage() {
  const categories = getAllCategories()
  const featured = getFeaturedProducts()
  const standalone = featured.slice(0, 3)
  const recipeA = featured[0]
  const recipeB = featured[1] ?? featured[0]
  const firstCategoryId = categories[0]?.id ?? '#'

  return (
    <main className="min-h-screen bg-surface pb-8">
      <ScrollRestore storageKey="home-scroll-y" />

      {/* Hero — the_collection_quick_access */}
      <section className="stitch-container mb-12">
        <div className="mb-8 flex flex-col items-end gap-6 md:flex-row">
          <div className="flex-1">
            <span className="stitch-label mb-2 block">The Digital Curator</span>
            <h1 className="font-headline text-4xl leading-tight tracking-tight text-primary md:text-7xl">
              The Origin <br />
              <span className="font-normal italic">Collection</span>
            </h1>
          </div>
        </div>

        <div className="-mx-6 mb-8 overflow-x-auto px-6 no-scrollbar">
          <div className="flex gap-2 whitespace-nowrap pb-2">
            <Link
              href="/"
              className="bg-primary px-5 py-2.5 font-body text-[10px] font-bold tracking-[0.2em] text-on-primary uppercase"
            >
              All Sources
            </Link>
            {categories.map((c) => (
              <ScrollRestoreLink
                key={c.id}
                storageKey="home-scroll-y"
                href={`/categories/${c.id}`}
                className="bg-surface-container-high px-5 py-2.5 font-body text-[10px] font-medium tracking-[0.2em] text-on-surface uppercase transition-colors hover:bg-outline-variant/30"
              >
                {c.name}
              </ScrollRestoreLink>
            ))}
          </div>
        </div>

        <div className="stitch-ghost-border relative flex flex-col items-center gap-6 overflow-hidden bg-surface-container-low p-6 md:flex-row md:justify-between md:p-8">
          <div className="relative z-10">
            <h2 className="mb-1 font-headline text-xl text-primary">Pre-Launch Access</h2>
            <p className="max-w-sm text-xs text-on-surface-variant">
              Secure your position in the next harvest cycle—we&apos;ll reach out quietly when your lot is ready.
            </p>
          </div>
          <ScrollRestoreLink
            storageKey="home-scroll-y"
            href={`/categories/${firstCategoryId}`}
            className="relative z-10 w-full bg-primary px-8 py-3.5 text-center font-body text-[10px] font-bold tracking-[0.2em] text-on-primary uppercase transition-all hover:bg-primary-container md:w-auto"
          >
            Register for reservation
          </ScrollRestoreLink>
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-tertiary-container/10 blur-3xl" />
        </div>
      </section>

      {/* Reused copy — what we stand for */}
      <section className="border-y border-outline-variant/10 bg-surface-container-low py-12">
        <div className="stitch-container space-y-6">
          <p className="font-headline text-lg leading-relaxed text-primary md:text-xl">
            This is a small store for roots, oils, and botanicals we trust—offered in the hope they find a quiet place in
            your home.
          </p>
          <div className="h-px w-full bg-outline-variant/20" />
          <div>
            <h2 className="font-headline text-xl text-primary md:text-2xl">What Anvaya stands for</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-on-surface-variant">
              <p>
                <span className="font-medium text-on-surface">Anvaya</span> means interconnectedness in Sanskrit. We are
                not claiming to change the world—only to remember that soil, weather, hands, and whoever opens a jar belong
                to the same story.
              </p>
              <p>
                We try to bring modest channels between small growers, craftspeople, and anyone who cares where things come
                from. When we fall short, we hope you will tell us. When something is good, it is because of them—not us.
              </p>
              <p>We prefer plain words to loud ones: fair terms where we can, clear information, and no promise we cannot keep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated picks — customer favourites (data), vetiver card rhythm */}
      <section className="stitch-container mb-16 mt-12">
        <div className="mb-6 flex items-baseline justify-between border-b border-outline-variant/20 pb-2">
          <h3 className="font-headline text-xl italic text-primary">Customer favourites</h3>
          <span className="stitch-label-muted">{String(featured.length).padStart(2, '0')} picks</span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <article key={product.id} className="group">
              <ScrollRestoreLink storageKey="home-scroll-y" href={product.href} className="block">
                <div className="relative mb-3 aspect-[4/5] overflow-hidden bg-surface-container-low transition-colors duration-400 group-hover:bg-surface-container">
                  <div className="flex h-full w-full items-center justify-center bg-surface-variant/80">
                    <span className="px-2 text-center font-body text-[10px] uppercase tracking-wider text-on-surface-variant">
                      {product.type}
                    </span>
                  </div>
                </div>
              </ScrollRestoreLink>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-label text-[11px] uppercase tracking-widest text-primary">{product.name}</h4>
                  <p className="mt-1 line-clamp-2 text-sm text-on-surface-variant">{product.description}</p>
                </div>
                <QuickAddButton
                  label={product.name}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-on-primary transition-colors hover:bg-primary-container"
                />
              </div>
              <p className="mt-2 font-body text-sm text-primary">CHF {product.price.toFixed(2)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Source families */}
      <section className="stitch-container mb-16">
        <div className="mb-6 flex items-baseline justify-between border-b border-outline-variant/20 pb-2">
          <h3 className="font-headline text-xl italic text-primary">The source families</h3>
          <span className="stitch-label-muted">
            {String(categories.length).padStart(2, '0')} pillars
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <ScrollRestoreLink
              key={category.id}
              storageKey="home-scroll-y"
              href={`/categories/${category.id}`}
              className="group cursor-pointer"
            >
              <div className="relative mb-3 aspect-square overflow-hidden bg-surface-variant">
                <div className="flex h-full w-full items-center justify-center transition-all duration-700 group-hover:scale-105">
                  <span className="text-center font-body text-xs text-on-surface-variant">{category.name}</span>
                </div>
                <div className="absolute top-2 right-2 bg-primary/80 px-2 py-0.5 font-body text-[8px] font-medium tracking-widest text-on-primary uppercase backdrop-blur-sm">
                  {String(category.variants.length).padStart(2, '0')}
                </div>
              </div>
              <h4 className="font-headline text-sm leading-tight text-primary">{category.name}</h4>
              <p className="mt-1 line-clamp-1 text-[10px] text-on-surface-variant">{category.region}</p>
            </ScrollRestoreLink>
          ))}
        </div>
      </section>

      {/* Standalone essences */}
      <section className="border-y border-outline-variant/10 bg-surface-container-low py-12">
        <div className="stitch-container">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h3 className="mb-2 font-headline text-2xl text-primary">Standalone essences</h3>
              <p className="text-sm text-on-surface-variant">Single-origin botanicals that command presence.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {standalone.map((p) => (
              <div key={p.id} className="group bg-surface stitch-ghost-border">
                <div className="aspect-[4/3] overflow-hidden bg-surface-variant">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-on-surface-variant">{p.type}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h5 className="font-headline text-base text-primary">{p.name}</h5>
                    <span className="bg-tertiary-container/10 px-1.5 py-0.5 font-body text-[9px] text-tertiary">
                      {regionHint(p.href)}
                    </span>
                  </div>
                  <p className="mb-4 text-[10px] tracking-wide text-on-surface-variant uppercase">{p.type}</p>
                  <ScrollRestoreLink
                    storageKey="home-scroll-y"
                    href={p.href}
                    className="block w-full bg-primary py-2.5 text-center font-body text-[10px] font-bold tracking-[0.2em] text-on-primary uppercase transition-colors hover:bg-primary-container"
                  >
                    Reserve unit
                  </ScrollRestoreLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anvaya recipes */}
      <section className="stitch-container mb-16 mt-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <span className="stitch-label mb-2 block">The Alchemy</span>
            <h3 className="mb-4 font-headline text-3xl text-primary">Anvaya recipes</h3>
            <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
              Revived from family manuscripts and regional traditions—modest blends that honour more than one source.
            </p>
            <div className="space-y-3">
              <ScrollRestoreLink
                storageKey="home-scroll-y"
                href={recipeA?.href ?? '/'}
                className="group stitch-ghost-border flex cursor-pointer items-center gap-4 bg-surface-container-low p-3 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary-container text-on-primary-container">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h6 className="font-headline text-base text-primary">The Ubtan mask</h6>
                  <p className="text-[10px] text-on-surface-variant">Herbal blend • {recipeA?.name ?? 'Featured pick'}</p>
                </div>
                <span className="shrink-0 font-body text-[9px] font-bold tracking-widest text-secondary uppercase group-hover:underline">
                  Reserve
                </span>
              </ScrollRestoreLink>
              <ScrollRestoreLink
                storageKey="home-scroll-y"
                href={recipeB?.href ?? '/'}
                className="stitch-ghost-border flex cursor-pointer items-center gap-4 bg-surface-container-low p-3 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary-container text-on-primary-container">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h6 className="font-headline text-base text-primary">Golden mix</h6>
                  <p className="text-[10px] text-on-surface-variant">Therapeutic turmeric • {recipeB?.name ?? 'Featured pick'}</p>
                </div>
                <span className="shrink-0 font-body text-[9px] font-bold tracking-widest text-secondary uppercase">Reserve</span>
              </ScrollRestoreLink>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/8] overflow-hidden bg-surface-variant">
              <div className="flex h-full w-full items-center justify-center text-on-surface-variant/60">
                <span className="font-headline text-sm italic">Seasonal blend imagery</span>
              </div>
            </div>
            <div className="stitch-ghost-border absolute -bottom-4 -left-4 hidden max-w-[200px] bg-surface p-4 shadow-lg md:block">
              <p className="font-headline text-[10px] leading-tight italic text-primary">
                &ldquo;Measured by the season&apos;s potency, never a fixed formula.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh on-demand */}
      <section className="stitch-container mb-16">
        <div className="relative overflow-hidden bg-primary p-10 text-on-primary">
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-on-primary-container/20 px-2.5 py-0.5">
                <span className="h-1 w-1 animate-pulse rounded-full bg-on-primary-container" />
                <span className="text-[8px] tracking-widest uppercase">Harvesting now</span>
              </div>
              <h3 className="mb-4 font-headline text-3xl leading-tight">Fresh on-demand</h3>
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-on-primary-container">
                Prepared upon order and shipped with care. We&apos;ll share real cut-off windows as soon as operations are
                live—this block is the honest placeholder.
              </p>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <span className="mb-1 block text-[8px] tracking-widest text-on-primary-container uppercase">Signature</span>
                  <h6 className="font-headline text-lg">Ginger–tulsi</h6>
                </div>
                <div>
                  <span className="mb-1 block text-[8px] tracking-widest text-on-primary-container uppercase">Small batch</span>
                  <h6 className="font-headline text-lg">Bilona ghee</h6>
                </div>
              </div>
              <button
                type="button"
                className="bg-surface px-8 py-3 font-body text-[10px] font-bold tracking-[0.2em] text-primary uppercase"
              >
                Request fresh batch
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <div className="relative h-64 w-48 overflow-hidden border border-white/20">
                <div className="flex h-full w-full items-center justify-center bg-surface-variant/30 grayscale">
                  <span className="text-[10px] text-on-primary-container">Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the circle */}
      <section className="stitch-container max-w-2xl py-12 text-center">
        <h4 className="mb-3 font-headline text-2xl text-primary">Join the circle</h4>
        <p className="mb-8 text-sm text-on-surface-variant">
          Invitations to quiet harvest notes and seasonal provenance—no loud campaigns.
        </p>
        <form className="flex flex-col gap-2 md:flex-row">
          <input
            className="flex-1 border border-outline-variant/20 bg-surface-container-low px-4 py-3 text-sm placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-0"
            placeholder="Your electronic address"
            type="email"
            readOnly
            aria-label="Email (coming soon)"
          />
          <button
            type="button"
            className="bg-primary px-8 py-3 font-body text-[10px] font-bold tracking-[0.2em] text-on-primary uppercase"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  )
}
