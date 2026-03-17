import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiMap, FiAward, FiBookOpen, FiArrowRight } = FiIcons;

function CareerInsights({ insights }) {
  if (!insights) return null;

  return (
    <section id="roadmap" className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <div className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">Future Trajectory</div>
          <h2 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter font-custom leading-none uppercase mb-10">
            Strategic <br /> <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="max-w-2xl text-brand-muted text-lg font-light leading-relaxed">
            {insights.summary}
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {insights.roadmap.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 bg-brand-secondary border border-brand-border rounded-3xl group hover:border-brand-accent/30 transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                  <span className="text-brand-accent font-bold font-mono">0{idx + 1}</span>
                </div>
                <div className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/5 px-3 py-1 rounded-full border border-brand-accent/10">
                  {step.timeframe}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-brand-text mb-2 font-custom tracking-tight uppercase">
                {step.role}
              </h3>
              <div className="text-brand-accent text-sm font-mono font-bold mb-6 italic opacity-80">
                {step.salary}
              </div>
              <p className="text-brand-muted text-sm leading-relaxed font-light">
                {step.description}
              </p>

              {idx < insights.roadmap.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <SafeIcon icon={FiArrowRight} className="text-brand-accent/30 text-2xl" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Alternative Paths */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <SafeIcon icon={FiTrendingUp} className="text-brand-accent" />
              <h4 className="text-brand-text font-bold uppercase tracking-widest text-xs">Alternative Horizons</h4>
            </div>
            <div className="space-y-4">
              {insights.alternativeRoles.map((role, idx) => (
                <div key={idx} className="p-6 bg-brand-secondary/50 border border-brand-border rounded-2xl hover:bg-brand-secondary transition-colors group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-brand-text font-bold uppercase tracking-tight group-hover:text-brand-accent transition-colors">
                      {role.title}
                    </span>
                    <span className="text-[10px] font-mono text-brand-muted">{role.salary}</span>
                  </div>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Development */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <SafeIcon icon={FiBookOpen} className="text-brand-accent" />
              <h4 className="text-brand-text font-bold uppercase tracking-widest text-xs">Recommended Mastery</h4>
            </div>
            <div className="space-y-4">
              {insights.recommendedSkills.map((skill, idx) => (
                <div key={idx} className="p-6 bg-brand-secondary/50 border border-brand-border rounded-2xl hover:bg-brand-secondary transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-brand-text font-bold uppercase tracking-tight">
                      {skill.name}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border ${skill.level === 'Hard' ? 'border-red-500/30 text-red-400 bg-red-500/5' : 'border-blue-500/30 text-blue-400 bg-blue-500/5'}`}>
                      {skill.level.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-brand-accent mt-2">
                    <SafeIcon icon={FiAward} className="text-[10px]" />
                    <span className="italic">{skill.course}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerInsights;