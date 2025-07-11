'use client'

import { useAuth } from './useAuth'

export function useRole() {
  const { user } = useAuth()

  return {
    role: user?.role,
    isAdmin: user?.role === 'ADMIN',
    isUser: user?.role === 'USER',
    isAuthenticated: !!user,
  }
}
