import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Certifications
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
        <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ y: -5, rotateX: 5 }}
  className="relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 
             shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group
             flex flex-col justify-between overflow-hidden"
>
  {/* TOP CONTENT */}
  <div>
    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Award size={24} />
    </div>

    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem]">
      {cert.name}
    </h3>

    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
      <span>{cert.issuer}</span>
      <span className="flex items-center gap-1">
        <CheckCircle size={14} className="text-green-500" /> {cert.date}
      </span>
    </div>
  </div>

  {/* BUTTON */}
  <a
    href={cert.url}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-5 inline-block px-3 py-2 text-xs font-medium rounded-lg bg-blue-600 text-white 
               hover:bg-blue-700 transition-all w-full text-center z-10"
  >
    View Certificate →
  </a>

  {/* HOVER OVERLAY DESCRIPTION */}
<div
  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
             flex items-center justify-center px-4 text-center
             transition-all duration-300 ease-in-out backdrop-blur-sm"
>
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="text-white text-sm leading-relaxed"
  >
    {cert.description}
  </motion.p>
</div>

</motion.div>


        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
