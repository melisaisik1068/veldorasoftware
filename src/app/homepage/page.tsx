import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TechBentoSection from './components/TechBentoSection';
import ServicesPreviewSection from './components/ServicesPreviewSection';
import PortfolioSection from './components/PortfolioSection';
import BlogPreviewSection from './components/BlogPreviewSection';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
  title: 'Veldora Yazılım — Yazılımda Mimari Güç',
  description:
    '5 yıllık Next.js 16 ve TypeScript uzmanlığıyla kurumsal yazılım mimarisi. Ölçeklenebilir, hızlı ve güvenilir full-stack çözümler.',
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Veldora Yazılım',
            url: 'https://veldorayazilim.com',
            description: 'Next.js 16 ve TypeScript ile full-stack yazılım geliştirme',
            foundingDate: '2021',
            knowsAbout: [
              'Next.js',
              'TypeScript',
              'React',
              'Full-Stack Development',
              'Cloud Architecture',
            ],
            sameAs: ['https://github.com/veldora', 'https://linkedin.com/company/veldora'],
          }),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <TechBentoSection />
        <ServicesPreviewSection />
        <PortfolioSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
