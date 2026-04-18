/**
 * Main Index Page
 * 
 * Assembles the full page layout using semantic container tags.
 * Preserves the exact section flow and behavior as mandated by the requirements.
 * 
 * Changes:
 * - Imported explicit component names correctly.
 * - Maintained the `main` tag acting as the core landmark wrapper.
 * - Follows KISS & DRY by separating concerns directly into sections.
 */
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Primary content area */}
      <main className="w-full flex min-h-screen flex-col bg-brand-charcoal overflow-x-hidden">
        <HeroSection />
        <ManifestoSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
