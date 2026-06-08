import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesList from '../components/ServicesList';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import MiniCTA from '../components/MiniCTA';

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-white overflow-hidden">
      <ServicesHero />
      <ServicesList />
      <HowItWorks />
      <WhyChooseUs />
      <MiniCTA />
    </main>
  );
}