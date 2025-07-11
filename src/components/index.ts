// Comprehensive UI Components Export
// This file provides easy access to all UI components in the project

// shadcn/ui Base Components
export { Button } from './ui/button'
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
export { Input } from './ui/input'
export { Label } from './ui/label'
export { Badge } from './ui/badge'
export { Progress } from './ui/progress'
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
export { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
export { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog'
export { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu'
export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

// Magic UI Animated Components
export {
  AnimatedBeam,
  AnimatedGradientText,
  BorderBeam,
  NumberTicker,
  Ripple,
  ShimmerButton,
  SparklesText,
  TypingAnimation
} from './magicui'

// Type exports
export type {
  AnimatedBeamProps,
  AnimatedGradientTextProps,
  BorderBeamProps,
  NumberTickerProps,
  RippleProps,
  ShimmerButtonProps,
  SparklesTextProps,
  TypingAnimationProps
} from './magicui'

// Admin Components
export { AdminSidebar } from './admin/admin-sidebar'
export { AdminHeader } from './admin/admin-header'
export { AdminProvider, useAdmin } from './admin/admin-provider'
export { UserManagement } from './admin/user-management'
export { AnalyticsDashboard } from './admin/analytics-dashboard'

// User Components
export { UserSidebar } from './user/user-sidebar'
export { UserHeader } from './user/user-header'
export { UserProvider, useUser } from './user/user-provider'
export { CoursePlayer } from './user/course-player'
export { ProgressTracker } from './user/progress-tracker'

// Shared Components
export { PublicHeader } from './shared/public-header'
export { PublicFooter } from './shared/public-footer'
