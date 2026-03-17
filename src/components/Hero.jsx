import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowDown, FiDownload } = FiIcons;

function Hero({ data }) {
  // Premium easing for the entrance animation
  const luxuryEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-primary">
      {/* Abstract Background Elements - Softened for luxury feel */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-accent/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-aquamarine/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-border bg-brand-secondary/30 backdrop-blur-md mb-12"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-muted/80">Strategy & Marketing</span>
          </motion.div>
          
          {/* Refined Luxury Headline */}
          <div className="max-w-[1050px] mx-auto mb-14">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 1.2, 
                ease: luxuryEase,
                delay: 0.1
              }}
              className="text-5xl md:text-[6.5rem] font-black text-brand-text tracking-[-0.03em] leading-[0.9] uppercase font-custom mb-6"
            >
              {data.firstName} {data.lastName}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: luxuryEase, delay: 0.3 }}
              className="text-lg md:text-3xl font-light text-brand-muted uppercase tracking-[0.1em] font-custom"
            >
              <span className="text-gradient font-bold">Digital Marketing Strategy</span> • Brand Systems • Audience Engagement
            </motion.p>
          </div>
          
          {/* Subheader / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase, delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-brand-muted mb-14 leading-relaxed font-light tracking-wide"
          >
            {data.summary}
          </motion.p>
          
          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <motion.a 
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-brand-accent text-white rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:shadow-[0_20px_40px_rgba(255,107,107,0.2)] transition-all duration-500"
            >
              Explore Case Studies
            </motion.a>
            <motion.a 
              href={data.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 border border-brand-border text-brand-text/80 rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:border-brand-accent hover:text-brand-accent transition-all duration-500 flex items-center gap-3 group"
            >
              <SafeIcon icon={FiDownload} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-brand-muted/20"
          >
            <SafeIcon icon={FiArrowDown} className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;