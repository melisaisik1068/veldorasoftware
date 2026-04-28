'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const categories = ['Tümü', 'Next.js', 'TypeScript', 'Mimari', 'Performans', 'DevOps'];

const articles = [
{
  id: 1,
  category: 'Next.js',
  readTime: '8 dk',
  featured: true,
  title: 'Next.js 16 ile Ölçeklenebilir Mimari: App Router Derinlemesine',
  excerpt:
  'Server Components, Streaming ve Partial Pre-rendering ile modern bir SaaS mimarisini nasıl kurarsınız? 5 yıllık tecrübemden öğrendiklerimi aktarıyorum.',
  date: '15 Nisan 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b0c3f4c8-1771715684720.png",
  imageAlt: 'Code editor with Next.js code, dark background, blue syntax highlighting, professional development environment',
  tags: ['App Router', 'Server Components', 'ISR']
},
{
  id: 2,
  category: 'TypeScript',
  readTime: '6 dk',
  featured: false,
  title: 'TypeScript Strict Mode: Tip Güvenliğinde Uzlaşmama',
  excerpt: 'noImplicitAny, strictNullChecks ve discriminated unions ile runtime hatalarını sıfıra indirmek.',
  date: '8 Nisan 2026',
  image: "https://images.unsplash.com/photo-1681511346347-c7f30d1e201b",
  imageAlt: 'TypeScript code on dark screen, type definitions visible, clean code structure',
  tags: ['Strict Mode', 'Type Safety', 'Best Practices']
},
{
  id: 3,
  category: 'Performans',
  readTime: '10 dk',
  featured: false,
  title: "Core Web Vitals 2026: LCP\'yi 1 Saniyenin Altına Düşürmek",
  excerpt: 'ISR, Edge Runtime ve akıllı image optimizasyonu ile Lighthouse 100 hedefi. Gerçek proje vakası.',
  date: '1 Nisan 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9d70146-1772246541867.png",
  imageAlt: 'Performance metrics dashboard on dark screen, green scores, analytics data visualization',
  tags: ['LCP', 'ISR', 'Lighthouse']
},
{
  id: 4,
  category: 'Mimari',
  readTime: '12 dk',
  featured: false,
  title: 'Multi-Tenant SaaS: Tek Codebase, N Müşteri',
  excerpt: 'Next.js middleware ile dinamik tenant routing ve izole veri katmanı tasarımı.',
  date: '22 Mart 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f4b6b000-1777403393999.png",
  imageAlt: 'Server infrastructure diagram, dark network topology, blue connection lines, architectural overview',
  tags: ['Multi-Tenant', 'Middleware', 'Prisma']
},
{
  id: 5,
  category: 'DevOps',
  readTime: '7 dk',
  featured: false,
  title: 'GitHub Actions ile Next.js CI/CD: Sıfırdan Production',
  excerpt: 'Test, lint, build ve deploy adımlarını otomatikleştiren GitHub Actions workflow tasarımı.',
  date: '14 Mart 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_118adf3cd-1775805905832.png",
  imageAlt: 'CI/CD pipeline visualization on dark background, GitHub workflow diagram, automation flow',
  tags: ['CI/CD', 'GitHub Actions', 'Docker']
},
{
  id: 6,
  category: 'TypeScript',
  readTime: '9 dk',
  featured: false,
  title: 'tRPC ile End-to-End Tip Güvenliği',
  excerpt: 'REST API yazmadan tam tip güvenli frontend-backend iletişimi. Next.js + tRPC + Zod entegrasyonu.',
  date: '5 Mart 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18cdcabb7-1772464640150.png",
  imageAlt: 'API code editor showing TypeScript definitions, dark theme, professional developer workspace',
  tags: ['tRPC', 'Zod', 'Type Safety']
}];


const categoryColors: Record<string, string> = {
  'Next.js': '#60A5FA',
  'TypeScript': '#3B82F6',
  'Mimari': '#A78BFA',
  'Performans': '#4ADE80',
  'DevOps': '#38BDF8'
};

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filtered = activeCategory === 'Tümü' ?
  articles :
  articles.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured && activeCategory === 'Tümü') ?? filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  return (
    <section className="py-12 px-6 pb-20 bg-[#050A14]">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            activeCategory === cat ?
            'bg-primary text-white glow-blue-sm' : 'border border-[#1E3A5F] text-muted-foreground hover:text-white hover:border-accent/40'}`
            }>

              {cat}
            </button>
          )}
        </div>

        {/* Featured Article */}
        {featured &&
        <div className="group rounded-2xl border-glow bg-card overflow-hidden mb-8 cursor-pointer hover:border-accent/30 transition-all duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                <AppImage
                src={featured.image}
                alt={featured.imageAlt}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 image-hover-zoom transition-opacity duration-500"
                priority />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    color: categoryColors[featured.category] ?? '#60A5FA',
                    background: `${categoryColors[featured.category] ?? '#60A5FA'}15`,
                    border: `1px solid ${categoryColors[featured.category] ?? '#60A5FA'}30`
                  }}>

                    {featured.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{featured.readTime} okuma</span>
                  {activeCategory === 'Tümü' &&
                <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                      Öne Çıkan
                    </span>
                }
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-white leading-tight mb-4 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) =>
                <span key={tag} className="text-xs text-[#64748B] bg-[#0F172A] px-2.5 py-1 rounded border border-[#1E3A5F]/30">
                      {tag}
                    </span>
                )}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#1E3A5F]/40">
                  <span className="text-xs text-muted-foreground">{featured.date}</span>
                  <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Oku
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        }

        {/* Rest of Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) =>
          <div
            key={article.id}
            className="group glass rounded-2xl overflow-hidden cursor-pointer hover:border-accent/25 transition-all duration-300 flex flex-col">

              {/* Image */}
              <div className="h-44 overflow-hidden relative">
                <AppImage
                src={article.image}
                alt={article.imageAlt}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 image-hover-zoom transition-opacity duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    color: categoryColors[article.category] ?? '#60A5FA',
                    background: `${categoryColors[article.category] ?? '#60A5FA'}15`,
                    border: `1px solid ${categoryColors[article.category] ?? '#60A5FA'}25`
                  }}>

                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h3 className="font-display text-lg font-semibold text-white leading-tight mb-3 group-hover:text-accent transition-colors flex-1">
                  {article.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">{article.excerpt}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) =>
                <span key={tag} className="text-[10px] text-[#64748B] bg-[#0F172A] px-2 py-0.5 rounded border border-[#1E3A5F]/30">
                      {tag}
                    </span>
                )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#1E3A5F]/40">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <svg
                  width="14" height="14" viewBox="0 0 16 16" fill="none"
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all">

                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}