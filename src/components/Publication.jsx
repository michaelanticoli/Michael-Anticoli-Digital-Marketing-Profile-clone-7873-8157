import React from 'react';
import Section from './Section';
import { FiArrowRight } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Publication = ({ publications }) => {
  const book = publications[0];

  return (
    <Section id="publication" title="Recent Work" light={true}>
      <div className="group relative bg-[#0F172A] rounded-[40px] overflow-hidden shadow-2xl">
        {/* Effervescent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800/20 via-transparent to-brand-400/10 pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-0 relative z-10">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <span className="text-brand-400 font-black tracking-widest text-xs uppercase mb-6">
              New Publication
            </span>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              Everything<br />Is Singing
            </h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-md">
              A paradigm-shifting exploration of reality as a cosmic symphony, published via Moontuner Press.
            </p>
            <a href={book.link} className="inline-flex items-center gap-4 text-white text-lg font-bold group/btn">
              Explore the Book 
              <span className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center group-hover/btn:bg-brand-400 group-hover/btn:translate-x-2 transition-all">
                <SafeIcon icon={FiArrowRight} />
              </span>
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-brand-900 to-brand-950 p-12 md:p-20 flex items-center justify-center min-h-[400px]">
            <div className="relative">
              {/* Abstract Book Representation */}
              <div className="w-64 h-80 bg-white shadow-2xl rounded-sm transform -rotate-6 group-hover:rotate-0 transition-transform duration-700 flex flex-col justify-between p-8 border-r-[10px] border-slate-100">
                <div className="space-y-2">
                  <div className="h-1 w-12 bg-brand-800"></div>
                  <h4 className="text-2xl font-black text-brand-950 leading-none tracking-tighter">EVERYTHING IS SINGING</h4>
                </div>
                <p className="text-[10px] font-black tracking-widest text-brand-800 uppercase">Michael Anticoli</p>
              </div>
              <div className="absolute inset-0 w-64 h-80 bg-brand-400 opacity-20 blur-2xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Publication;