'use client';

import React, { useRef, useEffect, useState } from 'react';

const values = [
  {
    title: 'Agroecology',
    icon: '🌱',
    description: 'We promote sustainable farming systems that restore soil health, strengthen biodiversity, reduce dependency on harmful external inputs, and support long-term environmental resilience.',
  },
  {
    title: 'Food Sovereignty',
    icon: '🌾',
    description: 'We believe communities should have the right to define, control, and sustain their own food systems through indigenous seeds, local knowledge, and community-led production.',
  },
  {
    title: 'Social Justice',
    icon: '⚖️',
    description: 'We work to address inequalities that limit access to land, leadership, opportunity, and participation for women, youth, and marginalized communities.',
  },
  {
    title: 'Environmental Stewardship',
    icon: '🌍',
    description: 'We support ecological restoration, conservation, and responsible environmental practices that protect ecosystems for future generations.',
  },
  {
    title: 'Community Leadership',
    icon: '🤝',
    description: 'We believe lasting solutions are strongest when communities remain at the center of planning, implementation, and decision-making.',
  },
];

export default function CoreValues() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-background"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">What We Stand For</span>
          <h2
            id="values-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground"
          >
            The Principles That Guide Our Work
          </h2>
        </div>

        {/* Asymmetric layout: 2 + 3 rows */}
        <div className="space-y-5">
          {/* Row 1: 2 cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.slice(0, 2).map((value, i) => (
              <ValueCard key={value.title} value={value} index={i} visible={visible} />
            ))}
          </div>
          {/* Row 2: 3 cards */}
          <div className="grid sm:grid-cols-3 gap-5">
            {values.slice(2).map((value, i) => (
              <ValueCard key={value.title} value={value} index={i + 2} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, index, visible }: { value: typeof values[0]; index: number; visible: boolean }) {
  return (
    <div
      className={`group bg-card border border-border rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-4xl mb-5" aria-hidden="true">{value.icon}</div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
    </div>
  );
}