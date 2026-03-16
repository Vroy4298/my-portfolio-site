import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = NAV_LINKS.map(link => link.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 150)) {
                    current = section;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'glass border-b border-cyan-500/10 py-3 shadow-lg shadow-black/20'
                : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, '#')}
                    className="text-2xl font-display font-bold tracking-tight"
                >
                    <span className="gradient-text">VK.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`relative text-sm font-medium transition-colors duration-200 ${activeSection === link.href.substring(1)
                                    ? 'text-cyan-400'
                                    : 'text-slate-400 hover:text-slate-100'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.span
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                                />
                            )}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full glass glow-border text-slate-300 hover:text-cyan-400 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full glass text-slate-300"
                    >
                        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1 text-slate-200"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-cyan-500/10 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 px-6 py-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-lg font-medium ${activeSection === link.href.substring(1)
                                            ? 'text-cyan-400'
                                            : 'text-slate-300'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
