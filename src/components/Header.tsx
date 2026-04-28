'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { href: '/homepage', label: 'Ana Sayfa' },
  { href: '/services', label: 'Hizmetler' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050A14]/90 backdrop-blur-xl border-b border-[#1E3A5F]/60 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-3 group">
            <AppLogo
              size={36}
              onClick={() => {}}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display text-lg font-semibold text-white tracking-tight hidden sm:block">
              Veldora
              <span className="text-accent"> Yazılım</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`transition-colors duration-200 hover:text-white relative group ${
                  pathname === link?.href ? 'text-white' : ''
                }`}
              >
                {link?.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    pathname === link?.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/homepage#contact"
              className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all duration-300 glow-blue-sm hover:scale-105 active:scale-95"
            >
              Proje Başlat
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#050A14]/95 backdrop-blur-xl flex flex-col pt-24 px-6"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col gap-2" onClick={(e) => e?.stopPropagation()}>
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 px-4 text-xl font-semibold border-b border-[#1E3A5F]/40 transition-colors ${
                  pathname === link?.href ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {link?.label}
              </Link>
            ))}
            <Link
              href="/homepage#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 px-6 py-4 bg-primary text-white rounded-xl text-center text-lg font-bold hover:bg-blue-500 transition-colors"
            >
              Proje Başlat
            </Link>
          </div>
        </div>
      )}
    </>
  );
}