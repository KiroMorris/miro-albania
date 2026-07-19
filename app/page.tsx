import Link from "next/link";
import { itineraries } from "@/content/itineraries";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, #2a6f77 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, #c0392b 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-paper/60 mb-4">
            A personal guide, made for you
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            This is not a tourist guide to{" "}
            <span style={{ color: "#e8604f" }}>Albania</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80 leading-relaxed">
            No top-10 lists, no bus-tour traps, no Ksamil sunbeds. Just the
            places where Albanians actually eat, walk, swim and drink coffee —
            researched, current, and honest about what&apos;s worth your time.
            Made with love by a friend who wants you to fall for this country
            the way it deserves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#days"
              className="rounded-full bg-red px-6 py-3 font-medium hover:bg-red-deep transition-colors"
            >
              Plan my days ↓
            </a>
            <Link
              href="/chat"
              className="rounded-full border border-paper/30 px-6 py-3 font-medium hover:bg-paper/10 transition-colors"
            >
              💬 Ask the guide anything
            </Link>
          </div>
        </div>
      </section>

      {/* Trip length picker */}
      <section id="days" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold">How many days do you have?</h2>
        <p className="mt-2 text-ink-soft max-w-2xl">
          Pick your window and get a real, day-by-day route — with the furgon
          logistics, the food stops, and the timing tricks already worked out.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {itineraries.map((it) => (
            <Link
              key={it.slug}
              href={`/itineraries/${it.slug}`}
              className="group rounded-2xl border border-line bg-white p-6 hover:border-sea hover:shadow-lg hover:shadow-sea/10 transition-all"
            >
              <div className="display text-3xl font-semibold text-sea group-hover:text-sea-deep">
                {it.days}
              </div>
              <div className="mt-2 font-medium text-lg">{it.title}</div>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {it.tagline}
              </p>
              <div className="mt-4 text-sm font-medium text-red">
                See the route →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-sand/60 border-y border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-6 sm:grid-cols-3">
          <Link
            href="/explore"
            className="rounded-2xl bg-white border border-line p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl">🗺️</div>
            <h3 className="mt-2 text-xl font-semibold">The map</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Every curated spot on one map — filter by food, nature, history
              or city life.
            </p>
          </Link>
          <Link
            href="/guide"
            className="rounded-2xl bg-white border border-line p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl">🚐</div>
            <h3 className="mt-2 text-xl font-semibold">Survival guide</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Furgons, lek, SIM cards, the famous head-nod reversal, 20
              Albanian phrases, and the honest safety rundown.
            </p>
          </Link>
          <Link
            href="/chat"
            className="rounded-2xl bg-white border border-line p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl">💬</div>
            <h3 className="mt-2 text-xl font-semibold">Your AI guide</h3>
            <p className="mt-1 text-sm text-ink-soft">
              &ldquo;I&apos;m in Gjirokastër and hungry&rdquo; — ask anything,
              any time. It knows every place in this guide and the logistics
              between them.
            </p>
          </Link>
        </div>
      </section>

      {/* Personal note */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="display text-2xl leading-relaxed text-ink">
          &ldquo;The house belongs to God and the guest.&rdquo;
        </p>
        <p className="mt-3 text-ink-soft">
          — the Albanian code of <em>besa</em>. You&apos;re about to be treated
          better than you&apos;ve ever been treated as a traveler. Say
          faleminderit, accept the raki, and enjoy every minute. ❤️
        </p>
      </section>
    </div>
  );
}
