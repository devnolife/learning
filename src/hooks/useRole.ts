'use client'

import { useAuth } from './useAuth'

export function useRole() {
  const { user } = useAuth()

  const hasRole = (role: 'USER' | 'ADMIN') => {
    return user?.role === role
  }

  const hasAnyRole = (roles: ('USER' | 'ADMIN')[]) => {
    return roles.some(role => user?.role === role)
  }

  return {
    role: user?.role,
    isAdmin: user?.role === 'ADMIN',
    isUser: user?.role === 'USER',
    isAuthenticated: !!user,
    hasRole,
    hasAnyRole,
  }
}
