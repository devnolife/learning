'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, Mail, Lock, X, Github, Sparkles, Star, Code2, Zap } from 'lucide-react'
import './login-animations.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Handle login logic here
      console.log('Login attempt:', { email, password })
      // Redirect after successful login
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main modal container */}
      <div className="relative w-full max-w-4xl bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden grid lg:grid-cols-2 min-h-[600px] group">

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

        {/* Left Section - Enhanced Illustration */}
        <div className="hidden lg:flex flex-col justify-center items-center p-8 relative overflow-hidden">
          {/* Animated background for left section */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,119,198,0.2),transparent_50%)]" />

          {/* Logo with glow effect */}
          <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
            <div className="relative">
              <span className="text-3xl filter drop-shadow-lg">🧙‍♂️</span>
              <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-xl" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CodeWizard
            </span>
          </div>

          {/* Enhanced magic particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-ping"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Enhanced Wizard Character */}
          <div className="text-center mb-8 relative z-10">
            <div className="relative mb-6">
              <div className="text-7xl mb-3 animate-bounce filter drop-shadow-2xl">🧙‍♂️</div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl transform scale-150" />
            </div>

            {/* Enhanced floating code elements */}
            <div className="absolute -top-4 -left-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-mono text-sm px-2 py-1 rounded-lg shadow-lg animate-float">
              {'{ }'}
            </div>
            <div className="absolute -top-2 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-mono text-sm px-2 py-1 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              {'< />'}
            </div>
            <div className="absolute -bottom-2 left-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-mono text-sm px-2 py-1 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              {'=>'}
            </div>
            <div className="absolute top-1 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-mono text-sm px-2 py-1 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              {'()'}
            </div>
          </div>

          {/* Enhanced welcome text with icons */}
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="text-yellow-400 animate-pulse" size={20} />
              <h2 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Selamat Datang Kembali!
              </h2>
              <Sparkles className="text-yellow-400 animate-pulse" size={20} />
            </div>
            <p className="text-purple-200/80 text-base mb-4">
              Lanjutkan perjalanan coding magic Anda
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-xl font-bold text-white">10K+</div>
                <div className="text-xs text-purple-200/60">Wizards</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-xs text-purple-200/60">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">99%</div>
                <div className="text-xs text-purple-200/60">Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Enhanced Login Form */}
        <div className="flex flex-col p-8 relative backdrop-blur-xl">
          {/* Close button with enhanced styling */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
            aria-label="Close login modal"
            title="Close"
          >
            <X size={24} />
          </button>

          {/* Form header with gradient */}
          <div className="mb-8 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Zap className="text-white" size={18} />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Masuk
              </h1>
            </div>
            <p className="text-white/60 text-base">
              Masuki dunia coding yang penuh magic ✨
            </p>
          </div>

          {/* Enhanced Login form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Enhanced Email field */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-semibold text-white/80 flex items-center gap-2">
                <Mail size={16} />
                Email
              </Label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="wizard@codewizard.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 h-12 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-2xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Enhanced Password field */}
            <div className="space-y-3">
              <Label htmlFor="password" className="text-sm font-semibold text-white/80 flex items-center gap-2">
                <Lock size={16} />
                Password
              </Label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" size={20} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-12 pr-12 h-12 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-2xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Enhanced Forgot password */}
            <div className="text-right">
              <Link
                href="#forgot-password"
                className="text-sm text-purple-300 hover:text-white transition-colors duration-300 hover:underline flex items-center justify-end gap-1"
              >
                <Sparkles size={14} />
                Lupa Password?
              </Link>
            </div>

            {/* Enhanced Login button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="relative w-full h-14 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white font-bold text-base rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sedang Masuk...
                  </>
                ) : (
                  <>
                    <Zap className="animate-pulse" size={20} />
                    Masuk ke Akademi
                    <Star className="animate-pulse" size={20} />
                  </>
                )}
              </div>
            </Button>

            {/* Enhanced Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <span className="px-4 text-sm text-white/60 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                atau masuk dengan
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            {/* Enhanced Social login buttons */}
            <div className="grid grid-cols-3 gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-12 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm group rounded-2xl"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm group rounded-2xl"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm group rounded-2xl"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
            </div>

            {/* Enhanced Sign up prompt */}
            <div className="text-center mt-8 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/70 text-sm">Belum bergabung dengan kami?</span>
                <Link
                  href="/register"
                  className="text-purple-300 hover:text-white font-semibold transition-colors duration-300 hover:underline flex items-center gap-1 text-sm"
                >
                  <Code2 size={14} />
                  Daftar Sekarang
                  <Sparkles size={12} className="animate-pulse" />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
