import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AboutHero from '@/app/about/components/AboutHero';
import OurStory from '@/app/about/components/OurStory';
import VisionMission from '@/app/about/components/VisionMission';
import CoreValues from '@/app/about/components/CoreValues';
import OurApproach from '@/app/about/components/OurApproach';
import TeamSection from '@/app/about/components/TeamSection';
import FieldGallery from '@/app/about/components/FieldGallery';
import AboutFinalCTA from '@/app/about/components/AboutFinalCTA';

export const metadata: Metadata = {
  title: 'About ART — African Roots Transformation | Our Story & Mission',
  description: 'Learn about African Roots Transformation (ART) — a Kenya-based nonprofit advancing agroecology, food sovereignty, and social justice through community-led programs across Africa.',
  openGraph: {
    title: 'About African Roots Transformation (ART)',
    description: 'Communities Are Not Beneficiaries. They Are Leaders.',
    images: [{ url: '/assets/images/app_logo.png' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <AboutHero />
        <OurStory />
        <VisionMission />
        <CoreValues />
        <OurApproach />
        <TeamSection />
        <FieldGallery />
        <AboutFinalCTA />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}