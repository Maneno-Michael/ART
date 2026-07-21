'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const programs = [
{
  title: 'Agroecology',
  summary: 'We promote sustainable farming systems that restore soil health, strengthen biodiversity, reduce dependency on harmful external inputs, and support long-term environmental resilience.',
  href: '/programs-overview',
  image: "/assets/images/agri.jpg",
  imageAlt: 'ART Resilience Centers — community learning hub, demonstration farm, farmers in training session',
  tag: 'Agroecology',
  color: 'bg-primary/10 text-primary'
},
{
  title: 'Food Sovereignty',
  summary: 'We believe communities should have the right to define, control, and sustain their own food systems through indigenous seeds, local knowledge, and community-led production.',
  href: '/programs-overview',
  image: "/assets/images/sec.jpg",
  imageAlt: 'My Food My Power — indigenous crops, women sorting and preserving seeds, seed saving activities',
  tag: 'Food Sovereignty',
  color: 'bg-accent/10 text-accent'
},
{
  title: 'Social Justice',
  summary: 'We work to address inequalities that limit access to land, leadership, opportunity, and participation for women, youth, and marginalized communities.',
  href: '/programs-overview',
  image: "/assets/images/stew.jpg",
  imageAlt: 'Her Land Her Power — women farmers in community dialogue, women leadership activities',
  tag: 'Social Justice',
  color: 'bg-secondary/10 text-secondary'
},
{
  title: 'Environmental Stewardship',
  summary: 'We support ecological restoration, conservation, and responsible environmental practices that protect ecosystems for future generations.',
  href: '/programs-overview',
  image: "/assets/images/school.jpeg",
  imageAlt: 'ART4Equity — youth and women in training sessions, community participation activities',
  tag: 'Environmental Stewardship',
  color: 'bg-primary/10 text-primary'
},
{
  title: 'Community Leadership',
  summary: 'We believe lasting solutions are strongest when communities remain at the center of planning, implementation, and decision-making.',
  href: '/programs-overview',
  image: "/assets/images/lid.jpg",
  imageAlt: 'Voices from the Roots — storytelling sessions, community interviews, documentation activities',
  tag: 'Community Leadership',
  color: 'bg-accent/10 text-accent',
  span2: true
}];

export default function CoreValues() {
   const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="programs"
      className="py-14 sm:py-20 lg:py-24 bg-background overflow-hidden"
      aria-labelledby="programs-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-2 sm:mb-3 block">What We Stand For</span>
          <h2
            id="values-heading"
            className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground px-2"
          >
            The Principles That Guide Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Cards 1-4: normal span */}
          {programs.slice(0, 4).map((program, i) =>
          <ProgramCard key={program.href} program={program} index={i} visible={visible} />
          )}
          {/* Card 5: spans 2 cols on lg */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${4 * 80}ms` }}>
            
            <ProgramCardWide program={programs[4]} />
          </div>
        </div>

      </div>
    </section>);

}

interface ProgramCardProps {
  program: typeof programs[0];
  index: number;
  visible: boolean;
}

function ProgramCard({ program, index, visible }: ProgramCardProps) {
  return (
    <div
      className={`group bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}>
      
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <AppImage
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover sm:grayscale sm:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full ${program.color} backdrop-blur-sm`}>
          {program.tag}
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">{program.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.summary}</p>
        
      </div>
    </div>);

}

function ProgramCardWide({ program }: {program: typeof programs[0];}) {
  return (
    <div className="group bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col sm:flex-row">
      <div className="relative sm:w-2/5 h-40 sm:h-auto overflow-hidden flex-shrink-0">
        <AppImage
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover sm:grayscale sm:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, 40vw" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent sm:bg-gradient-to-l" />
      </div>
      <div className="p-5 sm:p-8 flex flex-col justify-center flex-1">
        <span className={`self-start text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full mb-2.5 sm:mb-3 ${program.color}`}>
          {program.tag}
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2.5 sm:mb-3">{program.title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">{program.summary}</p>
        
      </div>
    </div>);

}