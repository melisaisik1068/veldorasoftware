import React from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-20 px-6 bg-muted/60">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Projenizi Konuşalım
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed mb-8">
              Hangi hizmete ihtiyacınız olduğundan emin değil misiniz? Ücretsiz 30 dakikalık mimari
              danışmanlık görüşmesi için ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/homepage#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 glow-blue-sm hover:scale-105 active:scale-95 text-sm shadow-sm"
              >
                Ücretsiz Görüşme Ayarla
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 border border-border bg-background/70 text-foreground font-semibold rounded-xl hover:border-primary/35 hover:bg-background transition-all duration-300 text-sm shadow-sm"
              >
                Teknik Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
