"use client";

import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { RevealSection } from '../motion/RevealSection';
import { Button } from '../ui/Button';

const ALL_PROJECTS = [
  {
    id: 1, title: 'Casa Horizon', category: 'Residential / Canada', img: '/assets/proj-1.jpg',
    wrapperClass: 'md:col-span-8', aspectClass: 'aspect-video'
  },
  {
    id: 2, title: 'Delta Headquarters', category: 'Corporate / New York', img: '/assets/proj-2.jpg',
    wrapperClass: 'md:col-span-4 md:mt-2', aspectClass: 'aspect-[4/5]'
  },
  {
    id: 3, title: 'Blanc Residence', category: 'Interiors / Milan', img: '/assets/proj-3.jpg',
    wrapperClass: 'md:col-span-5 md:mt-6', aspectClass: 'aspect-square'
  },
  {
    id: 4, title: 'Oasis Lounge', category: 'Commercial / Tokyo', img: '/assets/proj-4.jpg',
    wrapperClass: 'md:col-span-6 md:col-start-7', aspectClass: 'aspect-[4/3]'
  },
  {
    id: 5, title: 'Zenith Gallery', category: 'Institutional / London', img: '/assets/proj-5.jpg',
    wrapperClass: 'md:col-span-12 md:mt-4', aspectClass: 'aspect-[21/9]'
  },
  {
    id: 6, title: 'Noir Penthouse', category: 'Interiors / Paris', img: '/assets/proj-6.jpg',
    wrapperClass: 'md:col-span-4 md:mt-2', aspectClass: 'aspect-[4/5]'
  },
  {
    id: 7, title: 'Glass Pavilion', category: 'Residential / Zurich', img: '/assets/proj-7.jpg',
    wrapperClass: 'md:col-span-8 md:mt-10', aspectClass: 'aspect-video'
  },
  {
    id: 8, title: 'Terracotta Villa', category: 'Residential / Lisbon', img: '/assets/proj-8.jpg',
    wrapperClass: 'md:col-span-12 md:mt-4', aspectClass: 'aspect-[16/9]'
  }
];

export const PortfolioSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  const hoverMotion = shouldReduceMotion ? {
    rest: { scale: 1, filter: "grayscale(0%)" },
    hover: { scale: 1, filter: "grayscale(0%)" }
  } : {
    rest: { scale: 1, filter: "grayscale(20%)" },
    hover: { scale: 1.03, filter: "grayscale(0%)" }
  };

  const displayedProjects = showAll ? ALL_PROJECTS : ALL_PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-32 px-6 lg:px-16 bg-brand-charcoal relative">
      <div className="absolute top-0 left-6 right-6 lg:left-16 lg:right-16 h-[1px] bg-brand-stone/10" />

      <div className="max-w-[1440px] mx-auto">
        <RevealSection>
          <header className="mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
            <h2 className="text-3xl md:text-5xl lg:text-5xl">Selected<br/>Projects</h2>
            <span className="label-text border-b border-brand-stone/20 pb-2">Collection 2024—2026</span>
          </header>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-6">
          
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <RevealSection key={project.id} className={project.wrapperClass} delay={idx > 3 ? (idx - 3) * 0.1 : 0}>
                <motion.article 
                  className="group cursor-pointer relative"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className={`overflow-hidden ${project.aspectClass} bg-brand-slate mb-6`}>
                    <motion.img 
                      src={project.img}
                      alt={project.title}
                      variants={hoverMotion}
                      transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                      className="w-full h-full bg-brand-slate object-cover origin-center"
                    />
                  </div>
                  <div className="flex justify-between items-baseline relative overflow-hidden">
                    <motion.h3 
                      variants={{
                        rest: { y: 0, color: "#F5F5F5" },
                        hover: { y: -2, color: "#C5A059" }
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-xl md:text-2xl"
                    >
                      {project.title}
                    </motion.h3>
                    <small className="text-brand-stone/50">{project.category}</small>
                  </div>
                </motion.article>
              </RevealSection>
            ))}
          </AnimatePresence>

        </div>

        <RevealSection className="mt-32 w-full flex justify-center border-t border-brand-stone/10 pt-16 relative">
          <AnimatePresence mode="wait">
            {!showAll && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <Button 
                  variant="secondary" 
                  onClick={() => setShowAll(true)}
                  aria-label="Load full collection"
                >
                  Reveal Full Collection
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </RevealSection>

      </div>
    </section>
  );
};
