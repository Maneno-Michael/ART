'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function VisionMission() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden"
      aria-labelledby="vision-mission-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-56 h-56 sm:w-96 sm:h-96 opacity-10 blob-accent" />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 opacity-10" style={{ background: 'radial-gradient(circle, #F5F0E8 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent/80 mb-2 sm:mb-3 block">Vision & Mission</span>
          <h2
            id="vision-mission-heading"
            className="font-display text-2xl xs:text-3xl sm:text-4xl text-primary-foreground px-2"
          >
            What Guides Our Work
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              label: 'Our Vision',
              icon: '🔭',
              text: 'To contribute to resilient, self-sufficient, and just African communities through agroecology, food sovereignty, climate justice, and equitable access to resources and opportunities.',
              delay: 0,
            },
            {
              label: 'Our Mission',
              icon: '🎯',
              text: 'To work alongside communities in advancing agroecology, strengthening food systems, promoting social justice, and supporting sustainable livelihoods through education, advocacy, community partnerships, and locally led action.',
              delay: 100,
            },
            {
              label: 'Our Motto',
              icon: '🌱',
              text: '"Nurturing Communities. Transforming Lives. Sustaining Futures."',
              isQuote: true,
              delay: 200,
            },
          ]?.map((item) => (
            <div
              key={item?.label}
              className={`bg-primary-foreground/8 border border-primary-foreground/15 rounded-2xl sm:rounded-3xl p-5 sm:p-7 transition-all duration-700 hover:bg-primary-foreground/12 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${item?.delay}ms` }}
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4" aria-hidden="true">{item?.icon}</div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-primary-foreground mb-2 sm:mb-3">{item?.label}</h3>
              <p className={`text-primary-foreground/75 text-sm leading-relaxed ${item?.isQuote ? 'italic font-display text-base' : ''}`}>
                {item?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}