'use client'

import { ReactNode } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRole } from '@/hooks/useRole'

interface RoleBasedComponentProps {
  children: ReactNode
  allowedRoles: ('USER' | 'ADMIN')[]
  fallback?: ReactNode
}

export function RoleBasedComponent({
  children,
  allowedRoles,
  fallback = null
}: RoleBasedComponentProps) {
  const { user } = useAuth()
  const { hasRole } = useRole()

  // If user is not authenticated, return fallback
  if (!user) {
    return <>{fallback}</>
  }

  // Check if user has required role
  const hasPermission = allowedRoles.some(role => hasRole(role))

  if (!hasPermission) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Convenient wrapper components
export function AdminOnly({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  return (
    <RoleBasedComponent allowedRoles={['ADMIN']} fallback={fallback}>
      {children}
    </RoleBasedComponent>
  )
}

export function UserOnly({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  return (
    <RoleBasedComponent allowedRoles={['USER']} fallback={fallback}>
      {children}
    </RoleBasedComponent>
  )
}

export function AuthenticatedOnly({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  return (
    <RoleBasedComponent allowedRoles={['USER', 'ADMIN']} fallback={fallback}>
      {children}
    </RoleBasedComponent>
  )
}
