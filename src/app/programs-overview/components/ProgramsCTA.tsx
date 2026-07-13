import React from 'react';
import Link from 'next/link';

export default function ProgramsCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 blob-amber opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-hero-lg  text-primary-foreground mb-5">
          Building Stronger Communities Through Practical Action
        </h2>
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Explore how ART programs are supporting communities in strengthening food systems, restoring ecosystems, and advancing locally led solutions across Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-accent text-base">
            View Our Impact →
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 text-primary-foreground rounded-full font-semibold text-base border border-white/30 hover:bg-white/30 transition-colors"
          >
            Partner With ART
          </Link>
        </div>
      </div>
    </section>
  );
}