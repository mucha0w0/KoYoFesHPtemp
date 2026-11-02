import Image from 'next/image';

const EXHIBITION_MAPS = [
  {
    src: '/kounaizu/sample-indoor.png',
    width: 1200,
    height: 675,
    title: '校内の展示',
    alt: '校内の展示地図のサンプル。建物名や企画の位置は入っていません。',
  },
  {
    src: '/kounaizu/sample-outdoor.png',
    width: 1200,
    height: 675,
    title: '屋外の展示',
    alt: '屋外の展示地図のサンプル。建物名や企画の位置は入っていません。',
  },
] as const;

/** 展示地図PDFから書き出した校内・屋外マップ */
export function ExhibitionMaps() {
  return (
    <div className="space-y-8">
      {EXHIBITION_MAPS.map((map) => (
        <figure key={map.src} className="space-y-3">
          <figcaption className="text-lg font-medium">{map.title}</figcaption>
          <div className="ink-shell overflow-visible bg-card">
            <div className="overflow-hidden rounded-[calc(var(--radius)-var(--shell-stroke))]">
              <Image
                unoptimized
                alt={map.alt}
                className="h-auto w-full"
                height={map.height}
                sizes="(min-width: 1280px) 1248px, calc(100vw - 32px)"
                src={map.src}
                width={map.width}
              />
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}
