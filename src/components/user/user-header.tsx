'use client'

import { Search, Bell, Award, BookOpen, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SparklesText } from '@/components/magicui/sparkles-text'

export function UserHeader() {
  return (
    <header className="h-16 border-b border-blue-200 bg-white/80 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left side - Logo and Welcome */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <SparklesText
              className="text-xl font-bold text-gray-900"
              sparklesCount={3}
            >
              Learning Hub
            </SparklesText>
          </div>

          <div className="hidden md:block text-sm text-gray-600">
            Welcome back! Continue your learning journey 🚀
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search courses, lessons..."
              className="w-full pl-10 bg-white border-gray-200 focus:border-blue-400 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Right side - Progress and Actions */}
        <div className="flex items-center space-x-4">
          {/* Daily Progress */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="text-right">
              <div className="text-xs text-gray-500">Daily Goal</div>
              <div className="text-sm font-medium text-gray-900">3/5 lessons</div>
            </div>
            <div className="w-16">
              <Progress value={60} className="h-2" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>

          {/* Achievements */}
          <Button variant="ghost" size="icon" className="relative text-amber-500 hover:text-amber-600">
            <Award className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-amber-500 text-white">
              2
            </Badge>
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-blue-500 text-white">
                  1
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">New lesson available!</p>
                  <p className="text-xs text-gray-500">Advanced React Patterns - Chapter 5</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Achievement unlocked!</p>
                  <p className="text-xs text-gray-500">You've completed 10 lessons in a row! 🎉</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/user.png" alt="User" />
                  <AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-500">john@example.com</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="text-xs">Level 5</Badge>
                    <span className="text-xs text-gray-500">2,450 XP</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                Learning Preferences
              </DropdownMenuItem>
              <DropdownMenuItem>
                Certificates
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
