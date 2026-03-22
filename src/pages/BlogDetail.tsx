import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { BLOGS } from '../constants';
import SEO, { buildBlogPostSchema, buildBreadcrumbSchema } from '../components/SEO';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = BLOGS.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-sky-500 font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <SEO
        title={blog.title}
        description={blog.excerpt}
        canonical={`/blog/${blog.id}`}
        ogType="article"
        ogImage={blog.image}
        jsonLd={[
          buildBlogPostSchema(blog),
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: blog.title, url: `/blog/${blog.id}` },
          ]),
        ]}
      />
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-sky-500 transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm font-bold text-sky-500 uppercase tracking-widest">
                <Calendar size={16} />
                {blog.date}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
                <User size={16} />
                {blog.author}
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="rounded-3xl overflow-hidden mb-12 aspect-[21/9] bg-gray-100">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed space-y-6 whitespace-pre-line">
                {blog.content}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-black/5 flex justify-between items-center">
              <div className="flex gap-4">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-sky-500 hover:text-white transition-all">
                  <Share2 size={20} />
                </button>
              </div>
              <Link to="/contact" className="bg-sky-500 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-600 transition-all">
                Discuss this with an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
