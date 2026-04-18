/**
 * TestimonialsSection Component
 * 
 * Renders an animated carousel of client experiences in a minimalist format.
 * 
 * Changes:
 * - Moved data to constant variable.
 * - Centralized accessibility (aria-live region for dynamic text updates).
 * - Guaranteed button elements are accessible using semantic attributes.
 * - Enforced standardized easing transitions for framer motion.
 */
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealSection } from '../motion/RevealSection';

// Extracted Testimony Data (DRY)
const TESTIMONIALS = [
  {
    id: 1,
    quote: "The spatial understanding of the L'Avenir team exceeded all expectations. They didn't just deliver a residence, but a legacy of peace for our family.",
    client: "Executive Director",
    location: "Horizon House",
  },
  {
    id: 2,
    quote: "The balance between glass, concrete, and sustainability transformed our global headquarters. It is visibly premium, with no need for excess.",
    client: "Institutional Investor",
    location: "Ciel Tower",
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section 
      id="expertise" 
      className="py-40 px-6 lg:px-16 bg-brand-charcoal border-y border-brand-stone/10"
      aria-label="Client experiences"
    >
      <div className="max-w-[1000px] mx-auto relative flex flex-col justify-center items-center text-center">
        
        <RevealSection className="mb-20">
          <h2 className="label-text text-brand-gold tracking-widest uppercase">Perception of Value</h2>
        </RevealSection>

        {/* Testimonial Active Display with ARIA Live region */}
        <RevealSection className="w-full relative min-h-[300px] md:min-h-[250px]">
          <div aria-live="polite" aria-atomic="true" className="w-full h-full">
            <AnimatePresence mode="wait">
              <motion.figure
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0 flex flex-col justify-center items-center m-0"
              >
                <blockquote className="text-2xl md:text-4xl text-brand-stone font-light leading-relaxed tracking-widest lowercase italic mb-12">
                  &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                </blockquote>
                
                <figcaption className="flex flex-col items-center">
                  <span className="text-brand-stone/90 uppercase tracking-widest text-xs font-normal mb-2">
                    {TESTIMONIALS[currentIndex].client}
                  </span>
                  <span className="text-brand-gold uppercase tracking-widest text-[0.65rem]">
                    {TESTIMONIALS[currentIndex].location}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </RevealSection>

        {/* Minimalist Carousel Controls */}
        <RevealSection delay={0.2} className="flex gap-4 mt-16 z-10 relative">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="group py-2 px-2 focus:outline-none"
              aria-label={`View testimonial ${i + 1}`}
              aria-pressed={i === currentIndex}
            >
              <span 
                className={`block h-[1px] w-12 transition-all duration-700 ease-out ${
                  i === currentIndex 
                    ? 'bg-brand-gold w-24' 
                    : 'bg-brand-stone/20 group-hover:bg-brand-stone/50'
                }`} 
                aria-hidden="true" 
              />
            </button>
          ))}
        </RevealSection>

      </div>
    </section>
  );
};
