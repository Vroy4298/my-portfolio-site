import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10">
      <SectionWrapper id="contact" className="!py-0 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities and conversations.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:vivekkumar.dev@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                  <p className="font-semibold text-gray-900 dark:text-white">vivekkumar.dev541@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                 <a href="https://github.com/Vroy4298" className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                    <Github size={24} />
                 </a>
                 <a href="https://www.linkedin.com/in/vivekkumar123/" className="w-12 h-12 bg-blue-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-blue-600 dark:text-gray-300 hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1">
                    <Linkedin size={24} />
                 </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
                  formState === 'success' ? 'bg-green-500' : 'bg-primary hover:bg-indigo-600 shadow-lg shadow-primary/30'
                }`}
              >
                <AnimatePresence mode='wait'>
                    {formState === 'idle' && (
                        <motion.span 
                            key="send"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </motion.span>
                    )}
                     {formState === 'submitting' && (
                        <motion.span 
                            key="sending"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        >
                            Sending...
                        </motion.span>
                    )}
                    {formState === 'success' && (
                        <motion.span 
                            key="success"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            Message Sent! <Check size={18} />
                        </motion.span>
                    )}
                </AnimatePresence>
              </button>
            </div>
          </motion.form>

        </div>
      </SectionWrapper>
      
      <div className="container mx-auto px-6 text-center pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Vivek Kumar. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Contact;