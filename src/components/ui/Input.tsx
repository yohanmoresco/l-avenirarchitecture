/**
 * Input Component
 * 
 * A reusable, floating-label input field designed for luxury frontend flows.
 * 
 * Changes:
 * - Implemented forwardRef for form library compatibility (e.g., React Hook Form).
 * - Enhanced accessibility through proper aria attributes and ID constraints.
 * - Consolidated standard formatting.
 */
import React, { InputHTMLAttributes, forwardRef, useId } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Optional container class name for overriding layout behavior */
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', containerClassName = '', placeholder, id, ...props }, ref) => {
    // Generate a secure, unique ID for accessibility if none is provided
    const defaultId = useId();
    const inputId = id || defaultId;

    return (
      <div className={`relative w-full mb-8 group ${containerClassName}`.trim()}>
        <input
          ref={ref}
          id={inputId}
          className={`peer w-full bg-transparent border-b border-brand-stone/30 py-4 text-brand-stone font-light text-base focus:outline-none focus:ring-0 focus:border-brand-blue transition-colors duration-500 placeholder-transparent ${className}`.trim()}
          placeholder={placeholder || ' '}
          // Maintain compatibility with autofill and required flags
          {...props}
        />
        
        {/* Floating Label interacting with peer state */}
        <label 
          htmlFor={inputId}
          className="absolute left-0 top-4 text-brand-stone/50 text-sm font-light uppercase tracking-widest transition-all duration-500 peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-brand-blue peer-valid:-top-4 peer-valid:text-[0.65rem] cursor-text pointer-events-none"
        >
          {placeholder}
        </label>
        
        {/* Focus indicator strictly for visual accessibility */}
        <span 
          className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue origin-left transform scale-x-0 transition-transform duration-500 peer-focus-visible:scale-x-100" 
          aria-hidden="true" 
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
