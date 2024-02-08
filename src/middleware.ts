import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const pagesThatTheAdminCannotAccess = ["/p/dashboard", "/"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authfofao.token")?.value;

  const isAdminUser = request.cookies.get("authfofao.role")?.value;

  if (!token) return NextResponse.rewrite(new URL("/", request.url));

  const isPrivateAdminRoute = request.nextUrl.pathname.startsWith("/p/a");
  const isPrivateCustomerRoutesBoolean = pagesThatTheAdminCannotAccess.map(
    (i) => request.nextUrl.pathname === i
  );
  const isPrivateCustomerRoute = isPrivateCustomerRoutesBoolean.some((p) => p);

  if (isPrivateAdminRoute && !isAdminUser) {
    return NextResponse.rewrite(new URL("/p/gotched-points", request.url));
  }

  if (isPrivateCustomerRoute && isAdminUser) {
    return NextResponse.rewrite(
      new URL("/p/a/registration-points-req", request.url)
    );
  }
}

export const config = {
  matcher: [
    "/",
    "/p/:path*",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
