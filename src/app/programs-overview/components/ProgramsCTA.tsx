import React from 'react';
import Link from 'next/link';

export default function ProgramsCTA() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 blob-amber opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-hero-lg text-primary-foreground mb-4 sm:mb-5 leading-tight">
          Building Stronger Communities Through Practical Action
        </h2>
        <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed mb-7 sm:mb-10 max-w-2xl mx-auto">
          Explore how ART programs are supporting communities in strengthening food systems, restoring ecosystems, and advancing locally led solutions across Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <Link
            href="/"
            className="btn-accent text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            View Our Impact →
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white/20 text-primary-foreground rounded-full font-semibold text-sm sm:text-base border border-white/30 hover:bg-white/30 transition-colors w-full sm:w-auto justify-center"
          >
            Partner With ART
          </Link>
        </div>
      </div>
    </section>
  );
}