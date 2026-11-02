import Image from 'next/image';

import { PageLayout } from '@/components/layout/page-layout';

import { FESTIVAL, FESTIVAL_HERO_ALT } from '@/lib/config/festival';

export default function ThemePage() {
  return (
    <PageLayout
      related={{
        pages: ['/about/overview', '/about/part', '/official/pamphlet'],
        background: 'paper-2',
      }}
      subtitle={`${FESTIVAL.name}${FESTIVAL.year}のテーマについて`}
      title="テーマ"
    >
      <div className="space-y-12">
        <figure className="ink-shell overflow-visible bg-card">
          <div className="overflow-hidden rounded-[calc(var(--radius)-var(--shell-stroke))]">
            <Image
              priority
              alt={FESTIVAL_HERO_ALT}
              className="h-auto w-full object-contain"
              height={FESTIVAL.images.heroHeight}
              sizes="(min-width: 1280px) 1248px, calc(100vw - 32px)"
              src={FESTIVAL.images.hero}
              width={FESTIVAL.images.heroWidth}
            />
          </div>
        </figure>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h2 className="text-xl font-medium">{FESTIVAL.theme.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{FESTIVAL.theme.reading}</p>
          </div>

          <div className="ink-shell bg-card p-8">
            <h3 className="mb-4 text-lg font-medium">テーマの由来</h3>
            <p className="leading-relaxed text-foreground">{FESTIVAL.theme.origin}</p>
          </div>

          <div className="ink-shell bg-card p-8">
            <h3 className="mb-4 text-lg font-medium">イラストに込めた思い</h3>
            <p className="leading-relaxed text-foreground">{FESTIVAL.theme.artNote}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
