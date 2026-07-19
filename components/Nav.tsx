"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/explore", label: "Map" },
  { href: "/places", label: "Places" },
  { href: "/guide", label: "Survival guide" },
  { href: "/chat", label: "Ask the guide" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="display text-xl font-semibold tracking-tight">
          <span className="text-red">Miro&apos;s Albania</span>
          <span className="text-ink-soft text-sm ml-2 font-normal hidden sm:inline">
            shqipëria jote
          </span>
        </Link>

        <nav className="hidden md:flex gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                pathname === l.href
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:bg-sand"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
        >
          <div className="w-5 space-y-1">
            <span className="block h-0.5 bg-ink" />
            <span className="block h-0.5 bg-ink" />
            <span className="block h-0.5 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-paper px-4 py-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base ${
                pathname === l.href ? "bg-sand font-medium" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
