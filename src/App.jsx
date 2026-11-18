import React, { useState } from 'react';
import FloatingPetals from './components/FloatingPetals';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MethodologySection from './components/MethodologySection';
import LeaderboardSection from './components/LeaderboardSection';
import DeepDiveSection from './components/DeepDiveSection';
import StrategicFitSection from './components/StrategicFitSection';
import Footer from './components/Footer';
import { TOP_10_PLAYERS } from './data';

export default function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(TOP_10_PLAYERS[0].id);
  const [activeSection, setActiveSection] = useState('hero');

  const handleSelectPlayer = (id) => {
    setSelectedPlayerId(id);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0507] text-[#F7EEE4] font-dmsans overflow-x-hidden selection:bg-[#EB1460] selection:text-white">
      
      {/* Floating Ambient Rose Petals */}
      <FloatingPetals count={22} />

      {/* Royal Haveli Navigation Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Scrollytelling Sections */}
      <main className="relative z-10 space-y-6 sm:space-y-12">
        
        {/* 01. The Hero Hook (100vh Neo-Rajasthan × Royal Haveli) */}
        <HeroSection
          onNavigate={handleNavigate}
          onSelectPlayer={handleSelectPlayer}
        />

        {/* 02. Methodology (Scroll Reveal & Algorithmic Formulation) */}
        <MethodologySection />

        {/* 03. Scatter Plot Matrix & Top 10 Leaderboard (200,999 Deliveries Modeled) */}
        <LeaderboardSection
          selectedPlayerId={selectedPlayerId}
          onSelectPlayer={handleSelectPlayer}
        />

        {/* 04. Deep Dive Interactive Radar Profiling & Scout Rationale */}
        <DeepDiveSection
          selectedPlayerId={selectedPlayerId}
          onSelectPlayer={handleSelectPlayer}
        />

        {/* 05. Franchise Roster Blueprint (Solving RR's Strategic Gaps) */}
        <StrategicFitSection onNavigate={handleNavigate} />

      </main>

      {/* 06. Haveli Palace Footer */}
      <Footer />

    </div>
  );
}
