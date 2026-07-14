import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "naija-phone-prices-admin-secret-change-in-production"
)

export async function createToken(payload: {
  id: string
  email: string
  name: string
  role: string
}) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET)
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET)
    return payload
  } catch {
    return null
  }
}

// Valid admin credentials (replace with DB check in production)
const ADMIN_USERS = [
  {
    id: "admin-1",
    email: "alabiadeolamikel@gmail.com",
    name: "Adeola Alabi",
    password: process.env.ADMIN_PASSWORD || "NaijaPhone2026!",
    role: "admin",
  },
]

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    const user = ADMIN_USERS.find((u) => u.email === email && u.password === password)
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const token = await createToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })

    const cookieStore = await cookies()
    cookieStore.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
