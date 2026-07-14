import { PhoneDetailClient } from "./PhoneDetailClient"

// Static data for the device page — in production this comes from Convex
const PHONE_DATA = {
  phone: {
    brand: "Tecno",
    model: "Spark 30",
    slug: "tecno-spark-30-price-nigeria-specs-review",
    status: "current",
    imageUrl: "",
    announcedDate: "January 2025",
    releaseDateNigeria: "February 2025",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  specs: {
    display: "6.67 inches, AMOLED, 120Hz",
    processor: "MediaTek Helio G91 Ultra",
    ram: "8GB (expandable to 16GB)",
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
  latestPrice: {
    amount: 128000,
    source: "Cybervilla",
    sourceUrl: "https://cybervilla.io/tecno-spark-30",
    recordedAt: Date.now(),
  },
  review: {
    title: "Tecno Spark 30 Review — The Budget King of 2025?",
    content: `The Tecno Spark 30 is the latest entry in Tecno's bestselling Spark series, which has consistently dominated the Nigerian budget phone market. At ₦128,000, it undercuts most competitors while delivering specs that punch well above its weight.

DESIGN & DISPLAY
The Spark 30 looks far more expensive than it is. The 6.67-inch AMOLED display with 120Hz refresh rate is genuinely impressive at this price — you're typically only seeing LCD panels at this price range. Colours are punchy, blacks are deep, and the 120Hz makes scrolling through social media buttery smooth.

The back panel has a premium matte finish that resists fingerprints, and the camera module is sleekly integrated into the design. At 190g, it has a solid, reassuring heft without being heavy.

PERFORMANCE
Powered by the MediaTek Helio G91 Ultra, the Spark 30 handles day-to-day tasks with ease. Apps open quickly, multitasking is smooth, and gaming is surprisingly capable. PUBG Mobile runs at medium settings without frame drops, and Call of Duty: Mobile is playable at low-medium settings.

The 8GB RAM (with virtual RAM expansion to 16GB) ensures you won't be closing apps frequently, and the 256GB storage means you can install everything you need without worrying about space.

CAMERA
The 50MP main sensor takes surprisingly detailed photos in good lighting. Colours are vibrant without being oversaturated, and the AI scene detection does a good job of optimising shots. Low-light performance is decent, though not exceptional — you'll get usable shots but some noise in darker scenes.

The 8MP front camera is adequate for video calls and social media selfies. Portrait mode works well for separating subject from background.

BATTERY
The 5000mAh battery is a standout feature. In our testing, it easily lasted a full day of heavy use — social media, navigation, gaming, and photography. Lighter users can expect 1.5 to 2 days per charge. The 18W charging isn't the fastest, but it gets the job done in about 90 minutes.

SOFTWARE
Android 14 with HiOS 14 brings plenty of customisation options. There are some pre-installed apps (as is common with Tecno), but most can be uninstalled. The software feels polished and doesn't have the lag that plagued earlier Tecno devices.`,
    rating: 8.2,
    pros: [
      "120Hz AMOLED display — exceptional at this price",
      "5000mAh battery delivers all-day power",
      "256GB storage as standard",
      "8GB RAM (16GB with virtual expansion)",
      "50MP camera takes vibrant photos",
      "Premium design with matte finish",
      "3.5mm headphone jack included",
    ],
    cons: [
      "No 5G connectivity",
      "18W charging is slow by 2025 standards",
      "Low-light camera performance could be better",
      "No ultrawide camera",
    ],
    verdict:
      "The Tecno Spark 30 is the best phone you can buy under ₦150,000 in Nigeria right now. It delivers a premium 120Hz AMOLED display, all-day battery life, and a capable camera in a package that feels far more expensive than it is. If you can stretch to this price, it's absolutely worth it.",
    author: "Adeola Alabi",
    publishedAt: Date.now(),
  },
  alternatives: [
    {
      brand: "Infinix",
      model: "Hot 40i",
      slug: "infinix-hot-40i-price-nigeria-specs-review",
      price: 85000,
      rating: 7.5,
    },
    {
      brand: "Samsung",
      model: "Galaxy A06",
      slug: "samsung-galaxy-a06-price-nigeria-specs-review",
      price: 95000,
      rating: 7.2,
    },
    {
      brand: "Xiaomi",
      model: "Redmi 14C",
      slug: "xiaomi-redmi-14c-price-nigeria-specs-review",
      price: 92000,
      rating: 7.4,
    },
  ],
}

export const revalidate = 3600 // Revalidate every hour

export default function PhonePage() {
  return <PhoneDetailClient {...PHONE_DATA} />
}
