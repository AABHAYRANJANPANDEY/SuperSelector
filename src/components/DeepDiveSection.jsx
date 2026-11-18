import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip
} from 'recharts';
import {
  Crown,
  Shield,
  Target,
  FileText,
  Copy,
  Check,
  Flame,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { TOP_10_PLAYERS } from '../data';

// Custom Tooltip for Radar Chart in Royal Haveli Aesthetic
const RadarTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="haveli-card p-3 rounded-xl border border-haveli-gold text-xs font-mono shadow-gold-glow">
        <span className="font-cinzel text-white font-bold block mb-1">{payload[0]?.payload?.subject}</span>
        <div className="space-y-0.5">
          <div className="text-haveli-gold">
            Player Metric: <span className="font-bold">{payload[0]?.value}/100</span>
          </div>
          {payload[1] && (
            <div className="text-slate-400">
              IPL Benchmark: <span className="font-bold">{payload[1]?.value}/100</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default function DeepDiveSection({ selectedPlayerId, onSelectPlayer }) {
  const [copied, setCopied] = useState(false);

  const activePlayer = TOP_10_PLAYERS.find(p => p.id === selectedPlayerId) || TOP_10_PLAYERS[0];

  const handleCopyDossier = () => {
    const text = `RAJASTHAN ROYALS // SUPERR SELECTOR DOSSIER
Player: ${activePlayer.name} (${activePlayer.team} | ${activePlayer.country})
Role: ${activePlayer.role}
PPI Score: ${activePlayer.ppiScore} (Rank #${activePlayer.rank})
Clutch Highlight: ${activePlayer.clutchStatHighlight}
Scout Rationale: ${activePlayer.scoutRationale}
RR Tactical Fit: ${activePlayer.tacticalFitRR}
Case Study: ${activePlayer.clutchCaseStudy}
Analyst: Aabhay Ranjan Pandey`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="deepdive" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-haveli-maroon/90 border border-haveli-gold/40 text-haveli-gold font-cinzel text-xs uppercase tracking-widest mb-3 shadow-gold-glow">
          <Target className="w-3.5 h-3.5 text-haveli-gold" />
          <span>Section 05 // Deep Dive & Radar Profiling</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Royals Scouting Dossier: <span className="text-gold-gradient">{activePlayer.name}</span>
        </h2>
        <p className="font-dmsans text-haveli-sandstoneLight/80 text-sm sm:text-base leading-relaxed">
          Multi-dimensional radar analysis across six critical pressure vectors. Compare micro-stats against the IPL tournament baseline and review the quantitative scouting rationale for Rajasthan Royals recruitment.
        </p>
      </div>

      {/* Quick Player Switcher Ribbon */}
      <div className="haveli-card p-2.5 rounded-2xl mb-8 flex items-center gap-2 overflow-x-auto scrollbar-none border border-haveli-gold/40">
        {TOP_10_PLAYERS.map(p => {
          const isActive = p.id === activePlayer.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectPlayer(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-cinzel whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-haveli-gold to-haveli-goldDark text-slate-950 font-black shadow-gold-glow'
                  : 'bg-haveli-dark/80 text-haveli-sandstoneLight hover:text-white hover:bg-haveli-maroon'
              }`}
            >
              <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                isActive ? 'bg-slate-950 text-haveli-gold' : 'bg-haveli-maroon text-haveli-gold'
              }`}>
                {p.rank}
              </span>
              <span>{p.name.split(' ')[p.name.split(' ').length - 1]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Animated Deep Dive Container with Framer Motion Layout Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlayer.id}
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="haveli-card p-6 sm:p-10 rounded-3xl border-2 border-haveli-gold shadow-gold-glow relative overflow-hidden"
        >
          {/* Top Gold Foil Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-haveli-gold to-transparent" />

          {/* Dossier Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-haveli-borderGold">
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-haveli-gold via-haveli-sandstone to-haveli-maroon p-1 shadow-gold-glow flex-shrink-0">
                <div className="w-full h-full rounded-[14px] bg-[#0c0409] flex items-center justify-center font-cinzel font-black text-2xl sm:text-3xl text-gold-gradient">
                  #{activePlayer.rank}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-cinzel font-black text-2xl sm:text-4xl text-white">
                    {activePlayer.name}
                  </h3>
                  <span className="font-cinzel text-xs px-2.5 py-0.5 rounded-full bg-haveli-dark text-haveli-sandstoneLight border border-haveli-borderGold">
                    {activePlayer.country}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-dmsans text-slate-400">
                  <span className="text-haveli-gold font-cinzel font-bold">{activePlayer.role}</span>
                  <span>•</span>
                  <span>Franchise: <strong className="text-white">{activePlayer.team}</strong></span>
                  <span>•</span>
                  <span>Volume: <strong className="text-pink-300 font-mono">{activePlayer.pressureFaced} pressure balls</strong></span>
                </div>
              </div>
            </div>

            {/* PPI Score & Actions */}
            <div className="flex items-center gap-4">
              <div className="haveli-card px-5 py-3 rounded-2xl border border-haveli-gold text-center shadow-gold-glow">
                <div className="text-[9px] font-cinzel text-haveli-sandstoneLight uppercase tracking-widest">
                  PPI INDEX
                </div>
                <div className="font-cinzel font-black text-3xl sm:text-4xl text-gold-gradient">
                  {activePlayer.ppiScore}
                </div>
              </div>

              <button
                onClick={handleCopyDossier}
                className="px-4 py-3 rounded-xl bg-haveli-dark border border-haveli-gold hover:bg-haveli-gold hover:text-slate-950 text-haveli-sandstoneLight font-cinzel text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-sm"
                title="Copy Scout Summary to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-haveli-gold" />}
                <span className="hidden sm:inline">{copied ? 'Dossier Copied!' : 'Copy Dossier'}</span>
              </button>
            </div>
          </div>

          {/* Core Content Grid: Radar Chart + Tactical Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column: Recharts Radar Chart */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3 text-xs font-cinzel">
                <span className="text-haveli-gold uppercase font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-haveli-gold" /> Pressure Vector Radar
                </span>
                <span className="text-slate-400 font-mono">Scale: 0 - 100</span>
              </div>

              <div className="w-full h-[320px] sm:h-[360px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={activePlayer.radarStats}>
                    <PolarGrid stroke="#3A0A1C" strokeDasharray="3 3" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: '#E8C39E', fontSize: 10, fontFamily: 'Cinzel, serif' }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: '#644227', fontSize: 9 }}
                      stroke="#2A0815"
                    />

                    {/* IPL Tournament Average Baseline */}
                    <Radar
                      name="IPL Benchmark Avg"
                      dataKey="benchmark"
                      stroke="#38bdf8"
                      fill="#38bdf8"
                      fillOpacity={0.15}
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                    />

                    {/* Player Radar Polygon - Royal Gold with Pink Fill */}
                    <Radar
                      name={activePlayer.name}
                      dataKey="value"
                      stroke="#D4AF37"
                      fill="#EB1460"
                      fillOpacity={0.45}
                      strokeWidth={2.5}
                    />

                    <Tooltip content={<RadarTooltip />} />
                    <Legend
                      wrapperStyle={{
                        fontSize: '11px',
                        fontFamily: 'Cinzel, serif',
                        paddingTop: '8px'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Quick Micro-Stats Bar */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-haveli-dark/80 border border-haveli-borderGold text-center">
                  <span className="text-slate-400 block text-[9px] uppercase">Net WPA</span>
                  <span className="text-emerald-400 font-bold text-sm">{activePlayer.winProbabilityAdded}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-haveli-dark/80 border border-haveli-borderGold text-center">
                  <span className="text-slate-400 block text-[9px] uppercase">Dot Ball %</span>
                  <span className="text-cyan-300 font-bold text-sm">{activePlayer.rawMetrics.dotBallPercent}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-haveli-dark/80 border border-haveli-borderGold text-center col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[9px] uppercase">Boundary Rate</span>
                  <span className="text-pink-400 font-bold text-sm">{activePlayer.rawMetrics.boundaryRate}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Scout Rationale & Tactical RR Fit */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Highlight Pill from Real Data Pack */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-haveli-maroon/90 to-transparent border border-haveli-gold/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-haveli-gold animate-pulse" />
                  <span className="text-xs font-cinzel text-haveli-gold font-bold uppercase">Signature 200k Metric:</span>
                </div>
                <span className="font-mono text-xs sm:text-sm text-pink-300 font-bold">
                  {activePlayer.clutchStatHighlight}
                </span>
              </div>

              {/* Scout Rationale Block */}
              <div>
                <h4 className="font-cinzel font-bold text-base text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-haveli-gold" />
                  <span>Head Scout's Analytical Rationale</span>
                </h4>
                <div className="p-5 rounded-2xl bg-haveli-dark/85 border border-haveli-borderGold text-sm font-dmsans text-slate-300 leading-relaxed shadow-inner">
                  {activePlayer.scoutRationale}
                </div>
              </div>

              {/* Rajasthan Royals Strategic Fit */}
              <div>
                <h4 className="font-cinzel font-bold text-base text-white mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-haveli-gold" />
                  <span>Tactical Synergy with Rajasthan Royals</span>
                </h4>
                <div className="p-5 rounded-2xl bg-haveli-maroon/50 border border-haveli-borderGold text-sm font-dmsans text-slate-300 leading-relaxed">
                  {activePlayer.tacticalFitRR}
                </div>
              </div>

              {/* Case Study */}
              <div className="p-4 rounded-2xl bg-haveli-dark/70 border border-haveli-borderGold text-xs font-dmsans text-slate-300">
                <span className="text-haveli-gold font-cinzel font-bold uppercase tracking-wider block mb-1">
                  // High-Stakes Case Study:
                </span>
                <p className="text-slate-300 text-sm">
                  {activePlayer.clutchCaseStudy}
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
}
