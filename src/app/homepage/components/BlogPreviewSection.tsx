import React from 'react';
import Link from 'next/link';

const articles = [
  {
    category: 'Next.js',
    readTime: '8 dk',
    title: 'Next.js 16 ile Ölçeklenebilir Mimari: App Router Derinlemesine',
    excerpt:
      'Server Components, Streaming ve Partial Pre-rendering ile modern bir SaaS mimarisini nasıl kurarsınız?',
    date: '15 Nisan 2026',
    slug: 'nextjs-16-scalable-architecture',
  },
  {
    category: 'TypeScript',
    readTime: '6 dk',
    title: 'TypeScript Strict Mode: Tip Güvenliğinde Uzlaşmama',
    excerpt:
      'noImplicitAny, strictNullChecks ve discriminated unions ile runtime hatalarını sıfıra indirmek.',
    date: '8 Nisan 2026',
    slug: 'typescript-strict-mode-guide',
  },
  {
    category: 'Performans',
    readTime: '10 dk',
    title: "Core Web Vitals 2026: LCP'yi 1 Saniyenin Altına Düşürmek",
    excerpt: 'ISR, Edge Runtime ve akıllı image optimizasyonu ile Lighthouse 100 hedefi.',
    date: '1 Nisan 2026',
    slug: 'core-web-vitals-optimization',
  },
];

const categoryColors: Record<string, string> = {
  'Next.js': '#60A5FA',
  TypeScript: '#3B82F6',
  Performans: '#4ADE80',
};

export default function BlogPreviewSection() {
  return (
    <section className="py-16 px-6 bg-muted/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-3">
              Teknik Blog
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Öğrendiklerimi
              <br />
              Paylaşıyorum
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors group"
          >
            Tüm makaleler
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog`}
              className="group glass rounded-2xl p-6 hover:border-accent/25 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    color: categoryColors[article.category] ?? '#60A5FA',
                    background: `${categoryColors[article.category] ?? '#60A5FA'}15`,
                    border: `1px solid ${categoryColors[article.category] ?? '#60A5FA'}30`,
                  }}
                >
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.readTime} okuma</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{article.date}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
