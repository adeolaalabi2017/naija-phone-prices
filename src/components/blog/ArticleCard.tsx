import Link from "next/link"
import { formatPrice } from "@/lib/utils"

interface PhoneCardProps {
  brand: string
  model: string
  slug: string
  price: number
  imageUrl?: string
  rating?: number
  specs?: {
    ram?: string
    storage?: string
    battery?: string
    camera?: string
  }
}

export function PhoneCard({
  brand,
  model,
  slug,
  price,
  imageUrl,
  rating,
  specs,
}: PhoneCardProps) {
  return (
    <Link
      href={`/phones/${brand.toLowerCase()}/${slug}`}
      className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="aspect-square bg-surface-raised relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${brand} ${model}`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-border flex items-center justify-center">
              <span className="text-2xl font-bold text-text-tertiary">
                {brand.charAt(0)}
              </span>
            </div>
          </div>
        )}
        {rating && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-mono font-bold text-accent">
            {rating.toFixed(1)}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">{brand}</p>
        <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors line-clamp-1">
          {model}
        </h3>
        {specs && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {specs.ram && (
              <span className="px-2 py-0.5 rounded-full bg-surface-raised text-xs text-text-secondary">
                {specs.ram}
              </span>
            )}
            {specs.storage && (
              <span className="px-2 py-0.5 rounded-full bg-surface-raised text-xs text-text-secondary">
                {specs.storage}
              </span>
            )}
            {specs.battery && (
              <span className="px-2 py-0.5 rounded-full bg-surface-raised text-xs text-text-secondary">
                {specs.battery}
              </span>
            )}
          </div>
        )}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xs text-text-secondary">From</span>
            <p className="font-mono font-bold text-accent text-lg">
              {formatPrice(price)}
            </p>
          </div>
          <span className="text-xs text-accent font-medium group-hover:translate-x-1 transition-transform">
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}

interface ArticleCardProps {
  title: string
  slug: string
  excerpt: string
  type: "buying_guide" | "comparison" | "review" | "news" | "spec_deep_dive"
  author: string
  publishedAt: string
  readingTime?: number
  featured?: boolean
}

export function ArticleCard({
  title,
  slug,
  excerpt,
  type,
  author,
  publishedAt,
  readingTime = 5,
  featured = false,
}: ArticleCardProps) {
  const typeColors: Record<string, string> = {
    buying_guide: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    comparison: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    review: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    news: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    spec_deep_dive: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  }
  const typeLabels: Record<string, string> = {
    buying_guide: "Buying Guide",
    comparison: "Comparison",
    review: "Review",
    news: "News",
    spec_deep_dive: "Deep Dive",
  }

  return (
    <Link
      href={`/${type === "buying_guide" ? "guides" : type === "comparison" ? "comparisons" : type === "review" ? "reviews" : "news"}/${slug}`}
      className={`group block bg-surface border border-border rounded-2xl p-5 hover:border-accent/30 transition-all ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium border ${typeColors[type] || typeColors.news}`}
        >
          {typeLabels[type] || type}
        </span>
        <span className="text-xs text-text-tertiary">{readingTime} min read</span>
      </div>
      <h3 className={`font-display font-semibold text-text-primary group-hover:text-accent transition-colors mb-2 ${featured ? "text-xl" : "text-lg"}`}>
        {title}
      </h3>
      <p className="text-sm text-text-secondary line-clamp-2 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-xs font-bold text-accent">{author.charAt(0)}</span>
          </div>
          <span className="text-xs text-text-secondary">{author}</span>
        </div>
        <span className="text-xs text-text-tertiary">{publishedAt}</span>
      </div>
    </Link>
  )
}
