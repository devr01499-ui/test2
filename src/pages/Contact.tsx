import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Shield, Zap, Globe } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title="Contact Us - Book a Free AI Demo"
        description="Get in touch with Claritiy's AI consultants. Book a free 30-minute demo call, request an enterprise AI audit, or learn how we can transform your business with AI automation."
        canonical="/contact"
      />
      {/* Hero Section */}
      <section className="py-20 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/10 blur-3xl -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Let's Build the <span className="text-sky-500">Future</span> Together.
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Whether you're looking for a full enterprise transformation or a quick AI audit, our strategic consultants are ready to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex gap-4">
              <Shield className="text-sky-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-xl mb-2">Secure & Private</h4>
                <p className="text-gray-500 text-sm">Your data is protected by enterprise-grade encryption and isolated environments.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="text-sky-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-xl mb-2">Rapid Deployment</h4>
                <p className="text-gray-500 text-sm">Most AI solutions are live within 4 weeks, delivering immediate business value.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="text-sky-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-xl mb-2">Global Support</h4>
                <p className="text-gray-500 text-sm">Our consultants operate across multiple timezones to support your global operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
