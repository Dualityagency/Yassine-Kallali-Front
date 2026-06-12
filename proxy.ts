import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

/**
 * Removes the internal port from an absolute URL and fixes relative URLs.
 * Preserves the original hostname (www or non-www) from the Location header
 * or falls back to the request's Host header for relative redirects.
 */
function fixRedirectLocation(location: string, request: NextRequest): string {
  // Case 1: relative path (e.g. "/" or "/some-path")
  if (location.startsWith("/")) {
    // Get the public host from the request's Host header
    const publicHost = request.headers.get("host") ;
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    return `${protocol}://${publicHost}${location}`;
  }

  // Case 2: absolute URL – remove port from hostname if present
  try {
    const url = new URL(location);
    // Remove any port (e.g. :3006) from the hostname
    const hostWithoutPort = url.hostname + (url.port ? "" : "");
    // Rebuild with the same protocol and hostname (no port)
    return `${url.protocol}//${hostWithoutPort}${url.pathname}${url.search}${url.hash}`;
  } catch {
    // Invalid URL – leave unchanged
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
  console.log("Original Location:", location);
  const fixedLocation = fixRedirectLocation(location, request);
  console.log("Fixed Location:", fixedLocation);
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