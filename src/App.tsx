import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundVideoLayer from './components/BackgroundVideoLayer';
import { NavigationProvider } from './NavigationContext';
import { LargeStorage } from './services/LargeStorageService';
import { KNOWLEDGE_BASE } from './knowledgeBase';

// Lazy load pages for optimization
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

export default function App() {
  useEffect(() => {
    // Initializing and Refreshing the 100MB Knowledge Cache on every reload
    const initStorage = async () => {
      try {
        await LargeStorage.init();
        await LargeStorage.refresh('current_knowledge', KNOWLEDGE_BASE);
        console.log('Claritiy Large Storage Initialized & Refreshed');
      } catch (err) {
        console.error('Storage Init Error:', err);
      }
    };
    initStorage();
  }, []);

  return (
    <HelmetProvider>
      <BackgroundVideoLayer />
      <Router>
        <NavigationProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-transparent">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </NavigationProvider>
      </Router>
    </HelmetProvider>
  );
}
