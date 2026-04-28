import React from 'react';

import AppImage from '@/components/ui/AppImage';

const caseStudies = [
  {
    tag: 'E-Commerce Platform',
    title: 'Modüler Checkout Mimarisi',
    problem: 'Legacy monolith checkout %40 sepet terk oranı yaratıyordu.',
    solution: 'Next.js App Router + Server Actions ile sıfırdan yazılan checkout akışı.',
    metric: '−38%',
    metricLabel: 'Sepet terk oranı',
    tech: ['Next.js 16', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17364ba08-1767019290492.png',
    imageAlt:
      'Clean minimal e-commerce interface on dark background, blue accent colors, modern UI',
  },
  {
    tag: 'SaaS Dashboard',
    title: 'Real-Time Analytics Altyapısı',
    problem: 'REST polling ile 8 saniyelik veri gecikmesi kullanıcıları kaçırıyordu.',
    solution: 'WebSocket + React Server Components hibrit mimarisiyle anlık güncelleme.',
    metric: '< 50ms',
    metricLabel: 'Veri gecikmesi',
    tech: ['React 19', 'WebSocket', 'Redis', 'Vercel Edge'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_110953098-1772091052591.png',
    imageAlt:
      'Analytics dashboard with charts and graphs on dark screen, professional data visualization',
  },
  {
    tag: 'Corporate Portal',
    title: 'Multi-Tenant B2B Portal',
    problem: '12 ayrı müşteri için ayrı deployment maliyeti sürdürülemez hale gelmişti.',
    solution: 'Tek codebase, dinamik tenant routing ve izole veri katmanı.',
    metric: '−80%',
    metricLabel: 'Deployment maliyeti',
    tech: ['Next.js', 'tRPC', 'Prisma', 'Docker'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dcce3fc5-1775709572866.png',
    imageAlt:
      'Corporate business portal interface, clean professional UI, dark theme with data tables',
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-3">
              Portföy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Gerçek Problemler,
              <br />
              <span className="text-gradient-blue">Gerçek Çözümler</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            Her proje bir teknik meydan okumadır. Çözdüğüm problemi ve ölçülebilir sonuçları
            paylaşıyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies?.map((cs, i) => (
            <div
              key={cs?.title}
              className="group rounded-2xl border-glow bg-card overflow-hidden flex flex-col hover:border-accent/30 transition-all duration-500"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Image */}
              <div className="h-44 overflow-hidden relative">
                <AppImage
                  src={cs?.image}
                  alt={cs?.imageAlt}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 image-hover-zoom transition-opacity duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/35 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/15 px-3 py-1 rounded-full">
                    {cs?.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {cs?.title}
                </h3>

                {/* Problem → Solution */}
                <div className="space-y-3 mb-5 flex-1">
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest mt-0.5 shrink-0">
                      Problem
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cs?.problem}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest mt-0.5 shrink-0">
                      Çözüm
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cs?.solution}</p>
                  </div>
                </div>

                {/* Metric */}
                <div className="flex items-center justify-between py-4 border-t border-border mb-4">
                  <div>
                    <div className="font-display text-3xl font-semibold text-primary">
                      {cs?.metric}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{cs?.metricLabel}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[160px]">
                    {cs?.tech?.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
