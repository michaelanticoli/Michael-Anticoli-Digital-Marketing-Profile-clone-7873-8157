import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { resumeData } from '../data/resumeData';

const { FiGlobe, FiBarChart2, FiZap, FiTarget, FiDownload } = FiIcons;

const iconMap = {
  FiGlobe,
  FiBarChart2,
  FiZap,
  FiTarget
};

function About({ summary, details, stats }) {
  return (
    <section id="about" className="py-24 md:py-40 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-12 mb-20">
            <div className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">The Approach</div>
            <h2 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter font-custom leading-none uppercase">
              Beyond <br /> <span className="text-gradient">Traditional.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-2xl md:text-4xl text-brand-text font-light leading-tight mb-12">
              {summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {details.map((item, idx) => (
                <div key={idx} className="p-8 bg-brand-bg rounded-3xl border border-brand-border">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <SafeIcon icon={iconMap[item.icon] || FiZap} className="text-xl text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-black text-brand-text mb-3 uppercase tracking-tighter font-custom">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <a 
              href={resumeData.personal.resumeUrl} 
              download="MichaelAnticoliResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-white rounded-full font-black uppercase tracking-widest hover:shadow-lg transition-all"
            >
              <SafeIcon icon={FiDownload} />
              Full Resume PDF
            </a>
          </div>

          <div className="lg:col-span-5 lg:pl-12">
            <div className="space-y-12">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-b border-brand-border pb-8"
                >
                  <div className="text-6xl md:text-8xl font-black text-brand-text font-custom tracking-tighter mb-2">
                    {stat.number || stat.value}
                  </div>
                  <div className="text-brand-accent font-bold uppercase tracking-[0.2em] text-xs">
                    {stat.label}
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