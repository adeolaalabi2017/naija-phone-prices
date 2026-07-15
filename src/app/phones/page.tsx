import Link from "next/link"
import { PhonesGrid } from "@/components/convex-data"

export const metadata = {
  title: "All Phone Prices in Nigeria (2026) — Tecno, Samsung, Infinix, iPhone",
  description:
    "Compare all phone prices in Nigeria. Latest prices in Naira for Tecno, Samsung, Infinix, Xiaomi, OPPO, Realme, and iPhone. Full specs and reviews.",
}

export default function PhonesIndexPage() {
  const brands = ["Tecno", "Samsung", "Infinix", "Xiaomi", "OPPO", "Realme", "Apple"]

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

      {/* Live phone grid from Convex */}
      <PhonesGrid />
    </div>
  )
}