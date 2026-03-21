export interface Maker {
  name: string
  role: string
  location: string
  brief: string
  portraitId: string
}

/** Optional rich PDP (Stitch prototypes — see stitch/prototypes/product_triple_milled_khus_soap_*.html). */
export interface ProductPdpContent {
  heroImage?: string
  botanicalImage?: string
  provenanceImage?: string
  weightLabel?: string
  heroOverlay?: { title: string; body: string }
  headlinePrimary?: string
  headlineAccent?: string
  longDescription?: string
  provenanceChipTitle?: string
  provenanceChipBody?: string
  ingredients?: { title: string; subtitle: string }[]
  ritualSteps?: { title: string; body: string }[]
  provenanceHeading?: string
  provenanceSubheading?: string
  provenanceBody?: string
}

export interface ProductVariant {
  id: string
  name: string
  description: string
  type: string
  maker: Maker
  price: number
  pdp?: ProductPdpContent
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
    description:
      'Vetiver is a tall perennial grass native to India, where it has been treasured for thousands of years not for what grows above the ground, but for what lies beneath it. Its deep, complex root system produces one of the most distinctive natural scents known — earthy, smoky, woody, with a cool undertone that somehow feels both ancient and calming.\n\nVetiver thrives in the hot dry plains where its roots can reach deep into the soil. The same roots that prevent soil erosion also hold the key to its many uses.\n\nVetiver is used in several ways. The roots are woven into cooling mats, screens and baskets that release a gentle fragrance when sprinkled with water — a traditional Indian method of cooling rooms before air conditioning existed. Vetiver essential oil is used in perfumery, skincare and aromatherapy.',
    region: 'Tamil Nadu',
    imageId: 'vetiver',
    variants: [
      {
        id: 'vetiver-roots',
        name: 'Roots',
        description: 'Vetiver roots are aromatic and naturally cooling. Use in sachets or cooling mats for natural fragrance.',
        type: 'Whole Roots',
        price: 24.99,
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
        price: 18.99,
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
        price: 34.99,
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
        price: 22.99,
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
        price: 14.99,
        maker: {
          name: 'Radha & cooperative',
          role: 'Farmers',
          location: 'Tamil Nadu',
          brief: 'Radha and 12 women harvest vetiver by hand, preserving soil integrity since 1987.',
          portraitId: 'radha'
        },
        pdp: {
          heroImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDGLe_v3_pCO-SKkXtfNpdGX_qVPx-vKIrxE70Lnl6no6qbUYoNEmi4lHnbPAwIh-NR7IbQWNCmxiIEFNnXZ032iUg93ZWX2lmv3-q2wURpSBvxWQ-Os6l2n4L3VQm_CbuvV3Nro_XG4SKsGaStpVIuSo6Efu3LJLrjbVUkJxY0zJQQFPhfBUCNK4G8_dcpiEH3lWDzLzqNyY0hbSeiNfVichSNrRrXmNsbV8z7e8Ys985D8fGtz9wudluAktiGQcdvCEYdUIlaAUA',
          botanicalImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDZbolle_6z7wuDOKogZu-Gu_CL6xJelT48V0VUbHgbjm7KKTD8_ijbP0GyUqhswQmpIHvqDSccbAd9CRFf_lljNJD1Q1NH_ytwUtlak6wv9H80Hduyn_QrPkjm7RYC7G6mN3j-GHZmWrOVtxTuTzsPDweiQwowYIo5vJe5sIlfl373jC4PnADaIsDtSAFAqt0FMqlUUtaBOvD_UFh6ysY23kwo0T7SxqhMo7PtY4gDWSLUY8G3mrsb6nw3w6U3FrRM0atLp_Uk4gI',
          provenanceImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBMxdH_9vZ_SydJJzTJcHgaENuUUCXjO9Gfi9eQrYTXGe9IqJ9a0Te90PIbQdOCIDQarKGZ1bnY48URbXnqjCeR1VVy-EriLgPj_dr48xyoI0DzlqoNT2G3WQz6RgMtoiY-DsqEmF2qrj9eBJxu55cU7AzFEyCAv3TZ-nUZJhAvyCOxXsrRDv4F9GrSYWY0YhtYrvMMGIPAmOt9hMu2xRn-gjcUBZsmXeVEZm_bZHyJpy7aTn9hrZukx5f4bQiQpUnkgv8LZlaGUhI',
          weightLabel: '125g / 4.4oz',
          heroOverlay: {
            title: 'Architectural texture',
            body: 'Compressed through stainless steel rollers three times to ensure lasting fragrance and a dense, creamy lather.',
          },
          headlinePrimary: 'Triple Milled Khus',
          headlineAccent: '(Vetiver) Soap',
          longDescription:
            'A grounding olfactory experience crafted with wild-harvested vetiver roots. This soap offers an earthy, woody aroma that lingers on the skin, balancing the senses while deep-cleaning without depletion.',
          provenanceChipTitle: 'Origin: Kannauj',
          provenanceChipBody:
            'Roots harvested during the transition of seasons to ensure peak essential oil concentration.',
          ingredients: [
            { title: 'Chrysopogon zizanioides', subtitle: 'Wild vetiver root oil' },
            { title: 'Cocos nucifera', subtitle: 'Virgin coconut base' },
            { title: 'Santalum album', subtitle: 'Pure sandalwood extract' },
          ],
          ritualSteps: [
            {
              title: 'Tempering',
              body: 'Introduce the bar to warm water. The triple-milling process requires a few seconds of warmth to release the first layer of volatile aromatic oils.',
            },
            {
              title: 'Lathering',
              body: 'Work into a dense, non-bubbling cream between the palms. The texture should feel more like a moisturizing balm than a traditional soap.',
            },
            {
              title: 'Absorption',
              body: 'Massage directly onto damp skin in slow, circular motions. Focus on pulse points to allow the cooling nature of khus to settle.',
            },
            {
              title: 'Cleansing',
              body: 'Rinse with cool water to lock in the earthy scent. Pat dry gently to preserve the fine veil of essential oils left on the epidermis.',
            },
          ],
          provenanceHeading: 'Kannauj: The',
          provenanceSubheading: 'Perfume capital',
          provenanceBody:
            "Our khus roots are harvested from the alluvial plains of the Ganges. Using the ancient Deg-Bhapka method—traditional steam distillation in copper stills—we capture the essence of mitti (earth) and vetiver. This centuries-old process ensures that no synthetic stabilizers are needed, leaving the scent as pure as the soil itself.",
        }
      },
      {
        id: 'vetiver-incense',
        name: 'Incense Sticks',
        description: 'Vetiver-infused incense sticks for relaxation. Light to create a soothing, aromatic ambiance.',
        type: 'Incense',
        price: 12.99,
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
    description:
      'Indian sandalwood is among the most precious natural materials on earth. Its warm, creamy, softly sweet scent is unlike anything else — it does not fade the way most fragrances do, but deepens and mellows over time on skin or in a room. It has been at the centre of Indian ritual, medicine and perfumery for over 4,000 years, and the finest quality still comes from the forests of Karnataka and Tamil Nadu, where trees must grow for at least 15 years before their heartwood develops its full fragrance.\n\nDue to its slow growth and high demand, genuine Indian sandalwood is now strictly regulated and commands prices comparable to precious metals in the fragrance industry.\n\nSandalwood paste, made by grinding the wood against a stone with a few drops of water, has been used in Indian skincare for centuries — applied to the face to cool, brighten and soothe the skin. Sandalwood essential oil is used in luxury perfumery, meditation practices and premium skincare. Sandalwood powder is used in face masks, incense and ritual preparations.',
    region: 'Karnataka & Tamil Nadu',
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
    id: 'turmeric',
    name: 'Turmeric',
    description:
      'Turmeric needs little introduction — but the distance between what most people know and what turmeric actually is remains vast. The dried orange powder in the supermarket spice rack is a shadow of freshly ground, high-curcumin turmeric sourced from the right region and processed carefully. The difference in colour, aroma and potency is immediate and obvious.\n\nIndia produces over 75% of the world\'s turmeric.\n\nThe foundation of Indian cooking — used in curries, lentils, rice and marinades. Golden milk (turmeric in warm milk with black pepper and honey) has become a global wellness ritual. Taken daily in small quantities as an anti-inflammatory supplement.\n\nMixed with oil or milk as a brightening face mask. Combined with neem or sandalwood for targeted skin treatments.',
    region: 'India',
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
    description:
      'Few plants in India carry as much everyday significance as neem. Called "the village pharmacy" for generations, this fast-growing tree is found across almost every state in India — in backyards, along roadsides, in temple courtyards. Every part of it — leaf, bark, seed, oil — has a documented use, and it has been central to Ayurvedic practice for over 4,000 years.\n\nNeem oil, cold-pressed from its seeds, is used in skincare for acne-prone and oily skin, in hair care to combat dandruff and scalp conditions, and as a natural pesticide in organic farming. Neem leaf powder is used in face masks and herbal preparations. Neem twigs have been used as natural toothbrushes across India and Africa for centuries.',
    region: 'India',
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
    description:
      'In India, tulsi is more than a herb. It grows in a clay pot at the entrance of almost every traditional home, tended to daily, considered sacred in Hindu tradition and regarded as one of the most important medicinal plants in Ayurveda.\n\nTulsi grows across India in almost every climate, but the finest varieties — Rama, Krishna and Vana tulsi — come from the fertile plains of Uttar Pradesh and Madhya Pradesh, where small farming cooperatives grow it organically and harvest it by hand.\n\nDried tulsi leaves are brewed as a tea — warming, aromatic and traditionally drunk to support immunity, reduce stress and ease respiratory complaints. It is used in herbal chai blends, infusions and Ayurvedic tonics. Fresh leaves are used in Indian cooking in small quantities.',
    region: 'Uttar Pradesh & Madhya Pradesh',
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
    description:
      'Kokum is one of India\'s best kept secrets — a deep purple fruit that grows wild along the lush Konkan coast of Maharashtra and Goa, and in the forests of Kerala and Karnataka. It is sour, fruity and intensely refreshing, and has been a staple of coastal Indian cooking and traditional medicine for as long as anyone can remember.\n\nThe kokum tree grows in tropical rainforest conditions close to the sea, producing fruit once a year that is hand-harvested and sun-dried by coastal farming communities who have built their livelihoods around it.\n\nDried kokum is used to add a distinctive fruity sourness to curries, lentils, fish dishes and chutneys as an alternative to tamarind. Amrut Kokum — dried kokum steeped in water with a touch of sugar and salt — is a traditional cooling summer drink in Maharashtra and Goa. As a digestive, it is drunk after heavy meals. Kokum butter, extracted from the seeds, is one of the finest natural moisturisers available. Non-greasy and deeply nourishing, it is used in lip balms, body butters and intensive skin treatments.',
    region: 'Konkan coast & Western Ghats',
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
    description:
      'The roses of India — Desi Gulab — are different. They produce a depth of scent that the commercial roses of Europe rarely match. These are not ornamental flowers grown for appearance. They are grown for their essence, their petals, their water — and they have been for centuries.\n\nIndia has one of the oldest traditions of rose distillation in the world, and the rose water and oil produced in Rajasthan and Uttar Pradesh remain among the finest available.\n\nRose water is used extensively in Indian sweets — gulab jamun, kheer, lassi — and in Middle Eastern and Persian cooking. It is used to flavour cold drinks, teas and desserts with a delicate floral note. Dried rose petals are brewed as a mild calming tea or added to herbal blends.\n\nRose water is one of the gentlest and most effective natural toners, used to hydrate, soothe and balance skin pH. Rose hip oil, distinct from rose petal products, is used in premium skincare for its high Vitamin A content and skin-regenerating properties.',
    region: 'Rajasthan & Uttar Pradesh',
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
    description:
      'Shatavari is one of Ayurveda\'s most revered herbs, sometimes called the queen of herbs for its particular association with women\'s health and hormonal balance across all life stages. Its name in Sanskrit translates roughly as "she who possesses a hundred husbands" — a reference to its traditional reputation for vitality and resilience. The roots are dried and ground into a fine pale powder that carries a mild, slightly sweet taste.\n\nShatavari powder is taken as a daily supplement mixed into warm milk, water or smoothies. It is traditionally used to support hormonal balance, reproductive health, lactation, digestion and general vitality. In Ayurvedic practice it is considered a rasayana — a rejuvenating tonic for long-term wellbeing rather than short-term relief.',
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
    description:
      'Kasturi Manjal is not the turmeric you cook with. It is a wild relative, rarer and far more potent in its skincare properties, that grows in the forests of South India — primarily Kerala, Tamil Nadu and Karnataka. Its rhizomes are smaller, darker and more aromatic than culinary turmeric, and unlike its common cousin it is not edible.\n\nIt has been used for centuries in South Indian bridal rituals — applied to the face and body as part of the pre-wedding skincare ceremony — and in traditional Ayurvedic preparations for its remarkable ability to brighten, even and clarify the skin. Used exclusively in skincare. Kasturi Manjal powder is mixed with milk, rose water or honey and applied as a face mask. It brightens uneven skin tone, reduces dark spots, calms inflammation and gives the skin a distinctive luminosity. Unlike common turmeric it does not stain the skin yellow.',
    region: 'Kerala, Tamil Nadu & Karnataka',
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
    description:
      'Amla is arguably the most nutrient-dense fruit in the world. Small, pale green and intensely tart, it contains one of the highest concentrations of Vitamin C found in any natural food — far exceeding oranges — in a form that remains stable even when dried or heated, which is unusual for Vitamin C.\n\nEaten fresh, pickled, dried, or as juice. Used in chutneys, jams and Ayurvedic formulas. Amla powder is added to smoothies, warm water or yoghurt as a daily wellness supplement known to support immunity, digestion and skin health from within. Amla oil is one of the most traditional hair treatments in India — used to strengthen hair, reduce greying and nourish the scalp. In powder form it is used in face masks and herbal hair washes.',
    region: 'India',
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
    name: 'Soap Berries (Reetha)',
    description:
      'Long before synthetic detergents existed, Indian households washed their clothes, hair and skin with the dried fruit of the soapberry tree. Reetha, as it is known across India, contains a natural compound called saponin that lathers gently in water and cleanses without stripping or irritating.\n\nThe soapberry trees grow in various parts of India.\n\nDried reetha shells are soaked in warm water to create a natural cleaning liquid used for laundry, hair washing and gentle skincare. It is especially popular as a shampoo for sensitive scalps and is widely used in Ayurvedic hair care. It is also used as a natural jewellery cleaner and gentle household detergent.',
    region: 'India',
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
  href: string
  type: string
  price: number
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'ubtan-face-scrub',
    name: 'Ubtan Face Scrub',
    description: 'Traditional Indian face scrub with natural exfoliating properties.',
    href: '/categories/turmeric/products/turmeric-powder',
    type: 'Face Scrub',
    price: 18.99
  },
  {
    id: 'gulkand-rose-marmalade',
    name: 'Gulkand Rose Marmalade',
    description: 'Delicious preserve with cooling and soothing properties.',
    href: '/categories/rose/products/rose-marmalade',
    type: 'Preserve',
    price: 24.99
  },
  {
    id: 'vetiver-water-sachet',
    name: 'Vetiver Root Sachet',
    description: 'Refreshing natural cooling sachet for water and home fragrancing.',
    href: '/categories/vetiver/products/vetiver-roots',
    type: 'Sachet',
    price: 24.99
  },
  {
    id: 'ayurvedic-ginger-shots',
    name: 'Ayurvedic Ginger Shots',
    description: 'Potent health booster made with traditional spices.',
    href: '/categories/turmeric/products/turmeric-powder',
    type: 'Health Shot',
    price: 18.99
  },
  {
    id: 'kasturi-face-care',
    name: 'Kasturi Manjal Face Care',
    description: 'Wild turmeric for brightening and anti-bacterial skin benefits.',
    href: '/categories/kasturi-manjal/products/kasturi-powder',
    type: 'Face Care',
    price: 19.99
  },
  {
    id: 'kokum-butter',
    name: 'Kokum Butter',
    description: 'Natural, rich moisturizer for deep hydration and skin care.',
    href: '/categories/kokum/products/kokum-butter',
    type: 'Body Butter',
    price: 22.99
  },
  {
    id: 'soap-berries-diy',
    name: 'Soap Berries DIY Kit',
    description: 'Make your own natural soap with whole soap berries.',
    href: '/categories/soap-berries/products/soap-berries-whole',
    type: 'DIY Kit',
    price: 16.99
  }
]

export function getFeaturedProducts(): FeaturedProduct[] {
  return featuredProducts
}
