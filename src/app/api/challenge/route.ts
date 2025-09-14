// app/api/challenge/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const returnTo = url.searchParams.get("returnTo") || "/";

  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Verifying</title>
  </head>
  <body>
    <p>Verifying you are human…</p>
    <script>
      // demo: set a cookie and redirect back
      // NOTE: HttpOnly cannot be set from client JS; this is demo-only cookie.
      document.cookie = "__human_verified=1; Path=/; Max-Age=3600; SameSite=Lax";
      // small delay for realism
      setTimeout(() => {
        window.location.href = ${JSON.stringify(returnTo)};
      }, 600);
    </script>
  </body>
</html>`;

  const res = new NextResponse(html, { status: 200 });
  res.headers.set("Content-Type", "text/html; charset=utf-8");
  return res;
}
