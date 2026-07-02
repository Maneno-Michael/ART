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
      className="py-16 sm:py-20 bg-card"
      aria-labelledby="why-matters-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="section-label text-accent mb-4 block">Why This Work Matters</span>
            <h2
              id="why-matters-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              
              Communities Closest to the Challenges Must Be Central to the{' '}
              <span className="italic text-primary">Solutions</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
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
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
              { label: 'Agroecology', icon: '🌱' },
              { label: 'Food Sovereignty', icon: '🌾' },
              { label: 'Social Justice', icon: '⚖️' },
              { label: 'Community Leadership', icon: '🤝' }]?.
              map((pillar) =>
              <div
                key={pillar?.label}
                className="flex items-center gap-3 bg-background rounded-xl p-3 border border-border">
                
                  <span className="text-xl" aria-hidden="true">{pillar?.icon}</span>
                  <span className="text-sm font-semibold text-foreground">{pillar?.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Image column */}
          <div
            className={`relative transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            <div className="relative h-[400px] sm:h-[520px] group">
              {/* Arch image */}
              <div className="absolute inset-0 mask-arch overflow-hidden shadow-2xl bg-border">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1193bb62b-1782921465726.png"
                  alt="Authentic field photography — community members engaged in farming activities, women and youth participation in agroecological practices"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 bg-card p-5 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-lg">
                    6+
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Counties</div>
                    <div className="text-muted-foreground text-xs">Across Kenya</div>
                  </div>
                </div>
              </div>

              {/* Spinning circular text */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 animate-spin-slow hidden sm:block">
                <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" aria-hidden="true">
                  <path id="circle-path" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="fill-current" style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.15em' }}>
                    <textPath xlinkHref="#circle-path">
                      Resilience · Justice · Agroecology ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl" aria-hidden="true">🌱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}