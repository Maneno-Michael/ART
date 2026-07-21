'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function DonateHero() {
  return (
    <section
      className="relative min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden"
      aria-label="Donate page hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AppImage
          src="/assets/images/donate.jpg"
          alt="Donate page hero — authentic community imagery showing farmers, women leaders, youth engagement and agroecological activities in grassroots settings with dim atmospheric natural lighting and deep shadows"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Noise overlay */}
      <div
        className="fixed inset-0 bg-noise opacity-60 pointer-events-none z-[60] mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-5 sm:mb-6 lg:mb-8 animate-fade-up">
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot shrink-0"
            aria-hidden="true"
          />
          <span className="text-[10px] sm:text-xs section-label text-white/80">
            Support Community Action
          </span>
        </div>

        <h1
          className="font-display text-hero-lg sm:text-4xl md:text-5xl lg:text-hero-lg text-white mb-4 sm:mb-5 lg:mb-6 leading-tight animate-fade-up"
          style={{ animationDelay: '100ms' }}
        >
          Support Community-Led Solutions{' '}
          <span className="italic text-accent">Across Africa</span>
        </h1>

        <p
          className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto animate-fade-up px-2 sm:px-0"
          style={{ animationDelay: '200ms' }}
        >
          Your contribution helps communities strengthen sustainable food systems, support women and youth leadership, preserve indigenous knowledge, and expand locally led resilience initiatives.
        </p>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-auto max-h-[30px] sm:max-h-[45px] lg:max-h-[60px]"
        >
          <path
            fill="#F5F0E8"
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}