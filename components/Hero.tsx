import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

const ROLES = ["Web Developer", "Problem Solver", "CSE Student", "Tech Enthusiast"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
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

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
          >
            Portfolio 2025
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Vivek Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-6 h-10">
            I am a <span className="font-semibold text-gray-900 dark:text-white">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
            I’m a third-year B.Tech CSE student at Lovely Professional University, 
            focused on web development and learning about emerging technologies. I love building real-world projects 
            and sharpening my problem-solving skills to be fully placement-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-indigo-600 transition-all transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
          <motion.a
  href="https://drive.google.com/uc?export=download&id=1XFYw2pYwVOwx1zQDAWN-PpCVSdWPix_y"
  target="_blank"
  rel="noreferrer"
  whileHover={{ scale: 1.07 }}
  whileTap={{ scale: 0.95 }}
  className="relative px-8 py-3.5 rounded-lg font-medium text-white overflow-hidden 
             flex items-center justify-center gap-2 group shadow-lg
             bg-gradient-to-r from-blue-600 to-indigo-600"
>
  {/* Glow Animation */}
  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>

  {/* Top Shine */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-60 transition 
                   duration-500 bg-white/20 rotate-12 blur-xl"></span>

  {/* Content */}
  <span className="relative z-10 flex items-center gap-2">
    Download Resume <Download size={18} />
  </span>
</motion.a>


          </div>

          <div className="mt-8 flex items-center gap-6">
            <a href="https://github.com/Vroy4298" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vivekkumar123/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Visual / Abstract Element for Right Side */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="hidden md:flex justify-center items-center relative"
        >
          {/* Abstract geometric composition */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-gray-700"
            />
             <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dotted border-gray-300 dark:border-gray-700 opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-tr from-primary/80 to-secondary/80 rounded-2xl rotate-3 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 {/* Simulate code interface */}
                 <div className="p-4 space-y-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mt-4 space-y-2 opacity-80">
                        <div className="h-2 w-3/4 bg-white/30 rounded"></div>
                        <div className="h-2 w-1/2 bg-white/30 rounded"></div>
                        <div className="h-2 w-5/6 bg-white/30 rounded"></div>
                        <div className="h-2 w-2/3 bg-white/30 rounded"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;