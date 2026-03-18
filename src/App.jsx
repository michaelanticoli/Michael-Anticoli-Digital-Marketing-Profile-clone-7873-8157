import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import resumeData from './data/resumeData';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FeaturedProduct from './components/FeaturedProduct';
import Skills from './components/Skills';
import IdentityMixer from './components/IdentityMixer';

const { FiMenu, FiX, FiLinkedin, FiMail, FiArrowRight, FiDownload } = FiIcons;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { name: 'Home', href: 'https://michaelanticoli.com' },
  { name: 'Featured', href: '#featured' },
  { name: 'Works', href: '#projects' },
  { name: 'Audio', href: 'https://audio.michaelanticoli.com' },
  { name: 'About', href: '#about' },
];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-brand-bg font-sans overflow-x-hidden">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-brand-bg/90 backdrop-blur-xl border-b border-brand-border' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <span className="text-brand-bg font-black text-xl leading-none">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter leading-tight uppercase group-hover:text-brand-accent transition-colors">{resumeData.personal.name}</span>
              <span className="text-[10px] text-brand-muted tracking-[0.2em] font-bold uppercase opacity-60">Digital Strategy</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-muted hover:text-brand-accent transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href={`mailto:${resumeData.personal.email}`}
              className="px-6 py-2.5 bg-brand-accent text-brand-bg text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:scale-105 transition-all active:scale-95 shadow-lg shadow-brand-accent/20"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden text-brand-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black text-brand-text uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero data={resumeData.personal} />
        <About summary={resumeData.personal.summary} details={resumeData.details} stats={resumeData.stats} />
        <FeaturedProduct product={resumeData.featuredProduct} />
        <Projects projects={resumeData.projects} />
        <IdentityMixer roles={resumeData.personal.roles} tagline={resumeData.personal.tagline} />
        <Skills skills={resumeData.skills} />
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-brand-border bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-6xl font-black text-brand-text mb-6 tracking-tighter leading-none uppercase">
                Let's Build <br /> <span className="text-gradient">Tomorrow</span>.
              </h2>
              <p className="text-brand-muted text-lg font-light mb-8">
                Currently exploring the intersection of human storytelling and artificial intelligence.
              </p>
              <div className="flex gap-6">
                <a href={resumeData.personal.linkedin} className="text-brand-text hover:text-brand-accent transition-colors">
                  <SafeIcon icon={FiLinkedin} className="text-2xl" />
                </a>
                <a href={`mailto:${resumeData.personal.email}`} className="text-brand-text hover:text-brand-accent transition-colors">
                  <SafeIcon icon={FiMail} className="text-2xl" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={resumeData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-brand-text hover:text-brand-accent transition-colors bg-brand-secondary p-6 rounded-2xl border border-brand-border group"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <SafeIcon icon={FiDownload} className="text-brand-accent group-hover:text-brand-bg transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-1">Portfolio Asset</div>
                  <div className="font-black uppercase tracking-tight">Download Full CV</div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between gap-6 text-[10px] font-bold tracking-[0.2em] text-brand-muted uppercase">
            <span>&copy; {new Date().getFullYear()} {resumeData.personal.name}</span>
            <span>Digital Strategy • AI Brand Systems</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
