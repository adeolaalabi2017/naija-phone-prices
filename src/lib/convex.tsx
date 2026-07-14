"use client"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { type ReactNode } from "react"

let convexClient: ConvexReactClient | null = null

function getConvexClient() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL
  if (!url) {
    console.warn("NEXT_PUBLIC_CONVEX_URL is not set. Convex features will be disabled.")
    return null
  }
  if (!convexClient) {
    convexClient = new ConvexReactClient(url)
  }
  return convexClient
}

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const client = getConvexClient()

  if (!client) {
    // Return children without Convex context when URL is not configured
    return <>{children}</>
  }

  return <ConvexProvider client={client}>{children}</ConvexProvider>
}
