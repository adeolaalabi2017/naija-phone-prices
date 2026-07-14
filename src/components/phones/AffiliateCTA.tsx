import { formatPrice } from "@/lib/utils"
import { ExternalLink, ShoppingCart, Store } from "lucide-react"

interface AffiliateLink {
  retailer: string
  url: string
  price: number
  logo?: string
}

interface AffiliateCTAProps {
  phoneName: string
  links: AffiliateLink[]
  compact?: boolean
}

const RETAILER_CONFIG: Record<
  string,
  { name: string; color: string; bg: string; icon: React.ReactNode }
> = {
  cybervilla: {
    name: "Cybervilla",
    color: "text-blue-400",
    bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 hover:border-blue-400/50",
    icon: <Store className="w-4 h-4" />,
  },
  slot: {
    name: "Slot.ng",
    color: "text-green-400",
    bg: "bg-green-500/10 hover:bg-green-500/20 border-green-500/30 hover:border-green-400/50",
    icon: <ShoppingCart className="w-4 h-4" />,
  },
  jumia: {
    name: "Jumia",
    color: "text-orange-400",
    bg: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30 hover:border-orange-400/50",
    icon: <ShoppingCart className="w-4 h-4" />,
  },
  konga: {
    name: "Konga",
    color: "text-purple-400",
    bg: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30 hover:border-purple-400/50",
    icon: <ShoppingCart className="w-4 h-4" />,
  },
}

export function AffiliateCTA({ phoneName, links, compact = false }: AffiliateCTAProps) {
  if (links.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      {!compact && (
        <p className="text-xs text-text-secondary mb-1">
          Buy {phoneName} from trusted Nigerian retailers:
        </p>
      )}
      <div className={`grid grid-cols-1 ${links.length > 2 ? "sm:grid-cols-2" : ""} gap-2`}>
        {links.map((link) => {
          const config = RETAILER_CONFIG[link.retailer.toLowerCase()] || RETAILER_CONFIG.jumia
          return (
            <a
              key={link.retailer}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${config.bg}`}
            >
              <div className="flex items-center gap-2.5">
                <span className={config.color}>{config.icon}</span>
                <div>
                  <p className={`text-sm font-semibold ${config.color}`}>{config.name}</p>
                  {compact && (
                    <p className="text-xs text-text-secondary font-mono">
                      {formatPrice(link.price)}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                {!compact && (
                  <span className="text-xs text-text-secondary font-mono mr-1">
                    {formatPrice(link.price)}
                  </span>
                )}
                <ExternalLink className={`w-3.5 h-3.5 ${config.color}`} />
              </div>
            </a>
          )
        })}
      </div>
      <p className="text-xs text-text-tertiary text-center mt-1">
        We may earn a commission — at no extra cost to you.
      </p>
    </div>
  )
}
