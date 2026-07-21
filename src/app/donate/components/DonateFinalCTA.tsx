'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function DonateFinalCTA() {
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
      className="py-14 sm:py-20 lg:py-24 bg-primary relative overflow-hidden"
      aria-labelledby="donate-cta-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-10 blob-accent" />
        <div
          className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 opacity-10"
          style={{ background: 'radial-gradient(circle, #F5F0E8 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8" aria-hidden="true">
            <div className="h-px w-10 sm:w-16 bg-primary-foreground/20" />
            <span className="text-xl sm:text-2xl">🌍</span>
            <div className="h-px w-10 sm:w-16 bg-primary-foreground/20" />
          </div>
          <h2
            id="donate-cta-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 sm:mb-5 leading-tight"
          >
            Support Communities Building{' '}
            <span className="italic text-accent">Sustainable Futures</span>
          </h2>
          <p className="text-primary-foreground/75 text-sm sm:text-base lg:text-lg leading-relaxed mb-7 sm:mb-10 max-w-xl mx-auto px-2 sm:px-0">
            Every contribution helps strengthen grassroots leadership, practical learning systems, and locally led solutions across Africa.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="#donation-form-heading"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-accent/90 transition-all shadow-xl focus-ring w-full sm:w-auto active:scale-[0.98]"
            >
              Donate Now →
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-primary-foreground/10 transition-all focus-ring w-full sm:w-auto active:scale-[0.98]"
            >
              Other Ways to Help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}