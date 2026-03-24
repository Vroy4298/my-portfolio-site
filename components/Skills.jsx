import React, { useState, useRef, useCallback } from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, BarChart2, Info } from 'lucide-react';

// ── Category accent colours ──────────────────────────────────────────────────
const CATEGORY_ACCENTS = {
    Frontend:  { header: 'text-cyan-400',   bar: 'from-cyan-400 to-cyan-600',   ring: 'rgba(6,182,212,', tag: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' },
    Backend:   { header: 'text-violet-400', bar: 'from-violet-400 to-violet-600', ring: 'rgba(139,92,246,', tag: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
    Database:  { header: 'text-pink-400',   bar: 'from-pink-400 to-pink-600',    ring: 'rgba(236,72,153,',  tag: 'bg-pink-500/15 text-pink-300 border-pink-500/30' },
    Core:      { header: 'text-blue-400',   bar: 'from-blue-400 to-blue-600',    ring: 'rgba(59,130,246,',  tag: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
    Tools:     { header: 'text-amber-400',  bar: 'from-amber-400 to-amber-600',  ring: 'rgba(251,191,36,',  tag: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
};
const DEFAULT_ACCENT = CATEGORY_ACCENTS.Frontend;

// ── Proficiency label helper ──────────────────────────────────────────────────
const profLabel = (p) => {
    if (p >= 90) return 'Expert';
    if (p >= 80) return 'Advanced';
    if (p >= 70) return 'Intermediate';
    return 'Beginner';
};

// ── Single skill icon tile ────────────────────────────────────────────────────
const SkillIcon = ({ skill, isHovered, onHover, onLeave }) => {
    const tileRef = useRef(null);
    const accent = CATEGORY_ACCENTS[skill.category] || DEFAULT_ACCENT;

    const handleMouseMove = useCallback((e) => {
        if (!tileRef.current) return;
        const rect = tileRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Max ±18° tilt from centre
        const rotY = ((e.clientX - cx) / (rect.width / 2)) * 18;
        const rotX = -((e.clientY - cy) / (rect.height / 2)) * 18;
        tileRef.current.style.transform =
            `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.18)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (tileRef.current) tileRef.current.style.transform = '';
        onLeave();
    }, [onLeave]);

    return (
        <motion.div
            className="relative flex flex-col items-center gap-2 cursor-pointer group select-none"
            onMouseEnter={onHover}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            style={{
                opacity: isHovered === false ? 0.3 : 1,
                filter: isHovered === false ? 'grayscale(60%)' : 'none',
                transition: 'opacity 0.25s, filter 0.25s',
                willChange: 'opacity, filter',
            }}
        >
            {/* Icon hexagon tile */}
            <div
                ref={tileRef}
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-100"
                style={{
                    background: isHovered
                        ? `radial-gradient(circle at 40% 35%, ${skill.color}28 0%, #0d1117 80%)`
                        : 'rgba(13,17,23,0.7)',
                    border: isHovered
                        ? `1.5px solid ${skill.color}80`
                        : '1.5px solid rgba(255,255,255,0.07)',
                    boxShadow: isHovered
                        ? `0 0 22px ${skill.color}50, 0 0 6px ${skill.color}30`
                        : '0 2px 8px rgba(0,0,0,0.4)',
                    willChange: 'transform',
                }}
            >
                {/* Symbol */}
                <span
                    className="text-xl font-black leading-none select-none"
                    style={{
                        color: isHovered ? skill.color : 'rgba(148,163,184,0.75)',
                        fontFamily: "'Courier New', monospace",
                        textShadow: isHovered ? `0 0 12px ${skill.color}90` : 'none',
                        transition: 'color 0.2s, text-shadow 0.2s',
                    }}
                >
                    {skill.symbol}
                </span>

                {/* Corner bracket — shows on hover */}
                {isHovered && (
                    <>
                        <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l rounded-tl-sm" style={{ borderColor: skill.color }} />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r rounded-tr-sm" style={{ borderColor: skill.color }} />
                        <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l rounded-bl-sm" style={{ borderColor: skill.color }} />
                        <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r rounded-br-sm" style={{ borderColor: skill.color }} />
                    </>
                )}
            </div>

            {/* Name label */}
            <span
                className="text-[11px] font-medium text-center leading-tight max-w-[68px]"
                style={{
                    color: isHovered ? skill.color : 'rgba(148,163,184,0.6)',
                    transition: 'color 0.2s',
                }}
            >
                {skill.name}
            </span>
        </motion.div>
    );
};

// ── Tooltip card ─────────────────────────────────────────────────────────────
const SkillTooltip = ({ skill }) => {
    const accent = CATEGORY_ACCENTS[skill.category] || DEFAULT_ACCENT;
    return (
        <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full rounded-2xl overflow-hidden"
            style={{
                background: 'rgba(6,10,20,0.92)',
                border: `1px solid ${skill.color}35`,
                boxShadow: `0 0 40px ${skill.color}18, 0 8px 32px rgba(0,0,0,0.5)`,
                backdropFilter: 'blur(20px)',
            }}
        >
            {/* Top accent bar */}
            <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }} />

            <div className="p-5">
                {/* Header row */}
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-black"
                        style={{
                            background: `${skill.color}18`,
                            border: `1px solid ${skill.color}40`,
                            color: skill.color,
                            fontFamily: "'Courier New', monospace",
                        }}
                    >
                        {skill.symbol}
                    </div>
                    <div>
                        <div className="text-white font-bold text-base leading-tight">{skill.name}</div>
                        <div className={`text-xs font-medium ${accent.header}`}>{skill.category}</div>
                    </div>
                    <div className="ml-auto text-right">
                        <div className="text-white font-black text-lg leading-none">{skill.proficiency}%</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">{profLabel(skill.proficiency)}</div>
                    </div>
                </div>

                {/* Proficiency bar */}
                <div className="mb-4">
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${accent.bar}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                            style={{ boxShadow: `0 0 8px ${skill.color}70` }}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex gap-2 mb-4">
                    <Info size={13} className="flex-shrink-0 mt-0.5" style={{ color: skill.color }} />
                    <p className="text-slate-400 text-xs leading-relaxed">{skill.desc}</p>
                </div>

                {/* Projects used in */}
                <div>
                    <div className="flex items-center gap-1.5 mb-2">
                        <Briefcase size={11} style={{ color: skill.color }} />
                        <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: skill.color }}>
                            Used in
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {skill.projects.map((p) => (
                            <span
                                key={p}
                                className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${accent.tag}`}
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ── Main Skills component ─────────────────────────────────────────────────────
const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

    const activeSkill = SKILLS.find((s) => s.name === hoveredSkill) || null;

    return (
        <SectionWrapper id="skills" className="section-dark">
            {/* ── Section header (unchanged position) ── */}
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

            {/* ── Main two-column layout: icon grid + floating tooltip ── */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* LEFT — Category icon grid */}
                <div className="flex-1 space-y-8">
                    {categories.map((category, catIdx) => {
                        const accent = CATEGORY_ACCENTS[category] || DEFAULT_ACCENT;
                        const categorySkills = SKILLS.filter((s) => s.category === category);

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                                className="p-6 rounded-2xl"
                                style={{
                                    background: 'rgba(13,17,23,0.55)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    backdropFilter: 'blur(12px)',
                                }}
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-2 mb-5">
                                    <div
                                        className="w-1.5 h-5 rounded-full"
                                        style={{
                                            background: `linear-gradient(to bottom, ${
                                                accent.header.replace('text-', '').replace('-400', '')
                                            }, transparent)`,
                                            backgroundColor: accent.header.includes('cyan') ? '#06b6d4'
                                                : accent.header.includes('violet') ? '#8b5cf6'
                                                : accent.header.includes('pink') ? '#ec4899'
                                                : accent.header.includes('blue') ? '#3b82f6' : '#fbbf24'
                                        }}
                                    />
                                    <h3 className={`text-sm font-display font-bold tracking-wide ${accent.header}`}>
                                        {category}
                                    </h3>
                                    <span className="ml-auto text-xs text-slate-600 font-mono">{categorySkills.length} skills</span>
                                </div>

                                {/* Icon grid */}
                                <div className="flex flex-wrap gap-4">
                                    {categorySkills.map((skill) => (
                                        <SkillIcon
                                            key={skill.name}
                                            skill={skill}
                                            isHovered={
                                                hoveredSkill === null
                                                    ? null          // nothing hovered — all normal
                                                    : hoveredSkill === skill.name
                                                        ? true      // THIS one is hovered
                                                        : false     // another is hovered — dim this
                                            }
                                            onHover={() => setHoveredSkill(skill.name)}
                                            onLeave={() => setHoveredSkill(null)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* RIGHT — Sticky tooltip / prompt panel */}
                <div className="w-full lg:w-80 lg:sticky lg:top-24 flex-shrink-0">
                    <AnimatePresence mode="wait">
                        {activeSkill ? (
                            <SkillTooltip key={activeSkill.name} skill={activeSkill} />
                        ) : (
                            <motion.div
                                key="prompt"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="rounded-2xl flex flex-col items-center justify-center gap-4 py-16 px-8 text-center"
                                style={{
                                    background: 'rgba(13,17,23,0.5)',
                                    border: '1px dashed rgba(255,255,255,0.08)',
                                }}
                            >
                                {/* Animated cursor icon */}
                                <motion.div
                                    animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}
                                >
                                    <BarChart2 size={22} className="text-cyan-500" />
                                </motion.div>
                                <div>
                                    <p className="text-slate-300 font-medium text-sm mb-1">Hover a skill icon</p>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        See proficiency, projects I used it in, and my experience with each technology.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
