import { formatPrice } from "@/lib/utils"

interface PriceTagProps {
  amount: number
  currency?: string
  source?: string
  lastUpdated?: string
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
}

export function PriceTag({
  amount,
  currency = "NGN",
  source,
  lastUpdated,
  size = "md",
  showLabel = false,
}: PriceTagProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <div className="inline-flex flex-col">
      {showLabel && (
        <span className="text-xs text-text-secondary uppercase tracking-wider mb-0.5">
          {source ? `Price on ${source}` : "Current Price"}
        </span>
      )}
      <div className="flex items-baseline gap-1">
        <span className="text-text-secondary text-sm">₦</span>
        <span className={`font-mono font-semibold text-accent ${sizeClasses[size]}`}>
          {amount.toLocaleString("en-NG")}
        </span>
        {lastUpdated && (
          <span className="text-xs text-text-tertiary ml-2">Updated {lastUpdated}</span>
        )}
      </div>
    </div>
  )
}

interface PriceComparisonProps {
  phones: Array<{
    name: string
    price: number
    source: string
    url: string
  }>
}

export function PriceComparison({ phones }: PriceComparisonProps) {
  const sorted = [...phones].sort((a, b) => a.price - b.price)
  const lowest = sorted[0]

  return (
    <div className="flex flex-col gap-2">
      {sorted.map((phone, i) => (
        <a
          key={phone.name}
          href={phone.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between p-3 rounded-xl border transition-all hover:border-accent/50 ${
            i === 0
              ? "border-accent/30 bg-accent/5"
              : "border-border bg-surface"
          }`}
        >
          <div className="flex items-center gap-3">
            {i === 0 && (
              <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                Best
              </span>
            )}
            <div>
              <p className="text-sm font-medium text-text-primary">{phone.name}</p>
              <p className="text-xs text-text-secondary">{phone.source}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-mono font-semibold ${i === 0 ? "text-accent" : "text-text-primary"}`}>
              {formatPrice(phone.price)}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
