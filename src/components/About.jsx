import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import resumeData from '../data/resumeData';

const { FiArrowRight, FiDownload } = FiIcons;

function About({ summary, details, stats }) {
  return (
    <section id="about" className="py-24 md:py-40 bg-brand-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Section Header */}
          <div className="lg:col-span-12 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-accent" />
              <span className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase">The Approach</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter font-custom leading-none uppercase">
              Beyond <br /> <span className="text-gradient">Traditional.</span>
            </h2>
          </div>

          {/* Left Column: Summary & Bio-Metrics */}
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-brand-text font-light leading-tight mb-16"
            >
              {summary}
            </motion.p>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-16">
              {details.map((item, idx) => (
                <div key={idx} className="border-l border-brand-accent/30 pl-6">
                  <span className="block text-[10px] font-bold text-brand-muted tracking-[0.3em] uppercase mb-2">
                    {item.label}
                  </span>
                  <span className="text-lg md:text-xl font-black text-brand-text uppercase tracking-tight">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <motion.a 
              href={resumeData.personal.resumeUrl} 
              download="MichaelAnticoliResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-brand-accent group"
            >
              <span className="border-b-2 border-brand-accent pb-1">Download Full Narrative (PDF)</span>
              <SafeIcon icon={FiArrowRight} className="text-lg transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Right Column: High-Impact Stats */}
          <div className="lg:col-span-5 lg:pl-16 relative">
            {/* Background Accent for Stats */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-3xl rounded-full -z-10" />
            
            <div className="space-y-16">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="relative group"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-7xl md:text-9xl font-black text-brand-text font-custom tracking-tighter leading-none group-hover:text-brand-accent transition-colors duration-500">
                      {stat.value}
                    </span>
                    <span className="text-3xl md:text-5xl font-black text-brand-accent font-custom">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-brand-accent/20" />
                    <span className="text-brand-muted font-bold uppercase tracking-[0.3em] text-[10px]">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;