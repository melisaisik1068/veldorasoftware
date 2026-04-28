'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY, currentTarget } = e;
      const target = currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      const blobs = heroRef.current.querySelectorAll<HTMLElement>('.parallax-blob');
      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 12;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1609995114465-f017e9659435"
          alt="Dark code editor with blue syntax highlighting, deep shadows, atmospheric tech environment"
          fill
          className="object-cover opacity-30"
          priority />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A14]/80 via-[#050A14]/50 to-[#050A14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/90 via-transparent to-[#050A14]/70" />
      </div>

      {/* Atmospheric blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="parallax-blob absolute top-1/4 left-1/4 w-96 h-96 rounded-full transition-transform duration-700 ease-out animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }} />

        <div
          className="parallax-blob absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full transition-transform duration-700 ease-out animate-blob-delay"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)', animationDelay: '4s' }} />

        <div
          className="parallax-blob absolute top-1/2 right-1/3 w-64 h-64 rounded-full transition-transform duration-700 ease-out"
          style={{ background: 'radial-gradient(circle, rgba(30,58,95,0.2) 0%, transparent 70%)' }} />

      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />


      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — Main Copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm text-xs font-semibold text-accent uppercase tracking-widest mb-8 animate-fade-in-up stagger-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              5 Yıllık Full-Stack Uzmanlığı
            </div>

            {/* H1 */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight mb-6 animate-fade-in-up stagger-2">
              <span className="text-white">Yazılımda</span>
              <br />
              <span className="text-gradient">Mimari Güç</span>
            </h1>

            <p className="text-lg text-[#94A3B8] max-w-xl leading-relaxed border-l-2 border-accent/40 pl-5 mb-10 animate-fade-in-up stagger-3">
              Next.js 16 ve TypeScript ile kurumsal kalitede, ölçeklenebilir yazılım mimarisi. Sıfırdan production&apos;a kadar her adımda teknik mükemmellik.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up stagger-4">
              <Link
                href="/homepage#contact"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 glow-blue-sm hover:scale-105 active:scale-95 flex items-center gap-3 group text-sm">

                Proje Başlat
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-[#1E3A5F] text-[#94A3B8] font-semibold rounded-xl hover:border-accent/40 hover:text-white transition-all duration-300 text-sm">

                Hizmetleri Gör
              </Link>
            </div>
          </div>

          {/* Right — Glassmorphism Stat Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 animate-fade-in-up stagger-4">
            <div className="glass rounded-2xl p-6 hover:border-accent/25 transition-all duration-300 cursor-default group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Deneyim</span>
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="font-display text-4xl font-semibold text-white mb-1">5 Yıl</div>
              <div className="text-sm text-muted-foreground">Next.js & TypeScript full-stack</div>
            </div>

            <div className="glass rounded-2xl p-6 hover:border-accent/25 transition-all duration-300 cursor-default">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Teslim Edilen</span>
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <div className="font-display text-4xl font-semibold text-white mb-1">40+</div>
              <div className="text-sm text-muted-foreground">Başarılı proje & MVP</div>
            </div>

            <div className="glass rounded-2xl p-6 hover:border-accent/25 transition-all duration-300 cursor-default">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Core Web Vitals</span>
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
              </div>
              <div className="font-display text-4xl font-semibold text-white mb-1">100</div>
              <div className="text-sm text-muted-foreground">Ortalama Lighthouse skoru</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Aşağı Kaydır</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>);

}