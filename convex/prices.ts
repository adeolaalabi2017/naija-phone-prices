import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

export const list = query({
  args: { phoneId: v.optional(v.id("phones")) },
  handler: async (ctx, args) => {
    let pricesQuery = ctx.db.query("prices")
    const allPrices = await pricesQuery.collect()

    // Filter by phoneId if provided
    const filtered = args.phoneId
      ? allPrices.filter((p) => p.phoneId === args.phoneId)
      : allPrices

    // Sort by recordedAt descending (newest first)
    return filtered.sort((a, b) => b.recordedAt - a.recordedAt)
  },
})

export const getLatestForPhone = query({
  args: { phoneId: v.id("phones") },
  handler: async (ctx, args) => {
    const prices = await ctx.db
      .query("prices")
      .filter((q) => q.eq(q.field("phoneId"), args.phoneId))
      .collect()

    if (!prices.length) return null
    return prices.sort((a, b) => b.recordedAt - a.recordedAt)[0]
  },
})

export const trackClick = mutation({
  args: {
    phoneId: v.optional(v.id("phones")),
    articleId: v.optional(v.id("articles")),
    retailer: v.string(),
    sessionId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("affiliateClicks", {
      phoneId: args.phoneId ?? undefined,
      articleId: args.articleId ?? undefined,
      retailer: args.retailer,
      sessionId: args.sessionId ?? undefined,
      clickedAt: Date.now(),
    })
    return { success: true, clickId: id }
  },
})

export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const clicks = await ctx.db.query("affiliateClicks").collect()

    const byRetailer: Record<string, number> = {}
    const byDay: Record<string, number> = {}

    clicks.forEach((click) => {
      byRetailer[click.retailer] = (byRetailer[click.retailer] || 0) + 1
      const day = new Date(click.clickedAt).toISOString().split("T")[0]
      byDay[day] = (byDay[day] || 0) + 1
    })

    return {
      total: clicks.length,
      byRetailer,
      byDay,
    }
  },
})
