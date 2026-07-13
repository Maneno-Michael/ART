'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const impactHighlights = [
  { amount: '$30', label: 'Seeds & Tools for one farmer' },
  { amount: '$100', label: 'Community advocacy session' },
  { amount: '$150', label: 'Youth agroecology mentorship' },
  { amount: '$200', label: 'Demonstration plot setup' },
];

export default function DonateTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const items = el?.querySelectorAll('.reveal-hidden');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal reveal-hidden relative rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
            <AppImage
              src="https://picsum.photos/seed/donate-teaser/800/600"
              alt="Farmer receiving seeds and tools at community distribution event in Machakos County, warm sunlit outdoor setting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating stat card */}
            <div className="absolute bottom-5 left-5 right-5 bg-card/95 backdrop-blur-sm rounded-2xl p-4 border border-border shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="HeartIcon" size={16} className="text-accent" />
                <span className="text-xs font-bold text-foreground">Your Impact</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {impactHighlights?.map((item) => (
                  <div key={item?.amount} className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-primary">{item?.amount}</span>
                    <span className="text-xs text-muted-foreground leading-tight">{item?.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-hidden">
            <span className="section-label">Support the Work</span>
            <h2 className="text-section-title font-extrabold text-foreground mt-3 mb-5">
              Support Community-Led Action
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Your support helps strengthen grassroots initiatives, farmer training, indigenous seed preservation, community advocacy, youth engagement, and practical learning systems that communities can sustain long-term.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Every contribution directly supports locally led action and community resilience across Kenya and East Africa.
            </p>
            <Link href="/donate" className="btn-accent text-base">
              Donate Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}