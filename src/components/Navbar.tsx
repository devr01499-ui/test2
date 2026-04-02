import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Zap, ChevronDown, MessageSquare, Phone, RefreshCw, Users, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

import Logo from './Logo';

import { useNavigationTransition } from '../NavigationContext';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Zap,
  MessageSquare,
  Phone,
  RefreshCw,
  Users,
  Cpu
};

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
            <Link to="/" className={cn("text-sm font-semibold transition-colors hover:text-sky-500", location.pathname === '/' ? "text-sky-500" : "text-black")}>Home</Link>
            
            <div className="relative group">
              <Link to="/services" className={cn("text-sm font-semibold transition-colors hover:text-sky-500 flex items-center gap-1", location.pathname === '/services' ? "text-sky-500" : "text-black")}>
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[600px]">
                <div className="bg-white rounded-2xl shadow-2xl border border-black/5 p-6 grid grid-cols-2 gap-4 relative">
                  {/* Decorative pointer pointing up */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-l border-t border-black/5 shadow-[-4px_-4px_4px_rgba(0,0,0,0.02)]"></div>
                  
                  {SERVICES.map((service) => {
                    const Icon = iconMap[service.icon] || Zap;
                    return (
                      <Link key={service.id} to={`/services/${service.id}`} className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-sky-50 transition-colors z-10 relative">
                        <div className="p-2.5 bg-sky-100 rounded-lg text-sky-600 group-hover/item:bg-sky-500 group-hover/item:text-white transition-colors mt-0.5">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-1 leading-tight">{service.title}</h4>
                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-medium">{service.tagline}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <Link to="/products" className={cn("text-sm font-semibold transition-colors hover:text-sky-500", location.pathname === '/products' ? "text-sky-500" : "text-black")}>Products</Link>
            <Link to="/contact" className={cn("text-sm font-semibold transition-colors hover:text-sky-500", location.pathname === '/contact' ? "text-sky-500" : "text-black")}>Contact</Link>

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
            <div className="px-4 pt-2 pb-6 space-y-1 h-[80vh] overflow-y-auto">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-black border-b border-gray-100">Home</Link>
              
              <div className="px-3 py-4 border-b border-gray-100">
                <Link to="/services" onClick={() => setIsOpen(false)} className="text-base font-bold text-black block mb-4">Services</Link>
                <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                  {SERVICES.map(service => (
                    <Link key={service.id} to={`/services/${service.id}`} onClick={() => setIsOpen(false)} className="block text-sm font-bold text-gray-500 hover:text-sky-500">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/products" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-black border-b border-gray-100">Products</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-black border-b border-gray-100">Contact</Link>
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
