export interface UserProfile {
  id: string
  email: string
  name: string
  avatar?: string
  bio?: string
  enrolledCourses?: Course[]
  progress?: CourseProgress[]
  createdAt: Date
  updatedAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  thumbnail?: string
  instructor: string
  duration: number
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
  category: string
  price: number
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CourseProgress {
  id: string
  userId: string
  courseId: string
  completedLessons: number
  totalLessons: number
  progressPercentage: number
  lastAccessedAt: Date
}
