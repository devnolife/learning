'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { SparklesText } from '@/components/magicui/sparkles-text'
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Settings,
  Maximize,
  CheckCircle,
  Clock,
  BookOpen,
  Star,
} from 'lucide-react'

interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
  current?: boolean
}

interface Course {
  id: string
  title: string
  instructor: string
  progress: number
  totalLessons: number
  completedLessons: number
  currentLesson: string
  rating: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const mockCourse: Course = {
  id: '1',
  title: 'Advanced React Patterns',
  instructor: 'Sarah Johnson',
  progress: 65,
  totalLessons: 24,
  completedLessons: 16,
  currentLesson: 'Higher-Order Components',
  rating: 4.8,
  difficulty: 'Advanced',
}

const mockLessons: Lesson[] = [
  { id: '1', title: 'Introduction to Advanced Patterns', duration: '8:45', completed: true },
  { id: '2', title: 'Render Props Pattern', duration: '12:30', completed: true },
  { id: '3', title: 'Higher-Order Components', duration: '15:20', completed: false, current: true },
  { id: '4', title: 'Custom Hooks Deep Dive', duration: '18:15', completed: false },
  { id: '5', title: 'Context API Best Practices', duration: '14:50', completed: false },
  // Add more lessons as needed
]

export function CoursePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(342) // seconds
  const [duration] = useState(920) // seconds
  const [showCelebration, setShowCelebration] = useState(false)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progressPercent = (currentTime / duration) * 100

  const handleLessonComplete = () => {
    setShowCelebration(true)
    setTimeout(() => setShowCelebration(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            {showCelebration ? (
              <SparklesText className="text-2xl font-bold text-gray-900">
                {mockCourse.title}
              </SparklesText>
            ) : (
              <h1 className="text-2xl font-bold text-gray-900">{mockCourse.title}</h1>
            )}
            <Badge className={
              mockCourse.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                mockCourse.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
            }>
              {mockCourse.difficulty}
            </Badge>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>by {mockCourse.instructor}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{mockCourse.rating}</span>
            </div>
            <span>{mockCourse.completedLessons}/{mockCourse.totalLessons} lessons completed</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{mockCourse.progress}%</div>
          <div className="text-sm text-gray-500">Complete</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-0 overflow-hidden">
            {/* Video Placeholder */}
            <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-white" />
                  ) : (
                    <Play className="h-8 w-8 text-white ml-1" />
                  )}
                </div>
                <div className="text-white">
                  <h3 className="font-semibold">{mockCourse.currentLesson}</h3>
                  <p className="text-sm text-gray-300">Click to {isPlaying ? 'pause' : 'play'}</p>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="space-y-3">
                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <Progress value={progressPercent} className="h-1" />
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <SkipBack className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <SkipForward className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Lesson Info */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{mockCourse.currentLesson}</h3>
                <Button onClick={handleLessonComplete} className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark Complete
                </Button>
              </div>
              <p className="text-gray-600">
                In this lesson, we'll explore Higher-Order Components (HOCs) in React,
                a powerful pattern for reusing component logic. You'll learn how to create
                and use HOCs effectively in your applications.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>15:20 duration</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Chapter 3 of 8</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Lesson List */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Course Progress</h3>
            <div className="space-y-2">
              <Progress value={mockCourse.progress} className="h-2" />
              <div className="text-sm text-gray-600">
                {mockCourse.completedLessons} of {mockCourse.totalLessons} lessons completed
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-4">Lessons</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {mockLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${lesson.current
                      ? 'bg-blue-50 border-blue-200'
                      : lesson.completed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : lesson.current ? (
                          <Play className="h-5 w-5 text-blue-600" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-medium truncate ${lesson.current ? 'text-blue-700' : 'text-gray-900'
                          }`}>
                          {lesson.title}
                        </p>
                        <p className="text-xs text-gray-500">{lesson.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
