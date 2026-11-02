import { Train, Bus, Car, MapPin } from 'lucide-react';

import { Illustration } from '@/components/illustration/illustration';
import { PageLayout } from '@/components/layout/page-layout';

import { FESTIVAL, formatFestivalAddress } from '@/lib/config/festival';

export default function AccessPage() {
  const { venue } = FESTIVAL;

  return (
    <PageLayout
      illustration={<Illustration alt="" src="pin.png" />}
      related={{
        pages: ['/guide/map', '/guide/faq', '/official/pamphlet'],
        background: 'paper-2',
      }}
      subtitle="会場までのアクセス方法をご案内します"
      title="アクセス"
    >
      <div className="space-y-8">
        <div className="ink-shell bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-md p-2 bg-paper-2">
              <MapPin className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="font-medium text-lg">会場</h2>
          </div>
          <p className="text-lg font-medium">{venue.name}</p>
          <p className="text-muted-foreground">{formatFestivalAddress()}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="ink-shell bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-md p-2 bg-paper-2">
                <Train className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-medium">電車でお越しの方</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {venue.train.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="ink-shell bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-md p-2 bg-paper-2">
                <Bus className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-medium">バスでお越しの方</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {venue.bus.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="ink-shell bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-md p-2 bg-paper-2">
                <Car className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-medium">お車でお越しの方</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {venue.car.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-md bg-paper-2 p-6">
          <h3 className="font-medium mb-4">地図</h3>
          {venue.mapEmbedUrl ? (
            <div className="aspect-video">
              <iframe
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={venue.mapEmbedUrl}
                style={{ border: 0 }}
                title={`${venue.name}へのアクセス`}
              />
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              地図の埋め込みはまだありません。lib/config/festival.ts の venue.mapEmbedUrl に Google
              マップの埋め込み URL を入れてください。
            </p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
