"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Menu,
  X,
  BookOpen,
  Users,
  Award,
  Settings,
  User,
  ChevronDown,
  Play,
  Star
} from 'lucide-react'

interface PlatformHeaderProps {
  variant?: 'public' | 'dashboard' | 'admin'
  currentPath?: string
}

export function PlatformHeader({ variant = 'public', currentPath = '/' }: PlatformHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

  const publicNavItems = [
    { href: '/', label: 'Beranda', icon: BookOpen },
    { href: '/courses', label: 'Kursus', icon: BookOpen },
    { href: '/about', label: 'Tentang', icon: Users },
    { href: '/pricing', label: 'Harga', icon: Award },
  ]

  const dashboardNavItems = [
    { href: '/dashboard', label: 'Dashboard', icon: BookOpen },
    { href: '/courses', label: 'Kursus Saya', icon: BookOpen },
    { href: '/progress', label: 'Progress', icon: Award },
    { href: '/community', label: 'Komunitas', icon: Users },
  ]

  const adminNavItems = [
    { href: '/admin', label: 'Dashboard', icon: BookOpen },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/courses', label: 'Courses', icon: BookOpen },
    { href: '/admin/analytics', label: 'Analytics', icon: Award },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ]

  const getNavItems = () => {
    switch (variant) {
      case 'dashboard':
        return dashboardNavItems
      case 'admin':
        return adminNavItems
      default:
        return publicNavItems
    }
  }

  const getHeaderStyles = () => {
    switch (variant) {
      case 'admin':
        return 'bg-brand-navy border-brand-navy/20'
      case 'dashboard':
        return 'bg-brand-primary border-brand-primary/20'
      default:
        return 'bg-brand-primary border-brand-primary/20'
    }
  }

  const isActiveLink = (href: string) => {
    if (href === '/' && currentPath === '/') return true
    if (href !== '/' && currentPath.startsWith(href)) return true
    return false
  }

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-sm ${getHeaderStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-secondary to-brand-teal-light rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">EduPlatform</span>
                <span className="text-brand-cream/70 text-xs">Coding Made Easy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {getNavItems().map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${isActiveLink(item.href)
                    ? 'bg-brand-secondary text-brand-dark'
                    : 'text-brand-cream hover:bg-brand-secondary/20 hover:text-brand-cream'
                  }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {variant === 'public' && (
              <>
                <Badge className="badge-success">
                  <Star className="h-3 w-3 mr-1" />
                  4.9/5
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-brand-secondary/10 border-brand-secondary text-brand-cream hover:bg-brand-secondary/20"
                  asChild
                >
                  <Link href="/demo">
                    <Play className="h-4 w-4 mr-1" />
                    Demo
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="btn-secondary"
                  asChild
                >
                  <Link href="/register">Daftar Gratis</Link>
                </Button>
              </>
            )}

            {(variant === 'dashboard' || variant === 'admin') && (
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-secondary/10 hover:bg-brand-secondary/20 text-brand-cream transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-teal-light to-brand-secondary rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border-brand-cream/20 border backdrop-blur-sm">
                    <div className="p-4 border-b border-brand-cream/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-brand-teal-light to-brand-secondary rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-brand-dark font-medium">John Doe</p>
                          <p className="text-brand-navy text-sm">john@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-3 py-2 text-brand-dark hover:bg-brand-cream/50 rounded-lg transition-colors"
                      >
                        <User className="h-4 w-4" />
                        Profil Saya
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-3 py-2 text-brand-dark hover:bg-brand-cream/50 rounded-lg transition-colors"
                      >
                        <Settings className="h-4 w-4" />
                        Pengaturan
                      </Link>
                      <hr className="my-2 border-brand-cream/30" />
                      <button className="flex items-center gap-3 px-3 py-2 text-brand-error hover:bg-brand-error/10 rounded-lg transition-colors w-full text-left">
                        <X className="h-4 w-4" />
                        Keluar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-cream hover:bg-brand-secondary/20 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-brand-secondary/20 bg-brand-dark/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              {getNavItems().map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${isActiveLink(item.href)
                      ? 'bg-brand-secondary text-brand-dark'
                      : 'text-brand-cream hover:bg-brand-secondary/20'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}

              {variant === 'public' && (
                <div className="pt-4 space-y-2 border-t border-brand-secondary/20">
                  <Button
                    className="w-full btn-secondary justify-center"
                    asChild
                  >
                    <Link href="/demo">
                      <Play className="h-4 w-4 mr-2" />
                      Coba Demo
                    </Link>
                  </Button>
                  <Button
                    className="w-full btn-primary justify-center"
                    asChild
                  >
                    <Link href="/register">Daftar Gratis</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 
