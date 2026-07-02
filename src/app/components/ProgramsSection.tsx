'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const programs = [
{
  title: 'ART Resilience Centers',
  summary: 'Community learning hubs where farmers strengthen agroecological practices, restore soil health, and share practical solutions for resilient farming systems.',
  href: '/programs/art-resilience-centers',
  image: "/assets/images/center1.jpg",
  imageAlt: 'ART Resilience Centers — community learning hub, demonstration farm, farmers in training session',
  tag: 'Learning & Training',
  color: 'bg-primary/10 text-primary'
},
{
  title: 'My Food, My Power',
  summary: 'Protecting indigenous seeds, preserving food heritage, and strengthening community control over local food systems through seed saving and agroecological practices.',
  href: '/programs/my-food-my-power',
  image: "/assets/images/food2.jpg",
  imageAlt: 'My Food My Power — indigenous crops, women sorting and preserving seeds, seed saving activities',
  tag: 'Food Sovereignty',
  color: 'bg-accent/10 text-accent'
},
{
  title: 'Her Land, Her Power',
  summary: 'Advancing women\'s land rights, legal awareness, leadership, and economic inclusion within farming communities.',
  href: '/programs/her-land-her-power',
  image: "/assets/images/land2.jpg",
  imageAlt: 'Her Land Her Power — women farmers in community dialogue, women leadership activities',
  tag: 'Women\'s Rights',
  color: 'bg-secondary/10 text-secondary'
},
{
  title: 'ART4Equity',
  summary: 'Promoting inclusive participation of women and young people in agriculture, leadership, and community decision-making processes.',
  href: '/programs/art4equity',
  image: "/assets/images/equity.jpg",
  imageAlt: 'ART4Equity — youth and women in training sessions, community participation activities',
  tag: 'Equity & Inclusion',
  color: 'bg-primary/10 text-primary'
},
{
  title: 'Voices from the Roots',
  summary: 'Documenting grassroots experiences, indigenous knowledge, and community perspectives to influence policy, advocacy, and public understanding.',
  href: '/programs/voices-from-the-roots',
  image: "/assets/images/advoc.jpg",
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
      className="py-20 sm:py-24 bg-background"
      aria-labelledby="programs-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">What We Do</span>
          <h2
            id="programs-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 max-w-2xl">
            
            Community-Led Programs for Resilient Food Systems
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            href="/programs"
            className="btn-shimmer inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all focus-ring">
            
            Explore All Programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
      
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${program.color} backdrop-blur-sm`}>
          {program.tag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{program.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.summary}</p>
        <Link
          href={program.href}
          className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all focus-ring group/link"
          aria-label={`Learn more about ${program.title}`}>
          
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>);

}

function ProgramCardWide({ program }: {program: typeof programs[0];}) {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col sm:flex-row">
      <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden flex-shrink-0">
        <AppImage
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, 40vw" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent sm:bg-gradient-to-l" />
      </div>
      <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
        <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${program.color}`}>
          {program.tag}
        </span>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{program.title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-5">{program.summary}</p>
        <Link
          href={program.href}
          className="self-start inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all focus-ring"
          aria-label={`Learn more about ${program.title}`}>
          
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>);

}