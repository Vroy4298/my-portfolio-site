import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
             {/* Timeline Line for Mobile */}
             <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:hidden"></div>

            <div className="md:flex gap-8 items-start group">
              {/* Desktop Timeline items */}
              <div className="hidden md:flex flex-col items-end w-1/3 pt-1">
                <span className="text-lg font-bold text-gray-900 dark:text-white">{exp.period}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.company}</span>
              </div>
              
              {/* Divider Dot */}
              <div className="absolute md:relative left-[-4px] md:left-auto w-3 h-3 rounded-full bg-primary border-4 border-white dark:border-gray-900 mt-2 z-10 md:mx-4"></div>

              {/* Content Card */}
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-primary/30 group-hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-2 md:hidden">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                <h4 className="text-md font-medium text-primary mb-4 md:hidden">{exp.company}</h4>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                    {exp.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded">
                            {skill}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;