'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { useRole } from '@/hooks/useRole'

interface AuthWrapperProps {
  children: ReactNode
  requireAuth?: boolean
  allowedRoles?: ('USER' | 'ADMIN')[]
  redirectTo?: string
}

export function AuthWrapper({
  children,
  requireAuth = true,
  allowedRoles = ['USER', 'ADMIN'],
  redirectTo
}: AuthWrapperProps) {
  const { user, isLoading } = useAuth()
  const { hasAnyRole } = useRole()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Don't redirect while loading
    if (isLoading) return

    // If authentication is required but user is not authenticated
    if (requireAuth && !user) {
      const loginUrl = `/login?from=${encodeURIComponent(pathname)}`
      router.push(redirectTo || loginUrl)
      return
    }

    // If user is authenticated but doesn't have required role
    if (user && !hasAnyRole(allowedRoles)) {
      // Redirect admin users to admin dashboard, regular users to user dashboard
      const defaultRedirect = user.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard'
      router.push(redirectTo || defaultRedirect)
      return
    }
  }, [user, isLoading, requireAuth, allowedRoles, router, pathname, redirectTo, hasAnyRole])

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // If authentication is required but user is not authenticated, don't render children
  if (requireAuth && !user) {
    return null
  }

  // If user doesn't have required role, don't render children
  if (user && !hasAnyRole(allowedRoles)) {
    return null
  }

  return <>{children}</>
}

// Convenient wrapper components
export function AdminRoute({ children }: { children: ReactNode }) {
  return (
    <AuthWrapper allowedRoles={['ADMIN']}>
      {children}
    </AuthWrapper>
  )
}

export function UserRoute({ children }: { children: ReactNode }) {
  return (
    <AuthWrapper allowedRoles={['USER', 'ADMIN']}>
      {children}
    </AuthWrapper>
  )
}

export function PublicRoute({ children }: { children: ReactNode }) {
  return (
    <AuthWrapper requireAuth={false}>
      {children}
    </AuthWrapper>
  )
}
