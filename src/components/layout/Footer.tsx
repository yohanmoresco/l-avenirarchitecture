/**
 * Footer Component
 * 
 * Provides the site footer displaying brand information, office locations, 
 * and social links. Uses the RevealSection standard for scroll entry animations.
 * 
 * Changes:
 * - Extracted configuration arrays to remove inline hardcoding.
 * - Standardized semantic HTML landmarks.
 * - Improved accessibility tags for screen readers (aria-labels for external links).
 */
"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RevealSection } from '../motion/RevealSection';

// Data extraction to adhere to clean code principles
const CONTACT_INFO = [
  { city: 'São Paulo, BR', phone: '+55 11 90000-0000' },
  { city: 'Paris, FR', phone: '+33 1 00 00 00 00' }
];

const SOCIAL_LINKS = [
  { platform: 'Instagram', url: '#' },
  { platform: 'Pinterest', url: '#' },
  { platform: 'LinkedIn', url: '#' }
];

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal pt-32 pb-12 px-6 lg:px-16 border-t border-brand-stone/10">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            
            {/* Brand Information */}
            <div className="md:col-span-2">
              <div className="font-serif text-2xl text-brand-stone uppercase tracking-widest font-light mb-6">
                L'Avenir <br />
                <span className="text-brand-gold">Architecture</span>
              </div>
              <p className="text-sm text-brand-stone/50 font-light max-w-sm leading-relaxed">
                Transforming the global architectural landscape through essential minimalism and refined sustainability.
              </p>
            </div>
            
            {/* Offices List */}
            <div className="flex flex-col gap-4">
              <span className="label-text mb-4 text-brand-stone/40">Offices</span>
              {CONTACT_INFO.map((office) => (
                <address key={office.city} className="not-italic text-sm text-brand-stone/70 font-light mb-2">
                  {office.city}<br />
                  <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`} className="hover:text-brand-gold transition-colors">
                    {office.phone}
                  </a>
                </address>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <span className="label-text mb-4 text-brand-stone/40">Social</span>
              <nav aria-label="Social media links" className="flex flex-col gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.platform} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-stone/70 font-light hover:text-brand-gold transition-colors flex items-center w-fit gap-1 group"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {social.platform} 
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 -translate-y-2 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" 
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </RevealSection>

        {/* Footer Bottom Elements */}
        <RevealSection 
          delay={0.2} 
          className="border-t border-brand-stone/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-stone/40 uppercase tracking-widest gap-4"
        >
          <p>© {CURRENT_YEAR} L'Avenir Architecture. All rights reserved.</p>
          <p>
            Developed by 
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-stone hover:text-brand-gold transition-colors ml-1 focus-visible:outline-brand-gold"
            >
              Movy
            </a>
          </p>
        </RevealSection>
      </div>
    </footer>
  );
};
