import { query } from "./_generated/server"
import { v } from "convex/values"

export const list = query({
  args: { brand: v.optional(v.string()), limit: v.number() },
  handler: async (ctx, args) => {
    let allPhones = await ctx.db.query("phones").collect()

    // Filter by brand if provided
    if (args.brand) {
      allPhones = allPhones.filter(
        (p) => p.brand.toLowerCase() === args.brand!.toLowerCase()
      )
    }

    // Sort by brand then model
    allPhones.sort((a, b) => {
      if (a.brand !== b.brand) return a.brand.localeCompare(b.brand)
      return a.model.localeCompare(b.model)
    })

    const limit = args.limit ?? allPhones.length
    const phonesSlice = allPhones.slice(0, limit)

    // Join with latest price and review for each phone
    const withDetails = await Promise.all(
      phonesSlice.map(async (phone) => {
        // Get latest price using correct filter syntax
        const allPrices = await ctx.db.query("prices").collect()
        const phonePrices = allPrices
          .filter((p) => p.phoneId === phone._id)
          .sort((a, b) => b.recordedAt - a.recordedAt)
        const latestPrice = phonePrices[0] ?? null

        // Get average rating
        const allReviews = await ctx.db.query("reviews").collect()
        const phoneReviews = allReviews.filter(
          (r) => r.phoneId === phone._id && r.status === "published"
        )
        const avgRating =
          phoneReviews.length
            ? phoneReviews.reduce((sum, r) => sum + r.rating, 0) / phoneReviews.length
            : null

        return {
          ...phone,
          latestPrice: latestPrice
            ? { amount: latestPrice.amount, source: latestPrice.source }
            : null,
          avgRating,
          reviewCount: phoneReviews.length,
        }
      })
    )

    return withDetails
  },
})

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const allPhones = await ctx.db.query("phones").collect()
    const phone = allPhones.find((p) => p.slug === args.slug)
    if (!phone) return null

    const allSpecs = await ctx.db.query("specs").collect()
    const specs = allSpecs.find((s) => s.phoneId === phone._id) ?? null

    const allPrices = await ctx.db.query("prices").collect()
    const prices = allPrices
      .filter((p) => p.phoneId === phone._id)
      .sort((a, b) => b.recordedAt - a.recordedAt)
      .slice(0, 10)

    const allReviews = await ctx.db.query("reviews").collect()
    const reviews = allReviews
      .filter((r) => r.phoneId === phone._id && r.status === "published")
      .sort((a, b) => b.publishedAt - a.publishedAt)
      .slice(0, 5)

    return { phone, specs, prices, reviews }
  },
})

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

export const listByPriceRange = query({
  args: { min: v.number(), max: v.number() },
  handler: async (ctx, args) => {
    const phones = await ctx.db.query("phones").collect()
    const allPrices = await ctx.db.query("prices").collect()

    const results = await Promise.all(
      phones.map(async (phone) => {
        const phonePrices = allPrices
          .filter((p) => p.phoneId === phone._id)
          .sort((a, b) => b.recordedAt - a.recordedAt)
        const latestPrice = phonePrices[0]

        if (
          latestPrice &&
          latestPrice.amount >= args.min &&
          latestPrice.amount <= args.max
        ) {
          return { ...phone, price: latestPrice.amount }
        }
        return null
      })
    )

    return results
      .filter((r): r is NonNullable<typeof r> => r !== null)
      .sort((a, b) => a.price - b.price)
  },
})
