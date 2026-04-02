import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, CheckCircle2, Zap, MessageSquare, Phone, RefreshCw, Users } from 'lucide-react';
import { Service } from '../types';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  Zap,
  MessageSquare,
  Phone,
  RefreshCw,
  Users
};

export default function NodeCard({ service }: { service: Service }) {
  const navigate = useNavigate();
  const Icon = iconMap[service.icon] || Zap;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="node-card relative p-6 flex flex-col h-full"
    >
      {/* n8n dots */}
      <div className="node-dot -left-1.5 top-1/2 -translate-y-1/2" />
      <div className="node-dot -right-1.5 top-1/2 -translate-y-1/2" />

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
          <Icon size={24} />
        </div>
        <h3 className="font-bold text-xl">{service.title}</h3>
      </div>

      <p className="text-gray-600 text-sm mb-6 flex-1">
        {service.description}
      </p>

      <div className="space-y-4">
        <button 
          onClick={() => navigate('/contact')}
          className="execute-btn w-full flex items-center justify-center gap-2 hover:bg-sky-50 transition-colors"
        >
          <Play size={16} fill="currentColor" />
          Book Appointment
        </button>
      </div>
    </motion.div>
  );
}
