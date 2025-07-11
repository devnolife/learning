import { ReactNode } from 'react'
import { AdminNav } from '@/components/admin/admin-nav'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { AdminHeader } from '@/components/admin/admin-header'
import { AdminProvider } from '@/components/admin/admin-provider'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <AdminHeader />
        <div className="flex h-[calc(100vh-4rem)]">
          <AdminSidebar />
          <main className="flex-1 overflow-auto">
            <div className="p-6 space-y-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AdminProvider>
  )
}
