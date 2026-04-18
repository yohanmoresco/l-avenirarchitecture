/**
 * Root Layout
 * 
 * Sets the fundamental HTML document structure, language, font optimization,
 * and base metadata for SEO.
 * 
 * Changes:
 * - Kept strictly as a server component.
 * - Added a meaningful `display: 'swap'` optimization for the Google font.
 * - Kept it simple and declarative.
 */
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// Font configuration
const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Structural and SEO Metadata
export const metadata: Metadata = {
  title: "L'Avenir Architecture | High-End & Minimalism",
  description: "Architecture firm specialized in luxury residential projects and minimalist interior design, focusing on exclusivity and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
