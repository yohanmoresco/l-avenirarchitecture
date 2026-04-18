/**
 * HeroSection Component
 * 
 * The main landing section of the website. Uses high-end motion and layered gradients
 * to establish the "luxury" and "silence" visual identity requested in the design skill.
 * 
 * Changes:
 * - Added semantics (proper landmark tags).
 * - Implemented accessibility for the CTA button.
 * - Centralized text elements to reduce inline classes while maintaining visual identity.
 * - Adjusted transition configurations for smoother luxury feel.
 * - Removed native priority attribute matching strict HTML types.
 */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, maskReveal } from '../../styles/motion';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <motion.section 
      initial="hidden" 
      animate="visible" 
      exit="exit"
      className="relative w-full h-screen min-h-[800px] flex items-end pb-32 px-6 lg:px-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Media with Parallax/Load Animation */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-brand-charcoal absolute -z-20" />
        {/* Placeholder image representation */}
        <img 
          src="/assets/hero.jpg" 
          alt="L'Avenir Architecture Project Showcase" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        variants={staggerContainer} 
        className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end"
      >
        <div className="lg:col-span-8 overflow-hidden">
          <motion.h1 
            variants={maskReveal} 
            className="text-5xl md:text-6xl lg:text-[5.5rem] text-brand-stone font-light leading-tight"
          >
            Exclusivity<br />in every detail.
          </motion.h1>
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-8">
          <motion.p 
            variants={maskReveal} 
            className="text-sm md:text-base text-brand-stone/80 font-normal leading-relaxed"
          >
            Luxury residential projects and minimalist interior design. Sustainability and precision at the highest standard.
          </motion.p>
          <motion.div variants={maskReveal}>
            <Button 
              variant="primary" 
              fullWidth 
              className="max-w-[320px]" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Navigate to contact section to schedule consultation"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
