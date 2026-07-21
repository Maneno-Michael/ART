'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
{
  name: 'Machakos Resilience Hub',
  location: 'Machakos County',
  description: 'Community advocacy and resilience-building initiatives focused on women\'s land rights, food security, social justice, and strengthening locally led systems for sustainable livelihoods.',
  image: "/assets/images/macha.jpg",
  imageAlt: 'Machakos Resilience Hub — community and field activity in Machakos County, Kenya',
  tags: ["Women\'s Rights", 'Food Security', 'Advocacy'],
},
{
  name: 'Utawala Urban Farm',
  location: 'Nairobi County',
  description: 'Supporting women-led urban agroecological farming through regenerative production practices, soil restoration, indigenous crops, and practical farmer training.',
  image: "/assets/images/nairobi.jpg",
  imageAlt: 'Utawala Urban Farm — women-led urban agroecological farming in Nairobi, soil restoration and indigenous crops',
  tags: ['Urban Farming', 'Women-Led', 'Agroecology'],
}];

export default function ActiveProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-14 sm:py-20 bg-background"
      aria-labelledby="projects-heading">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`mb-9 sm:mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-2.5 sm:mb-3 block">Current Projects</span>
          <h2
            id="projects-heading"
            className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">

            Where We Are Working
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl leading-relaxed">
            ART currently supports grassroots initiatives and community partnerships focused on agroecology, food sovereignty, women&apos;s empowerment, and climate resilience in Kenya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-8">
          {projects?.map((project, i) =>
          <div
            key={project?.name}
            className={`group bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 150}ms` }}>

              {/* Image */}
              <div className="relative h-44 xs:h-52 sm:h-64 overflow-hidden">
                <AppImage
                src={project?.image}
                alt={project?.imageAlt}
                fill
                className="object-cover sm:grayscale sm:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 50vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Location badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <Icon name="MapPinIcon" size={11} className="shrink-0" />
                  {project?.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project?.tags?.map((tag) =>
                <span key={tag} className="text-[10px] sm:text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                      {tag}
                    </span>
                )}
                </div>

                <h3 className="font-display text-base sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 leading-snug">{project?.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project?.description}</p>
              </div>
            </div>
          )}
        </div>

        <div className={`mt-8 sm:mt-10 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            href="/about"
            className="btn-shimmer inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all shadow-md focus-ring w-full sm:w-auto">

            View Our Impact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}