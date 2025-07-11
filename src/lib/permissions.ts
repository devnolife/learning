import { User } from '@/types/auth'

export type Permission =
  | 'VIEW_DASHBOARD'
  | 'VIEW_COURSES'
  | 'ENROLL_COURSE'
  | 'VIEW_PROGRESS'
  | 'EDIT_PROFILE'
  | 'ADMIN_DASHBOARD'
  | 'MANAGE_USERS'
  | 'MANAGE_COURSES'
  | 'VIEW_ANALYTICS'
  | 'ADMIN_SETTINGS'

export const ROLE_PERMISSIONS: Record<'USER' | 'ADMIN', Permission[]> = {
  USER: [
    'VIEW_DASHBOARD',
    'VIEW_COURSES',
    'ENROLL_COURSE',
    'VIEW_PROGRESS',
    'EDIT_PROFILE',
  ],
  ADMIN: [
    'VIEW_DASHBOARD',
    'VIEW_COURSES',
    'ENROLL_COURSE',
    'VIEW_PROGRESS',
    'EDIT_PROFILE',
    'ADMIN_DASHBOARD',
    'MANAGE_USERS',
    'MANAGE_COURSES',
    'VIEW_ANALYTICS',
    'ADMIN_SETTINGS',
  ],
}

export function hasPermission(user: User | null, permission: Permission): boolean {
  if (!user) return false

  const userPermissions = ROLE_PERMISSIONS[user.role] || []
  return userPermissions.includes(permission)
}

export function hasAnyPermission(user: User | null, permissions: Permission[]): boolean {
  return permissions.some(permission => hasPermission(user, permission))
}

export function hasAllPermissions(user: User | null, permissions: Permission[]): boolean {
  return permissions.every(permission => hasPermission(user, permission))
}

export function canAccessAdminRoutes(user: User | null): boolean {
  return hasPermission(user, 'ADMIN_DASHBOARD')
}

export function canAccessUserRoutes(user: User | null): boolean {
  return hasPermission(user, 'VIEW_DASHBOARD')
}
