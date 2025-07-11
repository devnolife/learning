import { CoursePlayer } from '@/components/user/course-player'
import { ProgressTracker } from '@/components/user/progress-tracker'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { Play, BookOpen, Award, Target } from 'lucide-react'

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <SparklesText className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome back, John!
          </SparklesText>
          <p className="text-gray-600">
            Continue your learning journey and achieve your goals.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Play className="mr-2 h-4 w-4" />
          Continue Learning
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700">Enrolled Courses</p>
              <p className="text-2xl font-bold text-blue-900">5</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-green-500 flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-700">Achievements</p>
              <p className="text-2xl font-bold text-green-900">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-purple-500 flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-700">Progress</p>
              <p className="text-2xl font-bold text-purple-900">87%</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold">🔥</span>
            </div>
            <div>
              <p className="text-sm font-medium text-orange-700">Streak</p>
              <p className="text-2xl font-bold text-orange-900">12 days</p>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="continue" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="continue">Continue Learning</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
          <TabsTrigger value="courses">All Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="continue">
          <Card className="p-6">
            <CoursePlayer />
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <ProgressTracker />
        </TabsContent>

        <TabsContent value="courses">
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">My Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Mock course cards */}
                {[
                  { title: 'React Fundamentals', progress: 100, instructor: 'John Doe' },
                  { title: 'Advanced JavaScript', progress: 75, instructor: 'Jane Smith' },
                  { title: 'TypeScript Mastery', progress: 45, instructor: 'Bob Johnson' },
                  { title: 'Node.js Backend', progress: 0, instructor: 'Alice Brown' },
                  { title: 'Database Design', progress: 30, instructor: 'Mike Wilson' },
                ].map((course, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-blue-600 h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button
                        variant={course.progress === 0 ? "default" : "outline"}
                        size="sm"
                        className="w-full"
                      >
                        {course.progress === 0 ? 'Start Course' : course.progress === 100 ? 'Review' : 'Continue'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
