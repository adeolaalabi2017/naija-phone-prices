"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Plus, Trash2, GripVertical } from "lucide-react"

const TYPES = [
  { value: "buying_guide", label: "Buying Guide" },
  { value: "comparison", label: "Comparison" },
  { value: "review", label: "Review" },
  { value: "news", label: "News" },
  { value: "spec_deep_dive", label: "Spec Deep Dive" },
]

const INITIAL = {
  title: "Best Phones Under ₦50,000 in Nigeria (2026)",
  slug: "best-phone-under-50000-naira-nigeria",
  type: "buying_guide",
  excerpt:
    "From Tecno to Samsung — here are the best phones you can buy in Nigeria right now without spending more than ₦50,000.",
  content: `Looking for the best phone you can buy without spending more than ₦50,000 in Nigeria? We tested and ranked the top options available right now.

## How We Picked These Phones

Every phone on this list has been thoroughly tested by our team in Lagos. We evaluate each device based on real-world performance, camera quality, battery life, build quality, and value for money.

## What to Look for in a ₦50,000 Phone

At the ₦50,000 price point, you're entering the budget-to-midrange territory. Here's what matters most:

- **Battery:** Look for 5000mAh minimum — Nigerian power outages mean you need a phone that lasts all day
- **Display:** 90Hz or 120Hz refresh rate is becoming standard — it makes everything feel smoother
- **Storage:** 128GB minimum — Nigerian apps cache a lot of data
- **Camera:** 50MP is now standard even in budget phones

## Top Picks

### 1. Tecno Spark 30 — ₦128,000
Best overall. The 120Hz AMOLED display is unmatched at this price.

### 2. Infinix Hot 40i — ₦85,000
Best value. Reliable everyday performer with 120Hz display.

### 3. Samsung Galaxy A06 — ₦95,000
Best brand. Samsung quality and 4 years of updates.

## Should You Buy Now or Wait?

If you need a phone now, the Tecno Spark 30 is our clear winner. However, if you can wait, several brands will be launching refreshed models in August-September 2026.`,
  author: "Adeola Alabi",
  readingTime: "8",
  isFeatured: true,
  isPublished: true,
  publishedAt: "2026-07-01",
  seoTitle: "Best Phones Under ₦50,000 in Nigeria (2026)",
  seoDescription:
    "Compare the best phones under ₦50,000 in Nigeria. Top picks from Tecno, Infinix, Samsung. Full reviews, prices, and specs updated July 2026.",
}

export default function ArticleEditorPage() {
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState(INITIAL)

  function update(key: string, value: string | boolean) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    await new Promise((r) => setTimeout(r, 800))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl bg-surface-raised border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
  const labelClass = "block text-xs text-text-secondary mb-1.5 uppercase tracking-wider"

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/articles"
            className="p-2 rounded-lg border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h2 className="font-display font-semibold text-text-primary">Article Editor</h2>
            <p className="text-xs text-text-tertiary">{form.type.replace("_", " ")}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 text-sm text-text-secondary">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => update("isPublished", e.target.checked)}
              className="w-4 h-4 rounded border-border bg-surface-raised accent-accent"
            />
            Published
          </label>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : saved ? "✓ Saved" : "Save Article"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-5">
          {/* Basic Info */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-semibold text-text-primary">Article Details</h3>
            <div>
              <label className={labelClass}>Title</label>
              <input value={form.title} onChange={(e) => update("title", e.target.value)} className={inputClass} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Slug (URL)</label>
                <input value={form.slug} onChange={(e) => update("slug", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Type</label>
                <select value={form.type} onChange={(e) => update("type", e.target.value)} className={inputClass}>
                  {TYPES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelClass}>Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => update("excerpt", e.target.value)}
                rows={2}
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-text-primary">Content</h3>
              <span className="text-xs text-text-tertiary">Markdown supported</span>
            </div>
            <textarea
              value={form.content}
              onChange={(e) => update("content", e.target.value)}
              rows={20}
              className={`${inputClass} resize-y font-mono text-sm`}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* SEO */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-semibold text-text-primary">SEO</h3>
            <div>
              <label className={labelClass}>SEO Title</label>
              <input value={form.seoTitle} onChange={(e) => update("seoTitle", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>SEO Description</label>
              <textarea
                value={form.seoDescription}
                onChange={(e) => update("seoDescription", e.target.value)}
                rows={3}
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>

          {/* Meta */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-semibold text-text-primary">Meta</h3>
            <div>
              <label className={labelClass}>Author</label>
              <input value={form.author} onChange={(e) => update("author", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Reading Time (minutes)</label>
              <input type="number" value={form.readingTime} onChange={(e) => update("readingTime", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Published Date</label>
              <input type="date" value={form.publishedAt} onChange={(e) => update("publishedAt", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-text-secondary">
                <input
                  type="checkbox"
                  checked={form.isFeatured}
                  onChange={(e) => update("isFeatured", e.target.checked)}
                  className="w-4 h-4 rounded border-border bg-surface-raised accent-accent"
                />
                Featured Article
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saving..." : "Save Article"}
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-500/20 text-red-400 text-sm hover:bg-red-500/10 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete Article
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
