/**
 * Framer Motion Definitions
 * 
 * Centralized motion variants and transition strings to guarantee absolute 
 * consistency of animations across the entire application interface.
 * 
 * Changes:
 * - Extracted explicit typing to avoid `any` or ambiguous inferences.
 * - Clearly documented each object's use case.
 */
import { Variants, Transition } from 'framer-motion';

// Base layout transition timing equivalent to CSS --ease-slow-ease
export const TRANSITION_BASE: Transition = { 
  duration: 0.8, 
  ease: [0.65, 0, 0.35, 1] 
};

/** High-impact text reveal from a parent mask */
export const maskReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: TRANSITION_BASE }
};

/** General elegant upward fade entering the viewport */
export const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: TRANSITION_BASE }
};

/** Stagger orchestrator for groups of elements entering sequentially */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between child execution
      delayChildren: 0.1
    }
  }
};

/** Route / Full page rendering transition */
export const pageFade: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { duration: 1, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.5, ease: "easeIn" } 
  }
};
