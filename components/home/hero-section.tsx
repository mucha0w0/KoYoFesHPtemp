import Image from 'next/image';

import { FESTIVAL, FESTIVAL_HERO_ALT } from '@/lib/config/festival';

export function HeroSection() {
  return (
    <section>
      <div className="relative aspect-1200/300 w-full overflow-hidden">
        <Image
          fill
          priority
          alt={FESTIVAL_HERO_ALT}
          className="object-contain object-center"
          sizes="100vw"
          src={FESTIVAL.images.hero}
        />
      </div>
    </section>
  );
}
