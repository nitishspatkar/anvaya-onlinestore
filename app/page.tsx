import Link from 'next/link'
import { getAllCategories, getFeaturedProducts } from '@/lib/products'
import { QuickAddButton } from '@/components/quick-add-button'
import { ScrollRestore } from '@/components/scroll-restore'
import { ScrollRestoreLink } from '@/components/scroll-restore-link'

export const metadata = {
  title: 'Anvaya — Botanical Essences from India',
  description:
    'A small store for roots, oils, and botanicals from India. We try to work fairly and clearly with growers and small makers.',
}

interface HomePageProps {
  searchParams: Promise<{ filter?: string }>
}

const featuredFilters = [
  { id: 'all', label: 'All' },
  { id: 'care', label: 'Skincare' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'gift', label: 'Gifting' },
]

export default async function HomePage({ searchParams }: HomePageProps) {
  const { filter } = await searchParams
  const categories = getAllCategories()
  const featured = getFeaturedProducts()
  const activeFilter = featuredFilters.some((item) => item.id === filter) ? filter : 'all'
  const filteredFeatured = featured.filter((item) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'care') return /face|care|soap|powder/i.test(`${item.type} ${item.name}`)
    if (activeFilter === 'wellness') return /health|shot|water|oil|tea/i.test(`${item.type} ${item.name}`)
    return /gift|kit|set|preserve|marmalade/i.test(`${item.type} ${item.name}`)
  })

  return (
    <main className="min-h-screen bg-background pb-24">
      <ScrollRestore storageKey="home-scroll-y" />

      {/* Opening & what we stand for */}
      <section className="content-container py-8">
        <div className="detail-shell space-y-6 p-5 sm:p-8">
          <p className="font-serif text-lg leading-relaxed text-text-primary sm:text-xl md:max-w-3xl">
            This is a small store for roots, oils, and botanicals we trust—offered in the hope they find a quiet place in your home.
          </p>
          <div className="border-t border-border/40 pt-6">
            <h2 className="font-serif text-xl font-semibold text-text-primary sm:text-2xl">
              What Anvaya stands for
            </h2>
            <div className="mt-4 space-y-4">
              <p className="font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                <span className="font-medium text-text-primary">Anvaya</span> means interconnectedness in Sanskrit. We are not claiming to change the world—only to remember that soil, weather, hands, and whoever opens a jar belong to the same story.
              </p>
              <p className="font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                We try to bring modest channels between small growers, craftspeople, and anyone who cares where things come from. When we fall short, we hope you will tell us. When something is good, it is because of them—not us.
              </p>
              <p className="font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                We prefer plain words to loud ones: fair terms where we can, clear information, and no promise we cannot keep.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-y border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto sm:px-2">
          {featuredFilters.map((item) => {
            const isActive = item.id === activeFilter
            return (
              <Link
                key={item.id}
                href={item.id === 'all' ? '/' : `/?filter=${item.id}`}
                className={`rounded-full border px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-white text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </section>

      {/* Best Selling & Most Loved Products */}
      <section className="content-container py-8">
        <h3 className="font-serif text-xl font-semibold text-text-primary mb-4">
          Customer Favourites
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filteredFeatured.map((product) => (
            <article
              key={product.id}
              className="group flex h-full flex-col rounded-2xl border border-border/60 bg-white p-3 shadow-sm sm:p-4"
            >
              <ScrollRestoreLink
                storageKey="home-scroll-y"
                href={product.href}
                className="block"
              >
                {/* Product Placeholder */}
                <div className="relative w-full aspect-square bg-muted/40 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/20">
                    <div className="text-center">
                      <div className="text-3xl mb-2">✨</div>
                      <span className="text-text-secondary text-xs font-medium px-2">{product.type}</span>
                    </div>
                  </div>
                </div>
              </ScrollRestoreLink>

              {/* Product Info */}
              <div className="flex flex-1 flex-col pt-2">
                <h4 className="font-serif text-sm font-semibold text-text-primary group-hover:text-primary transition-colors mb-1 line-clamp-1">
                  {product.name}
                </h4>
                <p className="font-body text-[11px] text-text-secondary mb-3 line-clamp-1">
                  {product.type}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="font-body text-sm font-semibold text-primary">
                    Pre-order
                  </p>
                  <QuickAddButton label={product.name} className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Grid - No Horizontal Scroll */}
      <section className="content-container py-8">
        <h3 className="font-serif text-xl font-semibold text-text-primary mb-4">
          Collections
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <ScrollRestoreLink
              key={category.id}
              storageKey="home-scroll-y"
              href={`/categories/${category.id}`}
              className="group flex h-full flex-col rounded-2xl border border-border/60 bg-white p-3 shadow-sm transition-transform active:scale-[0.99] sm:p-4"
            >
              {/* Image Placeholder */}
              <div className="relative w-full aspect-square bg-muted/40 rounded-xl overflow-hidden flex-shrink-0">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/20">
                  <span className="text-text-secondary text-xs font-medium">
                    {category.name}
                  </span>
                </div>
              </div>

              {/* Name & Count */}
              <div className="mt-auto pt-2">
                <h4 className="font-serif text-sm font-semibold text-text-primary group-hover:text-primary transition-colors mb-1">
                  {category.name}
                </h4>
                <p className="font-body text-[11px] text-text-secondary">
                  {category.variants.length} items
                </p>
              </div>
            </ScrollRestoreLink>
          ))}
        </div>
      </section>

      {/* Custom Gift Packs Section */}
      <section className="content-container mt-2 py-8">
        <h3 className="font-serif text-xl font-semibold text-text-primary mb-4">
          Curated Collections & Gift Sets
        </h3>
        <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
          Create your own collection by mixing essences across different categories. Perfect for gifting or building your personal ritual cabinet. Pre-order your curated set.
        </p>
        <Link
          href="#"
          className="block w-full py-4 px-5 bg-white border border-primary text-primary rounded-xl font-body font-semibold text-center active:scale-95 transition-transform duration-200"
        >
          Discover Collections
        </Link>
      </section>

      {/* CTA Section */}
      <section className="content-container pb-4 pt-6">
        <Link
          href={`/categories/${categories[0]?.id || '#'}`}
          className="block w-full rounded-xl bg-gradient-to-r from-primary to-primary/90 px-5 py-4 text-center font-body font-semibold text-primary-foreground shadow-lg transition-transform duration-200 active:scale-95 sm:max-w-sm"
        >
          Explore Collections
        </Link>
      </section>
    </main>
  )
}
