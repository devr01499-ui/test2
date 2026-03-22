import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github, Mail, ArrowRight, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { BLOGS } from '../constants';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Blog Section in Footer */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-2xl font-black uppercase tracking-tighter">Latest Insights</h4>
            <Link to="/blog" className="text-sm font-bold text-sky-500 flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOGS.slice(0, 3).map(blog => (
              <Link key={blog.id} to={`/blog/${blog.id}`} className="group">
                <div className="text-xs font-bold text-sky-500 mb-2 uppercase tracking-widest">{blog.date}</div>
                <h5 className="font-bold group-hover:text-sky-500 transition-colors line-clamp-2">{blog.title}</h5>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo className="items-start" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the way in AI consultancy and business transformation. We provide the clarity you need to succeed in the AI era.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Services</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><Link to="/services/ai-automation" className="hover:text-sky-500 transition-colors">AI Automation</Link></li>
              <li><Link to="/services/ai-chatbots" className="hover:text-sky-500 transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services/ai-voice" className="hover:text-sky-500 transition-colors">AI Voice Agents</Link></li>
              <li><Link to="/services/ai-transformation" className="hover:text-sky-500 transition-colors">AI Strategy</Link></li>
              <li><Link to="/services/ai-experts" className="hover:text-sky-500 transition-colors">Hire AI Experts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><Link to="/blog" className="hover:text-sky-500 transition-colors">Blog</Link></li>
              <li><Link to="/products" className="hover:text-sky-500 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-sky-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-sky-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Connect</h4>
            <div className="grid grid-cols-4 gap-2 mb-6">
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center"><Youtube size={18} /></a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center"><Github size={18} /></a>
            </div>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-sky-500" />
                <span>support@claritiy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-sky-500" />
                <span>+91 6026520056</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <p>© 2026 Claritiy AI Consultancy. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
