import { GuidesList } from "@/components/convex-data"

export const metadata = {
  title: "Phone Buying Guides in Nigeria (2026) — Best Phones for Every Budget",
  description:
    "Expert buying guides for phones in Nigeria. Find the best phone for your budget — from ₦50,000 to ₦500,000+. Updated for 2026.",
}

export default function GuidesIndexPage() {
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

      <GuidesList />
    </div>
  )
}