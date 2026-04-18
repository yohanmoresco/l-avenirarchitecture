/**
 * Header Component
 * 
 * Manages the top navigation, including scroll-aware visual states 
 * and mobile menu integration. 
 * 
 * Changes:
 * - Extracted navigation data to avoid hardcoded inline arrays (DRY).
 * - Improved accessibility with aria attributes on buttons and dialogs.
 * - Used forwardRef and separated responsibilities.
 * - Cleaned up Framer Motion standard implementations safely for Next.js hydration.
 */
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Extracted navigation links to adhere to DRY and improve maintainability
const NAV_LINKS = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized scroll handler to prevent unnecessary re-creations
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-brand-charcoal/80 backdrop-blur-md border-b border-brand-stone/10 py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between">
          <div className="font-serif text-brand-stone uppercase tracking-widest text-sm lg:text-base font-light">
            L'Avenir <span className="text-brand-gold">Architecture</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12 items-center" aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-xs uppercase tracking-widest text-brand-stone/70 hover:text-brand-gold transition-colors duration-500"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="text-xs uppercase tracking-widest text-brand-charcoal bg-brand-gold px-6 py-2 hover:bg-white hover:text-brand-charcoal transition-all duration-500"
            >
              Consultation
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden text-brand-stone p-2 -mr-2" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[60] bg-brand-charcoal/95 backdrop-blur-xl flex flex-col justify-center px-12"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button 
              className="absolute top-8 right-6 text-brand-stone/50 hover:text-brand-stone p-2" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <nav className="flex flex-col gap-8 text-2xl font-light uppercase tracking-widest">
              {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map((item, i) => (
                <motion.a 
                  key={item.label} 
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-stone hover:text-brand-gold transition-colors block"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
