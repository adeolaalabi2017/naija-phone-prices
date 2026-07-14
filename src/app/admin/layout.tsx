"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useAdminStore } from "@/lib/admin/store"
import {
  LayoutDashboard,
  Smartphone,
  FileText,
  GitCompare,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react"

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/phones", label: "Phones", icon: Smartphone },
  { href: "/admin/articles", label: "Articles & Guides", icon: FileText },
  { href: "/admin/comparisons", label: "Comparisons", icon: GitCompare },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { currentUser, setCurrentUser, isLoading, setLoading } = useAdminStore()

  const isLogin = pathname === "/admin/login"

  useEffect(() => {
    if (isLogin) {
      setLoading(false)
      return
    }

    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setCurrentUser(data.user)
        } else {
          router.replace("/admin/login")
        }
        setLoading(false)
      })
      .catch(() => {
        router.replace("/admin/login")
        setLoading(false)
      })
  }, [pathname, isLogin, setCurrentUser, setLoading, router])

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" })
    setCurrentUser(null)
    router.replace("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-text-secondary">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  if (isLogin) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-border flex flex-col bg-surface">
        {/* Logo */}
        <div className="px-5 py-4 border-b border-border">
          <Link href="/admin/dashboard" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <span className="text-background font-bold text-sm">NP</span>
            </div>
            <div>
              <span className="font-display font-bold text-sm text-text-primary">
                NaijaPhone<span className="text-accent">Prices</span>
              </span>
              <p className="text-[10px] text-text-tertiary">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-raised"
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {label}
                {active && <ChevronRight className="w-3 h-3 ml-auto" />}
              </Link>
            )
          })}
        </nav>

        {/* User + Logout */}
        <div className="px-3 py-4 border-t border-border space-y-1">
          {currentUser && (
            <div className="px-3 py-2 mb-1">
              <p className="text-sm font-medium text-text-primary truncate">{currentUser.name}</p>
              <p className="text-xs text-text-tertiary truncate">{currentUser.email}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl px-6 py-3.5 flex items-center justify-between">
          <div>
            <h2 className="font-display font-semibold text-text-primary">
              {NAV_ITEMS.find((n) => n.href === pathname)?.label || "Admin"}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-secondary hover:text-accent transition-colors"
            >
              View Site →
            </a>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
