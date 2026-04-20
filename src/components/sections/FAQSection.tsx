/**
 * FAQSection Component
 * 
 * Displays Frequently Asked Questions using an elegant editorial scroll structure
 * rather than standard accordions, emphasizing transparency and reading rhythm.
 * 
 * Changes:
 * - Migrated configuration array into the component or standalone module pattern.
 * - Added correct heading semantics (`h3` inside `h2` structure).
 * - Restructured to ensure valid layout and spacing constraints.
 */
"use client";

import React from 'react';
import { RevealSection } from '../motion/RevealSection';

// FAQ configuration data adhering to DRY
const FAQ_ITEMS = [
  {
    q: "What is the maturation time of a L'Avenir project?",
    a: "Each work is treated as a lifelong manifesto. Interior projects take 3 to 5 months of study and material curation before execution. The initial phase is purely laboratorial and architectural."
  },
  {
    q: "Do you provide global on-site consulting?",
    a: "Yes. Most of our premium executions feature *on-site* curation, dispatching part of the team to EU and US metropolises for direct approval from local suppliers."
  },
  {
    q: "Does sustainability compromise delivery speed?",
    a: "It is the fabric of the work. Using non-predatory techniques requires more curation, but our network of certified partners guarantees the strictest global execution SLAs."
  },
  {
    q: "Do you oversee construction management and furniture purchasing?",
    a: "A house where the framework and the furniture do not converse does not achieve *Quiet Luxury*. We define and bid on every nail, baseboard, and luminaire. We deliver the key ready to live and inherit."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section 
      id="faq" 
      className="py-40 px-6 lg:px-16 bg-brand-charcoal border-b border-brand-stone/10"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Sticky Lateral Block for Titles */}
        <RevealSection className="lg:col-span-4 lg:sticky lg:top-40">
          <span className="label-text border-l border-brand-blue pl-4 text-brand-blue">Frequently Asked Questions</span>
          <h2 id="faq-heading" className="text-3xl md:text-5xl mt-6 lg:text-6xl text-brand-stone font-light leading-[1.1] tracking-widest uppercase mb-12">
            Objections &<br />
            Processes
          </h2>
          <p className="text-sm font-light text-brand-stone/50 max-w-sm">
            We understand that premium architecture generates questions in its perennial execution. We detail our operation to align transparency, control, and sophistication in every brick.
          </p>
        </RevealSection>

        {/* Minimalist Question blocks flowing as paragraphs */}
        {/* Empty column used as visual spacer */}
        <div className="lg:col-span-1 hidden lg:block" aria-hidden="true" />
        
        <div className="lg:col-span-7 flex flex-col">
          {FAQ_ITEMS.map((item, idx) => (
            <RevealSection 
              key={item.q} 
              delay={0.1 * idx} 
              className="border-t border-brand-stone/10 py-16 group hover:bg-brand-charcoal/50 transition-colors duration-700"
            >
              <h3 className="text-xl md:text-2xl text-brand-stone font-light tracking-widest mb-8 pr-12 group-hover:text-brand-blue transition-colors duration-700">
                {item.q}
              </h3>
              <p className="text-base text-brand-stone/70 font-light leading-relaxed max-w-2xl">
                {/* Renders simple markdown logic using strict matching */}
                {item.a.split('*').map((chunk, i) => i % 2 !== 0 ? <i key={i}>{chunk}</i> : chunk)}
              </p>
            </RevealSection>
          ))}
          <div className="border-t border-brand-stone/10 w-full" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
};
