import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiCpu } = FiIcons;

function FeaturedProduct({ product }) {
  if (!product) return null;

  return (
    <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-square max-w-xl mx-auto">
              {/* Decorative shapes */}
              <div className="absolute inset-0 bg-brand-accent/10 rounded-[4rem] rotate-3 -z-10" />
              <div className="absolute inset-0 border border-brand-border rounded-[4rem] -rotate-3 -z-10" />
              
              {/* Card Content */}
              <div className="w-full h-full bg-brand-secondary border border-brand-border rounded-[4rem] p-12 flex flex-col items-center justify-center text-center group">
                <div className="w-32 h-32 bg-brand-accent/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <SafeIcon icon={FiCpu} className="text-5xl text-brand-accent" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-brand-text font-custom uppercase tracking-tighter mb-4">
                  {product.title}
                </h3>
                <p className="text-brand-accent font-bold uppercase tracking-widest text-[10px] mb-8">
                  {product.subtitle || "Flagship Innovation"}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {product.metrics.map((m, i) => (
                    <span key={i} className="px-4 py-1.5 bg-brand-bg border border-brand-border rounded-full text-[10px] font-black uppercase tracking-widest text-brand-muted">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-accent/10 rounded-full border border-brand-accent/20">
                <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                <span className="text-xs font-black text-brand-accent uppercase tracking-widest">Featured Innovation</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-brand-text font-custom uppercase tracking-tighter leading-tight">
                Proof of <span className="text-gradient">Product.</span>
              </h2>
              <p className="text-xl text-brand-muted leading-relaxed font-light">
                {product.description}
              </p>
              {/* Removed the empty quotation marks block from here */}
            </div>

            <div className="pt-6">
              <a 
                href={product.link || "#"}
                className="inline-flex items-center gap-4 group"
              >
                <span className="h-16 px-10 bg-brand-text text-brand-bg rounded-full flex items-center justify-center font-black uppercase tracking-widest text-xs group-hover:bg-brand-accent group-hover:text-white transition-all">
                  Launch App
                </span>
                <span className="w-16 h-16 border border-brand-border rounded-full flex items-center justify-center text-xl group-hover:border-brand-accent group-hover:text-brand-accent transition-all">
                  <SafeIcon icon={FiExternalLink} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;