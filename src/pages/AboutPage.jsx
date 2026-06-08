import React from 'react';

import AboutSnippet from '../components/AboutSnippet';
import BrandStory from '../components/BrandStory';
import MissionVision from '../components/MissionVision';
import TeamGrid from '../components/TeamGrid';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <AboutSnippet />
      <BrandStory />
      <MissionVision />
      <TeamGrid />
    </main>
  );
}