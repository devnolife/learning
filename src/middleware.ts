import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get the session token
  const sessionToken = request.cookies.get('session-token')?.value
  const authToken = request.headers.get('authorization')?.replace('Bearer ', '')
  const token = sessionToken || authToken

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/about', '/pricing', '/login', '/register', '/demo']
  const isPublicRoute = publicRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  )

  // API routes that don't require authentication
  const publicApiRoutes = ['/api/auth/login', '/api/auth/register', '/api/auth/refresh']
  const isPublicApiRoute = publicApiRoutes.some(route => pathname.startsWith(route))

  // Static files and assets
  const isStaticFile = pathname.includes('.') || pathname.startsWith('/_next')

  // Allow access to public routes and static files
  if (isPublicRoute || isPublicApiRoute || isStaticFile) {
    return NextResponse.next()
  }

  // Admin routes
  const adminRoutes = ['/admin']
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route))

  // User dashboard routes
  const userRoutes = ['/dashboard', '/courses', '/progress', '/profile']
  const isUserRoute = userRoutes.some(route => pathname.startsWith(route))

  // Protected API routes
  const protectedApiRoutes = ['/api/admin', '/api/users', '/api/courses']
  const isProtectedApiRoute = protectedApiRoutes.some(route => pathname.startsWith(route))

  // If accessing protected routes without token, redirect to login
  if (!token && (isAdminRoute || isUserRoute || isProtectedApiRoute)) {
    if (isProtectedApiRoute) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Verify token and get user role
  let userRole: 'USER' | 'ADMIN' | null = null
  if (token) {
    try {
      const payload = await verifyToken(token)
      userRole = payload.role as 'USER' | 'ADMIN'
    } catch (error) {
      // Invalid token, redirect to login
      if (isProtectedApiRoute) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
      }
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Role-based route protection
  if (isAdminRoute && userRole !== 'ADMIN') {
    if (isProtectedApiRoute) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // User routes accessible by both USER and ADMIN
  if (isUserRoute && !['USER', 'ADMIN'].includes(userRole!)) {
    if (isProtectedApiRoute) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Admin API routes
  if (pathname.startsWith('/api/admin') && userRole !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  // Add user info to headers for downstream use
  if (userRole) {
    const response = NextResponse.next()
    response.headers.set('x-user-role', userRole)
    return response
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
