'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const impactCards = [
  {
    amount: '$30',
    description: 'Provides indigenous seeds and basic farming tools for one smallholder farmer.',
    color: 'bg-primary/5 border-primary/20 hover:border-primary/40',
    amountColor: 'text-primary',
  },
  {
    amount: '$50',
    description: 'Provides indigenous seeds and basic farming tools for one smallholder farmer. ',
    color: 'bg-accent/5 border-accent/20 hover:border-accent/40',
    amountColor: 'text-accent',
  },
  {
    amount: '$100',
    description: 'Supports one community dialogue and advocacy activities focused on womens land rights and food sovereignty reaching 20+ women',
    color: 'bg-secondary/5 border-secondary/20 hover:border-secondary/40',
    amountColor: 'text-secondary',
  },
  {
    amount: '$300',
    description: 'Funds one youth Agroecology mentorship initiative for climate resilience and community learning reaching 30+ youths.',
    color: 'bg-primary/5 border-primary/20 hover:border-primary/40',
    amountColor: 'text-primary',
  },
  {
    amount: '$500',
    description: 'Sponsors a full  establishment of a school demo farm where students can practically learn agroecological practices',
    color: 'bg-accent/5 border-accent/20 hover:border-accent/40',
    amountColor: 'text-accent',
  },
  {
    amount: '$1000',
    description: 'Establishes a community Resilience Centre serving 50+ farming households.',
    color: 'bg-secondary/5 border-secondary/20 hover:border-secondary/40',
    amountColor: 'text-secondary',
  },
  {
    amount: '$5000',
    description: 'Funds a full ART programme year:eg, ART Green Schools, Voices from the Roots, My food, my power campaign, Her Land; Her Power.',
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
      className="py-14 sm:py-20 bg-primary/5 relative overflow-hidden"
      aria-labelledby="donation-impact-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 blob-accent opacity-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 blob-primary opacity-10" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`mb-9 sm:mb-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-2.5 sm:mb-3 block">Support Community Action</span>
          <h2
            id="donation-impact-heading"
            className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4"
          >
            How Your Support Helps
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every contribution directly supports grassroots initiatives that strengthen food systems, restore ecosystems, and expand opportunities for farming communities.
          </p>
        </div>

        {/* Impact cards — ticket style */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {impactCards?.map((card, i) => (
            <div
              key={card?.amount}
              className={`relative bg-card border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${card?.color} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Perforation circles — hidden on the smallest screens where cards sit edge-to-edge with little margin */}
              <div className="hidden sm:block absolute top-1/2 -left-2 w-4 h-4 bg-background rounded-full -translate-y-1/2" aria-hidden="true" />
              <div className="hidden sm:block absolute top-1/2 -right-2 w-4 h-4 bg-background rounded-full -translate-y-1/2" aria-hidden="true" />

              <div className={`font-display font-bold text-2xl sm:text-3xl mb-2 sm:mb-3 ${card?.amountColor}`}>
                {card?.amount}
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{card?.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 sm:mt-10 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            href="/donate"
            className="btn-shimmer inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-accent/90 transition-all shadow-xl focus-ring w-full sm:w-auto"
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