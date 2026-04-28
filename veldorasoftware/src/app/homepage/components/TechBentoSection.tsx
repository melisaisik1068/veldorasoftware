'use client';
import React, { useEffect, useRef } from 'react';

/* BENTO GRID AUDIT
Array has 7 cards: [ExpertiseCard, YearsCard, NextJSCard, TypeScriptCard, CloudCard, ProjectsCard, PerformanceCard]
4-col grid:
Row 1: [col-1-2: ExpertiseCard cs-2 rs-2] [col-3: YearsCard cs-1] [col-4: NextJSCard cs-1]
Row 2: [col-1-2: ExpertiseCard CONT]      [col-3: TypeScriptCard cs-1] [col-4: CloudCard cs-1]
Row 3: [col-1: ProjectsCard cs-1] [col-2-4: PerformanceCard cs-3]
Placed 7/7 ✓
*/

const techStack = [
  { name: 'Next.js 16', level: 98, color: '#FFFFFF' },
  { name: 'TypeScript', level: 97, color: '#3B82F6' },
  { name: 'React 19', level: 96, color: '#60A5FA' },
  { name: 'Node.js', level: 90, color: '#4ADE80' },
  { name: 'PostgreSQL', level: 85, color: '#A78BFA' },
  { name: 'Tailwind CSS', level: 99, color: '#38BDF8' },
];

export default function TechBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef?.current?.querySelectorAll('.bento-card') ?? [];
    cards?.forEach((card) => observer?.observe(card));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#050A14] relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p className="text-xs text-accent uppercase tracking-widest font-semibold mb-3">Teknik Yetkinlik</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
              Stack&apos;im, Silahım
            </h2>
          </div>
          <p className="text-[#64748B] max-w-sm text-sm leading-relaxed">
            Her teknoloji seçimi bilinçli bir mimari karardır. Hız, tip güvenliği ve ölçeklenebilirlik için en iyi araçları kullanıyorum.
          </p>
        </div>
      </div>
      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* ExpertiseCard — col-span-2, row-span-2 */}
        {/* BENTO col-1-2, row-1-2 */}
        <div
          className="bento-card lg:col-span-2 lg:row-span-2 rounded-2xl border-glow bg-card overflow-hidden relative group min-h-[280px] p-8 flex flex-col justify-between opacity-100"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top left, #2563EB 0%, transparent 60%)' }}
          />
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-white mb-3">Full-Stack Mimari</h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              App Router, Server Components, Edge Runtime ve ISR ile sıfır-bundle-size yaklaşımı. Her katmanda tip güvenliği.
            </p>
          </div>
          {/* Skill bars */}
          <div className="space-y-3">
            {techStack?.slice(0, 3)?.map((tech) => (
              <div key={tech?.name}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#94A3B8] font-medium">{tech?.name}</span>
                  <span style={{ color: tech?.color }} className="font-semibold">{tech?.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#0F172A] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${tech?.level}%`, background: `linear-gradient(90deg, ${tech?.color}80, ${tech?.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YearsCard — col-span-1 */}
        {/* BENTO col-3, row-1 */}
        <div
          className="bento-card rounded-2xl border-glow bg-card p-6 flex flex-col justify-between opacity-100 group hover:border-accent/30 transition-colors"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">Aktif Yıl</div>
          <div className="font-display text-5xl font-semibold text-white mb-2">5+</div>
          <div className="text-sm text-[#64748B]">Yıllık production deneyimi</div>
          <div className="mt-4 w-8 h-px bg-accent/40" />
        </div>

        {/* NextJSCard — col-span-1 */}
        {/* BENTO col-4, row-1 */}
        <div
          className="bento-card rounded-2xl border-glow bg-card p-6 flex flex-col justify-between opacity-100 group hover:border-white/20 transition-colors"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z" />
            </svg>
          </div>
          <div className="font-display text-xl font-semibold text-white">Next.js 16</div>
          <div className="text-xs text-[#64748B] mt-1">App Router uzmanı</div>
        </div>

        {/* TypeScriptCard — col-span-1 */}
        {/* BENTO col-3, row-2 */}
        <div
          className="bento-card rounded-2xl border-glow bg-card p-6 flex flex-col justify-between opacity-100 group hover:border-blue-500/30 transition-colors"
          style={{ animationDelay: '0.35s' }}
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="3" fill="#3178C6" />
              <path d="M13.5 15v-1.5H16.5V15H15.5V19H14V15H13.5ZM7 13.5H12V15H10.25V19H8.75V15H7V13.5Z" fill="white" />
            </svg>
          </div>
          <div className="font-display text-xl font-semibold text-white">TypeScript</div>
          <div className="text-xs text-[#64748B] mt-1">Strict mode, her zaman</div>
        </div>

        {/* CloudCard — col-span-1 */}
        {/* BENTO col-4, row-2 */}
        <div
          className="bento-card rounded-2xl border-glow bg-card p-6 flex flex-col justify-between opacity-100 group hover:border-green-500/30 transition-colors"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="w-10 h-10 rounded-lg bg-green-500/15 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="font-display text-xl font-semibold text-white">Cloud & DevOps</div>
          <div className="text-xs text-[#64748B] mt-1">Vercel, GCP, AWS</div>
        </div>

        {/* ProjectsCard — col-span-1 */}
        {/* BENTO col-1, row-3 */}
        <div
          className="bento-card rounded-2xl border-glow bg-primary/10 p-6 flex flex-col justify-between opacity-100 group border border-primary/30 hover:bg-primary/15 transition-colors"
          style={{ animationDelay: '0.45s' }}
        >
          <div className="text-xs text-accent uppercase tracking-widest font-semibold mb-2">Projeler</div>
          <div className="font-display text-5xl font-semibold text-white">40+</div>
          <div className="text-sm text-[#64748B] mt-2">Production&apos;da çalışan</div>
        </div>

        {/* PerformanceCard — col-span-3 */}
        {/* BENTO col-2-4, row-3 */}
        <div
          className="bento-card lg:col-span-3 rounded-2xl border-glow bg-card p-6 flex flex-col sm:flex-row items-center gap-6 opacity-100"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex-1">
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Performans Odaklı</div>
            <h3 className="font-display text-xl font-semibold text-white mb-2">LCP &lt; 1s, CLS = 0</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Her proje Google Core Web Vitals&apos;ta 100 Lighthouse skoru hedefiyle çıkar. ISR + Edge Runtime kombinasyonu ile.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            {[
              { label: 'LCP', value: '0.8s', color: '#4ADE80' },
              { label: 'FID', value: '< 1ms', color: '#60A5FA' },
              { label: 'CLS', value: '0.00', color: '#A78BFA' },
            ]?.map((metric) => (
              <div key={metric?.label} className="text-center">
                <div className="font-display text-2xl font-semibold mb-1" style={{ color: metric?.color }}>{metric?.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{metric?.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}