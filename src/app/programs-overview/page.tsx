'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsHero from '@/app/programs-overview/components/ProgramsHero';
import ProgramsGrid from '@/app/programs-overview/components/ProgramsGrid';
import ProgramsApproach from '@/app/programs-overview/components/ProgramsApproach';
import ProgramsCTA from '@/app/programs-overview/components/ProgramsCTA';

export default function ProgramsOverviewPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramsHero />
        <ProgramsGrid />
        <ProgramsApproach />
        <ProgramsCTA />
      </main>
      <Footer />
    </>
  );
}