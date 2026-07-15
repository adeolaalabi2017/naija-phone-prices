import Link from "next/link"
import { databaseComparisons } from "@/lib/phone-data"
import { GitCompare, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Phone Comparisons in Nigeria (2026) — Head-to-Head Spec Battles",
  description:
    "Compare phones side by side. Specs, prices, and ratings for popular Nigerian phones. Tecno vs Infinix, Samsung vs Xiaomi, and more.",
}

export default function ComparisonsIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Phone Comparisons
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Head-to-head comparisons of popular phones in Nigeria. Specs, prices, and ratings side by side.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {databaseComparisons.map((comp) => (
          <Link
            key={comp.slug}
            href={`/comparisons/${comp.slug}`}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-all"
          >
            <div className="flex items-center gap-2 text-xs text-text-tertiary mb-3">
              <GitCompare className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wide">Comparison</span>
            </div>
            <h2 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
              {comp.title}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {comp.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {comp.brands.map((brand) => (
                  <span key={brand} className="text-xs px-2 py-1 rounded-full border border-border text-text-tertiary">
                    {brand}
                  </span>
                ))}
              </div>
              <span className="text-xs text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Compare <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
