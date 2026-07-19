"use client";

import dynamic from "next/dynamic";

const AlbaniaMap = dynamic(() => import("@/components/AlbaniaMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center text-ink-soft">
      Loading the map…
    </div>
  ),
});

export default function ExplorePage() {
  return (
    <div className="h-[calc(100dvh-3.5rem)]">
      <AlbaniaMap />
    </div>
  );
}
