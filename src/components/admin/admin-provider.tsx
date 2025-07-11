'use client'

import { createContext, useContext, ReactNode } from 'react'

interface AdminContextType {
  // Add admin-specific state and methods here
  theme: 'dark'
  notifications: number
  onlineUsers: number
  activeSessions: number
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const value: AdminContextType = {
    theme: 'dark',
    notifications: 3,
    onlineUsers: 247,
    activeSessions: 89,
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
