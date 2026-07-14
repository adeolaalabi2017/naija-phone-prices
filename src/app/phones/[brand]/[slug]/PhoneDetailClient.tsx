import { SpecTable } from "@/components/phones/SpecTable"
import { PriceTag } from "@/components/phones/PriceTag"
import { RatingBadge, ProsCons } from "@/components/phones/RatingBadge"
import { AffiliateCTA } from "@/components/phones/AffiliateCTA"
import { formatPrice, formatDate } from "@/lib/utils"
import { Battery, Cpu, Monitor, Camera, Smartphone, ShieldCheck } from "lucide-react"

interface PhoneDetailClientProps {
  phone: {
    brand: string
    model: string
    slug: string
    status: string
    imageUrl?: string
    announcedDate?: string
    releaseDateNigeria?: string
    createdAt: number
    updatedAt: number
  }
  specs: {
    display: string
    processor: string
    ram: string
    storage: string
    battery: string
    fastCharging?: string
    rearCamera: string
    frontCamera: string
    os: string
    network?: string
    colorOptions: string[]
    weight?: string
    dimensions?: string
    fingerprint?: string
    headphoneJack: boolean
  }
  latestPrice: {
    amount: number
    source: string
    sourceUrl: string
    recordedAt: number
  }
  review: {
    title: string
    content: string
    rating: number
    pros: string[]
    cons: string[]
    verdict: string
    author: string
    publishedAt: number
  }
  alternatives: Array<{
    brand: string
    model: string
    slug: string
    price: number
    rating: number
  }>
}

export function PhoneDetailClient({
  phone,
  specs,
  latestPrice,
  review,
  alternatives,
}: PhoneDetailClientProps) {
  const affiliateLinks = [
    {
      retailer: "cybervilla",
      url: `https://cybervilla.io/product/${phone.slug}`,
      price: latestPrice.amount,
    },
    {
      retailer: "slot",
      url: `https://slot.ng/${phone.slug}`,
      price: latestPrice.amount + 2000,
    },
    {
      retailer: "jumia",
      url: `https://jumia.com.ng/${phone.slug}`,
      price: latestPrice.amount + 5000,
    },
  ]

  return (
    <article className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <a href="/phones" className="hover:text-accent transition-colors">Phones</a>
            <span>/</span>
            <a href={`/phones/${phone.brand.toLowerCase()}`} className="hover:text-accent transition-colors">
              {phone.brand}
            </a>
            <span>/</span>
            <span className="text-text-tertiary">{phone.model}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Phone Image */}
            <div className="lg:col-span-1">
              <div className="aspect-square bg-surface rounded-3xl border border-border overflow-hidden relative">
                {phone.imageUrl ? (
                  <img
                    src={phone.imageUrl}
                    alt={`${phone.brand} ${phone.model}`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-3xl bg-surface-raised flex items-center justify-center">
                      <span className="text-6xl font-bold text-accent">
                        {phone.brand.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium text-text-secondary">
                    {phone.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <p className="text-sm text-accent font-medium uppercase tracking-wider mb-2">{phone.brand}</p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
                  {phone.model}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <RatingBadge rating={review.rating} size="sm" />
                  {phone.announcedDate && (
                    <span className="text-sm text-text-secondary">
                      Announced {phone.announcedDate}
                    </span>
                  )}
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-surface border border-border rounded-2xl p-5">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Current Price in Nigeria</p>
                <PriceTag
                  amount={latestPrice.amount}
                  source={latestPrice.source}
                  lastUpdated={formatDate(latestPrice.recordedAt)}
                  size="lg"
                />
              </div>

              {/* Affiliate CTAs */}
              <AffiliateCTA
                phoneName={`${phone.brand} ${phone.model}`}
                links={affiliateLinks}
              />

              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: <Monitor className="w-4 h-4" />, label: "Display", value: specs.display?.split(",")[0] || "—" },
                  { icon: <Cpu className="w-4 h-4" />, label: "Processor", value: specs.processor?.split(" ")[0] || "—" },
                  { icon: <Smartphone className="w-4 h-4" />, label: "RAM / Storage", value: `${specs.ram} / ${specs.storage}` },
                  { icon: <Battery className="w-4 h-4" />, label: "Battery", value: specs.battery },
                ].map((item) => (
                  <div key={item.label} className="bg-surface border border-border rounded-xl p-3 text-center">
                    <div className="text-accent mb-1 flex justify-center">{item.icon}</div>
                    <p className="text-xs text-text-tertiary mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-text-primary font-mono">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Content */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Full Review */}
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                  {review.title}
                </h2>
                <div className="prose prose-invert max-w-none">
                  <div className="text-text-secondary leading-relaxed space-y-4">
                    {review.content.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-text-secondary leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pros & Cons */}
              <ProsCons pros={review.pros} cons={review.cons} />

              {/* Full Specs */}
              <SpecTable specs={specs} />

              {/* Verdict */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                  Our Verdict
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">{review.verdict}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                    Rating: {review.rating}/10
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface border border-border text-text-secondary text-sm">
                    Last updated: {formatDate(review.publishedAt)}
                  </span>
                </div>
              </div>

              {/* FAQ Schema markup would go here */}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 flex flex-col gap-6">
                {/* Sidebar Price Card */}
                <div className="bg-surface border border-border rounded-2xl p-5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Buy Now</p>
                  <PriceTag amount={latestPrice.amount} size="lg" />
                  <div className="mt-4 space-y-2">
                    {affiliateLinks.map((link) => (
                      <a
                        key={link.retailer}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex items-center justify-between p-3 rounded-xl bg-surface-raised border border-border hover:border-accent/30 transition-all"
                      >
                        <span className="text-sm font-medium text-text-primary capitalize">{link.retailer}</span>
                        <span className="text-xs text-accent font-medium">Buy →</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Alternatives */}
                {alternatives.length > 0 && (
                  <div className="bg-surface border border-border rounded-2xl p-5">
                    <h4 className="font-display font-semibold text-text-primary mb-3">Alternatives</h4>
                    <div className="space-y-2">
                      {alternatives.map((alt) => (
                        <a
                          key={alt.slug}
                          href={`/phones/${alt.brand.toLowerCase()}/${alt.slug}`}
                          className="flex items-center justify-between p-3 rounded-xl bg-surface-raised border border-border hover:border-accent/30 transition-all"
                        >
                          <div>
                            <p className="text-sm font-medium text-text-primary">{alt.brand} {alt.model}</p>
                            <p className="text-xs text-text-secondary">⭐ {alt.rating}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-mono font-bold text-accent text-sm">{formatPrice(alt.price)}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
