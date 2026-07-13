import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function GetInvolvedHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <AppImage
          src="/assets/images/team.jpg"
          alt="Volunteers and community organizers working alongside farmers in field training session, shadowed atmospheric environment with warm amber light accents"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.5) 45%, rgba(26,26,46,0.15) 100%)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
            <span className="section-label text-secondary">Join the Movement</span>
          </div>
          <h1 className="text-hero-xl font-extrabold text-primary-foreground mb-5">
            There Is a Place for You in This Movement
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mb-8">
            Community transformation requires collaboration, resources, skills, and shared commitment. Whether you are an organization, volunteer, donor, researcher, or advocate, your contribution can help strengthen grassroots solutions across Africa.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Partner With Us', 'Volunteer', 'Donate', 'Stay Connected']?.map((action, i) => (
              <div key={action} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Icon name="CheckCircleIcon" size={14} className="text-secondary" />
                <span className="text-sm font-semibold text-primary-foreground">{action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#F5F0E8" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}