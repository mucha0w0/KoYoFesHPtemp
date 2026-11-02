import { FESTIVAL, formatFestivalDateRange, formatFestivalHours } from '@/lib/config/festival';

export function EventDetails() {
  return (
    <div className="ink-shell bg-card p-6">
      <h3 className="font-medium text-lg mb-4">
        {FESTIVAL.name}
        {FESTIVAL.year}
      </h3>
      <dl className="grid gap-4 text-sm">
        <div>
          <dt className="text-muted-foreground">開催日</dt>
          <dd className="font-medium text-lg">{formatFestivalDateRange()}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">開催時間</dt>
          <dd className="font-medium text-lg">{formatFestivalHours()}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">会場</dt>
          <dd className="font-medium">{FESTIVAL.venue.name}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">入場料</dt>
          <dd className="font-medium">{FESTIVAL.admission}</dd>
        </div>
      </dl>
    </div>
  );
}
