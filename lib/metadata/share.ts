import type { Metadata } from 'next';

import { FESTIVAL, FESTIVAL_HERO_ALT, FESTIVAL_SITE_NAME } from '@/lib/config/festival';

/**
 * 企画ページ以外の共有画像。
 * public/og.png はプレースホルダー。テーマ画像を差し替えたら、同じ横長で作り直す。
 */
export const DEFAULT_SHARE_IMAGE = {
  url: FESTIVAL.images.og,
  width: FESTIVAL.images.ogWidth,
  height: FESTIVAL.images.ogHeight,
  alt: FESTIVAL_HERO_ALT,
} as const;

type ShareImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

type ShareCard = 'summary' | 'summary_large_image';

/**
 * Twitter などの共有カード。
 * 企画アイコンは正方形なので summary（全体が見える小さな画像）。
 * コンセプトアートは summary_large_image（横長の大きな画像）。
 */
export function shareMetadata(
  image: ShareImage,
  options?: {
    card?: ShareCard;
    openGraph?: Metadata['openGraph'];
  },
): Pick<Metadata, 'openGraph' | 'twitter'> {
  const card = options?.card ?? 'summary_large_image';

  return {
    openGraph: {
      siteName: FESTIVAL_SITE_NAME,
      locale: 'ja_JP',
      type: 'website',
      ...options?.openGraph,
      images: [image],
    },
    twitter: {
      card,
      images: [image],
    },
  };
}

/** SVG は Twitter が表示しないので、共有画像には使わない。 */
export function shareIcon(src: string, alt: string): ShareImage | null {
  if (!src) return null;
  const path = src.split(/[?#]/)[0]?.toLowerCase() ?? '';
  if (path.endsWith('.svg')) return null;
  return { url: src, alt };
}
