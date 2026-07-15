import { ComparisonsList } from "@/components/convex-data"

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

      <ComparisonsList />
    </div>
  )
}