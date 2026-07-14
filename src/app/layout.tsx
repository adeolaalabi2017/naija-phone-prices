import type { Metadata } from "next"
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ConvexClientProvider } from "@/lib/convex"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "NaijaPhonePrices — Phone Prices in Nigeria | Specs & Reviews",
    template: "%s | NaijaPhonePrices",
  },
  description:
    "Compare phone prices in Nigeria. Latest Tecno, Samsung, Infinix, iPhone prices in Naira. Full specs, honest reviews, and where to buy.",
  keywords: [
    "phone price Nigeria",
    "Tecno price Nigeria",
    "Samsung price Nigeria",
    "Infinix price Nigeria",
    "iPhone price Nigeria",
    "best phone under 50000 Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://naijaphoneprices.com",
    siteName: "NaijaPhonePrices",
    title: "NaijaPhonePrices — Phone Prices in Nigeria",
    description:
      "Compare phone prices in Nigeria. Latest Tecno, Samsung, Infinix, iPhone prices in Naira.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NaijaPhonePrices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AdeolaAlabi84",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary min-h-screen`}
      >
        <ConvexClientProvider>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
              <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-background font-bold text-sm">NP</span>
                  </div>
                  <span className="font-display font-bold text-xl text-text-primary">
                    NaijaPhone<span className="text-accent">Prices</span>
                  </span>
                </a>
                <nav className="hidden md:flex items-center gap-6">
                  <a href="/phones" className="text-sm text-text-secondary hover:text-accent transition-colors">
                    Phones
                  </a>
                  <a href="/guides" className="text-sm text-text-secondary hover:text-accent transition-colors">
                    Buying Guides
                  </a>
                  <a href="/comparisons" className="text-sm text-text-secondary hover:text-accent transition-colors">
                    Comparisons
                  </a>
                  <a href="/reviews" className="text-sm text-text-secondary hover:text-accent transition-colors">
                    Reviews
                  </a>
                </nav>
                <div className="flex items-center gap-3">
                  <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-sm text-text-secondary hover:border-accent hover:text-accent transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border bg-surface py-12 mt-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                        <span className="text-background font-bold text-sm">NP</span>
                      </div>
                      <span className="font-display font-bold text-xl">
                        NaijaPhone<span className="text-accent">Prices</span>
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                      Nigeria&apos;s most trusted phone price and spec resource. We help Nigerians make smarter phone buying decisions with honest reviews, current prices, and expert guidance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-text-primary mb-4">Browse</h4>
                    <ul className="space-y-2">
                      {["All Phones", "Tecno", "Samsung", "Infinix", "iPhone", "Xiaomi"].map((brand) => (
                        <li key={brand}>
                          <a href={`/phones/${brand.toLowerCase()}`} className="text-sm text-text-secondary hover:text-accent transition-colors">
                            {brand}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-text-primary mb-4">Guides</h4>
                    <ul className="space-y-2">
                      {["Best Under ₦50K", "Best Under ₦100K", "Best Under ₦200K", "5G Phones", "Camera Phones"].map((guide) => (
                        <li key={guide}>
                          <a href={`/guides/${guide.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-sm text-text-secondary hover:text-accent transition-colors">
                            {guide}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-text-tertiary text-sm">
                    © 2026 NaijaPhonePrices. Prices subject to change.
                  </p>
                  <p className="text-text-tertiary text-sm">
                    We may earn commission from affiliate links — at no extra cost to you.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
