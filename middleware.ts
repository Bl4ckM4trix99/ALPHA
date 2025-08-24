import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// For CORS
const corsHeaders = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-CSRF-Token',
  'Access-Control-Allow-Credentials': 'true',
}

export async function middleware(request: NextRequest) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsHeaders })
  }

  const response = NextResponse.next()

  // Basic security headers
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self'; connect-src 'self' https:; frame-ancestors 'none';`
  )
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')

  // Prevent LFI/RFI attempts
  const path = request.nextUrl.pathname
  if (path.includes('..') || path.includes('//')) {
    return NextResponse.redirect(new URL('/404', request.url))
  }

  // CSRF protection for non-GET requests
  if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    const csrfToken = request.cookies.get('csrf-token')
    const headerToken = request.headers.get('x-csrf-token')

    if (!csrfToken || !headerToken || csrfToken.value !== headerToken) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      )
    }
  }

  // Set CSRF token if not exists
  if (!request.cookies.has('csrf-token')) {
    const csrfToken = crypto.randomUUID()
    response.cookies.set('csrf-token', csrfToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    })
  }

  return response
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|public/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
