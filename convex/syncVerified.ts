import { mutation } from "./_generated/server"
import { v } from "convex/values"

const VERIFIED = [
  { slug: "tecno-spark-30-price-nigeria-specs-review", model: "Spark 30 Pro", price: 120000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/tecno-spark-30-pro" },
  { slug: "tecno-spark-20-price-nigeria-specs-review", model: "Spark 20", price: 90000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/tecno-spark-20" },
  { slug: "tecno-camon-30-price-nigeria-specs-review", model: "Camon 30", price: 170000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/tecno-camon-30" },
  { slug: "tecno-phantom-v-flip-price-nigeria-specs-review", model: "Phantom V Flip2 5G", price: 350000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/tecno-phantom-v-flip2-5g" },
  { slug: "tecno-spark-go-2024-price-nigeria-specs-review", model: "Spark Go", price: 60000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/tecno-spark-go" },
  { slug: "tecno-pop-9-price-nigeria-specs-review", model: "Pop 9", price: 60000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/tecno-pop-9" },
  { slug: "infinix-note-40-pro-price-nigeria-specs-review", model: "Note 40 Pro", price: 130000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/infinix-note-40-pro" },
  { slug: "infinix-hot-40i-price-nigeria-specs-review", model: "Hot 40i", price: 80000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/infinix-hot-40i" },
  { slug: "infinix-gt-20-pro-price-nigeria-specs-review", model: "GT 20 Pro", price: 270000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/infinix-gt-20-pro" },
  { slug: "infinix-smart-8-pro-price-nigeria-specs-review", model: "Smart 8", price: 58000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/infinix-smart-8" },
  { slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review", model: "Galaxy A16 5G", price: 100000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/samsung-galaxy-a16-5g" },
  { slug: "samsung-galaxy-a06-price-nigeria-specs-review", model: "Galaxy A06", price: 35000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/samsung-galaxy-a06" },
  { slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review", model: "Galaxy S24 FE", price: 249999, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/samsung-galaxy-s24-fe" },
  { slug: "xiaomi-redmi-note-14-price-nigeria-specs-review", model: "Redmi Note 14", price: 200000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/xiaomi-redmi-note-14" },
  { slug: "xiaomi-redmi-14c-price-nigeria-specs-review", model: "Redmi 14C", price: 80000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/xiaomi-redmi-14c" },
  { slug: "xiaomi-poco-x6-pro-price-nigeria-specs-review", model: "POCO X6 Pro", price: 310000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/xiaomi-poco-x6-pro" },
  { slug: "oppo-reno-11-price-nigeria-specs-review", model: "Reno 11 Pro", price: 460000, source: "NaijaPhonePrice", sourceUrl: "https://naijaphoneprice.com.ng/oppo-reno-11-pro-price-in-nigeria/" },
  { slug: "oppo-a58-price-nigeria-specs-review", model: "A58", price: 65000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/oppo-a58" },
  { slug: "realme-c75-price-nigeria-specs-review", model: "C75", price: 180000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/realme-c75" },
  { slug: "realme-note-60-price-nigeria-specs-review", model: "Note 60", price: 120700, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/realme-note-60" },
  { slug: "apple-iphone-se-2025-price-nigeria-specs-review", model: "iPhone SE", price: 30000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/apple-iphone-se" },
  { slug: "apple-iphone-16-price-nigeria-specs-review", model: "iPhone 16", price: 150000, source: "Jiji.ng", sourceUrl: "https://jiji.ng/mobile-phones/apple-iphone-16" },
]

export const syncVerifiedData = mutation({
  args: {},
  handler: async (ctx) => {
    const phones = await ctx.db.query("phones").collect()
    const prices = await ctx.db.query("prices").collect()

    const bySlug = new Map(phones.map((p) => [p.slug, p]))

    for (const item of VERIFIED) {
      const phone = bySlug.get(item.slug)
      if (!phone) continue

      if (phone.model !== item.model) {
        await ctx.db.patch(phone._id, { model: item.model, updatedAt: Date.now() })
      }

      for (const price of prices.filter((p) => p.phoneId === phone._id)) {
        await ctx.db.delete(price._id)
      }

      await ctx.db.insert("prices", {
        phoneId: phone._id,
        amount: item.price,
        currency: "NGN",
        source: item.source,
        sourceUrl: item.sourceUrl,
        recordedAt: Date.now(),
      })
    }

    return { success: true, updated: VERIFIED.length }
  },
})
