# UI Components Setup Guide

This project now includes a comprehensive UI system combining **shadcn/ui** base components with **Magic UI** animated components for a modern, interactive user experience.

## 🚀 Installed Components

### shadcn/ui Base Components
- ✅ **Button** - Various button styles and variants
- ✅ **Card** - Layout and content cards
- ✅ **Input** - Form input fields
- ✅ **Label** - Form labels
- ✅ **Badge** - Status indicators and tags
- ✅ **Progress** - Progress bars
- ✅ **Accordion** - Collapsible content sections
- ✅ **Tabs** - Tabbed content navigation
- ✅ **Dialog** - Modal dialogs and overlays
- ✅ **Avatar** - User profile images
- ✅ **Dropdown Menu** - Contextual menus

### Magic UI Animated Components
- ✅ **AnimatedBeam** - Animated connection lines between elements
- ✅ **BorderBeam** - Animated border effects
- ✅ **NumberTicker** - Animated number counting
- ✅ **Ripple** - Animated ripple background effects
- ✅ **ShimmerButton** - Buttons with shimmer animations
- ✅ **SparklesText** - Text with sparkle effects
- ✅ **TypingAnimation** - Typewriter text animation
- ✅ **AnimatedGradientText** - Text with animated gradient colors

## 📁 File Structure

```
src/components/
├── ui/                    # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── magicui/              # Magic UI animated components
│   ├── animated-beam.tsx
│   ├── border-beam.tsx
│   ├── sparkles-text.tsx
│   ├── index.ts          # Magic UI exports
│   └── ...
└── index.ts              # Main components export file
```

## 🎯 Usage Examples

### Simple Import from Main Index
```tsx
import { 
  Button, 
  Card, 
  AnimatedBeam, 
  SparklesText 
} from '@/components'
```

### Individual Component Usage

#### Basic shadcn/ui Components
```tsx
// Button with variants
<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Card layout
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>

// Progress indicator
<Progress value={75} className="w-full" />

// Badges
<Badge variant="default">New</Badge>
<Badge variant="secondary">Popular</Badge>
```

#### Magic UI Animated Components
```tsx
// Sparkles text effect
<SparklesText className="text-4xl font-bold">
  Welcome to our platform!
</SparklesText>

// Typing animation
<TypingAnimation className="text-xl" duration={50}>
  This text types itself out character by character
</TypingAnimation>

// Number ticker
<NumberTicker 
  value={12345} 
  className="text-2xl font-bold text-blue-600" 
/>

// Shimmer button
<ShimmerButton className="shadow-2xl">
  <span className="text-white font-medium">
    Get Started ✨
  </span>
</ShimmerButton>

// Animated beam between elements
const containerRef = useRef<HTMLDivElement>(null)
const fromRef = useRef<HTMLDivElement>(null)
const toRef = useRef<HTMLDivElement>(null)

<div ref={containerRef} className="relative">
  <div ref={fromRef}>Start Point</div>
  <div ref={toRef}>End Point</div>
  <AnimatedBeam
    containerRef={containerRef}
    fromRef={fromRef}
    toRef={toRef}
    duration={3}
  />
</div>
```

#### Special Effects
```tsx
// Border beam effect on cards
<Card className="relative overflow-hidden">
  <BorderBeam size={250} duration={12} />
  <CardContent>
    Your content here
  </CardContent>
</Card>

// Ripple background effect
<div className="relative">
  <Ripple />
  <div className="relative z-10">
    Content over ripple effect
  </div>
</div>
```

## 🎨 Styling & Customization

### CSS Variables
Magic UI components automatically integrate with your CSS custom properties. Key variables are already configured in `globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... additional color variables */
}
```

### Component Variants
Most components support className props for custom styling:

```tsx
<SparklesText 
  className="text-4xl font-bold text-purple-600"
  sparklesCount={20}
  colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
>
  Custom styled text
</SparklesText>
```

## 🔧 TypeScript Support

All components include full TypeScript support with exported interfaces:

```tsx
import type { 
  AnimatedBeamProps, 
  SparklesTextProps,
  BorderBeamProps 
} from '@/components'

// Use types for custom components
interface MyComponentProps {
  beamConfig: AnimatedBeamProps
}
```

## 🚀 Live Demo

Visit `/demo` to see all components in action with interactive examples showing:
- Text animations and effects
- Button variants and styles
- Special effects (border beams, ripples)
- Connection animations
- Integration examples

## 📦 Dependencies

The setup automatically installed required dependencies:
- `motion` (Framer Motion) for animations
- `class-variance-authority` for component variants
- `clsx` and `tailwind-merge` for className utilities
- Various React utilities for component functionality

## 🎯 Best Practices

1. **Performance**: Magic UI components are optimized and use React.memo where appropriate
2. **Accessibility**: All components maintain accessibility standards from shadcn/ui
3. **Responsive**: Components work seamlessly across all device sizes
4. **Dark Mode**: Full dark mode support for all components
5. **Customization**: Easy to customize with Tailwind CSS classes

## 🔄 Updates

To add more components:

### shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

### Magic UI components:
```bash
npx shadcn@latest add "https://magicui.design/r/[component-name]"
```

Then update the main `components/index.ts` file to export new components.

## 🎉 Ready to Use!

Your UI system is now ready! All components are properly integrated and can be used throughout your learning platform for creating engaging, modern user interfaces.
