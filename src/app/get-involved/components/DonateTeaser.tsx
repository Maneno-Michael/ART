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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className="reveal reveal-hidden relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            style={{ aspectRatio: '4/3' }}
          >
            <AppImage
              src="/assets/images/support.jpg"
              alt="Farmer receiving seeds and tools at community distribution event in Machakos County, warm sunlit outdoor setting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating stat card */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-card/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="HeartIcon" size={16} className="text-accent shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-foreground">
                  Your Impact
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-2">
                {impactHighlights?.map((item) => (
                  <div key={item?.amount} className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <span className="text-xs sm:text-sm font-extrabold text-primary shrink-0">
                      {item?.amount}
                    </span>
                    <span className="text-[9px] sm:text-xs text-muted-foreground leading-tight truncate sm:whitespace-normal sm:truncate-none">
                      {item?.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-hidden">
            <span className="text-xs sm:text-sm section-label">Support the Work</span>
            <h2 className="text-xl sm:text-2xl lg:text-section-title font-extrabold text-foreground mt-3 mb-3 sm:mb-5 leading-tight">
              Support Community-Led Action
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-5">
              Your support helps strengthen grassroots initiatives, farmer training, indigenous seed preservation, community advocacy, youth engagement, and practical learning systems that communities can sustain long-term.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-8">
              Every contribution directly supports locally led action and community resilience across Kenya and East Africa.
            </p>
            <Link
              href="/donate"
              className="btn-accent w-full sm:w-auto inline-block text-center bg-accent text-accent-foreground text-sm sm:text-base py-3 px-6 rounded-full focus-ring font-semibold transition-transform active:scale-[0.98]"
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}