import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SESSION_COOKIE = "gms_session";

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
  matcher: ["/gms/:path*", "/api/gms/:path*"],
};
