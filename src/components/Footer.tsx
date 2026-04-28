import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 bg-muted/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <Link href="/homepage" className="flex items-center gap-3 group">
          <AppLogo size={32} />
          <span className="font-display text-base font-semibold text-foreground tracking-tight">
            Veldora <span className="text-primary">Yazılım</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/homepage" className="hover:text-foreground transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/services" className="hover:text-foreground transition-colors">
            Hizmetler
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/homepage#contact" className="hover:text-foreground transition-colors">
            İletişim
          </Link>
        </div>

        {/* Copyright + Legal */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>© 2026 Veldora Yazılım</span>
          <span className="text-border">·</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Gizlilik
          </a>
          <span className="text-border">·</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Koşullar
          </a>
        </div>
      </div>
    </footer>
  );
}
