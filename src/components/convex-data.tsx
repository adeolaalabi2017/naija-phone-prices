"use client"

import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"
import { databasePhones, databaseArticles, databaseReviews, databaseComparisons } from "@/lib/phone-data"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { Star, ArrowRight, Clock, GitCompare, Smartphone } from "lucide-react"

// ═══════════════════════════════════════════════════════════════════════════
// PHONES GRID — used on /phones and /phones/[brand]
// ═══════════════════════════════════════════════════════════════════════════

export function PhonesGrid({ brand }: { brand?: string }) {
  const convexData = useQuery(api.phones.list, { brand: brand ?? undefined, limit: 100 })

  const phones = convexData && convexData.length > 0
    ? convexData.map((p) => ({
        brand: p.brand,
        model: p.model,
        slug: p.slug,
        price: p.latestPrice?.amount ?? 0,
        imageUrl: p.imageUrl ?? undefined,
        priceRange: (p as any).priceRangeLabel ?? undefined,
        rating: p.avgRating ?? undefined,
        specs: {
          ram: "",
          storage: "",
          battery: "",
        },
      }))
    : databasePhones.filter((p) => !brand || p.brand.toLowerCase() === brand.toLowerCase())

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {phones.map((phone) => (
        <Link
          key={phone.slug}
          href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
          className="group rounded-2xl border border-border bg-surface p-5 hover:border-accent transition-all"
        >
          {phone.imageUrl && (
            <div className="mb-4 flex items-center justify-center rounded-xl bg-white/95 h-40 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={phone.imageUrl}
                alt={`${phone.brand} ${phone.model}`}
                loading="lazy"
                className="h-full w-full object-contain p-2"
              />
            </div>
          )}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
              {phone.brand}
            </span>
            {phone.rating && (
              <span className="text-xs font-mono text-accent">★ {phone.rating.toFixed(1)}</span>
            )}
          </div>
          <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
            {phone.model}
          </h3>
          {phone.specs.ram && (
            <div className="space-y-1 text-sm text-text-secondary mb-4">
              <p>{phone.specs.ram} RAM · {phone.specs.storage} Storage</p>
              <p>{phone.specs.battery} Battery</p>
            </div>
          )}
          <div className="flex items-center justify-between">
            {phone.price ? (
              <span className="font-mono text-xl font-bold text-accent">
                {formatPrice(phone.price)}
              </span>
            ) : phone.priceRange && phone.priceRange !== "—" ? (
              <span className="font-mono text-sm font-semibold text-text-secondary">
                {phone.priceRange}
              </span>
            ) : (
              <span className="font-mono text-sm font-semibold text-text-tertiary">
                Price pending
              </span>
            )}
            <span className="text-xs text-text-tertiary group-hover:text-accent transition-colors">
              View →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// GUIDE ARTICLES — used on /guides
// ═══════════════════════════════════════════════════════════════════════════

export function GuidesList() {
  const convexData = useQuery(api.articles.list, { type: "buying_guide" })

  const guides = convexData && convexData.length > 0
    ? convexData.map((a) => ({
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        author: a.author,
      }))
    : databaseArticles.filter((a) => a.type === "buying_guide")

  return (
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
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPARISONS — used on /comparisons
// ═══════════════════════════════════════════════════════════════════════════

export function ComparisonsList() {
  const convexData = useQuery(api.articles.list, { type: "comparison" })

  const comparisons = convexData && convexData.length > 0
    ? convexData.map((a) => ({
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        brands: a.targetBrands ?? [],
      }))
    : databaseComparisons

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {comparisons.map((comp) => (
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
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// REVIEWS GRID — used on /reviews
// ═══════════════════════════════════════════════════════════════════════════

export function ReviewsGrid() {
  const convexData = useQuery(api.reviews.list, {})

  const reviews = convexData && convexData.length > 0
    ? convexData.map((r) => ({
        phoneBrand: r.brand,
        phoneModel: r.model,
        phoneSlug: r.slug,
        title: r.title,
        rating: r.rating,
        verdict: r.verdict,
        author: r.author,
        price: r.price ?? 0,
      }))
    : databaseReviews

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <Link
          key={review.phoneSlug}
          href={`/phones/${review.phoneBrand.toLowerCase()}/${review.phoneSlug}`}
          className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-text-tertiary uppercase tracking-wide">
              {review.phoneBrand}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-mono text-sm font-bold text-accent">
                {review.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <h2 className="font-display text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
            {review.title}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
            {review.verdict}
          </p>
          <div className="flex items-center justify-between">
            {(review.price ?? 0) > 0 && (
              <span className="font-mono text-lg font-bold text-accent">
                {formatPrice(review.price ?? 0)}
              </span>
            )}
            <span className="text-xs text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Read Review <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// HOMEPAGE — featured phones + articles
// ═══════════════════════════════════════════════════════════════════════════

export function HomepagePhonesSection() {
  const convexData = useQuery(api.phones.list, { limit: 8 })

  const phones = convexData && convexData.length > 0
    ? convexData.map((p) => ({
        brand: p.brand,
        model: p.model,
        slug: p.slug,
        price: p.latestPrice?.amount ?? 0,
        rating: p.avgRating ?? undefined,
      }))
    : databasePhones.slice(0, 8)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {phones.map((phone) => (
        <Link
          key={phone.slug}
          href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
          className="group rounded-xl border border-border bg-surface p-4 hover:border-accent transition-all"
        >
          <span className="text-xs text-text-tertiary uppercase">{phone.brand}</span>
          <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors text-sm mt-1 mb-2">
            {phone.model}
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-bold text-accent">
              {phone.price ? formatPrice(phone.price) : "—"}
            </span>
            {phone.rating && (
              <span className="text-xs font-mono text-text-tertiary">★ {phone.rating.toFixed(1)}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export function HomepageArticlesSection() {
  const convexData = useQuery(api.articles.getFeatured, { limit: 3 })

  const articles = convexData && convexData.length > 0
    ? convexData.map((a) => ({
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        author: a.author,
      }))
    : databaseArticles.slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={article.slug.startsWith("tecno-spark-30-vs") ? `/comparisons/${article.slug}` : `/guides/${article.slug}`}
          className="group rounded-xl border border-border bg-surface p-5 hover:border-accent transition-all"
        >
          <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          <span className="text-xs text-text-tertiary">By {article.author}</span>
        </Link>
      ))}
    </div>
  )
}
