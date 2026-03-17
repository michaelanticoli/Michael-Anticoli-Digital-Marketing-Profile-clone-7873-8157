import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMaximize2, FiX, FiBarChart2, FiCheckCircle, FiInfo, FiLayers, FiActivity } = FiIcons;

const metricDefs = [
  { key: "CTR", label: "CLICK-THROUGH RATE", max: 10 },
  { key: "CPC", label: "COST PER CLICK", max: 2 },
  { key: "CPL", label: "COST PER LEAD", max: 30 },
  { key: "CVR", label: "CONVERSION RATE", max: 25 },
  { key: "ENG", label: "ENGAGEMENT RATE", max: 20 },
];

const MetricRow = ({ label, value, max, accent }) => {
  const raw = parseFloat(value.replace(/[$%]/g, ""));
  const pct = Math.min((raw / max) * 100, 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[8px] tracking-[2.5px] text-brand-muted font-mono uppercase">{label}</span>
        <span className="text-sm font-bold font-mono" style={{ color: accent }}>{value}</span>
      </div>
      <div className="h-[1px] bg-white/5 rounded-full relative">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "circOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${accent}88, ${accent})` }}
        />
      </div>
    </div>
  );
};

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-xs font-black text-brand-accent uppercase tracking-widest mb-4 block">Case Studies</span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-text font-custom uppercase tracking-tighter">
            Strategic <span className="text-gradient">Thinking.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              <div 
                className="p-10 rounded-2xl border border-brand-border transition-all duration-500 group-hover:border-brand-accent/30 overflow-hidden min-h-[420px] flex flex-col justify-between relative"
                style={{ background: project.image ? `url(${project.image}) center/cover no-repeat` : `linear-gradient(135deg, ${project.brandColors.bg}, #000)` }}
              >
                {/* Overlay if image exists */}
                {project.image && <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />}

                <div 
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, ${project.brandColors.accent} 0px, ${project.brandColors.accent} 1px, transparent 1px, transparent 15px)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[9px] font-bold tracking-[4px] uppercase" style={{ color: project.brandColors.accent }}>
                      {project.category}
                    </span>
                    <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
                      <SafeIcon icon={FiMaximize2} className="text-white/40 group-hover:text-white" />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-brand-text font-custom uppercase tracking-tighter mb-4 group-hover:text-brand-accent transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-10 max-w-md italic line-clamp-3">
                    {project.objective}
                  </p>
                </div>

                <div className="relative z-10 flex gap-4">
                  {Object.entries(project.metrics).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-lg">
                      <span className="block text-[8px] text-brand-muted tracking-widest uppercase mb-1">{key}</span>
                      <span className="text-sm font-bold font-mono" style={{ color: project.brandColors.accent }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-bg/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-brand-bg border border-brand-border rounded-3xl shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl hover:bg-brand-accent transition-colors z-20"
              >
                <SafeIcon icon={FiX} />
              </button>

              <div 
                className="p-10 md:p-16 relative overflow-hidden border-b border-brand-border"
                style={{ background: selectedProject.image ? `url(${selectedProject.image}) center/cover no-repeat` : `linear-gradient(135deg, ${selectedProject.brandColors.bg}, #000)` }}
              >
                <div className="absolute inset-0 bg-black/70" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-[1px] w-12" style={{ backgroundColor: selectedProject.brandColors.accent }} />
                    <span className="text-[10px] font-bold tracking-[5px] uppercase" style={{ color: selectedProject.brandColors.accent }}>
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-7xl font-black text-brand-text font-custom uppercase tracking-tighter leading-none mb-8">
                    {selectedProject.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                      <span className="block text-[8px] tracking-[3px] uppercase mb-3 font-mono" style={{ color: selectedProject.brandColors.accent }}>Objective</span>
                      <p className="text-sm text-brand-muted leading-relaxed italic">{selectedProject.objective}</p>
                    </div>
                    <div>
                      <span className="block text-[8px] tracking-[3px] uppercase mb-3 font-mono" style={{ color: selectedProject.brandColors.accent }}>Insight</span>
                      <p className="text-sm text-brand-muted leading-relaxed italic">{selectedProject.insight}</p>
                    </div>
                    <div>
                      <span className="block text-[8px] tracking-[3px] uppercase mb-3 font-mono" style={{ color: selectedProject.brandColors.accent }}>Strategy</span>
                      <p className="text-sm text-brand-muted leading-relaxed italic">{selectedProject.strategy}</p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedProject.framework && (
                <div className="p-10 md:p-16 bg-white/[0.02] border-b border-brand-border">
                  <div className="flex items-center gap-3 mb-10">
                    <SafeIcon icon={FiActivity} className="text-brand-accent" />
                    <span className="text-[9px] tracking-[4px] font-mono text-brand-muted uppercase">Framework Architecture</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedProject.framework.map((f, i) => (
                      <div key={i} className="p-8 bg-brand-bg border border-brand-border rounded-2xl">
                        <div className="text-brand-accent font-mono text-xs mb-4">0{i+1}</div>
                        <h4 className="text-lg font-black text-brand-text uppercase mb-2">{f.title}</h4>
                        <p className="text-sm text-brand-muted leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 md:p-16 border-r border-brand-border">
                  <div className="flex items-center gap-3 mb-10">
                    <SafeIcon icon={FiBarChart2} className="text-brand-accent" />
                    <span className="text-[9px] tracking-[4px] font-mono text-brand-muted uppercase">Performance Signals</span>
                  </div>
                  {metricDefs.map(m => (
                    <MetricRow 
                      key={m.key} 
                      label={m.label} 
                      value={selectedProject.metrics[m.key]} 
                      max={m.max} 
                      accent={selectedProject.brandColors.accent} 
                    />
                  ))}
                  <div className="mt-12 pt-8 border-t border-brand-border">
                    <div className="flex items-center gap-3 mb-3">
                      <SafeIcon icon={FiInfo} className="text-brand-accent" />
                      <span className="text-[9px] tracking-[4px] font-mono text-brand-muted uppercase">How I Read This Data</span>
                    </div>
                    <p className="text-sm text-brand-text/80 leading-relaxed italic font-light">
                      "{selectedProject.metricStory}"
                    </p>
                  </div>
                </div>

                <div className="p-10 md:p-16 bg-white/[0.02] flex flex-col">
                  {selectedProject.sensory ? (
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-10">
                        <SafeIcon icon={FiLayers} className="text-brand-accent" />
                        <span className="text-[9px] tracking-[4px] font-mono text-brand-muted uppercase">Multi-Sensory Execution</span>
                      </div>
                      <div className="space-y-8">
                        {selectedProject.sensory.map((s, i) => (
                          <div key={i} className="flex gap-6">
                            <div className="w-12 h-12 shrink-0 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                              <SafeIcon icon={FiIcons[s.icon] || FiIcons.FiActivity} className="text-brand-accent text-xl" />
                            </div>
                            <div>
                              <h5 className="text-brand-text font-black uppercase tracking-tight mb-1">{s.title}</h5>
                              <p className="text-sm text-brand-muted leading-relaxed">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {selectedProject.secondaryImage && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="mt-12 rounded-2xl overflow-hidden border border-brand-border"
                        >
                          <img src={selectedProject.secondaryImage} alt="Execution Detail" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col justify-between">
                      <div className="p-8 border rounded-xl text-center mb-8" style={{ borderColor: `${selectedProject.brandColors.accent}33`, backgroundColor: `${selectedProject.brandColors.accent}08` }}>
                        <span className="block text-[8px] tracking-[4px] uppercase mb-2 font-mono" style={{ color: selectedProject.brandColors.accent }}>Conversion Rate</span>
                        <div className="text-6xl font-black font-mono" style={{ color: selectedProject.brandColors.glow }}>{selectedProject.metrics.CVR}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <SafeIcon icon={FiCheckCircle} className="text-brand-accent" />
                          <span className="text-[9px] tracking-[4px] font-mono text-brand-muted uppercase">Optimization Outcome</span>
                        </div>
                        <p className="text-sm text-brand-muted leading-relaxed">{selectedProject.optimization}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;