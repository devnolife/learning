"use client"

import { useRef } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Progress,
  AnimatedBeam,
  BorderBeam,
  NumberTicker,
  Ripple,
  ShimmerButton,
  SparklesText,
  TypingAnimation,
  AnimatedGradientText
} from '@/components'

export default function DemoPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const fromRef = useRef<HTMLDivElement>(null)
  const toRef = useRef<HTMLDivElement>(null)

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <SparklesText className="text-4xl font-bold">
          UI Components Demo
        </SparklesText>
        <TypingAnimation
          className="text-xl text-gray-600 dark:text-gray-400"
          duration={50}
        >
          Showcasing the integration of shadcn/ui and Magic UI components
        </TypingAnimation>
      </div>

      {/* Text Components Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Text Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Animated Gradient Text</CardTitle>
              <CardDescription>Beautiful gradient text animations</CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatedGradientText className="text-2xl font-bold">
                🎨 Beautiful Gradient Text
              </AnimatedGradientText>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Number Ticker</CardTitle>
              <CardDescription>Animated number counter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg">Students enrolled:</span>
                <NumberTicker value={12345} className="text-2xl font-bold text-blue-600" />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg">Courses completed:</span>
                <NumberTicker value={987} className="text-2xl font-bold text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Button Components Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Interactive Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard Button</CardTitle>
              <CardDescription>shadcn/ui button component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shimmer Button</CardTitle>
              <CardDescription>Magic UI animated button</CardDescription>
            </CardHeader>
            <CardContent>
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Shimmer Button ✨
                </span>
              </ShimmerButton>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges & Progress</CardTitle>
              <CardDescription>Status indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Badge variant="default">New</Badge>
                <Badge variant="secondary">Popular</Badge>
                <Badge variant="outline">Featured</Badge>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Course Progress</label>
                <Progress value={75} className="w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Effects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Special Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <CardHeader>
              <CardTitle>Border Beam Effect</CardTitle>
              <CardDescription>Animated border with beam effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                This card features an animated border beam that creates a dynamic visual effect.
                Perfect for highlighting important content or call-to-action cards.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <Ripple />
            <CardHeader>
              <CardTitle>Ripple Background</CardTitle>
              <CardDescription>Animated ripple effect background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                The ripple effect creates a soothing animated background that adds depth and
                motion to your content without being distracting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Animated Beam Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Connection Animations</h2>
        <Card>
          <CardHeader>
            <CardTitle>Animated Beam</CardTitle>
            <CardDescription>Shows connections between elements</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              ref={containerRef}
              className="relative flex h-[200px] w-full items-center justify-between p-8"
            >
              <div
                ref={fromRef}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white font-bold"
              >
                A
              </div>
              <div
                ref={toRef}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white font-bold"
              >
                B
              </div>
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={fromRef}
                toRef={toRef}
                curvature={0}
                duration={3}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Watch the animated beam travel from point A to point B, perfect for showcasing
              data flow, integrations, or process connections.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Integration Notes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Integration Notes</h2>
        <Card>
          <CardHeader>
            <CardTitle>✅ Components Successfully Integrated</CardTitle>
            <CardDescription>All components work seamlessly together</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-600">shadcn/ui Components:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Button variants and styles</li>
                  <li>• Card layout components</li>
                  <li>• Badge status indicators</li>
                  <li>• Progress bars</li>
                  <li>• Input and form elements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600">Magic UI Components:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Animated text effects</li>
                  <li>• Interactive button animations</li>
                  <li>• Background effects (ripple, border beam)</li>
                  <li>• Connection animations (animated beam)</li>
                  <li>• Number ticker animations</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Import Usage:</strong> All components can be imported from the main components index:
                <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded text-xs ml-1">
                  {`import { Button, AnimatedBeam, SparklesText } from '@/components'`}
                </code>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
