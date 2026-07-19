import { notFound } from "next/navigation";
import Link from "next/link";
import { itineraries, itineraryBySlug } from "@/content/itineraries";
import { placeById } from "@/content/places";
import PlaceCard from "@/components/PlaceCard";

export function generateStaticParams() {
  return itineraries.map((i) => ({ slug: i.slug }));
}

export default async function ItineraryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itinerary = itineraryBySlug(slug);
  if (!itinerary) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/itineraries" className="text-sm text-sea hover:text-sea-deep">
        ← All routes
      </Link>
      <p className="mt-4 display text-sea text-lg">{itinerary.days}</p>
      <h1 className="text-4xl font-semibold mt-1">{itinerary.title}</h1>
      <p className="mt-3 text-lg text-ink-soft">{itinerary.tagline}</p>

      <div className="mt-10 space-y-12">
        {itinerary.stops.map((stop, i) => {
          const stopPlaces = stop.placeIds
            .map(placeById)
            .filter((p): p is NonNullable<typeof p> => Boolean(p));
          return (
            <section key={i} className="relative pl-6 border-l-2 border-sand">
              <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-red text-paper text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h2 className="text-2xl font-semibold">{stop.title}</h2>
              <p className="mt-3 leading-relaxed">{stop.narrative}</p>
              <p className="mt-3 text-sm text-ink-soft bg-sand/50 rounded-xl px-4 py-3">
                🚐 <span className="font-medium">Logistics:</span>{" "}
                {stop.logistics}
              </p>
              {stopPlaces.length > 0 && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {stopPlaces.map((p) => (
                    <PlaceCard key={p.id} place={p} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <div className="mt-14 rounded-2xl bg-ink text-paper p-6 text-center">
        <p className="text-lg">
          Plans change on the road — that&apos;s the fun part.
        </p>
        <Link
          href="/chat"
          className="mt-3 inline-block rounded-full bg-red px-6 py-3 font-medium hover:bg-red-deep transition-colors"
        >
          💬 Ask the guide to adapt this route
        </Link>
      </div>
    </div>
  );
}
