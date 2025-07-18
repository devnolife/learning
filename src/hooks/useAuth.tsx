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

// Mock auth functions for development
const mockAuth = {
  getCurrentUser: async (): Promise<User | null> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock user data
    return {
      id: '1',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'ADMIN' as const,
      avatar: '/avatars/admin.png',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date(),
    }
  },

  signIn: async (email: string, password: string): Promise<User | null> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (email === 'admin@example.com' && password === 'admin') {
      return {
        id: '1',
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'ADMIN' as const,
        avatar: '/avatars/admin.png',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date(),
      }
    } else if (email === 'user@example.com' && password === 'user') {
      return {
        id: '2',
        email: 'user@example.com',
        name: 'John Doe',
        role: 'USER' as const,
        avatar: '/avatars/user.png',
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date(),
      }
    }

    throw new Error('Invalid credentials')
  },

  signUp: async (email: string, password: string, name: string): Promise<User | null> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    return {
      id: Date.now().toString(),
      email,
      name,
      role: 'USER' as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  },

  signOut: async (): Promise<void> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    // Clear any stored tokens here
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
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const handleSignIn = async (email: string, password: string): Promise<User | null> => {
    setLoading(true)
    try {
      const result = await mockAuth.signIn(email, password)
      setUser(result)
      return result
    } catch (error) {
      console.error('Sign in failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (email: string, password: string, name: string): Promise<User | null> => {
    setLoading(true)
    try {
      const result = await mockAuth.signUp(email, password, name)
      setUser(result)
      return result
    } catch (error) {
      console.error('Sign up failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async (): Promise<void> => {
    setLoading(true)
    try {
      await mockAuth.signOut()
      setUser(null)
    } catch (error) {
      console.error('Sign out failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const contextValue: AuthContextType = {
    user,
    loading,
    isLoading: loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
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
