'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'ART Founder',
  role: 'Founder & Executive Director',
  image: "/assets/images/found.jpg",
  imageAlt: 'Team member headshot — ART Founder, natural community setting',
},
{
  name: 'Programs Lead',
  role: 'Programs & Community Engagement',
  image: "/assets/images/found3.jpg",
  imageAlt: 'Team member headshot — Programs Lead, community engagement',
},
{
  name: 'Communications Officer',
  role: 'Communications & Advocacy',
  image: "/assets/images/found1.jpg",
  imageAlt: 'Team member headshot — Communications Officer, advocacy role',
},
{
  name: 'Field Coordinator',
  role: 'Field Operations',
  image: "/assets/images/found2.jpg",
  imageAlt: 'Team member headshot — Field Coordinator, field operations',
},
];

export default function TeamSection() {
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
      className="py-12 sm:py-16 lg:py-20 bg-background overflow-hidden"
      aria-labelledby="team-heading">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-2 sm:mb-3 block">Our Team</span>
          <h2
            id="team-heading"
            className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">

            The People Behind ART
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            ART is supported by a growing network of community organizers, farmers, youth leaders, advocates, volunteers, and professionals committed to advancing agroecology, food sovereignty, and community resilience across Africa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-7 xs:gap-x-6 sm:gap-x-10 sm:gap-y-10">
          {team?.map((member, i) =>
          <div
            key={member?.name}
            className={`group flex flex-col items-center text-center w-20 xs:w-24 sm:w-32 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 80}ms` }}>

            {/* Circular photo */}
            <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-muted">
              <AppImage
                src={member?.image}
                alt={member?.imageAlt}
                fill
                className="object-cover"
                sizes="96px" />
            </div>

            <h3 className="font-display text-xs xs:text-sm font-semibold text-accent mt-2 sm:mt-3 leading-tight">
              {member?.name}
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-[11px] sm:text-xs mt-0.5 leading-tight">
              {member?.role}
            </p>
          </div>
          )}
        </div>
      </div>
    </section>);

}