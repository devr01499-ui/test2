import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, User, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNavigationTransition } from '../NavigationContext';
import { LocalEngine } from '../services/LocalEngine';

import Logo from './Logo';

export default function Chatbot() {
  const { isChatOpen, setIsChatOpen, navigateWithTransition } = useNavigationTransition();
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const speakQueueRef = useRef<string[]>([]);
  const currentlySpeakingRef = useRef<string | null>(null);
  const navigate = useNavigate();
  const synthRef = useRef<SpeechSynthesis | null>(window.speechSynthesis);

  // Persistence Logic
  useEffect(() => {
    const savedHistory = localStorage.getItem('claritiy_chat_history');
    const lastActive = localStorage.getItem('claritiy_chat_timestamp');
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000;

    if (savedHistory && lastActive && (now - parseInt(lastActive)) < thirtyMinutes) {
      setMessages(JSON.parse(savedHistory));
      setIsChatOpen(true); // Keep chat visible for returning users within 30 mins
    } else {
      setMessages([
        { role: 'bot', text: 'Hello! I am Claritiy AI. I can help you explore our expert AI solutions. Would you like a tour?' }
      ]);
    }

    // Auto-introduction after 5 seconds if no history or first message
    const introTimer = setTimeout(() => {
      const introText = "Welcome to Claritiy AI. I'm your strategic consultant. How can I assist your business transformation today?";
      setMessages(prev => {
        if (prev.length <= 1) {
          speak(introText);
          return [...prev, { role: 'bot', text: introText }];
        }
        return prev;
      });
    }, 5000);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('claritiy_chat_history', JSON.stringify(messages));
      localStorage.setItem('claritiy_chat_timestamp', Date.now().toString());
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [messages, isLoading]);

  // Speech Recognition has been removed.

  const processSpeakQueue = () => {
    if (!isVoiceEnabled || !synthRef.current || synthRef.current.speaking) return;

    if (!currentlySpeakingRef.current) {
      currentlySpeakingRef.current = speakQueueRef.current.shift() || null;
    }

    if (!currentlySpeakingRef.current) return;

    const utterance = new SpeechSynthesisUtterance(currentlySpeakingRef.current);
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => 
      v.name.includes('Samantha') || 
      v.name.includes('Google US English') || 
      v.name.includes('Victoria')
    );

    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.pitch = 1.15; // Softer pitch
    utterance.rate = 1.45; // 0.5x faster (Base 0.95 + 0.5)
    utterance.volume = 0.8; // Softer volume

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      currentlySpeakingRef.current = null;
      setIsSpeaking(false);
      setTimeout(processSpeakQueue, 100);
    };
    utterance.onerror = () => {
      currentlySpeakingRef.current = null;
      setIsSpeaking(false);
      processSpeakQueue();
    };

    synthRef.current.speak(utterance);
  };

  // Stop speech if voice is disabled smoothly
  useEffect(() => {
    if (!isVoiceEnabled && synthRef.current) {
      synthRef.current.cancel();
      currentlySpeakingRef.current = null;
      speakQueueRef.current = [];
      setIsSpeaking(false);
    } else if (isVoiceEnabled) {
      processSpeakQueue();
    }
  }, [isVoiceEnabled]);

  const speak = (text: string) => {
    if (!isVoiceEnabled || !text.trim() || !synthRef.current) return;
    
    // Split text into sentences to prevent skipping and improve natural flow
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    sentences.forEach(sentence => {
      speakQueueRef.current.push(sentence.trim());
    });
    
    processSpeakQueue();
  };

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim()) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const response = await LocalEngine.process(textToSend);
      
      await new Promise(resolve => setTimeout(resolve, 500));

      setMessages(prev => [...prev, { role: 'bot', text: response.text }]);
      speak(response.text);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having some trouble. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white border-2 border-black rounded-[2rem] shadow-2xl w-80 sm:w-96 h-[550px] flex flex-col mb-4 overflow-hidden relative"
          >
            {/* Header */}
            <div className="bg-sky-500 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <Logo light showTagline={false} className="items-start" />
                <div className="border-l border-white/20 pl-3">
                  <span className="text-[10px] uppercase tracking-widest opacity-70 block">Expert Consultant</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  {isVoiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </button>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-black text-white rounded-tr-none' 
                      : 'bg-white border border-black/5 text-black rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-black/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-black/10 bg-white flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Claritiy AI..."
                  className="w-full bg-gray-100 rounded-2xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all pr-4"
                />
              </div>
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="bg-black text-white p-3 rounded-2xl hover:bg-sky-500 transition-all disabled:opacity-50 active:scale-95"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
