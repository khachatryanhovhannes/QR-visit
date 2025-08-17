import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple in-memory rate limit (for demo/dev only)
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // max requests per window
const ipHits: Record<string, { count: number; last: number }> = {};

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const hit = ipHits[ip] || { count: 0, last: now };

  if (now - hit.last > RATE_LIMIT_WINDOW) {
    hit.count = 1;
    hit.last = now;
  } else {
    hit.count += 1;
  }
  ipHits[ip] = hit;

  // Protect signup and profile update endpoints
  if (
    request.nextUrl.pathname.startsWith("/api/signup") ||
    request.nextUrl.pathname.startsWith("/api/profile/update")
  ) {
    if (hit.count > RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/signup", "/api/profile/update"],
};
