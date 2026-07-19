import { guideSections, phrases } from "@/content/guide";

export const metadata = { title: "Survival guide — your Albania" };

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-semibold">The survival guide</h1>
      <p className="mt-2 text-ink-soft max-w-2xl">
        Everything practical, verified and current — read the culture section
        even if you skip the rest.
      </p>

      <nav className="mt-6 flex flex-wrap gap-2">
        {guideSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full bg-white border border-line px-4 py-1.5 text-sm hover:bg-sand transition-colors"
          >
            {s.emoji} {s.title.split(" (")[0]}
          </a>
        ))}
        <a
          href="#phrases"
          className="rounded-full bg-white border border-line px-4 py-1.5 text-sm hover:bg-sand transition-colors"
        >
          🗣️ Phrases
        </a>
      </nav>

      <div className="mt-10 space-y-12">
        {guideSections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-2xl font-semibold">
              {s.emoji} {s.title}
            </h2>
            <p className="mt-2 text-ink-soft leading-relaxed">{s.intro}</p>
            <div className="mt-5 space-y-4">
              {s.items.map((item) => (
                <div
                  key={item.heading}
                  className="rounded-2xl bg-white border border-line p-5"
                >
                  <h3 className="font-semibold">{item.heading}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section id="phrases" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold">🗣️ 20 phrases that open doors</h2>
          <p className="mt-2 text-ink-soft">
            Even three of these will make people light up. Emergency number:{" "}
            <strong>112</strong>.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line text-left text-xs uppercase tracking-wider text-ink-soft">
                  <th className="px-4 py-3">Albanian</th>
                  <th className="px-4 py-3">Say it like</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {phrases.map((p) => (
                  <tr key={p.sq} className="border-b border-line/60 last:border-0">
                    <td className="px-4 py-2.5 font-medium">{p.sq}</td>
                    <td className="px-4 py-2.5 text-ink-soft italic">{p.say}</td>
                    <td className="px-4 py-2.5">{p.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
