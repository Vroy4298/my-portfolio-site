import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GitMerge } from 'lucide-react';

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="section-dark">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    Career Path
                </motion.p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
                {/* Central glowing line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line opacity-30 -translate-x-1/2" />

                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className={`relative flex gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Time label — desktop only */}
                        <div className={`hidden md:flex flex-col w-[calc(50%-40px)] ${index % 2 === 0 ? 'items-end text-right' : 'items-start text-left'} pt-1`}>
                            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                                <Calendar size={15} />
                                <span className="text-sm">{exp.period}</span>
                            </div>
                            <span className="text-slate-500 text-xs mt-1">{exp.company}</span>
                        </div>

                        {/* Timeline node — pulsing dot */}
                        <div className="relative flex-shrink-0 flex items-start justify-center w-12 md:w-20">
                            <div className="absolute top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] z-10" />
                            {/* Outer ring */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-0 w-6 h-6 rounded-full border border-cyan-400/50"
                            />
                        </div>

                        {/* Card */}
                        <div className="flex-1 md:w-[calc(50%-40px)]">
                            {/* Mobile time badges */}
                            <div className="flex items-center gap-3 mb-3 md:hidden">
                                <span className="flex items-center gap-1 text-xs text-cyan-400 font-medium">
                                    <Calendar size={12} /> {exp.period}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-slate-500">
                                    <MapPin size={12} /> {exp.company}
                                </span>
                            </div>

                            <div className="p-6 glass glow-border card-glow-top rounded-2xl hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${exp.isOpenSource ? 'bg-violet-500/15' : 'bg-cyan-500/10'}`}>
                                        {exp.isOpenSource
                                            ? <GitMerge size={18} className="text-violet-400" />
                                            : <Briefcase size={18} className="text-cyan-400" />
                                        }
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="text-lg font-display font-bold text-white">{exp.role}</h3>
                                            {exp.isOpenSource && (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/40"
                                                    style={{ background: 'rgba(139,92,246,0.12)' }}>
                                                    🌐 Open Source
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-sm hidden md:block ${exp.isOpenSource ? 'text-violet-400' : 'text-cyan-400'}`}>{exp.company}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                                            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${exp.isOpenSource ? 'bg-violet-400' : 'bg-cyan-400'}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="tech-pill">{skill}</span>
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
