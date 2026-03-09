import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "", light = false }) => {
  return (
    <section id={id} className={`py-24 md:py-32 ${className} ${light ? 'bg-white' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24"
          >
            <span className="text-brand-800 font-bold tracking-widest text-xs uppercase mb-4 block">
              {id}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-950 tracking-tighter leading-none">
              {title}
            </h2>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;