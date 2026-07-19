import type { Place } from "@/lib/types";

const tagStyles: Record<string, string> = {
  food: "bg-red/10 text-red-deep",
  coffee: "bg-amber-100 text-amber-800",
  nature: "bg-sea/10 text-sea-deep",
  history: "bg-stone-200 text-stone-700",
  city: "bg-indigo-100 text-indigo-800",
  beach: "bg-cyan-100 text-cyan-800",
};

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{place.name}</h3>
          <p className="text-xs uppercase tracking-wider text-ink-soft mt-0.5">
            {place.region} · {place.timeNeeded}
          </p>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm text-sea hover:text-sea-deep font-medium"
        >
          Map ↗
        </a>
      </div>
      <p className="text-sm leading-relaxed text-ink">{place.why}</p>
      <p className="text-sm leading-relaxed text-ink-soft border-l-2 border-sand pl-3">
        {place.practical}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {place.tags.map((t) => (
          <span
            key={t}
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagStyles[t] ?? "bg-sand"}`}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
