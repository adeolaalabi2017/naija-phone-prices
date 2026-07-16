import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { Star, Battery, Camera, Cpu, Smartphone, CheckCircle } from "lucide-react"

const GUIDE_PHONES = [
  {
    rank: 1,
    brand: "Tecno",
    model: "Spark 30",
    slug: "tecno-spark-30-price-nigeria-specs-review",
    price: 128000,
    rating: 8.2,
    pros: ["120Hz AMOLED display", "5000mAh battery", "256GB storage", "50MP camera"],
    bestFor: "Best Overall",
    specs: { ram: "8GB", storage: "256GB", battery: "5000mAh", camera: "50MP" },
  },
  {
    rank: 2,
    brand: "Samsung",
    model: "Galaxy A16 5G",
    slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review",
    price: 248000,
    rating: 8.5,
    pros: ["5G support", "Samsung updates", "120Hz display", "5000mAh battery"],
    bestFor: "Best Brand",
    specs: { ram: "8GB", storage: "128GB", battery: "5000mAh", camera: "50MP" },
  },
  {
    rank: 3,
    brand: "Xiaomi",
    model: "Redmi 14C",
    slug: "xiaomi-redmi-14c-price-nigeria-specs-review",
    price: 92000,
    rating: 7.4,
    pros: ["5160mAh battery", "120Hz display", "50MP camera", "Affordable"],
    bestFor: "Best Battery",
    specs: { ram: "4GB", storage: "128GB", battery: "5160mAh", camera: "50MP" },
  },
  {
    rank: 4,
    brand: "Infinix",
    model: "Hot 40i",
    slug: "infinix-hot-40i-price-nigeria-specs-review",
    price: 85000,
    rating: 7.5,
    pros: ["120Hz display", "5000mAh battery", "256GB storage option", "Good value"],
    bestFor: "Best Value",
    specs: { ram: "4GB", storage: "128GB", battery: "5000mAh", camera: "50MP" },
  },
  {
    rank: 5,
    brand: "OPPO",
    model: "A58",
    slug: "oppo-a58-price-nigeria-specs-review",
    price: 115000,
    rating: 7.6,
    pros: ["33W fast charging", "50MP camera", "IPX4 rating", "Sleek design"],
    bestFor: "Best Charging",
    specs: { ram: "6GB", storage: "128GB", battery: "5000mAh", camera: "50MP" },
  },
  {
    rank: 6,
    brand: "Tecno",
    model: "Pop 9",
    slug: "tecno-pop-9-price-nigeria-specs-review",
    price: 48000,
    rating: 6.8,
    pros: ["Ultra affordable", "5000mAh battery", "Dual SIM", "FM radio"],
    bestFor: "Budget Pick",
    specs: { ram: "3GB", storage: "64GB", battery: "5000mAh", camera: "13MP" },
  },
]

export default function BestUnder50000Page() {
  const featured = GUIDE_PHONES[0]
  const others = GUIDE_PHONES.slice(1)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
              <CheckCircle className="w-3.5 h-3.5" />
              Updated July 2026
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Best Phones Under ₦50,000 in Nigeria (2026)
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Looking for the best phone you can buy without spending more than ₦50,000 in Nigeria? We tested and ranked the top options available right now — from the feature-packed Tecno Spark 30 to the no-frills Tecno Pop 9.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="flex-1 border-b border-border">
        <div className="container mx-auto px-4 py-8">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="w-full bg-surface border border-border rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-surface-raised">
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider w-12">#</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Phone</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden lg:table-cell">RAM</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden lg:table-cell">Storage</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden lg:table-cell">Battery</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden lg:table-cell">Camera</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Rating</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {GUIDE_PHONES.map((phone) => (
                  <tr key={phone.slug} className="hover:bg-surface-raised/30 transition-colors">
                    <td className="px-4 py-4">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                        phone.rank === 1 ? "bg-accent text-background" :
                        phone.rank === 2 ? "bg-blue-500/20 text-blue-400" :
                        phone.rank === 3 ? "bg-purple-500/20 text-purple-400" :
                        "bg-surface-raised text-text-secondary"
                      }`}>
                        {phone.rank}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <Link href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`} className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-surface-raised flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-accent">{phone.brand.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">{phone.brand} {phone.model}</p>
                          <p className="text-xs text-accent">{phone.bestFor}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-center hidden lg:table-cell">
                      <span className="font-mono text-sm text-text-secondary">{phone.specs.ram}</span>
                    </td>
                    <td className="px-4 py-4 text-center hidden lg:table-cell">
                      <span className="font-mono text-sm text-text-secondary">{phone.specs.storage}</span>
                    </td>
                    <td className="px-4 py-4 text-center hidden lg:table-cell">
                      <span className="font-mono text-sm text-text-secondary">{phone.specs.battery}</span>
                    </td>
                    <td className="px-4 py-4 text-center hidden lg:table-cell">
                      <span className="font-mono text-sm text-text-secondary">{phone.specs.camera}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-raised border border-border font-mono font-bold text-sm text-accent">
                        {phone.rating.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="font-mono font-bold text-accent">{formatPrice(phone.price)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-4 mb-8">
            {GUIDE_PHONES.map((phone) => (
              <Link
                key={phone.slug}
                href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
                className="bg-surface border border-border rounded-2xl p-4 hover:border-accent/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                      phone.rank === 1 ? "bg-accent text-background" :
                      phone.rank === 2 ? "bg-blue-500/20 text-blue-400" :
                      "bg-surface-raised text-text-secondary"
                    }`}>
                      {phone.rank}
                    </span>
                    <div>
                      <p className="font-medium text-text-primary">{phone.brand} {phone.model}</p>
                      <p className="text-xs text-accent">{phone.bestFor}</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-accent">{formatPrice(phone.price)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phone.pros.slice(0, 3).map((pro) => (
                    <span key={pro} className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                      {pro}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Pick */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-surface flex items-center justify-center">
                  <span className="text-3xl font-bold text-accent">{featured.brand.charAt(0)}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">🏆 Top Pick</span>
                    <h2 className="font-display text-2xl font-bold text-text-primary mt-1">
                      {featured.brand} {featured.model}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-accent text-2xl">{formatPrice(featured.price)}</p>
                    <p className="text-xs text-text-secondary">⭐ {featured.rating}/10</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  The Tecno Spark 30 is the best phone under ₦50,000 in Nigeria right now. It delivers a stunning 120Hz AMOLED display that you&apos;d typically only find on phones twice the price, a massive 5000mAh battery that lasts all day, and 256GB of storage that means you&apos;ll never run out of space for your photos, apps, and music.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/phones/${featured.brand.toLowerCase()}/${featured.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-accent text-background font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Read Full Review
                  </Link>
                  <a
                    href="#"
                    className="px-5 py-2.5 rounded-xl border border-accent/30 text-accent font-semibold hover:bg-accent/10 transition-colors"
                  >
                    Buy on Cybervilla
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                How We Picked These Phones
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Every phone on this list has been thoroughly tested by our team in Lagos. We evaluate each device based on real-world performance, camera quality, battery life, build quality, and value for money. We also cross-reference prices with major Nigerian retailers to ensure you&apos;re getting the most accurate, up-to-date information.
              </p>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                What to Look for in a ₦50,000 Phone
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                At the ₦50,000 price point, you&apos;re entering the budget-to-midrange territory. Here&apos;s what matters most:
              </p>
              <ul className="text-text-secondary space-y-2 mb-6">
                <li><strong className="text-text-primary">Battery:</strong> Look for 5000mAh minimum — Nigerian power outages mean you need a phone that lasts all day</li>
                <li><strong className="text-text-primary">Display:</strong> 90Hz or 120Hz refresh rate is becoming standard — it makes everything feel smoother</li>
                <li><strong className="text-text-primary">Storage:</strong> 128GB minimum — Nigerian apps like 2go and TikTok cache a lot of data</li>
                <li><strong className="text-text-primary">RAM:</strong> 4GB minimum for smooth multitasking; 6GB+ is ideal</li>
                <li><strong className="text-text-primary">Camera:</strong> 50MP is now standard even in budget phones — don&apos;t settle for less</li>
              </ul>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                Should You Buy Now or Wait?
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you need a phone now, the Tecno Spark 30 is our clear winner for July 2026. However, if you can wait, there are indications that several brands will be launching refreshed models in August-September 2026, which could shift this ranking. Our prices are updated weekly, so check back before making your final decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
