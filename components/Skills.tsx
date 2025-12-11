import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper id="skills">
       <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A toolkit of modern technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-l-4 border-primary pl-3">
              {category}
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill.icon && <skill.icon size={16} className="text-primary" />}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;