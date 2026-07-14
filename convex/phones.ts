import { query } from "./_generated/server"
import { v } from "convex/values"

// Get all phones with latest prices
export const list = query({
  args: { brand: v.optional(v.string()), limit: v.number() },
  handler: async (ctx, args) => {
    let phonesQuery = ctx.db.query("phones")

    const allPhones = await phonesQuery.collect()

    // Filter by brand if provided
    const filtered = args.brand
      ? allPhones.filter((p) => p.brand.toLowerCase() === args.brand.toLowerCase())
      : allPhones

    // Sort by brand then model
    const sorted = filtered.sort((a, b) => {
      if (a.brand !== b.brand) return a.brand.localeCompare(b.brand)
      return a.model.localeCompare(b.model)
    })

    const limit = args.limit || sorted.length

    // Join with latest price and review for each phone
    const withDetails = await Promise.all(
      sorted.slice(0, limit).map(async (phone) => {
        // Get latest price
        const prices = await ctx.db
          .query("prices")
          .filter((p) => p.phoneId === phone._id)
          .collect()
        const latestPrice = prices.sort((a, b) => b.recordedAt - a.recordedAt)[0]

        // Get average rating
        const reviews = await ctx.db
          .query("reviews")
          .filter((r) => r.phoneId === phone._id && r.status === "published")
          .collect()
        const avgRating = reviews.length
          ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
          : null

        return {
          ...phone,
          latestPrice: latestPrice
            ? { amount: latestPrice.amount, source: latestPrice.source }
            : null,
          avgRating,
          reviewCount: reviews.length,
        }
      })
    )

    return withDetails
  },
})

// Get single phone by slug
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const phone = await ctx.db
      .query("phones")
      .filter((p) => p.slug === args.slug)
      .unique()

    if (!phone) return null

    const specs = await ctx.db
      .query("specs")
      .filter((s) => s.phoneId === phone._id)
      .unique()

    const prices = await ctx.db
      .query("prices")
      .filter((p) => p.phoneId === phone._id)
      .order("desc", "recordedAt")
      .take(10)
      .collect()

    const reviews = await ctx.db
      .query("reviews")
      .filter((r) => r.phoneId === phone._id && r.status === "published")
      .order("desc", "publishedAt")
      .take(5)
      .collect()

    return { phone, specs, prices, reviews }
  },
})

// Get all brands
export const listBrands = query({
  args: {},
  handler: async (ctx) => {
    const phones = await ctx.db.query("phones").collect()
    const brandCount: Record<string, number> = {}
    phones.forEach((p) => {
      brandCount[p.brand] = (brandCount[p.brand] || 0) + 1
    })
    return Object.entries(brandCount)
      .map(([brand, count]) => ({ brand, count }))
      .sort((a, b) => b.count - a.count)
  },
})

// Get all phones grouped by price range
export const listByPriceRange = query({
  args: { min: v.number(), max: v.number() },
  handler: async (ctx, args) => {
    const phones = await ctx.db.query("phones").collect()

    const results = await Promise.all(
      phones.map(async (phone) => {
        const prices = await ctx.db
          .query("prices")
          .filter((p) => p.phoneId === phone._id)
          .collect()
        const latestPrice = prices.sort((a, b) => b.recordedAt - a.recordedAt)[0]

        if (latestPrice && latestPrice.amount >= args.min && latestPrice.amount <= args.max) {
          return { ...phone, price: latestPrice.amount }
        }
        return null
      })
    )

    return results.filter(Boolean).sort((a, b) => a!.price - b!.price)
  },
})
