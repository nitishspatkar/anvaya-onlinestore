import type { Category, ProductPdpContent, ProductVariant } from '@/lib/products'

export interface ResolvedProductPdp {
  heroImage: string
  botanicalImage?: string
  provenanceImage?: string
  weightLabel?: string
  heroOverlay?: { title: string; body: string }
  headlinePrimary: string
  headlineAccent: string
  longDescription: string
  provenanceChipTitle: string
  provenanceChipBody: string
  ingredients: { title: string; subtitle: string }[]
  ritualSteps: { title: string; body: string }[]
  provenanceHeading: string
  provenanceSubheading: string
  provenanceBody: string
}

function defaultHeroImage(category: Category): string {
  return `/images/categories/${category.imageId}.jpg`
}

export function resolveProductPdp(variant: ProductVariant, category: Category): ResolvedProductPdp {
  const o: ProductPdpContent | undefined = variant.pdp

  const headlinePrimary = o?.headlinePrimary ?? variant.name
  const headlineAccent = o?.headlineAccent ?? variant.type
  const longDescription = o?.longDescription ?? variant.description

  const provenanceChipTitle = o?.provenanceChipTitle ?? `Origin: ${variant.maker.location}`
  const provenanceChipBody =
    o?.provenanceChipBody ??
    `${variant.maker.brief} Each batch honours traditional methods and natural ingredients.`

  const ingredients =
    o?.ingredients ??
    (category.id === 'vetiver'
      ? [
          { title: 'Chrysopogon zizanioides', subtitle: 'Vetiver root & essence' },
          { title: 'Traditional base oils', subtitle: 'Botanical carriers' },
          { title: 'Small-batch finish', subtitle: 'Heritage formulation' },
        ]
      : [
          { title: category.name, subtitle: variant.type },
          { title: 'Heritage formulation', subtitle: 'Naturally derived' },
          { title: 'Traceable sourcing', subtitle: variant.maker.location },
        ])

  const ritualSteps =
    o?.ritualSteps ??
    [
      {
        title: 'Tempering',
        body: 'Introduce the product to warm water so aromatic notes can open gently before use.',
      },
      {
        title: 'Application',
        body: 'Work slowly into skin or ritual space—small amounts often carry the fullest character.',
      },
      {
        title: 'Finishing',
        body: 'Rinse or pat dry as suits the form; store in a cool, dry place away from direct sun.',
      },
    ]

  const provenanceHeading = o?.provenanceHeading ?? variant.maker.location
  const provenanceSubheading = o?.provenanceSubheading ?? category.name
  const provenanceBody =
    o?.provenanceBody ??
    `${category.description.split('\n\n')[0] ?? category.description} This is a direct connection to the people who made it.`

  return {
    heroImage: o?.heroImage ?? defaultHeroImage(category),
    botanicalImage: o?.botanicalImage,
    provenanceImage: o?.provenanceImage,
    weightLabel: o?.weightLabel,
    heroOverlay: o?.heroOverlay,
    headlinePrimary,
    headlineAccent,
    longDescription,
    provenanceChipTitle,
    provenanceChipBody,
    ingredients,
    ritualSteps,
    provenanceHeading,
    provenanceSubheading,
    provenanceBody,
  }
}
