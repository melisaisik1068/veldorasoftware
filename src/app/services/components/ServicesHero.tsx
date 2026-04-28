import React from 'react';

export default function ServicesHero() {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-background">
      {/* Background blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-white/70 text-xs font-semibold text-primary uppercase tracking-widest mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Hizmetler
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[0.95] tracking-tight mb-6">
            Mimari Kalitede
            <br />
            <span className="text-gradient">Yazılım Çözümleri</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Startup MVP&apos;sinden kurumsal platforma. Her projede temiz kod, tip güvenliği ve
            ölçeklenebilir mimari.
          </p>
        </div>

        {/* Quick stats row */}
        <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-border">
          {[
            { value: '5+', label: 'Yıl deneyim' },
            { value: '40+', label: 'Teslim edilen proje' },
            { value: '100', label: 'Lighthouse skoru' },
            { value: '%100', label: 'TypeScript coverage' },
          ]?.map((stat) => (
            <div key={stat?.label}>
              <div className="font-display text-3xl font-semibold text-foreground mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
