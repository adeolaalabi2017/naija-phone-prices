import Link from "next/link"
import { PhonesGrid } from "@/components/convex-data"

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params
  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1)
  return {
    title: `${brandName} Phones Prices in Nigeria (2026) — Specs & Reviews`,
    description: `Compare all ${brandName} phone prices in Nigeria. Latest ${brandName} prices in Naira, full specs, expert reviews, and where to buy. Updated 2026.`,
  }
}

const BRAND_INFO: Record<string, { color: string; description: string }> = {
  tecno: {
    color: "text-red-400",
    description:
      "Tecno Mobile is the dominant smartphone brand in sub-Saharan Africa. From entry-level devices like the Pop series to mid-range powerhouses like the Camon series, Tecno offers phones at every price point with features designed for Nigerian consumers — extended battery life, dual SIM support, and FM radio without headphones.",
  },
  samsung: {
    color: "text-blue-400",
    description:
      "Samsung remains the world's leading smartphone manufacturer. In Nigeria, the Galaxy A series dominates the mid-range segment while the S-series caters to premium buyers. Known for Super AMOLED displays, One UI, and long software update commitments.",
  },
  infinix: {
    color: "text-emerald-400",
    description:
      "Infinix Mobility has carved a strong niche in the Nigerian market with aggressive value-for-money offerings. The Note series delivers large batteries and fast charging, while the GT series targets mobile gamers with high-refresh-rate displays and powerful chipsets.",
  },
  xiaomi: {
    color: "text-orange-400",
    description:
      "Xiaomi brings flagship-level specs at mid-range prices. The Redmi Note series is the most popular in Nigeria, offering 200MP cameras, massive batteries, and AMOLED displays at competitive prices. The POCO sub-brand focuses on raw performance.",
  },
  oppo: {
    color: "text-green-400",
    description:
      "OPPO is renowned for camera innovation, particularly portrait photography. The Reno series delivers premium design and best-in-class selfie cameras. The A-series offers reliable performance at budget-friendly prices with SUPERVOOC fast charging.",
  },
  realme: {
    color: "text-yellow-400",
    description:
      "Realme has rapidly grown in Nigeria by offering high specs at low prices. The C-series focuses on battery life with 6000mAh cells, while the Note series delivers 50MP cameras and large displays at entry-level prices.",
  },
  apple: {
    color: "text-zinc-300",
    description:
      "Apple's iPhones represent the premium segment of the Nigerian phone market. Despite high prices due to import duties, the iPhone remains a status symbol. The iPhone 16 with Apple Intelligence and the SE (2025) as an affordable entry point are the current highlights.",
  },
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params
  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1)
  const info = BRAND_INFO[brand.toLowerCase()] ?? {
    color: "text-text-primary",
    description: `Browse all ${brandName} phones available in Nigeria. Compare prices, specs, and find the best ${brandName} phone for your budget.`,
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className={`text-3xl font-bold ${info.color}`}>
                {brandName[0]}
              </span>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-0.5">Brand</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                {brandName} Phones in Nigeria
              </h1>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl">
            {new Date().toLocaleDateString("en-NG", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </section>

      {/* Phone Grid — live from Convex */}
      <section className="flex-1 border-b border-border">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <PhonesGrid brand={brand.toLowerCase()} />
        </div>
      </section>

      {/* Brand Info */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              About {brandName} in Nigeria
            </h2>
            <div className="prose prose-invert text-text-secondary space-y-4">
              <p>{info.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}