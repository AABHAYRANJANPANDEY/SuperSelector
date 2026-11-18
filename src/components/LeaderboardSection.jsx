import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell,
  CartesianGrid
} from 'recharts';
import {
  Trophy,
  Filter,
  Search,
  Crown,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Info,
  Flame,
  Award
} from 'lucide-react';
import { TOP_10_PLAYERS, SCATTER_PLOT_DATA } from '../data';

// Custom Tooltip for the Recharts Scatter Plot in Royal Haveli Aesthetic
const CustomScatterTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="haveli-card p-4 rounded-xl border border-haveli-gold shadow-gold-glow text-xs max-w-xs backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-cinzel font-bold text-white text-sm">{data.name}</span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-haveli-dark text-haveli-gold border border-haveli-borderGold">
            {data.team}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-cinzel px-2.5 py-0.5 rounded-full font-bold ${
            data.isTop10
              ? 'bg-haveli-gold text-slate-950 font-black shadow-sm'
              : 'bg-slate-800 text-slate-400'
          }`}>
            {data.isTop10 ? '★ ROYALS TARGET' : 'League Benchmark'}
          </span>
          <span className="text-haveli-sandstoneLight font-dmsans text-[11px]">{data.role}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-haveli-borderGold text-[11px] font-mono">
          <div>
            <span className="text-slate-400 block text-[9px] uppercase">PPI Rating:</span>
            <span className="text-haveli-gold font-bold text-sm">{data.ppi}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[9px] uppercase">Pressure Faced:</span>
            <span className="text-pink-400 font-bold text-sm">{data.situations} balls</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function LeaderboardSection({ onSelectPlayer, selectedPlayerId }) {
  const [roleFilter, setRoleFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered scatter plot data
  const filteredScatterData = useMemo(() => {
    return SCATTER_PLOT_DATA.filter(item => {
      const matchesRole = roleFilter === 'All' || item.role === roleFilter;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.team.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRole && matchesSearch;
    });
  }, [roleFilter, searchQuery]);

  // Filtered Top 10 list
  const filteredTop10 = useMemo(() => {
    return TOP_10_PLAYERS.filter(player => {
      const matchesRole = roleFilter === 'All' || player.roleCategory === roleFilter;
      const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            player.team.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRole && matchesSearch;
    });
  }, [roleFilter, searchQuery]);

  return (
    <section id="matrix" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-haveli-maroon/90 border border-haveli-gold/40 text-haveli-gold font-cinzel text-xs uppercase tracking-widest mb-3 shadow-gold-glow">
          <TrendingUp className="w-3.5 h-3.5 text-haveli-gold" />
          <span>Section 03 // Scatter Matrix & Top 10 Roster</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Pressure Situations vs <span className="text-gold-gradient">PPI Score</span>
        </h2>
        <p className="font-dmsans text-haveli-sandstoneLight/80 text-sm sm:text-base leading-relaxed">
          Mapping 35 real cricket players from the 200,999 delivery dataset across sample volume (x-axis) and clutch execution efficiency (y-axis). The top-right quadrant isolates genuine match-winners.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="haveli-card p-4 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-haveli-gold/40">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-cinzel text-haveli-gold mr-2 flex items-center gap-1.5 font-bold uppercase">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {['All', 'Batter', 'Bowler', 'All-Rounder'].map(role => (
            <button
              key={role}
              onClick={() => setRoleFilter(role)}
              className={`px-4 py-1.5 rounded-lg text-xs font-cinzel font-bold tracking-wider uppercase transition-all ${
                roleFilter === role
                  ? 'bg-gradient-to-r from-haveli-gold to-haveli-goldDark text-slate-950 shadow-gold-glow'
                  : 'bg-haveli-dark text-haveli-sandstoneLight hover:text-white border border-haveli-borderGold'
              }`}
            >
              {role === 'All' ? 'All Roles (35+)' : role + 's'}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-haveli-gold absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search player or team..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-haveli-dark border border-haveli-borderGold rounded-xl text-xs font-dmsans text-white placeholder-slate-500 focus:outline-none focus:border-haveli-gold transition-colors"
          />
        </div>
      </div>

      {/* Recharts Scatter Plot Matrix */}
      <div className="haveli-card p-6 sm:p-8 rounded-3xl mb-20 border-2 border-haveli-gold shadow-gold-glow relative overflow-hidden">
        
        {/* Matrix Legend Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-haveli-borderGold">
          <div>
            <h3 className="font-cinzel font-bold text-lg text-white flex items-center gap-2">
              <span>Talent Dispersion Scatterplot</span>
              <span className="text-xs font-mono text-haveli-gold font-normal">
                (HLI &gt; 1.85 Deliveries)
              </span>
            </h3>
            <p className="text-xs font-dmsans text-slate-400">
              Hover over nodes to inspect metrics • Click player cards below for radar deep-dive
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-cinzel">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-haveli-gold shadow-gold-glow ring-2 ring-haveli-gold/40" />
              <span className="text-white font-bold">Royals Top 10 Target</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-600 border border-slate-400" />
              <span className="text-slate-400">Benchmark Pool</span>
            </div>
          </div>
        </div>

        {/* The Recharts Scatter Chart */}
        <div className="w-full h-[420px] sm:h-[480px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D0616" opacity={0.7} />
              
              <XAxis
                type="number"
                dataKey="situations"
                name="Pressure Situations Faced"
                domain={[200, 1500]}
                unit=" balls"
                tick={{ fill: '#C89D76', fontSize: 11, fontFamily: 'monospace' }}
                stroke="#644227"
                label={{
                  value: 'Pressure Situations Faced (Sample Volume in 200k Data Pack) →',
                  position: 'insideBottom',
                  offset: -20,
                  fill: '#E8C39E',
                  fontSize: 12,
                  fontFamily: 'Cinzel, serif'
                }}
              />

              <YAxis
                type="number"
                dataKey="ppi"
                name="PPI Score"
                domain={[80, 100]}
                tick={{ fill: '#C89D76', fontSize: 11, fontFamily: 'monospace' }}
                stroke="#644227"
                label={{
                  value: 'Pressure Performance Index (PPI) →',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#D4AF37',
                  fontSize: 12,
                  fontFamily: 'Cinzel, serif',
                  offset: 0
                }}
              />

              <ZAxis range={[80, 260]} />
              <Tooltip content={<CustomScatterTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#D4AF37' }} />

              <Scatter name="Players" data={filteredScatterData}>
                {filteredScatterData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isTop10 ? '#D4AF37' : '#64748b'}
                    stroke={entry.isTop10 ? '#FFF1C5' : '#475569'}
                    strokeWidth={entry.isTop10 ? 2.5 : 1}
                    className="cursor-pointer transition-transform duration-300 hover:scale-125"
                    onClick={() => {
                      const matched = TOP_10_PLAYERS.find(p => p.name.toLowerCase() === entry.name.toLowerCase());
                      if (matched) {
                        onSelectPlayer(matched.id);
                        document.getElementById('deepdive')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Analytical Callout */}
        <div className="mt-4 pt-4 border-t border-haveli-borderGold/60 flex flex-wrap items-center justify-between gap-3 text-xs font-dmsans text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-haveli-gold" />
            <span>Optimal Acquisition Zone: Top-Right (Volume &gt; 400 situations, PPI &gt; 93.0)</span>
          </div>
          <span className="text-haveli-sandstoneLight font-mono">
            Source: Official Rajasthan Royals 200,999 Delivery Data Engine
          </span>
        </div>
      </div>

      {/* Top 10 Leaderboard Section */}
      <div id="leaderboard" className="pt-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-haveli-maroon/90 border border-haveli-gold/40 text-haveli-gold font-cinzel text-xs uppercase tracking-widest mb-2 shadow-gold-glow">
              <Trophy className="w-3.5 h-3.5" />
              <span>Section 04 // The Elite 10</span>
            </div>
            <h3 className="font-cinzel font-black text-2xl sm:text-4xl text-white">
              The Top 10 High-Pressure Titans
            </h3>
          </div>
          <p className="text-xs font-cinzel text-haveli-sandstoneLight">
            Click any player card to activate full 360° Radar Profiling & Scout Dossier
          </p>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTop10.map((player) => {
            const isSelected = selectedPlayerId === player.id;
            return (
              <motion.div
                key={player.id}
                onClick={() => {
                  onSelectPlayer(player.id);
                  document.getElementById('deepdive')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`haveli-card p-5 rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-300 border ${
                  isSelected
                    ? 'border-2 border-haveli-gold shadow-gold-glow scale-[1.01]'
                    : 'border-haveli-gold/40 hover:border-haveli-gold hover:-translate-y-1'
                }`}
              >
                {/* Rank Badge & Names */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl font-cinzel font-black text-xs flex items-center justify-center ${
                      player.rank === 1
                        ? 'bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-slate-950 shadow-gold-glow'
                        : player.rank <= 3
                        ? 'bg-gradient-to-br from-haveli-gold to-haveli-goldDark text-slate-950 shadow-gold-glow'
                        : 'bg-haveli-dark border border-haveli-borderGold text-haveli-sandstoneLight'
                    }`}>
                      #{player.rank}
                    </div>

                    <div>
                      <h4 className="font-cinzel font-bold text-lg text-white group-hover:text-gold-gradient transition-colors">
                        {player.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-dmsans text-slate-400">
                        <span>{player.country}</span>
                        <span>•</span>
                        <span className="text-haveli-sandstoneLight">{player.team}</span>
                      </div>
                    </div>
                  </div>

                  {/* PPI Score Pill */}
                  <div className="text-right">
                    <div className="text-[9px] font-cinzel text-haveli-sandstoneLight uppercase tracking-widest">
                      PPI Score
                    </div>
                    <div className="font-cinzel font-black text-2xl text-gold-gradient tracking-tight">
                      {player.ppiScore}
                    </div>
                  </div>
                </div>

                {/* Role Pill */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-cinzel px-2.5 py-0.5 rounded-full bg-haveli-dark border border-haveli-borderGold text-haveli-gold font-semibold">
                    {player.role}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-semibold">
                    WPA: {player.winProbabilityAdded}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {player.pressureFaced} pressure balls
                  </span>
                </div>

                {/* Key Stat Highlight from 200k Dataset */}
                <div className="p-2.5 rounded-xl bg-haveli-dark/70 border border-haveli-borderGold/60 text-xs font-mono text-slate-300 mb-3 flex items-center justify-between">
                  <span className="text-slate-400">Data Pack Highlight:</span>
                  <span className="text-pink-400 font-bold">{player.clutchStatHighlight}</span>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between text-xs font-cinzel pt-2 border-t border-haveli-borderGold/60">
                  <span className="text-haveli-sandstoneLight flex items-center gap-1 group-hover:text-white">
                    <Crown className="w-3.5 h-3.5 text-haveli-gold" />
                    <span>View Scout Rationale</span>
                  </span>
                  <span className="text-haveli-gold flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                    <span>Inspect Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
