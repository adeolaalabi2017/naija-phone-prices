import { query } from "./_generated/server"
import { v } from "convex/values"

export const list = query({
  args: { type: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let articlesQuery = ctx.db.query("articles")

    const allArticles = await articlesQuery.collect()

    const published = allArticles
      .filter((a) => a.status === "published")
      .filter((a) => !args.type || a.type === args.type)
      .sort((a, b) => b.publishedAt - a.publishedAt)

    return published
  },
})

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const article = await ctx.db
      .query("articles")
      .filter((a) => a.slug === args.slug)
      .unique()

    return article
  },
})

export const getFeatured = query({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    const articles = await ctx.db.query("articles").collect()

    return articles
      .filter((a) => a.status === "published" && a.isFeatured)
      .sort((a, b) => b.publishedAt - a.publishedAt)
      .slice(0, args.limit)
  },
})
