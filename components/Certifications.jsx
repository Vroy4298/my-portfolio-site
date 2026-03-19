import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CERTIFICATIONS, CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, FileBadge } from 'lucide-react';

const Certifications = () => {
    return (
        <SectionWrapper id="certifications" className="section-dark-alt">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    Major Credentials
                </motion.p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    <span className="gradient-text">Certification</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
            </div>

            <div className="flex justify-center gap-6 mb-16">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -6 }}
                        className="group glass glow-border card-glow-top rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 w-full max-w-sm"
                    >
                        {/* Subtle bg glow */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-violet-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div>
                            <div className="w-12 h-12 bg-violet-500/10 text-violet-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Award size={22} />
                            </div>

                            <h3 className="font-display font-bold text-base text-white mb-3 line-clamp-2 min-h-[2.8rem]">
                                {cert.name}
                            </h3>

                            <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                                <span className="text-violet-400 font-medium">{cert.issuer}</span>
                                <span className="flex items-center gap-1">
                                    <CheckCircle size={12} className="text-green-400" /> {cert.date}
                                </span>
                            </div>

                            {cert.description && (
                                <p className="text-slate-500 text-xs leading-relaxed mb-4">{cert.description}</p>
                            )}
                        </div>

                        <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl border border-violet-500/30 text-violet-400 text-xs font-medium hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-200"
                        >
                            View Certification <ExternalLink size={12} />
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* Certificates Section */}
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    Additional Learning
                </motion.p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    <span className="gradient-text">Certificates</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATES.map((cert, index) => (
                    <motion.div
                        key={`cert-${index}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -6 }}
                        className="group glass glow-border card-glow-top rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                    >
                        {/* Subtle bg glow */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div>
                            <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FileBadge size={22} />
                            </div>

                            <h3 className="font-display font-bold text-base text-white mb-3 line-clamp-2 min-h-[2.8rem]">
                                {cert.name}
                            </h3>

                            <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                                <span className="text-cyan-400 font-medium">{cert.issuer}</span>
                                <span className="flex items-center gap-1">
                                    <CheckCircle size={12} className="text-green-400" /> {cert.date}
                                </span>
                            </div>

                            {cert.description && (
                                <p className="text-slate-500 text-xs leading-relaxed mb-4">{cert.description}</p>
                            )}
                        </div>

                        <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl border border-cyan-500/30 text-cyan-400 text-xs font-medium hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                        >
                            View Certificate <ExternalLink size={12} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
