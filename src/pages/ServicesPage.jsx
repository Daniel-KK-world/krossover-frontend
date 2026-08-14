// src/pages/ServicesPage.jsx

import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesPreview from '../components/ServicesPreview'; // ← CHANGE: Import ServicesPreview instead of ServicesList
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import MiniCTA from '../components/MiniCTA';

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-white overflow-hidden">
      <ServicesHero />
      <ServicesPreview /> {/* ← CHANGE: Use ServicesPreview here too */}
      <HowItWorks />
      <WhyChooseUs />
      <MiniCTA />
    </main>
  );
}