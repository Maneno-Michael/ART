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
      className="py-16 sm:py-20 bg-background"
      aria-labelledby="team-heading">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">Our Team</span>
          <h2
            id="team-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">

            The People Behind ART
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            ART is supported by a growing network of community organizers, farmers, youth leaders, advocates, volunteers, and professionals committed to advancing agroecology, food sovereignty, and community resilience across Africa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10">
          {team?.map((member, i) =>
          <div
            key={member?.name}
            className={`group flex flex-col items-center text-center w-28 sm:w-32 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 80}ms` }}>

            {/* Circular photo */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-muted">
              <AppImage
                src={member?.image}
                alt={member?.imageAlt}
                fill
                className="object-cover"
                sizes="96px" />
            </div>

            <h3 className="font-display text-sm font-semibold text-accent mt-3 leading-tight">
              {member?.name}
            </h3>
            <p className="text-muted-foreground text-[11px] sm:text-xs mt-0.5 leading-tight">
              {member?.role}
            </p>
          </div>
          )}
        </div>
      </div>
    </section>);

}