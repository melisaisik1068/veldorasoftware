import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';

export const metadata: Metadata = {
  title: 'Teknik Blog — Veldora Yazılım',
  description: 'Next.js 16, TypeScript ve modern web mimarisi üzerine derinlemesine teknik makaleler. E-A-T odaklı içerik.',
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Veldora Yazılım Teknik Blog',
            description: 'Next.js, TypeScript ve web mimarisi üzerine teknik makaleler',
            publisher: { '@type': 'Organization', name: 'Veldora Yazılım' },
          }),
        }}
      />
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}