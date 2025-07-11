import { User } from '@/types/auth'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export interface TokenPayload {
  userId: string
  email: string
  role: 'USER' | 'ADMIN'
  iat?: number
  exp?: number
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as TokenPayload
    return payload
  } catch (error) {
    throw new Error('Invalid token')
  }
}

export function generateToken(user: User): string {
  const payload: TokenPayload = {
    userId: user.id,
    email: user.email,
    role: user.role,
  }

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d', // Token expires in 7 days
  })
}

export async function refreshToken(token: string): Promise<string> {
  try {
    const payload = await verifyToken(token)
    // Generate new token with fresh expiration
    return jwt.sign(
      { userId: payload.userId, email: payload.email, role: payload.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    )
  } catch (error) {
    throw new Error('Invalid token for refresh')
  }
}

// Mock authentication functions - replace with your auth provider
export async function getCurrentUser(): Promise<User | null> {
  // This would typically check for a session token, JWT, etc.
  // For now, return a mock user
  return {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export async function signIn(email: string, password: string): Promise<User | null> {
  // Mock sign in logic
  console.log('Signing in with:', email, password)

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    id: '1',
    email,
    name: 'John Doe',
    role: email.includes('admin') ? 'ADMIN' : 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export async function signUp(email: string, password: string, name: string): Promise<User | null> {
  // Mock sign up logic
  console.log('Signing up with:', email, password, name)

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    role: 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export async function signOut(): Promise<void> {
  // Mock sign out logic
  console.log('Signing out')

  // Clear session, redirect, etc.
}
