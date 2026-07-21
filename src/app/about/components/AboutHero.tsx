'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="About page hero">

      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AppImage
          src="/assets/images/about.jpg"
          alt="ART team and community members — farmers and community members interacting, women and youth participation in field activities"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />

        {/* Stronger, more even coverage on mobile so centered text stays legible at every width */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/85 sm:bg-gradient-to-r sm:from-primary/85 sm:via-primary/70 sm:to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 sm:from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-60 pointer-events-none z-[60] mix-blend-multiply" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 pt-24 pb-14 sm:pt-32 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot shrink-0" aria-hidden="true" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-white/90">About African Roots Transformation</span>
        </div>

        <h1
          className="font-display text-hero-lg text-[2rem] leading-[1.15] sm:text-hero-lg sm:leading-tight text-white mb-4 sm:mb-6 animate-fade-up [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] sm:[text-shadow:none]"
          style={{ animationDelay: '100ms' }}>

          Communities Are Not{' '}
          <span className="italic text-accent">Beneficiaries.</span>
          <br />
          They Are Leaders.
        </h1>

        <p
          className="text-white/90 sm:text-white/80 text-sm sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: '200ms' }}>

          African Roots Transformation (ART) believes that the people living closest to environmental, social, and economic challenges are also best positioned to shape sustainable solutions. Our role is not to replace local leadership, but to strengthen it through collaboration, practical support, advocacy, and long-term partnership.
        </p>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#F5F0E8" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>);

}