// 'use client';

// import React, { useRef, useEffect, useState } from 'react';
// import AppImage from '@/components/ui/AppImage';

// const values = [
//   {
//     title: 'Agroecology',
//     image: "/assets/images/found1.jpg",
//     imageAlt: 'Team member headshot — ART Founder, natural community setting',
//     description: 'We promote sustainable farming systems that restore soil health, strengthen biodiversity, reduce dependency on harmful external inputs, and support long-term environmental resilience.',
//   },
//   {
//     title: 'Food Sovereignty',
//     image: "/assets/images/found1.jpg",
//     imageAlt: 'Team member headshot — ART Founder, natural community setting',
//     description: 'We believe communities should have the right to define, control, and sustain their own food systems through indigenous seeds, local knowledge, and community-led production.',
//   },
//   {
//     title: 'Social Justice',
//     image: "/assets/images/found1.jpg",
//     imageAlt: 'Team member headshot — ART Founder, natural community setting',
//     description: 'We work to address inequalities that limit access to land, leadership, opportunity, and participation for women, youth, and marginalized communities.',
//   },
//   {
//     title: 'Environmental Stewardship',
//     image: "/assets/images/found1.jpg",
//     imageAlt: 'Team member headshot — ART Founder, natural community setting',
//     description: 'We support ecological restoration, conservation, and responsible environmental practices that protect ecosystems for future generations.',
//   },
//   {
//     title: 'Community Leadership',
//     image: "/assets/images/found1.jpg",
//     imageAlt: 'Team member headshot — ART Founder, natural community setting',
//     description: 'We believe lasting solutions are strongest when communities remain at the center of planning, implementation, and decision-making.',
//   },
// ];

'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const programs = [
{
  title: 'Agroecology',
  summary: 'We promote sustainable farming systems that restore soil health, strengthen biodiversity, reduce dependency on harmful external inputs, and support long-term environmental resilience.',
  href: '/programs-overview',
  image: "/assets/images/center1.jpg",
  imageAlt: 'ART Resilience Centers — community learning hub, demonstration farm, farmers in training session',
  tag: 'Agroecology',
  color: 'bg-primary/10 text-primary'
},
{
  title: 'Food Sovereignty',
  summary: 'We believe communities should have the right to define, control, and sustain their own food systems through indigenous seeds, local knowledge, and community-led production.',
  href: '/programs-overview',
  image: "/assets/images/my food.jpeg",
  imageAlt: 'My Food My Power — indigenous crops, women sorting and preserving seeds, seed saving activities',
  tag: 'Food Sovereignty',
  color: 'bg-accent/10 text-accent'
},
{
  title: 'Social Justice',
  summary: 'We work to address inequalities that limit access to land, leadership, opportunity, and participation for women, youth, and marginalized communities.',
  href: '/programs-overview',
  image: "/assets/images/her.jpg",
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
  image: "/assets/images/voices.jpeg",
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
      className="py-20 sm:py-24 bg-background"
      aria-labelledby="programs-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">What We Stand For</span>
          <h2
            id="values-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground"
          >
            The Principles That Guide Our Work
          </h2>
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

        {/* <div className={`mt-10 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            href="/programs-overview"
            className="btn-shimmer inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all focus-ring">
            
            Explore All Programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div> */}
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
        
      </div>
    </div>);

}
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.1 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="py-16 sm:py-20 bg-background"
//       aria-labelledby="values-heading"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
        // <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        //   <span className="section-label text-accent mb-3 block">What We Stand For</span>
        //   <h2
        //     id="values-heading"
        //     className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground"
        //   >
        //     The Principles That Guide Our Work
        //   </h2>
        // </div>

//         {/* Asymmetric layout: 2 + 3 rows */}
//         <div className="space-y-5">
//           {/* Row 1: 2 cards */}
//           <div className="grid sm:grid-cols-2 gap-5">
//             {values.slice(0, 2).map((value, i) => (
//               <ValueCard key={value.title} value={value} index={i} visible={visible} />
//             ))}
//           </div>
//           {/* Row 2: 3 cards */}
//           <div className="grid sm:grid-cols-3 gap-5">
//             {values.slice(2).map((value, i) => (
//               <ValueCard key={value.title} value={value} index={i + 2} visible={visible} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ValueCard({ value, index, visible }: { value: typeof values[0]; index: number; visible: boolean }) {
//   return (
//     <div
//       className={`group bg-card border border-border rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//       style={{ transitionDelay: `${index * 80}ms` }}
//     >
//       <div className="relative h-56 overflow-hidden" style={{ borderRadius: '200px 200px 0 0' }}>
//                 <AppImage
//                 src={value?.image}
//                 alt={value?.imageAlt}
//                 fill
//                 className="object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
//                 sizes="(max-width: 640px) 50vw, 25vw" />
              
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//               </div>
//       <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
//       <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
//     </div>
//   );
// }