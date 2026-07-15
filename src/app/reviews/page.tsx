import { ReviewsGrid } from "@/components/convex-data"

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

      <ReviewsGrid />
    </div>
  )
}