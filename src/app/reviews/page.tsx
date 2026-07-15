import Link from "next/link"
import { databaseReviews } from "@/lib/phone-data"
import { formatPrice } from "@/lib/utils"
import { Star, ArrowRight } from "lucide-react"
import { databasePhones } from "@/lib/phone-data"

export const metadata = {
  title: "Phone Reviews in Nigeria (2026) — Honest, Expert Opinions",
  description:
    "In-depth phone reviews for the Nigerian market. We test every device for performance, camera, battery, and value for money.",
}

export default function ReviewsIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Phone Reviews
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Honest, in-depth reviews of every phone we test in Nigeria. Ratings, pros, cons, and verdicts.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {databaseReviews.map((review) => {
          const phone = databasePhones.find((p) => p.slug === review.phoneSlug)
          return (
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
                {phone && (
                  <span className="font-mono text-lg font-bold text-accent">
                    {formatPrice(phone.price)}
                  </span>
                )}
                <span className="text-xs text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Review <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
