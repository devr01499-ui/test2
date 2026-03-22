import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mic, MicOff, User, Sparkles, Navigation, Volume2, VolumeX, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNavigationTransition } from '../NavigationContext';
import { KNOWLEDGE_BASE } from '../knowledgeBase';
import { LocalEngine } from '../services/LocalEngine';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

import Logo from './Logo';

export default function ServiceChat({ context = "general" }: { context?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `Hello! I'm your Claritiy AI Strategic Consultant. How can I help you transform your business today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const speakQueueRef = useRef<string[]>([]);
  const currentlySpeakingRef = useRef<string | null>(null);
  const navigate = useNavigate();
  const { navigateWithTransition } = useNavigationTransition();
  const synthRef = useRef<SpeechSynthesis | null>(window.speechSynthesis);

  const processSpeakQueue = () => {
    if (!isVoiceEnabled || !synthRef.current || synthRef.current.speaking) return;

    if (!currentlySpeakingRef.current) {
      currentlySpeakingRef.current = speakQueueRef.current.shift() || null;
    }

    if (!currentlySpeakingRef.current) return;

    const utterance = new SpeechSynthesisUtterance(currentlySpeakingRef.current);
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => 
      v.name.includes('Google US English') || 
      v.name.includes('Samantha') || 
      v.name.includes('Daniel')
    );

    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.pitch = 1.0;
    utterance.rate = 0.95;
    utterance.volume = 1.0;

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

  // Stop speech if voice is disabled
  useEffect(() => {
    if (!isVoiceEnabled && synthRef.current) {
      synthRef.current.cancel();
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

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      // Self-Reliant Reasoning Engine
      const response = await LocalEngine.process(textToSend);
      
      // Simulate a brief thinking period
      await new Promise(resolve => setTimeout(resolve, 500));

      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: response.text
      }]);

      speak(response.text);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I encountered an error. Let's try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      const currentTranscript = finalTranscript || interimTranscript;
      setInput(currentTranscript);
      
      if (finalTranscript) {
        setTimeout(() => {
          handleSend(finalTranscript);
          recognition.stop();
        }, 500);
      }
    };
    recognition.start();
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-[2rem] border-2 border-black overflow-hidden shadow-2xl relative">
      <div className="bg-black text-white p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo light showTagline={false} className="items-start" />
          <div className="border-l border-white/20 pl-3">
            <span className="text-[10px] uppercase tracking-widest opacity-50 block">Sales & Strategy</span>
          </div>
        </div>
        <button 
          onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
          className={`p-2 rounded-full transition-colors ${isVoiceEnabled ? 'bg-sky-500' : 'bg-white/10'}`}
        >
          {isVoiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50"
      >
        {messages.map((msg, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium shadow-sm ${
              msg.role === 'user' 
                ? 'bg-black text-white rounded-tr-none' 
                : 'bg-white text-black border border-black/5 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-black/5 flex gap-1">
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-black/5 flex gap-3">
        <button 
          onClick={startListening}
          className={`p-3 rounded-xl transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-sky-100 hover:text-sky-500'}`}
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about AI transformation..."
          className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
        />
        <button 
          onClick={() => handleSend()}
          disabled={isLoading || !input.trim()}
          className="bg-black text-white p-3 rounded-xl hover:bg-sky-500 transition-all disabled:opacity-50 active:scale-95"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
