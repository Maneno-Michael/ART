'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const programs = [
{
  title: 'ART Resilience Centers',
  summary: 'Community learning hubs where farmers strengthen agroecological practices, restore soil health, and share practical solutions for resilient farming systems.',
  href: '/programs-overview',
  image: "/assets/images/center1.jpg",
  imageAlt: 'ART Resilience Centers — community learning hub, demonstration farm, farmers in training session',
  tag: 'Learning & Training',
  color: 'bg-primary/10 text-primary'
},
{
  title: 'My Food, My Power',
  summary: 'Protecting indigenous seeds, preserving food heritage, and strengthening community control over local food systems through seed saving and agroecological practices.',
  href: '/programs-overview',
  image: "/assets/images/my food.jpeg",
  imageAlt: 'My Food My Power — indigenous crops, women sorting and preserving seeds, seed saving activities',
  tag: 'Food Sovereignty',
  color: 'bg-accent/10 text-accent'
},
{
  title: 'Her Land, Her Power',
  summary: 'Advancing women\'s land rights, legal awareness, leadership, and economic inclusion within farming communities.',
  href: '/programs-overview',
  image: "/assets/images/her.jpg",
  imageAlt: 'Her Land Her Power — women farmers in community dialogue, women leadership activities',
  tag: 'Women\'s Rights',
  color: 'bg-secondary/10 text-secondary'
},
{
  title: 'ART Green Schools',
  summary: 'Nurturing the next generation through climate leadership, agroecology, indigenous knowledge, and hands-on learning experiences connecting students with nature and community.',
  href: '/programs-overview',
  image: "/assets/images/school.jpeg",
  imageAlt: 'ART4Equity — youth and women in training sessions, community participation activities',
  tag: 'Equity & Inclusion',
  color: 'bg-primary/10 text-primary'
},
{
  title: 'Voices from the Roots',
  summary: 'Documenting grassroots experiences, indigenous knowledge, and community perspectives to influence policy, advocacy, and public understanding.',
  href: '/programs-overview',
  image: "/assets/images/voices.jpeg",
  imageAlt: 'Voices from the Roots — storytelling sessions, community interviews, documentation activities',
  tag: 'Advocacy',
  color: 'bg-accent/10 text-accent',
  span2: true
}];

export default function ProgramsSection() {
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
      className="py-14 sm:py-20 md:py-24 bg-background"
      aria-labelledby="programs-heading">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`mb-9 sm:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-2.5 sm:mb-3 block">What We Do | Our Programs</span>
          <h2
            id="programs-heading"
            className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4 max-w-2xl">

            Community-Led Programs for Resilient Food Systems
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl leading-relaxed">
            ART develops practical, community-driven programs that strengthen food sovereignty, promote climate resilience, support social justice, and expand opportunities for women and young people.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
            Array has 5 cards: [ART Resilience Centers, My Food My Power, Her Land Her Power, ART4Equity, Voices from the Roots]
            Desktop grid-cols-3:
            Row 1: [col-1: Card1 cs-1] [col-2: Card2 cs-1] [col-3: Card3 cs-1]
            Row 2: [col-1: Card4 cs-1] [col-2-3: Card5 cs-2]
            Placed 5/5 cards ✓
           */}
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
      className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}>

      <div className="relative h-40 sm:h-48 overflow-hidden">
        <AppImage
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover sm:grayscale sm:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 sm:from-black/50 to-transparent" />
        <span className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full ${program.color} backdrop-blur-sm`}>
          {program.tag}
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-base sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 leading-snug">{program.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">{program.summary}</p>
        <Link
          href={program.href}
          className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-semibold hover:gap-2.5 transition-all focus-ring group/link"
          aria-label={`Learn more about ${program.title}`}>

          Learn More
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>);

}

function ProgramCardWide({ program }: {program: typeof programs[0];}) {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-2/5 h-40 sm:h-auto overflow-hidden flex-shrink-0">
        <AppImage
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover sm:grayscale sm:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, 40vw" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 sm:bg-gradient-to-r sm:from-black/40 to-transparent sm:sm:bg-gradient-to-l" />
        {/* Tag shown on the image only on mobile, where it sits above the stacked content */}
        <span className={`sm:hidden absolute top-2.5 left-2.5 text-[10px] font-semibold px-2.5 py-1 rounded-full ${program.color} backdrop-blur-sm`}>
          {program.tag}
        </span>
      </div>
      <div className="p-4 sm:p-8 flex flex-col justify-center flex-1">
        <span className={`hidden sm:inline-flex self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${program.color}`}>
          {program.tag}
        </span>
        <h3 className="font-display text-lg sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3 leading-snug">{program.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-base leading-relaxed mb-3 sm:mb-5">{program.summary}</p>
        <Link
          href={program.href}
          className="self-start inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-semibold hover:gap-2.5 transition-all focus-ring"
          aria-label={`Learn more about ${program.title}`}>

          Learn More
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>);

}