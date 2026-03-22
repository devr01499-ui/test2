import React, { useState } from 'react';
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
  const [isExecuting, setIsExecuting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const Icon = iconMap[service.icon] || Zap;

  const handleExecute = () => {
    setIsExecuting(true);
    setShowResult(false);
    setTimeout(() => {
      setIsExecuting(false);
      setShowResult(true);
    }, 1500);
  };

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
        <div className="bg-gray-50 rounded-lg p-3 border border-black/5 min-h-[60px] flex items-center justify-center text-xs font-mono text-gray-500">
          {isExecuting ? (
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <RefreshCw size={14} />
              </motion.div>
              Executing node...
            </div>
          ) : showResult ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sky-600 flex items-center gap-2"
            >
              <CheckCircle2 size={14} />
              {service.demoContent}
            </motion.div>
          ) : (
            null
          )}
        </div>

        <button 
          onClick={handleExecute}
          disabled={isExecuting}
          className={cn(
            "execute-btn w-full flex items-center justify-center gap-2",
            isExecuting && "opacity-50 cursor-not-allowed"
          )}
        >
          <Play size={16} fill="currentColor" />
          Book Appointment
        </button>
      </div>
    </motion.div>
  );
}
