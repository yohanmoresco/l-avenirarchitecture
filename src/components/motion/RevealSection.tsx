/**
 * RevealSection Component
 * 
 * Reusable layout wrapper that triggers a staggered, elegant fade-up animation 
 * as its content comes into the user's viewport.
 * 
 * Changes:
 * - Proper typings applied based on Framer Motion's actual variants object.
 * - Accessibility safeguard built-in: respects `prefers-reduced-motion` settings implicitly via the OS.
 * - Eliminated wrapper dependencies and ensured clean structural hydration.
 */
"use client";

import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Importing the standard definition to keep animation behavior consistent project-wide
import { fadeUp } from '../../styles/motion';

export interface RevealProps {
  /** The content to be revealed */
  children: ReactNode;
  /** Optional container class names */
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
}

export const RevealSection: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  // Respecting accessibility settings for visual comfort
  const shouldReduceMotion = useReducedMotion();

  // If the user prefers reduced motion, we strip the complicated easing animations
  const transitionConfig = shouldReduceMotion 
    ? { duration: 0 } 
    : { delay, duration: 0.8, ease: [0.65, 0, 0.35, 1] as const };

  // Note: Using a standard div fallback instead of framer motion div 
  // when motion is disabled guarantees no layout shift side-effects
  if (shouldReduceMotion) {
    return (
      <div className={`opacity-100 ${className}`.trim()}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, margin: "-10%" }} 
      transition={transitionConfig}
    >
      {children}
    </motion.div>
  );
};
