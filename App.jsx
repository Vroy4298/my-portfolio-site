import React, { useState, Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import DoorGate from './components/DoorGate';
import ScifiBackground from './components/ScifiBackground';

// Temporary error boundary to surface crash messages
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', color: '#f87171', background: '#020617', fontFamily: 'monospace' }}>
                    <h2>🔴 Component Error</h2>
                    <pre style={{ whiteSpace: 'pre-wrap', color: '#fbbf24' }}>
                        {this.state.error?.message}
                        {'\n\n'}
                        {this.state.error?.stack}
                    </pre>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [introComplete, setIntroComplete] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prev => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newMode;
        });
    };

    return (
        <div className="min-h-screen bg-[#020617] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
            {/* Persistent sci-fi animated background — rendered behind everything */}
            <ScifiBackground />

            {/* Door-gate intro animation — only until introComplete */}
            {!introComplete && (
                <DoorGate onComplete={() => setIntroComplete(true)} />
            )}

            <div className="relative z-10">
                <ErrorBoundary>
                    <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
                </ErrorBoundary>
                <main>
                    <ErrorBoundary><Hero /></ErrorBoundary>
                    <ErrorBoundary><About /></ErrorBoundary>
                    <ErrorBoundary><Skills /></ErrorBoundary>
                    <ErrorBoundary><Projects /></ErrorBoundary>
                    <ErrorBoundary><Experience /></ErrorBoundary>
                    <ErrorBoundary><Certifications /></ErrorBoundary>
                    <ErrorBoundary><Education /></ErrorBoundary>
                    <ErrorBoundary><Contact /></ErrorBoundary>
                </main>
            </div>
        </div>
    );
}

export default App;
