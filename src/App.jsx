import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from './data/resumeData';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FeaturedProduct from './components/FeaturedProduct';
import Skills from './components/Skills';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';

const { FiMenu, FiX, FiLinkedin, FiMail, FiArrowRight, FiDownload } = FiIcons;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approach', href: '#about' },
    { name: 'Product', href: '#featured' },
    { name: 'Work', href: '#projects' },
    { name: 'Expertise', href: '#skills' }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-xl py-4 border-b border-brand-border' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-black tracking-tighter text-brand-text font-custom uppercase"
            whileHover={{ scale: 1.05 }}
          >
            Anticoli<span className="text-brand-accent">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
                {link.name}
              </a>
            ))}
            <a 
              href={resumeData.personal.resumeUrl} 
              download
              className="px-6 py-2.5 bg-brand-accent text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-brand-bg transition-all flex items-center gap-2"
            >
              <SafeIcon icon={FiDownload} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(true)}>
            <SafeIcon icon={FiMenu} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-bg p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-xl font-black font-custom uppercase">Anticoli.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-3xl"><SafeIcon icon={FiX} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-5xl font-black font-custom uppercase tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href={resumeData.personal.resumeUrl}
                download
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center gap-4 text-brand-accent text-2xl font-black uppercase"
              >
                <SafeIcon icon={FiDownload} />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero data={resumeData.personal} />
        <About summary={resumeData.personal.summary} details={resumeData.details} stats={resumeData.stats} />
        
        <div id="featured">
          <FeaturedProduct product={resumeData.featuredProduct} />
        </div>

        <Projects projects={resumeData.projects} />
        <Skills skills={resumeData.skills} />
      </main>

      {/* Footer / Contact */}
      <footer className="py-24 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-brand-text tracking-tighter font-custom leading-none uppercase mb-10">
                Let's Build <br /> <span className="text-gradient">Something.</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${resumeData.personal.email}`} className="px-8 py-4 bg-brand-text text-brand-bg rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-brand-accent hover:text-white transition-all">
                  <SafeIcon icon={FiMail} /> Email Me
                </a>
                <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 border border-brand-border rounded-full flex items-center justify-center text-xl hover:border-brand-accent hover:text-brand-accent transition-all">
                  <SafeIcon icon={FiLinkedin} />
                </a>
                <a href={resumeData.personal.resumeUrl} download className="px-8 py-4 border border-brand-border rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:border-brand-accent hover:text-brand-accent transition-all">
                  <SafeIcon icon={FiDownload} /> Resume
                </a>
              </div>
            </div>
            <div className="lg:text-right flex flex-col justify-end">
              <p className="text-brand-muted text-lg mb-4">© {new Date().getFullYear()} Michael Anticoli. All Rights Reserved.</p>
              <p className="text-brand-muted/60 text-sm uppercase tracking-widest">Los Angeles, California — Strategically Yours.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;