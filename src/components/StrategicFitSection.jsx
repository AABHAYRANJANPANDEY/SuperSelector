import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Trophy, ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import { ROYALS_STRATEGIC_GAPS } from '../data';

export default function StrategicFitSection({ onNavigate }) {
  return (
    <section id="squad-fit" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-haveli-maroon/90 border border-haveli-gold/40 text-haveli-gold font-cinzel text-xs uppercase tracking-widest mb-3 shadow-gold-glow">
          <Shield className="w-3.5 h-3.5 text-haveli-gold" />
          <span>Section 06 // Franchise Roster Blueprint</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          How These 10 Solve <span className="text-gold-gradient">RR Tactical Gaps</span>
        </h2>
        <p className="font-dmsans text-haveli-sandstoneLight/80 text-sm sm:text-base leading-relaxed">
          Translating pure statistical signals from the 200,999 delivery dataset into actionable recruitment. Here is how our PPI Top 10 directly plug Rajasthan Royals' three core match-leverage phases.
        </p>
      </div>

      {/* 3 Strategic Gaps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {ROYALS_STRATEGIC_GAPS.map((gap, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="haveli-card p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between group border border-haveli-gold/40 hover:border-haveli-gold transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-haveli-maroon border border-haveli-gold text-haveli-gold flex items-center justify-center font-cinzel font-black text-base mb-4 shadow-gold-glow">
                0{idx + 1}
              </div>
              <h3 className="font-cinzel font-bold text-xl text-white mb-2">
                {gap.title}
              </h3>
              <p className="font-dmsans text-xs text-slate-300 leading-relaxed mb-4">
                {gap.currentContext}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-haveli-borderGold text-xs font-dmsans">
              <div>
                <span className="text-haveli-gold font-cinzel block text-[10px] uppercase font-bold">Recommended Target:</span>
                <span className="text-white font-cinzel font-bold text-sm">{gap.recommendedTarget}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-medium">
                Impact: {gap.impact}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytical Takeaway Banner */}
      <div className="haveli-card p-8 sm:p-10 rounded-3xl border-2 border-haveli-gold shadow-gold-glow relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="max-w-2xl">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-haveli-gold font-cinzel text-xs uppercase tracking-wider font-bold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>SupeRR Selector Executive Summary</span>
          </div>
          <h4 className="font-cinzel font-bold text-xl sm:text-2xl text-white mb-2">
            "Championships Are Won in the 8% High-Leverage Margins."
          </h4>
          <p className="font-dmsans text-sm text-slate-300 leading-relaxed">
            By acquiring players in the 93+ PPI band from this data pack, the Rajasthan Royals insulate themselves against playoff heartbreak and convert tight 20th-over finishes into decisive wins.
          </p>
        </div>

        <button
          onClick={() => {
            onNavigate && onNavigate('deepdive');
            document.getElementById('deepdive')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-haveli-gold to-haveli-goldDark text-slate-950 font-cinzel text-xs uppercase tracking-wider font-extrabold shadow-gold-glow hover:scale-105 transition-all whitespace-nowrap"
        >
          Review Player Dossiers →
        </button>
      </div>

    </section>
  );
}
