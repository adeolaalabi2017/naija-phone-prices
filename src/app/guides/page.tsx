import Link from "next/link"
import { databaseArticles } from "@/lib/phone-data"
import { Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Phone Buying Guides in Nigeria (2026) — Best Phones for Every Budget",
  description:
    "Expert buying guides for phones in Nigeria. Find the best phone for your budget — from ₦50,000 to ₦500,000+. Updated for 2026.",
}

export default function GuidesIndexPage() {
  const guides = databaseArticles.filter((a) => a.type === "buying_guide")

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Phone Buying Guides
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Expert guides to help you find the best phone for your budget in Nigeria.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-all"
          >
            <div className="flex items-center gap-2 text-xs text-text-tertiary mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wide">Buying Guide</span>
            </div>
            <h2 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
              {guide.title}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {guide.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-tertiary">By {guide.author}</span>
              <span className="text-xs text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Read Guide <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
