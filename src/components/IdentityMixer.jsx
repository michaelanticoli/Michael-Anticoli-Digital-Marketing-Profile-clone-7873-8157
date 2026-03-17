import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiRefreshCw, FiZap, FiCpu, FiEdit3 } = FiIcons;

const IdentityMixer = ({ roles, tagline }) => {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const newIndices = Array.from({ length: 3 }, () => Math.floor(Math.random() * roles.length));
      setActiveIndices(newIndices);
      setIsShuffling(false);
    }, 600);
  };

  return (
    <section id="identity" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 text-brand-accent mb-6">
                <SafeIcon icon={FiZap} className="text-xl" />
                <span className="text-xs font-black tracking-[0.4em] uppercase">The Identity Lab</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-brand-text mb-8 tracking-tighter leading-none uppercase">
                MADE <span className="text-gradient">TO ORDER</span> STRATEGIST.
              </h2>
              <p className="text-brand-muted text-xl font-light leading-relaxed max-w-xl">
                {tagline} <br /><br />
                Think of me as a <span className="text-brand-text font-bold uppercase italic">Motley Crue of expertise</span>. 
                Pick any label, blend them together, or let the machine suggest your next strategic partner.
              </p>
            </motion.div>

            <button 
              onClick={shuffle}
              disabled={isShuffling}
              className="flex items-center gap-4 px-8 py-4 bg-brand-accent text-brand-bg rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 group disabled:opacity-50"
            >
              <SafeIcon icon={FiRefreshCw} className={`text-xl ${isShuffling ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              Shuffle Identity
            </button>
          </div>

          {/* Right: The Mixer UI */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-brand-secondary p-8 rounded-3xl border border-brand-border shadow-2xl relative">
              {/* Lab Interface Elements */}
              <div className="absolute -top-3 -left-3 px-4 py-1 bg-brand-accent text-brand-bg text-[10px] font-black tracking-widest uppercase rounded">
                V1.0 CONFIG
              </div>
              <div className="absolute top-4 right-4 flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
              </div>

              <div className="space-y-4 py-8">
                {activeIndices.map((idx, i) => (
                  <motion.div 
                    key={i}
                    className="overflow-hidden h-20 bg-brand-bg/50 rounded-xl border border-brand-border/50 flex items-center px-6 relative group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent/20 group-hover:bg-brand-accent transition-colors" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${i}-${idx}`}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="flex items-center gap-4"
                      >
                        <SafeIcon icon={i === 0 ? FiCpu : i === 1 ? FiEdit3 : FiZap} className="text-brand-accent text-xl" />
                        <span className="text-xl md:text-2xl font-black text-brand-text uppercase tracking-tight">
                          {roles[idx]}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex justify-between items-center text-[10px] font-bold tracking-widest text-brand-muted uppercase">
                <span>Status: Fully Optimized</span>
                <span>System: Multi-Hyphenate</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IdentityMixer;