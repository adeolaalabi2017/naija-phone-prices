import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  // ========== CORE TABLES ==========

  phones: defineTable({
    brand: v.string(),
    model: v.string(),
    slug: v.string(),
    status: v.union(
      v.literal("current"),
      v.literal("discontinued"),
      v.literal("upcoming")
    ),
    announcedDate: v.optional(v.string()),
    releaseDateNigeria: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_brand", ["brand"])
    .index("by_slug", ["slug"])
    .index("by_status", ["status"]),

  // ========== PRICING ==========

  prices: defineTable({
    phoneId: v.id("phones"),
    amount: v.number(),
    currency: v.string(),
    source: v.string(),
    sourceUrl: v.string(),
    recordedAt: v.number(),
  })
    .index("by_phone", ["phoneId"])
    .index("by_phone_recorded", ["phoneId", "recordedAt"]),

  // ========== SPECIFICATIONS ==========

  specs: defineTable({
    phoneId: v.id("phones"),
    display: v.string(),
    processor: v.string(),
    ram: v.string(),
    storage: v.string(),
    battery: v.string(),
    fastCharging: v.optional(v.string()),
    rearCamera: v.string(),
    frontCamera: v.string(),
    os: v.string(),
    network: v.optional(v.string()),
    colorOptions: v.array(v.string()),
    weight: v.optional(v.string()),
    dimensions: v.optional(v.string()),
    fingerprint: v.optional(v.string()),
    headphoneJack: v.boolean(),
    updatedAt: v.number(),
  })
    .index("by_phone", ["phoneId"]),

  // ========== REVIEWS ==========

  reviews: defineTable({
    phoneId: v.id("phones"),
    title: v.string(),
    content: v.string(),
    rating: v.number(),
    pros: v.array(v.string()),
    cons: v.array(v.string()),
    verdict: v.string(),
    author: v.string(),
    isFeatured: v.boolean(),
    publishedAt: v.number(),
    updatedAt: v.number(),
    status: v.union(v.literal("draft"), v.literal("published")),
  })
    .index("by_phone", ["phoneId"])
    .index("by_published", ["status", "publishedAt"]),

  // ========== ARTICLES ==========

  articles: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    type: v.union(
      v.literal("buying_guide"),
      v.literal("comparison"),
      v.literal("news"),
      v.literal("spec_deep_dive"),
      v.literal("retailer_guide")
    ),
    targetPhones: v.array(v.id("phones")),
    targetBrands: v.array(v.string()),
    targetPriceRange: v.optional(v.string()),
    metaTitle: v.string(),
    metaDescription: v.string(),
    featuredImage: v.optional(v.string()),
    author: v.string(),
    isFeatured: v.boolean(),
    publishedAt: v.number(),
    updatedAt: v.number(),
    status: v.union(v.literal("draft"), v.literal("published")),
  })
    .index("by_type", ["type"])
    .index("by_slug", ["slug"])
    .index("by_published", ["status", "publishedAt"])
    .index("by_price_range", ["targetPriceRange"]),

  // ========== AFFILIATE TRACKING ==========

  affiliateClicks: defineTable({
    phoneId: v.optional(v.id("phones")),
    articleId: v.optional(v.id("articles")),
    retailer: v.string(),
    clickedAt: v.number(),
    sessionId: v.optional(v.string()),
  })
    .index("by_retailer", ["retailer"])
    .index("by_phone", ["phoneId"])
    .index("by_date", ["clickedAt"]),

  // ========== SITE SETTINGS ==========

  siteConfig: defineTable({
    key: v.string(),
    value: v.string(),
  }).index("by_key", ["key"]),
})
