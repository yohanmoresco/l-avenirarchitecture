# L'Avenir Architecture

A premium, high-end landing page for an international architecture and interior design firm. The project embodies the concept of "Quiet Luxury" through a minimalist aesthetic, cinematic animations, and a strict monochromatic color palette (Charcoal, Stone, and Gold).

## ❖ Vision & Aesthetic
"Form follows silence. Silence breeds perennity."
The interface reflects the architectural philosophy of the firm—stripping away the unnecessary to focus on essential geometry, typography, and motion. 

### Key Features
- **Cinematic Motion Design:** Powered by Framer Motion. Uses staggered reveals, mask effects, and bezier-curve easing for seamless transitions.
- **Asymmetrical Masonry Portfolio:** A dynamic, interactive gallery grid showcasing selected projects with "Show More" expansion capabilities.
- **Smooth Navigation:** Internal anchor links with smooth scrolling and dynamic sticky header behaviors.
- **Fully Responsive:** Meticulously crafted for mobile, tablet, and ultra-wide desktop experiences (1440px grid).
- **Accessibility Aware:** Includes `useReducedMotion` hooks for users who prefer minimal animations.

## ❖ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://reactjs.org/) 
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## ❖ Getting Started

### Prerequisites
Make sure you have Node.js (v18.x or later) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
```bash
cd "L'Avenir Architecture"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```text
http://localhost:3000
```

## ❖ Project Structure

```text
src/
├── app/               # Next.js App Router layout and globals
├── components/
│   ├── layout/        # Header, Footer
│   ├── motion/        # Reusable Framer Motion wrappers (RevealSection)
│   ├── sections/      # Hero, Manifesto, Portfolio, Expertise, FAQ, Contact
│   └── ui/            # Buttons, Inputs
├── styles/            # Animation variants and configurations
└── ...
public/
└── assets/            # Curated high-resolution architectural imagery
```

## ❖ Design System
- **Backgrounds:** `brand-charcoal` (#121212)
- **Typography:** `brand-stone` (#F5F5F5) - Poppins (300, 400, 500)
- **Accents:** `brand-gold` (#C5A059)
- **Textures:** Custom SVG noise overlay for an editorial/magazine feel.

---
*Developed with focus on perennity, performance, and visual excellence.*
