import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const trackClick = mutation({
  args: {
    phoneId: v.optional(v.id("phones")),
    articleId: v.optional(v.id("articles")),
    retailer: v.string(),
    sessionId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("affiliateClicks", {
      phoneId: args.phoneId,
      articleId: args.articleId,
      retailer: args.retailer,
      clickedAt: Date.now(),
      sessionId: args.sessionId,
    })
  },
})

export const getStats = query({
  args: { retailer: v.optional(v.string()), days: v.number() },
  handler: async (ctx, args) => {
    const since = Date.now() - args.days * 24 * 60 * 60 * 1000
    const clicks = await ctx.db.query("affiliateClicks").collect()

    const filtered = clicks.filter(
      (c) => c.clickedAt >= since && (!args.retailer || c.retailer === args.retailer)
    )

    const byRetailer: Record<string, number> = {}
    const byDay: Record<string, number> = {}

    filtered.forEach((click) => {
      byRetailer[click.retailer] = (byRetailer[click.retailer] || 0) + 1

      const day = new Date(click.clickedAt).toISOString().split("T")[0]
      byDay[day] = (byDay[day] || 0) + 1
    })

    return {
      totalClicks: filtered.length,
      byRetailer,
      byDay,
    }
  },
})
