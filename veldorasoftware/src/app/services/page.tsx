import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import ServicesCTA from './components/ServicesCTA';

export const metadata: Metadata = {
  title: 'Hizmetler — Veldora Yazılım',
  description: 'Full-stack geliştirme, frontend mimarisi, API tasarımı, performans optimizasyonu ve teknik danışmanlık hizmetleri. Next.js 16 ve TypeScript uzmanı.',
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            provider: { '@type': 'Organization', name: 'Veldora Yazılım' },
            serviceType: ['Full-Stack Development', 'Frontend Architecture', 'Performance Optimization', 'API Design', 'DevOps', 'Technical Consulting'],
            areaServed: 'Worldwide',
          }),
        }}
      />
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}