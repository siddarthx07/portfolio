# Siddarth Bandi – Portfolio

Immersive, animation-led portfolio showcasing scalable full-stack systems and AI-driven experiences.

## Quick Start

- `npm install` – install dependencies.  
- `npm run dev` – launch Next.js dev server on http://localhost:3000.  
- `npm run build && npm start` – production bundle & preview.  
- `npm run lint` – static analysis with ESLint and Next rules.

## Core Frontend Stack

- **Framework**: Next.js 16 (App Router) with React Server Components for hybrid rendering.
- **Language**: TypeScript for explicit component contracts while orchestrating animation libraries.
- **Styling**: Tailwind CSS v4 + CSS variables for theming, paired with Space Grotesk headings and Geist body.
- **Motion Layer**: Framer Motion (micro-interactions), GSAP + ScrollTrigger (story beats), Lenis (smooth scroll).
- **3D Layer**: `@splinetool/react-spline` for exported hero scenes, `@react-three/fiber` + `drei` reserved for bespoke visual modules.
- **State & Tooling**: Lightweight client state via Zustand/Jotai when animation sync is required; ESLint + TypeScript for quality gates.

## 3D & Visual Libraries

| Feature | Tool | Why use it |
| --- | --- | --- |
| 3D scenes | Spline 3D | Export interactive canvases straight into React/Next embeds. |
| Low-level 3D | Three.js | Fine-grained control over particles, lighting, and physics. |
| Model rendering in React | @react-three/fiber + drei | Declarative 3D scene graph that plays nicely with React. |
| Animated backgrounds | Vanta.js | Lightweight preset 3D backgrounds for supporting sections. |
| Particle systems | tsparticles / Particles.js | Purpose-built hero particles or logo reveals. |

## Scroll & Motion Libraries

| Type | Library | Use case |
| --- | --- | --- |
| Timeline-based animation | GSAP (GreenSock) | Scroll orchestration, parallax, morphing sequences. |
| Scroll interactions | Lenis / Locomotive Scroll | Smooth inertia and scroll-linked variables. |
| Motion in React | Framer Motion | Component-level transitions, hovers, and staggers. |
| 3D scroll storytelling | GSAP ScrollTrigger | Scroll-driven stage transitions coordinating with 3D. |

## Styling & Design

| Tool | Why it is used |
| --- | --- |
| Tailwind CSS | Utility-first iteration across breakpoints and themes. |
| ShadCN UI / Radix UI | Accessible, polished primitives for overlays and navigation. |
| CSS Variables + Lenis | Theme tokens that respond to scroll velocity and section focus. |

## Hero Integration (Current State)

- Spline hero scene embedded via `@splinetool/react-spline/next`.
- Gradient overlays, uppercase typographic system, and conic-accent marker inspired by the provided mood board.
- Dark, cinematic palette with drop shadows that echo the Spline lighting.
- **Mobile-responsive design** with optimized performance and user experience across devices.

### Mobile View Implementation

- **Responsive Navigation**: Desktop navigation bar transforms into a hamburger menu on mobile devices with smooth animations and backdrop blur effects.
- **Performance Optimization**: Spline 3D scene is hidden on mobile (`hidden md:block`) to improve loading times and performance on smaller devices.
- **Mobile-Specific Content**: Dedicated mobile hero section with optimized typography and spacing for smaller screens.
- **Adaptive Backgrounds**: Gradient background for mobile devices while maintaining the 3D scene on desktop.
- **Responsive Typography**: Scaled text sizes and tracking optimized for mobile readability (`text-4xl` on mobile vs larger on desktop).
- **Touch-Friendly Interface**: Mobile menu items with appropriate tap targets and hover states adapted for touch interactions.

Upcoming steps will expand the landing flow into narrative sections (about, case studies, tech stack) with coordinated scroll and motion cues.
