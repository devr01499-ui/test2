import React from 'react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title="Privacy Policy"
        description="Read Claritiy AI Consultancy's Privacy Policy. Learn how we collect, use, and protect your personal information with enterprise-grade security."
        canonical="/privacy"
      />
      <h1 className="text-5xl font-black mb-10">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <p>Last Updated: March 18, 2026</p>
        <p>At Claritiy AI Consultancy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, such as when you fill out a contact form, book a demo, or subscribe to our newsletter. This may include your name, email address, company name, and any other information you choose to provide.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">2. How We Use Your Information</h2>
        <p>We use the information we collect to provide and improve our services, communicate with you, and send you marketing materials (if you have opted in). We do not sell your personal information to third parties.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">3. Data Security & Security Layer</h2>
        <p>We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction. Our website is protected by a multi-layered security architecture, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Content Security Policy (CSP):</strong> We use strict CSP headers to prevent Cross-Site Scripting (XSS) and other code injection attacks.</li>
          <li><strong>Enterprise-Grade Encryption:</strong> All data in transit is encrypted using TLS 1.3, ensuring your conversations and personal details remain private.</li>
          <li><strong>Isolated AI Environments:</strong> Your business data is processed in isolated environments and is never used to train public AI models.</li>
          <li><strong>Regular Security Audits:</strong> Our infrastructure undergoes frequent penetration testing and security audits to maintain SOC2 Type II compliance standards.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-black mt-8">4. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You can also opt-out of receiving marketing communications from us at any time.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at support@claritiy.com.</p>
      </div>
    </div>
  );
}
