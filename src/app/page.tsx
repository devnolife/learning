"use client"

import Link from 'next/link'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Award, TrendingUp, Play, Code, Zap, Star, Globe, Shield, ArrowRight, Check, X, Monitor, Brain, Clock, Target, Lightbulb, PlayCircle, Copy, RefreshCw } from 'lucide-react'
import { SparklesText, NumberTicker, BorderBeam, Ripple, AnimatedBeam } from '@/components/magicui'
import { PageTransition, StaggerContainer, StaggerItem, FadeUpCard } from '@/components/shared/page-transition'

export default function HomePage() {
  const fromRef = useRef<HTMLDivElement>(null)
  const toRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-brand-dark via-brand-navy to-brand-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,10,107,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(110,172,218,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,185,181,0.2),transparent_50%)]" />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-brand-secondary to-brand-purple rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-brand-teal-light to-brand-secondary rounded-lg opacity-10 animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-navy rounded-full opacity-30 animate-pulse" />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <Ripple className="opacity-10" />
          <StaggerContainer className="max-w-7xl mx-auto text-center relative z-10">
            <StaggerItem>
              <Badge className="mb-6 bg-brand-secondary/20 text-brand-cream border-brand-secondary/30 backdrop-blur-sm">
                🚀 Platform #1 untuk Belajar Coding
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <SparklesText
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
                colors={{ first: "#6EACDA", second: "#78B9B5" }}
                sparklesCount={20}
              >
                Belajar Coding Jadi
                <br />
                <span className="bg-gradient-to-r from-brand-secondary to-brand-teal-light bg-clip-text text-transparent">
                  Mudah & Menyenangkan
                </span>
              </SparklesText>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Dari Pemula ke Expert dengan Metode yang Terbukti.
                <br />
                Praktek Langsung, Bukan Cuma Teori!
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="relative overflow-hidden group btn-primary border-0" asChild>
                  <Link href="/register">
                    <Ripple className="opacity-30" />
                    Mulai Belajar Gratis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="relative overflow-hidden group bg-brand-secondary/10 border-brand-secondary/30 text-brand-cream hover:bg-brand-secondary/20 backdrop-blur-sm" asChild>
                  <Link href="/demo">
                    <Play className="mr-2 h-5 w-5" />
                    Lihat Demo
                  </Link>
                </Button>
              </div>
            </StaggerItem>

            {/* Social Proof */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-brand-cream/70">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-brand-secondary to-brand-teal-light rounded-full border-2 border-brand-cream/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <span className="text-sm">10,000+ Happy Students</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-warning text-brand-warning" />
                  ))}
                  <span className="text-sm ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Why Our Method Works Better Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-brand-dark to-brand-navy relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Kenapa Metode Kami Lebih Efektif?
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Bandingkan sendiri perbedaan metode pembelajaran tradisional vs metode interaktif kami
                </p>
              </StaggerItem>
            </StaggerContainer>

            <div className="grid lg:grid-cols-2 gap-12 items-center" ref={containerRef}>
              {/* Traditional Learning - Left Side */}
              <FadeUpCard delay={0.1}>
                <Card className="relative overflow-hidden bg-gray-800/50 border-gray-700 backdrop-blur-sm h-96" ref={fromRef}>
                  <CardHeader className="text-center p-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <BookOpen className="h-8 w-8 text-gray-400" />
                      <CardTitle className="text-gray-300 text-xl">Pembelajaran Tradisional</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded p-4 text-gray-400 text-sm font-mono">
                        <p>1. Baca teori dari buku/slide</p>
                        <p>2. Catat materi di kertas</p>
                        <p>3. Hapal syntax dan konsep</p>
                        <p>4. Latihan soal pilihan ganda</p>
                        <p>5. Ujian tulis tanpa praktik</p>
                      </div>
                      <div className="flex items-center gap-2 text-red-400">
                        <X className="h-4 w-4" />
                        <span className="text-sm">Membosankan dan sulit dipahami</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-400">
                        <X className="h-4 w-4" />
                        <span className="text-sm">Tidak ada praktik langsung</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-400">
                        <X className="h-4 w-4" />
                        <span className="text-sm">Sulit diterapkan di dunia nyata</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeUpCard>

              {/* Animated Beam Connection */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="relative">
                  <AnimatedBeam
                    className="w-24 h-1"
                    containerRef={containerRef}
                    fromRef={fromRef}
                    toRef={toRef}
                  />
                  <ArrowRight className="absolute -right-3 -top-2 h-5 w-5 text-purple-400 animate-pulse" />
                </div>
              </div>

              {/* Our Interactive Method - Right Side */}
              <FadeUpCard delay={0.2}>
                <Card className="relative overflow-hidden card-premium border-brand-secondary/50 backdrop-blur-sm h-96" ref={toRef}>
                  <BorderBeam size={80} duration={12} delay={0} colorFrom="var(--brand-purple)" colorTo="var(--brand-primary)" />
                  <CardHeader className="text-center p-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <PlayCircle className="h-8 w-8 text-purple-400" />
                      <CardTitle className="text-white text-xl">Metode Interaktif Kami</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded p-4 text-green-400 text-sm font-mono">
                        <p className="text-purple-400">function</p>
                        <p className="ml-2">belajarCoding() {'{'}</p>
                        <p className="ml-4 text-yellow-400">praktek.langsung();</p>
                        <p className="ml-4 text-blue-400">lihat.hasilRealTime();</p>
                        <p className="ml-4 text-green-400">dapatFeedback();</p>
                        <p className="ml-2">{'}'}</p>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Praktek langsung di browser</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Feedback real-time</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Project-based learning</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeUpCard>
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
              <p className="text-sm text-blue-100 mt-6">
                * Tidak perlu kartu kredit • 7 hari gratis • Batalkan kapan saja
              </p>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </div>
    </PageTransition>
  )
}
