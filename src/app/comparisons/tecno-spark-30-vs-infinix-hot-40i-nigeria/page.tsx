import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { RatingBadge } from "@/components/phones/RatingBadge"
import { AffiliateCTA } from "@/components/phones/AffiliateCTA"
import { ExternalLink, ArrowLeftRight, Check, X, Minus } from "lucide-react"

interface SpecRow {
  label: string
  values: [string | null, string | null]
  highlight?: "left" | "right" | "tie" // which side wins
}

interface ComparisonData {
  phones: [
    {
      brand: string
      model: string
      slug: string
      price: number
      rating: number
      bestFor: string
      affiliateUrl: string
      imageUrl?: string
    },
    {
      brand: string
      model: string
      slug: string
      price: number
      rating: number
      bestFor: string
      affiliateUrl: string
      imageUrl?: string
    }
  ]
  specRows: SpecRow[]
  winner: "left" | "right" | "tie"
}

const DATA: ComparisonData = {
  phones: [
    {
      brand: "Tecno",
      model: "Spark 30",
      slug: "tecno-spark-30-price-nigeria-specs-review",
      price: 128000,
      rating: 8.2,
      bestFor: "Best Display & Storage",
      affiliateUrl: "https://cybervilla.io/tecno-spark-30",
    },
    {
      brand: "Infinix",
      model: "Hot 40i",
      slug: "infinix-hot-40i-price-nigeria-specs-review",
      price: 85000,
      rating: 7.5,
      bestFor: "Best Budget Option",
      affiliateUrl: "https://cybervilla.io/infinix-hot-40i",
    },
  ],
  specRows: [
    {
      label: "Price",
      values: ["₦128,000", "₦85,000"],
      highlight: "right",
    },
    {
      label: "Our Rating",
      values: ["8.2 / 10", "7.5 / 10"],
      highlight: "left",
    },
    {
      label: "Display",
      values: ["6.67\" AMOLED, 120Hz", "6.56\" IPS LCD, 120Hz"],
      highlight: "left",
    },
    {
      label: "Processor",
      values: ["MediaTek Helio G91 Ultra", "UNISOC T606"],
      highlight: "left",
    },
    {
      label: "RAM",
      values: ["8GB (+8GB virtual)", "4GB (+4GB virtual)"],
      highlight: "left",
    },
    {
      label: "Storage",
      values: ["256GB", "128GB"],
      highlight: "left",
    },
    {
      label: "Battery",
      values: ["5000mAh", "5000mAh"],
    },
    {
      label: "Fast Charging",
      values: ["18W", "18W"],
    },
    {
      label: "Rear Camera",
      values: ["50MP + 2MP + AI", "50MP + 0.08MP"],
      highlight: "left",
    },
    {
      label: "Front Camera",
      values: ["8MP", "8MP"],
    },
    {
      label: "Operating System",
      values: ["Android 14, HiOS 14", "Android 13, XOS 13"],
      highlight: "left",
    },
    {
      label: "Network",
      values: ["4G LTE", "4G LTE"],
    },
    {
      label: "Fingerprint",
      values: ["Side-mounted", "Side-mounted"],
    },
    {
      label: "Headphone Jack",
      values: ["Yes", "Yes"],
    },
    {
      label: "Weight",
      values: ["190g", "190g"],
    },
    {
      label: "Color Options",
      values: ["Obsidian Black, Cerulean Blue, Sahara Sand", "Starlit Blue, Palm Gold, Crystal Violet"],
    },
  ],
  winner: "left",
}

function WinIndicator({ value }: { value: "left" | "right" | "tie" | undefined }) {
  if (value === "tie" || value === undefined) {
    return <Minus className="w-4 h-4 text-text-tertiary mx-auto" />
  }
  return <Check className={`w-4 h-4 mx-auto ${value === "left" ? "text-accent" : "text-green-400"}`} />
}

export default function ComparisonPage() {
  const [phoneA, phoneB] = DATA.phones
  const aWins = DATA.specRows.filter((r) => r.highlight === "left").length
  const bWins = DATA.specRows.filter((r) => r.highlight === "right").length

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
              <a href="/" className="hover:text-accent transition-colors">Home</a>
              <span>/</span>
              <a href="/comparisons" className="hover:text-accent transition-colors">Comparisons</a>
              <span>/</span>
              <span className="text-text-tertiary">VS</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                Head-to-Head
              </div>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              {phoneA.brand} {phoneA.model} <span className="text-text-tertiary">vs</span>{" "}
              {phoneB.brand} {phoneB.model}
            </h1>
            <p className="text-text-secondary">
              Detailed spec-by-spec comparison to help you decide which phone is right for you in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Score Summary Bar */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex-1 text-center">
              <p className="text-xs text-text-secondary mb-1">{phoneA.brand} {phoneA.model}</p>
              <p className="font-display font-bold text-2xl text-text-primary">{aWins}</p>
              <p className="text-xs text-accent">wins</p>
            </div>
            <div className="px-6">
              <div className="flex items-center gap-3">
                <div className={`w-20 h-2 rounded-full ${aWins >= bWins ? "bg-accent" : "bg-surface-raised"}`} />
                <span className="text-xs font-bold text-text-tertiary">VS</span>
                <div className={`w-20 h-2 rounded-full ${bWins >= aWins ? "bg-accent" : "bg-surface-raised"}`} />
              </div>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs text-text-secondary mb-1">{phoneB.brand} {phoneB.model}</p>
              <p className="font-display font-bold text-2xl text-text-primary">{bWins}</p>
              <p className="text-xs text-accent">wins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Cards */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[phoneA, phoneB].map((phone, i) => (
              <div
                key={phone.slug}
                className={`relative rounded-3xl border overflow-hidden ${
                  (i === 0 && DATA.winner === "left") || (i === 1 && DATA.winner === "right")
                    ? "border-accent/40 bg-accent/5"
                    : "border-border bg-surface"
                }`}
              >
                {(i === 0 && DATA.winner === "left") || (i === 1 && DATA.winner === "right") ? (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent text-background text-xs font-bold">
                    🏆 Winner
                  </div>
                ) : null}

                <div className="p-6">
                  {/* Phone Image */}
                  <div className="aspect-video bg-surface-raised rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                    {phone.imageUrl ? (
                      <img src={phone.imageUrl} alt={phone.model} className="object-cover w-full h-full" />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-border flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent">{phone.brand.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">{phone.brand}</p>
                  <h2 className="font-display text-xl font-bold text-text-primary mb-1">{phone.model}</h2>
                  <p className="text-xs text-text-secondary mb-3">{phone.bestFor}</p>

                  <div className="flex items-center gap-3 mb-4">
                    <RatingBadge rating={phone.rating} size="sm" />
                    <span className="font-mono font-bold text-accent text-xl">{formatPrice(phone.price)}</span>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={phone.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors"
                    >
                      Buy on Cybervilla
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
                      className="flex items-center justify-center w-full px-4 py-2.5 rounded-xl border border-border text-text-secondary text-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      Full Review →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spec Comparison Table */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
              Full Specifications Comparison
            </h2>

            <div className="bg-surface border border-border rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 border-b border-border bg-surface-raised">
                <div className="px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">
                  Specification
                </div>
                <div className="px-4 py-3 text-center text-xs font-medium text-text-tertiary uppercase tracking-wider border-l border-border">
                  {phoneA.brand} {phoneA.model}
                </div>
                <div className="px-4 py-3 text-center text-xs font-medium text-text-tertiary uppercase tracking-wider border-l border-border">
                  {phoneB.brand} {phoneB.model}
                </div>
              </div>

              {/* Spec Rows */}
              {DATA.specRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 ${i < DATA.specRows.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  <div className="px-4 py-3.5 flex items-center">
                    <span className="text-sm font-medium text-text-primary">{row.label}</span>
                  </div>
                  {[0, 1].map((col) => (
                    <div
                      key={col}
                      className={`px-4 py-3.5 text-center border-l border-border flex items-center justify-center gap-1.5 ${
                        row.highlight === (col === 0 ? "left" : "right")
                          ? "bg-accent/5"
                          : "bg-surface"
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          row.highlight === (col === 0 ? "left" : "right")
                            ? "text-accent"
                            : "text-text-primary"
                        }`}
                      >
                        {row.values[col] ?? "—"}
                      </span>
                      <WinIndicator value={row.highlight === (col === 0 ? "left" : "right") ? (col === 0 ? "left" : "right") : row.highlight} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="mt-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-text-primary mb-3">Our Verdict</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong className="text-text-primary">{phoneA.brand} {phoneA.model}</strong> wins this comparison with a{" "}
                <strong className="text-accent">{aWins}-{bWins}</strong> spec advantage. It offers a superior AMOLED display, more RAM and storage, a better processor, and a more recent OS version. The price premium of{" "}
                <strong className="text-text-primary">{formatPrice(phoneA.price - phoneB.price)}</strong> is justified by the significantly better hardware.
              </p>
              <p className="text-text-secondary leading-relaxed">
                However, if budget is your primary concern, the <strong className="text-text-primary">{phoneB.brand} {phoneB.model}</strong> remains excellent value at{" "}
                <strong className="text-accent">{formatPrice(phoneB.price)}</strong> — it covers all the essentials and will handle everyday tasks without issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
