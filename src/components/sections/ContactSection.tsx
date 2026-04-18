/**
 * ContactSection Component
 * 
 * Renders the primary consultation form. Follows the "luxury" visual direction 
 * by utilizing minimalist input fields and ample whitespace.
 * 
 * Changes:
 * - Fixed the nesting structure: HTML `form` and `textarea` are now properly integrated.
 * - Added `id` elements and explicit accessible `<label>` correlations.
 * - The textarea now mimics the standard Input behavior using the same classes 
 *   but structured cleanly to avoid replication limits.
 */
"use client";

import React, { useId } from 'react';
import { RevealSection } from '../motion/RevealSection';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const visionId = useId();

  return (
    <section 
      id="contact" 
      className="py-32 px-6 lg:px-16 bg-brand-charcoal relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Column: Heading & Context */}
        <RevealSection>
          <div className="space-y-8">
            <span className="label-text">Direct Contact</span>
            <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl text-brand-gold">
              Start a<br />Conversation
            </h2>
            <p className="text-brand-stone/70 font-light max-w-md leading-relaxed">
              Exclusive consulting for investors and owners. Let us know what is the vision for your next estate.
            </p>
          </div>
        </RevealSection>

        {/* Right Column: Interactive Form */}
        <RevealSection delay={0.2} className="bg-brand-charcoal/50 p-8 lg:p-12 border border-brand-stone/10">
          {/* Note: onSubmit is mocked to prevent page reload, replace with actual logic */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <Input 
              type="text" 
              placeholder="Full Name" 
              required 
              aria-required="true"
            />
            <Input 
              type="email" 
              placeholder="Corporate E-mail" 
              required 
              aria-required="true"
            />
            <Input 
              type="text" 
              placeholder="Project Type (e.g. Residential, Corporate)" 
              required 
              aria-required="true"
            />
            
            {/* Custom Textarea matching the Input visual system */}
            <div className="relative w-full mb-8 group">
              <textarea 
                id={visionId}
                className="peer w-full bg-transparent border-b border-brand-stone/30 py-4 text-brand-stone font-light text-base focus:outline-none focus:border-brand-gold transition-colors duration-500 placeholder-transparent resize-none min-h-[100px]"
                placeholder="Vision details"
                required
                aria-required="true"
              />
              <label 
                htmlFor={visionId}
                className="absolute left-0 top-4 text-brand-stone/50 text-sm font-light uppercase tracking-widest transition-all duration-500 peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-brand-gold peer-valid:-top-4 peer-valid:text-[0.65rem] pointer-events-none"
              >
                Vision details
              </label>
              {/* Focus indicator strictly for visual accessibility */}
              <span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold origin-left transform scale-x-0 transition-transform duration-500 peer-focus-visible:scale-x-100" 
                aria-hidden="true" 
              />
            </div>

            <Button variant="primary" type="submit" fullWidth className="mt-4">
              Request Contact
            </Button>
          </form>
        </RevealSection>

      </div>
    </section>
  );
};
