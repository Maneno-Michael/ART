'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function AboutFinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 bg-background"
      aria-labelledby="about-cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <span className="text-2xl">🌱</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>

          <h2
            id="about-cta-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-5"
          >
            Join a Growing Movement for Food Sovereignty and{' '}
            <span className="italic text-primary">Community Resilience</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are a donor, grassroots organization, researcher, volunteer, or community member, there is a place for you within the ART network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved"
              className="btn-shimmer inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all shadow-xl focus-ring"
            >
              Partner With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/5 transition-all focus-ring"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}