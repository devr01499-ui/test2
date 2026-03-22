import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ArrowRight, ShoppingCart, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Enterprise <span className="text-sky-500">AI Products.</span>
            </h1>
            <p className="text-xl text-gray-600">
              Deploy battle-tested AI infrastructure. Our ready-to-deploy products are engineered for high-performance business process automation and data security.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-black rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col"
              >
                <div className="aspect-[16/10] bg-gray-200 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full font-black text-sm shadow-lg">
                    {product.price}
                  </div>
                </div>
                <div className="p-8 sm:p-12 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sky-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                    <Zap size={14} fill="currentColor" />
                    Enterprise Ready
                  </div>
                  <h3 className="text-4xl font-black mb-4">{product.name}</h3>
                  <p className="text-gray-600 text-lg mb-8 flex-1">
                    {product.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      'SOC2 Type II Compliant',
                      '99.99% Uptime SLA',
                      'Dedicated Account Manager'
                    ].map(feat => (
                      <div key={feat} className="flex items-center gap-3 font-bold text-sm">
                        <ShieldCheck className="text-sky-500" size={20} />
                        {feat}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-sky-500 transition-all active:scale-95">
                    Request Access <ArrowRight size={24} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Why Choose Claritiy Tech?</h2>
            <p className="text-gray-600">Built for the most demanding enterprise environments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Privacy First', desc: 'Your data never trains our public models. Complete isolation.' },
              { title: 'Custom LLMs', desc: 'Fine-tuned models specifically for your industry jargon and processes.' },
              { title: 'API First', desc: 'Seamlessly integrate with your existing CRM, ERP, and communication tools.' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-sky-50 rounded-3xl border-2 border-transparent hover:border-sky-500 transition-all">
                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
