import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://claritiy.com';

// Static routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
];

// Dynamic service routes from constants
const serviceIds = [
  'ai-automation',
  'ai-chatbots',
  'ai-voice',
  'ai-transformation',
  'ai-experts',
  'ai-jarvis',
];

// Dynamic blog routes from constants
const blogIds = [
  'ai-consultancy-2026',
  'maximizing-ai-roi',
  'evolution-of-chatbots',
  'ai-voice-agents-sales',
  'ai-business-transformation',
  'hiring-ai-experts',
];

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Static routes
  for (const route of staticRoutes) {
    xml += `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  }

  // Service detail pages
  for (const id of serviceIds) {
    xml += `  <url>
    <loc>${SITE_URL}/services/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
  }

  // Blog detail pages
  for (const id of blogIds) {
    xml += `  <url>
    <loc>${SITE_URL}/blog/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  xml += `</urlset>`;
  return xml;
}

function generateRobotsTxt(): string {
  return `# Robots.txt for Claritiy AI Consultancy
# https://claritiy.com

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow admin or API routes
Disallow: /api/
`;
}

// Execute
const publicDir = path.resolve(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapPath = path.join(publicDir, 'sitemap.xml');
const robotsPath = path.join(publicDir, 'robots.txt');

fs.writeFileSync(sitemapPath, generateSitemap(), 'utf-8');
console.log(`✅ Generated sitemap.xml at ${sitemapPath}`);

fs.writeFileSync(robotsPath, generateRobotsTxt(), 'utf-8');
console.log(`✅ Generated robots.txt at ${robotsPath}`);
