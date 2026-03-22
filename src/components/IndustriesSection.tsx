import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Landmark, Home, Laptop, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

const INDUSTRIES_DATA = [
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    icon: Activity,
    departments: [
      {
        name: "Patient Administration",
        role: "Receptionist / Admin",
        service: "AI Voice Agents",
        benefit: "Automate appointment scheduling, handle rescheduling calls 24/7, and send automated WhatsApp reminders to reduce no-shows by 40%."
      },
      {
        name: "Data & Compliance",
        role: "Compliance Officer",
        service: "Custom AI Jarvis",
        benefit: "Instantly process and categorize hundreds of patient records while strictly adhering to HIPAA compliance protocols."
      }
    ]
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: Landmark,
    departments: [
      {
        name: "Risk & Security",
        role: "Risk Management Analyst",
        service: "Data Analytics",
        benefit: "Deploy predictive AI models to detect fraudulent transactions within milliseconds, reducing false positives by 60%."
      },
      {
        name: "Customer Success",
        role: "Support Representative",
        service: "AI Chatbots",
        benefit: "Resolve tier-1 banking queries like balance checks and card freezes instantly via chat without human intervention."
      }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate & Logistics",
    icon: Home,
    departments: [
      {
        name: "Sales & Brokerage",
        role: "Real Estate Agent",
        service: "AI Voice Agents",
        benefit: "Qualify thousands of property leads over the phone in real-time and automatically book qualified buyers into your calendar."
      },
      {
        name: "Property Management",
        role: "Operations Manager",
        service: "AI Automation",
        benefit: "Automate maintenance ticket routing, dispatch local contractors, and handle 80% of routine tenant FAQs autonomously."
      }
    ]
  },
  {
    id: "tech",
    name: "Tech & SaaS Startups",
    icon: Laptop,
    departments: [
      {
        name: "Engineering",
        role: "CTO / Lead Developer",
        service: "Hire AI Experts",
        benefit: "Bypass the 6-month hiring cycle. Inject elite, pre-vetted AI engineers directly into your sprint to build fine-tuned LLM models."
      },
      {
        name: "Growth & Marketing",
        role: "Marketing Director",
        service: "Custom AI Jarvis",
        benefit: "Generate dynamic, hyper-personalized email outreach sequences at scale based on live competitor analysis."
      }
    ]
  }
];

export default function IndustriesSection() {
  const [activeId, setActiveId] = useState(INDUSTRIES_DATA[0].id);
  const activeIndustry = INDUSTRIES_DATA.find(i => i.id === activeId);

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-600 px-4 py-1.5 rounded-full text-xs font-black mb-4 uppercase tracking-widest">
            <Briefcase size={14} />
            Who We Serve
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Built For Your Industry</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            See exactly how Clarity's AI solutions empower distinct departments and roles across major global sectors to maximize daily output.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Industry Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {INDUSTRIES_DATA.map((ind) => {
              const isActive = activeId === ind.id;
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={`flex items-center gap-4 w-full p-5 rounded-2xl text-left font-bold transition-all duration-300 border-2 ${
                    isActive 
                      ? 'bg-black border-black text-white shadow-xl shadow-black/10 scale-100' 
                      : 'bg-white border-transparent text-gray-400 hover:bg-white hover:border-black/5 hover:text-black scale-[0.98]'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-sky-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-lg">{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeIndustry && (
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 md:p-10 rounded-[2.5rem] border-2 border-black/5 shadow-2xl shadow-sky-900/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl -z-0 opacity-50 translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="relative z-10 space-y-8">
                    {activeIndustry.departments.map((dept, idx) => (
                      <div key={idx} className="bg-gray-50/50 border border-black/5 rounded-3xl p-6 md:p-8 hover:border-sky-500/30 transition-colors group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-black/5">
                          <div>
                            <span className="text-xs font-black uppercase tracking-widest text-sky-500 mb-1 block">Department</span>
                            <h4 className="text-2xl font-black">{dept.name}</h4>
                          </div>
                          <div className="bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm inline-flex items-center gap-2 w-fit">
                            <Zap className="text-sky-500" size={16} />
                            <span className="text-sm font-bold">{dept.service}</span>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="md:col-span-1">
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Target Role</span>
                            <div className="font-bold text-black flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">
                                {dept.role.charAt(0)}
                              </div>
                              {dept.role}
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Direct Benefit</span>
                            <p className="text-gray-600 leading-relaxed font-medium">
                              {dept.benefit}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
