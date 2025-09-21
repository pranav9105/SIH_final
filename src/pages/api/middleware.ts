// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Allow webhook/WhatsApp API without login
  if (pathname.startsWith("/api/send-whatsapp")) {
    return NextResponse.next();
  }

  // ❌ Example: check login for other routes
  const username = req.cookies.get("username");
  if (!username) {
    return NextResponse.json(
      { error: "username is required" },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: ["/api/:path*"],
};
