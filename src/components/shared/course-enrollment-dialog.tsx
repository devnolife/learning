"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Award, Star, Play, BookOpen } from 'lucide-react'
import { BorderBeam, Ripple, NumberTicker, ShimmerButton } from '@/components/magicui'

interface CourseEnrollmentDialogProps {
  children: React.ReactNode
  courseId: string
  title: string
  description: string
  duration: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  instructor: string
  students: number
  rating: number
  price: number
  image?: string
}

export function CourseEnrollmentDialog({
  children,
  courseId,
  title,
  description,
  duration,
  level,
  instructor,
  students,
  rating,
  price,
  image
}: CourseEnrollmentDialogProps) {
  const [isEnrolling, setIsEnrolling] = useState(false)
  const [isEnrolled, setIsEnrolled] = useState(false)

  const handleEnrollment = async () => {
    setIsEnrolling(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsEnrolled(true)
    setIsEnrolling(false)
  }

  const levelColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription>
            Complete course details and enrollment options
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Course Preview */}
          <Card className="relative overflow-hidden">
            <BorderBeam size={50} duration={15} delay={0} colorFrom="#3B82F6" colorTo="#8B5CF6" />
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {duration} hours
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <NumberTicker value={students} /> students
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <NumberTicker value={rating} decimalPlaces={1} />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={levelColors[level]}>
                    {level}
                  </Badge>
                  <div className="mt-2 text-2xl font-bold text-blue-600">
                    ${price}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Features */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="relative overflow-hidden">
              <BorderBeam size={30} duration={12} delay={0} colorFrom="#10B981" colorTo="#3B82F6" />
              <CardHeader className="text-center pb-2">
                <Play className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-sm">Video Lessons</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  HD video content with subtitles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <BorderBeam size={30} duration={12} delay={4} colorFrom="#8B5CF6" colorTo="#EC4899" />
              <CardHeader className="text-center pb-2">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-sm">Certificate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Completion certificate included
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <BorderBeam size={30} duration={12} delay={8} colorFrom="#F59E0B" colorTo="#EF4444" />
              <CardHeader className="text-center pb-2">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-sm">Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Access to student community
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Instructor Info */}
          <Card className="relative overflow-hidden">
            <Ripple className="opacity-10" />
            <CardHeader>
              <CardTitle className="text-lg">Meet Your Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{instructor}</h4>
                  <p className="text-sm text-muted-foreground">
                    Senior Software Engineer with 8+ years experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enrollment Actions */}
          <div className="flex justify-end space-x-3">
            <Button variant="outline" size="lg">
              Add to Wishlist
            </Button>
            {isEnrolled ? (
              <Button size="lg" className="relative overflow-hidden group" disabled>
                <Ripple className="opacity-30" />
                ✓ Enrolled
              </Button>
            ) : (
              <ShimmerButton
                className="shadow-2xl"
                onClick={handleEnrollment}
                disabled={isEnrolling}
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  {isEnrolling ? 'Enrolling...' : 'Enroll Now'}
                </span>
              </ShimmerButton>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
