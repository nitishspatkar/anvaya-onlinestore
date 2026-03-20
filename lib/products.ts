export interface Maker {
  name: string
  role: string
  location: string
  brief: string
  portraitId: string
}

export interface ProductVariant {
  id: string
  name: string
  description: string
  type: string
  maker: Maker
}

export interface Category {
  id: string
  name: string
  description: string
  region: string
  variants: ProductVariant[]
  imageId: string
}

export const categories: Category[] = [
  {
    id: 'vetiver',
    name: 'Vetiver',
    description: 'Cooling root essence from the earth. Grown deep in Tamil Nadu soil, vetiver\'s roots reach where nothing else does. Ancient, cooling, grounding — it calms the body and purifies the air.',
    region: 'Tamil Nadu',
    imageId: 'vetiver',
    variants: [
      {
        id: 'vetiver-roots',
        name: 'Roots',
        description: 'Vetiver roots are aromatic and naturally cooling. Use in sachets or cooling mats for natural fragrance.',
        type: 'Whole Roots',
        maker: {
          name: 'Radha & cooperative',
          role: 'Farmers',
          location: 'Tamil Nadu',
          brief: 'Radha and 12 women harvest vetiver by hand, preserving soil integrity since 1987.',
          portraitId: 'radha'
        }
      },
      {
        id: 'vetiver-powder',
        name: 'Powder',
        description: 'Popular in skincare and natural perfumery. Add to face masks for soothing, fragrant effect.',
        type: 'Fine Powder',
        maker: {
          name: 'Radha & cooperative',
          role: 'Farmers',
          location: 'Tamil Nadu',
          brief: 'Radha and 12 women harvest vetiver by hand, preserving soil integrity since 1987.',
          portraitId: 'radha'
        }
      },
      {
        id: 'vetiver-oil',
        name: 'Essential Oil',
        description: 'Vetiver essential oil with a calming aroma. Diffuse a few drops to create a relaxing atmosphere.',
        type: 'Essential Oil',
        maker: {
          name: 'Radha & cooperative',
          role: 'Farmers',
          location: 'Tamil Nadu',
          brief: 'Radha and 12 women harvest vetiver by hand, preserving soil integrity since 1987.',
          portraitId: 'radha'
        }
      },
      {
        id: 'vetiver-scrub',
        name: 'Exfoliating Scrub',
        description: 'Exfoliating scrub with refreshing properties. Apply to damp skin and gently exfoliate.',
        type: 'Scrub',
        maker: {
          name: 'Radha & cooperative',
          role: 'Farmers',
          location: 'Tamil Nadu',
          brief: 'Radha and 12 women harvest vetiver by hand, preserving soil integrity since 1987.',
          portraitId: 'radha'
        }
      },
      {
        id: 'vetiver-soap',
        name: 'Natural Soap',
        description: 'Natural, moisturizing soap with a velvety scent. Use daily for body cleansing and aromatherapy benefits.',
        type: 'Soap',
        maker: {
          name: 'Radha & cooperative',
          role: 'Farmers',
          location: 'Tamil Nadu',
          brief: 'Radha and 12 women harvest vetiver by hand, preserving soil integrity since 1987.',
          portraitId: 'radha'
        }
      },
      {
        id: 'vetiver-incense',
        name: 'Incense Sticks',
        description: 'Vetiver-infused incense sticks for relaxation. Light to create a soothing, aromatic ambiance.',
        type: 'Incense',
        maker: {
          name: 'Radha & cooperative',
          role: 'Farmers',
          location: 'Tamil Nadu',
          brief: 'Radha and 12 women harvest vetiver by hand, preserving soil integrity since 1987.',
          portraitId: 'radha'
        }
      }
    ]
  },
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    description: 'Sacred wood of spiritual warmth. The finest sandalwood from Karnataka\'s Western Ghats, harvested sustainably to protect these precious forests.',
    region: 'Karnataka',
    imageId: 'sandalwood',
    variants: [
      {
        id: 'sandalwood-powder',
        name: 'Powder',
        description: 'Sandalwood powder ideal for face packs and skincare. Mix with rose water for a calming mask.',
        type: 'Fine Powder',
        maker: {
          name: 'Mahesh & forest stewards',
          role: 'Harvesters',
          location: 'Karnataka',
          brief: 'Mahesh and the forest stewards have protected sandalwood sustainably for 40 years.',
          portraitId: 'mahesh'
        }
      },
      {
        id: 'sandalwood-oil',
        name: 'Essential Oil',
        description: 'Sandalwood essential oil with warm, creamy aroma. Use in diffusers or as a personal fragrance.',
        type: 'Essential Oil',
        maker: {
          name: 'Mahesh & forest stewards',
          role: 'Harvesters',
          location: 'Karnataka',
          brief: 'Mahesh and the forest stewards have protected sandalwood sustainably for 40 years.',
          portraitId: 'mahesh'
        }
      },
      {
        id: 'sandalwood-incense',
        name: 'Incense Sticks',
        description: 'Natural sandalwood incense sticks. Light for a calming, fragrant ambiance.',
        type: 'Incense',
        maker: {
          name: 'Mahesh & forest stewards',
          role: 'Harvesters',
          location: 'Karnataka',
          brief: 'Mahesh and the forest stewards have protected sandalwood sustainably for 40 years.',
          portraitId: 'mahesh'
        }
      }
    ]
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    description: 'Moonlit flowers of the night. Jasmine blooms at night, releasing its most intoxicating fragrance under the stars.',
    region: 'Rajasthan',
    imageId: 'jasmine',
    variants: [
      {
        id: 'jasmine-water',
        name: 'Rose Water',
        description: 'Natural toner and skin refresher. Apply with a cotton pad or add to recipes.',
        type: 'Flower Water',
        maker: {
          name: 'Priya & family',
          role: 'Night Gardeners',
          location: 'Rajasthan',
          brief: 'Priya and her family have tended jasmine gardens for three generations.',
          portraitId: 'priya'
        }
      },
      {
        id: 'jasmine-powder',
        name: 'Powder',
        description: 'Fragrant addition to culinary dishes and skincare. Mix into face masks or desserts.',
        type: 'Fine Powder',
        maker: {
          name: 'Priya & family',
          role: 'Night Gardeners',
          location: 'Rajasthan',
          brief: 'Priya and her family have tended jasmine gardens for three generations.',
          portraitId: 'priya'
        }
      },
      {
        id: 'jasmine-marmalade',
        name: 'Marmalade',
        description: 'Delicious, fragrant preserve made from jasmine petals. Spread on toast or add to desserts.',
        type: 'Preserve',
        maker: {
          name: 'Priya & family',
          role: 'Night Gardeners',
          location: 'Rajasthan',
          brief: 'Priya and her family have tended jasmine gardens for three generations.',
          portraitId: 'priya'
        }
      }
    ]
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    description: 'Golden root of ancient healing. Turmeric has been trusted for over 4,000 years to heal, warm, and protect.',
    region: 'Kerala',
    imageId: 'turmeric',
    variants: [
      {
        id: 'turmeric-powder',
        name: 'Powder',
        description: 'Turmeric powder for skincare and health. Mix with water or honey for a brightening face pack.',
        type: 'Fine Powder',
        maker: {
          name: 'Suresh & cooperative',
          role: 'Cultivators',
          location: 'Kerala',
          brief: 'Suresh coordinates 23 small farmers growing turmeric without synthetic pesticides.',
          portraitId: 'suresh'
        }
      }
    ]
  },
  {
    id: 'neem',
    name: 'Neem',
    description: 'Valued in traditional medicine for its antibacterial properties. Used in skincare and health remedies.',
    region: 'Multiple',
    imageId: 'neem',
    variants: [
      {
        id: 'neem-powder',
        name: 'Powder',
        description: 'Natural remedy for skin and hair health. Mix with water to make a paste or add to face masks.',
        type: 'Fine Powder',
        maker: {
          name: 'Local farmers',
          role: 'Cultivators',
          location: 'North India',
          brief: 'Neem farmers across North India cultivate these beneficial trees sustainably.',
          portraitId: 'neem-farmer'
        }
      },
      {
        id: 'neem-soap',
        name: 'Soap',
        description: 'Gentle, antibacterial soap for skin care. Use for daily body cleansing.',
        type: 'Soap',
        maker: {
          name: 'Local farmers',
          role: 'Cultivators',
          location: 'North India',
          brief: 'Neem farmers across North India cultivate these beneficial trees sustainably.',
          portraitId: 'neem-farmer'
        }
      }
    ]
  },
  {
    id: 'tulsi',
    name: 'Tulsi (Holy Basil)',
    description: 'Immune-boosting and stress-relieving properties. Revered in Ayurveda and traditional medicine.',
    region: 'Multiple',
    imageId: 'tulsi',
    variants: [
      {
        id: 'tulsi-powder',
        name: 'Powder',
        description: 'Tulsi powder for skincare and health. Mix into milk or smoothies.',
        type: 'Fine Powder',
        maker: {
          name: 'Tulsi growers',
          role: 'Cultivators',
          location: 'India',
          brief: 'Tulsi is cultivated by traditional growers across sacred gardens.',
          portraitId: 'tulsi-farmer'
        }
      },
      {
        id: 'tulsi-tea',
        name: 'Tea',
        description: 'Relaxing herbal tea made from Tulsi leaves. Brew in hot water for a refreshing, stress-relieving drink.',
        type: 'Dried Tea',
        maker: {
          name: 'Tulsi growers',
          role: 'Cultivators',
          location: 'India',
          brief: 'Tulsi is cultivated by traditional growers across sacred gardens.',
          portraitId: 'tulsi-farmer'
        }
      }
    ]
  },
  {
    id: 'kokum',
    name: 'Kokum',
    description: 'Tropical fruit known for its cooling properties. Used in skincare and refreshing summer drinks.',
    region: 'Maharashtra & Goa',
    imageId: 'kokum',
    variants: [
      {
        id: 'kokum-butter',
        name: 'Butter',
        description: 'Rich, natural moisturizer from kokum seeds. Apply to dry skin for deep hydration.',
        type: 'Body Butter',
        maker: {
          name: 'Kokum farmers',
          role: 'Cultivators',
          location: 'Maharashtra',
          brief: 'Kokum trees are tended by farmers in the Western Ghats.',
          portraitId: 'kokum-farmer'
        }
      },
      {
        id: 'kokum-syrup',
        name: 'Syrup',
        description: 'Refreshing summer drink with cooling properties. Mix with water or soda for a tangy, refreshing beverage.',
        type: 'Syrup',
        maker: {
          name: 'Kokum farmers',
          role: 'Cultivators',
          location: 'Maharashtra',
          brief: 'Kokum trees are tended by farmers in the Western Ghats.',
          portraitId: 'kokum-farmer'
        }
      }
    ]
  },
  {
    id: 'rose',
    name: 'Rose',
    description: 'Rose water and extracts cherished for their floral aroma and soothing effects in beauty and culinary uses.',
    region: 'Himachal Pradesh',
    imageId: 'rose',
    variants: [
      {
        id: 'rose-water',
        name: 'Rose Water',
        description: 'Natural toner and skin refresher. Apply to skin with a cotton pad or add to recipes.',
        type: 'Flower Water',
        maker: {
          name: 'Rose growers',
          role: 'Cultivators',
          location: 'Himachal Pradesh',
          brief: 'Rose growers in the Himalayas cultivate delicate petals for traditional distillation.',
          portraitId: 'rose-farmer'
        }
      },
      {
        id: 'rose-powder',
        name: 'Powder',
        description: 'Fragrant addition to culinary dishes and skincare. Mix into face masks or desserts.',
        type: 'Fine Powder',
        maker: {
          name: 'Rose growers',
          role: 'Cultivators',
          location: 'Himachal Pradesh',
          brief: 'Rose growers in the Himalayas cultivate delicate petals for traditional distillation.',
          portraitId: 'rose-farmer'
        }
      },
      {
        id: 'rose-marmalade',
        name: 'Marmalade',
        description: 'Delicious, fragrant preserve made from rose petals. Spread on toast or add to desserts.',
        type: 'Preserve',
        maker: {
          name: 'Rose growers',
          role: 'Cultivators',
          location: 'Himachal Pradesh',
          brief: 'Rose growers in the Himalayas cultivate delicate petals for traditional distillation.',
          portraitId: 'rose-farmer'
        }
      }
    ]
  },
  {
    id: 'shatavari',
    name: 'Shatavari',
    description: 'Adaptogenic herb known for supporting women\'s health and hormonal balance. Used in Ayurvedic medicine.',
    region: 'Madhya Pradesh',
    imageId: 'shatavari',
    variants: [
      {
        id: 'shatavari-powder',
        name: 'Powder',
        description: 'Shatavari powder traditionally used for hormonal balance. Mix into milk or smoothies.',
        type: 'Fine Powder',
        maker: {
          name: 'Shatavari cultivators',
          role: 'Farmers',
          location: 'Madhya Pradesh',
          brief: 'Shatavari is cultivated by Ayurvedic farmers preserving traditional practices.',
          portraitId: 'shatavari-farmer'
        }
      },
      {
        id: 'shatavari-extract',
        name: 'Liquid Extract',
        description: 'Shatavari extract for easy use. Add drops to water for a daily health boost.',
        type: 'Liquid Extract',
        maker: {
          name: 'Shatavari cultivators',
          role: 'Farmers',
          location: 'Madhya Pradesh',
          brief: 'Shatavari is cultivated by Ayurvedic farmers preserving traditional practices.',
          portraitId: 'shatavari-farmer'
        }
      }
    ]
  },
  {
    id: 'kasturi-manjal',
    name: 'Kasturi Manjal',
    description: 'Also known as wild turmeric. Used in skincare for brightening and antibacterial properties.',
    region: 'South India',
    imageId: 'kasturi-manjal',
    variants: [
      {
        id: 'kasturi-powder',
        name: 'Powder',
        description: 'Wild turmeric powder, gentle on skin. Mix with yogurt or milk for a brightening face pack.',
        type: 'Fine Powder',
        maker: {
          name: 'Kasturi Manjal growers',
          role: 'Farmers',
          location: 'South India',
          brief: 'Kasturi Manjal is harvested by farmers preserving wild turmeric traditions.',
          portraitId: 'kasturi-farmer'
        }
      },
      {
        id: 'kasturi-soap',
        name: 'Soap',
        description: 'Kasturi Manjal soap for natural skin cleansing and brightening.',
        type: 'Soap',
        maker: {
          name: 'Kasturi Manjal growers',
          role: 'Farmers',
          location: 'South India',
          brief: 'Kasturi Manjal is harvested by farmers preserving wild turmeric traditions.',
          portraitId: 'kasturi-farmer'
        }
      }
    ]
  },
  {
    id: 'amla',
    name: 'Amla (Indian Gooseberry)',
    description: 'Rich in vitamin C and used to promote skin health and boost immunity. A staple in Ayurvedic practice.',
    region: 'Multiple',
    imageId: 'amla',
    variants: [
      {
        id: 'amla-raw',
        name: 'Raw',
        description: 'Fresh amla fruit, rich in vitamin C. Eat raw or juice for immune support.',
        type: 'Fresh Fruit',
        maker: {
          name: 'Amla farmers',
          role: 'Cultivators',
          location: 'India',
          brief: 'Amla is cultivated by traditional farmers across India.',
          portraitId: 'amla-farmer'
        }
      },
      {
        id: 'amla-dry',
        name: 'Dry',
        description: 'Dried amla for a tangy, healthful snack. Add to teas or eat as-is.',
        type: 'Dried Fruit',
        maker: {
          name: 'Amla farmers',
          role: 'Cultivators',
          location: 'India',
          brief: 'Amla is cultivated by traditional farmers across India.',
          portraitId: 'amla-farmer'
        }
      },
      {
        id: 'amla-powder',
        name: 'Powder',
        description: 'Amla powder for skin and hair care. Mix with water for a natural face or hair mask.',
        type: 'Fine Powder',
        maker: {
          name: 'Amla farmers',
          role: 'Cultivators',
          location: 'India',
          brief: 'Amla is cultivated by traditional farmers across India.',
          portraitId: 'amla-farmer'
        }
      }
    ]
  },
  {
    id: 'soap-berries',
    name: 'Soap Berries',
    description: 'Natural soap berries are an eco-friendly alternative to chemical-based cleansers. Used for laundry and hair care.',
    region: 'Northeast India',
    imageId: 'soap-berries',
    variants: [
      {
        id: 'soap-berries-whole',
        name: 'Whole Berries',
        description: 'Used for natural laundry detergent. Place in a cloth bag for laundry.',
        type: 'Whole Berries',
        maker: {
          name: 'Soap berry harvesters',
          role: 'Gatherers',
          location: 'Northeast India',
          brief: 'Soap berries are gathered from natural sources by communities in Northeast India.',
          portraitId: 'soap-berry-farmer'
        }
      },
      {
        id: 'soap-berries-powder',
        name: 'Powder',
        description: 'Acts as a natural shampoo and cleanser. Mix with water for hair wash.',
        type: 'Fine Powder',
        maker: {
          name: 'Soap berry harvesters',
          role: 'Gatherers',
          location: 'Northeast India',
          brief: 'Soap berries are gathered from natural sources by communities in Northeast India.',
          portraitId: 'soap-berry-farmer'
        }
      }
    ]
  }
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getProductVariantById(categoryId: string, variantId: string): ProductVariant | undefined {
  const category = getCategoryById(categoryId)
  return category?.variants.find(v => v.id === variantId)
}

export function getProductsByCategory(categoryId: string): ProductVariant[] | undefined {
  const category = getCategoryById(categoryId)
  return category?.variants
}

export interface FeaturedProduct {
  id: string
  name: string
  description: string
  categoryId: string
  variantId: string
  type: string
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'ubtan-face-scrub',
    name: 'Ubtan Face Scrub',
    description: 'Traditional Indian face scrub with natural exfoliating properties.',
    categoryId: 'turmeric',
    variantId: 'turmeric-powder',
    type: 'Face Scrub'
  },
  {
    id: 'gulkand-rose-marmalade',
    name: 'Gulkand Rose Marmalade',
    description: 'Delicious preserve with cooling and soothing properties.',
    categoryId: 'rose',
    variantId: 'rose-marmalade',
    type: 'Preserve'
  },
  {
    id: 'vetiver-water-sachet',
    name: 'Vetiver Root Sachet',
    description: 'Refreshing natural cooling sachet for water and home fragrancing.',
    categoryId: 'vetiver',
    variantId: 'vetiver-roots',
    type: 'Sachet'
  },
  {
    id: 'ayurvedic-ginger-shots',
    name: 'Ayurvedic Ginger Shots',
    description: 'Potent health booster made with traditional spices.',
    categoryId: 'turmeric',
    variantId: 'turmeric-powder',
    type: 'Health Shot'
  },
  {
    id: 'kasturi-face-care',
    name: 'Kasturi Manjal Face Care',
    description: 'Wild turmeric for brightening and anti-bacterial skin benefits.',
    categoryId: 'kasturi-manjal',
    variantId: 'kasturi-powder',
    type: 'Face Care'
  },
  {
    id: 'kokum-butter',
    name: 'Kokum Butter',
    description: 'Natural, rich moisturizer for deep hydration and skin care.',
    categoryId: 'kokum',
    variantId: 'kokum-butter',
    type: 'Body Butter'
  },
  {
    id: 'soap-berries-diy',
    name: 'Soap Berries DIY Kit',
    description: 'Make your own natural soap with whole soap berries.',
    categoryId: 'soap-berries',
    variantId: 'soap-berries-whole',
    type: 'DIY Kit'
  }
]

export function getFeaturedProducts(): FeaturedProduct[] {
  return featuredProducts
}
