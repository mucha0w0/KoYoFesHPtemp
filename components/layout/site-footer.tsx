import { FESTIVAL, FESTIVAL_SITE_NAME, formatFestivalShortDates } from '@/lib/config/festival';

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:gap-8 md:py-12">
        <div className="space-y-2">
          <p className="font-display text-xl font-bold leading-tight">
            {FESTIVAL.year}年度 {FESTIVAL.name}
          </p>
          <p className="text-sm leading-normal text-white/80 tabular-nums">{formatFestivalShortDates()}</p>
        </div>
        <p className="text-xs leading-normal text-white/70 sm:text-right sm:text-sm">&copy; {FESTIVAL_SITE_NAME}</p>
      </div>
    </footer>
  );
}
