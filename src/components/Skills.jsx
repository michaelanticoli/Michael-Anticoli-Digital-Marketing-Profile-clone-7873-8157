import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBriefcase, FiLayout, FiTarget, FiBox } = FiIcons;

function Skills({ skills }) {
  // Mapping icons to categories dynamically
  const categories = [
    { icon: FiBriefcase, name: "Strategy", color: "from-blue-500/10 to-brand-accent/10" },
    { icon: FiLayout, name: "Creative", color: "from-purple-500/10 to-brand-accent/10" },
    { icon: FiTarget, name: "Tools", color: "from-orange-500/10 to-brand-accent/10" },
    { icon: FiBox, name: "Systems", color: "from-brand-accent/10 to-brand-aquamarine/10" }
  ];

  return (
    <section id="skills" className="py-24 md:py-40 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">Capabilities</div>
          <h2 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter font-custom leading-none uppercase">
            Toolkit & <br /> <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Grid Container - Forces 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-10 bg-brand-secondary border border-brand-border rounded-3xl hover:bg-brand-card transition-all group hover:-translate-y-2 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categories[idx % categories.length].color} flex items-center justify-center mb-8 border border-brand-border group-hover:border-brand-accent/30 transition-all shrink-0`}>
                <SafeIcon icon={categories[idx % categories.length].icon} className="text-2xl text-brand-accent" />
              </div>
              
              <h3 className="text-brand-text font-black text-xl mb-6 font-custom uppercase tracking-tighter shrink-0 min-h-[3rem] flex items-center">
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-5 flex-grow">
                {skillGroup.items.map((item, iIdx) => {
                  const isObject = typeof item === 'object' && item !== null;
                  
                  return (
                    <li key={iIdx} className="text-brand-muted text-sm flex items-start gap-4 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/40 mt-2 shrink-0 group-hover:bg-brand-accent transition-colors" />
                      <div>
                        {isObject ? (
                          <>
                            <span className="font-bold text-brand-text block tracking-tight">{item.name}</span>
                            <span className="text-[11px] opacity-60 mt-1 block leading-relaxed group-hover:opacity-80 transition-opacity">
                              {item.description}
                            </span>
                          </>
                        ) : (
                          <span className="text-brand-text/90">{item}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;