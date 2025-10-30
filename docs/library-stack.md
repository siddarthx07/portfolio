# Siddarth Bandi – Portfolio Planning

## 3D & Visual Libraries

| Feature | Tool | Why use it |
| --- | --- | --- |
| 3D scenes | Spline 3D | Easiest path to interactive 3D without hand-coding; exports React/Webflow embeds directly. |
| Low-level 3D | Three.js | Full control over particles, lighting, and physics for bespoke visuals. |
| Model rendering in React | @react-three/fiber + drei | React-first abstraction over Three.js with declarative, component-based authoring. |
| Animated backgrounds | Vanta.js | Lightweight, mobile-friendly preset 3D effects like waves, rings, and birds. |
| Particle systems | tsparticles / Particle.js | Purpose-built for hero particle animations and animated logos. |

## Scroll & Motion Libraries

| Type | Library | Use case |
| --- | --- | --- |
| Timeline-based animation | GSAP (GreenSock) | Powerhouse for complex timelines, reveals, parallax, and morphing. |
| Scroll interactions | Locomotive Scroll / Lenis | Adds inertia, smooth scrolling, and scroll-linked effects. |
| Motion in React | Framer Motion | Component-level transitions such as fades, slides, and hovers. |
| 3D scroll storytelling | ScrollTrigger (GSAP plugin) | Drives scroll-based hero transitions and multi-section narratives. |

## Styling & Design

| Tool | Why it is used |
| --- | --- |
| Tailwind CSS | Utility-first approach for fast, responsive iteration. |
| ShadCN UI / Radix UI | Accessible, pre-styled primitives for nav, modals, and tooltips. |
| CSS variables + Lenis | Enables modern dark/light theming and scroll-driven color shifts. |

## Recommended Frontend Setup

- **Framework**: Next.js 14 with the App Router for hybrid rendering, route-based layouts, and built-in image optimization.
- **Language**: TypeScript to keep the component API surface explicit while juggling advanced animation libraries.
- **Styling**: Tailwind CSS with CSS variables to implement theming, augmented by ShadCN UI components where you need polished primitives.
- **Animation Stack**: Framer Motion for component transitions, GSAP + ScrollTrigger for timeline control, and Lenis to smooth scrolling interactions.
- **3D Layer**: @react-three/fiber and drei to integrate custom Three.js scenes, with Spline embeds for quick wins where interactive canvases are pre-built.
- **State & Data**: Lightweight global store (Zustand or Jotai) only where animation state must sync across sections; otherwise rely on React server components and props.
- **Tooling**: ESLint, Prettier, and Vite-style fast refresh via Next.js dev server for rapid iteration.

This stack balances creative freedom with developer velocity, keeps the door open for both code-first Three.js work and Spline-driven embeds, and offers a maintainable foundation for a modern, storytelling-heavy portfolio.
