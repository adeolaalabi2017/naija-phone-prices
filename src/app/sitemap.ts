import type { MetadataRoute } from "next"
import { databasePhones, databaseArticles, databaseComparisons } from "@/lib/phone-data"

const BASE = "https://naija-phone-prices.alabiadeolamikel.workers.dev"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/phones`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/comparisons`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]

  const brands = Array.from(new Set(databasePhones.map((p) => p.brand.toLowerCase())))
  const brandPages: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${BASE}/phones/${brand}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const phonePages: MetadataRoute.Sitemap = databasePhones.map((p) => ({
    url: `${BASE}/phones/${p.brand.toLowerCase()}/${p.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  }))

  const guidePages: MetadataRoute.Sitemap = databaseArticles.map((a) => ({
    url: `${BASE}/guides/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  const comparisonPages: MetadataRoute.Sitemap = databaseComparisons.map((c) => ({
    url: `${BASE}/comparisons/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  return [...staticPages, ...brandPages, ...phonePages, ...guidePages, ...comparisonPages]
}
