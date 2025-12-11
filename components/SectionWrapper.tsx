import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<Props> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;