'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  Settings,
  Shield,
  AlertTriangle,
  Database,
  MessageSquare,
  FileText,
} from 'lucide-react'

const adminSidebarNavItems = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
    badge: null,
  },
  {
    title: 'User Management',
    href: '/admin/users',
    icon: Users,
    badge: '247',
  },
  {
    title: 'Course Management',
    href: '/admin/courses',
    icon: BookOpen,
    badge: '12',
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
    badge: null,
  },
  {
    title: 'Reports',
    href: '/admin/reports',
    icon: FileText,
    badge: null,
  },
  {
    title: 'Messages',
    href: '/admin/messages',
    icon: MessageSquare,
    badge: '5',
  },
  {
    title: 'System Health',
    href: '/admin/system',
    icon: Database,
    badge: 'OK',
    badgeColor: 'bg-green-500',
  },
  {
    title: 'Security',
    href: '/admin/security',
    icon: Shield,
    badge: '2',
    badgeColor: 'bg-yellow-500',
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    badge: null,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-slate-900 border-r border-slate-800">
      {/* Sidebar Header */}
      <div className="flex items-center space-x-2 px-4 py-6 border-b border-slate-800">
        <Shield className="h-6 w-6 text-blue-400" />
        <span className="text-lg font-semibold text-slate-50">Admin Portal</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-1 px-3 py-4">
        {adminSidebarNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                'w-full justify-start h-11 px-3 text-slate-300 hover:text-slate-50 hover:bg-slate-800',
                isActive && 'bg-slate-800 text-slate-50 border border-slate-700'
              )}
              asChild
            >
              <Link href={item.href}>
                <Icon className="mr-3 h-4 w-4" />
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && (
                  <Badge
                    className={cn(
                      'ml-2 text-xs',
                      item.badgeColor || 'bg-blue-500 text-white'
                    )}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </Button>
          )
        })}
      </div>

      {/* System Status Footer */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span>System Online</span>
          </div>
          <span>•</span>
          <span>v2.1.0</span>
        </div>
      </div>
    </div>
  )
}
