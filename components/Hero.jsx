import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown, Eye } from 'lucide-react';

const ROLES = ["Full Stack Developer", "MERN Stack Dev", "Problem Solver", "CSE Student"];

const TERMINAL_LINES = [
    { color: '#06b6d4', text: 'const vivek = {' },
    { color: '#8b5cf6', text: '  role: "Full Stack Dev",' },
    { color: '#8b5cf6', text: '  stack: ["React", "Node.js"],' },
    { color: '#8b5cf6', text: '  db: ["MongoDB", "MySQL"],' },
    { color: '#8b5cf6', text: '  learning: ["Next.js", "AWS"],' },
    { color: '#22c55e', text: '  status: "Open to Opportunities"' },
    { color: '#06b6d4', text: '}' },
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [termLines, setTermLines] = useState([]);

    // Typing effect for roles
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        const typeSpeed = isDeleting ? 40 : 90;

        if (!isDeleting && text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2200);
            return;
        }
        if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
        }, typeSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    // Terminal card animation
    useEffect(() => {
        if (termLines.length < TERMINAL_LINES.length) {
            const timer = setTimeout(() => {
                setTermLines(prev => [...prev, TERMINAL_LINES[prev.length]]);
            }, 350);
            return () => clearTimeout(timer);
        }
    }, [termLines.length]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 mesh-bg">
            {/* Animated background blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="blob absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)' }} />
                <div className="blob blob-delay absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-25"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }} />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-7xl">
                {/* Left — Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="text-left"
                >
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass glow-border"
                    >
                        <span className="pulse-dot" />
                        <span className="text-xs font-medium text-slate-300 tracking-wide">Open to Opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-4 leading-tight tracking-tight">
                        Hi, I'm <br />
                        <span className="gradient-text">Vivek Kumar</span>
                    </h1>

                    {/* Typing subtitle */}
                    <h2 className="text-xl md:text-2xl font-light text-slate-400 mb-6 h-8">
                        <span className="text-cyan-400 font-semibold">{text}</span>
                        <span className="animate-pulse text-cyan-400 ml-0.5">|</span>
                    </h2>

                    <p className="text-base text-slate-400 mb-10 max-w-lg leading-relaxed">
                        Third-year B.Tech CSE student at <span className="text-slate-200 font-medium">Lovely Professional University</span>,
                        building real-world full-stack projects and honing problem-solving skills to be placement-ready.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <motion.button
                            onClick={() => scrollTo('projects')}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3.5 rounded-xl shimmer-btn text-white font-semibold flex items-center justify-center gap-2 btn-glow font-display"
                        >
                            View Projects <ArrowRight size={18} />
                        </motion.button>
                        <motion.a
                            href="https://drive.google.com/file/d/1k2uzddUSTYT0zy2fFrzxF5q_Lou-eqMu/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3.5 rounded-xl glass glow-border text-slate-200 font-semibold flex items-center justify-center gap-2 font-display"
                        >
                            View Resume <Eye size={18} />
                        </motion.a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/Vroy4298" target="_blank" rel="noreferrer"
                            className="p-2.5 rounded-lg glass glow-border text-slate-400 hover:text-cyan-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/vivekkumar123/" target="_blank" rel="noreferrer"
                            className="p-2.5 rounded-lg glass glow-border text-slate-400 hover:text-cyan-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:vivek@example.com"
                            className="p-2.5 rounded-lg glass glow-border text-slate-400 hover:text-cyan-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Right — Terminal Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden md:block"
                >
                    <div className="relative">
                        {/* Glow behind terminal */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-2xl blur-2xl" />
                        <div className="relative glass rounded-2xl overflow-hidden border border-cyan-500/20">
                            {/* Terminal top bar */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <span className="ml-3 text-xs text-slate-500 terminal-text">vivek.config.js</span>
                            </div>
                            {/* Terminal body */}
                            <div className="p-6 min-h-[220px]">
                                <div className="terminal-text space-y-1">
                                    {termLines.map((line, i) => (
                                        <div
                                            key={i}
                                            className="terminal-text-line"
                                            style={{ color: line.color, opacity: 1 }}
                                        >
                                            {line.text}
                                        </div>
                                    ))}
                                    {termLines.length < TERMINAL_LINES.length && (
                                        <span className="text-cyan-400 animate-pulse">▋</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Floating skill badges */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 px-3 py-1.5 glass rounded-lg border border-cyan-500/30 text-xs font-medium text-cyan-400"
                        >
                            ⚛ React
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-4 -left-4 px-3 py-1.5 glass rounded-lg border border-violet-500/30 text-xs font-medium text-violet-400"
                        >
                            🟢 Node.js
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => scrollTo('about')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={24} />
                </motion.div>
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.button>
        </section>
    );
};

export default Hero;
