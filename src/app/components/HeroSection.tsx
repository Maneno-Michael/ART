'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mx = (clientX / w - 0.5) * 2;
      const my = (clientY / h - 0.5) * 2;

      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${mx * 30}px, ${my * 20}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${mx * -20}px, ${my * -15}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Hero section">
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-60 pointer-events-none z-[60] mix-blend-multiply" aria-hidden="true" />

      {/* Atmospheric depth blobs — background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          ref={blobRef1}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] blob-primary opacity-20 transition-transform duration-700 ease-out" />
        
        <div
          ref={blobRef2}
          className="absolute bottom-[-5%] right-[-8%] w-[600px] h-[600px] blob-accent opacity-15 transition-transform duration-700 ease-out" />
        
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] blob-secondary opacity-10 animate-float" />
      </div>

      {/* Hero image — midground layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AppImage
          src="/assets/images/comm.jpg"
          alt="Smallholder farmers working on agroecological farm in Kenya — women and youth participating in community farming activities"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
        {/* Gradient scrim — dark enough for white text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Content layer — foreground */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 sm:pt-36 sm:pb-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8 animate-fade-up"
            style={{ animationDelay: '0ms' }}>
            
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
            <span className="section-label text-white/80">Nurturing Communities. Transforming Lives</span>
          </div>

          {/* H1 */}
          <h1
  className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-6 animate-fade-up"
  style={{ animationDelay: '100ms' }}>
            
            Advancing Agroecology{' '}
            <span className="italic text-accent relative inline-block">
              and Community
              <svg
                className="absolute w-full h-2 -bottom-1 left-0 text-accent/60"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden="true">
                
                <path d="M0 8 Q 50 12 100 8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>{' '}
            Resilience Across Africa
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/80 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mb-10 animate-fade-up"
            style={{ animationDelay: '200ms' }}>
            
            African Roots Transformation (ART) works alongside smallholder farmers, women, and young people to strengthen food systems, restore soil health, protect indigenous knowledge, and build climate-resilient communities through locally led solutions rooted in dignity, equity, and sustainability.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '300ms' }}>
            
            <Link
              href="/get-involved"
              className="btn-shimmer inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all shadow-xl focus-ring">
              
              Partner With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 backdrop-blur-sm transition-all focus-ring">
              
              Our Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Wave SVG bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10" aria-hidden="true">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          
          <path
            fill="#F5F0E8"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          
        </svg>
      </div>
    </section>);

}