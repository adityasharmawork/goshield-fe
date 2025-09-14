// app/api/ddos-protect/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { tryConsumeTokens, getBucketForIp, auditLog, getClientIp } from "../../../../../../lib/security";

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  const cost = 1; // lightweight GET
  const allowed = tryConsumeTokens(ip, cost);

  // peek remaining tokens for demo (do NOT expose in production)
  const bucket = getBucketForIp(ip);
  const remaining = Math.floor(bucket.tokens);

  auditLog("DDOS_RATE_LIMIT", { ip, method: "GET", path: req.url, allowed, cost, remaining });

  if (!allowed) {
    const res = NextResponse.json(
      {
        ok: false,
        reason: "Rate limit exceeded. Slow down or solve a challenge.",
        remainingTokens: remaining,
      },
      { status: 429 }
    );
    res.headers.set("Retry-After", "10"); // demo hint
    return res;
  }

  return NextResponse.json({ ok: true, remainingTokens: remaining }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const cost = 5; // heavier POST endpoints cost more
  const allowed = tryConsumeTokens(ip, cost);
  const bucket = getBucketForIp(ip);
  const remaining = Math.floor(bucket.tokens);

  auditLog("DDOS_RATE_LIMIT", { ip, method: "POST", path: req.url, allowed, cost, remaining });

  if (!allowed) {
    const res = NextResponse.json(
      {
        ok: false,
        reason: "Rate limit exceeded for write operation.",
        remainingTokens: remaining,
      },
      { status: 429 }
    );
    res.headers.set("Retry-After", "20");
    return res;
  }

  // proceed with demo processing
  return NextResponse.json({ ok: true, remainingTokens: remaining }, { status: 200 });
}
