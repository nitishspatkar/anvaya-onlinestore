import Link from 'next/link'
import { getAllCategories, getFeaturedProducts } from '@/lib/products'
import { CartCountBadge } from '@/components/cart-count-badge'
import { QuickAddButton } from '@/components/quick-add-button'
import { ScrollRestore } from '@/components/scroll-restore'
import { ScrollRestoreLink } from '@/components/scroll-restore-link'

export const metadata = {
  title: 'Anvaya — Botanical Essences from India',
  description: 'Pre-order authentic botanical essences directly sourced from Indian farmers and artisans. Direct trade, transparent, made by hand.',
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

      {/* Header - Single Logo Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 py-5 flex items-center justify-between">
          <h1 className="font-serif text-2xl font-semibold text-primary">
            Anvaya
          </h1>
          <CartCountBadge />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6">
        <div className="space-y-3">
          <h2 className="font-serif text-3xl font-semibold text-text-primary leading-tight">
            Authentic essences, directly from makers
          </h2>
          <p className="font-body text-sm text-text-secondary leading-relaxed max-w-md">
            Pre-order directly from Indian farmers and artisans. No middlemen. Complete transparency. Everything handcrafted.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-y border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
        <div className="flex gap-2 overflow-x-auto">
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
      <section className="px-4 py-6">
        <h3 className="font-serif text-xl font-semibold text-text-primary mb-4">
          Customer Favourites
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {filteredFeatured.map((product) => (
            <article
              key={product.id}
              className="group h-full rounded-2xl border border-border/60 bg-white p-3 shadow-sm"
            >
              <ScrollRestoreLink
                storageKey="home-scroll-y"
                href={`/categories/${product.categoryId}/products/${product.variantId}`}
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
              <div className="flex-1 pt-2">
                <h4 className="font-serif text-sm font-semibold text-text-primary group-hover:text-primary transition-colors mb-1 line-clamp-1">
                  {product.name}
                </h4>
                <p className="font-body text-[11px] text-text-secondary mb-3 line-clamp-1">
                  {product.type}
                </p>
                <div className="flex items-center justify-between">
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
      <section className="px-4 py-6">
        <h3 className="font-serif text-xl font-semibold text-text-primary mb-4">
          Collections
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <ScrollRestoreLink
              key={category.id}
              storageKey="home-scroll-y"
              href={`/categories/${category.id}`}
              className="group h-full rounded-2xl border border-border/60 bg-white p-3 shadow-sm transition-transform active:scale-[0.99]"
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
              <div className="flex-1 pt-2">
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

      {/* What Anvaya Stands For Section */}
      <section className="px-4 py-8 mt-2">
        <div className="bg-gradient-to-br from-primary/10 to-accent-warm/5 rounded-2xl p-5 space-y-4 border border-primary/10">
          <h3 className="font-serif text-xl font-semibold text-text-primary">
            What Anvaya Stands For
          </h3>
          <div className="space-y-3">
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              <span className="font-semibold text-text-primary">Anvaya</span> means "interconnectedness" in Sanskrit - a philosophy we live by. It's not just our name; it's our promise. Every essence we offer represents the interconnected relationship between farmers, artisans, nature, and you.
            </p>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We empower grassroot producers and small-scale farmers by creating direct channels to global audiences. Their knowledge, craftsmanship, and dedication deserve recognition. Our role is simple: connect authentic makers with people who value quality and transparency.
            </p>
            <p className="font-body text-xs text-text-secondary italic">
              Direct trade. Fair terms. Complete transparency. Always.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Gift Packs Section */}
      <section className="px-4 py-8 mt-2">
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
      <section className="px-4 pt-6 pb-4">
        <Link
          href={`/categories/${categories[0]?.id || '#'}`}
          className="block w-full py-4 px-5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-body font-semibold text-center active:scale-95 transition-transform duration-200 shadow-lg"
        >
          Explore Collections
        </Link>
      </section>
    </main>
  )
}
