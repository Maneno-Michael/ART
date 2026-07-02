'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const impactCards = [
  {
    amount: '$30',
    description: 'Provides indigenous seeds and basic farming tools for one smallholder farmer.',
    emoji: '🌱',
    color: 'bg-primary/5 border-primary/20 hover:border-primary/40',
    amountColor: 'text-primary',
  },
  {
    amount: '$100',
    description: 'Supports a community advocacy and dialogue session focused on women\'s land rights and food security.',
    emoji: '🤝',
    color: 'bg-accent/5 border-accent/20 hover:border-accent/40',
    amountColor: 'text-accent',
  },
  {
    amount: '$150',
    description: 'Helps train youth agroecology mentors supporting climate resilience and community learning.',
    emoji: '👩‍🌾',
    color: 'bg-secondary/5 border-secondary/20 hover:border-secondary/40',
    amountColor: 'text-secondary',
  },
  {
    amount: '$200',
    description: 'Supports a demonstration plot and soil restoration setup at a community resilience site.',
    emoji: '🌍',
    color: 'bg-primary/5 border-primary/20 hover:border-primary/40',
    amountColor: 'text-primary',
  },
];

export default function DonationImpactSection() {
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
      className="py-16 sm:py-20 bg-primary/5 relative overflow-hidden"
      aria-labelledby="donation-impact-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 blob-accent opacity-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 blob-primary opacity-10" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`mb-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">Support Community Action</span>
          <h2
            id="donation-impact-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4"
          >
            How Your Support Helps
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every contribution directly supports grassroots initiatives that strengthen food systems, restore ecosystems, and expand opportunities for farming communities.
          </p>
        </div>

        {/* Impact cards — ticket style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactCards?.map((card, i) => (
            <div
              key={card?.amount}
              className={`relative bg-card border-2 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${card?.color} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Perforation circles */}
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-background rounded-full -translate-y-1/2" aria-hidden="true" />
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-background rounded-full -translate-y-1/2" aria-hidden="true" />
              {/* Dashed divider */}
              <div className="border-b-2 border-dashed border-border pb-4 mb-4">
                <span className="text-3xl" aria-hidden="true">{card?.emoji}</span>
              </div>
              <div className={`font-display font-bold text-4xl mb-3 ${card?.amountColor}`}>
                {card?.amount}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{card?.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            href="/donate"
            className="btn-shimmer inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-accent/90 transition-all shadow-xl focus-ring"
          >
            Support Community Action
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}