import React from 'react';
import { Crown, Heart, Youtube, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { METADATA } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080205] border-t-2 border-haveli-gold/40 text-haveli-sandstoneLight/80 font-dmsans text-xs overflow-hidden">
      
      {/* Top Sandstone Carved Ribbon */}
      <div className="w-full h-3 bg-gradient-to-r from-haveli-maroon via-haveli-gold to-haveli-maroon opacity-80" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column: Branding & Author */}
        <div className="md:col-span-6 space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-haveli-maroon border border-haveli-gold flex items-center justify-center shadow-gold-glow">
              <span className="font-cinzel font-black text-base text-gold-gradient">RR</span>
            </div>
            <div>
              <span className="font-cinzel font-black text-base text-white tracking-widest block">
                RAJASTHAN ROYALS
              </span>
              <span className="text-[9px] font-cinzel text-haveli-gold tracking-[0.25em] uppercase">
                SupeRR Selector 2025/2026
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 max-w-md leading-relaxed font-dmsans">
            Official Round 1 Submission: Quantitative Pressure Performance Index (PPI) modeling and high-stakes cricket talent discovery based on 200,999 deliveries.
          </p>
          <div className="text-haveli-sandstoneLight font-cinzel text-xs pt-1">
            Crafted by <strong className="text-white">Aabhay Ranjan Pandey</strong> • Creative Technologist & Sports Data Analyst
          </div>
        </div>

        {/* Right Column: Data Pack Validation & Halla Bol */}
        <div className="md:col-span-6 text-center md:text-right space-y-2">
          <div className="inline-block px-3.5 py-1 rounded-full bg-haveli-dark text-haveli-gold border border-haveli-borderGold font-cinzel uppercase tracking-widest text-[11px] font-bold">
            Data Source: Official RR 200k Data Pack
          </div>
          <div className="text-slate-400 text-xs font-mono">
            Modeled 200,999 deliveries across 867 matches (2022 to 2026)
          </div>
          <div className="text-haveli-gold font-cinzel text-sm font-bold pt-2 tracking-[0.2em]">
            — 👑 HALLA BOL 👑 —
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-haveli-borderGold/60 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © {new Date().getFullYear()} SupeRR Selector Submission. Conceptualized for the Rajasthan Royals Analytics Lab.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-haveli-sandstoneLight hover:text-haveli-gold transition-colors cursor-pointer"
        >
          <span className="font-cinzel">Back to Palace Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-haveli-gold" />
        </button>
      </div>
    </footer>
  );
}
