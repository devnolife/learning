'use client'

import { Bell, Search, Settings, User, Shield, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { NumberTicker } from '@/components/magicui/number-ticker'

export function AdminHeader() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left side - Logo and Search */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-slate-50">Admin Panel</span>
          </div>

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search users, courses..."
              className="w-80 pl-10 bg-slate-800 border-slate-700 text-slate-50 placeholder:text-slate-400 focus:border-blue-400"
            />
          </div>
        </div>

        {/* Right side - Stats and Actions */}
        <div className="flex items-center space-x-4">
          {/* Live Stats */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-400">Online Users:</span>
              <NumberTicker value={247} className="text-green-400 font-medium" />
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-blue-400" />
              <span className="text-slate-400">Active Sessions:</span>
              <NumberTicker value={89} className="text-blue-400 font-medium" />
            </div>
          </div>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-slate-50">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-slate-800 border-slate-700">
              <DropdownMenuLabel className="text-slate-50">System Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">New user registration</p>
                  <p className="text-xs text-slate-400">John Doe joined 5 minutes ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Course completion spike</p>
                  <p className="text-xs text-slate-400">React Basics course seeing high activity</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Server maintenance scheduled</p>
                  <p className="text-xs text-slate-400">Tomorrow at 2:00 AM UTC</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-50">
            <Settings className="h-5 w-5" />
          </Button>

          {/* Admin Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/admin.png" alt="Admin" />
                  <AvatarFallback className="bg-slate-700 text-slate-50">AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-800 border-slate-700" align="end">
              <DropdownMenuLabel className="text-slate-50">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-slate-400">admin@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem className="text-red-400 hover:bg-slate-700">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
