'use client';

import React, { useRef, useEffect, useState } from 'react';

const phases = [
  { num: '01', title: 'Community Assessment', desc: 'Listening to community priorities and realities.' },
  { num: '02', title: 'Program Design', desc: 'Developing practical and locally relevant interventions.' },
  { num: '03', title: 'Community Co-Design', desc: 'Building programs together with grassroots partners.' },
  { num: '04', title: 'Mobilization & Launch', desc: 'Preparing communities, partnerships, and implementation systems.' },
  { num: '05', title: 'Implementation', desc: 'Delivering practical community-based activities.' },
  { num: '06', title: 'Monitoring & Learning', desc: 'Tracking progress, feedback, and lessons learned.' },
  { num: '07', title: 'Reporting & Growth', desc: 'Sharing results and strengthening future impact.' },
];

export default function OurApproach() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-card overflow-hidden"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`mb-8 sm:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-2 sm:mb-3 block">Our Approach</span>
          <h2
            id="approach-heading"
            className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-5 max-w-2xl"
          >
            Building Solutions{' '}
            <span className="italic text-primary">With</span>{' '}
            Communities, Not{' '}
            <span className="italic text-secondary">For</span>{' '}
            Communities
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-3xl leading-relaxed">
            ART&apos;s approach is grounded in community ownership, practical implementation, and long-term resilience. Rather than short-term interventions, ART focuses on building systems, skills, and partnerships that communities can sustain long after individual projects end.
          </p>
        </div>

        {/* 7-Phase model — horizontal scrollable on mobile, grid on desktop */}
        <div className="overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex lg:grid lg:grid-cols-7 gap-3 sm:gap-4 min-w-max lg:min-w-0">
            {phases?.map((phase, i) => (
              <div
                key={phase?.num}
                className={`flex-shrink-0 w-40 sm:w-48 lg:w-auto bg-background border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-primary/40 hover:shadow-md transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-primary/20 mb-2 sm:mb-3">{phase?.num}</div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5 sm:mb-2">{phase?.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{phase?.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <p className="text-muted-foreground/60 text-xs mt-3 text-center lg:hidden">
          Swipe to see all phases →
        </p>
      </div>
    </section>
  );
}