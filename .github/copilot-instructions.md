<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Learning App - Multi-Role Architecture

This is a Next.js learning application with role-based access control supporting both Users and Admins.

## Project Structure

- **Authentication**: Role-based authentication with User and Admin roles
- **Route Groups**: 
  - `(auth)` - Authentication pages (login, register)
  - `(dashboard)` - User dashboard, courses, progress, profile
  - `(admin)` - Admin panel with user management, course management, analytics
  - `(public)` - Public pages (home, about, pricing)
- **Components**: Organized by role (user, admin, shared, auth) plus UI components
- **Type Safety**: Comprehensive TypeScript types for all entities

## Development Guidelines

1. **Role-Based Access**: Always consider user permissions when creating new features
2. **Component Organization**: Place components in appropriate folders based on their usage
3. **Type Safety**: Use existing types or extend them for new features
4. **UI Consistency**: Use shadcn/ui components for consistent design
5. **Route Protection**: Implement proper middleware checks for protected routes

## Key Features

- Multi-role authentication (User/Admin)
- Course management and enrollment
- Progress tracking
- User management (Admin)
- Analytics dashboard (Admin)
- Responsive design with Tailwind CSS

## Libraries Used

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

When creating new features, maintain the established patterns and ensure proper role-based access control.
