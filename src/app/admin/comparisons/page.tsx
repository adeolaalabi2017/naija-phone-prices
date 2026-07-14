"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, GitCompare, Eye } from "lucide-react"

const COMPARISONS = [
  { title: "Tecno Spark 30 vs Infinix Hot 40i", slug: "tecno-spark-30-vs-infinix-hot-40i-nigeria", phones: ["Tecno Spark 30", "Infinix Hot 40i"], author: "Adeola Alabi", publishedAt: "Jul 2026" },
  { title: "Samsung Galaxy A16 5G vs Xiaomi Redmi Note 14", slug: "samsung-galaxy-a16-5g-vs-xiaomi-redmi-note-14-nigeria", phones: ["Samsung Galaxy A16 5G", "Xiaomi Redmi Note 14"], author: "Adeola Alabi", publishedAt: "Jun 2026" },
  { title: "Tecno Camon 30 vs OPPO Reno 11", slug: "tecno-camon-30-vs-oppo-reno-11-nigeria", phones: ["Tecno Camon 30", "OPPO Reno 11"], author: "Adeola Alabi", publishedAt: "May 2026" },
  { title: "Infinix GT 20 Pro vs POCO X6 Pro", slug: "infinix-gt-20-pro-vs-poco-x6-pro-nigeria", phones: ["Infinix GT 20 Pro", "POCO X6 Pro"], author: "Adeola Alabi", publishedAt: "Apr 2026" },
]

export default function AdminComparisonsPage() {
  const [search, setSearch] = useState("")

  const filtered = COMPARISONS.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-text-primary">
            Comparisons ({filtered.length})
          </h2>
          <p className="text-sm text-text-secondary mt-0.5">
            Head-to-head phone comparison articles
          </p>
        </div>
        <a
          href="/admin/comparisons/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Comparison
        </a>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
        <input
          type="text"
          placeholder="Search comparisons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-tertiary text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Comparison List */}
      <div className="space-y-3">
        {filtered.map((comp) => (
          <div
            key={comp.slug}
            className="bg-surface border border-border rounded-2xl p-5 hover:border-accent/20 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <GitCompare className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs text-text-tertiary">{comp.author}</span>
                  <span className="text-xs text-text-tertiary">·</span>
                  <span className="text-xs text-text-tertiary">{comp.publishedAt}</span>
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-1">{comp.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {comp.phones.map((phone) => (
                    <span key={phone} className="px-2 py-0.5 rounded-full bg-surface-raised text-xs text-text-secondary border border-border">
                      {phone}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <a
                  href={`/comparisons/${comp.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-colors"
                  title="View on site"
                >
                  <Eye className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`/admin/comparisons/${comp.slug}`}
                  className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-colors"
                  title="Edit comparison"
                >
                  <Edit className="w-3.5 h-3.5" />
                </a>
                <button
                  className="p-2 rounded-lg text-text-tertiary hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  title="Delete comparison"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 bg-surface border border-border rounded-2xl">
            <GitCompare className="w-8 h-8 text-text-tertiary mx-auto mb-2" />
            <p className="text-sm text-text-secondary">No comparisons found</p>
          </div>
        )}
      </div>
    </div>
  )
}
