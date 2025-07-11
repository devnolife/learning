import { AnalyticsDashboard } from '@/components/admin/analytics-dashboard'
import { UserManagement } from '@/components/admin/user-management'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-50">Admin Dashboard</h2>
        <p className="text-slate-400">
          Comprehensive overview of your learning platform performance and user management.
        </p>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
          <TabsTrigger value="analytics" className="text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="users" className="text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50">
            User Management
          </TabsTrigger>
          <TabsTrigger value="system" className="text-slate-300 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50">
            System Health
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analytics">
          <AnalyticsDashboard />
        </TabsContent>

        <TabsContent value="users">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <UserManagement />
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-50">System Health Monitor</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-900 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    <span className="text-slate-50 font-medium">Database</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">Connection healthy</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    <span className="text-slate-50 font-medium">API Server</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">Response time: 45ms</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <span className="text-slate-50 font-medium">Storage</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">78% capacity used</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader >
  <CardContent>
    <div className="text-2xl font-bold">86</div>
    <p className="text-xs text-muted-foreground">
      +12 from last month
    </p>
  </CardContent>
        </Card >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrollments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div >

  {/* Quick Actions and Recent Activity */ }
  < div className = "grid gap-4 md:grid-cols-2" >
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Create New Course
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Activity className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest platform activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">New user registered</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Course published</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Payment received</p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div >
    </div >
  )
}
