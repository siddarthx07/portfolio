# Siddarth Bandi – Portfolio

Modern, interactive portfolio showcasing full-stack development expertise and AI-driven projects with immersive animations and responsive design.

## Quick Start

- `npm install` – install dependencies  
- `npm run dev` – launch Next.js dev server on http://localhost:3000  
- `npm run build && npm start` – production bundle & preview  
- `npm run lint` – static analysis with ESLint

## Core Technology Stack

- **Framework**: Next.js 16.0.1 (App Router) with React 19.2.0
- **Language**: TypeScript for type-safe development
- **Styling**: Tailwind CSS v4 with responsive design system
- **Animations**: GSAP 3.13.0 for scroll-triggered animations and Motion 12.23.24 for micro-interactions
- **Icons**: Lucide React 0.552.0 for consistent iconography
- **Forms**: EmailJS 4.4.1 for serverless contact form functionality
- **UI Components**: Custom components with Aceternity UI integration

## Portfolio Features

### 🏠 Hero Section
- High-quality static background images optimized for mobile and desktop
- Gradient overlays for improved contrast and readability
- Typewriter effect for dynamic role description
- Responsive navigation with hamburger menu on mobile
- Smooth scroll indicator animation

### 👨‍💻 About Section
- Bento Grid layout with glassmorphism design
- Current status and location information
- Skills and interests showcase
- Education and career highlights

### 💼 Experience Section
- Vertical timeline with professional work history
- Tech stack pills with animation effects
- Company logos and role descriptions
- Links to company websites

### 🎯 Featured Project Section
- Enterprise ChatDoc highlighted with scroll-triggered animations
- Interactive code preview with scrolling effect
- Detailed feature breakdown with visual diagrams
- GSAP-powered parallax scrolling

### 🚀 Projects Section
- Horizontal scrolling gallery on desktop with smooth animations
- Vertical card stack on mobile for better UX
- Interactive project cards with hover effects and shadows
- Live demo and GitHub repository links
- Technology stack badges for each project

### 📧 Contact Section
- Functional contact form with EmailJS integration (environment variables configured)
- Form validation with error handling and loading states
- Social media links (LinkedIn, GitHub, Email)
- Professional availability status and resume download
- Success/error feedback with animations

## Featured Projects

### 🛒 Bookstore React Full Stack
E-commerce bookstore application with shopping cart functionality and order management.
- **Tech Stack**: React 18, TypeScript, Java (JAX-RS), MySQL
- **Features**: Category browsing, cart management, order confirmation
- **Links**: [Live Demo](https://bookstore-react-full-stack-production.up.railway.app/) | [GitHub](https://github.com/siddarthx07/bookstore-react-full-stack)

### 🤖 Enterprise ChatDoc
Secure enterprise document chatbot with role-based access control and AI content filtering.
- **Tech Stack**: Python, LangChain, RAG, OpenAI GPT-3.5, Streamlit, Firebase
- **Features**: Document querying, audit logging, RBAC security
- **Links**: [GitHub](https://github.com/siddarthx07/Secure-Enterprise-Document-Chatbot)

### 🛡️ FraudGuard AI
AI-powered fraud detection system for online transactions with real-time alerts.
- **Tech Stack**: React.js, Node.js, Express.js, MongoDB, JWT Auth, AWS
- **Features**: Predictive modeling, instant alerts, merchant analytics

### 📝 AI Cover Letter Assistant
Chrome extension that generates personalized cover letters and auto-fills job applications.
- **Tech Stack**: JavaScript, Gemini API, Chrome Extension MV3, DOM Manipulation
- **Features**: Resume parsing, personalized content generation, form automation
- **Links**: [GitHub](https://github.com/siddarthx07/ai-job-application-helper)

## Performance Optimizations

- **Static Backgrounds**: Replaced Vanta.js 3D animations with optimized static images for better performance
- **Lazy Loading**: All major sections (About, Experience, Projects, Contact) use React.lazy() and Suspense
- **Code Splitting**: Heavy components loaded on-demand to reduce initial bundle size
- **Image Optimization**: Responsive images with priority loading for above-the-fold content
- **Reduced Animation Speed**: Code scroll animations optimized to speed 15 for smoother performance
- **Dynamic Imports**: EmailJS loaded only when contact form is submitted
- **Accessibility First**: Respects prefers-reduced-motion and provides keyboard navigation

## Mobile-First Design

- **Responsive Navigation**: Hamburger menu with smooth animations and backdrop blur
- **Adaptive Layouts**: Desktop horizontal scrolling projects vs. mobile vertical stack
- **Touch-Friendly**: 44px minimum touch targets and optimized tap areas
- **Adaptive Typography**: Scaled text sizes and improved contrast for mobile readability
- **Safe Area Support**: Proper padding for notched devices (iOS)
- **Performance Optimized**: Separate mobile and desktop background images
- **Progressive Enhancement**: Core functionality works across all devices and screen sizes

## Development & Deployment

- **Development**: Hot-reload development server with TypeScript support and Fast Refresh
- **Build**: Optimized production builds with Next.js App Router and static generation
- **Linting**: ESLint 9 with Next.js best practices and type checking
- **Styling**: Tailwind CSS v4 with custom design tokens and utility classes
- **Environment Variables**: Secure configuration using `.env.local` for API keys

## Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout with fonts and metadata
│   │   ├── page.tsx      # Main homepage
│   │   └── globals.css   # Global styles and CSS variables
│   ├── components/
│   │   ├── sections/     # Main portfolio sections
│   │   └── ui/           # Reusable UI components (16 components)
│   ├── data/             # Configuration data (projects, contact)
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets (images, backgrounds)
└── Configuration files (package.json, tsconfig.json, etc.)
```

## Recent Updates

- ✅ Replaced Vanta.js 3D backgrounds with static images for better performance
- ✅ Implemented lazy loading for all major sections
- ✅ Added featured project section with scroll animations
- ✅ Improved contrast, spacing, and mobile UX
- ✅ Reduced code scroll animation speed for smoother experience
- ✅ Moved EmailJS keys to environment variables for security
- ✅ Updated project cards with enhanced shadows and glassmorphism effects
