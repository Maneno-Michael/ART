import React from 'react';
import Link from 'next/link';

export default function GetInvolvedFinalCTA() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 blob-amber opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-hero-lg font-extrabold text-primary-foreground mb-4 sm:mb-5 leading-tight">
          Communities Thrive When People Work Together
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 leading-relaxed mb-7 sm:mb-10 max-w-2xl mx-auto">
          Join ART in strengthening food systems, supporting grassroots leadership, and building sustainable futures rooted in dignity, participation, and resilience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link
            href="#volunteer-form"
            className="btn-accent text-sm sm:text-base w-full sm:w-auto text-center py-3 active:scale-[0.98] transition-transform"
          >
            Get Involved →
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white/20 text-primary-foreground rounded-full font-semibold text-sm sm:text-base border border-white/30 hover:bg-white/30 active:scale-[0.98] transition-all w-full sm:w-auto"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}