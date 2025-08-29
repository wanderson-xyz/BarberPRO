# BarberPro - Modern Barbershop Landing Page

## Overview

BarberPro is a modern, SEO-optimized landing page for a barbershop business built with React, TypeScript, and TailwindCSS. The application serves as an institutional website designed to convert visitors into customers through strategic lead generation and appointment booking functionality. The site features a comprehensive layout with sections for services, pricing, team information, gallery, testimonials, and direct appointment scheduling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a component-based React architecture with TypeScript for type safety:

- **Component Structure**: Modular design with dedicated components for each page section (Hero, About, Services, Pricing, Team, Gallery, Testimonials, etc.)
- **Styling Framework**: TailwindCSS with shadcn/ui component library for consistent design system
- **Form Management**: React Hook Form with Zod validation for appointment booking and newsletter signup
- **State Management**: React hooks for local state, React Query for server state management
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Architecture
**Updated for Vercel Deployment**: Migrated from Express.js to serverless functions

- **Serverless Functions**: API endpoints deployed as Vercel functions in `/api` directory
- **API Routes**: `/api/appointment`, `/api/contact`, `/api/newsletter` endpoints
- **Validation**: Zod schema validation in each serverless function
- **Error Handling**: Proper HTTP status codes and error responses
- **Form Integration**: Real API calls from frontend forms to serverless functions

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Type-safe database schemas using Drizzle with Zod validation
- **Connection**: Neon Database serverless PostgreSQL connection
- **Migrations**: Drizzle Kit for database migrations and schema management

### UI/UX Design Decisions
- **Design System**: Dark theme with golden accent color (HSL 51, 100%, 50%)
- **Typography**: Poppins font family for modern, clean appearance
- **Color Scheme**: Dark background with high contrast for accessibility
- **Interactive Elements**: Hover states, transitions, and micro-interactions
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### SEO Optimization Features
- **Meta Tags**: Comprehensive Open Graph and standard meta tags
- **Structured Content**: Semantic HTML with proper heading hierarchy
- **Performance**: Optimized images from Unsplash with proper alt attributes
- **Social Media**: Open Graph tags for social sharing optimization

### Conversion Optimization
- **Call-to-Action Strategy**: Multiple CTA buttons throughout the page
- **WhatsApp Integration**: Floating WhatsApp button for direct communication
- **Lead Capture Forms**: Newsletter signup and appointment booking forms
- **Social Proof**: Customer testimonials and team member showcases

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern features
- **Vite**: Build tool and development server with hot module replacement
- **TypeScript**: Type safety and enhanced developer experience
- **Express.js**: Backend server framework

### UI and Styling
- **TailwindCSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management

### Form Management and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle Kit**: Database migrations and introspection tools

### Development and Build Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **TSX**: TypeScript execution for development server

### Additional Features
- **React Helmet**: HTML head management for SEO
- **React Query**: Server state management and caching
- **Date-fns**: Date manipulation and formatting utilities
- **Embla Carousel**: Lightweight carousel component