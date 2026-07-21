'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const partnerTypes = [
  { icon: 'BuildingOfficeIcon', label: 'Corporate Partnership', desc: 'Partner with African Roots Transformation (ART) as part of your CSR programme and lets work together to achieve your objectives while creating lasting impact for communities.' },
  { icon: 'GlobeAltIcon', label: 'Spread the Word', desc: 'Share African Roots Transformation (ART) story on social media, in your church, community group or workplace. Every share reaches potential supporters who can transform lives in Africa.' },
  { icon: 'HomeModernIcon', label: 'Legacy Giving', desc: 'Consider leaving a gift to African Roots Transformation (ART) in your will. Legacy gifts help us plan long-term training programmes and community infrastructure that will outlast any of us.' },
  { icon: 'AcademicCapIcon', label: 'In-Kind Support', desc: 'Donate facilities/properties, composting equipment, Value addition machines, solar panels or agricultural inputs that support the farmers and women’s empowerment programmes directly, sanitary pads for school girls, etc' },
];

export default function PartnerWithUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.reveal-hidden');
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
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
          {/* Image comes first on mobile so the section reads visually before the long text block */}
          <div
            className="reveal reveal-hidden relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2"
            style={{ aspectRatio: '4/3' }}
          >
            <AppImage
              src="/assets/images/part.jpg"
              alt="NGO representatives and ART team in collaborative workshop, diverse group around table with community plans and maps"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="reveal reveal-hidden order-2 lg:order-1">
            <span className="section-label text-xs sm:text-sm">Build Meaningful Partnerships</span>
            <h2 className="text-2xl sm:text-3xl lg:text-section-title font-extrabold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-5">
              Partner With Us for Community-Led Change
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-5">
              ART works with donors, NGOs, grassroots organizations, academic institutions, researchers, and development partners committed to agroecology, community resilience, and locally led development.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Partnerships may include collaborative programming, technical support, research, training, advocacy, or community-based implementation. We value partnerships grounded in trust, accountability, shared learning, and community ownership.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {partnerTypes.map((type) => (
                <div key={type.label} className="flex items-start gap-3 p-3.5 sm:p-4 bg-primary rounded-xl border border-border">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name={type.icon as Parameters<typeof Icon>[0]['name']} size={15} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-accent">{type.label}</p>
                    <p className="text-xs text-primary-foreground mt-0.5 leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/donate" className="btn-primary text-center justify-center">
                Donate to ART →
              </a>
              <a href="#" className="btn-secondary text-center justify-center">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}