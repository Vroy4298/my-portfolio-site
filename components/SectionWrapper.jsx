import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`py-24 md:py-32 overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
