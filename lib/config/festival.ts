/**
 * 次の代が最初に書き換える祭の設定。
 *
 * 開催年・日時・テーマ・会場・連絡先・SNS・スタンプ条件は、ここだけを直す。
 * 初期値は架空（2099年、サンプル会場、example.com）。実在の個人名・電話・メールは入れない。
 * 日付の数字は日本時間。ランキング開始とスタンプ締切は `+09:00` として解釈する。
 * トップのカウントダウンは、従来どおり見ている端末のローカル時刻として同じ数字を使う。
 */

export interface FestivalDateTime {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
}

const YEAR = 2099;

export const FESTIVAL = {
  name: 'こうよう祭',
  nameEn: 'KoYoFes',
  /** 表示用の開催年。日時の year と揃える。 */
  year: YEAR,
  theme: {
    name: 'サンプルテーマ',
    reading: 'さんぷるてーま',
    origin:
      'ここにテーマの由来を書く。テンプレートでは架空の文です。来場者に伝えたい一言と、言葉の由来を 2 段落くらいで足してください。',
    artNote:
      'ここにテーマ画像の説明を書く。完成絵に差し替えたら、絵の中に込めたものだけを短く書いてください。',
  },
  start: { year: YEAR, month: 10, day: 31, hour: 9, minute: 0, second: 0 },
  end: { year: YEAR, month: 11, day: 1, hour: 17, minute: 0, second: 0 },
  admission: '無料（サンプル）',
  venue: {
    name: 'サンプル会場',
    postalCode: '〒000-0000',
    address: 'サンプル県サンプル市サンプル町0-0-0',
    train: ['サンプル線「サンプル駅」から徒歩00分'],
    bus: ['サンプル駅から路線バスで約00分。「サンプル停留所」下車、徒歩00分'],
    car: ['ここに車での入り方を書く。正門を使えるか、駐車場の入口はどこかを足してください。'],
    /** Google マップの埋め込み URL。空文字のあいだは枠だけ出す。 */
    mapEmbedUrl: '',
  },
  contact: {
    office: 'サンプル窓口',
    email: 'example@example.com',
    phone: '000-0000-0000',
  },
  /** sitemap と OGP の基準 URL。本番ドメインに書き換える。 */
  siteOrigin: 'https://example.com',
  social: {
    instagram: 'https://www.instagram.com/example/',
  },
  prVideo: {
    /** true にすると instagramPostUrl の投稿をトップへ埋め込む。 */
    enabled: false,
    instagramPostUrl: 'https://www.instagram.com/p/EXAMPLE/',
  },
  guest: {
    name: 'サンプルゲスト',
    eventSlug: 'sample-guest',
    portrait: '/guests/sample-guest.png',
    portraitWidth: 800,
    portraitHeight: 800,
    paragraphs: [
      'ここにゲストの紹介を書く。実在の人物の名前、写真、所属は入れない。',
      '出演の詳細は、下のリンク先の企画（sample-guest）に書く。',
    ],
  },
  pamphletPath: '/pamphlet-sample.pdf',
  images: {
    hero: '/conceptart.png',
    heroWidth: 1200,
    heroHeight: 300,
    og: '/og.png',
    ogWidth: 1200,
    ogHeight: 630,
  },
  ticker: ['こうよう祭', 'KoYoFes', 'サンプルテーマ'],
  stamp: {
    /** ふくびき券に必要なスタンプ数。ダミー企画は対象が 2 件なので 2。 */
    requiredStampCount: 2,
    storageKey: `koyosai_stamp_data_${YEAR}`,
  },
} as const;

export const FESTIVAL_SITE_NAME = `${FESTIVAL.name} ${FESTIVAL.year}`;

export const FESTIVAL_HERO_ALT = `${FESTIVAL_SITE_NAME} のサンプル画像。テーマの完成絵に差し替えてください。`;

/** `ページ名 | こうよう祭 2099` */
export function festivalPageTitle(page: string): string {
  return `${page} | ${FESTIVAL_SITE_NAME}`;
}

export function festivalInstantMs(value: FestivalDateTime): number {
  const pad = (part: number) => String(part).padStart(2, '0');
  return Date.parse(
    `${value.year}-${pad(value.month)}-${pad(value.day)}T${pad(value.hour)}:${pad(value.minute)}:${pad(value.second)}+09:00`,
  );
}

function weekdayLabel(value: FestivalDateTime): string {
  return new Intl.DateTimeFormat('ja-JP', { weekday: 'short', timeZone: 'Asia/Tokyo' }).format(
    new Date(festivalInstantMs(value)),
  );
}

function clockLabel(value: FestivalDateTime): string {
  const pad = (part: number) => String(part).padStart(2, '0');
  return `${pad(value.hour)}:${pad(value.minute)}`;
}

/** 例: 2099年10月31日(土)・11月1日(日) */
export function formatFestivalDateRange(): string {
  const { start, end } = FESTIVAL;
  return `${start.year}年${start.month}月${start.day}日(${weekdayLabel(start)})・${end.month}月${end.day}日(${weekdayLabel(end)})`;
}

/** 例: 2099/10/31・11/1 */
export function formatFestivalShortDates(): string {
  const { start, end } = FESTIVAL;
  return `${start.year}/${start.month}/${start.day}・${end.month}/${end.day}`;
}

/** 例: 09:00 - 17:00 */
export function formatFestivalHours(): string {
  return `${clockLabel(FESTIVAL.start)} - ${clockLabel(FESTIVAL.end)}`;
}

export function formatFestivalAddress(): string {
  return `${FESTIVAL.venue.postalCode} ${FESTIVAL.venue.address}`;
}
