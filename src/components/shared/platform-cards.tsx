import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BorderBeam } from '@/components/magicui'
import {
  BookOpen,
  Users,
  Award,
  Star,
  Clock,
  Play,
  User,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  Crown
} from 'lucide-react'

interface CourseCardProps {
  title: string
  description: string
  instructor: string
  duration: string
  rating: number
  students: number
  price: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  isPremium?: boolean
  isPopular?: boolean
  image?: string
}

export function CourseCard({
  title,
  description,
  instructor,
  duration,
  rating,
  students,
  price,
  level,
  isPremium = false,
  isPopular = false,
  image
}: CourseCardProps) {
  return (
    <Card className={`relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full ${isPremium ? 'card-premium' : 'bg-white border-brand-secondary/20'
      }`}>
      {isPremium && <BorderBeam size={80} duration={12} colorFrom="var(--brand-purple)" colorTo="var(--brand-primary)" />}

      {isPopular && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-brand-warning text-white">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}

      {isPremium && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-brand-purple text-white">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>
      )}

      <CardHeader className="p-0">
        <div className={`h-48 bg-gradient-to-br ${isPremium
            ? 'from-brand-purple/20 to-brand-primary/20'
            : 'from-brand-secondary/20 to-brand-teal-light/20'
          } flex items-center justify-center`}>
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <BookOpen className={`h-16 w-16 ${isPremium ? 'text-white' : 'text-brand-secondary'}`} />
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className={`badge-${level === 'Beginner' ? 'success' : level === 'Intermediate' ? 'info' : 'warning'}`}>
            {level}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-brand-warning text-brand-warning" />
            <span className={`text-sm font-medium ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
              {rating}
            </span>
          </div>
        </div>

        <CardTitle className={`text-xl mb-2 line-clamp-2 ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
          {title}
        </CardTitle>

        <CardDescription className={`mb-4 line-clamp-3 ${isPremium ? 'text-white/80' : 'text-brand-navy'}`}>
          {description}
        </CardDescription>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <User className={`h-4 w-4 ${isPremium ? 'text-white/60' : 'text-brand-teal-dark'}`} />
            <span className={isPremium ? 'text-white/80' : 'text-brand-navy'}>
              {instructor}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className={`h-4 w-4 ${isPremium ? 'text-white/60' : 'text-brand-teal-dark'}`} />
            <span className={isPremium ? 'text-white/80' : 'text-brand-navy'}>
              {duration}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className={`h-4 w-4 ${isPremium ? 'text-white/60' : 'text-brand-teal-dark'}`} />
            <span className={isPremium ? 'text-white/80' : 'text-brand-navy'}>
              {students.toLocaleString()} siswa
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className={`text-2xl font-bold ${isPremium ? 'text-white' : 'text-brand-primary'}`}>
              {price}
            </span>
          </div>
          <Button
            className={isPremium ? 'btn-secondary' : 'btn-primary'}
            size="sm"
          >
            <Play className="h-4 w-4 mr-1" />
            Mulai Belajar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  variant?: 'default' | 'featured' | 'premium'
}

export function FeatureCard({ icon, title, description, features, variant = 'default' }: FeatureCardProps) {
  const getCardStyles = () => {
    switch (variant) {
      case 'featured':
        return 'card-featured'
      case 'premium':
        return 'card-premium'
      default:
        return 'bg-white border-brand-cream'
    }
  }

  return (
    <Card className={`relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full ${getCardStyles()}`}>
      {variant === 'premium' && (
        <BorderBeam size={60} duration={12} colorFrom="var(--brand-purple)" colorTo="var(--brand-primary)" />
      )}

      <CardHeader className="text-center p-8">
        <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center ${variant === 'premium'
            ? 'bg-white/20'
            : variant === 'featured'
              ? 'bg-brand-secondary/20'
              : 'bg-brand-teal-light/20'
          }`}>
          {icon}
        </div>
        <CardTitle className={`text-xl mb-2 ${variant === 'premium' ? 'text-white' : 'text-brand-dark'
          }`}>
          {title}
        </CardTitle>
        <CardDescription className={variant === 'premium' ? 'text-white/80' : 'text-brand-navy'}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-0">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className={`h-5 w-5 flex-shrink-0 ${variant === 'premium' ? 'text-white' : 'text-brand-success'
                }`} />
              <span className={variant === 'premium' ? 'text-white/90' : 'text-brand-dark'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

interface StatsCardProps {
  title: string
  value: string | number
  subtitle: string
  icon: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  variant?: 'default' | 'admin'
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend = 'neutral',
  trendValue,
  variant = 'default'
}: StatsCardProps) {
  return (
    <Card className={`relative overflow-hidden group hover:shadow-lg transition-all duration-300 ${variant === 'admin' ? 'card-admin' : 'bg-white border-brand-cream'
      }`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${variant === 'admin'
              ? 'bg-white/20'
              : 'bg-brand-secondary/20'
            }`}>
            {icon}
          </div>
          {trend !== 'neutral' && trendValue && (
            <div className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-brand-success' : 'text-brand-error'
              }`}>
              <TrendingUp className={`h-4 w-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
              {trendValue}
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h3 className={`text-sm font-medium ${variant === 'admin' ? 'text-white/80' : 'text-brand-navy'
            }`}>
            {title}
          </h3>
          <div className={`text-3xl font-bold ${variant === 'admin' ? 'text-white' : 'text-brand-dark'
            }`}>
            {value}
          </div>
          <p className={`text-sm ${variant === 'admin' ? 'text-white/60' : 'text-brand-navy/70'
            }`}>
            {subtitle}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

interface ProgressCardProps {
  title: string
  description: string
  progress: number
  currentStep: string
  totalSteps: number
  completedSteps: number
}

export function ProgressCard({
  title,
  description,
  progress,
  currentStep,
  totalSteps,
  completedSteps
}: ProgressCardProps) {
  return (
    <Card className="bg-white border-brand-secondary/20 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <CardTitle className="text-brand-dark text-lg mb-2">{title}</CardTitle>
            <CardDescription className="text-brand-navy">{description}</CardDescription>
          </div>
          <Badge className="badge-info ml-4">
            {completedSteps}/{totalSteps}
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-brand-dark">Progress</span>
              <span className="text-sm text-brand-navy">{progress}%</span>
            </div>
            <div className="progress-bar h-2 rounded-full overflow-hidden">
              <div
                className="progress-bar-fill h-full transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-brand-navy">
              Saat ini: {currentStep}
            </span>
            <Button size="sm" className="btn-primary">
              <Play className="h-4 w-4 mr-1" />
              Lanjutkan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Example usage component
export function CardShowcase() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Course Cards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="React for Beginners"
            description="Learn the fundamentals of React.js from scratch with hands-on projects"
            instructor="John Smith"
            duration="8 jam"
            rating={4.8}
            students={1234}
            price="Rp 299K"
            level="Beginner"
            isPopular={true}
          />
          <CourseCard
            title="Advanced Node.js Development"
            description="Master backend development with Node.js, Express, and MongoDB"
            instructor="Sarah Johnson"
            duration="12 jam"
            rating={4.9}
            students={856}
            price="Rp 599K"
            level="Advanced"
            isPremium={true}
          />
          <CourseCard
            title="Full Stack JavaScript"
            description="Complete web development course covering frontend and backend"
            instructor="Mike Chen"
            duration="20 jam"
            rating={4.7}
            students={2456}
            price="Rp 799K"
            level="Intermediate"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Feature Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-brand-secondary" />}
            title="Interactive Learning"
            description="Learn by doing with our hands-on approach"
            features={[
              "Live coding environment",
              "Real-time feedback",
              "Project-based learning",
              "Code review sessions"
            ]}
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-white" />}
            title="Job Guarantee"
            description="Get hired or get your money back"
            features={[
              "Career coaching",
              "Interview preparation",
              "Portfolio development",
              "Industry networking"
            ]}
            variant="premium"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-brand-teal-dark" />}
            title="Community Support"
            description="Learn together with fellow developers"
            features={[
              "24/7 community help",
              "Study groups",
              "Mentorship program",
              "Networking events"
            ]}
            variant="featured"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Stats Cards</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <StatsCard
            title="Total Students"
            value="15,234"
            subtitle="Active learners"
            icon={<Users className="h-6 w-6 text-brand-secondary" />}
            trend="up"
            trendValue="+12%"
          />
          <StatsCard
            title="Course Completion"
            value="89%"
            subtitle="Average completion rate"
            icon={<Award className="h-6 w-6 text-brand-success" />}
            trend="up"
            trendValue="+5%"
          />
          <StatsCard
            title="Job Placement"
            value="94%"
            subtitle="Within 6 months"
            icon={<TrendingUp className="h-6 w-6 text-white" />}
            trend="up"
            trendValue="+8%"
            variant="admin"
          />
          <StatsCard
            title="Satisfaction"
            value="4.9/5"
            subtitle="Student rating"
            icon={<Star className="h-6 w-6 text-brand-warning" />}
            trend="neutral"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Progress Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProgressCard
            title="JavaScript Fundamentals"
            description="Master the core concepts of JavaScript programming"
            progress={75}
            currentStep="Arrays and Objects"
            totalSteps={12}
            completedSteps={9}
          />
          <ProgressCard
            title="React Development"
            description="Build modern web applications with React"
            progress={45}
            currentStep="State Management"
            totalSteps={15}
            completedSteps={7}
          />
        </div>
      </section>
    </div>
  )
} 
