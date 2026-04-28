'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background text-foreground"
      style={{ paddingTop: '80px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 520px at 12% 10%, rgba(56,189,248,0.28), transparent 60%), radial-gradient(820px 520px at 88% 12%, rgba(37,99,235,0.22), transparent 62%), linear-gradient(180deg, #f6fbff 0%, #edf6ff 55%, #f7fbff 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(circle at 60% 30%, black 0%, transparent 68%)',
          }}
        />
      </div>

      {/* Atmospheric blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="parallax-blob absolute top-1/4 left-1/4 w-96 h-96 rounded-full transition-transform duration-700 ease-out animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
          }}
        />

        <div
          className="parallax-blob absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full transition-transform duration-700 ease-out animate-blob-delay"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
            animationDelay: '4s',
          }}
        />

        <div
          className="parallax-blob absolute top-1/2 right-1/3 w-64 h-64 rounded-full transition-transform duration-700 ease-out"
          style={{ background: 'radial-gradient(circle, rgba(30,58,95,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — Main Copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-white/70 backdrop-blur-sm text-xs font-semibold text-primary uppercase tracking-widest mb-8 animate-fade-in-up stagger-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Teknoloji & yazılım şirketleri için modern web
            </div>

            {/* H1 */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight mb-6 animate-fade-in-up stagger-2">
              <span className="text-foreground">Fikrinizi ürüne</span>
              <br />
              <span className="text-gradient">çeviren bir online vitrin</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/35 pl-5 mb-10 animate-fade-in-up stagger-3">
              Kurumsal güven + startup çevikliği. Ürününüzü net anlatan bir ana sayfa, güçlü CTA’lar
              ve teknik içerik akışı ile potansiyel müşterilerinizi yönlendirin.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up stagger-4">
              <Link
                href="/homepage#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 glow-blue-sm hover:scale-105 active:scale-95 flex items-center gap-3 group text-sm shadow-sm"
              >
                Ücretsiz danışmanlık al
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
              <Link
                href="/services"
                className="px-8 py-4 border border-border bg-white/60 text-foreground font-semibold rounded-xl hover:border-primary/35 hover:bg-white transition-all duration-300 text-sm shadow-sm"
              >
                Çözümleri gör
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in-up stagger-5">
              {[
                { title: 'Hızlı teslim', desc: 'Net sprint planı' },
                { title: 'Ölçeklenebilir mimari', desc: 'Next.js odaklı' },
                { title: 'Ölçülebilir sonuç', desc: 'Performans & SEO' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-white/70 px-4 py-3 shadow-sm"
                >
                  <div className="text-sm font-semibold text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Illustration panel */}
          <div className="lg:col-span-5 animate-fade-in-up stagger-4">
            <div className="relative rounded-[28px] border border-border bg-white/75 shadow-xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background:
                    'radial-gradient(520px 260px at 30% 15%, rgba(56,189,248,0.35), transparent 62%), radial-gradient(520px 260px at 85% 25%, rgba(37,99,235,0.28), transparent 62%)',
                }}
              />

              <div className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-primary uppercase">
                      Canlı önizleme
                    </div>
                    <div className="mt-2 font-display text-2xl font-semibold text-foreground leading-tight">
                      Teknoloji şirketi ana sayfası
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Ürün paketleri, referanslar ve içerik akışı ile güven oluşturan bir yapı.
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 border border-border shadow-sm">
                    <span className="text-xs font-semibold text-foreground">Durum</span>
                    <span className="text-xs font-semibold text-emerald-600">Canlı</span>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/85 border border-border p-4 shadow-sm">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Paketler
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 rounded-full bg-gradient-to-r from-primary via-sky-400 to-accent" />
                      <div className="h-2 rounded-full bg-slate-200" />
                      <div className="h-2 rounded-full bg-slate-200 w-4/5" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/85 border border-border p-4 shadow-sm">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      İçgörü
                    </div>
                    <div className="mt-3 flex items-end gap-2">
                      {[42, 58, 36, 72, 54].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-md bg-gradient-to-t from-primary/25 to-primary/5 border border-primary/10"
                        >
                          <div
                            className="mx-auto w-full rounded-md bg-primary/70"
                            style={{ height: `${h}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-white/90 p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-foreground">Haftalık bülten</div>
                    <div className="text-xs text-muted-foreground">İstemezsen çık</div>
                  </div>
                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 rounded-xl border border-border bg-muted px-3 py-2 text-sm text-muted-foreground">
                      eposta@ornek.com
                    </div>
                    <div className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground text-center">
                      Abone ol
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Keşfet</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  );
}
