import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Web", "React", "PHP", "IoT"];

    const filteredProjects = filter === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter || p.techStack.includes(filter));

    return (
        <SectionWrapper id="projects" className="section-dark-alt">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
                >
                    My Work
                </motion.p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-6" />
                <p className="text-slate-400 mb-10 text-sm max-w-xl mx-auto">
                    A selection of projects that showcase my skills and passion for coding.
                </p>

                {/* Filter pills */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'shimmer-btn text-white shadow-lg shadow-cyan-500/25'
                                    : 'glass glow-border text-slate-400 hover:text-white'
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.35 }}
                            key={project.id}
                            whileHover={{ y: -6 }}
                            className="group glass glow-border card-glow-top rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 flex flex-col"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-cyan-900/30 to-violet-900/30">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                                />
                                {/* Overlay with links */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex gap-3">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noreferrer"
                                                className="p-2 glass rounded-full text-white hover:text-cyan-400 transition-colors"
                                                title="View Code">
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.demoLink && (
                                            <a href={project.demoLink} target="_blank" rel="noreferrer"
                                                className="p-2 glass rounded-full text-white hover:text-cyan-400 transition-colors"
                                                title="Live Demo">
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="tech-pill">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
};

export default Projects;
