import { InstagramEmbed } from '@/components/home/instagram-embed';
import { InkTextLink } from '@/components/ui/ink-text-link';

import { FESTIVAL } from '@/lib/config/festival';
import { getOfficialSocial } from '@/lib/config/social';

const INSTAGRAM_PROFILE_URL = getOfficialSocial('instagram').url;

function SectionHeading() {
  return (
    <h2 className="text-2xl font-medium text-foreground" style={{ letterSpacing: 0 }}>
      PR動画
    </h2>
  );
}

function InstagramLink() {
  return (
    <InkTextLink href={INSTAGRAM_PROFILE_URL} rel="noopener noreferrer" target="_blank">
      公式Instagramを見る
    </InkTextLink>
  );
}

export function PrVideoSection() {
  return (
    <section className="bg-paper-2 py-16 md:py-24" data-palette="green">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading />
          {FESTIVAL.prVideo.enabled ? (
            <InstagramEmbed permalink={FESTIVAL.prVideo.instagramPostUrl} />
          ) : (
            <div className="ink-shell w-full max-w-135 bg-card p-8 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                PR動画はまだ設定されていません。lib/config/festival.ts の prVideo に Instagram
                の投稿 URL を入れ、enabled を true にしてください。
              </p>
            </div>
          )}
          <InstagramLink />
        </div>
      </div>
    </section>
  );
}
