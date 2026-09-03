import { NextRequest, NextResponse } from "next/server";
import { TEAM_SESSION_COOKIE, isValidSessionToken } from "@/lib/team-auth";

export const config = {
  matcher: ["/team/:path*"],
};

// Node runtime (not Edge) so this can use Node's crypto module for
// signature verification.
export const runtime = "nodejs";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The login page and its API route must stay reachable while logged out.
  if (pathname === "/team/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(TEAM_SESSION_COOKIE)?.value;
  if (!isValidSessionToken(token)) {
    const loginUrl = new URL("/team/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
