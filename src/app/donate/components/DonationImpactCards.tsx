'use client';

import React, { useRef, useEffect, useState } from 'react';


const impactItems = [
  {
    amount: '$30',
    description: 'Provides indigenous seeds and basic farming tools for one farmer.',
    emoji: '🌱',
    colorBorder: 'border-primary/25 hover:border-primary/50',
    colorAmount: 'text-primary',
    colorBg: 'bg-primary/5',
  },
  {
    amount: '$100',
    description: 'Supports community dialogue and advocacy activities focused on women\'s land rights and food security.',
    emoji: '🤝',
    colorBorder: 'border-accent/25 hover:border-accent/50',
    colorAmount: 'text-accent',
    colorBg: 'bg-accent/5',
  },
  {
    amount: '$150',
    description: 'Supports youth agroecology mentorship initiatives for climate resilience and community learning.',
    emoji: '👩‍🌾',
    colorBorder: 'border-secondary/25 hover:border-secondary/50',
    colorAmount: 'text-secondary',
    colorBg: 'bg-secondary/5',
  },
  {
    amount: '$200',
    description: 'Supports demonstration plots and community learning activities at a resilience site.',
    emoji: '🌍',
    colorBorder: 'border-primary/25 hover:border-primary/50',
    colorAmount: 'text-primary',
    colorBg: 'bg-primary/5',
  },
];

export default function DonationImpactCards() {
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
      className="py-16 sm:py-20 bg-card"
      aria-labelledby="impact-cards-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">Your Support in Action</span>
          <h2
            id="impact-cards-heading"
            className="font-display text-3xl sm:text-4xl text-foreground"
          >
            How Donations Help
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactItems?.map((item, i) => (
            <div
              key={item?.amount}
              className={`relative bg-card border-2 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${item?.colorBorder} ${item?.colorBg} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Perforation circles */}
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-background rounded-full -translate-y-1/2" aria-hidden="true" />
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-background rounded-full -translate-y-1/2" aria-hidden="true" />

              <div className="border-b-2 border-dashed border-border pb-4 mb-4">
                <span className="text-3xl" aria-hidden="true">{item?.emoji}</span>
              </div>
              <div className={`font-display font-bold text-4xl mb-3 ${item?.colorAmount}`}>
                {item?.amount}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}