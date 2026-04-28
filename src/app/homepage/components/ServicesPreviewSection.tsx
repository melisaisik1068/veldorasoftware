import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    title: 'Full-Stack Geliştirme',
    desc: 'Next.js 16 App Router ile server-first mimari. API tasarımından veritabanı katmanına kadar.',
    badge: 'Next.js · TypeScript',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#A78BFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Frontend Mimarisi',
    desc: 'Component sistemleri, design token entegrasyonu ve mikro-frontend yaklaşımları.',
    badge: 'React 19 · Tailwind',
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ADE80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Performans Optimizasyonu',
    desc: 'Core Web Vitals iyileştirme, bundle analizi ve render stratejisi revizyonu.',
    badge: 'Lighthouse · ISR',
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="py-16 px-6 bg-muted/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric 60/40 layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left 40% — Label + CTA */}
          <div className="lg:w-2/5 lg:sticky lg:top-28">
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">
              Hizmetler
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Ne İnşa Edebiliriz?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
              Startup MVP&apos;sinden kurumsal platforma kadar, her ölçekteki yazılım projesinde
              mimari danışmanlık ve geliştirme.
            </p>

            {/* Stat block to fill column */}
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="text-3xl font-display font-semibold text-foreground mb-1">%100</div>
              <div className="text-sm text-muted-foreground">TypeScript coverage hedefi</div>
              <div className="mt-4 h-px bg-gradient-to-r from-accent/40 to-transparent" />
              <div className="mt-4 text-3xl font-display font-semibold text-foreground mb-1">
                3x
              </div>
              <div className="text-sm text-muted-foreground">Ortalama sayfa hızı artışı</div>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors group"
            >
              Tüm hizmetleri gör
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

          {/* Right 60% — Service Cards */}
          <div className="lg:w-3/5 flex flex-col gap-4">
            {services?.map((svc, i) => (
              <div
                key={svc?.title}
                className="glass rounded-2xl p-6 hover:border-accent/25 transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border">
                    {svc?.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {svc?.title}
                      </h3>
                      <span className="text-xs text-muted-foreground bg-background px-3 py-1 rounded-full border border-border hidden sm:block">
                        {svc?.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{svc?.desc}</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
