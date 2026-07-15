import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { databasePhones } from "@/lib/phone-data"

export const metadata = {
  title: "All Phone Prices in Nigeria (2026) — Tecno, Samsung, Infinix, iPhone",
  description:
    "Compare all phone prices in Nigeria. Latest prices in Naira for Tecno, Samsung, Infinix, Xiaomi, OPPO, Realme, and iPhone. Full specs and reviews.",
}

export default function PhonesIndexPage() {
  // Group by brand
  const brands = Array.from(new Set(databasePhones.map((p) => p.brand))).sort()

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          All Phone Prices in Nigeria
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Compare prices, specs, and reviews for every phone available in Nigeria. 
          Updated for 2026.
        </p>
      </header>

      {/* Brand filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Link
          href="/phones"
          className="px-4 py-2 rounded-full bg-accent text-background text-sm font-medium"
        >
          All Brands
        </Link>
        {brands.map((brand) => (
          <Link
            key={brand}
            href={`/phones/${brand.toLowerCase()}`}
            className="px-4 py-2 rounded-full border border-border text-sm text-text-secondary hover:text-accent hover:border-accent transition-colors"
          >
            {brand}
          </Link>
        ))}
      </div>

      {/* Phone grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {databasePhones.map((phone) => (
          <Link
            key={phone.slug}
            href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
            className="group rounded-2xl border border-border bg-surface p-5 hover:border-accent transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
                {phone.brand}
              </span>
              {phone.rating && (
                <span className="text-xs font-mono text-accent">★ {phone.rating}</span>
              )}
            </div>
            <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
              {phone.model}
            </h3>
            <div className="space-y-1 text-sm text-text-secondary mb-4">
              <p>{phone.specs.ram} RAM · {phone.specs.storage} Storage</p>
              <p>{phone.specs.battery} Battery · {phone.specs.display.split(",")[0]}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl font-bold text-accent">
                {formatPrice(phone.price)}
              </span>
              <span className="text-xs text-text-tertiary group-hover:text-accent transition-colors">
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
