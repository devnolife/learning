'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BookOpen,
  BarChart3,
  Award,
  User,
  PlayCircle,
  Calendar,
  Target,
  Star,
  TrendingUp,
} from 'lucide-react'

const userSidebarNavItems = [
  {
    title: 'My Dashboard',
    href: '/dashboard',
    icon: BarChart3,
    description: 'Overview & Stats',
  },
  {
    title: 'My Courses',
    href: '/courses',
    icon: BookOpen,
    description: 'Enrolled Courses',
    badge: '5',
  },
  {
    title: 'Continue Learning',
    href: '/courses/current',
    icon: PlayCircle,
    description: 'Resume Progress',
    highlight: true,
  },
  {
    title: 'Learning Path',
    href: '/progress',
    icon: Target,
    description: 'Track Progress',
  },
  {
    title: 'Achievements',
    href: '/achievements',
    icon: Award,
    description: 'Badges & Certificates',
    badge: '12',
  },
  {
    title: 'Schedule',
    href: '/schedule',
    icon: Calendar,
    description: 'Study Plan',
  },
  {
    title: 'Favorites',
    href: '/favorites',
    icon: Star,
    description: 'Saved Content',
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: User,
    description: 'Settings & Preferences',
  },
]

export function UserSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white/80 backdrop-blur-sm border-r border-blue-200">
      {/* Progress Summary */}
      <div className="p-4 border-b border-blue-100">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Weekly Goal</span>
            <span className="text-sm text-blue-600 font-medium">60%</span>
          </div>
          <Progress value={60} className="h-2" />
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <TrendingUp className="h-3 w-3" />
            <span>12 hours this week</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-1 px-3 py-4">
        {userSidebarNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                'w-full justify-start h-auto p-3 text-left text-gray-600 hover:text-gray-900 hover:bg-blue-50',
                isActive && 'bg-blue-50 text-blue-700 border border-blue-200',
                item.highlight && 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
              )}
              asChild
            >
              <Link href={item.href}>
                <div className="flex items-start space-x-3 w-full">
                  <Icon className={cn(
                    "h-5 w-5 mt-0.5 flex-shrink-0",
                    isActive && "text-blue-600",
                    item.highlight && "text-blue-600"
                  )} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm truncate">{item.title}</span>
                      {item.badge && (
                        <Badge
                          className={cn(
                            'ml-2 text-xs',
                            isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                          )}
                          variant="secondary"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 block truncate">{item.description}</span>
                  </div>
                </div>
              </Link>
            </Button>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="border-t border-blue-100 p-4">
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-blue-50 rounded-lg p-2">
            <div className="text-lg font-bold text-blue-600">5</div>
            <div className="text-xs text-gray-600">Courses</div>
          </div>
          <div className="bg-green-50 rounded-lg p-2">
            <div className="text-lg font-bold text-green-600">87%</div>
            <div className="text-xs text-gray-600">Progress</div>
          </div>
        </div>
      </div>
    </div>
  )
}
