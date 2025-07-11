import { ReactNode } from 'react'
import { UserSidebar } from '@/components/user/user-sidebar'
import { UserHeader } from '@/components/user/user-header'
import { UserProvider } from '@/components/user/user-provider'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <UserHeader />
        <div className="flex h-[calc(100vh-4rem)]">
          <UserSidebar />
          <main className="flex-1 overflow-auto">
            <div className="p-6 space-y-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </UserProvider>
  )
}
