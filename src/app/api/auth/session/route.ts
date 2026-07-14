import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyToken } from "../login/route"

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_session")?.value

  if (!token) {
    return NextResponse.json({ user: null })
  }

  const payload = await verifyToken(token)
  if (!payload) {
    return NextResponse.json({ user: null })
  }

  return NextResponse.json({
    user: {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role,
    },
  })
}
