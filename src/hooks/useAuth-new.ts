'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { User } from '@/types/auth'

interface AuthContextType {
  user: User | null
  loading: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<User | null>
  signUp: (email: string, password: string, name: string) => Promise<User | null>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock auth functions for now
const mockAuth = {
  getCurrentUser: async (): Promise<User | null> => {
    // Mock implementation
    return {
      id: '1',
      email: 'user@example.com',
      name: 'Test User',
      role: 'USER' as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  },
  signIn: async (email: string, password: string): Promise<User | null> => {
    console.log('Mock sign in:', email, password)
    return mockAuth.getCurrentUser()
  },
  signUp: async (email: string, password: string, name: string): Promise<User | null> => {
    console.log('Mock sign up:', email, password, name)
    return mockAuth.getCurrentUser()
  },
  signOut: async (): Promise<void> => {
    console.log('Mock sign out')
  },
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUser() {
      try {
        const currentUser = await mockAuth.getCurrentUser()
        setUser(currentUser)
      } catch (error) {
        console.error('Failed to load user:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const handleSignIn = async (email: string, password: string) => {
    const result = await mockAuth.signIn(email, password)
    setUser(result)
    return result
  }

  const handleSignUp = async (email: string, password: string, name: string) => {
    const result = await mockAuth.signUp(email, password, name)
    setUser(result)
    return result
  }

  const handleSignOut = async () => {
    await mockAuth.signOut()
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    loading,
    isLoading: loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  }

  return (
    <AuthContext.Provider value= { value } >
    { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
