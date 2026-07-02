'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
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
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-60 pointer-events-none z-[60] mix-blend-multiply" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
          <span className="section-label text-white/80">About African Roots Transformation</span>
        </div>

        <h1
          className="font-display text-hero-lg text-white mb-6 animate-fade-up"
          style={{ animationDelay: '100ms' }}>
          
          Communities Are Not{' '}
          <span className="italic text-accent">Beneficiaries.</span>
          <br />
          They Are Leaders.
        </h1>

        <p
          className="text-white/80 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto animate-fade-up"
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