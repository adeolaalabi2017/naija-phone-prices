import { useAdminStore } from "@/lib/admin/store"
import {
  Smartphone,
  FileText,
  TrendingUp,
  DollarSign,
  Eye,
  Clock,
  BarChart3,
  ArrowUpRight,
} from "lucide-react"

export default function AdminDashboardPage() {
  // In production these come from Convex queries
  const stats = [
    {
      label: "Total Phones",
      value: "20",
      change: "+3 this month",
      icon: Smartphone,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      label: "Articles & Guides",
      value: "12",
      change: "+4 this month",
      icon: FileText,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      label: "Monthly Visitors",
      value: "—",
      change: "Connect Convex to track",
      icon: TrendingUp,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      label: "Affiliate Clicks",
      value: "—",
      change: "Connect Convex to track",
      icon: DollarSign,
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ]

  const recentActivity = [
    { action: "Phone updated", item: "Tecno Spark 30", time: "2 hours ago" },
    { action: "Article published", item: "Best Phones Under ₦50K", time: "1 day ago" },
    { action: "Price updated", item: "Samsung Galaxy A16 5G", time: "2 days ago" },
    { action: "Comparison created", item: "Spark 30 vs Hot 40i", time: "3 days ago" },
  ]

  const quickActions = [
    { label: "Add New Phone", href: "/admin/phones/new", color: "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20" },
    { label: "Write Article", href: "/admin/articles/new", color: "bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20" },
    { label: "Add Comparison", href: "/admin/comparisons/new", color: "bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20" },
    { label: "Update Prices", href: "/admin/phones", color: "bg-accent/10 border-accent/20 text-accent hover:bg-accent/20" },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, icon: Icon, color, bg }) => (
          <div
            key={label}
            className="bg-surface border border-border rounded-2xl p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <span className="text-xs text-text-tertiary">{change}</span>
            </div>
            <p className="font-mono font-bold text-2xl text-text-primary mb-0.5">{value}</p>
            <p className="text-xs text-text-secondary">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-2xl p-5">
          <h3 className="font-display font-semibold text-text-primary mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map(({ action, item, time }, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-raised flex items-center justify-center flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-text-tertiary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary">{action}</p>
                    <p className="text-xs text-accent">{item}</p>
                  </div>
                </div>
                <span className="text-xs text-text-tertiary">{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-surface border border-border rounded-2xl p-5">
          <h3 className="font-display font-semibold text-text-primary mb-4">
            Quick Actions
          </h3>
          <div className="space-y-2">
            {quickActions.map(({ label, href, color }) => (
              <a
                key={label}
                href={href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${color}`}
              >
                <span className="text-sm font-medium">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Note */}
      <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <BarChart3 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-1">
              Connect Convex for Analytics
            </h4>
            <p className="text-sm text-text-secondary">
              To track real visitor numbers, affiliate clicks, and search impressions, run{" "}
              <code className="px-1.5 py-0.5 rounded bg-surface-raised text-accent text-xs font-mono">
                npx convex dev
              </code>{" "}
              and deploy your Convex project. Analytics will populate here automatically once connected.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
