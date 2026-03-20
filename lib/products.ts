export interface Product {
  id: string
  name: string
  descriptor: string
  region: string
  introduction: string
  origin: {
    state: string
    description: string
    coordinates?: { lat: number; lng: number }
  }
  hands: {
    name: string
    role: string
    story: string
    portraitCaption?: string
  }
  process: Array<{
    step: number
    name: string
    description: string
  }>
  giftAngle: string
  isFavourite?: boolean
}

export const products: Product[] = [
  {
    id: 'vetiver',
    name: 'Vetiver',
    descriptor: 'Cooling root essence from the earth',
    region: 'Tamil Nadu',
    introduction: 'Grown deep in the earth, vetiver\'s roots reach where nothing else does. Ancient, cooling, grounding — it has been used for centuries to calm the body and purify the air.',
    origin: {
      state: 'Tamil Nadu',
      description: 'The lush southern peninsula of India produces vetiver of unparalleled quality. The monsoon rains nourish these deep-rooted grasses, which thrive in Tamil Nadu\'s laterite-rich soil. This region has been a centre of knowledge-keeping for vetiver cultivation for over a century.',
      coordinates: { lat: 11.1271, lng: 78.6569 }
    },
    hands: {
      name: 'Radha & her cooperative',
      role: 'Farmers & harvesters',
      story: 'Radha and her cooperative of 12 women have been harvesting vetiver roots by hand since 1987. They know the earth intimately — when to harvest, how deep to dig, how to preserve the soil\'s integrity. Their knowledge is generational, their hands are skilled, and their commitment to sustainable harvesting ensures these roots will flourish for generations to come.',
      portraitCaption: 'Radha & her cooperative, Tamil Nadu — harvesting vetiver roots by hand since 1987'
    },
    process: [
      {
        step: 1,
        name: 'Hand-harvested',
        description: 'Roots are carefully dug from monsoon-enriched Tamil Nadu soil, preserving the ecosystem.'
      },
      {
        step: 2,
        name: 'Sun-dried',
        description: 'Roots are dried slowly in the South Indian sun, concentrating their aromatic compounds.'
      },
      {
        step: 3,
        name: 'Steam-distilled',
        description: 'Essential oil is extracted through traditional steam distillation, preserving purity.'
      },
      {
        step: 4,
        name: 'Quality verified in Switzerland',
        description: 'Every batch undergoes rigorous testing to meet our standards before blending.'
      }
    ],
    giftAngle: 'For the person who has everything — this is something they\'ve never had. Vetiver makes a quiet, lasting impression. It is the gift of calm, of grounding, of something real.'
  },
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    descriptor: 'Sacred wood of spiritual warmth',
    region: 'Karnataka',
    introduction: 'Sandalwood has been sacred across India for millennia. Its warm, creamy aroma anchors the spirit and elevates any moment. Rare, precious, and deeply revered — this is the wood that has opened temples and calmed souls for centuries.',
    origin: {
      state: 'Karnataka',
      description: 'The Western Ghats of Karnataka hold the finest sandalwood forests in India. These ancient trees grow slowly, imbued with the misty mountain air and rich forest soil. Harvesting here is tightly regulated to protect these precious groves, making every piece of sandalwood from this region a testament to preservation and patience.',
      coordinates: { lat: 14.5994, lng: 75.8394 }
    },
    hands: {
      name: 'Mahesh & forest stewards',
      role: 'Harvesters & guardians',
      story: 'Mahesh and the forest stewards of Karnataka have protected and harvested sandalwood sustainably for 40 years. They work within strict conservation guidelines, harvesting only mature trees while replanting for the future. Their dedication ensures that sandalwood will remain sacred — not extinct.',
      portraitCaption: 'Mahesh, Karnataka — guardian of sandalwood forests for four decades'
    },
    process: [
      {
        step: 1,
        name: 'Carefully selected',
        description: 'Only mature trees from managed forests are harvested, following strict conservation protocols.'
      },
      {
        step: 2,
        name: 'Aged in the wood',
        description: 'Heartwood is aged to deepen its aroma and allow compounds to develop naturally.'
      },
      {
        step: 3,
        name: 'Cold-pressed',
        description: 'Oil is extracted at low temperatures, preserving the wood\'s delicate, complex character.'
      },
      {
        step: 4,
        name: 'Certified & sealed in Switzerland',
        description: 'Certificate of authenticity and conservation verified. Bottled to last generations.'
      }
    ],
    giftAngle: 'For those who appreciate depth and history. Sandalwood is a meditation in scent — a moment of pause, clarity, and connection to something timeless.'
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    descriptor: 'Moonlit flowers of the night',
    region: 'Rajasthan',
    introduction: 'Jasmine blooms at night, releasing its most intoxicating fragrance under the stars. It is the flower of romance, of the unforeseen moment, of beauty that arrives when you least expect it. This is the jasmine that perfumers have treasured for centuries.',
    origin: {
      state: 'Rajasthan',
      description: 'The ancient gardens of Rajasthan have cultivated jasmine for over 500 years. In the warm desert nights, jasmine flowers open with their most precious aroma. The farmers here have perfected the art of harvest — picking flowers at the moment of peak bloom, when the night air is thick with fragrance.',
      coordinates: { lat: 27.0238, lng: 74.2179 }
    },
    hands: {
      name: 'Priya & her family',
      role: 'Night gardeners & flower crafters',
      story: 'Priya and her family have tended jasmine gardens in Rajasthan for three generations. They know every plant, every bloom time, every whisper of the night wind that affects the flowers. They pick at moonrise, by hand, with the understanding that this moment — between dusk and deep night — is when jasmine offers its most precious gift.',
      portraitCaption: 'Priya, Rajasthan — night gardener of jasmine for over thirty years'
    },
    process: [
      {
        step: 1,
        name: 'Hand-picked at moonrise',
        description: 'Flowers are harvested at the exact moment of peak bloom, under Rajasthan\'s clear night sky.'
      },
      {
        step: 2,
        name: 'Fresh infusion',
        description: 'Flowers are infused into cold oil immediately after harvest to capture the living aroma.'
      },
      {
        step: 3,
        name: 'Gentle maceration',
        description: 'Oil maceration happens slowly, over weeks, honoring the delicate nature of the bloom.'
      },
      {
        step: 4,
        name: 'Bottled with care in Switzerland',
        description: 'Every batch is tested for purity and potency, then sealed in dark glass for preservation.'
      }
    ],
    giftAngle: 'For the romantic, the dreamer, the person who notices small moments of beauty. Jasmine is an invitation to slow down, to bloom, to radiate quiet grace.',
    isFavourite: true
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    descriptor: 'Golden root of ancient healing',
    region: 'Kerala',
    introduction: 'Turmeric is the golden thread that runs through Indian life — healing, warming, protective. Its earthy warmth and subtle spice have been trusted for over 4,000 years. This is the turmeric that heals, not just flavors.',
    origin: {
      state: 'Kerala',
      description: 'Kerala\'s monsoon-fed soil produces turmeric of extraordinary quality. The humid tropical climate and rich, loamy earth give these rhizomes their deep golden color and potent active compounds. Farmers here have refined the art of turmeric cultivation across generations.',
      coordinates: { lat: 10.8505, lng: 76.2711 }
    },
    hands: {
      name: 'Suresh & cooperative farmers',
      role: 'Cultivators & processors',
      story: 'Suresh coordinates a cooperative of 23 small farmers across Kerala\'s backwater regions. They grow turmeric without synthetic pesticides, trusting the land\'s natural cycles. Suresh oversees every stage — from soil preparation to drying to quality assessment — ensuring that every turmeric root meets the standards of ancient healing practice.',
      portraitCaption: 'Suresh, Kerala — cultivator of turmeric in partnership with 23 farming families'
    },
    process: [
      {
        step: 1,
        name: 'Organic cultivation',
        description: 'Turmeric rhizomes are grown without synthetic pesticides in Kerala\'s naturally rich soil.'
      },
      {
        step: 2,
        name: 'Hand-harvested',
        description: 'Roots are carefully dug and separated, respecting the plant\'s integrity and the soil\'s health.'
      },
      {
        step: 3,
        name: 'Traditionally dried',
        description: 'Rhizomes are dried slowly in the Kerala sun, concentrating their active compounds.'
      },
      {
        step: 4,
        name: 'Tested & certified in Switzerland',
        description: 'Purity, potency, and bioavailability verified by independent laboratories before bottling.'
      }
    ],
    giftAngle: 'For the person invested in wellness, in ancient wisdom, in real health. Turmeric is a daily ritual that matters — a gesture that says: I care about your wellbeing.'
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getAllProducts(): Product[] {
  return products
}
