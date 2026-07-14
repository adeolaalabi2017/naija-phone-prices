import { PhoneCard } from "@/components/blog/ArticleCard"
import { ArticleCard } from "@/components/blog/ArticleCard"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"

export default function HomePage() {
  // Sample data — will come from Convex in production
  const featuredPhones = [
    {
      brand: "Tecno",
      model: "Spark 30",
      slug: "tecno-spark-30-price-nigeria-specs-review",
      price: 128000,
      rating: 8.2,
      specs: { ram: "8GB", storage: "256GB", battery: "5000mAh" },
    },
    {
      brand: "Samsung",
      model: "Galaxy A16 5G",
      slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review",
      price: 248000,
      rating: 8.5,
      specs: { ram: "8GB", storage: "128GB", battery: "5000mAh" },
    },
    {
      brand: "Infinix",
      model: "Note 40 Pro",
      slug: "infinix-note-40-pro-price-nigeria-specs-review",
      price: 198000,
      rating: 8.0,
      specs: { ram: "8GB", storage: "256GB", battery: "4600mAh" },
    },
    {
      brand: "Xiaomi",
      model: "Redmi Note 14",
      slug: "xiaomi-redmi-note-14-price-nigeria-specs-review",
      price: 185000,
      rating: 8.4,
      specs: { ram: "8GB", storage: "256GB", battery: "5500mAh" },
    },
    {
      brand: "OPPO",
      model: "Reno 11",
      slug: "oppo-reno-11-price-nigeria-specs-review",
      price: 320000,
      rating: 8.6,
      specs: { ram: "12GB", storage: "256GB", battery: "5000mAh" },
    },
    {
      brand: "Tecno",
      model: "Camon 30",
      slug: "tecno-camon-30-price-nigeria-specs-review",
      price: 175000,
      rating: 8.1,
      specs: { ram: "8GB", storage: "256GB", battery: "5000mAh" },
    },
    {
      brand: "Infinix",
      model: "Hot 40i",
      slug: "infinix-hot-40i-price-nigeria-specs-review",
      price: 85000,
      rating: 7.5,
      specs: { ram: "4GB", storage: "128GB", battery: "5000mAh" },
    },
    {
      brand: "Samsung",
      model: "Galaxy A06",
      slug: "samsung-galaxy-a06-price-nigeria-specs-review",
      price: 95000,
      rating: 7.2,
      specs: { ram: "4GB", storage: "64GB", battery: "5000mAh" },
    },
  ]

  const buyingGuides = [
    {
      title: "12 Best Phones Under ₦50,000 in Nigeria (2026)",
      slug: "best-phone-under-50000-naira-nigeria",
      excerpt:
        "From Tecno to Samsung — here are the best phones you can buy in Nigeria right now without spending more than ₦50,000.",
      type: "buying_guide" as const,
      author: "Adeola",
      publishedAt: "Jul 2026",
    },
    {
      title: "Tecno Spark 30 vs Infinix Hot 40i — Which Should You Buy?",
      slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria",
      excerpt:
        "Two of Nigeria's most popular budget phones face off. We break down specs, camera, battery, and real-world performance.",
      type: "comparison" as const,
      author: "Adeola",
      publishedAt: "Jul 2026",
    },
    {
      title: "Samsung Galaxy A16 5G Review — Still Worth It in 2026?",
      slug: "samsung-galaxy-a16-5g-review-nigeria",
      excerpt:
        "With 5G, a 120Hz display, and Samsung's update promise, the Galaxy A16 5G is the best Samsung phone under ₦250K.",
      type: "review" as const,
      author: "Adeola",
      publishedAt: "Jun 2026",
    },
  ]

  const priceRanges = [
    { label: "Under ₦30K", min: 0, max: 30000, color: "from-green-500/10 to-green-600/5" },
    { label: "Under ₦50K", min: 0, max: 50000, color: "from-blue-500/10 to-blue-600/5" },
    { label: "Under ₦100K", min: 0, max: 100000, color: "from-purple-500/10 to-purple-600/5" },
    { label: "Under ₦200K", min: 0, max: 200000, color: "from-orange-500/10 to-orange-600/5" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Updated July 2026 — Latest prices from Cybervilla & Slot
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Nigeria&apos;s Smartest
              <br />
              <span className="text-accent">Phone Price Guide</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Compare prices across Cybervilla, Slot, Jumia & more. Full specs, honest reviews,
              and real Nigerian prices — updated daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#latest-prices"
                className="px-6 py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent-hover transition-colors"
              >
                Browse Latest Prices
              </a>
              <a
                href="/guides/best-phone-under-50000-naira-nigeria"
                className="px-6 py-3 rounded-xl border border-border text-text-primary font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                Best Phones Under ₦50K
              </a>
            </div>
          </div>

          {/* Price Range Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {priceRanges.map((range) => (
              <Link
                key={range.label}
                href={`/guides/best-phone-under-${range.max === 30000 ? "30000" : range.max === 50000 ? "50000" : range.max === 100000 ? "100000" : "200000"}-naira-nigeria`}
                className={`px-5 py-2 rounded-full bg-gradient-to-br ${range.color} border border-border text-sm font-medium text-text-primary hover:border-accent/50 hover:text-accent transition-all`}
              >
                {range.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Prices Table */}
      <section id="latest-prices" className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-1">
                Latest Prices
              </h2>
              <p className="text-sm text-text-secondary">
                Real-time prices from Nigeria&apos;s top retailers
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-text-tertiary">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Live prices
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-surface border border-border rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface-raised">
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Phone</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden lg:table-cell">Specs</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Price</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Rating</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Where to Buy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {featuredPhones.map((phone) => (
                  <tr
                    key={phone.slug}
                    className="hover:bg-surface-raised/50 transition-colors group"
                  >
                    <td className="px-4 py-4">
                      <Link
                        href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
                        className="flex items-center gap-3"
                      >
                        <div className="w-12 h-12 rounded-xl bg-surface-raised flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-accent">
                            {phone.brand.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs text-accent font-medium uppercase tracking-wider">
                            {phone.brand}
                          </p>
                          <p className="font-medium text-text-primary group-hover:text-accent transition-colors">
                            {phone.model}
                          </p>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-surface-raised text-xs text-text-secondary font-mono">
                          {phone.specs.ram}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-raised text-xs text-text-secondary font-mono">
                          {phone.specs.storage}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-raised text-xs text-text-secondary font-mono">
                          {phone.specs.battery}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="font-mono font-bold text-accent">
                        {formatPrice(phone.price)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-raised border border-border font-mono font-bold text-sm text-accent">
                        {phone.rating.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href="#"
                          className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-colors"
                        >
                          Cybervilla
                        </a>
                        <a
                          href="#"
                          className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium hover:bg-green-500/20 transition-colors"
                        >
                          Slot
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-3">
            {featuredPhones.slice(0, 4).map((phone) => (
              <Link
                key={phone.slug}
                href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
                className="bg-surface border border-border rounded-xl p-4 hover:border-accent/30 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-surface-raised flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">{phone.brand.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs text-accent font-medium">{phone.brand}</p>
                      <p className="font-medium text-text-primary">{phone.model}</p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {phone.specs.ram} • {phone.specs.storage}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-accent">{formatPrice(phone.price)}</p>
                    <p className="text-xs text-text-secondary">⭐ {phone.rating}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="/phones"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors"
            >
              View all phones
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Best Under Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-1">
                Best Phones by Budget
              </h2>
              <p className="text-sm text-text-secondary">
                Top picks at every price point in Nigeria
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {priceRanges.map((range, i) => (
              <Link
                key={range.label}
                href={`/guides/best-phone-under-${range.max === 30000 ? "30000" : range.max === 50000 ? "50000" : range.max === 100000 ? "100000" : "200000"}-naira-nigeria`}
                className={`group relative bg-gradient-to-br ${range.color} border border-border rounded-2xl p-5 hover:border-accent/30 transition-all overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" />
                <h3 className="font-display font-bold text-2xl text-text-primary mb-1 relative">
                  {range.label}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {i === 0 ? "Entry-level picks" : i === 1 ? "Best value for money" : i === 2 ? "Mid-range power" : "Near-flagship"}
                </p>
                <span className="text-xs text-accent font-medium group-hover:text-accent-hover">
                  Browse 12 options →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews & Comparisons */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-1">
                Latest Articles
              </h2>
              <p className="text-sm text-text-secondary">
                Reviews, comparisons, and buying guides
              </p>
            </div>
            <a
              href="/guides"
              className="text-sm text-accent font-medium hover:text-accent-hover transition-colors"
            >
              View all →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {buyingGuides.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Index */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-8">
            Browse by Brand
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "Tecno", count: 42, color: "from-red-500/10 to-orange-500/5 border-red-500/20 hover:border-red-400/40" },
              { name: "Samsung", count: 58, color: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40" },
              { name: "Infinix", count: 38, color: "from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-400/40" },
              { name: "iPhone", count: 24, color: "from-gray-500/10 to-gray-600/5 border-gray-500/20 hover:border-gray-400/40" },
              { name: "Xiaomi", count: 31, color: "from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-400/40" },
              { name: "OPPO", count: 22, color: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/40" },
            ].map((brand) => (
              <a
                key={brand.name}
                href={`/phones/${brand.name.toLowerCase()}`}
                className={`group relative bg-gradient-to-br ${brand.color} border border-border rounded-2xl p-4 text-center hover:shadow-lg transition-all`}
              >
                <p className="font-display font-bold text-xl text-text-primary group-hover:text-accent transition-colors mb-1">
                  {brand.name}
                </p>
                <p className="text-xs text-text-secondary">{brand.count} phones</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Never Miss a Price Drop
            </h2>
            <p className="text-text-secondary mb-6">
              Get notified when your target phone drops in price. Weekly roundup of the best phone deals in Nigeria.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent-hover transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-text-tertiary mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
