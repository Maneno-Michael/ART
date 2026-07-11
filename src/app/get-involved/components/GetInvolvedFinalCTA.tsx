import React from 'react';
import Link from 'next/link';

export default function GetInvolvedFinalCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 blob-amber opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-hero-lg font-extrabold text-primary-foreground mb-5">
          Communities Thrive When People Work Together
        </h2>
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Join ART in strengthening food systems, supporting grassroots leadership, and building sustainable futures rooted in dignity, participation, and resilience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#volunteer-form" className="btn-accent text-base">
            Get Involved →
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 text-primary-foreground rounded-full font-semibold text-base border border-white/30 hover:bg-white/30 transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}