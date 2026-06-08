import React from 'react';

import AboutSnippet from '../components/AboutSnippet';
import BrandStory from '../components/BrandStory';
import MissionVision from '../components/MissionVision';
import TeamGrid from '../components/TeamGrid';
import AboutHero from '../components/AboutHero'; 

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <AboutHero /> 
      <AboutSnippet />
      <BrandStory />
      <MissionVision />
      <TeamGrid />
    </main>
  );
}