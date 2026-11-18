import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Crown,
  Sparkles,
  Database,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Activity,
  Flame,
  Shield,
  MapPin,
  Compass,
  Trophy,
  Layers
} from 'lucide-react';
import { METADATA, TOP_10_PLAYERS } from '../data';

// Majestic Rajasthani Forts & Fortress SMS Cricket Stadium Vistas
const HERO_VISTAS = [
  {
    id: 'amber-fort',
    name: 'Amber Palace & Royal Citadel',
    shortName: 'Amber Fort',
    tag: 'THE ROYAL CITADEL',
    badge: 'JAIPUR, RAJASTHAN',
    subtitle: 'The monumental 16th-century golden sandstone bastion overlooking Maota Lake',
    metric: 'Imperial Seat of Rajput Royalty • Amer',
    image: '/images/fort_amber.jpg',
    type: 'Royal Fortress',
    icon: '🏰',
    coordinates: '26.9855° N, 75.8513° E',
    quote: '"Unvanquished Bastion of Rajasthani Heritage & Valor."'
  },
  {
    id: 'sms-stadium',
    name: 'Fortress SMS (Sawai Mansingh Stadium)',
    shortName: 'SMS Stadium',
    tag: 'ROYALS HOME OF CRICKET',
    badge: 'FORTRESS SMS • JAIPUR',
    subtitle: 'The electric floodlit colosseum where 200,999 pressure deliveries were contested',
    metric: '30,000 Capacity • Rajasthan Royals Home Ground',
    image: '/images/stadium_arena_night.jpg',
    type: 'Cricket Stadium',
    icon: '🏟️',
    coordinates: '26.8924° N, 75.8037° E',
    quote: '"Where the Halla Bol Roar Pierces the Twilight Sky."'
  },
  {
    id: 'mehrangarh-fort',
    name: 'Mehrangarh Fortress',
    shortName: 'Mehrangarh',
    tag: 'IMPREGNABLE CLIFF CITADEL',
    badge: 'JODHPUR, RAJASTHAN',
    subtitle: 'Perched 400 feet above the desert plains, symbolizing unshakeable defense',
    metric: 'Perched 400 Ft Above Jodhpur • Founded 1459',
    image: '/images/fort_mehrangarh.jpg',
    type: 'Royal Fortress',
    icon: '⚔️',
    coordinates: '26.2980° N, 73.0188° E',
    quote: '"A Work of Giants — Towering Sentinel of Rajasthan."'
  }
];

export default function HeroSection({ onNavigate, onSelectPlayer }) {
  const [activeVistaId, setActiveVistaId] = useState('amber-fort');
  const [carouselIdx, setCarouselIdx] = useState(0);

  const activeVista = HERO_VISTAS.find(v => v.id === activeVistaId) || HERO_VISTAS[0];

  const visibleCount = 4;
  const currentTopSlice = TOP_10_PLAYERS.slice(carouselIdx, carouselIdx + visibleCount);

  const nextSlide = () => {
    setCarouselIdx((prev) => (prev + 1 >= TOP_10_PLAYERS.length - visibleCount + 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIdx((prev) => (prev - 1 < 0 ? TOP_10_PLAYERS.length - visibleCount : prev - 1));
  };

  return (
    <section id="hero" className="relative min-h-screen w-full pt-24 pb-10 flex flex-col justify-between overflow-hidden bg-[#0A0507]">

      {/* 1. Dramatic Background Layer (Amber Fort + Stadium Floodlights + Pink Twilight Dusk) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#240412] via-[#460924] to-[#11030B] opacity-95" />
        <div className="absolute left-0 bottom-1/4 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-600/20 via-pink-700/15 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/4 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-haveli-pink/25 via-purple-900/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-jaali-pattern opacity-35 pointer-events-none" />
      </div>

      {/* 2. Top-Framing Rajput Jharokha Cusped Multi-foil Arch SVG */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none w-full">
        <svg
          viewBox="0 0 1440 250"
          className="w-full h-auto max-h-[160px] sm:max-h-[220px] drop-shadow-2xl"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroSandstone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A5A35" />
              <stop offset="40%" stopColor="#C89D76" />
              <stop offset="60%" stopColor="#E8C39E" />
              <stop offset="100%" stopColor="#6E4424" />
            </linearGradient>
            <linearGradient id="heroGoldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF1C5" />
              <stop offset="100%" stopColor="#AA7C11" />
            </linearGradient>
          </defs>

          {/* Left Column Bracket */}
          <path d="M0 0 L150 0 C135 60 115 120 95 180 C80 220 75 250 65 250 L0 250 Z" fill="url(#heroSandstone)" />
          {/* Right Column Bracket */}
          <path d="M1440 0 L1290 0 C1305 60 1325 120 1345 180 C1360 220 1365 250 1375 250 L1440 250 Z" fill="url(#heroSandstone)" />

          {/* Multi-foil Cusped Rajput Arch */}
          <path
            d="M 95 0 
               C 180 50, 260 85, 360 90 
               C 420 95, 460 70, 520 90 
               C 580 110, 640 85, 720 50 
               C 800 85, 860 110, 920 90 
               C 980 70, 1020 95, 1080 90 
               C 1180 85, 1260 50, 1345 0 
               L 1440 0 L 1440 30 L 0 30 L 0 0 Z"
            fill="url(#heroSandstone)"
            stroke="url(#heroGoldTrim)"
            strokeWidth="3.5"
          />

          {/* Golden Medallion Crest in Arch Center */}
          <circle cx="720" cy="40" r="15" fill="#200410" stroke="url(#heroGoldTrim)" strokeWidth="2.5" />
          <polygon points="720,31 724,37 732,37 726,43 728,50 720,46 712,50 714,43 708,37 716,37" fill="url(#heroGoldTrim)" />
        </svg>
      </div>

      {/* 3. Left Sandstone Pilaster & Cascading Bougainvillea Foliage (Bottom-Left) */}
      <div className="absolute left-0 bottom-12 z-30 pointer-events-none hidden sm:block">
        <svg width="200" height="260" viewBox="0 0 200 260" fill="none">
          <path d="M 0 50 L 55 50 C 45 110, 45 190, 50 260 L 0 260 Z" fill="#7A4E2B" opacity="0.9" />
          <g filter="drop-shadow(0 4px 10px rgba(0,0,0,0.5))">
            <path d="M 10 110 C 30 100, 50 130, 35 150 Z" fill="#1C381E" />
            <path d="M 30 150 C 60 140, 75 180, 50 200 Z" fill="#2D5430" />
            <circle cx="26" cy="125" r="13" fill="#EB1460" />
            <circle cx="36" cy="132" r="11" fill="#FF2A7B" />
            <circle cx="52" cy="170" r="15" fill="#FF2A7B" />
            <circle cx="65" cy="180" r="13" fill="#EB1460" />
            <circle cx="32" cy="225" r="17" fill="#EB1460" />
            <circle cx="48" cy="232" r="14" fill="#FF2A7B" />
          </g>
        </svg>
      </div>

      {/* 4. Main Hero Stage (Typography + Royal Fortress & Cricket Stadium Visual Centerpiece) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-center lg:text-left pt-2 lg:pt-8"
          >
            {/* Franchise Winged Header */}
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-haveli-gold" />
              <span className="text-xs sm:text-sm font-cinzel font-bold tracking-[0.25em] text-haveli-gold uppercase">
                RAJASTHAN ROYALS // SUPERR SELECTOR
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-haveli-gold" />
            </div>

            {/* Headline matching Reference Image: A LEGACY OF ROYALTY */}
            <h1 className="font-cinzel font-black tracking-tight leading-[1.05] mb-2">
              <span className="block text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold drop-shadow-lg">
                A LEGACY OF
              </span>
              <span className="block text-5xl sm:text-7xl lg:text-8xl text-gold-gradient font-black drop-shadow-2xl">
                ROYALTY
              </span>
            </h1>

            {/* Core Project Title */}
            <div className="text-sm sm:text-lg font-cinzel font-bold text-white tracking-wider uppercase mb-1">
              The Pressure Performance Index
            </div>

            {/* Subtitle in Cormorant Garamond */}
            <div className="font-cormorant italic font-semibold text-lg sm:text-2xl text-haveli-sandstoneLight/90 tracking-wide mb-6">
              — A Data-Driven Talent Discovery by <span className="text-white underline decoration-haveli-gold underline-offset-4 font-bold">Aabhay Ranjan Pandey</span> —
            </div>

            <p className="text-xs sm:text-sm font-dmsans text-slate-300 max-w-xl leading-relaxed mb-8">
              Isolating genuine ice-cold performers under maximum leverage. Evaluated across <strong>200,999 deliveries</strong> and <strong>867 matches</strong> from the official Rajasthan Royals data pack to identify the Top 10 match-winners when the game is on the line.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#leaderboard"
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('leaderboard'); }}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#8A5A35] via-[#C89D76] to-[#8A5A35] text-slate-950 font-cinzel text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 border border-haveli-goldLight"
              >
                <Crown className="w-4 h-4 text-slate-950" />
                <span>Inspect Top 10 Picks</span>
                <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#methodology"
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('methodology'); }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-haveli-maroon/80 border border-haveli-borderGold text-haveli-gold hover:text-white font-cinzel text-xs font-bold uppercase tracking-wider transition-all hover:bg-haveli-maroon"
              >
                <Activity className="w-3.5 h-3.5 text-haveli-gold" />
                <span>Analytical Framework</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Eye-Catching Rajasthani Fort & Fortress SMS Cricket Stadium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="lg:col-span-7 relative flex flex-col items-center justify-center"
          >
            {/* Halo Rings & Stadium Floodlight Beams */}
            <div className="absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full border-2 border-haveli-gold/30 bg-radial-gradient from-haveli-pink/30 via-haveli-maroon/40 to-transparent blur-md pointer-events-none" />
            <div className="absolute w-[290px] sm:w-[440px] h-[290px] sm:h-[440px] rounded-full border border-haveli-gold/50 border-dashed animate-spin-slow pointer-events-none opacity-30" />

            {/* Interactive Vista Switcher Tabs */}
            <div className="relative z-30 mb-3 flex items-center justify-center p-1.5 rounded-2xl bg-[#14050d]/90 border border-haveli-gold/40 shadow-xl backdrop-blur-md">
              {HERO_VISTAS.map((vista) => {
                const isActive = vista.id === activeVistaId;
                return (
                  <button
                    key={vista.id}
                    onClick={() => setActiveVistaId(vista.id)}
                    className={`relative px-3.5 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs font-cinzel font-bold transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-haveli-gold to-haveli-goldDark text-slate-950 shadow-gold-glow scale-105'
                        : 'text-haveli-sandstoneLight hover:text-white hover:bg-haveli-maroon/50'
                    }`}
                  >
                    <span>{vista.icon}</span>
                    <span className="hidden sm:inline">{vista.name}</span>
                    <span className="sm:hidden">{vista.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Grand Rajput Jharokha Cusped Architectural Frame */}
            <div className="relative z-10 w-full max-w-2xl rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#8A5A35] via-[#2B0413] to-[#0A0507] border-2 border-haveli-gold shadow-2xl shadow-black/80">
              
              {/* Inner Carved Filigree Border */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden border border-haveli-gold/60 haveli-card group">

                {/* Animated Cross-fading Image Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVista.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeVista.image}
                      alt={activeVista.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Atmospheric Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-[#0A0507]/40 to-[#2B0413]/30 pointer-events-none" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2B0413]/20 to-black/70 pointer-events-none" />

                {/* Top Corner Rajput Arched Finials */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-haveli-maroon/90 border border-haveli-gold/60 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <Crown className="w-3.5 h-3.5 text-haveli-gold animate-pulse" />
                    <span className="font-cinzel text-[10px] sm:text-xs font-bold text-haveli-gold uppercase tracking-wider">
                      {activeVista.tag}
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-[#0c0409]/90 border border-haveli-borderGold backdrop-blur-md flex items-center gap-1 text-[10px] font-mono text-slate-300">
                    <MapPin className="w-3 h-3 text-haveli-pink" />
                    <span>{activeVista.coordinates}</span>
                  </div>
                </div>

                {/* Center Stadium Floodlight Beam Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-full bg-gradient-to-b from-amber-300/10 via-haveli-pink/10 to-transparent blur-2xl pointer-events-none" />

                {/* Bottom Architectural Telemetry Panel */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 bg-gradient-to-t from-[#0A0507] via-[#0A0507]/90 to-transparent">
                  <div className="flex flex-col gap-1.5">
                    
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg">{activeVista.icon}</span>
                      <h3 className="font-cinzel font-black text-lg sm:text-2xl md:text-3xl text-white tracking-wide drop-shadow-md">
                        {activeVista.name}
                      </h3>
                    </div>

                    <p className="font-dmsans text-xs sm:text-sm text-slate-300 max-w-xl leading-snug line-clamp-2">
                      {activeVista.subtitle}
                    </p>

                    {/* Stats Ribbon Bar */}
                    <div className="pt-2 mt-1 border-t border-haveli-gold/30 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-mono text-[10px] sm:text-xs text-haveli-sandstoneLight font-semibold">
                          {activeVista.metric}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-haveli-maroon border border-haveli-gold/40 text-[9px] sm:text-[10px] font-cinzel text-haveli-gold font-bold uppercase tracking-wider">
                          Official RR Data Pack Anchor
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Lower Thumbnail Switcher Ribbon */}
              <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between gap-2 bg-[#0c0409]/80 rounded-xl border border-haveli-borderGold">
                <span className="text-[10px] font-cinzel text-haveli-gold uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Rajasthan Royal Vistas:</span>
                </span>

                <div className="flex items-center gap-2">
                  {HERO_VISTAS.map((vista) => (
                    <button
                      key={vista.id}
                      onClick={() => setActiveVistaId(vista.id)}
                      className={`group relative w-16 sm:w-20 h-8 sm:h-9 rounded-lg overflow-hidden border transition-all duration-300 ${
                        activeVistaId === vista.id
                          ? 'border-2 border-haveli-gold scale-105 shadow-gold-glow'
                          : 'border-haveli-borderGold opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={vista.image}
                        alt={vista.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* 5. Lower Floating Glassmorphic Cards (The Three Modules from Reference Image) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Card 1: OFFICIAL DATA PACK SCOPE (Left Column - 4 cols) */}
          <div className="md:col-span-5 lg:col-span-4 haveli-card p-5 rounded-2xl border-haveli-gold/40 relative overflow-hidden group">
            <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-haveli-borderGold">
              <Database className="w-4 h-4 text-haveli-gold" />
              <span className="font-cinzel text-xs font-bold tracking-widest text-haveli-gold uppercase">
                RR DATA PACK METRICS
              </span>
            </div>

            <div className="space-y-2 mb-3 font-dmsans text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Total Deliveries Modeled:</span>
                <span className="text-white font-cinzel font-bold text-sm text-gold-gradient">
                  {METADATA.deliveriesAnalyzed}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Tournament Matches:</span>
                <span className="text-white font-cinzel font-bold">{METADATA.matchesAnalyzed}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">League Par Death Econ:</span>
                <span className="text-cyan-300 font-mono font-bold">{METADATA.leaguePressureEconBenchmark}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-haveli-borderGold/60 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">2022 to 2026 Ingested</span>
              <button
                onClick={() => onNavigate && onNavigate('matrix')}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-haveli-gold to-haveli-goldDark text-slate-950 font-cinzel text-[11px] font-bold tracking-wider hover:scale-105 transition-transform flex items-center gap-1 shadow-gold-glow"
              >
                <span>Inspect Scatter</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: THE TOP 10 COHORT (Center Column - 4 cols) */}
          <div className="md:col-span-7 lg:col-span-4 haveli-card p-5 rounded-2xl border-haveli-gold/40 relative overflow-hidden">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-haveli-borderGold">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-haveli-gold" />
                <span className="font-cinzel text-xs font-bold tracking-widest text-haveli-gold uppercase">
                  THE TOP 10 COHORT
                </span>
              </div>

              {/* Slider Chevrons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={prevSlide}
                  className="p-1 rounded-full bg-haveli-maroon border border-haveli-borderGold text-haveli-gold hover:text-white"
                  title="Previous players"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1 rounded-full bg-haveli-maroon border border-haveli-borderGold text-haveli-gold hover:text-white"
                  title="Next players"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Elegant Royal Player Badges (No Placeholder Human Photos) */}
            <div className="grid grid-cols-4 gap-2 mb-2">
              {currentTopSlice.map((player) => {
                const initials = player.name
                  .split(' ')
                  .map(part => part[0])
                  .join('')
                  .slice(0, 2);
                const roleIcon = player.roleCategory === 'Batter' ? '🏏' : player.roleCategory === 'Bowler' ? '🎯' : '⚡';

                return (
                  <div
                    key={player.id}
                    onClick={() => {
                      onSelectPlayer && onSelectPlayer(player.id);
                      onNavigate && onNavigate('deepdive');
                    }}
                    className="group cursor-pointer flex flex-col items-center"
                  >
                    <div className="w-12 sm:w-14 h-14 sm:h-16 rounded-xl border border-haveli-gold/60 group-hover:border-haveli-gold relative transition-all duration-300 group-hover:scale-105 shadow-md bg-gradient-to-br from-[#2B0413] via-[#14050d] to-[#3a081e] flex flex-col items-center justify-center p-1 overflow-hidden">
                      {/* Top Rank Badge */}
                      <div className="absolute top-1 left-1 px-1 rounded bg-haveli-gold text-slate-950 font-cinzel font-black text-[8px]">
                        #{player.rank}
                      </div>

                      {/* Role Icon */}
                      <div className="text-xs sm:text-sm mb-0.5 mt-2">
                        {roleIcon}
                      </div>

                      {/* Player Initials */}
                      <span className="font-cinzel font-black text-xs text-gold-gradient tracking-wider">
                        {initials}
                      </span>

                      {/* PPI Score */}
                      <span className="text-[8px] font-mono text-emerald-300 font-bold">
                        {player.ppiScore}
                      </span>
                    </div>

                    <span className="text-[9px] font-cinzel font-semibold text-slate-300 group-hover:text-haveli-gold truncate max-w-[55px] mt-1 text-center">
                      {player.name.split(' ')[player.name.split(' ').length - 1]}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="text-right pt-1.5 border-t border-haveli-borderGold/60">
              <button
                onClick={() => onNavigate && onNavigate('leaderboard')}
                className="text-[10px] font-cinzel text-haveli-sandstoneLight hover:text-haveli-gold inline-flex items-center gap-1"
              >
                <span>View Full Top 10 Roster</span>
                <ArrowRight className="w-3 h-3 text-haveli-gold" />
              </button>
            </div>
          </div>

          {/* Card 3: OUR HERITAGE & METHODOLOGY (Right Column - 4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 haveli-card p-5 rounded-2xl border-haveli-gold/40 relative overflow-hidden group">
            <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-haveli-borderGold">
              <Shield className="w-4 h-4 text-haveli-gold" />
              <span className="font-cinzel text-xs font-bold tracking-widest text-haveli-gold uppercase">
                THE CLUTCH PHILOSOPHY
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-haveli-gold/50 flex-shrink-0 shadow-lg">
                <img
                  src="/images/fort_amber.jpg"
                  alt="Jaipur Palace Amber"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div>
                <p className="font-cinzel text-xs sm:text-sm font-bold text-white leading-snug mb-2">
                  "Championships Are Won in the 8% High-Leverage Margins."
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('methodology')}
                  className="text-xs font-cinzel text-haveli-gold hover:text-white inline-flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Formulation</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 6. Bottom Balustrade & Ticker Bar */}
      <div className="relative z-30 w-full mt-8 pt-4 pb-2 border-t border-haveli-gold/30 bg-[#090306]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">

          <div className="flex items-center gap-2 text-xs font-dmsans">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EB1460] animate-ping" />
            <span className="px-2 py-0.5 rounded-md bg-haveli-pink/20 text-haveli-pink font-mono text-[10px] font-bold uppercase tracking-wider border border-haveli-pink/40">
              OFFICIAL ENTRY
            </span>
            <span className="text-slate-300 font-medium">
              200,999 Deliveries Processed • <strong className="text-haveli-sandstoneLight">Analyst: Aabhay Ranjan Pandey</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-haveli-gold" />
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-haveli-gold" />
              <span className="font-cinzel font-black text-sm sm:text-base tracking-[0.35em] text-gold-gradient uppercase">
                HALLA BOL
              </span>
              <Crown className="w-4 h-4 text-haveli-gold" />
            </div>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-haveli-gold" />
          </div>

        </div>
      </div>

    </section>
  );
}
