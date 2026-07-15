import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { HomepagePhonesSection, HomepageArticlesSection } from "@/components/convex-data"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              Phone Prices in Nigeria,<br />
              <span className="text-accent">Honest & Updated</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Compare prices, read in-depth reviews, and find the best phone for your budget.
              We track prices from Slot, Jumia, Cybervilla, and more — updated daily.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/phones"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-medium hover:brightness-110 transition-all"
              >
                Browse All Phones
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-primary font-medium hover:border-accent hover:text-accent transition-all"
              >
                Buying Guides
              </Link>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
            {[
              { value: "20+", label: "Phones Tracked" },
              { value: "8", label: "Brands Covered" },
              { value: "13+", label: "Expert Reviews" },
              { value: "₦48K–₦850K", label: "Price Range" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-text-tertiary mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Phones */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
                Latest Phone Prices
              </h2>
              <p className="text-text-secondary text-sm">
                Up-to-date prices from Nigerian retailers
              </p>
            </div>
            <Link
              href="/phones"
              className="text-sm text-accent hover:underline"
            >
              View all →
            </Link>
          </div>
          <HomepagePhonesSection />
        </div>
      </section>

      {/* Brand Bar */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 text-center">
            Browse by Brand
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Tecno", "Samsung", "Infinix", "Xiaomi", "OPPO", "Realme", "Apple"].map((brand) => (
              <Link
                key={brand}
                href={`/phones/${brand.toLowerCase()}`}
                className="px-5 py-2.5 rounded-full border border-border text-sm text-text-secondary hover:text-accent hover:border-accent transition-all"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
                Guides & Comparisons
              </h2>
              <p className="text-text-secondary text-sm">
                Expert advice to help you choose
              </p>
            </div>
            <Link
              href="/guides"
              className="text-sm text-accent hover:underline"
            >
              View all →
            </Link>
          </div>
          <HomepageArticlesSection />
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
              Don&apos;t Overpay for Your Next Phone
            </h2>
            <p className="text-text-secondary mb-8">
              We help thousands of Nigerians find the best phone deals every month.
              Bookmark us and check back before you buy.
            </p>
            <Link
              href="/phones"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-medium hover:brightness-110 transition-all"
            >
              Check Prices Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}