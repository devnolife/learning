import { ReactNode } from 'react'
import { UserProvider } from '@/components/user/user-provider'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <UserProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#f8f6f0' }}>
        {children}
      </div>
    </UserProvider>
  )
}
