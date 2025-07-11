'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SparklesText } from '@/components/magicui/sparkles-text'
import {
  Trophy,
  Target,
  Calendar,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  Star,
  Flame,
  CheckCircle,
} from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ElementType
  unlocked: boolean
  progress?: number
  total?: number
}

interface LearningStreak {
  current: number
  longest: number
  target: number
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: CheckCircle,
    unlocked: true,
  },
  {
    id: '2',
    title: 'Marathon Runner',
    description: 'Study for 7 days in a row',
    icon: Flame,
    unlocked: true,
  },
  {
    id: '3',
    title: 'Course Master',
    description: 'Complete 5 courses',
    icon: Trophy,
    unlocked: false,
    progress: 3,
    total: 5,
  },
  {
    id: '4',
    title: 'Time Keeper',
    description: 'Study for 100 hours total',
    icon: Clock,
    unlocked: false,
    progress: 67,
    total: 100,
  },
  {
    id: '5',
    title: 'Perfect Score',
    description: 'Get 100% on 10 quizzes',
    icon: Star,
    unlocked: false,
    progress: 7,
    total: 10,
  },
  {
    id: '6',
    title: 'Knowledge Seeker',
    description: 'Complete 50 lessons',
    icon: BookOpen,
    unlocked: false,
    progress: 34,
    total: 50,
  },
]

export function ProgressTracker() {
  const learningStreak: LearningStreak = {
    current: 12,
    longest: 18,
    target: 30,
  }

  const weeklyStats = {
    hoursStudied: 12.5,
    lessonsCompleted: 8,
    quizzesCompleted: 3,
    target: 15,
  }

  const recentlyUnlocked = achievements.filter(a => a.unlocked).slice(-2)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Learning Progress</h1>
        <p className="text-gray-600">Track your learning journey and celebrate achievements</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Learning Streak */}
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <Flame className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Learning Streak</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-gray-900">{learningStreak.current}</span>
                <span className="text-sm text-gray-500">days</span>
              </div>
              <p className="text-xs text-orange-600">🔥 Keep it up!</p>
            </div>
          </div>
        </Card>

        {/* Weekly Goal */}
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">Weekly Goal</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-gray-900">{weeklyStats.hoursStudied}</span>
                <span className="text-sm text-gray-500">/ {weeklyStats.target}h</span>
              </div>
              <Progress value={(weeklyStats.hoursStudied / weeklyStats.target) * 100} className="h-1 mt-2" />
            </div>
          </div>
        </Card>

        {/* Total XP */}
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total XP</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-gray-900">2,450</span>
                <span className="text-sm text-gray-500">points</span>
              </div>
              <p className="text-xs text-purple-600">Level 5</p>
            </div>
          </div>
        </Card>

        {/* Completion Rate */}
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-gray-900">87</span>
                <span className="text-sm text-gray-500">%</span>
              </div>
              <p className="text-xs text-green-600">Above average!</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recently Unlocked Achievements */}
      {recentlyUnlocked.length > 0 && (
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <SparklesText className="text-lg font-semibold text-gray-900">
                Recently Unlocked!
              </SparklesText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentlyUnlocked.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{achievement.title}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      )}

      {/* Achievements Grid */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            <Badge variant="secondary">
              {achievements.filter(a => a.unlocked).length} / {achievements.length} unlocked
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              const progressPercent = achievement.progress && achievement.total
                ? (achievement.progress / achievement.total) * 100
                : 0

              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border transition-colors ${achievement.unlocked
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-200'
                    }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${achievement.unlocked
                        ? 'bg-green-100'
                        : 'bg-gray-100'
                      }`}>
                      <Icon className={`h-5 w-5 ${achievement.unlocked
                          ? 'text-green-600'
                          : 'text-gray-400'
                        }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className={`font-medium truncate ${achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                          {achievement.title}
                        </p>
                        {achievement.unlocked && (
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        )}
                      </div>
                      <p className={`text-sm ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        {achievement.description}
                      </p>
                      {!achievement.unlocked && achievement.progress && achievement.total && (
                        <div className="mt-2 space-y-1">
                          <Progress value={progressPercent} className="h-1" />
                          <p className="text-xs text-gray-500">
                            {achievement.progress} / {achievement.total}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Card>

      {/* Learning Calendar */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Learning Calendar</h3>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              View Full Calendar
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {/* Calendar header */}
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="p-2 text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}

            {/* Calendar days - simplified representation */}
            {Array.from({ length: 21 }, (_, i) => {
              const hasActivity = Math.random() > 0.3 // Random activity for demo
              const intensity = hasActivity ? Math.floor(Math.random() * 4) + 1 : 0

              return (
                <div
                  key={i}
                  className={`aspect-square p-2 rounded text-xs flex items-center justify-center ${intensity === 0 ? 'bg-gray-100' :
                      intensity === 1 ? 'bg-blue-100 text-blue-700' :
                        intensity === 2 ? 'bg-blue-200 text-blue-800' :
                          intensity === 3 ? 'bg-blue-300 text-blue-900' :
                            'bg-blue-400 text-white'
                    }`}
                >
                  {i + 1}
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Less</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-100 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-200 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
