import React from 'react';

/* BENTO GRID AUDIT for ServicesGrid
Array has 6 cards: [FullStack, Frontend, Performance, API, DevOps, Consulting]
4-col grid (lg):
Row 1: [col-1-2: FullStack cs-2] [col-3: Frontend cs-1] [col-4: Performance cs-1]
Row 2: [col-1: API cs-1] [col-2-3: DevOps cs-2] [col-4: Consulting cs-1]
Placed 6/6 ✓
*/

const services = [
  {
    id: 'fullstack',
    colSpan: 'lg:col-span-2',
    tag: 'Temel Hizmet',
    tagColor: '#60A5FA',
    title: 'Full-Stack Geliştirme',
    description:
      'Next.js 16 App Router ile server-first mimari. Veritabanı şemasından API tasarımına, frontend component sistemine kadar uçtan uca geliştirme.',
    features: [
      'Next.js 16 App Router + Server Components',
      'TypeScript strict mode, %100 coverage',
      'PostgreSQL / Prisma / tRPC stack',
      'Vercel / Railway deployment',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    bg: 'bg-[#0A1628]',
    glowColor: 'rgba(37,99,235,0.12)',
  },
  {
    id: 'frontend',
    colSpan: 'lg:col-span-1',
    tag: 'UI/UX',
    tagColor: '#A78BFA',
    title: 'Frontend Mimarisi',
    description: 'Design system kurulumu, component kütüphanesi ve performans odaklı render stratejisi.',
    features: ['React 19 + Concurrent Features', 'Tailwind + Shadcn/ui', 'Storybook dokümantasyonu'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    bg: 'bg-[#0A1628]',
    glowColor: 'rgba(167,139,250,0.08)',
  },
  {
    id: 'performance',
    colSpan: 'lg:col-span-1',
    tag: 'Optimizasyon',
    tagColor: '#4ADE80',
    title: 'Performans Optimizasyonu',
    description: 'Mevcut sitenizi Core Web Vitals hedeflerine taşıyorum. Bundle analizi ve ISR stratejisi.',
    features: ['Lighthouse audit + roadmap', 'Bundle splitting', 'Image + font optimizasyonu'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    bg: 'bg-[#0A1628]',
    glowColor: 'rgba(74,222,128,0.08)',
  },
  {
    id: 'api',
    colSpan: 'lg:col-span-1',
    tag: 'Backend',
    tagColor: '#FB923C',
    title: 'API Tasarımı',
    description: 'RESTful ve tRPC API\'ları, güvenli auth akışları ve rate limiting.',
    features: ['tRPC + OpenAPI', 'JWT / OAuth 2.0', 'Edge Functions'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    bg: 'bg-[#0A1628]',
    glowColor: 'rgba(251,146,60,0.08)',
  },
  {
    id: 'devops',
    colSpan: 'lg:col-span-2',
    tag: 'Infrastructure',
    tagColor: '#38BDF8',
    title: 'DevOps & Cloud',
    description: 'CI/CD pipeline kurulumu, Docker konteynerizasyon ve cloud deployment otomasyonu. Vercel, GCP ve AWS üzerinde production-ready altyapı.',
    features: ['GitHub Actions CI/CD', 'Docker + Kubernetes', 'Vercel / GCP / AWS', 'Monitoring + alerting'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    bg: 'bg-[#0A1628]',
    glowColor: 'rgba(56,189,248,0.08)',
  },
  {
    id: 'consulting',
    colSpan: 'lg:col-span-1',
    tag: 'Danışmanlık',
    tagColor: '#F472B6',
    title: 'Teknik Danışmanlık',
    description: 'Mimari review, tech stack seçimi ve ekibinize mentörlük.',
    features: ['Code review + audit', 'Architecture planning', 'Team mentoring'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bg: 'bg-[#0A1628]',
    glowColor: 'rgba(244,114,182,0.08)',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 px-6 bg-[#030810]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services?.map((svc, i) => (
            <div
              key={svc?.id}
              className={`${svc?.colSpan} group ${svc?.bg} rounded-2xl border-glow p-6 md:p-8 flex flex-col hover:border-accent/30 transition-all duration-500 relative overflow-hidden`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${svc?.glowColor} 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#050A14] flex items-center justify-center mb-5 border border-[#1E3A5F]/40">
                  {svc?.icon}
                </div>

                {/* Tag */}
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 inline-block"
                  style={{
                    color: svc?.tagColor,
                    background: `${svc?.tagColor}15`,
                    border: `1px solid ${svc?.tagColor}30`,
                  }}
                >
                  {svc?.tag}
                </span>

                <h2 className="font-display text-xl font-semibold text-white mb-3">{svc?.title}</h2>
                <p className="text-sm text-[#64748B] leading-relaxed mb-5">{svc?.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {svc?.features?.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: svc?.tagColor }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}