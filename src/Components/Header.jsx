import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Markets', href: '#home' },
    { name: 'Research', href: '#services' },
    { name: 'SEBI Compliance', href: '#sebi' },
    { name: 'About', href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion Variants for Mobile Menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", stiffness: 400, damping: 30, 
        staggerChildren: 0.05, delayChildren: 0.1 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8 py-4 md:py-6 pointer-events-none flex justify-center">
      {/* Floating Island Container */}
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`relative w-full max-w-7xl pointer-events-auto transition-colors duration-500
          ${isScrolled || isOpen
            ? 'bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem]' 
            : 'bg-transparent border-transparent'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
              >
                <Zap size={20} fill="currentColor" />
              </motion.div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-[2.5px] border-white rounded-full animate-pulse shadow-sm" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 leading-none">
                HIGH<span className="text-blue-600">RISE</span>
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-slate-500 flex items-center gap-1 uppercase mt-1">
                <ShieldCheck size={12} className="text-emerald-500" /> SEBI Registered
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-slate-100/60 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors duration-300 group/link"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover Pill Background */}
                <div className="absolute inset-0 bg-white rounded-full opacity-0 scale-90 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-300 shadow-sm border border-slate-100/50" />
              </a>
            ))}
          </div>

          {/* Action Cluster */}
          <div className="flex items-center gap-2 md:gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="hidden sm:flex items-center justify-center w-10 h-10 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              <MessageCircle size={20} />
            </motion.a>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex relative group px-6 py-2.5 bg-slate-900 text-white rounded-full overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <span className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-wide">
                Join Premium
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2.5 text-slate-600 bg-slate-100/80 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-white/95 backdrop-blur-3xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden p-4"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.a
                    variants={mobileItemVariants}
                    key={link.name}
                    href={link.href}
                    className="px-5 py-4 text-lg font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-2xl transition-colors flex items-center justify-between group"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
              
              <motion.div variants={mobileItemVariants} className="pt-4 mt-2 border-t border-slate-100 px-2 pb-2">
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 active:scale-[0.98] transition-all">
                  Join Premium Access <Zap size={16} className="text-amber-400" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Global Style for the shimmer effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default Navbar;