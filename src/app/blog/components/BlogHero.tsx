import React from 'react';

export default function BlogHero() {
  return (
    <section className="relative pt-36 pb-16 px-6 overflow-hidden bg-[#050A14]">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Teknik Blog
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white leading-[0.95] tracking-tight mb-6">
            5 Yılın<br />
            <span className="text-gradient">Teknik Notları</span>
          </h1>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Next.js, TypeScript ve modern web mimarisi üzerine öğrendiklerimi paylaşıyorum. Buzzword yok, sadece kod.
          </p>
        </div>
      </div>
    </section>
  );
}