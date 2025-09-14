// import { NextRequest, NextResponse } from 'next/server';

// // --- Re-use the logic from your API routes ---
// // In a real app, you would move this logic to a shared file, e.g., 'src/lib/security.ts'

// // IP Blacklist Logic
// const IP_BLACKLIST = new Set(['198.51.100.12', '104.28.1.137']);

// // Rate Limiter Logic
// const requestTracker = new Map<string, { count: number; windowStart: number }>();
// const TIME_WINDOW_SECONDS = 60;
// const MAX_REQUESTS_PER_WINDOW = 100;

// const isRateLimited = (ip: string): boolean => {
//     const currentTime = Date.now();
//     const record = requestTracker.get(ip);
//     if (!record || (currentTime - record.windowStart > TIME_WINDOW_SECONDS * 1000)) {
//         requestTracker.set(ip, { count: 1, windowStart: currentTime });
//         return false;
//     }
//     record.count++;
//     return record.count > MAX_REQUESTS_PER_WINDOW;
// };


// export function middleware(req: NextRequest) {
//   // Get the IP address
//   const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim();
//   const { pathname } = req.nextUrl;
  
//   console.log(`[Middleware] Processing request for ${pathname} from IP: ${ip}`);

//   // --- Layer 1: IP Blacklist Check (Fastest check first) ---
//   if (IP_BLACKLIST.has(ip)) {
//     console.warn(`[Middleware] Denied blacklisted IP: ${ip}`);
//     // Redirect to a 'blocked' page
//     return NextResponse.rewrite(new URL('/blocked', req.url));
//   }

//   // --- Layer 3: DDoS Protection / Rate Limiting ---
//   if (isRateLimited(ip)) {
//     console.warn(`[Middleware] Rate limit exceeded for IP: ${ip}`);
//     return new NextResponse('Too many requests.', { status: 429 });
//   }

//   // If all checks pass, allow the request to proceed to the destination page/api
//   return NextResponse.next();
// }

// // Use the 'matcher' to specify which paths this middleware should run on.
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - /blocked (the page we redirect blocked users to)
//      */
//     '/((?!_next/static|_next/image|favicon.ico|blocked).*)',
//   ],
// };














// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getClientIp, isIpBlacklisted, tryConsumeTokens } from '../lib/security';

// // This function is the "bouncer at the door"
// export function middleware(request: NextRequest) {
//   // Only run this security middleware on the dashboard page
//   if (request.nextUrl.pathname.startsWith('/')) {
//     const ip = getClientIp(request);

//     // --- Layer 1: IP Blacklist Check (Server-Side) ---
//     if (isIpBlacklisted(ip)) {
//       // If the IP is blacklisted, show a "blocked" page instead.
//       // NextResponse.rewrite keeps the URL the same but shows different content.
//       console.warn(`[Middleware] Denied blacklisted IP: ${ip}`);
//       return NextResponse.rewrite(new URL('/blocked', request.url));
//     }

//     // --- Layer 2: DDoS Protection / Rate Limiting (Server-Side) ---
//     if (!tryConsumeTokens(ip)) {
//       // If rate limited, return a "Too Many Requests" response.
//       console.warn(`[Middleware] Rate limit exceeded for IP: ${ip}`);
//       return new NextResponse('Too many requests.', { status: 429 });
//     }
//   }

//   // If all checks pass, allow the user to proceed to the requested page.
//   return NextResponse.next();
// }

// // Optional: You can also use a matcher to specify which paths to run on.
// // This is often cleaner than an if-statement inside the middleware.
// /*
// export const config = {
//   matcher: '/dashboard/:path*',
// };
// */






// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getClientIp, basicBotScore, isIpBlacklisted, getCookieValue } from "../lib/security";

/**
 * Global protection middleware:
 * - Protects pages + API routes by default
 * - Excludes Next.js internals & common static assets to avoid breaking the dev/build pipeline
 * - Avoids rewriting the challenge endpoint (prevents loop)
 * - Lightweight & Edge-friendly — keep heavy state in server APIs (Redis, Upstash)
 */

export function middleware(req: NextRequest) {
  // Don't run for Next internals or common static files (tweak as needed)
  // If you add other static folders (e.g. /public/images) include them here.
  const path = req.nextUrl.pathname;
  const SKIP_PREFIXES = [
    "/_next/",
    "/static/",
    "/images/",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
    "/manifest.json",
    "/api/challenge", // do not rewrite the challenge endpoint
  ];
  for (const p of SKIP_PREFIXES) {
    if (path.startsWith(p)) return NextResponse.next();
  }

  // Example allowlist: allow health checks or internal probes by path or header
  if (path === "/health" || path === "/status") return NextResponse.next();

  // Accept a trusted internal header (useful for load-balancer probes)
  const internalHeader = req.headers.get("x-internal-probe");
  if (internalHeader === "1") return NextResponse.next();

  // Accept site admins / authenticated users (optional)
  // Example: if you use a secure session cookie 'gs_session' or similar, let them through.
  const session = getCookieValue(req, "gs_session"); // adapt cookie name to your app
  if (session) return NextResponse.next();

  // Lightweight security checks:
  const ip = getClientIp(req);
  // 1) Immediate IP blacklist
  if (isIpBlacklisted(ip)) {
    return new NextResponse(JSON.stringify({ ok: false, reason: "IP blacklisted" }), {
      status: 403,
      headers: { "content-type": "application/json" },
    });
  }

  // 2) Bot heuristics
  const score = basicBotScore(req);
  // If attacker -> block
  if (score >= 60) {
    return new NextResponse(JSON.stringify({ ok: false, reason: "High bot score" }), {
      status: 403,
      headers: { "content-type": "application/json" },
    });
  }

  // 3) Medium suspicion -> issue challenge
  if (score >= 25) {
    // If already verified by the small demo cookie, allow
    const humanVerified = getCookieValue(req, "__human_verified");
    if (humanVerified === "1") return NextResponse.next();

    // rewrite to the challenge page while preserving original return path
    const challengeUrl = new URL("/api/challenge", req.url);
    challengeUrl.searchParams.set("returnTo", req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.rewrite(challengeUrl);
  }

  // default: allow request
  return NextResponse.next();
}

/**
 * Matcher: apply middleware to everything EXCEPT common Next internals / static assets.
 * The pattern below matches any path but we excluded internals in code for clarity.
 *
 * If you prefer to explicitly match everything, you can use: matcher: ['/((?!_next).*)']
 */
export const config = {
  // This matcher ensures the middleware runs broadly. We filtered internals inside the function.
  matcher: ["/:path*"],
};
