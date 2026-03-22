import React from 'react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title="Terms of Service"
        description="Read Claritiy AI Consultancy's Terms of Service. Understand the terms and conditions governing your use of our website and AI consultancy services."
        canonical="/terms"
      />
      <h1 className="text-5xl font-black mb-10">Terms of Service</h1>
      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <p>Last Updated: March 18, 2026</p>
        <p>Welcome to Claritiy AI Consultancy. By using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">1. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">2. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and software, is the property of Claritiy AI Consultancy and is protected by intellectual property laws.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">3. Limitation of Liability</h2>
        <p>Claritiy AI Consultancy shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our services.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">4. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Claritiy AI Consultancy operates.</p>
        
        <h2 className="text-2xl font-bold text-black mt-8">5. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Your continued use of our services after any changes constitutes your acceptance of the new Terms.</p>
      </div>
    </div>
  );
}
