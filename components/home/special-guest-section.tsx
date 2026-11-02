import Image from 'next/image';

import { InkTextLink } from '@/components/ui/ink-text-link';

import { FESTIVAL } from '@/lib/config/festival';

export function SpecialGuestSection() {
  const guest = FESTIVAL.guest;

  return (
    <section aria-labelledby="special-guest-heading" className="bg-paper py-16 md:py-24" data-palette="orange">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center text-2xl font-medium md:text-3xl" id="special-guest-heading">
            スペシャルゲスト
          </h2>

          <figure className="ink-shell w-full max-w-135 bg-card">
            <div className="overflow-hidden rounded-[calc(var(--radius)-var(--shell-stroke))]">
              <Image
                alt={guest.name}
                className="h-auto w-full"
                height={guest.portraitHeight}
                sizes="(min-width: 768px) 540px, calc(100vw - 32px)"
                src={guest.portrait}
                width={guest.portraitWidth}
              />
            </div>
          </figure>

          <p className="text-center text-xl font-medium">{guest.name}</p>

          <div className="w-full max-w-135 rounded-md bg-paper-2 p-6">
            {guest.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm text-muted-foreground first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>

          <InkTextLink href={`/events/${guest.eventSlug}`}>出演の詳細を見る</InkTextLink>
        </div>
      </div>
    </section>
  );
}
