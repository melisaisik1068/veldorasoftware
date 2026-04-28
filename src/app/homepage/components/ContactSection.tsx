'use client';
import React, { useMemo, useState } from 'react';

const WA_NUMBER = '905307662975';
const WA_MESSAGE = encodeURIComponent('Merhaba, bir proje hakkında görüşmek istiyorum.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'bad'>('idle');

  const emailOk = useMemo(() => {
    // pragmatic validation for UI demo purposes
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  return (
    <section id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">
            Başlayalım
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Potansiyel müşterileri yakalayın
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Wix şablonundaki gibi net bir ana sayfa akışı: güven veren içerik + güçlü CTA + iletişim
            kanalı.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 glass-strong rounded-2xl p-8 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Bültene katılın
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Ürün güncellemeleri, teknik yazılar ve teklif içerikleri için e‑posta bırakın.
                </p>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-muted px-3 py-2 border border-border text-xs font-semibold text-foreground">
                Haftalık
              </div>
            </div>

            <form
              className="mt-8 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!emailOk) {
                  setStatus('bad');
                  return;
                }
                setStatus('ok');
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                E‑posta
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder="ornek@sirket.com"
                value={email}
                onChange={(e) => {
                  setStatus('idle');
                  setEmail(e.target.value);
                }}
                className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/35"
              />
              <button
                type="submit"
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-blue-600 transition-colors shadow-sm"
              >
                Abone ol
              </button>
            </form>

            {status === 'bad' && (
              <p className="mt-3 text-sm text-red-600">Lütfen geçerli bir e‑posta girin.</p>
            )}
            {status === 'ok' && (
              <p className="mt-3 text-sm text-emerald-700">
                Teşekkürler — backend bağlantısı yok; şimdilik UI akışını doğruladık.
              </p>
            )}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { k: 'SLA', v: 'Net teslim', d: 'Haftalık sync' },
                { k: 'Güvenlik', v: 'Tip güvenliği', d: 'TS + ESLint' },
                { k: 'Performans', v: 'Edge-ready', d: 'Next.js 15' },
              ].map((x) => (
                <div key={x.k} className="rounded-xl border border-border bg-background/70 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {x.k}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">{x.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 glass rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">Hızlı iletişim</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Tek tıkla WhatsApp üzerinden yazın; proje kapsamını ve zamanlamayı konuşalım.
              </p>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 0 24px rgba(37,211,102,0.25)',
              }}
            >
              WhatsApp ile yaz
            </a>

            <p className="mt-6 text-center text-xs text-muted-foreground tracking-wide">
              +90 530 766 29 75
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
