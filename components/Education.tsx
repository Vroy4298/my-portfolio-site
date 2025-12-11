import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Education</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-l-4 hover:border-l-primary transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <GraduationCap size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className="text-primary font-medium">{edu.institution}</p>
              {edu.details && <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{edu.details}</p>}
            </div>
            <div className="text-center md:text-right shrink-0">
              <span className="block text-sm font-bold text-gray-900 dark:text-white">{edu.period}</span>
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full mt-1">
                {edu.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;