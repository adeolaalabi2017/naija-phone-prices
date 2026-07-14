import { PhoneCard } from "@/components/blog/ArticleCard"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"

const BRAND_PHONES = [
  { brand: "Tecno", model: "Spark 30", slug: "tecno-spark-30-price-nigeria-specs-review", price: 128000, rating: 8.2, specs: { ram: "8GB", storage: "256GB", battery: "5000mAh" } },
  { brand: "Tecno", model: "Spark 20", slug: "tecno-spark-20-price-nigeria-specs-review", price: 98000, rating: 7.8, specs: { ram: "8GB", storage: "128GB", battery: "5000mAh" } },
  { brand: "Tecno", model: "Camon 30", slug: "tecno-camon-30-price-nigeria-specs-review", price: 175000, rating: 8.1, specs: { ram: "8GB", storage: "256GB", battery: "5000mAh" } },
  { brand: "Tecno", model: "Phantom V Flip", slug: "tecno-phantom-v-flip-price-nigeria-specs-review", price: 420000, rating: 8.3, specs: { ram: "8GB", storage: "256GB", battery: "4000mAh" } },
  { brand: "Tecno", model: "Spark Go 2024", slug: "tecno-spark-go-2024-price-nigeria-specs-review", price: 58000, rating: 7.0, specs: { ram: "4GB", storage: "64GB", battery: "5000mAh" } },
  { brand: "Tecno", model: "Pop 9", slug: "tecno-pop-9-price-nigeria-specs-review", price: 48000, rating: 6.8, specs: { ram: "3GB", storage: "64GB", battery: "5000mAh" } },
]

export default function BrandPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-red-400">T</span>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-0.5">Brand</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                Tecno Phones in Nigeria
              </h1>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl">
            Browse all Tecno phones available in Nigeria. Compare prices, specs, and find the best Tecno phone for your budget. Updated {new Date().toLocaleDateString("en-NG", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </section>

      {/* Phone Grid */}
      <section className="flex-1 border-b border-border">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-text-secondary">
              Showing <span className="text-text-primary font-medium">{BRAND_PHONES.length}</span> phones
            </p>
            <select className="px-3 py-2 rounded-lg bg-surface border border-border text-text-primary text-sm">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRAND_PHONES.map((phone) => (
              <PhoneCard key={phone.slug} {...phone} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Info */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              About Tecno in Nigeria
            </h2>
            <div className="prose prose-invert text-text-secondary space-y-4">
              <p>
                Tecno Mobile is a Chinese smartphone manufacturer that has become the dominant phone brand in sub-Saharan Africa. Headquartered in Shenzhen, Tecno has invested heavily in understanding the African market, developing phones specifically designed for the needs of Nigerian consumers.
              </p>
              <p>
                From entry-level devices like the Tecno Pop series to mid-range powerhouses like the Camon series, Tecno offers phones at every price point. The Spark series has become synonymous with affordable quality, regularly appearing on Nigeria's best-selling phone lists.
              </p>
              <p>
                Key advantages of Tecno phones in Nigeria include local customer service centres, widespread availability across Slot, Jumia, and independent retailers, and features specifically designed for African users — including extended battery life, dual SIM support, and FM radio (without headphones).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
