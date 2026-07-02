import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import HeroSection from '@/app/components/HeroSection';
import ImpactStrip from '@/app/components/ImpactStrip';
import ProgramsSection from '@/app/components/ProgramsSection';
import WhyItMattersSection from '@/app/components/WhyItMattersSection';
import ActiveProjectsSection from '@/app/components/ActiveProjectsSection';
import DonationImpactSection from '@/app/components/DonationImpactSection';
import PartnerSection from '@/app/components/PartnerSection';
import FinalCTASection from '@/app/components/FinalCTASection';

export const metadata: Metadata = {
  title: 'African Roots Transformation — Agroecology & Community Resilience in Africa',
  description: 'ART works alongside smallholder farmers, women, and youth to strengthen food systems, restore soil health, and build climate-resilient communities across Africa.',
  openGraph: {
    title: 'African Roots Transformation (ART)',
    description: 'Advancing Agroecology and Community Resilience Across Africa.',
    images: [{ url: '/assets/images/app_logo.png' }],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ImpactStrip />
        <ProgramsSection />
        <WhyItMattersSection />
        <ActiveProjectsSection />
        <DonationImpactSection />
        <PartnerSection />
        <FinalCTASection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}