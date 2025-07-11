'use client'

import { createContext, useContext, ReactNode } from 'react'

interface UserContextType {
  // Add user-specific state and methods here
  theme: 'light'
  progress: {
    weeklyGoal: number
    currentProgress: number
    coursesEnrolled: number
    achievementsUnlocked: number
    totalXP: number
    currentLevel: number
  }
  preferences: {
    dailyGoal: number
    notifications: boolean
    theme: 'light' | 'dark' | 'auto'
  }
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const value: UserContextType = {
    theme: 'light',
    progress: {
      weeklyGoal: 20,
      currentProgress: 12,
      coursesEnrolled: 5,
      achievementsUnlocked: 12,
      totalXP: 2450,
      currentLevel: 5,
    },
    preferences: {
      dailyGoal: 5,
      notifications: true,
      theme: 'light',
    },
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
