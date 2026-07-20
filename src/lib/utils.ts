import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number, currency = "NGN"): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function formatRelativeDate(date: Date | string | number): string {
  const then = new Date(date).getTime()
  const now = Date.now()
  const diffMs = Math.max(0, now - then)
  const day = 86400000
  const days = Math.floor(diffMs / day)
  if (days === 0) return "today"
  if (days === 1) return "yesterday"
  if (days < 7) return `${days} days ago`
  if (days < 30) {
    const w = Math.floor(days / 7)
    return `${w} week${w > 1 ? "s" : ""} ago`
  }
  if (days < 365) {
    const m = Math.floor(days / 30)
    return `${m} month${m > 1 ? "s" : ""} ago`
  }
  const y = Math.floor(days / 365)
  return `${y} year${y > 1 ? "s" : ""} ago`
}

export function getRatingColor(rating: number): string {
  if (rating >= 8) return "text-green-500"
  if (rating >= 6) return "text-yellow-500"
  return "text-red-500"
}

export function getRatingBg(rating: number): string {
  if (rating >= 8) return "bg-green-500/10 border-green-500/20"
  if (rating >= 6) return "bg-yellow-500/10 border-yellow-500/20"
  return "bg-red-500/10 border-red-500/20"
}
