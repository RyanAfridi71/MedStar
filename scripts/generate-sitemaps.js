import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products, categoriesMeta } from '../src/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const currentDate = new Date().toISOString().split('T')[0];

console.log(`Generating clean SEO XML sitemaps for ${products.length} products...`);

// 1. sitemap-main.xml
const mainPages = [
    { loc: 'https://skymedical.store/', priority: '1.0', changefreq: 'weekly' },
    { loc: 'https://skymedical.store/products', priority: '0.95', changefreq: 'weekly' },
    { loc: 'https://skymedical.store/about', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://skymedical.store/contact', priority: '0.85', changefreq: 'monthly' },
];

const categoryEntries = Object.values(categoriesMeta).map(cat => ({
    loc: `https://skymedical.store/category/${cat.slug}`,
    priority: '0.9',
    changefreq: 'weekly'
}));

const sitemapMainXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Website Pages -->
${mainPages.map(p => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}

  <!-- Equipment Category Hubs -->
${categoryEntries.map(c => `  <url>
    <loc>${c.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${c.changefreq}</changefreq>
    <priority>${c.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap-main.xml'), sitemapMainXml, 'utf-8');

// 2. sitemap-products-ultrasound.xml
const ultrasoundProducts = products.filter(p => p.category === 'Ultrasound');
const sitemapUltrasoundXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Ultrasound Machines (${ultrasoundProducts.length} Models) -->
${ultrasoundProducts.map(p => `  <url>
    <loc>https://skymedical.store/products/${p.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap-products-ultrasound.xml'), sitemapUltrasoundXml, 'utf-8');

// 3. sitemap-products-other.xml
const otherProducts = products.filter(p => p.category !== 'Ultrasound');
const sitemapOtherXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- CR, Anesthesia, Ventilators, Lasers, Pumps, Electrosurgical & OR (${otherProducts.length} Models) -->
${otherProducts.map(p => `  <url>
    <loc>https://skymedical.store/products/${p.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap-products-other.xml'), sitemapOtherXml, 'utf-8');

// 4. sitemap.xml (Index)
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://skymedical.store/sitemap-main.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://skymedical.store/sitemap-products-ultrasound.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://skymedical.store/sitemap-products-other.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexXml, 'utf-8');

console.log('Successfully generated clean canonical sitemaps in public/ folder!');
