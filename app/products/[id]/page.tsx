import type { Metadata } from 'next'
import { getProductById, getAllProducts } from '@/lib/products'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: ProductDetailPageProps
): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    }
  }

  return {
    title: `${product.name} | Anvaya — Rare Botanicals from India`,
    description: product.introduction,
    openGraph: {
      title: product.name,
      description: product.introduction,
      type: 'website',
      url: `/products/${product.id}`,
    },
  }
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border sticky top-0 bg-background z-10">
        <div className="px-6 md:px-8 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="text-text-secondary hover:text-primary transition-colors text-sm uppercase tracking-widest"
            >
              ← Back
            </Link>
            <p className="text-xs text-text-secondary uppercase tracking-widest">
              {product.name}
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Product Image */}
          <div className="aspect-square bg-accent-blush rounded-sm overflow-hidden flex items-center justify-center">
            <Image
              src={`/images/products/${product.id}.jpg`}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                {product.name}
              </h1>
              <p className="text-text-secondary text-xl leading-relaxed">
                {product.introduction}
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-accent-gold mb-3">
                Region
              </p>
              <p className="text-lg text-primary font-medium">
                {product.origin.state}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Section */}
      <section className="px-6 md:px-8 py-24 border-b border-border bg-accent-blush">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8">
              Where It Comes From
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
              {product.origin.description}
            </p>
          </div>

          {/* Simple location indicator */}
          <div className="bg-white rounded-sm p-8 md:p-12 border border-border">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-accent-terracotta rounded-full"></div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent-gold mb-1">
                  Sourced from
                </p>
                <p className="text-2xl font-serif text-primary">
                  {product.origin.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hands Section */}
      <section className="px-6 md:px-8 py-24 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-16">
            Who Made This
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Portrait */}
            <div className="aspect-square bg-accent-warm rounded-sm overflow-hidden flex items-center justify-center">
              <Image
                src={`/images/portraits/${product.id}.jpg`}
                alt={product.hands.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story */}
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-accent-gold mb-3">
                  {product.hands.role}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                  {product.hands.name}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {product.hands.story}
                </p>
              </div>

              {product.hands.portraitCaption && (
                <p className="text-sm text-text-secondary italic pt-8 border-t border-border">
                  {product.hands.portraitCaption}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="px-6 md:px-8 py-24 border-b border-border bg-accent-blush">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-16">
            How It's Made
          </h2>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {product.process.map((step, index) => (
              <div key={index} className="space-y-4">
                {/* Step Indicator */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-background">
                      {step.step}
                    </span>
                  </div>
                  {index < product.process.length - 1 && (
                    <div className="hidden md:block absolute left-12 top-1/2 w-16 h-0.5 bg-accent-gold -translate-y-1/2 pointer-events-none"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="relative">
                  <h3 className="font-serif text-lg text-primary mb-2">
                    {step.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline Indicator */}
          <div className="md:hidden space-y-6 mt-8">
            {product.process.map((_, index) => (
              index < product.process.length - 1 && (
                <div key={index} className="flex justify-center">
                  <div className="w-0.5 h-8 bg-accent-gold"></div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* The Gift Angle Section */}
      <section className="px-6 md:px-8 py-24 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8">
            Why It Makes a Perfect Gift
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            {product.giftAngle}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <button className="bg-accent-terracotta text-background px-12 py-4 rounded-sm text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 mb-4">
            Reserve This Product
          </button>
          <p className="text-text-secondary text-sm">
            Launching soon in Switzerland & Europe
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-text-secondary text-sm leading-relaxed">
            Engineered in Switzerland. Sourced in India. Crafted with care.
          </p>
        </div>
      </footer>
    </main>
  )
}
