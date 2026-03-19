import React from 'react';
import SectionWrapper from './SectionWrapper';
import { User, Code2, Target, Layers, Briefcase, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const CARDS = [
    {
        icon: User,
        title: "Who I Am",
        desc: "As a third-year B.Tech Computer Science & Engineering student at Lovely Professional University, I blend technical expertise with creative problem-solving. My passion lies in creating efficient algorithms and architecting elegant digital solutions from the ground up.",
        color: "cyan",
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-400",
        glow: "hover:shadow-cyan-500/10"
    },
    {
        icon: Code2,
        title: "What I Do",
        desc: "I specialize in Full Stack Development, leveraging modern technologies like the MERN stack and PHP/Laravel. I craft responsive, highly accessible, and exceptionally performant web applications that deliver seamless user experiences and solve real-world problems.",
        color: "violet",
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-400",
        glow: "hover:shadow-violet-500/10"
    },
    {
        icon: Target,
        title: "My Goal",
        desc: "I am actively preparing to be placement-ready for top-tier software engineering roles. Driven by a thirst for knowledge, I continuously explore emerging technologies and strive to stay ahead of the curve to build scalable, impactful applications.",
        color: "pink",
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-400",
        glow: "hover:shadow-pink-500/10"
    },
];

const STATS = [
    { icon: Layers, value: "3+", label: "Projects Live" },
    { icon: Code2, value: "5+", label: "Tech Stacks" },
    { icon: Briefcase, value: "1", label: "Internship" },
    { icon: Trophy, value: "3rd", label: "Year CSE" },
];

const About = () => {
    return (
        <SectionWrapper id="about" className="section-dark-alt">
            {/* Section Header */}
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    Get to know me
                </motion.p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {CARDS.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            className={`p-7 rounded-2xl glass glow-border card-glow-top transition-all duration-300 hover:shadow-2xl ${card.glow}`}
                        >
                            <div className={`w-12 h-12 ${card.iconBg} ${card.iconColor} rounded-xl flex items-center justify-center mb-5`}>
                                <Icon size={24} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-5 rounded-xl glass glow-border text-center"
                        >
                            <Icon size={18} className="text-cyan-400 mx-auto mb-2" />
                            <div className="text-3xl font-display font-black gradient-text">{stat.value}</div>
                            <div className="text-xs text-slate-500 mt-1 tracking-wide">{stat.label}</div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default About;
