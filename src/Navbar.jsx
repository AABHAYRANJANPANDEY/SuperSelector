import React, { useState } from 'react';
import { Crown, Sparkles, Volume2, VolumeX, Shield, ArrowRight, Menu, X } from 'lucide-react';
import { METADATA } from '../data';

export default function Navbar({ onNavigate, activeSection = 'hero' }) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: '01 // Index' },
    { id: 'methodology', label: '02 // Methodology' },
    { id: 'matrix', label: '03 // Scatter Matrix' },
    { id: 'leaderboard', label: '04 // Top 10 Roster' },
    { id: 'deepdive', label: '05 // Scout Dossiers' },
    { id: 'squad-fit', label: '06 // RR Blueprint' },
  ];

  const handleNavClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const playTacticalClick = () => {
    if (!audioEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch (e) { }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0D0408]/85 border-b border-haveli-borderGold transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">

        {/* Brand / Logo: Rajasthan Royals Crown + SupeRR Selector */}
        <div
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Ornate Gold Crown & Monogram Emblem */}
          <div className="relative flex flex-col items-center">
            <Crown className="w-5 h-5 text-haveli-gold animate-pulse drop-shadow-md" />
            <div className="font-cinzel font-black text-xl tracking-tighter text-gold-gradient leading-none">
              RR
            </div>
            <div className="text-[7px] font-cinzel font-bold tracking-[0.25em] text-haveli-sandstoneLight uppercase mt-0.5">
              ROYALS
            </div>
          </div>

          <div className="border-l border-haveli-borderGold pl-3">
            <div className="flex items-center gap-2">
              <span className="font-cinzel font-black tracking-wider text-sm sm:text-base text-white">
                RAJASTHAN ROYALS
              </span>
              <span className="text-[9px] uppercase font-cinzel px-2 py-0.5 rounded-full bg-haveli-gold text-slate-950 font-black tracking-widest hidden sm:inline-block shadow-sm">
                SupeRR Selector
              </span>
            </div>
            <p className="text-[11px] text-haveli-sandstoneLight/80 font-dmsans flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Round 1 Entry • Analyst: <strong className="text-white">Aabhay Ranjan Pandey</strong>
            </p>
          </div>
        </div>

        {/* Center Nav Container Pill in Royal Haveli Styling */}
        <nav className="hidden lg:flex items-center bg-haveli-maroon/80 border border-haveli-borderGold rounded-full px-4 py-1.5 shadow-haveli-card">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { playTacticalClick(); handleNavClick(link.id); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-cinzel tracking-wider font-semibold transition-all ${activeSection === link.id
                  ? 'bg-gradient-to-r from-haveli-gold to-haveli-goldDark text-slate-950 shadow-gold-glow font-bold'
                  : 'text-haveli-sandstoneLight hover:text-haveli-gold hover:bg-haveli-maroonLight/60'
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            title={audioEnabled ? "Tactical Audio On" : "Tactical Audio Off"}
            className={`p-2 rounded-xl border transition-all text-xs font-mono flex items-center gap-1.5 ${audioEnabled
                ? 'bg-haveli-maroon border-haveli-gold text-haveli-gold shadow-gold-glow'
                : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
              }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 animate-pulse text-haveli-gold" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden xl:inline text-[11px] font-cinzel">{audioEnabled ? "SFX ACTIVE" : "SFX MUTE"}</span>
          </button>

          <button
            onClick={() => handleNavClick('leaderboard')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-haveli-gold via-haveli-sandstoneLight to-haveli-gold text-slate-950 font-cinzel text-xs uppercase tracking-wider font-extrabold shadow-gold-glow hover:scale-105 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Top 10 Picks</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-haveli-borderGold bg-haveli-maroon text-haveli-gold"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden haveli-card border-b border-haveli-gold px-6 py-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-cinzel font-bold text-left bg-haveli-maroon border border-haveli-borderGold text-haveli-sandstoneLight hover:text-haveli-gold"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
