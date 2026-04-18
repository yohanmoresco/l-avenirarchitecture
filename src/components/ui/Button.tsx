/**
 * Button Component
 * 
 * A reusable, accessible button component that adheres to the established
 * brand guidelines and frontend-design constraints.
 * 
 * Changes:
 * - Removed React.FC in favor of standard function component with forwardRef for better composability.
 * - Added comprehensive prop interfaces.
 * - Improved class composition and safety.
 * - Added a displayName for React DevTools.
 */
"use client";

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual variant of the button */
  variant?: 'primary' | 'secondary';
  /** Whether the button should span the full width of its container */
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', fullWidth = false, children, className = '', ...props }, ref) => {
    // Defensive composition for structural classes
    const widthClass = fullWidth ? "w-full" : "inline-flex";
    
    // Abstracted variant definitions for consistency
    const variants = {
      primary: "btn-luxury border-brand-gold text-brand-gold",
      secondary: "btn-luxury border-brand-stone/30 text-brand-stone"
    };

    // Ensure the variant provided is valid, default to primary as fallback
    const appliedVariant = variants[variant] || variants.primary;

    return (
      <button 
        ref={ref}
        className={`${widthClass} ${appliedVariant} ${className}`.trim()} 
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
