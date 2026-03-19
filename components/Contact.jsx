import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Mail, Github, Linkedin, Send, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIALS = [
    { icon: Mail, label: "Email", value: "vivekkumar.dev541@gmail.com", href: "mailto:vivekkumar.dev541@gmail.com", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
    { icon: Github, label: "GitHub", value: "github.com/Vroy4298", href: "https://github.com/Vroy4298", color: "text-slate-300", bg: "bg-white/5", border: "border-white/10" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vivekkumar123", href: "https://www.linkedin.com/in/vivekkumar123/", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
];

const Contact = () => {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        setTimeout(() => {
            setFormState('success');
            setTimeout(() => setFormState('idle'), 3000);
        }, 1500);
    };

    return (
        <footer className="bg-[#020617] pt-24 pb-10">
            <SectionWrapper id="contact" className="!py-0 mb-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                    >
                        Get in Touch
                    </motion.p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-6" />
                    <p className="text-slate-400 max-w-xl mx-auto text-sm">
                        Have a project in mind or want to chat about opportunities? My inbox is always open.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Left — Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            I'm currently looking for internship and full-time opportunities in software engineering.
                            Whether you have a question or just want to say hi — feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            {SOCIALS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex items-center gap-4 p-4 rounded-xl glass border ${social.border} hover:scale-[1.02] transition-all duration-200 group`}
                                    >
                                        <div className={`w-11 h-11 ${social.bg} ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <Icon size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-slate-500 mb-0.5">{social.label}</p>
                                            <p className={`text-sm font-medium ${social.color} truncate`}>{social.value}</p>
                                        </div>
                                        <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right — Glass Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="glass glow-border rounded-2xl p-8 space-y-5"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 outline-none text-white placeholder-slate-600 transition-all duration-200"
                                placeholder=".."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 outline-none text-white placeholder-slate-600 transition-all duration-200"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 outline-none text-white placeholder-slate-600 transition-all duration-200 resize-none"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={formState !== 'idle'}
                            whileHover={formState === 'idle' ? { scale: 1.02 } : {}}
                            whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                            className={`w-full py-3.5 rounded-xl font-display font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${formState === 'success'
                                ? 'bg-green-500 shadow-lg shadow-green-500/25'
                                : 'shimmer-btn btn-glow'
                                }`}
                        >
                            <AnimatePresence mode='wait'>
                                {formState === 'idle' && (
                                    <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                        Send Message <Send size={17} />
                                    </motion.span>
                                )}
                                {formState === 'submitting' && (
                                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        Sending...
                                    </motion.span>
                                )}
                                {formState === 'success' && (
                                    <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                        Message Sent! <Check size={17} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.form>
                </div>
            </SectionWrapper>

            {/* Footer bar */}
            <div className="container mx-auto px-6 text-center pt-8 border-t border-white/5 max-w-7xl">
                <p className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} <span className="gradient-text font-semibold">Vivek Kumar</span>. Built with React & Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Contact;
