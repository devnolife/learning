# Learning App - Multi-Role Architecture

A modern learning platform built with Next.js 15, featuring role-based access control for Users and Admins.

## 🚀 Features

### For Students
- **Dashboard**: Overview of enrolled courses and progress
- **Course Catalog**: Browse and enroll in courses
- **Progress Tracking**: Monitor learning progress and achievements
- **Profile Management**: Manage personal information and settings

### For Administrators
- **Admin Dashboard**: Platform analytics and metrics
- **User Management**: Manage student accounts and permissions
- **Course Management**: Create, edit, and publish courses
- **Analytics**: Detailed insights into platform usage and performance

### General Features
- **Role-Based Authentication**: Secure login system with User/Admin roles
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Beautiful components powered by shadcn/ui
- **Type Safety**: Full TypeScript support throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: Next.js App Router with route groups

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/                 # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── (dashboard)/            # User dashboard
│   │   ├── dashboard/
│   │   ├── courses/
│   │   ├── progress/
│   │   ├── profile/
│   │   └── layout.tsx
│   ├── (admin)/                # Admin panel
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   ├── users/
│   │   │   ├── courses/
│   │   │   ├── analytics/
│   │   │   └── settings/
│   │   └── layout.tsx
│   ├── (public)/               # Public pages
│   │   ├── about/
│   │   ├── pricing/
│   │   └── layout.tsx
│   ├── api/                    # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── admin/                  # Admin-specific components
│   ├── user/                   # User-specific components
│   ├── shared/                 # Shared components
│   └── auth/                   # Authentication components
├── lib/
│   ├── auth.ts                 # Authentication logic
│   ├── permissions.ts          # Role-based permissions
│   ├── prisma.ts               # Database connection
│   └── utils.ts
├── middleware.ts               # Route protection
├── types/
│   ├── auth.ts
│   ├── user.ts
│   └── admin.ts
└── hooks/
    ├── useAuth.ts
    ├── usePermissions.ts
    └── useRole.ts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd learning-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication & Roles

The application supports two main user roles:

### User Role
- Access to student dashboard
- Course enrollment and viewing
- Progress tracking
- Profile management

### Admin Role
- All user permissions
- User management capabilities
- Course creation and management
- Platform analytics access
- System settings management

## 🎨 UI Components

The application uses shadcn/ui for consistent and beautiful UI components:

- **Buttons**: Various styles and sizes
- **Cards**: For content organization
- **Forms**: Input fields, labels, validation
- **Navigation**: Sidebars, dropdown menus
- **Avatars**: User profile images

## 🛡️ Route Protection

Routes are protected using Next.js middleware:

- **Public routes**: `/`, `/about`, `/pricing`, `/login`, `/register`
- **User routes**: `/dashboard`, `/courses`, `/progress`, `/profile`
- **Admin routes**: `/admin/*`

## 🔧 Development

### Adding New Components

1. **UI Components**: Add to `src/components/ui/`
2. **Role-specific Components**: Add to appropriate role folder
3. **Shared Components**: Add to `src/components/shared/`

### Adding New Pages

1. Create page in appropriate route group
2. Ensure proper layout is applied
3. Add route protection if needed
4. Update navigation if required

### Working with Types

All TypeScript types are organized in the `src/types/` directory:

- `auth.ts`: Authentication-related types
- `user.ts`: User and course-related types  
- `admin.ts`: Admin and analytics types

## 📝 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the GitHub repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
