import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { BLOGS } from '../constants';
import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbSchema } from '../components/SEO';

export default function Blog() {
  return (
    <div className="pt-20">
      <SEO
        title="AI Insights & Blog - Expert Perspectives on AI Automation"
        description="Read expert insights on AI automation, digital transformation, chatbots, voice agents, and the future of enterprise AI from Claritiy's leading consultants."
        canonical="/blog"
        jsonLd={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ])}
      />
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Claritiy <span className="text-sky-500">Insights.</span>
            </h1>
            <p className="text-xl text-gray-400">
              Expert perspectives on AI automation, digital transformation, and the future of work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 space-y-16">
              {BLOGS.map((blog) => (
                <motion.article 
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="rounded-3xl overflow-hidden mb-8 aspect-[21/9] bg-gray-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-sky-500 uppercase tracking-widest">
                      <Calendar size={16} />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
                      <User size={16} />
                      {blog.author}
                    </div>
                  </div>
                  <h2 className="text-4xl font-black mb-4 group-hover:text-sky-500 transition-colors leading-tight">
                    {blog.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <Link to={`/blog/${blog.id}`} className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-sky-500 transition-all">
                    Read Full Article <ArrowRight size={20} />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-80 space-y-12">
              <div className="bg-gray-50 p-8 rounded-3xl border-2 border-black/5">
                <h4 className="text-xl font-black mb-6">Search</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-white border-2 border-black/5 rounded-xl px-4 py-3 pl-10 outline-none focus:border-sky-500 transition-colors"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              <div className="bg-sky-500 text-white p-8 rounded-3xl">
                <h4 className="text-2xl font-black mb-4 text-black">Newsletter</h4>
                <p className="text-white/80 mb-6 text-sm">
                  Get the latest AI insights delivered directly to your inbox every week.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-white/20 border-2 border-white/20 rounded-xl px-4 py-3 placeholder:text-white/50 outline-none focus:bg-white/30 transition-all"
                  />
                  <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-black/80 transition-all">
                    Subscribe
                  </button>
                </form>
              </div>

              <div>
                <h4 className="text-xl font-black mb-6">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {['AI Automation', 'Future of Work', 'Enterprise', 'Machine Learning', 'Voice AI', 'Consultancy'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold hover:bg-sky-100 hover:text-sky-600 cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
