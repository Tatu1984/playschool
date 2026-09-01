import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SESSION_COOKIE = "gms_session";

// ---- Beats subdomain -------------------------------------------------------
// beats.climbkiddo.com serves the Beats dance academy site, which lives on the
// /beats route of this same app. The subdomain root is rewritten onto it so
// visitors never see /beats in the address bar.
const BEATS_HOST_PREFIX = "beats.";

function beatsRewrite(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  if (!host.startsWith(BEATS_HOST_PREFIX)) return null;

  const { pathname } = req.nextUrl;
  if (pathname === "/beats" || pathname.startsWith("/beats/")) return null;
  if (pathname.startsWith("/api/") || pathname.startsWith("/_next/")) return null;

  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? "/beats" : `/beats${pathname}`;
  return NextResponse.rewrite(url);
}

// ---- Legacy GMS (marketing gallery admin) ----------------------------------
function verifyToken(value: string | undefined): boolean {
  if (!value) return false;
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) return false;
  try {
    const expected = crypto
      .createHmac("sha256", secret)
      .update("gms-valid")
      .digest("hex");
    if (expected.length !== value.length) return false;
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(value));
  } catch {
    return false;
  }
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const beats = beatsRewrite(req);
  if (beats) return beats;

  // The matcher now spans every page route so the Beats host can be detected.
  // Everything outside the GMS area passes straight through.
  if (!pathname.startsWith("/gms") && !pathname.startsWith("/api/gms")) {
    return NextResponse.next();
  }

  // Allow login + logout endpoints
  if (
    pathname === "/gms/login" ||
    pathname === "/api/gms/login" ||
    pathname === "/api/gms/logout"
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (verifyToken(token)) {
    return NextResponse.next();
  }

  // Block API → 401 JSON; pages → redirect to login
  if (pathname.startsWith("/api/gms")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = req.nextUrl.clone();
  url.pathname = "/gms/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Everything except static assets — the Beats host rewrite needs to see
    // page requests, and the GMS gating above exits early for public paths.
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|txt|xml|woff2?)$).*)",
  ],
};
