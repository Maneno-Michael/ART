import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import DonateHero from '@/app/donate/components/DonateHero';
import DonationForm from '@/app/donate/components/DonationForm';
import DonationImpactCards from '@/app/donate/components/DonationImpactCards';
import FundAllocation from '@/app/donate/components/FundAllocation';
import TrustSignals from '@/app/donate/components/TrustSignals';
import DonateFAQ from '@/app/donate/components/DonateFAQ';
import DonateFinalCTA from '@/app/donate/components/DonateFinalCTA';

export const metadata: Metadata = {
  title: 'Donate — Support African Roots Transformation (ART)',
  description: 'Your donation supports grassroots agroecology, women\'s land rights, youth leadership, and community resilience programs across Africa. Donate to ART today.',
  openGraph: {
    title: 'Donate to African Roots Transformation (ART)',
    description: 'Support Community-Led Solutions Across Africa.',
    images: [{ url: '/assets/images/app_logo.png' }],
  },
};

export default function DonatePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DonateHero />
        <DonationForm />
        {/* <DonationImpactCards /> */}
        <FundAllocation />
        <TrustSignals />
        <DonateFAQ />
        <DonateFinalCTA />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}