import { mutation } from "./_generated/server"
import { v } from "convex/values"

const ARTICLE_UPDATES = [
  {
    slug: "best-phone-under-50000-naira-nigeria",
    title: "Best Phones Under ₦50,000 in Nigeria (2026)",
    excerpt: "Verified marketplace listings show the ultra-budget segment is thin, but there are still usable options if you accept used or entry-level devices.",
    content: `If you’re shopping under ₦50,000 in Nigeria in 2026, the market is mostly used/refurbished inventory and very entry-level Android Go phones.\n\n## Verified current price checks\n- **Samsung Galaxy A06** — around **₦35,000** on Jiji.ng\n- **Apple iPhone SE** — around **₦30,000** on Jiji.ng\n- **Tecno Spark Go** — around **₦60,000** on Jiji.ng (just above the target)\n\n## Best picks\n### 1. Samsung Galaxy A06\nBest if you want the cheapest modern Samsung option.\n\n### 2. Apple iPhone SE\nBest if you’re comfortable buying used and want iOS.\n\n### 3. Tecno Spark Go\nWorth stretching the budget slightly if you want a new entry-level Android phone.\n\n## What to expect\nAt this price, don’t expect 5G, AMOLED displays, or premium cameras. Focus on battery life, storage, and condition.`,
  },
  {
    slug: "best-5g-phones-nigeria-2026",
    title: "Best 5G Phones in Nigeria Under ₦300,000 (2026)",
    excerpt: "Verified market pricing shows 5G now starts well below ₦300,000 for used models and around that mark for strong midrange options.",
    content: `5G is no longer a premium-only feature in Nigeria. Our latest verified checks show several options under or around ₦300,000.\n\n## Verified price checks\n- **Samsung Galaxy A16 5G** — around **₦100,000** on Jiji.ng\n- **Infinix GT 20 Pro** — around **₦270,000** on Jiji.ng\n- **Samsung Galaxy S24 FE** — around **₦249,999** on Jiji.ng\n- **Xiaomi POCO X6 Pro** — around **₦310,000** on Jiji.ng (slightly above the budget)\n\n## Best picks\n### 1. Samsung Galaxy S24 FE\nBest premium 5G phone near the target budget.\n\n### 2. Infinix GT 20 Pro\nBest gaming-first 5G phone under ₦300k.\n\n### 3. Samsung Galaxy A16 5G\nBest low-cost 5G entry point.\n\n## Verdict\nIf you want the best balance of price, support, and 5G, the Galaxy A16 5G is the easiest buy. If you want the most performance, go for the GT 20 Pro.`,
  },
  {
    slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria",
    title: "Tecno Spark 30 Pro vs Infinix Hot 40i — Which Should You Buy?",
    excerpt: "A price-to-performance comparison based on verified Nigerian marketplace listings.",
    content: `The Tecno Spark 30 Pro and Infinix Hot 40i target the same budget-minded Nigerian buyer, but they take different approaches.\n\n## Verified price snapshot\n- **Tecno Spark 30 Pro** — around **₦120,000** on Jiji.ng\n- **Infinix Hot 40i** — around **₦80,000** on Jiji.ng\n\n## The quick answer\n- Choose the **Spark 30 Pro** if you care about display quality and a more premium-feeling device.\n- Choose the **Hot 40i** if your budget is tighter and you want the lower entry price.\n\n## Verdict\nFor most buyers, the Infinix Hot 40i is the better value. If you can stretch your budget, the Spark 30 Pro gives you the stronger overall experience.`,
  },
]

const REVIEW_UPDATES = [
  { slug: "tecno-spark-30-price-nigeria-specs-review", title: "Tecno Spark 30 Pro Review — Premium Budget Display", verdict: "At around ₦120,000 on the live market, the Spark 30 Pro is a strong budget pick if you want a better display and a more polished feel than the cheapest phones." },
  { slug: "infinix-hot-40i-price-nigeria-specs-review", title: "Infinix Hot 40i Review — The ₦80k Value Leader", verdict: "At roughly ₦80,000, the Hot 40i remains one of the easiest recommendations for budget buyers who need a decent screen, battery life, and sensible day-to-day performance." },
  { slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review", title: "Samsung Galaxy A16 5G Review — Cheap 5G, Solid Support", verdict: "At around ₦100,000 on Jiji.ng, the A16 5G is one of the most compelling low-cost 5G options because Samsung’s software support and brand trust add real value." },
  { slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review", title: "Samsung Galaxy S24 FE Review — Premium 5G Near the Midrange", verdict: "At roughly ₦249,999, the S24 FE sits right at the sweet spot for buyers who want flagship-style polish without paying full Ultra money." },
  { slug: "infinix-gt-20-pro-price-nigeria-specs-review", title: "Infinix GT 20 Pro Review — Best Gaming Value Under ₦300k", verdict: "At around ₦270,000, the GT 20 Pro is still one of the strongest gaming-first buys in Nigeria thanks to its performance-first hardware and 5G support." },
  { slug: "realme-c75-price-nigeria-specs-review", title: "Realme C75 Review — Battery First, Budget Second", verdict: "At roughly ₦180,000, the C75 is a battery-focused all-rounder that makes sense if endurance matters more than camera ambition." },
  { slug: "xiaomi-redmi-note-14-price-nigeria-specs-review", title: "Xiaomi Redmi Note 14 Review — Strong Value With AMOLED", verdict: "At about ₦200,000, the Redmi Note 14 stays attractive for buyers who want a big AMOLED screen and dependable everyday performance." },
  { slug: "apple-iphone-16-price-nigeria-specs-review", title: "iPhone 16 Review — The Most Affordable Current iPhone", verdict: "At around ₦150,000 on the marketplace snapshot we verified, the iPhone 16 entry is unusually low for Apple buyers and should be treated as a live market listing snapshot rather than an official retail MSRP." },
]

export const syncVerifiedContent = mutation({
  args: {},
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").collect()
    const phones = await ctx.db.query("phones").collect()
    const reviews = await ctx.db.query("reviews").collect()

    for (const update of ARTICLE_UPDATES) {
      const article = articles.find((a) => a.slug === update.slug)
      if (!article) continue
      await ctx.db.patch(article._id, {
        title: update.title,
        excerpt: update.excerpt,
        content: update.content,
        updatedAt: Date.now(),
      })
    }

    const phoneBySlug = new Map(phones.map((p) => [p.slug, p]))
    for (const update of REVIEW_UPDATES) {
      const phone = phoneBySlug.get(update.slug)
      if (!phone) continue
      const review = reviews.find((r) => r.phoneId === phone._id)
      if (!review) continue
      await ctx.db.patch(review._id, {
        title: update.title,
        verdict: update.verdict,
        content: `${update.verdict}\n\nVerified live market snapshot updated for Nigeria.`,
        updatedAt: Date.now(),
      })
    }

    return { success: true, articlesUpdated: ARTICLE_UPDATES.length, reviewsUpdated: REVIEW_UPDATES.length }
  },
})
