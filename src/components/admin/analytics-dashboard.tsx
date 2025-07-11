'use client'

import { Card } from '@/components/ui/card'
import { NumberTicker } from '@/components/magicui/number-ticker'
import {
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  Target,
  Activity,
  DollarSign,
} from 'lucide-react'

interface StatsCardProps {
  title: string
  value: number
  change?: number
  icon: React.ElementType
  description: string
  format?: 'number' | 'currency' | 'percentage'
}

function StatsCard({ title, value, change, icon: Icon, description, format = 'number' }: StatsCardProps) {
  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return `$${val.toLocaleString()}`
      case 'percentage':
        return `${val}%`
      default:
        return val.toString()
    }
  }

  return (
    <Card className="p-6 bg-slate-800/50 border-slate-700">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <div className="flex items-baseline space-x-2">
            <NumberTicker
              value={value}
              className="text-2xl font-bold text-slate-50"
            />
            {change && (
              <span className={`text-sm ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {change > 0 ? '+' : ''}{change}%
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
        <div className="h-12 w-12 rounded-lg bg-slate-700 flex items-center justify-center">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
      </div>
    </Card>
  )
}

export function AnalyticsDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: 2847,
      change: 12.5,
      icon: Users,
      description: 'Active learners this month',
    },
    {
      title: 'Course Completions',
      value: 1324,
      change: 8.2,
      icon: Award,
      description: 'Certificates issued',
    },
    {
      title: 'Revenue',
      value: 45680,
      change: 15.3,
      icon: DollarSign,
      description: 'Monthly recurring revenue',
      format: 'currency' as const,
    },
    {
      title: 'Engagement Rate',
      value: 87,
      change: 5.1,
      icon: TrendingUp,
      description: 'Daily active users',
      format: 'percentage' as const,
    },
    {
      title: 'Course Catalog',
      value: 156,
      change: 4.2,
      icon: BookOpen,
      description: 'Published courses',
    },
    {
      title: 'Study Hours',
      value: 12450,
      change: 18.7,
      icon: Clock,
      description: 'Total hours this month',
    },
    {
      title: 'Retention Rate',
      value: 94,
      change: 2.3,
      icon: Target,
      description: '30-day user retention',
      format: 'percentage' as const,
    },
    {
      title: 'Active Sessions',
      value: 1834,
      change: -3.1,
      icon: Activity,
      description: 'Current live sessions',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-50">Analytics Dashboard</h2>
        <p className="text-slate-400">Real-time insights into your learning platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart Placeholder */}
        <Card className="p-6 bg-slate-800/50 border-slate-700">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-50">User Growth</h3>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-sm text-slate-400">Last 6 months</span>
              </div>
            </div>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <TrendingUp className="h-12 w-12 text-slate-600 mx-auto" />
                <p className="text-slate-500">Chart placeholder</p>
                <p className="text-xs text-slate-600">Integration with charting library needed</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Course Performance Chart Placeholder */}
        <Card className="p-6 bg-slate-800/50 border-slate-700">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-50">Course Performance</h3>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-slate-400">Completion rates</span>
              </div>
            </div>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <BookOpen className="h-12 w-12 text-slate-600 mx-auto" />
                <p className="text-slate-500">Chart placeholder</p>
                <p className="text-xs text-slate-600">Integration with charting library needed</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-slate-800/50 border-slate-700">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-50">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'New user registration', user: 'Sarah Johnson', time: '2 minutes ago' },
              { action: 'Course completion', user: 'Mike Chen', time: '5 minutes ago' },
              { action: 'Certificate issued', user: 'Emma Davis', time: '8 minutes ago' },
              { action: 'New course published', user: 'Admin', time: '12 minutes ago' },
              { action: 'Payment received', user: 'Alex Thompson', time: '15 minutes ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                <div className="space-y-1">
                  <p className="text-sm text-slate-50">{activity.action}</p>
                  <p className="text-xs text-slate-400">by {activity.user}</p>
                </div>
                <span className="text-xs text-slate-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
