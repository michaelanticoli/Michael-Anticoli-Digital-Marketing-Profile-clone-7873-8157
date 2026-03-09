import React from 'react';
import Section from './Section';

const Experience = ({ experiences }) => {
  return (
    <Section id="experience" title="Work History" light={true}>
      <div className="space-y-32">
        {experiences.map((exp) => (
          <div key={exp.id} className="grid md:grid-cols-12 gap-8 md:gap-16 group">
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <p className="text-brand-800 font-black text-sm tracking-widest uppercase mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  {exp.period}
                </p>
                <h3 className="text-3xl font-black text-brand-950 mb-2 tracking-tighter">
                  {exp.company}
                </h3>
                <p className="text-xl text-brand-400 font-serif italic">
                  {exp.role}
                </p>
                <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                  {exp.location}
                </p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-8">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="relative pl-10 border-l border-slate-100 group-hover:border-brand-200 transition-colors pb-2">
                    <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-white border-2 border-slate-200 rounded-full group-hover:border-brand-400 group-hover:bg-brand-400 transition-all"></div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;