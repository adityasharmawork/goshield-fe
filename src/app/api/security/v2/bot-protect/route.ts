// app/api/bot-protect/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { basicBotScore, auditLog, getCookieValue } from "../../../../../../lib/security";

export async function GET(req: NextRequest) {
  const score = basicBotScore(req);
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? req.headers.get("cf-connecting-ip") ?? "unknown";

  auditLog("BOT_PROTECTION_CHECK", {
    ip,
    path: req.url,
    userAgent: req.headers.get("user-agent") ?? "",
    score,
  });

  if (score >= 60) {
    return NextResponse.json({ allowed: false, reason: "High bot score", score }, { status: 403 });
  }

  if (score >= 25) {
    const verified = getCookieValue(req, "__human_verified");
    if (verified !== "1") {
      // In production: respond with a JS challenge page (HTML) that sets a cookie from client JS.
      // For demo we return 202 with a hint to the challenge endpoint.
      return NextResponse.json(
        {
          allowed: false,
          reason: "JS challenge required",
          challenge: "/api/challenge (demo)",
          score,
        },
        { status: 202 }
      );
    }
  }

  return NextResponse.json({ allowed: true, score }, { status: 200 });
}

// POST variant: show how to accept client-side token from challenge
export async function POST(req: NextRequest) {
  // Demo: client posts { verified: true } after passing challenge
  try {
    const payload = await req.json();
    if (payload?.verified === true) {
      const res = NextResponse.json({ allowed: true }, { status: 200 });
      // Set a cookie so subsequent requests are recognized as human (demo cookie options)
      res.headers.append("Set-Cookie", "__human_verified=1; Path=/; HttpOnly; Max-Age=3600");
      return res;
    }
    return NextResponse.json({ allowed: false }, { status: 400 });
  } catch {
    return NextResponse.json({ allowed: false }, { status: 400 });
  }
}
