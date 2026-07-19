"use client";

import { useState } from "react";
import { places } from "@/content/places";
import PlaceCard from "@/components/PlaceCard";
import type { Tag } from "@/lib/types";

const regions = ["All", "Tirana", "The North", "The South", "The Coast"];
const tags: (Tag | "all")[] = ["all", "food", "coffee", "nature", "history", "city", "beach"];

export default function PlacesPage() {
  const [region, setRegion] = useState("All");
  const [tag, setTag] = useState<Tag | "all">("all");

  const filtered = places.filter(
    (p) =>
      (region === "All" || p.region === region) &&
      (tag === "all" || p.tags.includes(tag)),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Every place, with the truth</h1>
      <p className="mt-2 text-ink-soft max-w-2xl">
        {places.length} spots that made the cut — and why. Each one researched
        and current.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              region === r ? "bg-ink text-paper" : "bg-white border border-line hover:bg-sand"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
              tag === t ? "bg-sea text-paper" : "bg-white border border-line hover:bg-sand"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 text-ink-soft">Nothing matches that combo — try widening the filters.</p>
      )}
    </div>
  );
}
