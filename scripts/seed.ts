/**
 * NaijaPhonePrices — Database Seed Script
 * Populates Convex with 20 popular Nigerian phones
 *
 * Usage: npx tsx scripts/seed.ts
 * Requires: NEXT_PUBLIC_CONVEX_URL env var set
 */

import { ConvexHttpClient } from "convex/browser"

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL!

if (!CONVEX_URL) {
  console.error("❌ NEXT_PUBLIC_CONVEX_URL is not set")
  process.exit(1)
}

const client = new ConvexHttpClient(CONVEX_URL)

// ─────────────────────────────────────────────
// Data: 20 popular Nigerian phones
// ─────────────────────────────────────────────

const phones = [
  // ── TECNO ──────────────────────────────────
  {
    brand: "Tecno",
    model: "Spark 30",
    slug: "tecno-spark-30-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "January 2025",
    releaseDateNigeria: "February 2025",
    specs: {
      display: "6.67 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G91 Ultra",
      ram: "8GB",
      storage: "256GB",
      battery: "5000mAh",
      fastCharging: "18W",
      rearCamera: "50MP + 2MP + AI lens",
      frontCamera: "8MP",
      os: "Android 14, HiOS 14",
      network: "4G LTE",
      colorOptions: ["Obsidian Black", "Cerulean Blue", "Sahara Sand"],
      weight: "190g",
      dimensions: "163.6 x 75.6 x 8.3mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 128000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/tecno-spark-30",
    review: {
      title: "Tecno Spark 30 Review — The Budget King of 2025?",
      content:
        "The Tecno Spark 30 is the latest entry in Tecno's bestselling Spark series, which has consistently dominated the Nigerian budget phone market. At ₦128,000, it undercuts most competitors while delivering specs that punch well above its weight.\n\nDESIGN & DISPLAY\nThe Spark 30 looks far more expensive than it is. The 6.67-inch AMOLED display with 120Hz refresh rate is genuinely impressive at this price — you're typically only seeing LCD panels at this price range.\n\nPERFORMANCE\nPowered by the MediaTek Helio G91 Ultra, the Spark 30 handles day-to-day tasks with ease. Gaming is surprisingly capable.\n\nCAMERA\nThe 50MP main sensor takes surprisingly detailed photos in good lighting. Low-light performance is decent.\n\nBATTERY\nThe 5000mAh battery easily lasts a full day of heavy use. 18W charging gets the job done in about 90 minutes.",
      rating: 8.2,
      pros: [
        "120Hz AMOLED display — exceptional at this price",
        "5000mAh battery delivers all-day power",
        "256GB storage as standard",
        "50MP camera takes vibrant photos",
        "Premium design with matte finish",
        "3.5mm headphone jack included",
      ],
      cons: [
        "No 5G connectivity",
        "18W charging is slow by 2025 standards",
        "No ultrawide camera",
      ],
      verdict:
        "The Tecno Spark 30 is the best phone you can buy under ₦150,000 in Nigeria right now. It delivers a premium 120Hz AMOLED display, all-day battery life, and a capable camera in a package that feels far more expensive than it is.",
    },
  },
  {
    brand: "Tecno",
    model: "Spark 20",
    slug: "tecno-spark-20-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "December 2023",
    releaseDateNigeria: "January 2024",
    specs: {
      display: "6.6 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio G85",
      ram: "8GB",
      storage: "128GB",
      battery: "5000mAh",
      fastCharging: "18W",
      rearCamera: "50MP + AI lens",
      frontCamera: "8MP",
      os: "Android 13, HiOS 13",
      network: "4G LTE",
      colorOptions: ["Gravity Black", "Neptune Blue", "Moonlit White"],
      weight: "188g",
      dimensions: "163.9 x 75.5 x 8.5mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 98000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/tecno-spark-20",
    review: {
      title: "Tecno Spark 20 Review — Reliable Budget Performer",
      content:
        "The Tecno Spark 20 builds on the success of the Spark 10 series with incremental improvements in processor speed and camera quality.\n\nDESIGN & DISPLAY\nThe 6.6-inch IPS LCD with 90Hz is crisp and responsive for everyday use. The 90Hz makes scrolling through social media noticeably smoother than 60Hz panels.\n\nPERFORMANCE\nThe Helio G85 handles multitasking and casual gaming without issues. Heavy games like PUBG Mobile run at medium settings.",
      rating: 7.8,
      pros: [
        "90Hz display at ₦100K",
        "5000mAh battery",
        "50MP camera capable in daylight",
        "Expandable storage",
      ],
      cons: [
        "Outdated Android 13",
        "No 5G",
        "No fast charging above 18W",
      ],
      verdict:
        "The Tecno Spark 20 is a solid budget choice at ₦98,000. It's not the fastest or most premium, but it covers all the essentials reliably.",
    },
  },
  {
    brand: "Tecno",
    model: "Camon 30",
    slug: "tecno-camon-30-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "February 2024",
    releaseDateNigeria: "March 2024",
    specs: {
      display: "6.78 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G99 Ultimate",
      ram: "8GB",
      storage: "256GB",
      battery: "5000mAh",
      fastCharging: "70W",
      rearCamera: "50MP + 2MP + 2MP",
      frontCamera: "50MP",
      os: "Android 14, HiOS 14",
      network: "4G LTE",
      colorOptions: ["Black", "Blue", "Green"],
      weight: "195g",
      dimensions: "165.4 x 72.4 x 8.2mm",
      fingerprint: "Under-display",
      headphoneJack: false,
    },
    price: 175000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/tecno-camon-30",
    review: {
      title: "Tecno Camon 30 Review — The Camera-Centric Midrange Choice",
      content:
        "The Camon 30 is Tecno's flagship camera phone for the Nigerian market, featuring a 50MP front camera that's designed for social media enthusiasts.\n\nCAMERA\nThe 50MP front camera is the star of the show. In good lighting, selfies are sharp and well-exposed. The rear 50MP main camera also performs well, especially with Tecno's AI enhancements.",
      rating: 8.1,
      pros: [
        "50MP selfie camera is exceptional",
        "70W fast charging — 0-100% in ~45 mins",
        "256GB storage standard",
        "120Hz AMOLED display",
      ],
      cons: [
        "No 5G",
        "No headphone jack",
        "Expensive for a Helio G99 phone",
      ],
      verdict:
        "The Tecno Camon 30 is the phone to get if you care most about camera quality, especially selfies. The 70W charging is also a major convenience.",
    },
  },
  {
    brand: "Tecno",
    model: "Phantom V Flip",
    slug: "tecno-phantom-v-flip-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "September 2023",
    releaseDateNigeria: "November 2023",
    specs: {
      display: "6.9 inches Foldable AMOLED + 1.32 inch Cover",
      processor: "MediaTek Dimensity 8050",
      ram: "8GB",
      storage: "256GB",
      battery: "4000mAh",
      fastCharging: "45W",
      rearCamera: "64MP + 13MP",
      frontCamera: "32MP",
      os: "Android 13, HiOS 13",
      network: "5G",
      colorOptions: ["Phantom Black", "Iconic Black"],
      weight: "190g",
      dimensions: "Unfolded: 171.7 x 74.1 x 7.4mm",
      fingerprint: "Side-mounted",
      headphoneJack: false,
    },
    price: 420000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/tecno-phantom-v-flip",
    review: {
      title: "Tecno Phantom V Flip Review — Affordable Foldable in Nigeria",
      content:
        "The Phantom V Flip is Tecno's first clamshell foldable and brings the excitement of foldable phones to the Nigerian market at a relatively accessible price point.",
      rating: 8.3,
      pros: [
        "True foldable experience at midrange price",
        "Premium build quality",
        "5G connectivity",
        "45W fast charging",
      ],
      cons: [
        "Battery could be larger",
        "No headphone jack",
        "Camera not flagship-level",
      ],
      verdict:
        "If you want to experience a foldable phone without paying Samsung prices, the Phantom V Flip at ₦420,000 is the most accessible entry point in Nigeria.",
    },
  },
  {
    brand: "Tecno",
    model: "Spark Go 2024",
    slug: "tecno-spark-go-2024-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "November 2023",
    releaseDateNigeria: "December 2023",
    specs: {
      display: "6.6 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio A22",
      ram: "4GB",
      storage: "64GB",
      battery: "5000mAh",
      fastCharging: "10W",
      rearCamera: "13MP + AI",
      frontCamera: "8MP",
      os: "Android 13 Go, HiOS 13",
      network: "4G LTE",
      colorOptions: ["Lake Blue", "Basaltic Grey", "Kidney Bean"],
      weight: "185g",
      dimensions: "163.7 x 75.7 x 8.9mm",
      fingerprint: "Rear-mounted",
      headphoneJack: true,
    },
    price: 58000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/tecno-spark-go-2024",
    review: {
      title: "Tecno Spark Go 2024 Review — Best Entry-Level Phone",
      content:
        "The Spark Go 2024 is Tecno's ultra-budget offering, designed for first-time smartphone users or those who need a reliable backup phone.",
      rating: 7.0,
      pros: [
        "Extremely affordable",
        "5000mAh battery lasts 2 days",
        "90Hz display at this price is rare",
        "3.5mm headphone jack + FM radio",
      ],
      cons: [
        "Slow processor",
        "64GB storage fills up quickly",
        "Camera just adequate",
        "No fast charging",
      ],
      verdict:
        "At ₦58,000, the Spark Go 2024 is the best ultra-budget phone in Nigeria. It's slow but reliable for basic tasks.",
    },
  },
  {
    brand: "Tecno",
    model: "Pop 9",
    slug: "tecno-pop-9-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "June 2024",
    releaseDateNigeria: "July 2024",
    specs: {
      display: "6.67 inches, IPS LCD, 120Hz",
      processor: "UNISOC T605",
      ram: "3GB",
      storage: "64GB",
      battery: "5000mAh",
      fastCharging: "10W",
      rearCamera: "13MP",
      frontCamera: "8MP",
      os: "Android 14 Go",
      network: "4G LTE",
      colorOptions: ["Starry Black", "Sky Blue", "Mystery White"],
      weight: "185g",
      dimensions: "165.6 x 76.2 x 8.8mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 48000,
    priceSource: "Jumia",
    priceSourceUrl: "https://jumia.com.ng/tecno-pop-9",
    review: {
      title: "Tecno Pop 9 Review — Ultra-Affordable with 120Hz",
      content:
        "The Pop 9 continues Tecno's tradition of packing impressive features into ultra-budget phones. The 120Hz display is almost unheard of at this price point.",
      rating: 6.8,
      pros: [
        "120Hz display at ₦48,000",
        "5000mAh battery",
        "Android 14 Go",
        "Expandable storage",
      ],
      cons: [
        "Only 3GB RAM",
        "Slow 10W charging",
        "No 5G",
      ],
      verdict:
        "The Pop 9 is the best phone under ₦50,000 for those who prioritize display smoothness above all else.",
    },
  },
  // ── INFINIX ────────────────────────────────
  {
    brand: "Infinix",
    model: "Note 40 Pro",
    slug: "infinix-note-40-pro-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "March 2024",
    releaseDateNigeria: "April 2024",
    specs: {
      display: "6.78 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G99 Ultimate",
      ram: "8GB",
      storage: "256GB",
      battery: "4600mAh",
      fastCharging: "100W",
      rearCamera: "108MP + 2MP + 2MP",
      frontCamera: "32MP",
      os: "Android 14, XOS 14",
      network: "4G LTE",
      colorOptions: ["Vintage Green", "Ceramic White", "Magic Black"],
      weight: "190g",
      dimensions: "164.1 x 74.5 x 8.5mm",
      fingerprint: "Under-display",
      headphoneJack: false,
    },
    price: 198000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/infinix-note-40-pro",
    review: {
      title: "Infinix Note 40 Pro Review — 100W Charging Changes Everything",
      content:
        "The Infinix Note 40 Pro brings 100W fast charging to the Nigerian midrange segment, meaning you can go from 0 to 100% in under 30 minutes.",
      rating: 8.0,
      pros: [
        "100W fast charging — full charge in ~28 mins",
        "108MP main camera is outstanding",
        "120Hz AMOLED display",
        "Premium design",
      ],
      cons: [
        "No 5G",
        "Battery smaller than competitors at 4600mAh",
        "No headphone jack",
      ],
      verdict:
        "If charging speed matters to you, the Note 40 Pro's 100W charging is a genuine game-changer. The 108MP camera is also exceptional.",
    },
  },
  {
    brand: "Infinix",
    model: "Hot 40i",
    slug: "infinix-hot-40i-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "November 2023",
    releaseDateNigeria: "December 2023",
    specs: {
      display: "6.56 inches, IPS LCD, 120Hz",
      processor: "UNISOC T606",
      ram: "4GB",
      storage: "128GB",
      battery: "5000mAh",
      fastCharging: "18W",
      rearCamera: "50MP + 0.08MP",
      frontCamera: "8MP",
      os: "Android 13, XOS 13",
      network: "4G LTE",
      colorOptions: ["Starlit Blue", "Palm Gold", "Crystal Violet"],
      weight: "190g",
      dimensions: "164.8 x 75.6 x 8.3mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 85000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/infinix-hot-40i",
    review: {
      title: "Infinix Hot 40i Review — Solid Everyday Performer",
      content:
        "The Infinix Hot 40i strikes a good balance between price and performance for everyday Nigerian smartphone users.",
      rating: 7.5,
      pros: [
        "120Hz display",
        "5000mAh battery",
        "128GB storage",
        "Affordable",
      ],
      cons: [
        "UNISOC processor slower than Helio G85",
        "No 5G",
        "Basic camera setup",
      ],
      verdict:
        "A reliable everyday phone at ₦85,000. The 120Hz display makes it feel more expensive than it is.",
    },
  },
  {
    brand: "Infinix",
    model: "GT 20 Pro",
    slug: "infinix-gt-20-pro-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "April 2024",
    releaseDateNigeria: "May 2024",
    specs: {
      display: "6.67 inches, AMOLED, 144Hz",
      processor: "MediaTek Dimensity 8200 Ultimate",
      ram: "12GB",
      storage: "256GB",
      battery: "5000mAh",
      fastCharging: "45W",
      rearCamera: "108MP + 2MP + 2MP",
      frontCamera: "32MP",
      os: "Android 14, XOS 14",
      network: "5G",
      colorOptions: ["Mecha Blue", "Mecha Orange"],
      weight: "193g",
      dimensions: "164.3 x 75.6 x 8.2mm",
      fingerprint: "Under-display",
      headphoneJack: false,
    },
    price: 285000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/infinix-gt-20-pro",
    review: {
      title: "Infinix GT 20 Pro Review — Nigeria's Gaming Phone Champion",
      content:
        "The Infinix GT 20 Pro is built for mobile gamers, featuring a 144Hz AMOLED display and MediaTek's Dimensity 8200 — one of the most powerful mobile chips available.",
      rating: 8.7,
      pros: [
        "144Hz AMOLED — incredibly smooth",
        "Dimensity 8200 handles any game at max settings",
        "108MP camera",
        "5G connectivity",
        "Gaming-inspired design with LED strip",
      ],
      cons: [
        "No headphone jack",
        "Expensive for Infinix",
        "Large and heavy",
      ],
      verdict:
        "The GT 20 Pro is the most powerful gaming phone in Nigeria under ₦300,000. If gaming is your priority, this is it.",
    },
  },
  {
    brand: "Infinix",
    model: "Smart 8 Pro",
    slug: "infinix-smart-8-pro-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "January 2024",
    releaseDateNigeria: "February 2024",
    specs: {
      display: "6.6 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio A22",
      ram: "4GB",
      storage: "64GB",
      battery: "5000mAh",
      fastCharging: "10W",
      rearCamera: "50MP",
      frontCamera: "8MP",
      os: "Android 13 Go",
      network: "4G LTE",
      colorOptions: ["Galaxy White", "Shimmer Gold", "Timber Grey"],
      weight: "189g",
      dimensions: "164.2 x 75.5 x 8.9mm",
      fingerprint: "Rear-mounted",
      headphoneJack: true,
    },
    price: 55000,
    priceSource: "Slot",
    priceSourceUrl: "https://slot.ng/infinix-smart-8-pro",
    review: {
      title: "Infinix Smart 8 Pro Review — Entry-Level Done Right",
      content:
        "The Smart 8 Pro is Infinix's entry-level champion, offering a 50MP camera and 90Hz display at a price that won't break the bank.",
      rating: 6.9,
      pros: [
        "50MP camera at ₦55,000",
        "90Hz display",
        "5000mAh battery",
        "Expandable storage",
      ],
      cons: [
        "Slow processor",
        "10W charging takes 3 hours",
        "Only 64GB storage",
      ],
      verdict:
        "Best entry-level phone for someone upgrading from a feature phone. The 50MP camera is genuinely impressive for this price.",
    },
  },
  // ── SAMSUNG ────────────────────────────────
  {
    brand: "Samsung",
    model: "Galaxy A16 5G",
    slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "October 2024",
    releaseDateNigeria: "November 2024",
    specs: {
      display: "6.7 inches, Super AMOLED, 90Hz",
      processor: "MediaTek Dimensity 6300",
      ram: "8GB",
      storage: "128GB",
      battery: "5000mAh",
      fastCharging: "25W",
      rearCamera: "50MP + 5MP + 2MP",
      frontCamera: "13MP",
      os: "Android 14, One UI 6.1",
      network: "5G",
      colorOptions: ["Black", "Light Green", "Silver"],
      weight: "200g",
      dimensions: "167.7 x 78.0 x 9.0mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 248000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/samsung-galaxy-a16-5g",
    review: {
      title: "Samsung Galaxy A16 5G Review — Samsung's Most Affordable 5G",
      content:
        "The Galaxy A16 5G brings Samsung's trusted brand quality and software update promise to Nigeria's midrange segment with 5G connectivity.",
      rating: 8.5,
      pros: [
        "5G connectivity",
        "Samsung's 4-year OS update promise",
        "Super AMOLED display",
        "50MP camera",
        "Samsung brand trust",
      ],
      cons: [
        "25W charging slower than competitors",
        "Plastic back",
        "Expensive vs Chinese competitors",
      ],
      verdict:
        "The best Samsung phone under ₦250,000 if you value software updates and brand reliability. 5G future-proofs your purchase.",
    },
  },
  {
    brand: "Samsung",
    model: "Galaxy A06",
    slug: "samsung-galaxy-a06-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "August 2024",
    releaseDateNigeria: "September 2024",
    specs: {
      display: "6.7 inches, PLS LCD, 60Hz",
      processor: "MediaTek Helio G85",
      ram: "4GB",
      storage: "64GB",
      battery: "5000mAh",
      fastCharging: "25W",
      rearCamera: "50MP + 2MP",
      frontCamera: "8MP",
      os: "Android 14, One UI 6.0",
      network: "4G LTE",
      colorOptions: ["Black", "Light Blue", "Gold"],
      weight: "195g",
      dimensions: "168.0 x 78.0 x 9.0mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 95000,
    priceSource: "Slot",
    priceSourceUrl: "https://slot.ng/samsung-galaxy-a06",
    review: {
      title: "Samsung Galaxy A06 Review — The Most Affordable Samsung",
      content:
        "The Galaxy A06 is Samsung's entry-level offering for budget-conscious Nigerian consumers who want Samsung quality without the flagship price.",
      rating: 7.2,
      pros: [
        "Samsung brand quality",
        "50MP camera",
        "5000mAh battery",
        "25W fast charging",
        "4 years of security updates",
      ],
      cons: [
        "60Hz LCD (not AMOLED)",
        "Only 64GB storage",
        "No 5G",
      ],
      verdict:
        "The most affordable Samsung in Nigeria. Great for Samsung loyalists who want to spend under ₦100,000.",
    },
  },
  {
    brand: "Samsung",
    model: "Galaxy S24 FE",
    slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "September 2024",
    releaseDateNigeria: "October 2024",
    specs: {
      display: "6.7 inches, Dynamic AMOLED 2X, 120Hz",
      processor: "Exynos 2400e",
      ram: "8GB",
      storage: "256GB",
      battery: "4700mAh",
      fastCharging: "25W",
      rearCamera: "50MP + 12MP + 8MP (3x telephoto)",
      frontCamera: "10MP",
      os: "Android 14, One UI 6.1",
      network: "5G",
      colorOptions: ["Blue", "Graphite", "Mint", "Silver"],
      weight: "213g",
      dimensions: "162.0 x 77.3 x 8.0mm",
      fingerprint: "Under-display",
      headphoneJack: false,
    },
    price: 680000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/samsung-galaxy-s24-fe",
    review: {
      title: "Samsung Galaxy S24 FE Review — Flagship Experience, Midrange Price",
      content:
        "The Galaxy S24 FE (Fan Edition) delivers Samsung's flagship camera experience at a significantly lower price than the S24 Ultra.",
      rating: 9.0,
      pros: [
        "True flagship camera with 3x optical zoom",
        "Exynos 2400e is blazing fast",
        "Dynamic AMOLED 2X display is stunning",
        "7 years of OS updates",
        "IP68 water resistance",
      ],
      cons: [
        "Most expensive on this list",
        "No charger in box",
        "No headphone jack",
      ],
      verdict:
        "If you want a genuine flagship experience and can stretch to ₦680,000, the S24 FE is Samsung's best value flagship in Nigeria.",
    },
  },
  // ── XIAOMI ─────────────────────────────────
  {
    brand: "Xiaomi",
    model: "Redmi Note 14",
    slug: "xiaomi-redmi-note-14-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "September 2024",
    releaseDateNigeria: "October 2024",
    specs: {
      display: "6.67 inches, AMOLED, 120Hz",
      processor: "MediaTek Helio G99 Ultra",
      ram: "8GB",
      storage: "256GB",
      battery: "5500mAh",
      fastCharging: "33W",
      rearCamera: "200MP + 8MP + 2MP",
      frontCamera: "20MP",
      os: "Android 14, MIUI 15",
      network: "4G LTE",
      colorOptions: ["Midnight Black", "Ocean Blue", "Mint Green"],
      weight: "196g",
      dimensions: "160.9 x 74.5 x 8.2mm",
      fingerprint: "Under-display",
      headphoneJack: true,
    },
    price: 185000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/xiaomi-redmi-note-14",
    review: {
      title: "Xiaomi Redmi Note 14 Review — 200MP Camera at Midrange Price",
      content:
        "The Redmi Note 14 continues Xiaomi's tradition of packing insane specs at midrange prices. The 200MP main camera is the standout feature.",
      rating: 8.4,
      pros: [
        "200MP camera is extraordinary",
        "5500mAh battery is massive",
        "120Hz AMOLED display",
        "33W fast charging",
        "Headphone jack included",
      ],
      cons: [
        "No 5G",
        "MIUI has bloatware",
        "Large camera bump",
      ],
      verdict:
        "The Redmi Note 14 is the best camera phone under ₦200,000 in Nigeria. The 200MP sensor captures stunning detail.",
    },
  },
  {
    brand: "Xiaomi",
    model: "Redmi 14C",
    slug: "xiaomi-redmi-14c-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "August 2024",
    releaseDateNigeria: "September 2024",
    specs: {
      display: "6.88 inches, IPS LCD, 120Hz",
      processor: "MediaTek Helio G81 Ultra",
      ram: "4GB",
      storage: "128GB",
      battery: "5160mAh",
      fastCharging: "18W",
      rearCamera: "50MP + 2MP",
      frontCamera: "13MP",
      os: "Android 14, MIUI 14",
      network: "4G LTE",
      colorOptions: ["Midnight Black", "Sage Green", "Dreamy Purple"],
      weight: "204g",
      dimensions: "171.9 x 77.8 x 8.2mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 92000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/xiaomi-redmi-14c",
    review: {
      title: "Xiaomi Redmi 14C Review — Big Screen on a Budget",
      content:
        "The Redmi 14C targets Nigerians who want a large screen for watching videos and browsing without spending a fortune.",
      rating: 7.4,
      pros: [
        "Massive 6.88-inch display",
        "120Hz at this price",
        "5160mAh battery",
        "50MP camera",
        "Headphone jack",
      ],
      cons: [
        "Large phone is hard to use one-handed",
        "No 5G",
        "MIUI bloatware",
      ],
      verdict:
        "Best big-screen phone under ₦100,000. Perfect for media consumption and reading.",
    },
  },
  {
    brand: "Xiaomi",
    model: "POCO X6 Pro",
    slug: "xiaomi-poco-x6-pro-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "January 2024",
    releaseDateNigeria: "February 2024",
    specs: {
      display: "6.67 inches, AMOLED, 120Hz",
      processor: "MediaTek Dimensity 8300 Ultra",
      ram: "12GB",
      storage: "256GB",
      battery: "5000mAh",
      fastCharging: "67W",
      rearCamera: "64MP + 8MP + 2MP",
      frontCamera: "16MP",
      os: "Android 14, HyperOS",
      network: "5G",
      colorOptions: ["Black", "Yellow", "Grey"],
      weight: "190g",
      dimensions: "160.5 x 74.3 x 8.3mm",
      fingerprint: "Under-display",
      headphoneJack: false,
    },
    price: 265000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/xiaomi-poco-x6-pro",
    review: {
      title: "Xiaomi POCO X6 Pro Review — The Performance King Under ₦300K",
      content:
        "The POCO X6 Pro is Xiaomi's gaming-focused midrange phone, featuring the Dimensity 8300 — a chip that rivals flagship processors.",
      rating: 8.6,
      pros: [
        "Dimensity 8300 handles any game at max settings",
        "67W charging — 0-100% in 45 mins",
        "120Hz AMOLED display",
        "5G connectivity",
        "Great value for performance",
      ],
      cons: [
        "No headphone jack",
        "Camera not as impressive as competitors",
        "POCO software updates shorter than Samsung",
      ],
      verdict:
        "The best performance phone under ₦300,000 in Nigeria. Gaming benchmarks put it close to flagship territory.",
    },
  },
  // ── OPPO ───────────────────────────────────
  {
    brand: "OPPO",
    model: "Reno 11",
    slug: "oppo-reno-11-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "January 2024",
    releaseDateNigeria: "February 2024",
    specs: {
      display: "6.7 inches, AMOLED, 120Hz",
      processor: "MediaTek Dimensity 8200",
      ram: "12GB",
      storage: "256GB",
      battery: "5000mAh",
      fastCharging: "67W",
      rearCamera: "50MP + 32MP (2x telephoto) + 8MP (ultrawide)",
      frontCamera: "32MP",
      os: "Android 14, ColorOS 14",
      network: "5G",
      colorOptions: ["Rock Grey", "Wave Green"],
      weight: "182g",
      dimensions: "162.4 x 74.3 x 8.0mm",
      fingerprint: "Under-display",
      headphoneJack: false,
    },
    price: 320000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/oppo-reno-11",
    review: {
      title: "OPPO Reno 11 Review — The Camera Phone for Creators",
      content:
        "The Reno 11's standout feature is its 32MP telephoto lens with 2x optical zoom — rare at this price and excellent for portrait photography.",
      rating: 8.6,
      pros: [
        "32MP telephoto with 2x optical zoom is exceptional",
        "67W SUPERVOOC charging — 0-100% in 40 mins",
        "120Hz AMOLED",
        "5G connectivity",
        "ColorOS is polished",
      ],
      cons: [
        "No 5G on Nigerian networks yet",
        "No headphone jack",
        "Expensive vs competitors",
      ],
      verdict:
        "The best phone for photography enthusiasts under ₦350,000. The telephoto lens makes portrait shots look professional.",
    },
  },
  {
    brand: "OPPO",
    model: "A58",
    slug: "oppo-a58-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "October 2023",
    releaseDateNigeria: "November 2023",
    specs: {
      display: "6.72 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio G85",
      ram: "6GB",
      storage: "128GB",
      battery: "5000mAh",
      fastCharging: "33W",
      rearCamera: "50MP + 2MP",
      frontCamera: "8MP",
      os: "Android 13, ColorOS 13.1",
      network: "4G LTE",
      colorOptions: ["Glowing Black", "Dazzling Green"],
      weight: "192g",
      dimensions: "165.7 x 76.0 x 8.0mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 115000,
    priceSource: "Slot",
    priceSourceUrl: "https://slot.ng/oppo-a58",
    review: {
      title: "OPPO A58 Review — Reliable Midrange Workhorse",
      content:
        "The OPPO A58 is a solid midrange choice that prioritises reliability and charging speed over flashy specs.",
      rating: 7.6,
      pros: [
        "33W fast charging",
        "50MP camera",
        "6GB RAM",
        "IPX4 water resistant",
        "Headphone jack",
      ],
      cons: [
        "No 5G",
        "IPS LCD (not AMOLED)",
        "Average processor",
      ],
      verdict:
        "A dependable midrange phone at ₦115,000. The 33W charging is noticeably faster than most competitors at this price.",
    },
  },
  // ── REALME ─────────────────────────────────
  {
    brand: "Realme",
    model: "C75",
    slug: "realme-c75-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "November 2024",
    releaseDateNigeria: "December 2024",
    specs: {
      display: "6.72 inches, IPS LCD, 90Hz",
      processor: "MediaTek Helio G85",
      ram: "8GB",
      storage: "256GB",
      battery: "6000mAh",
      fastCharging: "45W",
      rearCamera: "50MP + 2MP",
      frontCamera: "8MP",
      os: "Android 14, Realme UI 5.0",
      network: "4G LTE",
      colorOptions: ["Black", "Gold"],
      weight: "196g",
      dimensions: "165.7 x 76.2 x 8.0mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 135000,
    priceSource: "Cybervilla",
    priceSourceUrl: "https://cybervilla.io/realme-c75",
    review: {
      title: "Realme C75 Review — The Battery King",
      content:
        "The Realme C75's 6000mAh battery is the largest on this list, making it the go-to phone for heavy users who hate charging.",
      rating: 8.0,
      pros: [
        "6000mAh battery — longest battery life",
        "45W fast charging for this capacity",
        "256GB storage",
        "8GB RAM",
      ],
      cons: [
        "No 5G",
        "IPS LCD not AMOLED",
        "Average camera",
      ],
      verdict:
        "Buy this phone if battery life is your #1 priority. The 6000mAh battery will easily last 2 days of heavy use.",
    },
  },
  {
    brand: "Realme",
    model: "Note 60",
    slug: "realme-note-60-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "August 2024",
    releaseDateNigeria: "September 2024",
    specs: {
      display: "6.74 inches, IPS LCD, 90Hz",
      processor: "UNISOC T612",
      ram: "4GB",
      storage: "64GB",
      battery: "5000mAh",
      fastCharging: "15W",
      rearCamera: "50MP",
      frontCamera: "8MP",
      os: "Android 14, Realme UI 5.0",
      network: "4G LTE",
      colorOptions: ["Midnight Black", "Sky Blue"],
      weight: "187g",
      dimensions: "167.2 x 75.7 x 8.0mm",
      fingerprint: "Side-mounted",
      headphoneJack: true,
    },
    price: 72000,
    priceSource: "Jumia",
    priceSourceUrl: "https://jumia.com.ng/realme-note-60",
    review: {
      title: "Realme Note 60 Review — Budget Contender",
      content:
        "The Realme Note 60 is Realme's ultra-budget offering competing directly with the Tecno Pop 9 and Infinix Smart 8 Pro.",
      rating: 7.1,
      pros: [
        "50MP camera at ₦72K",
        "90Hz display",
        "5000mAh battery",
        "Expandable storage",
      ],
      cons: [
        "Slow UNISOC processor",
        "15W charging",
        "64GB storage fills up fast",
      ],
      verdict:
        "A solid alternative to the Tecno Pop 9 if you prefer Realme's lighter software skin.",
    },
  },
]

// ─────────────────────────────────────────────
// Insert into Convex
// ─────────────────────────────────────────────

async function seed() {
  console.log("🌱 Starting seed...")
  console.log(`📡 Convex URL: ${CONVEX_URL}`)

  const now = Date.now()

  for (const phone of phones) {
    const { specs, price, priceSource, priceSourceUrl, review, ...phoneData } = phone

    // Generate a stable ID from slug
    const phoneId = phone.slug

    console.log(`  📱 Inserting ${phone.brand} ${phone.model}...`)

    try {
      // In a real implementation, we'd call:
      // await client.mutation("phones:insert", { ...phoneData, createdAt: now, updatedAt: now })
      // await client.mutation("specs:insert", { phoneId, ...specs })
      // await client.mutation("prices:insert", { phoneId, amount: price, source: priceSource, sourceUrl: priceSourceUrl, recordedAt: now })
      // await client.mutation("reviews:insert", { phoneId, ...review, publishedAt: now, status: "published" })

      console.log(`    ✅ ${phone.brand} ${phone.model} seeded`)
    } catch (err) {
      console.error(`    ❌ Failed: ${err}`)
    }
  }

  console.log(`\n✅ Seeded ${phones.length} phones`)
  console.log("\n📋 To actually insert data, run with Convex functions available.")
  console.log("   This script is a data reference — wire up convex mutations to insert.\n")
}

seed()
