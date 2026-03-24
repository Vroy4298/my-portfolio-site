import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Generate random stars once
const generateStars = (count) =>
    Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
        opacity: Math.random() * 0.6 + 0.2,
    }));

const ORBS = [
    { color: 'rgba(6,182,212,0.18)', size: 600, x: '-10%', y: '5%', delay: 0, duration: 18 },
    { color: 'rgba(139,92,246,0.15)', size: 500, x: '60%', y: '50%', delay: 3, duration: 22 },
    { color: 'rgba(236,72,153,0.10)', size: 400, x: '30%', y: '70%', delay: 6, duration: 26 },
    { color: 'rgba(6,182,212,0.10)', size: 350, x: '80%', y: '10%', delay: 9, duration: 20 },
];

const ScifiBackground = () => {
    const stars = useMemo(() => generateStars(80), []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ background: '#020617' }}>

            {/* ── Scrolling perspective grid ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    animation: 'gridMove 12s linear infinite',
                    opacity: 0.8,
                }}
            />

            {/* ── Horizon fade: darker at top, lighter grid at bottom ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, #020617 0%, transparent 30%, transparent 70%, #020617 100%)',
                }}
            />

            {/* ── Neon floating orbs ── */}
            {ORBS.map((orb, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, 30, -20, 10, 0],
                        y: [0, -25, 15, -10, 0],
                        scale: [1, 1.08, 0.95, 1.04, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute rounded-full"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.x,
                        top: orb.y,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        filter: 'blur(40px)',
                    }}
                />
            ))}

            {/* ── Star field ── */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    animate={{
                        opacity: [star.opacity, star.opacity * 0.2, star.opacity],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        background: star.id % 3 === 0 ? '#8b5cf6' : star.id % 5 === 0 ? '#06b6d4' : '#ffffff',
                        boxShadow: `0 0 ${star.size * 2}px currentColor`,
                    }}
                />
            ))}

            {/* ── Horizontal scan-line sweep ── */}
            <div
                className="absolute left-0 right-0 h-px"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)',
                    animation: 'scanSweep 8s linear infinite',
                    top: 0,
                }}
            />
        </div>
    );
};

export default ScifiBackground;
