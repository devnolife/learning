"use client"

import Link from 'next/link'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BookOpen, Users, Award, TrendingUp, Play, Code, Zap, Star, Globe, Shield, ArrowRight, Check, X, Monitor, Brain, Clock, Target, Lightbulb, PlayCircle, Copy, RefreshCw, ChevronDown, MessageCircle, Gamepad2, BookMarked, Users2, Sun, Moon } from 'lucide-react'
import { SparklesText, NumberTicker, BorderBeam, Ripple, AnimatedBeam } from '@/components/magicui'
import { PageTransition, StaggerContainer, StaggerItem, FadeUpCard } from '@/components/shared/page-transition'
import { useTheme } from '@/components/shared/theme-provider'

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState(0)
  const [selectedPathway, setSelectedPathway] = useState(0)
  const { theme, effectiveTheme, toggleTheme } = useTheme()

  return (
    <PageTransition>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-lg z-50 border-b border-magic-primary/30">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">🧙‍♂️</span>
              <span className="text-2xl font-bold text-magic-primary" style={{ textShadow: `0 0 10px ${effectiveTheme === 'dark' ? 'rgba(139,92,246,0.5)' : 'rgba(139,92,246,0.3)'}` }}>
                CodeWizard
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#courses" className="text-foreground/70 hover:text-magic-primary transition-colors">
                Kursus
              </Link>
              <Link href="#pathways" className="text-foreground/70 hover:text-magic-primary transition-colors">
                Jalur Belajar
              </Link>
              <Link href="#community" className="text-foreground/70 hover:text-magic-primary transition-colors">
                Komunitas
              </Link>
              <Link href="#pricing" className="text-foreground/70 hover:text-magic-primary transition-colors">
                Harga
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-foreground/70 hover:text-magic-primary"
              >
                {effectiveTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" className="text-foreground/70 hover:text-magic-primary">
                Masuk
              </Button>
              <Button className="bg-magic-primary hover:bg-magic-secondary text-white px-6">
                Mulai Belajar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className={`min-h-screen ${effectiveTheme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-slate-50 to-purple-50'} relative overflow-hidden`}>
        {/* Magical Background Effects */}
        <div className={`absolute inset-0 ${effectiveTheme === 'dark'
          ? 'bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20'
          : 'bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50'}`} />
        <div className={`absolute inset-0 ${effectiveTheme === 'dark'
          ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]'}`} />
        <div className={`absolute inset-0 ${effectiveTheme === 'dark'
          ? 'bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]'}`} />
        <div className={`absolute inset-0 ${effectiveTheme === 'dark'
          ? 'bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.2),transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]'}`} />

        {/* Floating Magic Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-magic-primary rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-bounce" />
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-green-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-60 right-60 w-2 h-2 bg-magic-secondary rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <Ripple className="opacity-10" />
          <StaggerContainer className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left relative z-10">
                <StaggerItem>
                  <Badge className={`mb-6 ${effectiveTheme === 'dark'
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    : 'bg-purple-100 text-purple-600 border-purple-200'} backdrop-blur-sm inline-flex items-center gap-2`}>
                    <Star className="h-4 w-4" />
                    Platform #1 untuk Menjadi Code Wizard
                  </Badge>
                </StaggerItem>

                <StaggerItem>
                  <div className="mb-6">
                    <div className={`${effectiveTheme === 'dark' ? 'text-purple-300/80' : 'text-purple-600/80'} text-lg mb-2`}>
                      Selamat datang di
                    </div>
                    <SparklesText
                      className={`text-5xl sm:text-6xl md:text-7xl font-bold ${effectiveTheme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}
                      colors={{ first: "#8b5cf6", second: "#a855f7" }}
                      sparklesCount={25}
                    >
                      CodeWizard
                      <br />
                      <span className="bg-gradient-to-r from-magic-primary to-magic-accent bg-clip-text text-transparent">
                        Academy
                      </span>
                    </SparklesText>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <p className={`text-xl sm:text-2xl ${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto lg:mx-0`}>
                    Transformasi dari <span className="text-magic-primary font-semibold">murid pemula</span> menjadi
                    <span className="text-magic-accent font-semibold"> coding wizard</span> sejati.
                    Kuasai mantra pemrograman dengan metode yang menyenangkan!
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                    <Button size="lg" className="relative overflow-hidden group bg-magic-primary hover:bg-magic-secondary text-white border-0 px-8 py-4 text-lg" asChild>
                      <Link href="/register">
                        <Ripple className="opacity-30" />
                        🚀 Mulai Petualangan Coding
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className={`relative overflow-hidden group ${effectiveTheme === 'dark'
                      ? 'bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20'
                      : 'bg-purple-50 border-purple-200 text-purple-600 hover:bg-purple-100'} backdrop-blur-sm px-8 py-4 text-lg`} asChild>
                      <Link href="/demo">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Lihat Demo Magic
                      </Link>
                    </Button>
                  </div>
                </StaggerItem>                {/* Magic Elements */}
                <StaggerItem>
                  <div className={`flex items-center gap-6 ${effectiveTheme === 'dark' ? 'text-purple-300/70' : 'text-purple-600/70'} text-sm`}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>✨ Belajar dengan Magic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span>🎯 Proyek Dunia Nyata</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-magic-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      <span>🏆 Garansi Kerja</span>
                    </div>
                  </div>
                </StaggerItem>
              </div>

              {/* Right Column - Wizard Illustration */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Wizard Circle */}
                  <div className="relative w-80 h-80 mx-auto">
                    <div className={`absolute inset-0 rounded-full ${effectiveTheme === 'dark'
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                      : 'bg-gradient-to-r from-purple-200/40 to-pink-200/40'} animate-spin`} style={{ animationDuration: '20s' }} />
                    <div className={`absolute inset-4 rounded-full ${effectiveTheme === 'dark'
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                      : 'bg-gradient-to-r from-blue-100/30 to-purple-100/30'} animate-spin`} style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                    <div className={`absolute inset-8 rounded-full ${effectiveTheme === 'dark'
                      ? 'bg-black/40 border border-purple-500/30'
                      : 'bg-white/60 border border-purple-200/50'} backdrop-blur-sm flex items-center justify-center`}>
                      <div className="text-8xl animate-bounce" style={{ animationDuration: '3s' }}>
                        🧙‍♂️
                      </div>
                    </div>
                  </div>

                  {/* Floating Code Elements */}
                  <div className={`absolute top-0 left-0 ${effectiveTheme === 'dark' ? 'text-purple-400' : 'text-purple-600'} text-sm font-mono animate-float`} style={{ animationDelay: '0s' }}>
                    {'{ magic: true }'}
                  </div>
                  <div className={`absolute top-20 right-0 ${effectiveTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'} text-sm font-mono animate-float`} style={{ animationDelay: '1s' }}>
                    {'function sihir()'}
                  </div>
                  <div className={`absolute bottom-20 left-10 ${effectiveTheme === 'dark' ? 'text-green-400' : 'text-green-600'} text-sm font-mono animate-float`} style={{ animationDelay: '2s' }}>
                    {'const wizard = 💫'}
                  </div>
                  <div className={`absolute bottom-0 right-10 ${effectiveTheme === 'dark' ? 'text-pink-400' : 'text-pink-600'} text-sm font-mono animate-float`} style={{ animationDelay: '1.5s' }}>
                    {'return sukses'}
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-10 left-20 w-6 h-6 border-2 ${effectiveTheme === 'dark' ? 'border-purple-400' : 'border-purple-500'} rounded rotate-45 animate-spin`} style={{ animationDuration: '4s' }} />
                  <div className="absolute bottom-10 right-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute top-40 left-0 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>
          </StaggerContainer>
        </section>

        {/* Stats Section */}
        <section className={`py-20 px-4 ${effectiveTheme === 'dark'
          ? 'bg-purple-500/5 border-y border-purple-500/20'
          : 'bg-purple-50/50 border-y border-purple-200/30'}`}>
          <div className="max-w-7xl mx-auto text-center">
            <StaggerContainer>
              <StaggerItem>
                <p className={`text-lg ${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-3xl mx-auto`}>
                  Bergabunglah dengan ribuan murid yang telah bertransformasi menjadi Code Wizard sejati dan menguasai berbagai mantra pemrograman.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "50+", label: "Instruktur berpengalaman", icon: "👨‍🏫" },
                    { number: "10000+", label: "Siswa yang belajar", icon: "🎓" },
                    { number: "25+", label: "Kursus coding tersedia", icon: "📚" },
                    { number: "95%", label: "Tingkat Keberhasilan", icon: "⭐" }
                  ].map((stat, index) => (
                    <div key={index} className={`${effectiveTheme === 'dark'
                      ? 'bg-purple-500/10 border border-purple-500/30'
                      : 'bg-white/80 border border-purple-200/50'} rounded-2xl p-6 backdrop-blur-sm`}
                      style={{ boxShadow: effectiveTheme === 'dark' ? '0 0 20px rgba(147,51,234,0.2)' : '0 0 20px rgba(147,51,234,0.1)' }}>
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className={`text-3xl font-bold ${effectiveTheme === 'dark' ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                        <NumberTicker value={parseInt(stat.number)} className={effectiveTheme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                        {stat.number.includes('+') && '+'}
                        {stat.number.includes('%') && '%'}
                      </div>
                      <div className={`text-sm ${effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className={`py-20 px-4 ${effectiveTheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className={`text-4xl sm:text-5xl font-bold ${effectiveTheme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
                  📜 Pilih Mantra Coding Anda
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className={`text-xl ${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
                  Kuasai bahasa pemrograman populer dengan pendekatan yang menyenangkan
                </p>
              </StaggerItem>
              <StaggerItem>
                <Button variant="outline" className={`${effectiveTheme === 'dark'
                  ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                  : 'bg-purple-50 border-purple-200 text-purple-600'}`}>
                  Lihat Semua Kursus ✨
                </Button>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "JavaScript Magic",
                  description: "Kuasai mantra JavaScript untuk menciptakan web interaktif",
                  magicLevel: "🌟🌟🌟🌟🌟",
                  icon: "⚡",
                  price: "Gratis",
                  students: "2.5k",
                  duration: "8 minggu",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "React Enchantment",
                  description: "Belajar menciptakan UI yang memukau dengan React",
                  magicLevel: "🌟🌟🌟🌟",
                  icon: "⚛️",
                  price: "299k",
                  students: "1.8k",
                  duration: "6 minggu",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Python Sorcery",
                  description: "Mantra Python untuk AI, data science, dan backend",
                  magicLevel: "🌟🌟🌟🌟",
                  icon: "🐍",
                  price: "399k",
                  students: "3.2k",
                  duration: "10 minggu",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "TypeScript Wizardry",
                  description: "Tingkatkan JavaScript dengan type safety",
                  magicLevel: "🌟🌟🌟🌟🌟",
                  icon: "📘",
                  price: "199k",
                  students: "1.2k",
                  duration: "4 minggu",
                  color: "from-blue-600 to-purple-600"
                },
                {
                  title: "Next.js Spellcasting",
                  description: "Framework React untuk aplikasi full-stack",
                  magicLevel: "🌟🌟🌟🌟",
                  icon: "▲",
                  price: "499k",
                  students: "890",
                  duration: "8 minggu",
                  color: "from-gray-700 to-gray-900"
                },
                {
                  title: "Node.js Alchemy",
                  description: "Backend JavaScript untuk server-side magic",
                  magicLevel: "🌟🌟🌟🌟",
                  icon: "💚",
                  price: "349k",
                  students: "1.5k",
                  duration: "7 minggu",
                  color: "from-green-600 to-lime-600"
                }
              ].map((course, index) => (
                <FadeUpCard key={index} delay={index * 0.1}>
                  <Card className="relative overflow-hidden bg-purple-500/10 border-purple-500/30 backdrop-blur-sm h-full group hover:scale-105 transition-all duration-300"
                    style={{ boxShadow: '0 0 30px rgba(147,51,234,0.2)' }}>
                    <BorderBeam size={60} duration={12} delay={index} colorFrom="#9333ea" colorTo="#a855f7" />

                    <CardHeader className="relative">
                      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${course.color} rounded-bl-3xl flex items-center justify-center text-2xl`}>
                        {course.icon}
                      </div>
                      <div className="pr-16">
                        <div className="text-sm text-purple-300 mb-2">{course.magicLevel}</div>
                        <CardTitle className="text-white text-xl mb-2">{course.title}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {course.description}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span className="text-gray-400">👥 {course.students}</span>
                            <span className="text-gray-400">⏱️ {course.duration}</span>
                          </div>
                          <div className="text-lg font-bold text-purple-400">{course.price}</div>
                        </div>

                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white relative overflow-hidden group">
                          <Ripple className="opacity-30" />
                          Mulai Belajar Magic
                          <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </FadeUpCard>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Pathways Section */}
        <section id="pathways" className={`py-20 px-4 ${effectiveTheme === 'dark' ? 'bg-purple-500/5' : 'bg-purple-50/50'}`}>
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className={`text-4xl sm:text-5xl font-bold ${effectiveTheme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
                  🗺️ Jalur Pembelajaran Wizard
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className={`text-xl ${effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                  Pilih jalur yang sesuai dengan tujuan coding Anda
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Wizard",
                  description: "Kuasai seni menciptakan UI/UX yang memukau",
                  courses: ["HTML/CSS Magic", "JavaScript Sorcery", "React Enchantment", "Vue.js Wizardry"],
                  duration: "4-6 bulan",
                  level: "Pemula ke Mahir",
                  borderColor: "#10b981",
                  icon: "🎨"
                },
                {
                  title: "Backend Sorcerer",
                  description: "Menguasai server-side magic dan database alchemy",
                  courses: ["Node.js Alchemy", "Python Backend", "Database Magic", "API Spellcrafting"],
                  duration: "5-7 bulan",
                  level: "Menengah ke Ahli",
                  borderColor: "#3b82f6",
                  icon: "⚙️"
                },
                {
                  title: "Full-Stack Archmage",
                  description: "Jadi master yang menguasai frontend & backend",
                  courses: ["Semua Frontend", "Semua Backend", "DevOps Magic", "Proyek Lanjutan"],
                  duration: "8-12 bulan",
                  level: "Penguasaan Lengkap",
                  borderColor: "#9333ea",
                  icon: "🧙‍♂️"
                }
              ].map((pathway, index) => (
                <FadeUpCard key={index} delay={index * 0.2}>
                  <Card className={`relative overflow-hidden ${effectiveTheme === 'dark'
                    ? 'bg-purple-500/10'
                    : 'bg-white'} border-2 backdrop-blur-sm h-full group hover:scale-105 transition-all duration-300`}
                    style={{
                      borderColor: pathway.borderColor,
                      boxShadow: `0 0 30px ${pathway.borderColor}${effectiveTheme === 'dark' ? '30' : '15'}`
                    }}>
                    <BorderBeam size={80} duration={15} delay={index * 2} colorFrom={pathway.borderColor} colorTo="#8b5cf6" />

                    <CardHeader className="text-center">
                      <div className="text-6xl mb-4">{pathway.icon}</div>
                      <CardTitle className={`${effectiveTheme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl mb-2`}>{pathway.title}</CardTitle>
                      <CardDescription className={`${effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
                        {pathway.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <h4 className={`${effectiveTheme === 'dark' ? 'text-purple-300' : 'text-purple-600'} font-semibold`}>Kursus Termasuk:</h4>
                        <ul className="space-y-1">
                          {pathway.courses.map((course, i) => (
                            <li key={i} className={`${effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm flex items-center gap-2`}>
                              <span className={effectiveTheme === 'dark' ? 'text-purple-400' : 'text-purple-500'}>✨</span>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className={effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Durasi:</span>
                          <span className={effectiveTheme === 'dark' ? 'text-purple-300' : 'text-purple-600'}>{pathway.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Level:</span>
                          <span className={effectiveTheme === 'dark' ? 'text-purple-300' : 'text-purple-600'}>{pathway.level}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-magic-primary to-magic-accent hover:from-magic-secondary hover:to-magic-primary text-white relative overflow-hidden group">
                        <Ripple className="opacity-30" />
                        Mulai Perjalanan
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </FadeUpCard>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Area */}
        <section className="py-20 px-4 bg-gradient-to-b from-brand-navy to-brand-dark">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Coba Coding Sekarang Juga!
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Tidak perlu daftar, langsung coba editor interaktif kami dan lihat hasilnya real-time
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Live Code Editor */}
              <FadeUpCard delay={0.1}>
                <Card className="relative overflow-hidden code-editor border-brand-teal-dark backdrop-blur-sm h-96">
                  <BorderBeam size={80} duration={12} delay={0} colorFrom="var(--brand-teal-light)" colorTo="var(--brand-secondary)" />
                  <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-white text-sm">Live Editor</CardTitle>
                      <Code className="h-4 w-4 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-gray-900 h-80 font-mono text-sm overflow-auto">
                      <div className="p-4 space-y-2">
                        <div className="text-gray-500">// Edit kode di bawah dan lihat hasilnya!</div>
                        <div className="text-purple-400">function <span className="text-blue-400">sayHello</span>() {'{'}</div>
                        <div className="ml-4 text-yellow-400">return <span className="text-green-400">"Hello, Future Developer!"</span>;</div>
                        <div className="text-purple-400">{'}'}</div>
                        <div className="text-gray-400 mt-4">// Panggil function</div>
                        <div className="text-blue-400">console.log(<span className="text-yellow-400">sayHello()</span>);</div>
                        <div className="text-gray-400 mt-4">// Coba ubah pesan di atas! ✨</div>
                        <div className="text-green-400 mt-4 bg-gray-800 p-2 rounded">
                          <div className="text-xs text-gray-300">Output:</div>
                          <div>Hello, Future Developer!</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeUpCard>

              {/* Live Preview */}
              <FadeUpCard delay={0.2}>
                <Card className="relative overflow-hidden bg-white border-brand-cream backdrop-blur-sm h-96">
                  <BorderBeam size={80} duration={12} delay={3} colorFrom="var(--brand-purple)" colorTo="var(--brand-navy)" />
                  <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-gray-900 text-sm">Live Preview</CardTitle>
                      <Monitor className="h-4 w-4 text-gray-600" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 flex items-center justify-center h-80">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎉</div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        Hello, Future Developer!
                      </div>
                      <div className="text-gray-600">
                        Kode berjalan dengan sempurna!
                      </div>
                      <div className="mt-4">
                        <SparklesText
                          className="text-lg font-bold text-purple-600"
                          colors={{ first: "#8B5CF6", second: "#EC4899" }}
                          sparklesCount={8}
                        >
                          Success! ✨
                        </SparklesText>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeUpCard>
            </div>

            {/* Try Now Button */}
            <StaggerContainer className="text-center mt-12">
              <StaggerItem>
                <Button size="lg" className="relative overflow-hidden group btn-success" asChild>
                  <Link href="/demo">
                    <Ripple className="opacity-30" />
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Coba Editor Lengkap
                  </Link>
                </Button>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Visual Learning Benefits */}
        <section className="py-20 px-4 bg-gradient-to-r from-brand-dark to-brand-purple/50">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Mengapa Visual Learning Lebih Efektif?
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Otak manusia memproses informasi visual 60,000x lebih cepat daripada teks
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <FadeUpCard delay={0.1}>
                <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full bg-brand-cream/10 border-brand-cream/20 backdrop-blur-sm">
                  <BorderBeam size={50} duration={12} delay={0} colorFrom="var(--brand-teal-light)" colorTo="var(--brand-secondary)" />
                  <CardHeader className="text-center p-8">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-brand-teal-light to-brand-secondary rounded-full w-16 h-16 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-brand-cream text-xl">Pemahaman Lebih Cepat</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 text-center">
                    <div className="text-4xl font-bold text-brand-teal-light mb-4">
                      <NumberTicker value={3} />x
                    </div>
                    <p className="text-brand-cream/80">Lebih cepat memahami konsep dengan visualisasi</p>
                  </CardContent>
                </Card>
              </FadeUpCard>

              <FadeUpCard delay={0.2}>
                <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full bg-brand-cream/10 border-brand-cream/20 backdrop-blur-sm">
                  <BorderBeam size={50} duration={12} delay={3} colorFrom="var(--brand-purple)" colorTo="var(--brand-navy)" />
                  <CardHeader className="text-center p-8">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-brand-purple to-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-brand-cream text-xl">Retensi Memori</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 text-center">
                    <div className="text-4xl font-bold text-brand-purple mb-4">
                      <NumberTicker value={85} />%
                    </div>
                    <p className="text-brand-cream/80">Informasi visual bertahan lebih lama dalam memori</p>
                  </CardContent>
                </Card>
              </FadeUpCard>

              <FadeUpCard delay={0.3}>
                <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full bg-brand-cream/10 border-brand-cream/20 backdrop-blur-sm">
                  <BorderBeam size={50} duration={12} delay={6} colorFrom="var(--brand-warning)" colorTo="var(--brand-error)" />
                  <CardHeader className="text-center p-8">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-brand-warning to-brand-error rounded-full w-16 h-16 flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-brand-cream text-xl">Problem Solving</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 text-center">
                    <div className="text-4xl font-bold text-brand-warning mb-4">
                      <NumberTicker value={40} />%
                    </div>
                    <p className="text-brand-cream/80">Peningkatan kemampuan problem solving</p>
                  </CardContent>
                </Card>
              </FadeUpCard>
            </div>

            {/* Learning Journey Timeline */}
            <StaggerContainer className="mb-16">
              <StaggerItem>
                <h3 className="text-2xl font-bold text-white text-center mb-12">
                  Journey dari Beginner ke Developer
                </h3>
              </StaggerItem>
              <StaggerItem>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-secondary to-brand-purple"></div>
                  <div className="space-y-8">
                    {[
                      {
                        week: "Minggu 1-2",
                        title: "HTML & CSS Basics",
                        description: "Belajar struktur web dan styling dasar",
                        icon: "🎨",
                        color: "from-brand-secondary to-brand-teal-light"
                      },
                      {
                        week: "Minggu 3-4",
                        title: "JavaScript Fundamentals",
                        description: "Logika programming dan DOM manipulation",
                        icon: "⚡",
                        color: "from-brand-warning to-brand-error"
                      },
                      {
                        week: "Minggu 5-8",
                        title: "React & Modern JS",
                        description: "Component-based development",
                        icon: "⚛️",
                        color: "from-brand-purple to-brand-navy"
                      },
                      {
                        week: "Minggu 9-12",
                        title: "Full Stack Projects",
                        description: "Build real-world applications",
                        icon: "🚀",
                        color: "from-brand-teal-light to-brand-teal-dark"
                      }
                    ].map((item, index) => (
                      <div key={index} className="relative pl-12">
                        <div className={`absolute left-0 w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                          {item.icon}
                        </div>
                        <div className="bg-brand-cream/10 border-brand-cream/20 backdrop-blur-sm rounded-lg p-6">
                          <div className="flex items-center gap-4 mb-2">
                            <Badge className="badge-info border-brand-secondary/30">
                              {item.week}
                            </Badge>
                            <h4 className="text-brand-cream font-bold text-lg">{item.title}</h4>
                          </div>
                          <p className="text-brand-cream/80">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Bento Grid Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-white/5">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Kenapa Pilih Platform Kami?
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Metode pembelajaran yang terbukti efektif dengan teknologi terdepan
                </p>
              </StaggerItem>
            </StaggerContainer>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Large Feature Card */}
              <FadeUpCard delay={0.1}>
                <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full bg-white/10 border-white/20 backdrop-blur-sm lg:col-span-2 lg:row-span-2">
                  <BorderBeam size={100} duration={12} delay={0} colorFrom="#3B82F6" colorTo="#8B5CF6" />
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl">Interactive Learning</CardTitle>
                        <CardDescription className="text-gray-300">Belajar dengan praktik langsung</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="relative bg-gray-900 rounded-lg p-6 mb-6 font-mono text-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-green-400">
                        <span className="text-purple-400">function</span> <span className="text-blue-400">greetUser</span>() {'{'}
                        <br />
                        <span className="ml-4 text-yellow-400">console.log</span>(<span className="text-red-400">"Hello, Future Developer!"</span>);
                        <br />
                        {'}'}
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Tulis kode langsung di browser dengan feedback real-time. Tidak perlu install software tambahan!
                    </p>
                  </CardContent>
                </Card>
              </FadeUpCard>

              {/* Stats Card */}
              <FadeUpCard delay={0.2}>
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full bg-white/10 border-white/20 backdrop-blur-sm">
                  <BorderBeam size={50} duration={12} delay={3} colorFrom="#10B981" colorTo="#3B82F6" />
                  <CardHeader className="text-center p-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      <NumberTicker value={15000} />+
                    </div>
                    <CardTitle className="text-white">Students</CardTitle>
                    <CardDescription className="text-gray-300">Sudah bergabung</CardDescription>
                  </CardHeader>
                </Card>
              </FadeUpCard>

              {/* Mentorship Card */}
              <FadeUpCard delay={0.3}>
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full bg-white/10 border-white/20 backdrop-blur-sm">
                  <BorderBeam size={50} duration={12} delay={6} colorFrom="#8B5CF6" colorTo="#EC4899" />
                  <CardHeader className="text-center p-6">
                    <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <CardTitle className="text-white">1-on-1 Mentoring</CardTitle>
                    <CardDescription className="text-gray-300">Bimbingan personal dari expert</CardDescription>
                  </CardHeader>
                </Card>
              </FadeUpCard>

              {/* Certificate Card */}
              <FadeUpCard delay={0.4}>
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full bg-white/10 border-white/20 backdrop-blur-sm">
                  <BorderBeam size={50} duration={12} delay={9} colorFrom="#F59E0B" colorTo="#EF4444" />
                  <CardHeader className="text-center p-6">
                    <Award className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <CardTitle className="text-white">Sertifikat Resmi</CardTitle>
                    <CardDescription className="text-gray-300">Diakui industri</CardDescription>
                  </CardHeader>
                </Card>
              </FadeUpCard>

              {/* Job Guarantee Card */}
              <FadeUpCard delay={0.5}>
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full bg-white/10 border-white/20 backdrop-blur-sm lg:col-span-2">
                  <BorderBeam size={80} duration={12} delay={12} colorFrom="#06B6D4" colorTo="#10B981" />
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">Job Guarantee</CardTitle>
                        <CardDescription className="text-gray-300">Garansi kerja atau uang kembali</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-gray-300 mb-4">
                      Kami berkomitmen membantu Anda mendapatkan pekerjaan impian. Jika tidak berhasil dalam 6 bulan, uang kembali 100%.
                    </p>
                    <div className="flex items-center gap-2 text-green-400">
                      <Check className="h-4 w-4" />
                      <span className="text-sm">92% alumni kerja dalam 3 bulan</span>
                    </div>
                  </CardContent>
                </Card>
              </FadeUpCard>
            </div>

            {/* Tech Stack */}
            <StaggerContainer className="text-center">
              <StaggerItem>
                <h3 className="text-2xl font-bold text-white mb-8">Teknologi yang Akan Anda Kuasai</h3>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-wrap justify-center gap-4">
                  {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech, index) => (
                    <Badge key={tech} className="bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-brand-dark to-brand-navy">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Jalur Pembelajaran yang Terstruktur
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Dari dasar hingga mahir dengan kurikulum yang disesuaikan industri
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Fundamentals',
                  description: 'HTML, CSS, JavaScript basics',
                  duration: '2-3 minggu',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '02',
                  title: 'Frontend Framework',
                  description: 'React, Next.js, TypeScript',
                  duration: '4-6 minggu',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  step: '03',
                  title: 'Full Stack',
                  description: 'Backend, Database, Deployment',
                  duration: '6-8 minggu',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((item, index) => (
                <FadeUpCard key={index} delay={index * 0.1}>
                  <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full bg-white/10 border-white/20 backdrop-blur-sm">
                    <BorderBeam size={50} duration={12} delay={index * 3} colorFrom="#3B82F6" colorTo="#8B5CF6" />
                    <CardHeader className="p-8">
                      <div className={`text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                        {item.step}
                      </div>
                      <CardTitle className="text-white text-2xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-lg">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Zap className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeUpCard>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Success Stories Section */}
        <section className="py-20 px-4 bg-brand-cream/5">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Transformasi Hidup Alumni Kami
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Lihat bagaimana alumni kami berhasil mengubah karier dan hidup mereka
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  name: 'Budi Santoso',
                  role: 'Frontend Developer di Tokopedia',
                  previousJob: 'Lulusan Akuntansi',
                  salary: '4.5x lipat',
                  content: 'Dari nol sampai dapat kerja di tech company hanya dalam 4 bulan. Mentornya sangat helpful!',
                  rating: 5,
                  projects: 'E-commerce App, Portfolio Website'
                },
                {
                  name: 'Sari Wijaya',
                  role: 'Full Stack Developer di Gojek',
                  previousJob: 'Admin Kantor',
                  salary: '6x lipat',
                  content: 'Kurikulumnya up-to-date dengan industri. Sekarang gaji saya naik 300% dari sebelumnya.',
                  rating: 5,
                  projects: 'Mobile App, API Backend'
                },
                {
                  name: 'Ahmad Fauzi',
                  role: 'Software Engineer di Shopee',
                  previousJob: 'Tukang Ojek Online',
                  salary: '8x lipat',
                  content: 'Platform terbaik untuk belajar coding. Projectnya real-world banget, jadi siap kerja langsung.',
                  rating: 5,
                  projects: 'Payment System, Dashboard'
                }
              ].map((testimonial, index) => (
                <FadeUpCard key={index} delay={index * 0.1}>
                  <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full bg-white/10 border-white/20 backdrop-blur-sm">
                    <BorderBeam size={50} duration={12} delay={index * 4} colorFrom="#F59E0B" colorTo="#EF4444" />
                    <CardHeader className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                          <CardDescription className="text-gray-300">{testimonial.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-300 italic mb-4">"{testimonial.content}"</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Before</Badge>
                          <span className="text-gray-400">{testimonial.previousJob}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">After</Badge>
                          <span className="text-gray-300">Gaji naik {testimonial.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Projects</Badge>
                          <span className="text-gray-400">{testimonial.projects}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeUpCard>
              ))}
            </div>

            {/* Real-time Activity Feed */}
            <StaggerContainer className="mb-16">
              <StaggerItem>
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  Aktivitas Terkini dari Student Kami
                </h3>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="space-y-4">
                    {[
                      { name: 'Rina', action: 'menyelesaikan course React Fundamentals', time: '2 menit lalu', type: 'complete' },
                      { name: 'Joko', action: 'mendapat job offer dari Grab', time: '5 menit lalu', type: 'job' },
                      { name: 'Lisa', action: 'memulai project e-commerce', time: '8 menit lalu', type: 'project' },
                      { name: 'Dani', action: 'lulus technical interview', time: '12 menit lalu', type: 'interview' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <div className={`w-2 h-2 rounded-full ${activity.type === 'complete' ? 'bg-green-400' :
                          activity.type === 'job' ? 'bg-purple-400' :
                            activity.type === 'project' ? 'bg-blue-400' :
                              'bg-orange-400'
                          } animate-pulse`} />
                        <div className="flex-1">
                          <span className="text-white font-medium">{activity.name}</span>
                          <span className="text-gray-300"> {activity.action}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-white/5">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Pilih Paket yang Tepat untuk Anda
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Investasi terbaik untuk masa depan karier Anda
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '299K',
                  period: '/bulan',
                  description: 'Untuk pemula yang ingin belajar coding',
                  features: [
                    'Akses semua course basic',
                    'Community support',
                    'Project portfolio',
                    'Sertifikat completion'
                  ],
                  limitations: [
                    'Tidak ada mentoring',
                    'Tidak ada job guarantee'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '599K',
                  period: '/bulan',
                  description: 'Untuk yang serius ingin switch career',
                  features: [
                    'Akses semua course',
                    '1-on-1 mentoring',
                    'Live coding session',
                    'Job placement assistance',
                    'Professional portfolio',
                    'Industry networking'
                  ],
                  limitations: [],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: '999K',
                  period: '/bulan',
                  description: 'Paket premium dengan job guarantee',
                  features: [
                    'Semua fitur Professional',
                    'Job guarantee',
                    'Personal career coach',
                    'Interview preparation',
                    'Salary negotiation',
                    'Lifetime access'
                  ],
                  limitations: [],
                  popular: false
                }
              ].map((plan, index) => (
                <FadeUpCard key={index} delay={index * 0.1}>
                  <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full ${plan.popular ? 'bg-gradient-to-b from-purple-500/20 to-blue-500/20 border-purple-500/50' : 'bg-white/10 border-white/20'
                    } backdrop-blur-sm`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <BorderBeam size={50} duration={12} delay={index * 3} colorFrom="#3B82F6" colorTo="#8B5CF6" />
                    <CardHeader className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                      <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold text-white">Rp {plan.price}</span>
                        <span className="text-gray-300">{plan.period}</span>
                      </div>
                      <CardDescription className="text-gray-300 text-lg">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300">
                            <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-500">
                            <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full relative overflow-hidden group ${plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                          }`}
                        size="lg"
                        asChild
                      >
                        <Link href="/register">
                          <Ripple className="opacity-30" />
                          Pilih Paket
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeUpCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
              </StaggerItem>
            </StaggerContainer>

            <div className="space-y-4">
              {[
                {
                  q: 'Apakah cocok untuk pemula yang belum pernah coding sama sekali?',
                  a: 'Tentu saja! Kurikulum kami dirancang khusus untuk pemula. Dimulai dari dasar-dasar programming hingga level advanced.'
                },
                {
                  q: 'Berapa lama waktu yang dibutuhkan untuk menguasai programming?',
                  a: 'Rata-rata 3-6 bulan untuk mendapatkan pekerjaan pertama, tergantung konsistensi dan dedikasi belajar Anda.'
                },
                {
                  q: 'Apakah ada job guarantee?',
                  a: 'Ya, untuk paket Enterprise kami memberikan job guarantee. Jika tidak mendapat pekerjaan dalam 6 bulan, uang kembali 100%.'
                },
                {
                  q: 'Bagaimana sistem mentoring-nya?',
                  a: 'Setiap siswa akan mendapat mentor personal yang akan membantu proses belajar melalui 1-on-1 session mingguan.'
                }
              ].map((faq, index) => (
                <FadeUpCard key={index} delay={index * 0.1}>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardHeader className="p-6">
                      <CardTitle className="text-white text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-300">{faq.a}</p>
                    </CardContent>
                  </Card>
                </FadeUpCard>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
          <Ripple className="opacity-20" />
          <div className="absolute inset-0 bg-black/20" />
          <StaggerContainer className="max-w-4xl mx-auto text-center relative z-10">
            <StaggerItem>
              <SparklesText
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                colors={{ first: "#FFFFFF", second: "#F0F0F0" }}
                sparklesCount={15}
              >
                Siap Memulai Journey Coding Anda?
              </SparklesText>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-blue-100 mb-8">
                Bergabunglah dengan ribuan developer yang telah mengubah hidup mereka
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="relative overflow-hidden group bg-white text-purple-600 hover:bg-gray-100" asChild>
                  <Link href="/register">
                    <Ripple className="opacity-30" />
                    Mulai Sekarang - Gratis!
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="relative overflow-hidden group border-white text-white hover:bg-white/10" asChild>
                  <Link href="/demo">
                    <Play className="mr-2 h-5 w-5" />
                    Coba Demo Gratis
                  </Link>
                </Button>
              </div>
            </StaggerItem>
            <StaggerItem>
              <p className="text-sm text-blue-200 opacity-80">
                * Tidak perlu kartu kredit • 7 hari gratis • Batalkan kapan saja
              </p>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Master Wizard Testimonial Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Master Wizard */}
              <FadeUpCard delay={0.1}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                  <Card className="relative overflow-hidden bg-purple-500/10 border-purple-500/30 backdrop-blur-sm p-8">
                    <BorderBeam size={100} duration={15} delay={0} colorFrom="#9333ea" colorTo="#ec4899" />

                    <div className="text-center">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '10s' }} />
                        <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
                          <span className="text-6xl">🧙‍♂️</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">Gandalf the Code</h3>
                      <p className="text-purple-300 mb-2">Grand Master Wizard</p>
                      <p className="text-gray-400 text-sm mb-4">15+ tahun pengalaman</p>

                      <div className="flex justify-center items-center gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">4.9</div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="w-px h-8 bg-purple-500/30" />
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">10k+</div>
                          <div className="text-xs text-gray-400">Apprentices</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2">
                        {["JavaScript", "Java", "Python", "React"].map((skill, index) => (
                          <Badge key={index} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </FadeUpCard>

              {/* Right Column - Content */}
              <FadeUpCard delay={0.2}>
                <div className="space-y-6">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    Bergabunglah dengan Akademi CodeWizard & Wujudkan Impian Coding Anda
                  </h2>

                  <p className="text-xl text-gray-300">
                    Transformasi dari pemula menjadi coding wizard dalam hitungan bulan, bukan tahun.
                    Dengan kurikulum yang telah terbukti, mentor berpengalaman, dan komunitas yang mendukung.
                  </p>

                  <div className="space-y-4">
                    {[
                      "🎯 Kurikulum industry-standard yang selalu update",
                      "👨‍🏫 Mentor berpengalaman dari tech companies",
                      "💼 Job placement assistance & career guidance",
                      "🤝 Komunitas wizard yang aktif dan supportif"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                    <Zap className="mr-2 h-5 w-5" />
                    Mulai Transformasi Sekarang
                  </Button>
                </div>
              </FadeUpCard>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-20 px-4 bg-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  🏰 Komunitas Wizard
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Bergabung dengan ribuan coding wizard dari seluruh dunia
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <MessageCircle className="h-8 w-8" />,
                  title: "Discord Community",
                  description: "Chat real-time dengan sesama wizard, sharing knowledge, dan solve coding challenges bersama",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  icon: <Gamepad2 className="h-8 w-8" />,
                  title: "Coding Battles",
                  description: "Kompetisi coding mingguan untuk mengasah skill dan menang hadiah menarik",
                  color: "from-red-500 to-pink-600"
                },
                {
                  icon: <BookMarked className="h-8 w-8" />,
                  title: "Knowledge Sharing",
                  description: "Berbagi tips, tricks, dan best practices dengan komunitas wizard lainnya",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: <Users2 className="h-8 w-8" />,
                  title: "Study Groups",
                  description: "Belajar bersama dalam kelompok kecil dengan mentor yang berpengalaman",
                  color: "from-blue-500 to-cyan-600"
                }
              ].map((feature, index) => (
                <FadeUpCard key={index} delay={index * 0.1}>
                  <Card className="relative overflow-hidden bg-purple-500/10 border-purple-500/30 backdrop-blur-sm h-full group hover:scale-105 transition-all duration-300 p-6">
                    <BorderBeam size={60} duration={12} delay={index * 1.5} colorFrom="#9333ea" colorTo="#a855f7" />

                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                        {feature.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </Card>
                </FadeUpCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  🤔 Frequently Asked Spells
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xl text-gray-300">
                  Temukan jawaban untuk pertanyaan yang sering ditanyakan oleh para apprentice
                </p>
              </StaggerItem>
            </StaggerContainer>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Apakah saya perlu pengalaman programming sebelumnya?",
                  answer: "Tidak sama sekali! Kami menyambut semua apprentice, dari yang belum pernah coding hingga yang sudah memiliki pengalaman. Setiap kursus dirancang dengan learning path yang jelas mulai dari level beginner."
                },
                {
                  question: "Berapa lama waktu yang dibutuhkan untuk menjadi coding wizard?",
                  answer: "Tergantung pada dedikasi dan waktu yang Anda investasikan. Rata-rata, dengan komitmen 2-3 jam per hari, Anda bisa menguasai satu bahasa pemrograman dalam 3-6 bulan. Untuk menjadi full-stack wizard, dibutuhkan sekitar 8-12 bulan."
                },
                {
                  question: "Apakah saya akan mendapat sertifikat setelah menyelesaikan kursus?",
                  answer: "Ya! Setiap kursus yang diselesaikan akan mendapatkan sertifikat digital yang diakui industri. Sertifikat ini bisa Anda gunakan untuk melamar pekerjaan atau meningkatkan profil LinkedIn Anda."
                },
                {
                  question: "Bagaimana sistem mentoring yang disediakan?",
                  answer: "Setiap siswa mendapat akses ke mentor yang berpengalaman. Sistem mentoring meliputi 1-on-1 session mingguan, code review, dan career guidance. Mentor kami adalah praktisi industri dengan pengalaman di tech companies terkemuka."
                },
                {
                  question: "Apakah ada job guarantee untuk lulusan?",
                  answer: "Ya! Untuk paket Professional dan Enterprise, kami memberikan job placement assistance dan untuk paket Enterprise ada job guarantee. Jika tidak mendapat pekerjaan dalam 6 bulan setelah lulus, kami refund 100%."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-purple-500/10 border-purple-500/30 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-purple-300 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-4 bg-black border-t border-purple-500/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Company */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🧙‍♂️</span>
                  <span className="text-2xl font-bold text-purple-400">CodeWizard</span>
                </div>
                <p className="text-gray-400">
                  Platform pembelajaran coding terdepan yang mengubah apprentice menjadi coding wizard sejati.
                  Kuasai JavaScript, Java, TypeScript, Python, dan bahasa pemrograman populer lainnya.
                </p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-500/30 transition-colors">
                    <span className="text-purple-400">📘</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-500/30 transition-colors">
                    <span className="text-purple-400">🐦</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-500/30 transition-colors">
                    <span className="text-purple-400">📸</span>
                  </div>
                </div>
              </div>

              {/* Learning */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">🎓 Pembelajaran</h4>
                <ul className="space-y-2">
                  {['Semua Course', 'Learning Paths', 'Free Courses', 'Premium Content', 'Challenges'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">🏰 Komunitas</h4>
                <ul className="space-y-2">
                  {['Discord Server', 'Forums', 'Events', 'Study Groups', 'Mentorship'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">🛠️ Dukungan</h4>
                <ul className="space-y-2">
                  {['Help Center', 'Contact Us', 'Documentation', 'Bug Reports', 'Feature Requests'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-purple-500/30 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400">
                  © 2024 CodeWizard Academy. Semua mantra coding dilindungi hak cipta.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Powered by Magic:</span>
                  <div className="flex gap-2">
                    {['⚡', '🔮', '✨', '🌟'].map((emoji, index) => (
                      <span key={index} className="animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  )
}
