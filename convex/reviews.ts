import { query } from "./_generated/server"
import { v } from "convex/values"

// List all published reviews, joined with phone data
export const list = query({
  args: { brand: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const allReviews = await ctx.db.query("reviews").collect()
    const allPhones = await ctx.db.query("phones").collect()
    const allPrices = await ctx.db.query("prices").collect()

    const published = allReviews
      .filter((r) => r.status === "published")
      .sort((a, b) => b.publishedAt - a.publishedAt)

    const results = published.map((review) => {
      const phone = allPhones.find((p) => p._id === review.phoneId)
      if (!phone) return null
      if (args.brand && phone.brand.toLowerCase() !== args.brand.toLowerCase()) return null

      const phonePrices = allPrices
        .filter((p) => p.phoneId === phone._id)
        .sort((a, b) => b.recordedAt - a.recordedAt)
      const latestPrice = phonePrices[0]

      return {
        reviewId: review._id,
        title: review.title,
        rating: review.rating,
        verdict: review.verdict,
        author: review.author,
        publishedAt: review.publishedAt,
        brand: phone.brand,
        model: phone.model,
        slug: phone.slug,
        price: latestPrice?.amount ?? null,
      }
    })

    return results.filter((r): r is NonNullable<typeof r> => r !== null)
  },
})

// Get reviews for a specific phone
export const byPhone = query({
  args: { phoneId: v.id("phones") },
  handler: async (ctx, args) => {
    const allReviews = await ctx.db.query("reviews").collect()
    return allReviews
      .filter((r) => r.phoneId === args.phoneId && r.status === "published")
      .sort((a, b) => b.publishedAt - a.publishedAt)
  },
})
