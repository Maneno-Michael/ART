import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ProgramsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AppImage
          src="https://picsum.photos/seed/programs-hero/1400/800"
          alt="Collage-style documentary image of Kenyan farmers, women leaders, youth in agroecological training, dim atmospheric light with warm amber tones"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          
        />

        {/* Scrim — dark overlay for white text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">Home</Link>
          <Icon name="ChevronRightIcon" size={14} className="text-primary-foreground/40" />
          <span className="text-primary-foreground/80 text-sm font-medium">Programs</span>
        </div>

        <div className="max-w-3xl">
          <span className="section-label text-secondary mb-3 block">Our Programs</span>
          <h1 className="text-hero-xl font-extrabold text-primary-foreground mb-5 leading-tight">
            Programs Rooted in Community Resilience
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
            ART develops community-led programs that strengthen food systems, promote climate resilience, support social justice, and expand opportunities for women and young people across Africa.
          </p>
        </div>
      </div>
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#F5F0E8" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}