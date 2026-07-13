'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'ART Founder',
  role: 'Founder & Executive Director',
  bio: 'Community organizer and agroecology advocate with deep roots in grassroots development across East Africa.',
 image: "/assets/images/found.jpg",
  imageAlt: 'Team member headshot — ART Founder, natural community setting',
  category: 'Leadership'
},
{
  name: 'Programs Lead',
  role: 'Programs & Community Engagement',
  bio: 'Farmer trainer and community mobilizer specializing in agroecological practices and women\'s leadership.',
  image: "/assets/images/found3.jpg",
  imageAlt: 'Team member headshot — Programs Lead, community engagement',
  category: 'Programs'
},
{
  name: 'Communications Officer',
  role: 'Communications & Advocacy',
  bio: 'Storyteller and digital communicator documenting grassroots voices and amplifying community perspectives.',
  image: "/assets/images/found1.jpg",
  imageAlt: 'Team member headshot — Communications Officer, advocacy role',
  category: 'Communications'
},
{
  name: 'Field Coordinator',
  role: 'Field Operations',
  bio: 'On-the-ground coordinator supporting community resilience initiatives and farmer training programs.',
  image: "/assets/images/found2.jpg",
  imageAlt: 'Team member headshot — Field Coordinator, field operations',
  category: 'Programs'
}];


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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team?.map((member, i) =>
          <div
            key={member?.name}
            className={`group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              {/* Arch image */}
              <div className="relative h-56 overflow-hidden" style={{ borderRadius: '200px 200px 0 0' }}>
                <AppImage
                src={member?.image}
                alt={member?.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 640px) 50vw, 25vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5 text-center">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary mb-3 inline-block">
                  {member?.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{member?.name}</h3>
                <p className="text-accent text-xs font-medium mb-3">{member?.role}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{member?.bio}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}