import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

import Logo from './Logo';

import { useNavigationTransition } from '../NavigationContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { setIsChatOpen } = useNavigationTransition();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo showTagline={false} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-sky-500",
                  location.pathname === link.path ? "text-sky-500" : "text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsChatOpen(true)}
              className="text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors flex items-center gap-2"
            >
              <Zap size={16} fill="currentColor" />
              Chat with AI
            </button>
            <Link 
              to="/contact" 
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black/80 transition-all active:scale-95"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-black hover:bg-sky-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-black text-white px-6 py-3 rounded-full text-sm font-bold"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { AnimatePresence } from 'motion/react';
