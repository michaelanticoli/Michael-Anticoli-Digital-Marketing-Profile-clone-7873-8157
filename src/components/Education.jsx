import React from 'react';
import Section from './Section';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Education = ({ education }) => {
  return (
    <Section id="education" title="Education & Certifications" className="bg-slate-900/50 border-y border-slate-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div key={edu.id} className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-800/10 border border-slate-700/50 p-8 hover:border-brand-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <SafeIcon icon={edu.status === 'Completed' ? FiAward : FiBookOpen} className="text-6xl text-brand-500" />
            </div>
            
            <div className="relative z-10">
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                edu.status === 'Completed' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                  : 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
              }`}>
                {edu.status}
              </span>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 leading-tight">
                {edu.degree}
              </h3>
              <div className="text-lg text-slate-400 font-serif italic mb-4">
                {edu.school}
              </div>
              
              <div className="flex items-center justify-between text-sm text-slate-500 mt-6 pt-6 border-t border-slate-700/50">
                <span>{edu.location}</span>
                <span className="font-medium text-slate-400">{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;