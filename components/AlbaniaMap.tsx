"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "@/content/places";
import type { Tag } from "@/lib/types";

const tagColors: Record<string, string> = {
  food: "#c0392b",
  coffee: "#b45309",
  nature: "#2a6f77",
  history: "#57534e",
  city: "#4f46e5",
  beach: "#0891b2",
};

function pinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:16px;height:16px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 16],
    popupAnchor: [0, -16],
  });
}

const filterTags: (Tag | "all")[] = ["all", "food", "coffee", "nature", "history", "city", "beach"];

export default function AlbaniaMap() {
  const [tag, setTag] = useState<Tag | "all">("all");

  const filtered = places.filter((p) => tag === "all" || p.tags.includes(tag));

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[500] flex flex-wrap justify-center gap-1.5 max-w-[95%]">
        {filterTags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full px-3 py-1 text-xs font-medium capitalize shadow transition-colors ${
              tag === t ? "bg-ink text-paper" : "bg-white/95 hover:bg-sand"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <MapContainer
        center={[40.9, 19.9]}
        zoom={8}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filtered.map((p) => (
          <Marker
            key={p.id}
            position={[p.lat, p.lng]}
            icon={pinIcon(tagColors[p.tags[0]] ?? "#c0392b")}
          >
            <Popup maxWidth={280}>
              <div className="space-y-1.5">
                <div className="font-semibold text-base leading-snug">{p.name}</div>
                <div className="text-xs uppercase tracking-wide text-neutral-500">
                  {p.region} · {p.timeNeeded}
                </div>
                <p className="text-sm leading-relaxed">{p.why}</p>
                <p className="text-xs text-neutral-600">{p.practical}</p>
                <a
                  className="text-xs font-medium text-[#2a6f77]"
                  href={`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
