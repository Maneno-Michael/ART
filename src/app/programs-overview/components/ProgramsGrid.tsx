'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const programs = [
  {
    id: 'resilience',
    title: 'ART Resilience Centers',
    summary: 'Community-based learning hubs supporting agroecology, soil restoration, farmer training, and climate-resilient farming practices across Kenya.',
    image: "/assets/images/center1.jpg",
    alt: 'Farmers gathered at an outdoor demonstration plot learning composting and agroforestry techniques in Machakos County',
    href: '/programs-overview',
    tag: 'Agroecology',
    tagIcon: 'HomeModernIcon',
    sdgs: ['SDG 2', 'SDG 13', 'SDG 15'],
  },
  {
    id: 'food',
    title: 'My Food, My Power',
    summary: 'Protecting indigenous seeds, preserving food heritage, and strengthening community food sovereignty through local knowledge and seed-saving practices.',
    image: "/assets/images/my food.jpeg",
    alt: 'Kenyan women carefully sorting indigenous seed varieties in traditional baskets, seed preservation workshop',
    href: '/programs-overview',
    tag: 'Food Sovereignty',
    tagIcon: 'SunIcon',
    sdgs: ['SDG 2', 'SDG 15'],
  },
  {
    id: 'land',
    title: 'Her Land, Her Power',
    summary: 'Supporting women\'s land rights, legal awareness, leadership, and economic participation within farming communities.',
    image: "/assets/images/her.jpg",
    alt: 'Women farmers in community dialogue circle under shade trees discussing land rights and legal awareness',
    href: '/programs-overview',
    tag: "Women\'s Rights",
    tagIcon: 'UserGroupIcon',
    sdgs: ['SDG 5', 'SDG 10'],
  },
  {
    id: 'schools',
    title: 'ART Green Schools',
    summary: 'Nurturing the next generation through climate leadership, agroecology, indigenous knowledge, and hands-on learning experiences connecting students with nature and community.',
    image: "/assets/images/school.jpeg",
    alt: 'Students tending to school garden plots with farmer mentor, hands-on ecological learning activity in Nairobi school',
    href: '/programs-overview',
    tag: 'Youth & Education',
    tagIcon: 'AcademicCapIcon',
    sdgs: ['SDG 4', 'SDG 13'],
  },
  {
    id: 'voices',
    title: 'Voices from the Roots',
    summary: 'Documenting grassroots experiences, indigenous knowledge, and community stories to strengthen advocacy and policy engagement.',
    image: "/assets/images/voices.jpeg",
    alt: 'Community storytelling session with elder farmer sharing knowledge, young people gathered listening attentively',
    href: '/programs-overview',
    tag: 'Advocacy',
    tagIcon: 'MicrophoneIcon',
    sdgs: ['SDG 16', 'SDG 17'],
  },
];

export default function ProgramsGrid() {
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
      { threshold: 0.08 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 reveal reveal-hidden">
          <span className="section-label">All Programs</span>
          <h2 className="text-2xl sm:text-3xl lg:text-section-title font-extrabold text-foreground mt-2 sm:mt-3">
            Five Programs. One Mission.
          </h2>
        </div>

        {/* BENTO GRID AUDIT:
          Array has 5 cards: [Resilience Centers, My Food My Power, Her Land Her Power, ART Green Schools, Voices from Roots]
          Mobile (<640px): single column, all 5 cards stacked full width, uniform layout
          sm (640-1023px): 2 columns. Row 1: 3 single cards wrap naturally. Row 2: Schools spans full width (2 cols), Voices spans full width too (to avoid an orphaned half-empty row)
          lg (1024px+): 3 columns. Row 1: 3 single cards. Row 2: Schools spans 2 cols, Voices spans 1 col
          Placed 5/5 cards ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Row 1: 3 cards */}
          {programs.slice(0, 3).map((prog, i) => (
            <div
              key={prog.id}
              className="reveal reveal-hidden bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border card-hover group flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* col-1: Resilience Centers cs-1 | col-2: My Food My Power cs-1 | col-3: Her Land Her Power cs-1 */}
              <div className="relative h-44 xs:h-48 sm:h-52 overflow-hidden shrink-0">
                <AppImage
                  src={prog.image}
                  alt={prog.alt}
                  fill
                  className="object-cover program-card-img"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 gradient-overlay-bottom" />
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                  <span className="tag-pill bg-foreground/70 backdrop-blur-sm text-primary-foreground text-[11px] sm:text-xs">
                    <Icon name={prog.tagIcon as Parameters<typeof Icon>[0]['name']} size={10} />
                    {prog.tag}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                <h2 className="font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3">{prog.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 flex-1">{prog.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {prog.sdgs.map((sdg) => (
                      <span key={sdg} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 font-semibold">
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Row 2: ART Green Schools spans full width on sm and 2 cols on lg, Voices spans full on sm and 1 col on lg */}
          <div
            className="reveal reveal-hidden bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border card-hover group flex flex-col sm:col-span-2 lg:col-span-2"
            style={{ transitionDelay: '240ms' }}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative h-44 xs:h-48 md:h-auto md:w-1/2 overflow-hidden shrink-0">
                <AppImage
                  src={programs[3].image}
                  alt={programs[3].alt}
                  fill
                  className="object-cover program-card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 gradient-overlay-bottom" />
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                  <span className="tag-pill bg-foreground/70 backdrop-blur-sm text-primary-foreground text-[11px] sm:text-xs">
                    <Icon name={programs[3].tagIcon as Parameters<typeof Icon>[0]['name']} size={10} />
                    {programs[3].tag}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="font-bold text-lg sm:text-xl text-foreground mb-2 sm:mb-3">{programs[3].title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{programs[3].summary}</p>
                  <div className="flex flex-wrap gap-1.5 mb-1 sm:mb-4">
                    {programs[3].sdgs.map((sdg) => (
                      <span key={sdg} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 font-semibold">
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="reveal reveal-hidden bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border card-hover group flex flex-col sm:col-span-2 lg:col-span-1"
            style={{ transitionDelay: '320ms' }}
          >
            <div className="relative h-44 xs:h-48 sm:h-52 overflow-hidden shrink-0">
              <AppImage
                src={programs[4].image}
                alt={programs[4].alt}
                fill
                className="object-cover program-card-img"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 gradient-overlay-bottom" />
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                <span className="tag-pill bg-foreground/70 backdrop-blur-sm text-primary-foreground text-[11px] sm:text-xs">
                  <Icon name={programs[4].tagIcon as Parameters<typeof Icon>[0]['name']} size={10} />
                  {programs[4].tag}
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
              <h2 className="font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3">{programs[4].title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 flex-1">{programs[4].summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {programs[4].sdgs.map((sdg) => (
                    <span key={sdg} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 font-semibold">
                      {sdg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}