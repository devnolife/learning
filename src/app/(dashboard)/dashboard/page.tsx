"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { BookOpen, TrendingUp, Award, Clock, Search, Bell, CheckCircle2, Circle, Edit, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { setDashboardCSSVariables } from '@/lib/dashboard-theme'

export default function UserDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4, 10)) // May 2024
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: "Tindak lanjut untuk Maskot", completed: false },
    { id: 2, text: "Selesaikan tugas Logo 😎", completed: true },
    { id: 3, text: "Cari tim untuk Desain Web", completed: false }
  ])
  const [progressLoaded, setProgressLoaded] = useState(false)

  useEffect(() => {
    // Set CSS variables for dashboard theme
    setDashboardCSSVariables()

    // Trigger progress animation after component mounts
    setTimeout(() => setProgressLoaded(true), 300)
  }, [])

  const toggleTodo = (id: number) => {
    setTodoItems(items =>
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const courses = [
    { title: "Desain UI: Dari Nol hingga Mahir", lessons: "18 pelajaran", duration: "2j 4m", progress: 65 },
    { title: "After Effects: Panduan Lengkap untuk Profesional", lessons: "19 pelajaran", duration: "2j 4m", progress: 45 },
    { title: "Master Desain Web", lessons: "15 pelajaran", duration: "1j 30m", progress: 80 },
    { title: "Dasar-dasar HTML", lessons: "12 pelajaran", duration: "1j 15m", progress: 30 }
  ]

  const miniBarData = [30, 60, 40, 80, 90]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f6f0' }}>
      {/* Container */}
      <div className="max-w-[1400px] mx-auto bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">

        {/* Header */}
        <header className="bg-white p-4 md:p-8 border-b border-gray-100 flex items-center justify-between fade-in">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--dashboard-primary, #ff6b9d)' }}>
              E
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--dashboard-text, #2c3e50)' }}>EduMaster</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-1">
            {['Beranda', 'Kursus', 'Jadwal', 'Arsip', 'Buku'].map((item, index) => (
              <button
                key={item}
                className={`nav-item px-4 py-2 rounded-lg transition-all duration-300 ${index === 0
                  ? 'text-white'
                  : 'text-gray-600'
                  }`}
                style={index === 0 ? { backgroundColor: 'var(--dashboard-primary, #ff6b9d)' } : {}}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari di sini..."
                className="w-32 md:w-48 pl-10 py-2 rounded-2xl border border-gray-200"
              />
            </div>
            <div className="relative">
              <Avatar className="w-10 h-10" style={{ backgroundColor: 'var(--dashboard-secondary, #4a9b8e)' }}>
                <AvatarFallback className="text-white">CF</AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--dashboard-primary, #ff6b9d)' }}></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-4 md:p-8 grid lg:grid-cols-[1fr_300px] gap-4 md:gap-8">

          {/* Left Section */}
          <div className="space-y-6">

            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 space-y-4 md:space-y-0">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold mb-2" style={{ color: '#2c3e50' }}>
                  Selamat Pagi, Cecilia Funi ☁️
                </h1>
                <p className="text-gray-600">Platform Anda untuk Pembelajaran Tanpa Batas</p>
              </div>
              <Button
                className="px-6 py-3 rounded-full text-white font-semibold hover:translate-y-[-2px] transition-transform duration-300 w-full md:w-auto"
                style={{ backgroundColor: '#2c3e50' }}
              >
                Minta Demo
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 fade-in">
              {/* Large Stat Card */}
              <Card className="md:col-span-2 text-white relative overflow-hidden card-hover"
                style={{ background: 'linear-gradient(135deg, var(--dashboard-primary, #ff6b9d) 0%, #ff8fab 100%)' }}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-4xl font-bold mb-2">78%</h3>
                      <p className="text-white/80">Rata-rata progres</p>
                    </div>
                    <div className="flex items-end space-x-1 h-16 pt-8">
                      {miniBarData.map((height, index) => (
                        <div
                          key={index}
                          className="w-3 bg-white/60 rounded-sm animated-bar"
                          style={{
                            height: progressLoaded ? `${height}%` : '0%',
                            '--bar-delay': `${index * 0.1}s`,
                            '--bar-height': `${height}%`
                          } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Small Stat Cards */}
              <Card className="bg-white border border-gray-100 card-hover">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--dashboard-text, #2c3e50)' }}>40</h3>
                  <p className="text-gray-600 text-sm">Total kursus</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 card-hover">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--dashboard-text, #2c3e50)' }}>24</h3>
                  <p className="text-gray-600 text-sm">Total tugas</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 card-hover">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--dashboard-text, #2c3e50)' }}>8</h3>
                  <p className="text-gray-600 text-sm">Total kuis</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 card-hover">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--dashboard-text, #2c3e50)' }}>3.98</h3>
                  <p className="text-gray-600 text-sm">IPK saat ini</p>
                </CardContent>
              </Card>
            </div>

            {/* Courses Section */}
            <Card className="bg-white border border-gray-100 fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle style={{ color: 'var(--dashboard-text, #2c3e50)' }}>Kursus aktif</CardTitle>
                  <Button variant="ghost" style={{ color: 'var(--dashboard-primary, #ff6b9d)' }} className="hover:text-pink-600">
                    Lihat Semua
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {courses.map((course, index) => (
                    <div key={index} className="p-4 border-l-4 bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors duration-300"
                      style={{ borderLeftColor: 'var(--dashboard-secondary, #4a9b8e)' }}>
                      <h4 className="font-semibold mb-2" style={{ color: 'var(--dashboard-text, #2c3e50)' }}>{course.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <span>{course.lessons}</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress
                          value={progressLoaded ? course.progress : 0}
                          className="h-2 animated-progress"
                          style={{ '--progress-width': `${course.progress}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section */}
          <div className="space-y-6 fade-in">

            {/* Profile Card */}
            <Card className="bg-white border border-gray-100 card-hover">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4" style={{ backgroundColor: 'var(--dashboard-secondary, #4a9b8e)' }}>
                  <AvatarFallback className="text-white text-xl">CF</AvatarFallback>
                </Avatar>
                <h3 className="font-bold mb-1" style={{ color: 'var(--dashboard-text, #2c3e50)' }}>Cecilia Funi</h3>
                <p className="text-gray-600 text-sm mb-4">@cecilliafuni</p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Tahun:</span>
                    <span>Angkatan 2021</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jurusan:</span>
                    <span>Sistem Informasi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IPK:</span>
                    <span>3.98</span>
                  </div>
                </div>

                <Button className="w-full btn-hover" style={{ backgroundColor: 'var(--dashboard-accent, #007bff)' }}>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profil
                </Button>
              </CardContent>
            </Card>

            {/* Calendar Widget */}
            <Card className="bg-white border border-gray-100 card-hover">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle style={{ color: 'var(--dashboard-text, #2c3e50)' }}>Mei 2024</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="btn-hover">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="btn-hover">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {['Rab', 'Kam', 'Jum', 'Sab', 'Min', 'Sen', 'Sel'].map((day) => (
                    <div key={day} className="text-center text-xs text-gray-600 py-1">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[8, 9, 10, 11, 12, 13, 14].map((date) => (
                    <button
                      key={date}
                      className={`calendar-date p-2 text-sm rounded-lg transition-colors duration-200 ${date === 10
                        ? 'active text-white'
                        : 'text-gray-700'
                        }`}
                      style={date === 10 ? { backgroundColor: 'var(--dashboard-primary, #ff6b9d)' } : {}}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Todo List */}
            <Card className="bg-white border border-gray-100 card-hover">
              <CardHeader className="pb-4">
                <CardTitle style={{ color: 'var(--dashboard-text, #2c3e50)' }}>Daftar Tugas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todoItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 fade-in">
                      <button
                        onClick={() => toggleTodo(item.id)}
                        className="flex-shrink-0 todo-checkbox"
                      >
                        {item.completed ? (
                          <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--dashboard-secondary, #4a9b8e)' }} />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300 hover:text-gray-400" />
                        )}
                      </button>
                      <span className={`text-sm ${item.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
