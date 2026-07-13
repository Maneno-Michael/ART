'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const pillars = [
  {
    icon: 'UserGroupIcon',
    title: 'Community Ownership',
    description: 'Programs are designed and led by communities, ensuring local relevance and long-term sustainability.',
  },
  {
    icon: 'SunIcon',
    title: 'Agroecology',
    description: 'Sustainable farming systems that restore soil health, strengthen biodiversity, and build climate resilience.',
  },
  {
    icon: 'BookOpenIcon',
    title: 'Indigenous Knowledge',
    description: 'Honoring and integrating traditional ecological knowledge that has sustained communities for generations.',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Climate Resilience',
    description: 'Building adaptive capacity so communities can respond to and recover from climate shocks.',
  },
  {
    icon: 'ScaleIcon',
    title: 'Social Justice',
    description: 'Addressing systemic inequalities that limit land access, leadership, and opportunity for women and youth.',
  },
];

export default function ProgramsApproach() {
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
    <section ref={sectionRef} className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal reveal-hidden">
          <span className="section-label">Our Approach</span>
          <h2 className="text-section-title font-extrabold text-foreground mt-3 mb-4">
            How Our Programs Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            All ART programs are community-led, locally grounded, and designed to strengthen long-term resilience through practical implementation, collaboration, and knowledge sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal reveal-hidden bg-card rounded-2xl p-6 border border-border text-center card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={pillar.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-sm text-foreground mb-2">{pillar.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}