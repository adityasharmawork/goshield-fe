// lib/security.ts
import type { NextRequest } from "next/server";

/**
 * Shared security helpers for App Router demo routes.
 * Demo-only: replace in-memory stores with Redis / managed services for production.
 */

export const MALICIOUS_IPS = new Set([
  // TEST-NET addresses for demo
  "198.51.100.10",
  "198.51.100.20",
  "203.0.113.50",
]);

export function getClientIp(req: NextRequest): string {
  // X-Forwarded-For preferred behind proxies (Vercel, Cloudflare)
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  // NextRequest doesn't expose socket; fallback to CF-Connecting-IP or a header
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf;
  // last resort, mark unknown
  return "unknown";
}

export function isIpBlacklisted(ip: string) {
  // In prod: CIDR checks, threat feeds, ASN lists, etc.
  return MALICIOUS_IPS.has(ip);
}

/* ---------- Cookie parsing helpers (NextRequest has cookies API) ---------- */
export function getCookieValue(req: NextRequest, name: string): string | undefined {
  try {
    // NextRequest.cookies.get returns { name, value } | undefined
    // Types can vary across Next.js versions; use safe access
    const c = (req as any).cookies?.get?.(name);
    if (!c) return undefined;
    return typeof c === "string" ? c : c?.value;
  } catch {
    // Fallback: attempt header parse
    const raw = req.headers.get("cookie") ?? "";
    const found = raw.split(";").map(s => s.trim()).find(s => s.startsWith(name + "="));
    if (!found) return undefined;
    return decodeURIComponent(found.split("=").slice(1).join("="));
  }
}

/* ---------- Simple Bot Detection ---------- */

const BOT_UA_SIGNATURES = [
  "bot",
  "crawler",
  "spider",
  "python-requests",
  "curl",
  "wget",
  "scrapy",
];

export function basicBotScore(req: NextRequest) {
  let score = 0;
  const ua = (req.headers.get("user-agent") ?? "").toLowerCase();
  if (!ua || ua.length < 10) score += 20; // suspiciously short UA
  for (const sig of BOT_UA_SIGNATURES) {
    if (ua.includes(sig)) {
      score += 50;
      break;
    }
  }

  if (!req.headers.get("accept-language")) score += 5;
  if (!req.headers.get("referer")) score += 2;

  const humanCookie = getCookieValue(req, "__human_verified");
  if (humanCookie === "1") score -= 40;

  // honeypot query param detection
  try {
    const url = new URL(req.url);
    if (url.searchParams.has("hp")) score += 30;
  } catch {}

  return Math.max(0, score);
}

/* ---------- Simple DDoS / Rate-limiter (in-memory) ---------- */

type Bucket = {
  tokens: number;
  lastRefill: number; // epoch ms
  refillRatePerSec: number;
  capacity: number;
};

export const ipBuckets = new Map<string, Bucket>();

export function getBucketForIp(ip: string) {
  const now = Date.now();
  let b = ipBuckets.get(ip);
  if (!b) {
    b = { tokens: 100, lastRefill: now, refillRatePerSec: 5, capacity: 100 };
    ipBuckets.set(ip, b);
    return b;
  }
  const elapsed = (now - b.lastRefill) / 1000;
  const refill = elapsed * b.refillRatePerSec;
  if (refill > 0) {
    b.tokens = Math.min(b.capacity, b.tokens + refill);
    b.lastRefill = now;
  }
  return b;
}

export function tryConsumeTokens(ip: string, cost = 1): boolean {
  const b = getBucketForIp(ip);
  if (b.tokens >= cost) {
    b.tokens -= cost;
    return true;
  }
  return false;
}

/* Periodic cleanup for demo memory hygiene (note: serverless platforms may not keep this process alive) */
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const cutoff = Date.now() - 1000 * 60 * 60; // 1 hour
    for (const [ip, b] of ipBuckets.entries()) {
      if (b.lastRefill < cutoff) ipBuckets.delete(ip);
    }
  }, 1000 * 60 * 15);
}

/* Lightweight audit logger */
export function auditLog(tag: string, data: Record<string, any>) {
  // Replace with structured logging in prod
  try {
    console.log(`[SEC][${new Date().toISOString()}][${tag}]`, JSON.stringify(data));
  } catch {
    // noop on logging failure
  }
}
