import { ReactNode } from 'react'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader />
      <main className="min-h-screen">
        {children}
      </main>
      <PublicFooter />
    </div>
  )
}
