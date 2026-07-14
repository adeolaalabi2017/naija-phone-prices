import { cn } from "@/lib/utils"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"

interface RatingBadgeProps {
  rating: number
  maxRating?: number
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

export function RatingBadge({
  rating,
  maxRating = 10,
  showLabel = true,
  size = "md",
}: RatingBadgeProps) {
  const normalized = (rating / maxRating) * 10
  const colorClass =
    rating >= 8 ? "text-green-400" : rating >= 6 ? "text-yellow-400" : "text-red-400"
  const bgClass =
    rating >= 8
      ? "bg-green-500/10 border-green-500/20"
      : rating >= 6
        ? "bg-yellow-500/10 border-yellow-500/20"
        : "bg-red-500/10 border-red-500/20"
  const borderClass =
    rating >= 8
      ? "border-green-500/30"
      : rating >= 6
        ? "border-yellow-500/30"
        : "border-red-500/30"

  const label =
    rating >= 9
      ? "Outstanding"
      : rating >= 8
        ? "Very Good"
        : rating >= 7
          ? "Good"
          : rating >= 6
            ? "Decent"
            : rating >= 5
              ? "Average"
              : "Poor"

  const sizeClasses = {
    sm: "text-lg px-2 py-0.5",
    md: "text-2xl px-3 py-1",
    lg: "text-3xl px-4 py-1.5",
  }

  return (
    <div className={cn("inline-flex items-center gap-3 rounded-xl border px-4 py-2", bgClass, borderClass)}>
      <span className={cn("font-mono font-bold", colorClass, sizeClasses[size])}>
        {rating.toFixed(1)}
        <span className="text-xs text-text-secondary font-normal">/{maxRating}</span>
      </span>
      {showLabel && (
        <div className="flex flex-col">
          <span className="text-xs text-text-secondary">Our Rating</span>
          <span className={cn("text-sm font-semibold", colorClass)}>{label}</span>
        </div>
      )}
    </div>
  )
}

interface ProsConsProps {
  pros: string[]
  cons: string[]
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <ThumbsUp className="w-4 h-4 text-green-400" />
          <h4 className="font-display font-semibold text-green-400">Pros</h4>
        </div>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
              <span className="text-green-400 mt-0.5">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <ThumbsDown className="w-4 h-4 text-red-400" />
          <h4 className="font-display font-semibold text-red-400">Cons</h4>
        </div>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
              <span className="text-red-400 mt-0.5">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
