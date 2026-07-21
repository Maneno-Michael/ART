'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function WhyItMattersSection() {
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
      className="py-14 sm:py-20 bg-card"
      aria-labelledby="why-matters-heading">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="section-label text-accent mb-3 sm:mb-4 block">Why This Work Matters</span>
            <h2
              id="why-matters-heading"
              className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6 sm:leading-tight">

              Communities Closest to the Challenges Must Be Central to the{' '}
              <span className="italic text-primary">Solutions</span>
            </h2>
            <div className="space-y-4 sm:space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Across Africa, many farming communities are facing soil degradation, climate shocks, rising production costs, shrinking land access, and limited participation in decisions that directly affect their livelihoods.
              </p>
              <p>
                Women and young people are often disproportionately affected, while indigenous agricultural knowledge and local food systems continue to disappear under increasing environmental and economic pressure.
              </p>
              <p>
                ART works alongside communities to strengthen practical, locally owned solutions that restore resilience, protect ecosystems, and support long-term sustainability rooted in community knowledge and participation.
              </p>
            </div>

            {/* Value pillars */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {[
              { label: 'Agroecology', icon: '🌱' },
              { label: 'Food Sovereignty', icon: '🌾' },
              { label: 'Social Justice', icon: '⚖️' },
              { label: 'Community Leadership', icon: '🤝' }]?.
              map((pillar) =>
              <div
                key={pillar?.label}
                className="flex items-center gap-2.5 sm:gap-3 bg-background rounded-xl p-2.5 sm:p-3 border border-border">

                  <span className="text-lg sm:text-xl shrink-0" aria-hidden="true">{pillar?.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground leading-snug">{pillar?.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Image column */}
          <div
            className={`relative transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <div className="relative h-[300px] xs:h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] group mb-8 sm:mb-0">
              {/* Arch image */}
              <div className="absolute inset-0 mask-arch overflow-hidden shadow-2xl bg-border">
                <AppImage
                  src="/assets/images/matters.jpg"
                  alt="Authentic field photography — community members engaged in farming activities, women and youth participation in agroecological practices"
                  fill
                  className="object-cover sm:grayscale sm:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw" />

              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-bottom-6 sm:-left-8 z-20 bg-card p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-border w-[calc(100%-2rem)] max-w-[220px] sm:w-auto sm:max-w-none">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm sm:text-lg shrink-0">
                    6+
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-xs sm:text-sm">Counties</div>
                    <div className="text-muted-foreground text-[10px] sm:text-xs">Across Kenya</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>);

}