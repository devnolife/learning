export interface User {
  id: string
  email: string
  name: string
  role: 'USER' | 'ADMIN'
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Session {
  user: User
  expires: string
}
