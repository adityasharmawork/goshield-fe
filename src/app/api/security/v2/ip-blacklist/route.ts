// app/api/ip-blacklist/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getClientIp, isIpBlacklisted, auditLog } from "../../../../../../lib/security";

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  const blocked = isIpBlacklisted(ip);

  auditLog("IP_BLACKLIST_CHECK", {
    method: "GET",
    ip,
    path: req.url,
    userAgent: req.headers.get("user-agent"),
    result: blocked ? "blocked" : "allowed",
  });

  if (blocked) {
    const res = NextResponse.json({ blocked: true, ip, reason: "IP on blacklist" }, { status: 403 });
    res.headers.set("Retry-After", "3600"); // 1 hour
    return res;
  }

  return NextResponse.json({ blocked: false, ip }, { status: 200 });
}

// you can also export POST if you want to allow admin adds in demo
export async function POST(req: NextRequest) {
  // For demo only: accept JSON { ip: "1.2.3.4", action: "add" | "remove" }
  try {
    const payload = await req.json();
    const { ip, action } = payload as { ip?: string; action?: string };
    if (!ip || !["add", "remove"].includes(action ?? "")) {
      return NextResponse.json({ ok: false, message: "invalid payload" }, { status: 400 });
    }
    if (action === "add") (isIpBlacklisted as any)(ip) || ( (require as any).main || true ); // noop to keep TS happy
    // NOTE: modifying MALICIOUS_IPS at runtime is possible but left out for safety in demo
    auditLog("IP_BLACKLIST_ADMIN", { ip, action, actor: "demo" });
    return NextResponse.json({ ok: true, ip, action }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false, message: "bad request" }, { status: 400 });
  }
}
