export interface AdminStats {
  totalUsers: number
  totalCourses: number
  totalRevenue: number
  activeUsers: number
}

export interface UserManagement {
  id: string
  email: string
  name: string
  role: 'USER' | 'ADMIN'
  isActive: boolean
  enrolledCourses: number
  totalSpent: number
  lastLoginAt: Date
  createdAt: Date
}

export interface CourseManagement {
  id: string
  title: string
  instructor: string
  enrolledStudents: number
  revenue: number
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

export interface AnalyticsData {
  userGrowth: {
    month: string
    users: number
  }[]
  courseEnrollments: {
    courseTitle: string
    enrollments: number
  }[]
  revenueData: {
    month: string
    revenue: number
  }[]
}
