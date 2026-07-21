'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const slides = [
  { src: '/assets/images/slide1.jpeg', alt: 'Farmer harvesting maize from an agroecological farm' },
  { src: '/assets/images/slide2.jpeg', alt: 'Community member harvesting fresh vegetables' },
  { src: '/assets/images/slide3.jpeg', alt: 'Women farmers working together on a hillside farm plot' },
  { src: '/assets/images/slide4.jpeg', alt: 'Farmer inspecting healthy crop growth in the field' },
];

const SLIDE_DURATION = 5000;

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Hero section">

      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-60 pointer-events-none z-[60] mix-blend-multiply" aria-hidden="true" />

      {/* Atmospheric depth blobs — background layer (hidden on mobile to reduce clutter/perf cost) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block" aria-hidden="true">
        <div
          ref={blobRef1}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] blob-primary opacity-20 transition-transform duration-700 ease-out" />

        <div
          ref={blobRef2}
          className="absolute bottom-[-5%] right-[-8%] w-[600px] h-[600px] blob-accent opacity-15 transition-transform duration-700 ease-out" />

        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] blob-secondary opacity-10 animate-float" />
      </div>

      {/* Hero image carousel — midground layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {slides?.map((slide, index) => (
          <div
            key={slide?.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === activeSlide ? 1 : 0 }}
          >
            <AppImage
              src={slide?.src}
              alt={slide?.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Gradient scrim — stronger + full-height on mobile for text legibility over busy photos */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40 sm:from-black/40 sm:via-black/45 sm:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 sm:from-black/60 sm:via-transparent sm:to-black/20" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-28 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides?.map((slide, index) => (
          <button
            key={slide?.src}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 focus-ring ${
              index === activeSlide ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content layer — foreground */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-24 pb-16 sm:pt-36 sm:pb-28 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-5 sm:mb-8 animate-fade-up"
            style={{ animationDelay: '0ms' }}>

            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-white/90">
              Nurturing Communities. Transforming Lives
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-semibold text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl sm:leading-tight tracking-tight text-white mb-5 sm:mb-6 animate-fade-up [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]"
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
            className="text-white/90 text-sm sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 animate-fade-up [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: '200ms' }}>

            African Roots Transformation (ART) works alongside smallholder farmers, women, and young people to strengthen food systems, restore soil health, protect indigenous knowledge, and build climate-resilient communities through locally led solutions rooted in dignity, equity, and sustainability.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '300ms' }}>

            <Link
              href="/get-involved"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all shadow-xl focus-ring w-full sm:w-auto">

              Partner With Us
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/programs-overview"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 backdrop-blur-sm transition-all focus-ring w-full sm:w-auto">

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