import { mutation } from "./_generated/server"

const THUMB = (slug: string) => `/thumbs/${slug}.webp`

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
  { slug: "xiaomi-redmi-14c-price-nigeria-specs-review", model: "Redmi 14C", price: 245000, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/xiaomi-redmi-14c-6.88-8gb-ram256gb-rom-android-14-black-mpg9564219.html" },
  { slug: "realme-c75-price-nigeria-specs-review", model: "C75", price: 260499, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/realme-c75-6.72-8gb-ram128gb-rom-6000mah-storm-black-mpg9800154.html" },
  { slug: "apple-iphone-16-price-nigeria-specs-review", model: "iPhone 16", price: 1195000, source: "Jumia Nigeria", sourceUrl: "https://www.jumia.com.ng/apple-iphone-16-6.1-128gb-8gb-ram-5g-black-mpg10021554.html" },
]

// Pending = no exact Jumia/Konga/Pointek listing found; we show a verified
// market RANGE sourced from other Nigerian price sources instead.
const PENDING = [
  { slug: "apple-iphone-se-2025-price-nigeria-specs-review", model: "iPhone SE", rangeLabel: "₦180,000–₦380,000", rangeSource: "TheFamousNaija / iStore (NG)", rangeSourceUrl: "https://thefamousnaija.com.ng/how-much-is-iphone-se-in-nigeria/" },

  { slug: "tecno-phantom-v-flip-price-nigeria-specs-review", model: "Phantom V Flip2 5G", rangeLabel: "₦869,500–₦1,053,285", rangeSource: "Buy Fast Gadgets / Electrorates (NG)", rangeSourceUrl: "https://buyfastgadgets.ng/product/tecno-phantom-v-flip2-5g-256gb-8gb/" },
  { slug: "tecno-spark-go-2024-price-nigeria-specs-review", model: "Spark Go 2024", rangeLabel: "₦141,400", rangeSource: "MobGadgets (NG)", rangeSourceUrl: "https://mobgadgets.com/gadget/ng/tecno-spark-go-2024" },
  { slug: "infinix-gt-20-pro-price-nigeria-specs-review", model: "GT 20 Pro", rangeLabel: "₦366,000–₦685,000", rangeSource: "AssuredZone / Hardware Village (NG)", rangeSourceUrl: "https://www.assuredzone.com/ng/infinix-gt-20-pro-price-in-nigeria/" },
  { slug: "oppo-reno-11-price-nigeria-specs-review", model: "Reno 11 Pro", rangeLabel: "₦160,000–₦460,000", rangeSource: "NaijaPhonePrice / MobileInto (NG)", rangeSourceUrl: "https://naijaphoneprice.com.ng/oppo-reno-11-pro-price-in-nigeria/" },
  { slug: "oppo-a58-price-nigeria-specs-review", model: "A58", rangeLabel: "₦188,000–₦416,000", rangeSource: "GSMArena NG / Oshilolo (NG)", rangeSourceUrl: "https://www.gsmarena.com.ng/mobiles/oppo-a58-4g/" },
  { slug: "realme-note-60-price-nigeria-specs-review", model: "Note 60", rangeLabel: "₦80,000–₦160,000", rangeSource: "GSMArena NG / AssuredZone (NG)", rangeSourceUrl: "https://www.gsmarena.ng/product/realme-note-60/" },
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

      await ctx.db.patch(phone._id, {
        model: item.model,
        imageUrl: THUMB(item.slug),
        priceRangeLabel: undefined,
        priceRangeSource: undefined,
        priceRangeSourceUrl: undefined,
        updatedAt: Date.now(),
      })

      // Append-on-change: preserve price history. Only insert a new price
      // row when the amount actually differs from the most recent record.
      const existing = prices
        .filter((p) => p.phoneId === phone._id)
        .sort((a, b) => b.recordedAt - a.recordedAt)
      const mostRecent = existing[0]

      if (!mostRecent || mostRecent.amount !== item.price) {
        await ctx.db.insert("prices", {
          phoneId: phone._id,
          amount: item.price,
          currency: "NGN",
          source: item.source,
          sourceUrl: item.sourceUrl,
          recordedAt: Date.now(),
        })
      } else {
        // Same price — just refresh the "verified" timestamp.
        await ctx.db.patch(mostRecent._id, { recordedAt: Date.now() })
      }
    }

    for (const item of PENDING) {
      const phone = bySlug.get(item.slug)
      if (!phone) continue
      for (const price of prices.filter((p) => p.phoneId === phone._id)) {
        await ctx.db.delete(price._id)
      }
      await ctx.db.patch(phone._id, {
        model: item.model,
        imageUrl: THUMB(item.slug),
        priceRangeLabel: item.rangeLabel,
        priceRangeSource: item.rangeSource,
        priceRangeSourceUrl: item.rangeSourceUrl,
        updatedAt: Date.now(),
      })
    }

    return { success: true, priced: VERIFIED.length, pending: PENDING.length }
  },
})
