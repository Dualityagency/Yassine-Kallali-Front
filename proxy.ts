import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

function getProtocol(request: NextRequest, host: string): string {
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) return forwarded;
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) return "http";
  return "https";
}

/**
 * Rewrites redirect targets to use the public host from the incoming request.
 * Keeps the port when present (e.g. localhost:3000 in dev) and drops internal
 * hostnames/ports that may appear in upstream Location headers in production.
 */
function fixRedirectLocation(location: string, request: NextRequest): string {
  const publicHost = request.headers.get("host");
  if (!publicHost) return location;

  const protocol = getProtocol(request, publicHost);

  // Case 1: relative path (e.g. "/" or "/some-path")
  if (location.startsWith("/")) {
    return `${protocol}://${publicHost}${location}`;
  }

  // Case 2: absolute URL – replace host with the request's public host
  try {
    const url = new URL(location);
    return `${protocol}://${publicHost}${url.pathname}${url.search}${url.hash}`;
  } catch {
    return location;
  }
}

export default function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);

  // Only handle redirects (3xx status codes)
  if (response.status < 300 || response.status >= 400) {
    return response;
  }

  const location = response.headers.get("location");
  if (!location) return response;
  const fixedLocation = fixRedirectLocation(location, request);
  if (fixedLocation === location) return response;

  return NextResponse.redirect(fixedLocation, response.status);
}

export const config = {
  matcher: [
    "/",
    "/(fr|en|ar)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};