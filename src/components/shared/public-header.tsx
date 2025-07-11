'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PublicHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Learning App
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/demo"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              UI Demo
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
