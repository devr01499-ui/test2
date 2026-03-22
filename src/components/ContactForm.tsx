import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Phone, Layers, Calendar as CalendarIcon, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/telegram-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStep('success');
      } else {
        alert('Failed to send booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border-2 border-black overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-5 min-h-[600px]">
        {/* Sidebar Info */}
        <div className="md:col-span-2 bg-black text-white p-8 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
              <CalendarIcon size={24} />
            </div>
            <h3 className="text-3xl font-black mb-4 leading-tight">Book Your Strategy Session</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Schedule a deep-dive with our AI consultants. We'll analyze your business and provide a custom transformation roadmap.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-bold">
              <div className="w-2 h-2 bg-sky-500 rounded-full" />
              <span>Fast & Secure</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-3 p-8 md:p-12 bg-gray-50/30">
          <AnimatePresence mode="wait">
            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h4 className="text-2xl font-black mb-6">Contact Details</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white border-2 border-black/5 rounded-2xl py-4 pl-12 pr-4 font-medium focus:border-sky-500 outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Contact No</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          required
                          type="tel"
                          value={formData.contactNo}
                          onChange={e => setFormData({...formData, contactNo: e.target.value})}
                          className="w-full bg-white border-2 border-black/5 rounded-2xl py-4 pl-12 pr-4 font-medium focus:border-sky-500 outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email ID</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white border-2 border-black/5 rounded-2xl py-4 pl-12 pr-4 font-medium focus:border-sky-500 outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Services</label>
                    <div className="relative">
                      <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select 
                        required
                        value={formData.service}
                        onChange={e => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-white border-2 border-black/5 rounded-2xl py-4 pl-12 pr-4 font-medium focus:border-sky-500 outline-none appearance-none cursor-pointer transition-colors duration-200"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="AI Strategy Consulting">AI Strategy Consulting</option>
                        <option value="Custom AI Development">Custom AI Development</option>
                        <option value="Data Analytics">Data Analytics</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Preferred Date</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          required
                          type="date"
                          value={formData.date}
                          onChange={e => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-white border-2 border-black/5 rounded-2xl py-4 pl-12 pr-4 font-medium focus:border-sky-500 outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          required
                          type="time"
                          value={formData.time}
                          onChange={e => setFormData({...formData, time: e.target.value})}
                          className="w-full bg-white border-2 border-black/5 rounded-2xl py-4 pl-12 pr-4 font-medium focus:border-sky-500 outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-sky-500 hover:shadow-lg transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Confirm Booking'}
                    {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <div>
                  <h4 className="text-3xl font-black mb-2">Booking Confirmed!</h4>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    We've received your request and will get back to you shortly at <span className="font-bold text-black">{formData.email}</span>.
                  </p>
                </div>
                <div className="bg-sky-50 p-6 rounded-3xl w-full border-2 border-sky-100">
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-sky-600 font-bold uppercase tracking-widest">Meeting Details</span>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-3">
                      <CalendarIcon size={18} className="text-sky-500" />
                      <span className="font-bold">{formData.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-sky-500" />
                      <span className="font-bold">{formData.time}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setFormData({ name: '', email: '', contactNo: '', service: '', date: '', time: '' });
                    setStep('details');
                  }}
                  className="text-sky-500 font-bold hover:underline"
                >
                  Book another session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
