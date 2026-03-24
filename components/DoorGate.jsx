import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HudCorner = ({ pos }) => {
    const corners = {
        tl: 'top-0 left-0 border-t-2 border-l-2 rounded-tl-sm',
        tr: 'top-0 right-0 border-t-2 border-r-2 rounded-tr-sm',
        bl: 'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-sm',
        br: 'bottom-0 right-0 border-b-2 border-r-2 rounded-br-sm',
    };
    return (
        <div
            className={`absolute w-6 h-6 ${corners[pos]}`}
            style={{ borderColor: 'rgba(6,182,212,0.8)' }}
        />
    );
};

const ScanLine = () => (
    <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
        }}
    />
);

const BOOT_LINES = [
    'INITIALIZING NEURAL INTERFACE…',
    'SCANNING BIOMETRIC DATA…',
    'LOADING PORTFOLIO MATRIX…',
    'ACCESS GRANTED ✓',
];

const DoorGate = ({ onComplete }) => {
    const [phase, setPhase] = useState('idle'); // idle → boot → open → done
    const [bootStep, setBootStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);

    // Start boot sequence
    useEffect(() => {
        const t = setTimeout(() => setPhase('boot'), 200);
        return () => clearTimeout(t);
    }, []);

    // Animate progress bar + boot lines together
    useEffect(() => {
        if (phase !== 'boot') return;

        // Progress bar from 0 → 100 over 1.6s
        let prog = 0;
        const interval = setInterval(() => {
            prog += 2.5;
            setProgress(Math.min(prog, 100));
            if (prog >= 100) clearInterval(interval);
        }, 40);

        // Boot text lines, one every 300ms
        let step = 0;
        const lineInterval = setInterval(() => {
            step += 1;
            setBootStep(step);
            if (step >= BOOT_LINES.length) {
                clearInterval(lineInterval);
                setTimeout(() => setPhase('open'), 200);
            }
        }, 320);

        return () => {
            clearInterval(interval);
            clearInterval(lineInterval);
        };
    }, [phase]);

    // After doors open, fadeout overlay
    useEffect(() => {
        if (phase === 'open') {
            const t = setTimeout(() => {
                setVisible(false);
                setTimeout(onComplete, 600);
            }, 1000);
            return () => clearTimeout(t);
        }
    }, [phase, onComplete]);

    const doorVariants = {
        closed: { scaleX: 1, opacity: 1 },
        open: {
            scaleX: 0,
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
        },
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="gate-overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
                    style={{ background: '#020617' }}
                >
                    {/* Left Door Panel */}
                    <motion.div
                        key="door-left"
                        variants={doorVariants}
                        initial="closed"
                        animate={phase === 'open' ? 'open' : 'closed'}
                        style={{ transformOrigin: 'left center' }}
                        className="absolute left-0 top-0 w-1/2 h-full flex flex-col items-start justify-center overflow-hidden"
                    >
                        {/* Panel background */}
                        <div className="absolute inset-0" style={{
                            background: 'linear-gradient(135deg, #040d1f 0%, #0a1628 50%, #061224 100%)',
                            borderRight: '2px solid rgba(6,182,212,0.6)',
                            boxShadow: 'inset -20px 0 60px rgba(6,182,212,0.08)'
                        }} />
                        <ScanLine />
                        {/* Vertical accent lines */}
                        <div className="absolute top-0 bottom-0" style={{ right: '20%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(6,182,212,0.4), transparent)' }} />
                        <div className="absolute top-0 bottom-0" style={{ right: '40%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.2), transparent)' }} />
                        {/* HUD element top-left */}
                        <div className="absolute top-8 left-8 text-xs font-mono" style={{ color: 'rgba(6,182,212,0.5)', letterSpacing: '0.15em' }}>
                            SYS://PORT-A
                        </div>
                        <div className="absolute bottom-8 left-8 text-xs font-mono" style={{ color: 'rgba(6,182,212,0.4)', letterSpacing: '0.1em' }}>
                            ◈ SECTOR 01
                        </div>
                        {/* Glow strip on seam edge */}
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            className="absolute top-0 bottom-0 right-0 w-1"
                            style={{ background: 'linear-gradient(to bottom, transparent 0%, #06b6d4 40%, #8b5cf6 60%, transparent 100%)' }}
                        />
                    </motion.div>

                    {/* Right Door Panel */}
                    <motion.div
                        key="door-right"
                        variants={doorVariants}
                        initial="closed"
                        animate={phase === 'open' ? 'open' : 'closed'}
                        style={{ transformOrigin: 'right center' }}
                        className="absolute right-0 top-0 w-1/2 h-full flex flex-col items-end justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0" style={{
                            background: 'linear-gradient(225deg, #040d1f 0%, #0a1628 50%, #061224 100%)',
                            borderLeft: '2px solid rgba(6,182,212,0.6)',
                            boxShadow: 'inset 20px 0 60px rgba(6,182,212,0.08)'
                        }} />
                        <ScanLine />
                        <div className="absolute top-0 bottom-0" style={{ left: '20%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(6,182,212,0.4), transparent)' }} />
                        <div className="absolute top-0 bottom-0" style={{ left: '40%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.2), transparent)' }} />
                        <div className="absolute top-8 right-8 text-xs font-mono" style={{ color: 'rgba(6,182,212,0.5)', letterSpacing: '0.15em' }}>
                            SYS://PORT-B
                        </div>
                        <div className="absolute bottom-8 right-8 text-xs font-mono" style={{ color: 'rgba(6,182,212,0.4)', letterSpacing: '0.1em' }}>
                            SECTOR 02 ◈
                        </div>
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: 0.1 }}
                            className="absolute top-0 bottom-0 left-0 w-1"
                            style={{ background: 'linear-gradient(to bottom, transparent 0%, #06b6d4 40%, #8b5cf6 60%, transparent 100%)' }}
                        />
                    </motion.div>

                    {/* Center HUD overlay — boot text + progress */}
                    <AnimatePresence>
                        {phase !== 'open' && (
                            <motion.div
                                key="hud-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10 flex flex-col items-center gap-6 px-8"
                            >
                                {/* Logo / name */}
                                <div className="relative">
                                    <HudCorner pos="tl" />
                                    <HudCorner pos="tr" />
                                    <HudCorner pos="bl" />
                                    <HudCorner pos="br" />
                                    <div className="px-8 py-5 text-center">
                                        <div className="text-xs font-mono tracking-[0.4em] mb-2" style={{ color: 'rgba(6,182,212,0.6)' }}>
                                            WELCOME TO
                                        </div>
                                        <div
                                            className="text-4xl md:text-6xl font-black tracking-tight mb-1"
                                            style={{
                                                fontFamily: 'Outfit, sans-serif',
                                                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            VIVEK KUMAR
                                        </div>
                                        <div className="text-xs font-mono tracking-[0.3em]" style={{ color: 'rgba(139,92,246,0.7)' }}>
                                            FULL STACK DEVELOPER ◈ CSE STUDENT
                                        </div>
                                    </div>
                                </div>

                                {/* Boot lines */}
                                <div className="w-72 md:w-96 space-y-1">
                                    {BOOT_LINES.slice(0, bootStep).map((line, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-xs font-mono flex items-center gap-2"
                                            style={{ color: i === bootStep - 1 ? '#06b6d4' : 'rgba(148,163,184,0.5)' }}
                                        >
                                            <span style={{ color: '#22c55e' }}>▸</span>
                                            {line}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Progress bar */}
                                <div className="w-72 md:w-96">
                                    <div className="flex justify-between text-xs font-mono mb-1" style={{ color: 'rgba(6,182,212,0.5)' }}>
                                        <span>LOADING</span>
                                        <span>{Math.round(progress)}%</span>
                                    </div>
                                    <div className="h-1 rounded-full" style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.2)' }}>
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{
                                                width: `${progress}%`,
                                                background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                                                boxShadow: '0 0 10px rgba(6,182,212,0.6)',
                                            }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DoorGate;
