import React, { useState, useRef, useCallback, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Info, MousePointerClick, Layers, Zap, Star } from 'lucide-react';

// ── Category accent palette ───────────────────────────────────────────────────
const CATEGORY_ACCENTS = {
    Frontend: { header: 'text-cyan-400',   bar: 'from-cyan-400 to-cyan-600',      tag: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',   color: '#06b6d4' },
    Backend:  { header: 'text-violet-400', bar: 'from-violet-400 to-violet-600',  tag: 'bg-violet-500/15 text-violet-300 border-violet-500/30', color: '#8b5cf6' },
    Database: { header: 'text-pink-400',   bar: 'from-pink-400 to-pink-600',      tag: 'bg-pink-500/15 text-pink-300 border-pink-500/30',   color: '#ec4899' },
    Core:     { header: 'text-blue-400',   bar: 'from-blue-400 to-blue-600',      tag: 'bg-blue-500/15 text-blue-300 border-blue-500/30',   color: '#3b82f6' },
    Tools:    { header: 'text-amber-400',  bar: 'from-amber-400 to-amber-600',    tag: 'bg-amber-500/15 text-amber-300 border-amber-500/30', color: '#fbbf24' },
};

const profLabel = (p) =>
    p >= 90 ? 'Expert' : p >= 80 ? 'Advanced' : p >= 70 ? 'Intermediate' : 'Beginner';

// Most-used chip list (shown in idle overview)
const MOST_USED_NAMES = ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git'];

// Orbiting icons for the idle animation
const ORBIT_ICONS = [
    { symbol: '⚛',  color: '#61dafb', r: 78, speed: 16, startDeg: 0   },
    { symbol: 'JS', color: '#f7df1e', r: 78, speed: 16, startDeg: 90  },
    { symbol: '⬡',  color: '#68a063', r: 78, speed: 16, startDeg: 180 },
    { symbol: '🍃', color: '#47a248', r: 78, speed: 16, startDeg: 270 },
    { symbol: 'Ex', color: '#aaaaaa', r: 48, speed: 10, startDeg: 45  },
    { symbol: '⌥',  color: '#f05032', r: 48, speed: 10, startDeg: 225 },
];

const STATS_IDLE = [
    { icon: Layers,   value: `${SKILLS.length}`,                                           label: 'Technologies' },
    { icon: Zap,      value: `${Array.from(new Set(SKILLS.map(s => s.category))).length}`, label: 'Categories'   },
    { icon: Briefcase,value: '3',                                                           label: 'Projects'     },
];

// ── Compact horizontal skill card with magnetic cursor ────────────────────────
const SkillCard = ({ skill, isActive, onHover, onLeave }) => {
    const accent = CATEGORY_ACCENTS[skill.category] || CATEGORY_ACCENTS.Frontend;
    const cardRef = useRef(null);
    const [mag, setMag] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        const cx = r.left + r.width  / 2;
        const cy = r.top  + r.height / 2;
        setMag({ x: ((e.clientX - cx) / (r.width  / 2)) * 6, y: ((e.clientY - cy) / (r.height / 2)) * 6 });
    }, []);

    const handleLeave = useCallback(() => { setMag({ x: 0, y: 0 }); onLeave(); }, [onLeave]);

    const dimmed = isActive === false;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={onHover}
            onMouseLeave={handleLeave}
            animate={{ x: mag.x, y: mag.y, opacity: dimmed ? 0.3 : 1, scale: isActive ? 1.03 : 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="relative p-3 rounded-xl cursor-pointer"
            style={{
                background: isActive
                    ? `radial-gradient(circle at 30% 40%, ${skill.color}1a 0%, rgba(6,10,20,0.95) 75%)`
                    : 'rgba(13,17,23,0.65)',
                border: isActive ? `1px solid ${skill.color}65` : '1px solid rgba(255,255,255,0.06)',
                boxShadow: isActive
                    ? `0 0 22px ${skill.color}28, 0 4px 20px rgba(0,0,0,0.4), inset 0 0 20px ${skill.color}06`
                    : '0 2px 8px rgba(0,0,0,0.3)',
                filter: dimmed ? 'grayscale(55%)' : 'none',
                transition: 'background 0.22s, border 0.22s, box-shadow 0.22s, filter 0.22s',
                willChange: 'transform',
            }}
        >
            {/* Top shimmer line on hover */}
            {isActive && (
                <div className="absolute top-0 left-3 right-3 h-px rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }} />
            )}

            {/* Icon + name row */}
            <div className="flex items-center gap-2 mb-2">
                <motion.div
                    animate={isActive ? { scale: 1.22, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-black"
                    style={{
                        background: `${skill.color}18`,
                        border: `1px solid ${skill.color}38`,
                        color: isActive ? skill.color : 'rgba(148,163,184,0.7)',
                        fontFamily: "'Courier New', monospace",
                        boxShadow: isActive ? `0 0 12px ${skill.color}55` : 'none',
                        transition: 'color 0.2s, box-shadow 0.2s',
                    }}
                >
                    {skill.symbol}
                </motion.div>
                <span className="text-xs font-semibold flex-1 truncate"
                    style={{ color: isActive ? skill.color : 'rgba(203,213,225,0.8)', transition: 'color 0.2s' }}>
                    {skill.name}
                </span>
                <span className="text-[10px] font-mono flex-shrink-0"
                    style={{ color: isActive ? skill.color : 'rgba(100,116,139,0.7)', transition: 'color 0.2s' }}>
                    {skill.proficiency}%
                </span>
            </div>

            {/* Progress bar */}
            <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${accent.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.06 }}
                    style={{ boxShadow: isActive ? `0 0 7px ${skill.color}80` : 'none', transition: 'box-shadow 0.22s' }}
                />
            </div>
        </motion.div>
    );
};

// ── Idle dashboard panel (right side before any hover) ────────────────────────
const IdlePanel = ({ featuredSkill }) => {
    const mostUsed = SKILLS.filter(s => MOST_USED_NAMES.includes(s.name));
    return (
        <motion.div
            key="idle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden"
            style={{
                background: 'rgba(5,9,18,0.78)',
                border: '1px solid rgba(6,182,212,0.14)',
                boxShadow: '0 0 0 1px rgba(139,92,246,0.07), 0 0 55px rgba(6,182,212,0.06), 0 10px 35px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(24px)',
            }}
        >
            {/* Gradient top bar */}
            <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 80%, transparent 100%)' }} />

            <div className="p-5 space-y-4">
                {/* Title */}
                <div>
                    <p className="text-[9px] font-mono tracking-[0.28em] text-cyan-500 uppercase mb-1">Skill Intelligence Panel</p>
                    <h3 className="text-white font-display font-bold text-[15px] leading-tight">
                        Explore My{' '}
                        <span style={{ background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Technical Stack
                        </span>
                    </h3>
                    <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">
                        Hover any skill card to explore proficiency, project usage, and experience.
                    </p>
                </div>

                {/* Orbiting animation */}
                <div className="relative flex items-center justify-center" style={{ height: 190 }}>
                    {/* Orbit rings */}
                    {[78, 48].map(r => (
                        <div key={r} className="absolute rounded-full pointer-events-none" style={{
                            width: r * 2 + 22, height: r * 2 + 22,
                            border: '1px solid rgba(6,182,212,0.09)',
                        }} />
                    ))}

                    {/* Centre orb */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], boxShadow: ['0 0 16px rgba(6,182,212,0.28)', '0 0 34px rgba(6,182,212,0.52)', '0 0 16px rgba(6,182,212,0.28)'] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute w-11 h-11 rounded-full flex items-center justify-center z-10"
                        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.26) 0%, rgba(6,182,212,0.04) 100%)', border: '1.5px solid rgba(6,182,212,0.45)' }}
                    >
                        <span className="text-cyan-400 text-sm font-mono font-bold">{'{}'}</span>
                    </motion.div>

                    {/* Orbiting icons */}
                    {ORBIT_ICONS.map((item, i) => (
                        <motion.div key={i} className="absolute" style={{ width: '100%', height: '100%' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: item.speed, repeat: Infinity, ease: 'linear', delay: -(item.startDeg / 360) * item.speed }}
                        >
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: item.speed, repeat: Infinity, ease: 'linear', delay: -(item.startDeg / 360) * item.speed }}
                                className="absolute flex items-center justify-center w-7 h-7 rounded-lg text-[10px] font-black"
                                style={{
                                    top: `calc(50% - ${item.r + 13}px)`, left: 'calc(50% - 14px)',
                                    background: `${item.color}16`, border: `1px solid ${item.color}38`,
                                    color: item.color, fontFamily: "'Courier New', monospace",
                                    boxShadow: `0 0 10px ${item.color}28`,
                                }}
                            >
                                {item.symbol}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                    {STATS_IDLE.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Icon size={12} className="text-cyan-400" />
                            <span className="font-black text-[17px] leading-none font-display"
                                style={{ background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {value}
                            </span>
                            <span className="text-[9px] text-slate-600 uppercase tracking-wide text-center">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Most used */}
                <div>
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em] mb-2">Most Used</p>
                    <div className="flex flex-wrap gap-1.5">
                        {mostUsed.map(s => (
                            <span key={s.name} className="text-[10px] px-2 py-0.5 rounded-md font-semibold"
                                style={{ background: `${s.color}14`, border: `1px solid ${s.color}32`, color: s.color }}>
                                {s.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Auto-cycling featured skill preview */}
                <AnimatePresence mode="wait">
                    {featuredSkill && (
                        <motion.div
                            key={featuredSkill.name}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.38 }}
                            className="p-3 rounded-xl"
                            style={{ background: `${featuredSkill.color}0b`, border: `1px solid ${featuredSkill.color}22` }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-black" style={{ color: featuredSkill.color, fontFamily: "'Courier New', monospace" }}>
                                    {featuredSkill.symbol}
                                </span>
                                <span className="text-xs text-slate-200 font-semibold flex-1">{featuredSkill.name}</span>
                                <span className="text-[10px] font-mono" style={{ color: featuredSkill.color }}>{featuredSkill.proficiency}%</span>
                            </div>
                            <div className="h-1 rounded-full overflow-hidden mb-2" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                <motion.div
                                    className={`h-full rounded-full bg-gradient-to-r ${CATEGORY_ACCENTS[featuredSkill.category]?.bar || 'from-cyan-400 to-cyan-600'}`}
                                    initial={{ width: 0 }} animate={{ width: `${featuredSkill.proficiency}%` }}
                                    transition={{ duration: 0.65, ease: 'easeOut' }}
                                    style={{ boxShadow: `0 0 8px ${featuredSkill.color}60` }}
                                />
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">{featuredSkill.desc}</p>
                            <div className="flex items-center gap-1 mt-1.5">
                                <Star size={9} className="text-slate-600" />
                                <span className="text-[9px] text-slate-600 uppercase tracking-wide">Auto Preview · hover to explore</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA nudge */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: 'rgba(6,182,212,0.05)', border: '1px dashed rgba(6,182,212,0.14)' }}>
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                        <MousePointerClick size={12} className="text-cyan-500" />
                    </motion.div>
                    <p className="text-[11px] text-slate-400">
                        <span className="text-cyan-400 font-semibold">Hover any skill card</span> for full details
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// ── Skill detail panel (shown while a skill is hovered) ───────────────────────
const SkillDetail = ({ skill }) => {
    const accent = CATEGORY_ACCENTS[skill.category] || CATEGORY_ACCENTS.Frontend;
    return (
        <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="w-full rounded-2xl overflow-hidden"
            style={{
                background: 'rgba(5,9,18,0.93)',
                border: `1px solid ${skill.color}38`,
                boxShadow: `0 0 55px ${skill.color}18, 0 8px 32px rgba(0,0,0,0.55)`,
                backdropFilter: 'blur(24px)',
            }}
        >
            <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}40, transparent)` }} />

            <div className="p-5 space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl font-black"
                        style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}45`, color: skill.color,
                            fontFamily: "'Courier New', monospace", boxShadow: `0 0 18px ${skill.color}38` }}>
                        {skill.symbol}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-base leading-tight">{skill.name}</div>
                        <div className={`text-xs font-medium ${accent.header}`}>{skill.category}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                        <div className="text-white font-black text-2xl leading-none">{skill.proficiency}%</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">{profLabel(skill.proficiency)}</div>
                    </div>
                </div>

                {/* Proficiency bar */}
                <div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${accent.bar}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                            style={{ boxShadow: `0 0 10px ${skill.color}75` }}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex gap-2">
                    <Info size={13} className="flex-shrink-0 mt-0.5" style={{ color: skill.color }} />
                    <p className="text-slate-400 text-xs leading-relaxed">{skill.desc}</p>
                </div>

                {/* Projects used in */}
                <div>
                    <div className="flex items-center gap-1.5 mb-2">
                        <Briefcase size={11} style={{ color: skill.color }} />
                        <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: skill.color }}>Used in</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {skill.projects.map(p => (
                            <span key={p} className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${accent.tag}`}>{p}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ── Main component ────────────────────────────────────────────────────────────
const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [featuredIdx, setFeaturedIdx] = useState(0);
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));
    const activeSkill = SKILLS.find(s => s.name === hoveredSkill) || null;

    // Auto-cycle featured preview when nothing is hovered
    useEffect(() => {
        if (hoveredSkill !== null) return;
        const id = setInterval(() => setFeaturedIdx(prev => (prev + 1) % SKILLS.length), 3000);
        return () => clearInterval(id);
    }, [hoveredSkill]);

    return (
        <SectionWrapper id="skills" className="section-dark">
            {/* ── Section header — layout unchanged ── */}
            <div className="text-center mb-16">
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
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

            {/* ── Two-column layout — position unchanged ── */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* LEFT — category containers w/ compact skill cards */}
                <div className="flex-1 space-y-5">
                    {categories.map((category, catIdx) => {
                        const accent = CATEGORY_ACCENTS[category] || CATEGORY_ACCENTS.Frontend;
                        const categorySkills = SKILLS.filter(s => s.category === category);
                        return (
                            <motion.div key={category}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                                className="p-5 rounded-2xl"
                                style={{ background: 'rgba(10,15,26,0.7)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-1.5 h-5 rounded-full" style={{ background: accent.color }} />
                                    <h3 className={`text-sm font-display font-bold tracking-wide ${accent.header}`}>{category}</h3>
                                    <span className="ml-auto text-[10px] text-slate-600 font-mono">{categorySkills.length} skills</span>
                                </div>

                                {/* 2-column skill card grid */}
                                <div className="grid grid-cols-2 gap-2">
                                    {categorySkills.map(skill => (
                                        <SkillCard
                                            key={skill.name}
                                            skill={skill}
                                            isActive={hoveredSkill === null ? null : hoveredSkill === skill.name ? true : false}
                                            onHover={() => setHoveredSkill(skill.name)}
                                            onLeave={() => setHoveredSkill(null)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* RIGHT — sticky interactive panel */}
                <div className="w-full lg:w-80 lg:sticky lg:top-24 flex-shrink-0">
                    <AnimatePresence mode="wait">
                        {activeSkill ? (
                            <SkillDetail key={activeSkill.name} skill={activeSkill} />
                        ) : (
                            <IdlePanel key="idle" featuredSkill={SKILLS[featuredIdx]} />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
