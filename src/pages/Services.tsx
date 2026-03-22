import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import NodeCard from '../components/NodeCard';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { buildServiceListSchema, buildBreadcrumbSchema } from '../components/SEO';

export default function Services() {
  return (
    <div className="pt-20">
      <SEO
        title="AI Consultancy Services - Automation, Chatbots, Voice Agents & More"
        description="Explore Claritiy's full range of AI consultancy services including AI Automation, AI Chatbots, AI Voice Agents, AI Strategy, Hire AI Experts, and Custom AI Jarvis assistants. Enterprise-grade solutions."
        canonical="/services"
        jsonLd={[
          buildServiceListSchema(SERVICES),
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ]),
        ]}
      />
      <section className="py-20 bg-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Expert <span className="text-black/30">AI Consultancy.</span>
            </h1>
            <p className="text-xl text-white/80">
              Unlock the power of AI. We help you automate your business, build smart chatbots, and deploy voice agents that grow your revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 mb-32">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-8"
              >
                <Link to={`/services/${service.id}`} className="block aspect-video bg-black rounded-3xl overflow-hidden relative group">
                  <img 
                    src={service.videoUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white text-sky-500 px-6 py-2 rounded-full font-bold shadow-xl">
                      View Details
                    </div>
                  </div>
                </Link>
                <div>
                  <h2 className="text-4xl font-black mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Leverage our {service.title} to drive efficiency and innovation. Our custom AI solutions are designed for seamless integration and maximum ROI.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      'Custom AI Implementation',
                      'Enterprise-Grade Security',
                      'Scalable AI Infrastructure',
                      'Real-time Performance Analytics'
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle2 className="text-sky-500" size={18} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-sky-500 transition-all">
                    Explore {service.title} <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-black text-white rounded-[3rem] p-12 lg:p-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">The Claritiy Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Audit', desc: 'We analyze your current workflows and identify AI opportunities.' },
                { step: '02', title: 'Strategy', desc: 'We develop a custom roadmap for AI integration.' },
                { step: '03', title: 'Deploy', desc: 'Our experts build and deploy your custom AI solutions.' },
                { step: '04', title: 'Scale', desc: 'We continuously monitor and optimize for maximum ROI.' },
              ].map((item) => (
                <div key={item.step} className="space-y-4">
                  <div className="text-6xl font-black text-sky-500/30">{item.step}</div>
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
