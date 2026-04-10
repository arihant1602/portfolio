# Ghost in the Machine - Portfolio

A cybersecurity/AI-themed personal portfolio website with immersive 3D visuals.

## Features
- React 18 + Vite + TypeScript
- Three.js + React Three Fiber + React Three Drei for 3D Scenes
- GSAP + ScrollTrigger for Animations
- Tailwind CSS for Styling
- Responsive, Accessible, and Performance-Optimized

## Quick Start
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## Architecture
- **Agents Structure:** Modular codebase split into domain logic (UI, 3D, Shaders).
- **Performance:** Uses dynamic `performanceTier.ts` to adjust Three.js quality.
- **Accessibility:** Fully supports `prefers-reduced-motion` to replace complex 3D scenes with simplified UIs when necessary.

## Environment Variables
See \`.env.example\` for required API keys.
