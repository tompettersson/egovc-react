import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, type Locale } from '@/lib/i18n/config';

// Paths that should not be localized
const publicPaths = [
  '/api',
  '/admin',
  '/_next',
  '/images',
  '/fonts',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
];

function getLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return null;
}

function getLocaleFromHeaders(request: NextRequest): Locale {
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().substring(0, 2).toLowerCase());

    for (const preferredLocale of preferredLocales) {
      if (locales.includes(preferredLocale as Locale)) {
        return preferredLocale as Locale;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if locale is already in the path
  const pathnameLocale = getLocaleFromPath(pathname);

  if (pathnameLocale) {
    // Locale is in path, continue
    return NextResponse.next();
  }

  // No locale in path, redirect to localized version
  const locale = getLocaleFromHeaders(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
