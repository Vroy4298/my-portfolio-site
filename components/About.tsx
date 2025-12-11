import React from 'react';
import SectionWrapper from './SectionWrapper';
import { User, Code, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-900/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
            <User size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I am a third-year B.Tech CSE student at Lovely Professional University. I combine technical knowledge with a creative approach to solve complex problems efficiently.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
            <Code size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">What I Do</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I specialize in Full Stack Development (MERN, PHP/Laravel) . I build responsive, accessible, and performant web applications with modern technologies.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
          <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg flex items-center justify-center mb-4">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">My Goal</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Aiming to be placement-ready for top-tier internships/fulltime roles and software engineering roles. I am constantly learning new technologies to stay ahead in the tech curve.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;