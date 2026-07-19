import Link from "next/link";
import { itineraries } from "@/content/itineraries";

export const metadata = { title: "Itineraries — your Albania" };

export default function ItinerariesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Pick your route</h1>
      <p className="mt-2 text-ink-soft max-w-2xl">
        Three honest routes, built around what a week (or less) actually
        allows — furgon timings and all.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {itineraries.map((it) => (
          <Link
            key={it.slug}
            href={`/itineraries/${it.slug}`}
            className="group rounded-2xl border border-line bg-white p-6 hover:border-sea hover:shadow-lg transition-all"
          >
            <div className="display text-3xl font-semibold text-sea">
              {it.days}
            </div>
            <div className="mt-2 font-medium text-lg">{it.title}</div>
            <p className="mt-2 text-sm text-ink-soft">{it.tagline}</p>
            <div className="mt-4 text-sm font-medium text-red">
              See the route →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
