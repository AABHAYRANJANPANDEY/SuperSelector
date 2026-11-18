import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Trophy, Sun, Heart, Sparkles, Compass } from 'lucide-react';
import { HERITAGE_STORIES } from '../data/rrHaveliData';

export default function HeritageSection() {
  return (
    <section id="heritage" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-haveli-maroon/90 border border-haveli-gold/40 text-haveli-gold font-cinzel text-xs uppercase tracking-widest mb-3 shadow-gold-glow">
          <Landmark className="w-3.5 h-3.5 text-haveli-gold" />
          <span>Section // The Fort of Fortunes</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          A Legacy Forged in <span className="text-gold-gradient">Pink Sandstone</span>
        </h2>
        <p className="font-dmsans text-haveli-sandstoneLight/80 text-sm sm:text-base leading-relaxed">
          From the architectural marvels of Maharaja Sawai Jai Singh II to Shane Warne’s fearless 2008 championship triumph, explore the soul of the Rajasthan Royals.
        </p>
      </div>

      {/* Timeline Stories Grid */}
      <div className="space-y-16">
        {HERITAGE_STORIES.map((story, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 haveli-card p-6 sm:p-10 rounded-3xl border border-haveli-gold/40 shadow-2xl relative overflow-hidden`}
            >
              {/* Image Frame with Jharokha Arch Borders */}
              <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border-2 border-haveli-gold shadow-gold-glow group">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-haveli-dark via-transparent to-transparent opacity-60" />
                
                {/* Year Pill */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-xl bg-haveli-gold text-slate-950 font-cinzel font-black text-xs uppercase tracking-widest shadow-lg">
                  {story.year}
                </div>
              </div>

              {/* Text Description */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-2 text-haveli-gold text-xs font-cinzel font-semibold tracking-widest uppercase">
                  <Sparkles className="w-4 h-4 text-haveli-gold" />
                  <span>{story.subtitle}</span>
                </div>

                <h3 className="font-cinzel font-black text-2xl sm:text-3xl text-white">
                  {story.title}
                </h3>

                <p className="font-dmsans text-slate-300 text-sm sm:text-base leading-relaxed">
                  {story.description}
                </p>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 text-xs font-cinzel text-haveli-sandstoneLight border-b border-haveli-gold/50 pb-1">
                    <span>Royal Heritage Archive • Jaipur</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quote Banner */}
      <div className="mt-20 haveli-card p-8 sm:p-12 rounded-3xl border-2 border-haveli-gold text-center relative overflow-hidden">
        <div className="font-cormorant italic text-xl sm:text-3xl text-haveli-goldLight leading-relaxed max-w-3xl mx-auto mb-4">
          "They called us underdogs. Shane Warne called us Royals. We play not just for a trophy, but for the royal pride of Rajasthan."
        </div>
        <div className="font-cinzel text-xs font-bold text-haveli-sandstoneLight uppercase tracking-widest">
          — Rajasthan Royals Founding Creed • Halla Bol
        </div>
      </div>

    </section>
  );
}

