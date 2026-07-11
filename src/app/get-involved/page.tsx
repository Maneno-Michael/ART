'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GetInvolvedHero from '@/app/get-involved/components/GetInvolvedHero';
import PartnerWithUs from '@/app/get-involved/components/PartnerWithUs';
import VolunteerSection from '@/app/get-involved/components/VolunteerSection';
import DonateTeaser from '@/app/get-involved/components/DonateTeaser';
import NewsletterSection from '@/app/get-involved/components/NewsletterSection';
import GetInvolvedFinalCTA from '@/app/get-involved/components/GetInvolvedFinalCTA';

export default function GetInvolvedPage() {
  return (
    <>
      <Header />
      <main>
        <GetInvolvedHero />
        <PartnerWithUs />
        <VolunteerSection />
        <DonateTeaser />
        <NewsletterSection />
        <GetInvolvedFinalCTA />
      </main>
      <Footer />
    </>
  );
}