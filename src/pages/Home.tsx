import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Star, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import NodeCard from '../components/NodeCard';
import ServiceChat from '../components/ServiceChat';
import IndustriesSection from '../components/IndustriesSection';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-sky-50 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                Strategic <span className="text-sky-500">AI Consultancy</span> for the Modern Enterprise.
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg">
                Claritiy is a leading AI consultancy that helps businesses grow with AI automation, smart chatbots, and human-like voice agents. We make AI simple and effective for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-black/80 transition-all">
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <ServiceChat context="Home page hero section - AI Transformation focus" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end AI solutions tailored for every industry, from automation to elite talent acquisition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <NodeCard service={service} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Industries Section */}
      <IndustriesSection />

      {/* Video Demo Section -> Now Image Section */}
      <section className="py-24 bg-sky-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                AI Powered Future. <br />
                <span className="text-black/30">Proven Results.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Secure Integration', desc: 'Enterprise-grade security for your proprietary data.' },
                  { icon: Globe, title: 'Global Scalability', desc: 'Deploy AI agents across multiple regions and languages.' },
                  { icon: Zap, title: 'Instant ROI', desc: 'Reduce operational costs by up to 60% in the first quarter.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white/20 p-3 rounded-xl h-fit">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/10 rounded-[2rem] blur-2xl group-hover:bg-white/20 transition-all" />
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Visualization" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Removed from main flow, will be in footer area */}

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            Ready to transform your business with AI?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free 30-minute demo call with our experts and discover how Claritiy can accelerate your growth.
          </p>
          <Link to="/contact" className="inline-flex bg-sky-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-sky-600 transition-all active:scale-95">
            Book My Free Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
