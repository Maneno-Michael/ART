'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-labelledby="final-cta-heading">
      
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AppImage
          src="/assets/images/meet.jpg"
          alt="Warm, hopeful community imagery — farmers and community members building sustainable futures together"
          fill
          className="object-cover object-center"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#F5F0E8" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label text-accent/80 mb-4 block">Join the Movement</span>
          <h2
            id="final-cta-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            
            Building Resilient Communities Starts at the Grassroots
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Join us in strengthening food sovereignty, restoring ecosystems, protecting indigenous knowledge, and supporting communities building sustainable futures across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved"
              className="btn-shimmer inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all shadow-xl focus-ring">
              
              Get Involved
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-foreground/10 transition-all focus-ring">
              
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#F5F0E8" d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,40 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>);

}