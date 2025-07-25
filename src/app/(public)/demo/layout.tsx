import { ReactNode } from 'react'

interface DemoLayoutProps {
  children: ReactNode
}

export default function DemoLayout({ children }: DemoLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {children}
    </div>
  )
}
