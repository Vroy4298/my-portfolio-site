import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <SectionWrapper id="education" className="section-dark">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    Academic Background
                </motion.p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    <span className="gradient-text">Education</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        whileHover={{ x: 6 }}
                        className="flex flex-col md:flex-row gap-6 items-center glass glow-border card-glow-top rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center shrink-0">
                            <GraduationCap size={30} />
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-display font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-cyan-400 font-medium text-sm mb-1">{edu.institution}</p>
                            {edu.details && (
                                <p className="text-slate-500 text-sm">{edu.details}</p>
                            )}
                        </div>

                        {/* Period + Score */}
                        <div className="text-center md:text-right shrink-0">
                            <div className="flex items-center justify-center md:justify-end gap-1.5 text-sm text-slate-400 mb-2">
                                <Calendar size={13} />
                                <span>{edu.period}</span>
                            </div>
                            <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 border border-green-500/25 text-xs font-bold rounded-full">
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
