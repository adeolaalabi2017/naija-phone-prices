import { mutation } from "./_generated/server"

const VERIFIED = [
  { slug: "tecno-spark-30-price-nigeria-specs-review", model: "Spark 30 Pro", price: 240000, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/spark-30-pro-6.78-128gb88gb-4g-sim-5000mah-black-tecno-mpg7996371.html" },
  { slug: "tecno-spark-20-price-nigeria-specs-review", model: "Spark 20", price: 259999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/tecno-spark-20-6.6-256gb88gb-4g-dual-sim-5000mah-black-419600957.html" },
  { slug: "tecno-camon-30-price-nigeria-specs-review", model: "Camon 30", price: 409999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/tecno-camon-30-6.78-256gb12gb-4g-dual-sim-5000mah-basaitls-dark-419456192.html" },
  { slug: "tecno-pop-9-price-nigeria-specs-review", model: "Pop 9", price: 165000, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/pop-9-6.67-33gb-ram-128gb-rom-android-14-4.5g-whit-tecno-mpg7014588.html" },
  { slug: "infinix-note-40-pro-price-nigeria-specs-review", model: "Note 40 Pro", price: 469999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/infinix-note-40-pro-6.78-256gb-rom8gb-ram-4g-108mp-5000mah-black-419909124.html" },
  { slug: "infinix-hot-40i-price-nigeria-specs-review", model: "Hot 40i", price: 259999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/infinix-hot-40i-6.6-128gb88gb-4g-dual-sim-5000mah-gold-288678614.html" },
  { slug: "infinix-smart-8-pro-price-nigeria-specs-review", model: "Smart 8", price: 131999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/infinix-smart-8-6.6-3gb-ram64-rom-4g-dual-sim-gold-282773528.html" },
  { slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review", model: "Galaxy A16 5G", price: 309999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/samsung-galaxy-a16-5g-6.7-128gb4gb-dual-sim-fingerprint-5000mah-blue-black-400689151.html" },
  { slug: "samsung-galaxy-a06-price-nigeria-specs-review", model: "Galaxy A06", price: 118960, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/samsung-galaxy-a06-6.7-4gb-ram64gb-rom-android-14-black-401614385.html" },
  { slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review", model: "Galaxy S24 FE", price: 980000, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/samsung-galaxy-s24-fe-dual-sim-8gb-ram-256gb-5g-gray-411206138.html" },
  { slug: "xiaomi-redmi-note-14-price-nigeria-specs-review", model: "Redmi Note 14", price: 349999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/xiaomi-redmi-note-14-6.67-6gb-ram128gb-rom.5110mah-ocean-blue-419393433.html" },
  { slug: "xiaomi-poco-x6-pro-price-nigeria-specs-review", model: "POCO X6 Pro", price: 669999, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/x6-pro-5g-6.67-512gb12gb-dual-sim-5000mah-grey-poco-mpg11144267.html" },
]

const PENDING = [
  { slug: "tecno-phantom-v-flip-price-nigeria-specs-review", model: "Phantom V Flip2 5G" },
  { slug: "tecno-spark-go-2024-price-nigeria-specs-review", model: "Spark Go" },
  { slug: "infinix-gt-20-pro-price-nigeria-specs-review", model: "GT 20 Pro" },
  { slug: "oppo-reno-11-price-nigeria-specs-review", model: "Reno 11 Pro" },
  { slug: "oppo-a58-price-nigeria-specs-review", model: "A58" },
  { slug: "realme-note-60-price-nigeria-specs-review", model: "Note 60" },
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

    for (const item of PENDING) {
      const phone = bySlug.get(item.slug)
      if (!phone) continue
      for (const price of prices.filter((p) => p.phoneId === phone._id)) {
        await ctx.db.delete(price._id)
      }
      if (phone.model !== item.model) {
        await ctx.db.patch(phone._id, { model: item.model, updatedAt: Date.now() })
      }
    }

    return { success: true, priced: VERIFIED.length, pending: PENDING.length }
  },
})
