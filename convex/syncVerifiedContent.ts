import { mutation } from "./_generated/server"

const ARTICLE_UPDATES = [
  {
    slug: "best-phone-under-50000-naira-nigeria",
    title: "Budget Phones in Nigeria: Verified Partner-Store Reality Check",
    excerpt: "Jumia, Konga, and Pointek don’t currently show exact new-phone listings under ₦50,000 in our checks, so the honest answer is to stretch the budget.",
    content:
      "If you want a brand-new phone from a partner store in Nigeria, the sub-₦50,000 segment is effectively empty in our current checks.\n\n" +
      "## What we verified\n" +
      "- **Samsung Galaxy A06** — about **₦118,960** on Jumia Nigeria\n" +
      "- **Apple iPhone SE** — no exact partner-store match found in our latest Jumia/Konga/Pointek checks\n" +
      "- **Tecno Spark Go 2024** — no exact partner-store match found in our latest Jumia/Konga/Pointek checks\n\n" +
      "## Honest recommendation\n" +
      "If your budget is strictly under ₦50,000, you’ll likely need to buy used or wait. For new phones from verified partner stores, the market starts higher than most people expect.\n\n" +
      "## Best move\n" +
      "Stretch toward the ₦100k–₦150k band if you want a new device with a real warranty path from an ecommerce retailer.",
  },
  {
    slug: "best-5g-phones-nigeria-2026",
    title: "Best 5G Phones in Nigeria: Verified Partner-Store Options (2026)",
    excerpt: "Partner-store checks show 5G is available, but the real entry point starts around ₦309,999 on Jumia.",
    content:
      "We checked Jumia, Konga, and Pointek for exact partner-store pricing. The honest picture is simple: affordable 5G exists, but it is not as cheap as many listings elsewhere suggest.\n\n" +
      "## Verified partner-store price checks\n" +
      "- **Samsung Galaxy A16 5G** — **₦309,999** on Jumia Nigeria\n" +
      "- **Samsung Galaxy S24 FE** — **₦980,000** on Jumia Nigeria\n" +
      "- **Infinix GT 20 Pro** — no exact partner-store price match found in our latest checks\n\n" +
      "## Best picks\n" +
      "### 1. Samsung Galaxy A16 5G\n" +
      "The most accessible 5G option we could verify from a partner store.\n\n" +
      "### 2. Samsung Galaxy S24 FE\n" +
      "Best if you want a more premium 5G experience and can pay a lot more.\n\n" +
      "### 3. Infinix GT 20 Pro\n" +
      "A strong candidate, but we’re still waiting on an exact partner-store listing before we publish a hard price.\n\n" +
      "## Verdict\n" +
      "For now, treat Jumia Nigeria as the clearest source for exact 5G pricing in this segment.",
  },
  {
    slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria",
    title: "Tecno Spark 30 Pro vs Infinix Hot 40i — Partner-Store Price Check",
    excerpt: "A direct comparison using exact Jumia Nigeria listings.",
    content:
      "This is a clean budget comparison using exact partner-store listings only.\n\n" +
      "## Verified price snapshot\n" +
      "- **Tecno Spark 30 Pro** — **₦240,000** on Jumia Nigeria\n" +
      "- **Infinix Hot 40i** — **₦259,999** on Jumia Nigeria\n\n" +
      "## The quick answer\n" +
      "- Choose the **Spark 30 Pro** if you want the lower price and a more premium-feeling Tecno option.\n" +
      "- Choose the **Hot 40i** if you prefer the Infinix software experience and a similarly priced alternative.\n\n" +
      "## Verdict\n" +
      "Both are valid buys, but the Spark 30 Pro wins on price.",
  },
]

const REVIEW_UPDATES = [
  { slug: "tecno-spark-30-price-nigeria-specs-review", title: "Tecno Spark 30 Pro Review — Best Value in Its Class", verdict: "At ₦240,000 on Jumia Nigeria, the Spark 30 Pro is a convincing pick if you want a budget-friendly phone with a more premium feel than the cheapest options." },
  { slug: "infinix-hot-40i-price-nigeria-specs-review", title: "Infinix Hot 40i Review — Strong Budget Alternative", verdict: "At ₦259,999 on Jumia Nigeria, the Hot 40i remains a solid alternative for buyers who want a familiar Infinix experience in the same general price band." },
  { slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review", title: "Samsung Galaxy A16 5G Review — The Verified Entry Point to 5G", verdict: "At ₦309,999 on Jumia Nigeria, the A16 5G is the clearest verified partner-store entry point for buyers who want 5G without jumping straight to flagship pricing." },
  { slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review", title: "Samsung Galaxy S24 FE Review — Premium 5G, Premium Price", verdict: "At ₦980,000 on Jumia Nigeria, the S24 FE is for buyers who want a higher-end Samsung experience and are comfortable paying flagship-adjacent money." },
  { slug: "infinix-gt-20-pro-price-nigeria-specs-review", title: "Infinix GT 20 Pro Review — Price Pending From Partner Stores", verdict: "We haven’t found an exact Jumia, Konga, or Pointek listing yet, so the price is pending. The hardware remains interesting, but we won’t publish a hard number until it is verified from a partner store." },
  { slug: "realme-c75-price-nigeria-specs-review", title: "Realme C75 Review — Battery-First Budget Option", verdict: "At ₦260,499 on Jumia Nigeria, the C75 is a battery-first option that makes sense if endurance matters more than chasing the lowest possible price." },
  { slug: "xiaomi-redmi-note-14-price-nigeria-specs-review", title: "Xiaomi Redmi Note 14 Review — Price Pending From Partner Stores", verdict: "We haven’t found an exact partner-store listing yet, so the price remains pending. The series is promising, but we’re holding the hard price until Jumia, Konga, or Pointek gives us an exact match." },
  { slug: "apple-iphone-16-price-nigeria-specs-review", title: "Apple iPhone 16 Review — Verified Jumia Nigeria Listing", verdict: "At ₦1,195,000 on Jumia Nigeria, the iPhone 16 is a verified premium listing and a useful benchmark for Apple pricing in the Nigerian market." },
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
        content: update.verdict + "\n\nSource policy: partner-store pricing only (Jumia, Konga, Pointek).",
        updatedAt: Date.now(),
      })
    }

    return { success: true, articlesUpdated: ARTICLE_UPDATES.length, reviewsUpdated: REVIEW_UPDATES.length }
  },
})
