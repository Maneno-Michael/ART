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
  stats: [
  { value: '200+', label: 'Farmers Engaged' },
  { value: '3', label: 'Learning Sites' }]

},
{
  name: 'Utawala Urban Farm',
  location: 'Nairobi County',
  description: 'Supporting women-led urban agroecological farming through regenerative production practices, soil restoration, indigenous crops, and practical farmer training.',
  image: "/assets/images/nairobi.jpg",
  imageAlt: 'Utawala Urban Farm — women-led urban agroecological farming in Nairobi, soil restoration and indigenous crops',
  tags: ['Urban Farming', 'Women-Led', 'Agroecology'],
  stats: [
  { value: '50+', label: 'Women Trained' },
  { value: '2', label: 'Demo Plots' }]

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
      className="py-16 sm:py-20 bg-background"
      aria-labelledby="projects-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">Current Projects</span>
          <h2
            id="projects-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            
            Where We Are Working
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            ART currently supports grassroots initiatives and community partnerships focused on agroecology, food sovereignty, women&apos;s empowerment, and climate resilience in Kenya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects?.map((project, i) =>
          <div
            key={project?.name}
            className={`group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 150}ms` }}>
            
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <AppImage
                src={project?.image}
                alt={project?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, 50vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Location badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  <Icon name="MapPinIcon" size={12} />
                  {project?.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.tags?.map((tag) =>
                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                      {tag}
                    </span>
                )}
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{project?.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project?.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  {project?.stats?.map((stat) =>
                <div key={stat?.label} className="text-center">
                      <div className="font-display font-bold text-2xl text-primary">{stat?.value}</div>
                      <div className="text-xs text-muted-foreground">{stat?.label}</div>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            href="/about"
            className="btn-shimmer inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md focus-ring">
            
            View Our Impact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}