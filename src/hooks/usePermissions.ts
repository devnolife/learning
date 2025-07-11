'use client'

import { useAuth } from './useAuth'
import { hasPermission, hasAnyPermission, hasAllPermissions, Permission } from '@/lib/permissions'

export function usePermissions() {
  const { user } = useAuth()

  return {
    hasPermission: (permission: Permission) => hasPermission(user, permission),
    hasAnyPermission: (permissions: Permission[]) => hasAnyPermission(user, permissions),
    hasAllPermissions: (permissions: Permission[]) => hasAllPermissions(user, permissions),
    canAccessAdmin: () => hasPermission(user, 'ADMIN_DASHBOARD'),
    canAccessUser: () => hasPermission(user, 'VIEW_DASHBOARD'),
  }
}
