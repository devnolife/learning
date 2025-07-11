import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get the session token (you would implement this based on your auth solution)
  const sessionToken = request.cookies.get('session-token')?.value

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/about', '/pricing', '/login', '/register']
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  // API routes that don't require authentication
  const publicApiRoutes = ['/api/auth']
  const isPublicApiRoute = publicApiRoutes.some(route => pathname.startsWith(route))

  // Admin routes
  const adminRoutes = ['/admin']
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route))

  // User dashboard routes
  const userRoutes = ['/dashboard', '/courses', '/progress', '/profile']
  const isUserRoute = userRoutes.some(route => pathname.startsWith(route))

  // If it's a public route, allow access
  if (isPublicRoute || isPublicApiRoute) {
    return NextResponse.next()
  }

  // If user is not authenticated, redirect to login
  if (!sessionToken) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Here you would decode the session token to get user role
  // For now, we'll mock this behavior
  const mockUserRole = pathname.includes('/admin') ? 'ADMIN' : 'USER'

  // Check admin routes
  if (isAdminRoute && mockUserRole !== 'ADMIN') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Check user routes
  if (isUserRoute && !['USER', 'ADMIN'].includes(mockUserRole)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}
