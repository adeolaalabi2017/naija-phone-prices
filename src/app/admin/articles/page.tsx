"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, FileText, Eye } from "lucide-react"

const ARTICLES = [
  { title: "Best Phones Under ₦50,000 in Nigeria (2026)", slug: "best-phone-under-50000-naira-nigeria", type: "buying_guide", author: "Adeola Alabi", publishedAt: "Jul 2026", views: 4200 },
  { title: "Tecno Spark 30 vs Infinix Hot 40i — Which Should You Buy?", slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria", type: "comparison", author: "Adeola Alabi", publishedAt: "Jul 2026", views: 2100 },
  { title: "Samsung Galaxy A16 5G Review — Still Worth It in 2026?", slug: "samsung-galaxy-a16-5g-review-nigeria", type: "review", author: "Adeola Alabi", publishedAt: "Jun 2026", views: 1850 },
  { title: "Best 5G Phones in Nigeria (2026)", slug: "best-5g-phones-nigeria-2026", type: "buying_guide", author: "Adeola Alabi", publishedAt: "Jun 2026", views: 3200 },
  { title: "Xiaomi Redmi Note 14 Review — 200MP Camera Test", slug: "xiaomi-redmi-note-14-review-nigeria", type: "review", author: "Adeola Alabi", publishedAt: "May 2026", views: 1650 },
]

const TYPE_LABELS: Record<string, string> = {
  buying_guide: "Buying Guide",
  comparison: "Comparison",
  review: "Review",
  news: "News",
  spec_deep_dive: "Deep Dive",
}
const TYPE_COLORS: Record<string, string> = {
  buying_guide: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  comparison: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  review: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  news: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  spec_deep_dive: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
}

export default function AdminArticlesPage() {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("All")

  const types = ["All", "buying_guide", "comparison", "review", "news"]

  const filtered = ARTICLES.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === "All" || a.type === typeFilter
    return matchSearch && matchType
  })

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-text-primary">
            Articles & Guides ({filtered.length})
          </h2>
          <p className="text-sm text-text-secondary mt-0.5">
            Write and manage reviews, guides, and comparisons
          </p>
        </div>
        <a
          href="/admin/articles/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors"
        >
          <Plus className="w-4 h-4" />
          Write Article
        </a>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-tertiary text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                typeFilter === type
                  ? "bg-accent/10 text-accent border border-accent/20"
                  : "bg-surface border border-border text-text-secondary hover:border-accent/30"
              }`}
            >
              {type === "All" ? "All" : TYPE_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Article List */}
      <div className="space-y-3">
        {filtered.map((article) => (
          <div
            key={article.slug}
            className="bg-surface border border-border rounded-2xl p-5 hover:border-accent/20 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${TYPE_COLORS[article.type] || TYPE_COLORS.news}`}>
                    {TYPE_LABELS[article.type] || article.type}
                  </span>
                  <span className="text-xs text-text-tertiary">{article.author}</span>
                  <span className="text-xs text-text-tertiary">·</span>
                  <span className="text-xs text-text-tertiary">{article.publishedAt}</span>
                  <span className="text-xs text-text-tertiary">·</span>
                  <span className="text-xs text-text-tertiary flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {article.views.toLocaleString()}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <a
                  href={`/guides/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-colors"
                  title="View on site"
                >
                  <Eye className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`/admin/articles/${article.slug}`}
                  className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-colors"
                  title="Edit article"
                >
                  <Edit className="w-3.5 h-3.5" />
                </a>
                <button
                  className="p-2 rounded-lg text-text-tertiary hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  title="Delete article"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 bg-surface border border-border rounded-2xl">
            <FileText className="w-8 h-8 text-text-tertiary mx-auto mb-2" />
            <p className="text-sm text-text-secondary">No articles found</p>
          </div>
        )}
      </div>
    </div>
  )
}
