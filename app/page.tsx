import Link from "next/link";
import { itineraries } from "@/content/itineraries";

const features = [
  {
    href: "/itineraries",
    emoji: "🧭",
    title: "Follow a ready route",
    text: "Tell it how many days you have — get a day-by-day plan with buses, prices and food already sorted.",
  },
  {
    href: "/explore",
    emoji: "🗺️",
    title: "Open the map",
    text: "40 hand-picked spots on one map. Tap a pin, read why it's special, get directions.",
  },
  {
    href: "/chat",
    emoji: "💬",
    title: "Ask the guide",
    text: "“I'm in Berat and hungry” — the AI knows every place here and answers instantly.",
  },
  {
    href: "/guide",
    emoji: "🚐",
    title: "Learn the basics",
    text: "Money, minibuses, SIM cards, safety, and 20 Albanian phrases that open doors.",
  },
];

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
            Made for Miro, with love
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            Miro — this is your{" "}
            <span style={{ color: "#e8604f" }}>Albania</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80 leading-relaxed">
            No tourist traps. Just the real places — where Albanians eat, swim,
            hike and drink coffee — with a plan for your days and a guide you
            can ask anything, any time.
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
              💬 Ask the guide
            </Link>
          </div>
        </div>
      </section>

      {/* What you can do here */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold">What can you do here?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="rounded-2xl bg-white border border-line p-5 hover:shadow-lg hover:border-sea transition-all"
            >
              <div className="text-2xl">{f.emoji}</div>
              <h3 className="mt-2 font-semibold text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                {f.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trip length picker */}
      <section id="days" className="bg-sand/60 border-y border-line">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-semibold">How many days do you have?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {itineraries.map((it) => (
              <Link
                key={it.slug}
                href={`/itineraries/${it.slug}`}
                className="group rounded-2xl border border-line bg-white p-6 hover:border-sea hover:shadow-lg transition-all"
              >
                <div className="display text-3xl font-semibold text-sea">
                  {it.days}
                </div>
                <div className="mt-1 font-medium">{it.title}</div>
                <div className="mt-3 text-sm font-medium text-red">
                  See the route →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="display text-2xl leading-relaxed text-ink">
          &ldquo;The house belongs to God and the guest.&rdquo;
        </p>
        <p className="mt-3 text-ink-soft">
          — the Albanian code of <em>besa</em>. Miro, you&apos;re about to be
          treated better than you&apos;ve ever been treated as a traveler. Say
          faleminderit, accept the raki, and enjoy every minute. ❤️
        </p>
      </section>
    </div>
  );
}
