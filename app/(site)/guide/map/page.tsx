import Image from 'next/image';

import { ExhibitionMaps } from '@/components/guide/exhibition-maps';
import { Illustration } from '@/components/illustration/illustration';
import { PageLayout } from '@/components/layout/page-layout';

import campusMap from './sample-campus.png';

export default function MapPage() {
  return (
    <PageLayout
      illustration={<Illustration alt="" src="pin.png" />}
      related={{
        pages: ['/guide/access', '/guide/faq', '/official/pamphlet'],
        background: 'paper-2',
      }}
      subtitle="構内図と、校内・屋外の展示マップです"
      title="会場マップ"
    >
      <div className="space-y-10">
        <figure className="space-y-3">
          <figcaption className="text-lg font-medium">構内図</figcaption>
          <div className="ink-shell overflow-visible bg-card">
            <div className="overflow-hidden rounded-[calc(var(--radius)-var(--shell-stroke))]">
              <Image
                priority
                alt="サンプルの構内図。正門や校舎の位置は描いていません。本番の地図に差し替えてください。"
                className="h-auto w-full"
                sizes="(min-width: 1280px) 1248px, calc(100vw - 32px)"
                src={campusMap}
              />
            </div>
          </div>
        </figure>
        <ExhibitionMaps />
      </div>
    </PageLayout>
  );
}
