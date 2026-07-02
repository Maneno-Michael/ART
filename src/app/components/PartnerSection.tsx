'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function PartnerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.15 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-card"
      aria-labelledby="partner-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden group shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_17df8779b-1782921464827.png"
                alt="Partnership activities — meetings, trainings, collaborative field engagement with community members"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Trust badge */}
            <div className="absolute -bottom-5 right-4 sm:right-6 bg-card border border-border rounded-2xl shadow-xl p-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm font-display">
                  SDG
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">SDG-Aligned</div>
                  <div className="text-muted-foreground text-xs">Community Impact</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            <span className="section-label text-accent mb-4 block">For Donors, Organizations & Collaborators</span>
            <h2
              id="partner-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              
              Partnering for{' '}
              <span className="italic text-primary">Community-Led</span>{' '}
              Change
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-8">
              <p>
                ART collaborates with donors, NGOs, researchers, grassroots organizations, academic institutions, and development partners committed to agroecology, climate resilience, social justice, and locally led development.
              </p>
              <p>
                Our approach combines grassroots implementation, community participation, advocacy, and practical learning systems designed to create sustainable and scalable impact.
              </p>
              <p>
                We believe long-term change becomes possible when communities remain at the center of decision-making and solution-building.
              </p>
            </div>

            {/* Partnership types */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
              'Collaborative Programming',
              'Technical Support',
              'Research & Learning',
              'Community Implementation']?.
              map((type) =>
              <div key={type} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  {type}
                </div>
              )}
            </div>

            <Link
              href="/get-involved"
              className="btn-shimmer inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all shadow-xl focus-ring">
              
              Partner With ART
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}