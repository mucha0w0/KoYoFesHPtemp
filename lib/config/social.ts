import { FESTIVAL } from '@/lib/config/festival';

/**
 * 公式 SNS の単一ソース。
 * URL 自体は festival.ts。公開の PR 動画リンクが参照する。
 */
export const OFFICIAL_SOCIALS = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: FESTIVAL.social.instagram,
  },
] as const;

export type OfficialSocialId = (typeof OFFICIAL_SOCIALS)[number]['id'];
export type OfficialSocial = (typeof OFFICIAL_SOCIALS)[number];

export function getOfficialSocial(id: OfficialSocialId): OfficialSocial {
  const social = OFFICIAL_SOCIALS.find((item) => item.id === id);
  if (!social) {
    throw new Error(`未定義の公式 SNS: ${id}`);
  }
  return social;
}
