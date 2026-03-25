import React from 'react';
import SectionWrapper from './SectionWrapper';
import { GraduationCap, Calendar, BarChart2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const EDUCATION = [
    {
        degree: "B.Tech – Computer Science & Engineering",
        institution: "Lovely Professional University",
        period: "2023 – 2027 (Expected)",
        details: "Focus: Web Development, Cloud Computing, DSA",
        score: null,
        scoreValue: null,
        accent: "cyan",
        icon: GraduationCap,
    },
    {
        degree: "Senior Secondary (12th)",
        institution: "Kendriya Vidyalaya",
        period: "2023",
        details: "Science stream – Physics, Chemistry, Mathematics",
        score: "78%",
        scoreValue: 78,
        accent: "violet",
        icon: BookOpen,
    },
    {
        degree: "Secondary (10th)",
        institution: "Kendriya Vidyalaya",
        period: "2021",
        details: "All subjects – Excellent academic record",
        score: "82%",
        scoreValue: 82,
        accent: "cyan",
        icon: BookOpen,
    },
];

const accentMap = {
    cyan: {
        dot: "bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]",
        border: "hover:border-cyan-500/50",
        iconBg: "bg-cyan-500/10 text-cyan-400",
        scoreFill: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        label: "text-cyan-400",
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
    },
    violet: {
        dot: "bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]",
        border: "hover:border-violet-500/50",
        iconBg: "bg-violet-500/10 text-violet-400",
        scoreFill: "bg-gradient-to-r from-violet-500 to-violet-300",
        label: "text-violet-400",
        badge: "bg-violet-500/10 text-violet-300 border-violet-500/25",
    },
};

const Education = () => {
    return (
        <SectionWrapper id="education" className="section-dark">
            {/* Section Header */}
            <div className="text-center mb-20">
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

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">

                {/* Vertical glowing line (desktop) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent" />

                {/* Vertical line (mobile) */}
                <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent" />

                <div className="space-y-14">
                    {EDUCATION.map((edu, index) => {
                        const isLeft = index % 2 === 0;
                        const colors = accentMap[edu.accent];
                        const Icon = edu.icon;

                        return (
                            <div key={index} className="relative flex items-start md:items-center">

                                {/* Timeline dot — desktop center */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.4 }}
                                    className={`hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-2 border-[#0f1117] items-center justify-center ${colors.dot}`}
                                />

                                {/* Timeline dot — mobile left */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.4 }}
                                    className={`md:hidden shrink-0 mt-6 w-4 h-4 rounded-full border-2 border-[#0f1117] z-10 relative ${colors.dot}`}
                                />

                                {/* Card — alternating sides on desktop, always right on mobile */}
                                <div className={`w-full md:w-[calc(50%-2.5rem)] ml-8 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ y: -5, boxShadow: '0 8px 40px rgba(6,182,212,0.12)' }}
                                        className={`relative rounded-2xl p-6 border border-white/10 transition-all duration-300 ${colors.border}`}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                        }}
                                    >
                                        {/* Icon + Degree */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colors.iconBg}`}>
                                                <Icon size={22} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-display font-bold text-white leading-snug">
                                                    {edu.degree}
                                                </h3>
                                                <p className={`text-sm font-semibold mt-0.5 ${colors.label}`}>
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        {edu.details && (
                                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                                {edu.details}
                                            </p>
                                        )}

                                        {/* Year + Score row */}
                                        <div className="flex flex-wrap items-center gap-3">
                                            {/* Year badge */}
                                            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                                <Calendar size={11} />
                                                <span>{edu.period}</span>
                                            </div>

                                            {/* Score badge (if exists) */}
                                            {edu.score && (
                                                <div className={`flex items-center gap-1.5 text-xs font-bold border rounded-full px-3 py-1 ${colors.badge}`}>
                                                    <BarChart2 size={11} />
                                                    <span>Score: {edu.score}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Progress bar (only for scored entries) */}
                                        {edu.scoreValue && (
                                            <div className="mt-4">
                                                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                                                    <span>Academic Score</span>
                                                    <span className={colors.label}>{edu.scoreValue}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${edu.scoreValue}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.2 + 0.3, duration: 1, ease: 'easeOut' }}
                                                        className={`h-full rounded-full ${colors.scoreFill}`}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
