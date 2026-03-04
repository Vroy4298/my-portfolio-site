import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const CATEGORY_ACCENTS = {
    "Frontend": { header: "text-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300" },
    "Backend": { header: "text-violet-400", badge: "bg-violet-500/10 border-violet-500/30 text-violet-300" },
    "Database": { header: "text-pink-400", badge: "bg-pink-500/10 border-pink-500/30 text-pink-300" },
    "Tools": { header: "text-amber-400", badge: "bg-amber-500/10 border-amber-500/30 text-amber-300" },
};

const DEFAULT_ACCENT = { header: "text-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300" };

const Skills = () => {
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.07 } }
    };
    const pill = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
    };

    return (
        <SectionWrapper id="skills" className="section-dark">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    My Toolkit
                </motion.p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-4" />
                <p className="text-slate-400 max-w-xl mx-auto text-sm">
                    A curated toolkit of modern technologies I use to ship full-stack products.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, catIdx) => {
                    const accent = CATEGORY_ACCENTS[category] || DEFAULT_ACCENT;
                    const categorySkills = SKILLS.filter(s => s.category === category);

                    return (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.12, duration: 0.6 }}
                            className="p-6 rounded-2xl glass glow-border card-glow-top"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-5">
                                <div className={`w-2 h-6 rounded-full ${accent.header === "text-cyan-400" ? "bg-cyan-400" :
                                        accent.header === "text-violet-400" ? "bg-violet-400" :
                                            accent.header === "text-pink-400" ? "bg-pink-400" : "bg-amber-400"
                                    }`} />
                                <h3 className={`text-base font-display font-bold ${accent.header}`}>
                                    {category}
                                </h3>
                            </div>

                            {/* Skill pills */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {categorySkills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={pill}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-default ${accent.badge} transition-all`}
                                    >
                                        {skill.icon && <skill.icon size={13} />}
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
