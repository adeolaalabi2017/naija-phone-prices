"use client"

import { useState, useEffect } from "react"

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    siteName: "NaijaPhonePrices",
    siteUrl: "https://naijaphoneprices.com",
    description: "Nigeria's smartest phone price guide",
    adminEmail: "alabiadeolamikel@gmail.com",
    twitterHandle: "@AdeolaAlabi84",
    defaultAffiliateRetailer: "cybervilla",
    priceUpdateFrequency: "weekly",
  })

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold text-text-primary mb-1">Settings</h2>
        <p className="text-sm text-text-secondary">Configure your site and admin preferences</p>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        {/* Site Info */}
        <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
          <h3 className="font-display font-semibold text-text-primary">Site Information</h3>
          {[
            { label: "Site Name", key: "siteName", type: "text" },
            { label: "Site URL", key: "siteUrl", type: "url" },
            { label: "Site Description", key: "description", type: "text" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="block text-xs text-text-secondary mb-1.5 uppercase tracking-wider">{label}</label>
              <input
                type={type}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-raised border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
          <h3 className="font-display font-semibold text-text-primary">Social</h3>
          {[
            { label: "Admin Email", key: "adminEmail", type: "email" },
            { label: "Twitter/X Handle", key: "twitterHandle", type: "text" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="block text-xs text-text-secondary mb-1.5 uppercase tracking-wider">{label}</label>
              <input
                type={type}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-raised border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
          <h3 className="font-display font-semibold text-text-primary">Pricing</h3>
          <div>
            <label className="block text-xs text-text-secondary mb-1.5 uppercase tracking-wider">Default Affiliate Retailer</label>
            <select
              value={form.defaultAffiliateRetailer}
              onChange={(e) => setForm({ ...form, defaultAffiliateRetailer: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-surface-raised border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
            >
              <option value="cybervilla">Cybervilla</option>
              <option value="slot">Slot.ng</option>
              <option value="jumia">Jumia</option>
              <option value="konga">Konga</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-text-secondary mb-1.5 uppercase tracking-wider">Price Update Frequency</label>
            <select
              value={form.priceUpdateFrequency}
              onChange={(e) => setForm({ ...form, priceUpdateFrequency: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-surface-raised border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        {/* Save */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors flex items-center gap-2"
          >
            {saved ? "✓ Saved!" : "Save Settings"}
          </button>
          {saved && <span className="text-sm text-green-400">Settings updated successfully.</span>}
        </div>
      </form>
    </div>
  )
}
