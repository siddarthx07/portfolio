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
- **Animations**: GSAP 3.13.0 for scroll-triggered animations and transitions
- **Motion**: Motion library for smooth micro-interactions
- **3D Graphics**: Three.js 0.173.0 with Vanta.js for animated backgrounds
- **Icons**: Lucide React for consistent iconography
- **Forms**: EmailJS for contact form functionality

## Portfolio Features

### 🏠 Hero Section
- Interactive 3D background with Vanta.js cloud animations
- Performance optimized with auto-pause when scrolled away or tab hidden
- Responsive design with mobile-optimized layouts and reduced rendering quality
- Smooth scroll-triggered animations using GSAP

### 👨‍💻 About Section
- Personal introduction with animated timeline
- Skills showcase with interactive elements
- Professional background and expertise

### 💼 Experience Section
- Timeline-based work history display
- Animated skill tags and descriptions
- Responsive design for all screen sizes

### 🚀 Projects Section
- Showcase of featured projects with live demos
- Interactive project cards with hover effects
- Technology stack badges for each project

### 📧 Contact Section
- Functional contact form powered by EmailJS
- Social media links and professional profiles
- Animated form validation and submission feedback

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

- **Smart Animation Pausing**: Vanta.js automatically pauses when scrolled out of view using Intersection Observer
- **Tab Visibility Detection**: Animations pause when browser tab is hidden to save resources
- **Mobile-Specific Settings**: Reduced scale (0.7), slower speed (0.4), and lower render distance (12.0) on mobile devices
- **Adaptive Controls**: Mouse interactions disabled on mobile to reduce CPU/GPU overhead
- **Lazy Loading**: Three.js and Vanta.js dynamically imported only when needed
- **Accessibility First**: Respects prefers-reduced-motion to disable animations for users who need it

## Mobile-First Design

- **Responsive Navigation**: Hamburger menu with smooth animations and backdrop blur
- **Performance Optimized**: Conditional 3D rendering based on device capabilities
- **Touch-Friendly**: Optimized tap targets and gesture-based interactions
- **Adaptive Typography**: Scaled text and spacing for mobile readability
- **Progressive Enhancement**: Core functionality works across all devices

## Development & Deployment

- **Development**: Hot-reload development server with TypeScript support
- **Build**: Optimized production builds with Next.js static generation
- **Linting**: ESLint configuration with Next.js best practices
- **Styling**: Utility-first CSS with Tailwind's design system
