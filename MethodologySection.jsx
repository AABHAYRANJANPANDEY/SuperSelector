import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Sliders, Target, CheckCircle2, Flame, Award } from 'lucide-react';
import { METHODOLOGY_METRICS } from '../data';

export default function MethodologySection() {
  const [activeTab, setActiveTab] = useState('batting');

  const formulaTabs = {
    batting: {
      label: "Batting PPI Architecture",
      desc: "Calibrated for boundary acceleration under high RRR without losing wickets in clusters (par baseline: 154.2 SR).",
      weights: [
        { name: "Phase Execution Delta (vs 154.2 Par SR)", pct: 40, color: "bg-haveli-pink" },
        { name: "Boundary Leverage Ratio (> 26%)", pct: 25, color: "bg-haveli-gold" },
        { name: "Dot Ball Avoidance (< 20% Dots in Crunch)", pct: 20, color: "bg-cyan-400" },
        { name: "Sample Volume Bayesian Confidence", pct: 15, color: "bg-purple-400" }
      ]
    },
    bowling: {
      label: "Bowling PPI Architecture",
      desc: "Calibrated for boundary suppression, dot-ball creation, and defensive death precision (par baseline: 9.32 Econ).",
      weights: [
        { name: "Death Economy Delta (vs 9.32 Par Econ)", pct: 40, color: "bg-haveli-gold" },
        { name: "Dot Ball Creation (> 33% Dots in Crunch)", pct: 25, color: "bg-cyan-400" },
        { name: "Boundary Denial (< 15% Boundaries Conceded)", pct: 20, color: "bg-haveli-pink" },
        { name: "Sample Volume Bayesian Confidence", pct: 15, color: "bg-purple-400" }
      ]
    }
  };

  return (
    <section id="methodology" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-haveli-maroon/90 border border-haveli-gold/40 text-haveli-gold font-cinzel text-xs uppercase tracking-widest mb-3 shadow-gold-glow">
          <Brain className="w-3.5 h-3.5 text-haveli-gold" />
          <span>Section 02 // Mathematical Architecture</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          How We Define <span className="text-gold-gradient">"High-Pressure"</span>
        </h2>
        <p className="font-dmsans text-haveli-sandstoneLight/80 text-sm sm:text-base leading-relaxed">
          In T20 franchise cricket, unadjusted counting stats lie. A batter scoring an unbeaten 45 in an easy chase contributes far less equity than hitting 24*(9) when 28 is needed off 10 balls. The Pressure Performance Index filters out the noise across 200,999 deliveries.
        </p>
      </motion.div>

      {/* Main Grid: 4 Pressure Game-States + PPI Formulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 4 Pressure Game-States from the 200k Data Pack */}
        <div className="lg:col-span-7 space-y-4">
          {METHODOLOGY_METRICS.pressureDefinition.quadrants.map((quad, idx) => (
            <motion.div
              key={quad.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="haveli-card p-6 rounded-2xl relative overflow-hidden group border border-haveli-gold/30 hover:border-haveli-gold transition-all"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-haveli-gold via-haveli-pink to-haveli-maroon group-hover:w-2.5 transition-all" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-cinzel text-xs text-haveli-gold font-bold tracking-wider uppercase">
                  {quad.tag} • {quad.title}
                </span>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-haveli-dark text-haveli-sandstoneLight border border-haveli-borderGold">
                  {quad.weight}
                </span>
              </div>

              <div className="font-mono text-xs text-pink-300 mb-2 font-semibold">
                Trigger: {quad.condition}
              </div>

              <p className="font-dmsans text-sm text-slate-300 leading-relaxed">
                {quad.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Algorithmic Equation & Interactive Weight Calibrator */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 haveli-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border-2 border-haveli-gold shadow-gold-glow"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-haveli-maroon border border-haveli-gold flex items-center justify-center text-haveli-gold">
                <Sliders className="w-4 h-4" />
              </div>
              <h3 className="font-cinzel font-bold text-xl text-white">The PPI Formulation</h3>
            </div>
            <span className="text-[10px] font-mono text-haveli-gold bg-haveli-dark px-2.5 py-1 rounded-md border border-haveli-borderGold">
              Algorithm v3.0
            </span>
          </div>

          {/* Formula Display Box */}
          <div className="p-4 rounded-xl bg-haveli-dark/90 border border-haveli-borderGold font-mono text-xs sm:text-sm text-haveli-goldLight mb-6 shadow-inner leading-relaxed">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-cinzel">
              Algorithmic Equation:
            </div>
            <code>
              PPI = 0.40(Δ_Execution) + 0.25(Boundary_%) + 0.20(1 - Dot_%) + 0.15(Ω_Confidence)
            </code>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex rounded-xl bg-haveli-dark p-1 mb-6 border border-haveli-borderGold">
            <button
              onClick={() => setActiveTab('batting')}
              className={`flex-1 py-2 text-xs font-cinzel font-bold uppercase rounded-lg transition-all ${
                activeTab === 'batting'
                  ? 'bg-gradient-to-r from-haveli-pink to-pink-700 text-white shadow-pink-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Batting Weights
            </button>
            <button
              onClick={() => setActiveTab('bowling')}
              className={`flex-1 py-2 text-xs font-cinzel font-bold uppercase rounded-lg transition-all ${
                activeTab === 'bowling'
                  ? 'bg-gradient-to-r from-haveli-gold to-haveli-goldDark text-slate-950 font-extrabold shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bowling Weights
            </button>
          </div>

          <p className="font-dmsans text-xs text-slate-300 mb-5 leading-relaxed">
            {formulaTabs[activeTab].desc}
          </p>

          {/* Weight Sliders */}
          <div className="space-y-4 mb-6">
            {formulaTabs[activeTab].weights.map((w, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">{w.name}</span>
                  <span className="text-haveli-gold font-bold">{w.pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-haveli-dark overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${w.pct}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className={`h-full rounded-full ${w.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Scout Philosophy Quote */}
          <div className="p-4 rounded-xl bg-haveli-maroon/60 border border-haveli-borderGold border-l-4 border-l-haveli-gold text-xs text-slate-300 italic">
            "A pressure metric must punish false security. Taking 3 wickets in the 19th over when defending 70 is meaningless; defending 12 with 3 dot balls is franchise immortality."
            <div className="mt-2 text-[10px] font-cinzel font-bold not-italic text-haveli-gold">
              — Aabhay Ranjan Pandey, RR Talent Analyst
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
