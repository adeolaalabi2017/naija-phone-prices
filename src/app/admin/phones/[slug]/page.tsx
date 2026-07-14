"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save, Plus, Trash2 } from "lucide-react"

// Pre-filled with Tecno Spark 30 data for demo
const INITIAL = {
  brand: "Tecno",
  model: "Spark 30",
  slug: "tecno-spark-30-price-nigeria-specs-review",
  status: "current",
  display: "6.67 inches, AMOLED, 120Hz",
  processor: "MediaTek Helio G91 Ultra",
  ram: "8GB",
  storage: "256GB",
  battery: "5000mAh",
  fastCharging: "18W",
  rearCamera: "50MP + 2MP + AI lens",
  frontCamera: "8MP",
  os: "Android 14, HiOS 14",
  network: "4G LTE",
  colors: "Obsidian Black, Cerulean Blue, Sahara Sand",
  weight: "190g",
  dimensions: "163.6 x 75.6 x 8.3mm",
  fingerprint: "Side-mounted",
  headphoneJack: "Yes",
  priceAmount: "128000",
  priceSource: "Cybervilla",
  priceSourceUrl: "https://cybervilla.io/tecno-spark-30",
  rating: "8.2",
  reviewTitle: "Tecno Spark 30 Review — The Budget King of 2025?",
  reviewVerdict:
    "The Tecno Spark 30 is the best phone you can buy under ₦150,000 in Nigeria right now. It delivers a premium 120Hz AMOLED display, all-day battery life, and a capable camera in a package that feels far more expensive than it is.",
  reviewPros: "120Hz AMOLED display — exceptional at this price\n5000mAh battery delivers all-day power\n256GB storage as standard\n50MP camera takes vibrant photos\nPremium design with matte finish\n3.5mm headphone jack included",
  reviewCons:
    "No 5G connectivity\n18W charging is slow by 2025 standards\nNo ultrawide camera",
  reviewContent:
    "The Tecno Spark 30 is the latest entry in Tecno's bestselling Spark series.\n\nDESIGN & DISPLAY\nThe Spark 30 looks far more expensive than it is. The 6.67-inch AMOLED display with 120Hz refresh rate is genuinely impressive at this price.\n\nPERFORMANCE\nPowered by the MediaTek Helio G91 Ultra, the Spark 30 handles day-to-day tasks with ease. Gaming is surprisingly capable.\n\nCAMERA\nThe 50MP main sensor takes surprisingly detailed photos in good lighting.\n\nBATTERY\nThe 5000mAh battery easily lasts a full day of heavy use.",
}

export default function PhoneEditorPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState(INITIAL)

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    // In production: call Convex mutation
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
            href="/admin/phones"
            className="p-2 rounded-lg border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h2 className="font-display font-semibold text-text-primary">
              {form.brand} {form.model}
            </h2>
            <p className="text-xs text-text-tertiary">Phone Editor</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`/phones/${form.brand.toLowerCase()}/${form.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-border text-text-secondary text-sm hover:border-accent hover:text-accent transition-colors"
          >
            Preview →
          </a>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : saved ? "✓ Saved" : "Save Phone"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-5">
          {/* Basic Info */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-semibold text-text-primary">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Brand</label>
                <input value={form.brand} onChange={(e) => update("brand", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Model</label>
                <input value={form.model} onChange={(e) => update("model", e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Slug (URL)</label>
              <input value={form.slug} onChange={(e) => update("slug", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Status</label>
              <select value={form.status} onChange={(e) => update("status", e.target.value)} className={inputClass}>
                <option value="current">Current</option>
                <option value="discontinued">Discontinued</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-semibold text-text-primary">Full Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Display", key: "display" },
                { label: "Processor", key: "processor" },
                { label: "RAM", key: "ram" },
                { label: "Storage", key: "storage" },
                { label: "Battery", key: "battery" },
                { label: "Fast Charging", key: "fastCharging" },
                { label: "Rear Camera", key: "rearCamera" },
                { label: "Front Camera", key: "frontCamera" },
                { label: "OS", key: "os" },
                { label: "Network", key: "network" },
                { label: "Colors", key: "colors" },
                { label: "Weight", key: "weight" },
                { label: "Dimensions", key: "dimensions" },
                { label: "Fingerprint", key: "fingerprint" },
                { label: "Headphone Jack", key: "headphoneJack" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className={labelClass}>{label}</label>
                  <input value={form[key as keyof typeof form]} onChange={(e) => update(key, e.target.value)} className={inputClass} />
                </div>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-semibold text-text-primary">Review</h3>
            <div>
              <label className={labelClass}>Rating (out of 10)</label>
              <input type="number" step="0.1" min="0" max="10" value={form.rating} onChange={(e) => update("rating", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Review Title</label>
              <input value={form.reviewTitle} onChange={(e) => update("reviewTitle", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Review Content (one paragraph per line)</label>
              <textarea
                value={form.reviewContent}
                onChange={(e) => update("reviewContent", e.target.value)}
                rows={8}
                className={`${inputClass} resize-y`}
              />
            </div>
            <div>
              <label className={labelClass}>Pros (one per line)</label>
              <textarea
                value={form.reviewPros}
                onChange={(e) => update("reviewPros", e.target.value)}
                rows={4}
                className={`${inputClass} resize-y`}
              />
            </div>
            <div>
              <label className={labelClass}>Cons (one per line)</label>
              <textarea
                value={form.reviewCons}
                onChange={(e) => update("reviewCons", e.target.value)}
                rows={3}
                className={`${inputClass} resize-y`}
              />
            </div>
            <div>
              <label className={labelClass}>Verdict</label>
              <textarea
                value={form.reviewVerdict}
                onChange={(e) => update("reviewVerdict", e.target.value)}
                rows={3}
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Price */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-semibold text-text-primary">Pricing</h3>
            <div>
              <label className={labelClass}>Price (₦)</label>
              <input type="number" value={form.priceAmount} onChange={(e) => update("priceAmount", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Source</label>
              <select value={form.priceSource} onChange={(e) => update("priceSource", e.target.value)} className={inputClass}>
                <option value="Cybervilla">Cybervilla</option>
                <option value="Slot">Slot.ng</option>
                <option value="Jumia">Jumia</option>
                <option value="Konga">Konga</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Source URL</label>
              <input value={form.priceSourceUrl} onChange={(e) => update("priceSourceUrl", e.target.value)} className={inputClass} />
            </div>
          </div>

          {/* Actions */}
          <div className="bg-surface border border-border rounded-2xl p-5 space-y-2">
            <h3 className="font-display font-semibold text-text-primary mb-3">Actions</h3>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-500/20 text-red-400 text-sm hover:bg-red-500/10 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete Phone
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
