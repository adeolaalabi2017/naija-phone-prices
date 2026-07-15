// Static phone data for index/listing pages
// This mirrors the Convex seed data so index pages can render server-side

export interface PhoneListing {
  brand: string
  model: string
  slug: string
  price: number
  priceRange?: string
  imageUrl?: string
  rating?: number
  specs: {
    ram: string
    storage: string
    battery: string
    display: string
  }
}

export const databasePhones: PhoneListing[] = [
  { brand: "Tecno", model: "Spark 30 Pro", slug: "tecno-spark-30-price-nigeria-specs-review", price: 240000, imageUrl: "/thumbs/tecno-spark-30-price-nigeria-specs-review.webp", rating: 8.2, specs: { ram: "8GB", storage: "256GB", battery: "5000mAh", display: "6.67 inches, AMOLED, 120Hz" } },
  { brand: "Tecno", model: "Spark 20", slug: "tecno-spark-20-price-nigeria-specs-review", price: 259999, imageUrl: "/thumbs/tecno-spark-20-price-nigeria-specs-review.webp", rating: 7.8, specs: { ram: "8GB", storage: "256GB", battery: "5000mAh", display: "6.6 inches, IPS LCD, 90Hz" } },
  { brand: "Tecno", model: "Camon 30", slug: "tecno-camon-30-price-nigeria-specs-review", price: 409999, imageUrl: "/thumbs/tecno-camon-30-price-nigeria-specs-review.webp", rating: 8.1, specs: { ram: "12GB", storage: "256GB", battery: "5000mAh", display: "6.78 inches, AMOLED, 120Hz" } },
  { brand: "Tecno", model: "Phantom V Flip2 5G", slug: "tecno-phantom-v-flip-price-nigeria-specs-review", price: 0, priceRange: "₦869,500–₦1,053,285", imageUrl: "/thumbs/tecno-phantom-v-flip-price-nigeria-specs-review.webp", specs: { ram: "8GB", storage: "256GB", battery: "4000mAh", display: "6.9 inches, Foldable AMOLED, 120Hz" } },
  { brand: "Tecno", model: "Spark Go 2024", slug: "tecno-spark-go-2024-price-nigeria-specs-review", price: 0, priceRange: "₦141,400", imageUrl: "/thumbs/tecno-spark-go-2024-price-nigeria-specs-review.webp", specs: { ram: "3GB", storage: "64GB", battery: "5000mAh", display: "6.6 inches, IPS LCD, 90Hz" } },
  { brand: "Tecno", model: "Pop 9", slug: "tecno-pop-9-price-nigeria-specs-review", price: 165000, imageUrl: "/thumbs/tecno-pop-9-price-nigeria-specs-review.webp", specs: { ram: "3GB", storage: "128GB", battery: "5000mAh", display: "6.67 inches, IPS LCD, 90Hz" } },
  { brand: "Infinix", model: "Note 40 Pro", slug: "infinix-note-40-pro-price-nigeria-specs-review", price: 469999, imageUrl: "/thumbs/infinix-note-40-pro-price-nigeria-specs-review.webp", rating: 8.0, specs: { ram: "8GB", storage: "256GB", battery: "4600mAh", display: "6.78 inches, AMOLED, 120Hz" } },
  { brand: "Infinix", model: "Hot 40i", slug: "infinix-hot-40i-price-nigeria-specs-review", price: 259999, imageUrl: "/thumbs/infinix-hot-40i-price-nigeria-specs-review.webp", specs: { ram: "8GB", storage: "128GB", battery: "5000mAh", display: "6.56 inches, IPS LCD, 90Hz" } },
  { brand: "Infinix", model: "GT 20 Pro", slug: "infinix-gt-20-pro-price-nigeria-specs-review", price: 0, priceRange: "₦366,000–₦685,000", imageUrl: "/thumbs/infinix-gt-20-pro-price-nigeria-specs-review.webp", rating: 8.7, specs: { ram: "12GB", storage: "256GB", battery: "5000mAh", display: "6.67 inches, AMOLED, 144Hz" } },
  { brand: "Infinix", model: "Smart 8", slug: "infinix-smart-8-pro-price-nigeria-specs-review", price: 131999, imageUrl: "/thumbs/infinix-smart-8-pro-price-nigeria-specs-review.webp", specs: { ram: "3GB", storage: "64GB", battery: "5000mAh", display: "6.6 inches, IPS LCD, 90Hz" } },
  { brand: "Samsung", model: "Galaxy A16 5G", slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review", price: 309999, imageUrl: "/thumbs/samsung-galaxy-a16-5g-price-nigeria-specs-review.webp", rating: 8.5, specs: { ram: "4GB", storage: "128GB", battery: "5000mAh", display: "6.7 inches, Super AMOLED, 90Hz" } },
  { brand: "Samsung", model: "Galaxy A06", slug: "samsung-galaxy-a06-price-nigeria-specs-review", price: 118960, imageUrl: "/thumbs/samsung-galaxy-a06-price-nigeria-specs-review.webp", specs: { ram: "4GB", storage: "64GB", battery: "5000mAh", display: "6.7 inches, PLS LCD, 60Hz" } },
  { brand: "Samsung", model: "Galaxy S24 FE", slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review", price: 980000, imageUrl: "/thumbs/samsung-galaxy-s24-fe-price-nigeria-specs-review.webp", rating: 9.0, specs: { ram: "8GB", storage: "256GB", battery: "4700mAh", display: "6.7 inches, Dynamic AMOLED 2X, 120Hz" } },
  { brand: "Xiaomi", model: "Redmi Note 14", slug: "xiaomi-redmi-note-14-price-nigeria-specs-review", price: 349999, imageUrl: "/thumbs/xiaomi-redmi-note-14-price-nigeria-specs-review.webp", rating: 8.4, specs: { ram: "6GB", storage: "128GB", battery: "5110mAh", display: "6.67 inches, AMOLED, 120Hz" } },
  { brand: "Xiaomi", model: "Redmi 14C", slug: "xiaomi-redmi-14c-price-nigeria-specs-review", price: 245000, imageUrl: "/thumbs/xiaomi-redmi-14c-price-nigeria-specs-review.webp", specs: { ram: "8GB", storage: "256GB", battery: "5160mAh", display: "6.88 inches, IPS LCD, 120Hz" } },
  { brand: "Xiaomi", model: "POCO X6 Pro", slug: "xiaomi-poco-x6-pro-price-nigeria-specs-review", price: 669999, imageUrl: "/thumbs/xiaomi-poco-x6-pro-price-nigeria-specs-review.webp", rating: 8.6, specs: { ram: "12GB", storage: "512GB", battery: "5000mAh", display: "6.67 inches, AMOLED, 120Hz" } },
  { brand: "OPPO", model: "Reno 11 Pro", slug: "oppo-reno-11-price-nigeria-specs-review", price: 0, priceRange: "₦160,000–₦460,000", imageUrl: "/thumbs/oppo-reno-11-price-nigeria-specs-review.webp", rating: 8.6, specs: { ram: "8GB", storage: "256GB", battery: "5000mAh", display: "6.7 inches, AMOLED, 120Hz" } },
  { brand: "OPPO", model: "A58", slug: "oppo-a58-price-nigeria-specs-review", price: 0, priceRange: "₦188,000–₦416,000", imageUrl: "/thumbs/oppo-a58-price-nigeria-specs-review.webp", specs: { ram: "8GB", storage: "128GB", battery: "5000mAh", display: "6.72 inches, IPS LCD, 90Hz" } },
  { brand: "Realme", model: "C75", slug: "realme-c75-price-nigeria-specs-review", price: 260499, imageUrl: "/thumbs/realme-c75-price-nigeria-specs-review.webp", rating: 8.0, specs: { ram: "8GB", storage: "128GB", battery: "6000mAh", display: "6.72 inches, IPS LCD, 90Hz" } },
  { brand: "Realme", model: "Note 60", slug: "realme-note-60-price-nigeria-specs-review", price: 0, priceRange: "₦80,000–₦160,000", imageUrl: "/thumbs/realme-note-60-price-nigeria-specs-review.webp", specs: { ram: "4GB", storage: "64GB", battery: "5000mAh", display: "6.74 inches, IPS LCD, 90Hz" } },
  { brand: "Apple", model: "iPhone SE", slug: "apple-iphone-se-2025-price-nigeria-specs-review", price: 0, priceRange: "—", specs: { ram: "6GB", storage: "128GB", battery: "2018mAh", display: "4.7 inches, Retina IPS LCD, 60Hz" } },
  { brand: "Apple", model: "iPhone 16", slug: "apple-iphone-16-price-nigeria-specs-review", price: 1195000, imageUrl: "/thumbs/apple-iphone-16-price-nigeria-specs-review.webp", rating: 9.2, specs: { ram: "8GB", storage: "128GB", battery: "3561mAh", display: "6.1 inches, Super Retina XDR OLED, 60Hz" } },
]

export interface ArticleListing {
  title: string
  slug: string
  excerpt: string
  type: string
  author: string
}

export const databaseArticles: ArticleListing[] = [
  {
    title: "Budget Phones in Nigeria: Verified Partner-Store Reality Check",
    slug: "best-phone-under-50000-naira-nigeria",
    excerpt: "Jumia, Konga, and Pointek don’t currently show exact new-phone listings under ₦50,000 in our checks, so the honest answer is to stretch the budget.",
    type: "buying_guide",
    author: "Adeola Alabi",
  },
  {
    title: "Best 5G Phones in Nigeria: Verified Partner-Store Options (2026)",
    slug: "best-5g-phones-nigeria-2026",
    excerpt: "Partner-store checks show 5G is available, but the real entry point starts around ₦309,999 on Jumia.",
    type: "buying_guide",
    author: "Adeola Alabi",
  },
  {
    title: "Tecno Spark 30 Pro vs Infinix Hot 40i — Partner-Store Price Check",
    slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria",
    excerpt: "A direct comparison using exact Jumia Nigeria listings.",
    type: "comparison",
    author: "Adeola Alabi",
  },
]

export interface ReviewListing {
  phoneBrand: string
  phoneModel: string
  phoneSlug: string
  title: string
  rating: number
  verdict: string
  author: string
  price?: number
}

export const databaseReviews: ReviewListing[] = [
  { phoneBrand: "Tecno", phoneModel: "Spark 30 Pro", phoneSlug: "tecno-spark-30-price-nigeria-specs-review", title: "Tecno Spark 30 Pro Review — Best Value in Its Class", rating: 8.2, verdict: "At ₦240,000 on Jumia Nigeria, the Spark 30 Pro is a convincing pick if you want a budget-friendly phone with a more premium feel than the cheapest options.", author: "Adeola Alabi", price: 240000 },
  { phoneBrand: "Tecno", phoneModel: "Spark 20", phoneSlug: "tecno-spark-20-price-nigeria-specs-review", title: "Tecno Spark 20 Review — Solid Budget Performer", rating: 7.8, verdict: "A solid budget option that gets the basics right without breaking the bank.", author: "Adeola Alabi", price: 259999 },
  { phoneBrand: "Tecno", phoneModel: "Camon 30", phoneSlug: "tecno-camon-30-price-nigeria-specs-review", title: "Tecno Camon 30 Review — Premium Midrange Contender", rating: 8.1, verdict: "An impressive midrange phone with flagship-level charging speed.", author: "Adeola Alabi", price: 409999 },
  { phoneBrand: "Infinix", phoneModel: "Note 40 Pro", phoneSlug: "infinix-note-40-pro-price-nigeria-specs-review", title: "Infinix Note 40 Pro Review — 100W Charging is a Game Changer", rating: 8.0, verdict: "100W charging alone makes this phone worth considering.", author: "Adeola Alabi", price: 469999 },
  { phoneBrand: "Infinix", phoneModel: "GT 20 Pro", phoneSlug: "infinix-gt-20-pro-price-nigeria-specs-review", title: "Infinix GT 20 Pro Review — The Gaming Phone That Won't Break the Bank", rating: 8.7, verdict: "The best gaming phone under ₦400,000 in Nigeria.", author: "Adeola Alabi" },
  { phoneBrand: "Samsung", phoneModel: "Galaxy A16 5G", phoneSlug: "samsung-galaxy-a16-5g-price-nigeria-specs-review", title: "Samsung Galaxy A16 5G Review — 5G for the Masses", rating: 8.5, verdict: "The best Samsung phone you can buy in Nigeria under ₦300,000.", author: "Adeola Alabi", price: 309999 },
  { phoneBrand: "Samsung", phoneModel: "Galaxy S24 FE", phoneSlug: "samsung-galaxy-s24-fe-price-nigeria-specs-review", title: "Samsung Galaxy S24 FE Review — The Affordable Flagship", rating: 9.0, verdict: "The best Android phone in Nigeria under ₦1,000,000.", author: "Adeola Alabi", price: 980000 },
  { phoneBrand: "Xiaomi", phoneModel: "Redmi Note 14", phoneSlug: "xiaomi-redmi-note-14-price-nigeria-specs-review", title: "Xiaomi Redmi Note 14 Review — 200MP on a Budget", rating: 8.4, verdict: "Best camera phone under ₦250,000 in Nigeria.", author: "Adeola Alabi", price: 349999 },
  { phoneBrand: "Xiaomi", phoneModel: "POCO X6 Pro", phoneSlug: "xiaomi-poco-x6-pro-price-nigeria-specs-review", title: "POCO X6 Pro Review — The Performance King", rating: 8.6, verdict: "Best performance phone under ₦400,000.", author: "Adeola Alabi", price: 669999 },
  { phoneBrand: "OPPO", phoneModel: "Reno 11", phoneSlug: "oppo-reno-11-price-nigeria-specs-review", title: "OPPO Reno 11 Review — Portrait Photography Expert", rating: 8.6, verdict: "Best portrait camera phone in Nigeria under ₦400,000.", author: "Adeola Alabi" },
  { phoneBrand: "Realme", phoneModel: "C75", phoneSlug: "realme-c75-price-nigeria-specs-review", title: "Realme C75 Review — 6000mAh Battery Beast", rating: 8.0, verdict: "Best battery life phone under ₦150,000 in Nigeria.", author: "Adeola Alabi", price: 260499 },
  { phoneBrand: "Apple", phoneModel: "iPhone 16", phoneSlug: "apple-iphone-16-price-nigeria-specs-review", title: "iPhone 16 Review — The AI iPhone Arrives", rating: 9.2, verdict: "Best iPhone for most people in Nigeria.", author: "Adeola Alabi", price: 1195000 },
]

export interface ComparisonListing {
  title: string
  slug: string
  excerpt: string
  brands: string[]
}

export const databaseComparisons: ComparisonListing[] = [
  {
    title: "Tecno Spark 30 Pro vs Infinix Hot 40i — Which Should You Buy?",
    slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria",
    excerpt: "Two of Nigeria's most popular budget phones face off. We put the Tecno Spark 30 and Infinix Hot 40i head-to-head.",
    brands: ["Tecno", "Infinix"],
  },
]
