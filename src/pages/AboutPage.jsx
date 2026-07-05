import React from 'react';

import AboutSnippet from '../components/AboutSnippet';
import BrandStory from '../components/BrandStory';
import MissionVision from '../components/MissionVision';
import TeamGrid from '../components/TeamGrid';
import AboutHero from '../components/AboutHero'; 

// 1. Import all local images here
import teamImg1 from '../assets/krossover_team.JPG';
import teamImg2 from '../assets/krossover_team2.JPG';
import teamImg3 from '../assets/krossover_team3.JPG';
import teamImg4 from '../assets/krossover_team4.JPG';
import teamImg5 from '../assets/krossover_team5.JPG';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <AboutHero /> 
      
      <AboutSnippet />

      {/* 1. Large feature image right before Brand Story (as originally requested) */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* 2. Use the imported variable */}
        <img 
          src={teamImg1} 
          alt="Krossover Team Picture" 
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
        />
      </section>

      <BrandStory />

      {/* 2. A nice 3-column photo grid to show off the fleet/services before Mission & Vision */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <img 
          src={teamImg2} 
          alt="Krossover Team 2" 
          className="w-full h-64 object-cover rounded-xl shadow-md hover:opacity-90 transition-opacity" 
        />
        <img 
          src={teamImg3} 
          alt="Krossover Team 3" 
          className="w-full h-64 object-cover rounded-xl shadow-md hover:opacity-90 transition-opacity" 
        />
        <img 
          src={teamImg4} 
          alt="Krossover team 4" 
          className="w-full h-64 object-cover rounded-xl shadow-md hover:opacity-90 transition-opacity" 
        />
      </section>

      <MissionVision />

      {/* 3. A final wide shot (maybe office or depot) right before introducing the team */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12">
        <img 
          src={teamImg5} 
          alt="Krossover team 5" 
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
        />
      </section>

      <TeamGrid />
    </main>
  );
}