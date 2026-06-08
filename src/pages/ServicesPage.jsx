import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesList from '../components/ServicesList';

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-white overflow-hidden">
      <ServicesHero />
      <ServicesList />
    </main>
  );
}