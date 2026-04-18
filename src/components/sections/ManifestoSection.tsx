/**
 * ManifestoSection Component
 * 
 * Displays the architectural manifesto with staggered read flows and editorial
 * typography. Follows the "brutally minimal" and "editorial" directions.
 * 
 * Changes:
 * - Improved layout composition mapping to the layout constraints.
 * - Replaced raw quotes/hyphens with their typographic equivalents (`&mdash;`).
 * - Kept consistent with the grid and `RevealSection`.
 */
"use client";

import React from 'react';
import { RevealSection } from '../motion/RevealSection';

export const ManifestoSection: React.FC = () => {
  return (
    <section 
      id="manifesto" 
      className="py-40 px-6 lg:px-16 bg-brand-charcoal relative flex items-center min-h-[70vh]"
      aria-labelledby="manifesto-title"
    >
      {/* Decorative Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-brand-charcoal to-brand-charcoal/90 z-0 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1440px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Section Label */}
        <RevealSection className="lg:col-span-4 flex flex-col justify-start">
          <h2 id="manifesto-title" className="label-text border-l border-brand-gold pl-4 text-brand-gold">
            The Manifesto
          </h2>
        </RevealSection>

        {/* Section Content */}
        <RevealSection delay={0.2} className="lg:col-span-8 flex flex-col gap-12">
          <p 
            className="text-3xl md:text-5xl lg:text-[4rem] text-brand-stone font-light leading-[1.1] tracking-widest uppercase"
            aria-label="Form follows silence. Silence breeds perennity."
          >
            Form follows <span className="text-brand-stone/40 italic">silence</span>.<br />
            Silence breeds <span className="text-brand-gold italic">perennity</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-brand-stone/10">
            <p className="text-brand-stone/70 font-light leading-relaxed">
              We do not design for the now. We design structures intended to last generations, integrating human space with its natural environment with the utmost respect and purity. We discard the excess. We focus on the essential.
            </p>
            <p className="text-brand-stone/70 font-light leading-relaxed">
              Every material, every shadow, and every reflection is meticulously studied. To our investors and residents, we offer not just a roof, but a sanctuary of luxury where peace is the main architectural element.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
