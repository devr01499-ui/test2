import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';
import ServiceChat from '../components/ServiceChat';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <Link to="/services" className="text-sky-500 font-bold">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-20 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-sky-500 transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
              <Sparkles size={14} />
              <span>Premium AI Solution</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-6">Why Choose Our {service.title}?</h2>
                <div className="grid gap-4">
                  {service.pros?.map((pro, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-black/5"
                    >
                      <div className="bg-sky-500 text-white p-1 rounded-full">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="font-bold text-gray-800">{pro}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-sky-500 text-white p-10 rounded-[2.5rem]">
                <h3 className="text-3xl font-black mb-6 text-black">How We Excel</h3>
                <p className="text-xl leading-relaxed opacity-90">
                  {service.howWeExcel}
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden border-2 border-black shadow-2xl aspect-video">
                <img 
                  src={service.videoUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="sticky top-32 space-y-8">
              <div className="h-[600px]">
                <ServiceChat context={`Service Detail Page: ${service.title}. Act as a sales executive to book a demo.`} />
              </div>
              <div className="bg-black text-white p-8 rounded-3xl text-center">
                <h4 className="text-xl font-bold mb-4">Ready to see it in action?</h4>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-600 transition-all">
                  Book a Demo Call <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
