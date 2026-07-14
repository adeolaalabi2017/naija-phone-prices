"use client"

import { useState } from "react"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { Plus, Search, Edit, Trash2, Star, ExternalLink, Smartphone } from "lucide-react"

const PHONES = [
  { brand: "Tecno", model: "Spark 30", slug: "tecno-spark-30-price-nigeria-specs-review", price: 128000, rating: 8.2, status: "current" },
  { brand: "Tecno", model: "Spark 20", slug: "tecno-spark-20-price-nigeria-specs-review", price: 98000, rating: 7.8, status: "current" },
  { brand: "Tecno", model: "Camon 30", slug: "tecno-camon-30-price-nigeria-specs-review", price: 175000, rating: 8.1, status: "current" },
  { brand: "Tecno", model: "Phantom V Flip", slug: "tecno-phantom-v-flip-price-nigeria-specs-review", price: 420000, rating: 8.3, status: "current" },
  { brand: "Tecno", model: "Spark Go 2024", slug: "tecno-spark-go-2024-price-nigeria-specs-review", price: 58000, rating: 7.0, status: "current" },
  { brand: "Tecno", model: "Pop 9", slug: "tecno-pop-9-price-nigeria-specs-review", price: 48000, rating: 6.8, status: "current" },
  { brand: "Infinix", model: "Note 40 Pro", slug: "infinix-note-40-pro-price-nigeria-specs-review", price: 198000, rating: 8.0, status: "current" },
  { brand: "Infinix", model: "Hot 40i", slug: "infinix-hot-40i-price-nigeria-specs-review", price: 85000, rating: 7.5, status: "current" },
  { brand: "Infinix", model: "GT 20 Pro", slug: "infinix-gt-20-pro-price-nigeria-specs-review", price: 285000, rating: 8.7, status: "current" },
  { brand: "Infinix", model: "Smart 8 Pro", slug: "infinix-smart-8-pro-price-nigeria-specs-review", price: 55000, rating: 6.9, status: "current" },
  { brand: "Samsung", model: "Galaxy A16 5G", slug: "samsung-galaxy-a16-5g-price-nigeria-specs-review", price: 248000, rating: 8.5, status: "current" },
  { brand: "Samsung", model: "Galaxy A06", slug: "samsung-galaxy-a06-price-nigeria-specs-review", price: 95000, rating: 7.2, status: "current" },
  { brand: "Samsung", model: "Galaxy S24 FE", slug: "samsung-galaxy-s24-fe-price-nigeria-specs-review", price: 680000, rating: 9.0, status: "current" },
  { brand: "Xiaomi", model: "Redmi Note 14", slug: "xiaomi-redmi-note-14-price-nigeria-specs-review", price: 185000, rating: 8.4, status: "current" },
  { brand: "Xiaomi", model: "Redmi 14C", slug: "xiaomi-redmi-14c-price-nigeria-specs-review", price: 92000, rating: 7.4, status: "current" },
  { brand: "Xiaomi", model: "POCO X6 Pro", slug: "xiaomi-poco-x6-pro-price-nigeria-specs-review", price: 265000, rating: 8.6, status: "current" },
  { brand: "OPPO", model: "Reno 11", slug: "oppo-reno-11-price-nigeria-specs-review", price: 320000, rating: 8.6, status: "current" },
  { brand: "OPPO", model: "A58", slug: "oppo-a58-price-nigeria-specs-review", price: 115000, rating: 7.6, status: "current" },
  { brand: "Realme", model: "C75", slug: "realme-c75-price-nigeria-specs-review", price: 135000, rating: 8.0, status: "current" },
  { brand: "Realme", model: "Note 60", slug: "realme-note-60-price-nigeria-specs-review", price: 72000, rating: 7.1, status: "current" },
]

const BRANDS = ["All", "Tecno", "Infinix", "Samsung", "Xiaomi", "OPPO", "Realme"]

export default function AdminPhonesPage() {
  const [search, setSearch] = useState("")
  const [brandFilter, setBrandFilter] = useState("All")

  const filtered = PHONES.filter((p) => {
    const matchSearch = p.model.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    const matchBrand = brandFilter === "All" || p.brand === brandFilter
    return matchSearch && matchBrand
  })

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-text-primary">
            Phones ({filtered.length})
          </h2>
          <p className="text-sm text-text-secondary mt-0.5">
            Manage phone prices, specs, and reviews
          </p>
        </div>
        <a
          href="/admin/phones/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Phone
        </a>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder="Search phones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-tertiary text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setBrandFilter(brand)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                brandFilter === brand
                  ? "bg-accent/10 text-accent border border-accent/20"
                  : "bg-surface border border-border text-text-secondary hover:border-accent/30"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-raised">
                <th className="text-left px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Phone</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden md:table-cell">Price</th>
                <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden lg:table-cell">Rating</th>
                <th className="text-center px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider hidden lg:table-cell">Status</th>
                <th className="text-right px-4 py-3 text-xs font-medium text-text-tertiary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filtered.map((phone) => (
                <tr key={phone.slug} className="hover:bg-surface-raised/30 transition-colors">
                  <td className="px-4 py-3.5">
                    <div>
                      <p className="text-xs text-accent font-medium">{phone.brand}</p>
                      <p className="text-sm font-medium text-text-primary">{phone.model}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 hidden md:table-cell">
                    <span className="font-mono font-semibold text-accent">{formatPrice(phone.price)}</span>
                  </td>
                  <td className="px-4 py-3.5 text-center hidden lg:table-cell">
                    <div className="inline-flex items-center gap-1">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span className="font-mono text-sm font-bold text-text-primary">{phone.rating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center hidden lg:table-cell">
                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium capitalize">
                      {phone.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center justify-end gap-1.5">
                      <a
                        href={`/phones/${phone.brand.toLowerCase()}/${phone.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-colors"
                        title="View on site"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`/admin/phones/${phone.slug}`}
                        className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-colors"
                        title="Edit phone"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </a>
                      <button
                        className="p-2 rounded-lg text-text-tertiary hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Delete phone"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Smartphone className="w-8 h-8 text-text-tertiary mx-auto mb-2" />
            <p className="text-sm text-text-secondary">No phones found</p>
          </div>
        )}
      </div>
    </div>
  )
}
