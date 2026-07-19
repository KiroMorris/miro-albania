import type { Itinerary } from "@/lib/types";

export const itineraries: Itinerary[] = [
  {
    slug: "2-3-days",
    days: "2–3 days",
    title: "Tirana + one perfect escape",
    tagline:
      "Not enough time for the whole country — so do the capital properly, then pick ONE day of mountains or stone towns.",
    stops: [
      {
        title: "Day 1 — Tirana like a local",
        placeIds: ["byrek-luani", "pazari-i-ri", "bunkart2-leaves", "komiteti", "grand-park", "oda"],
        narrative:
          "Start with hot byrek and dhallë at a byrektore (before 10am!). Wander Pazari i Ri while the market is alive, then spend the early afternoon at Bunk'Art 2 and the House of Leaves — an hour each, and you'll understand this country for the rest of the trip. Coffee among communist relics at Komiteti. At 18:00, drop everything and join the xhiro around the Grand Park lake. Dinner of tavë kosi and fërgesë at Oda.",
        logistics:
          "Everything except the park is within 15 min walk of Skanderbeg Square. Use Bolt, not street taxis. Carry cash lek.",
      },
      {
        title: "Day 2 — Bunker mountain + golden-hour pyramid",
        placeIds: ["bunkart1", "dajti", "pyramid", "blloku", "mullixhiu"],
        narrative:
          "Morning at Bunk'Art 1 — Hoxha's actual five-storey atomic bunker — then float up Mt Dajti on the cable car next door for a slow mountain lunch over the whole city. Back down, climb the Pyramid steps at golden hour with half of Tirana's teenagers. Evening in Blloku — or book Mullixhiu for the €30 tasting menu that reinvents Albanian peasant food.",
        logistics:
          "Bunk'Art 1 shuts ~16:30 and Dajti is CLOSED TUESDAYS — do this day accordingly. Bolt to Bunk'Art ~500–700 lek. Cable car 1,500 lek cash.",
      },
      {
        title: "Day 3 — Pick your escape",
        placeIds: ["berat", "berat-castle", "lili", "bovilla"],
        narrative:
          "Option A: an early furgon to Berat (2.5h) — castle quarter in the morning light, Gorica bridge at golden hour, backyard dinner at Lili's, and either bus back or (better) stay the night. Option B if you want mountains: a half-day trip to Bovilla Lake's cliff-edge viewpoint — the best mountains-per-hour ratio in Albania.",
        logistics:
          "Berat furgons leave Tirana's North & South terminal from early morning (~400–500 lek). Bovilla needs a tour or taxi deal (€25–40) — no public transport.",
      },
    ],
  },
  {
    slug: "4-5-days",
    days: "4–5 days",
    title: "Capital, stone towns & thermal springs",
    tagline:
      "Tirana's history, Berat's living castle, Gjirokastër at dawn, and a soak under a 300-year-old Ottoman bridge.",
    stops: [
      {
        title: "Day 1 — Tirana crash course",
        placeIds: ["byrek-luani", "pazari-i-ri", "bunkart2-leaves", "grand-park", "oda"],
        narrative:
          "Byrek breakfast, the Pazari i Ri market, then Bunk'Art 2 + House of Leaves to load the historical context. Xhiro at the lake at 18:00, dinner at Oda. Early night — furgon in the morning.",
        logistics: "All walkable. Withdraw a good stash of lek today (BKT/Credins ATM, decline conversion).",
      },
      {
        title: "Day 2 — Berat",
        placeIds: ["berat", "berat-castle", "lili"],
        narrative:
          "Morning furgon to Berat. Climb to the castle quarter where families still live inside the walls, see Onufri's impossible reds, then cross the Gorica footbridge at golden hour for the thousand-windows view. Dinner in Lili's backyard (have your guesthouse book it).",
        logistics: "Tirana→Berat furgon ~400–500 lek, 2.5h, mornings. Sleep in Berat.",
      },
      {
        title: "Day 3 — Gjirokastër",
        placeIds: ["gjirokaster-bazaar", "gjirokaster-castle", "skenduli-zekate", "qifqi"],
        narrative:
          "Travel morning (via Fier or the 8:30 direct bus when it runs), arriving for the afternoon. Castle + Cold War tunnel before closing, then the bazaar as the day-trippers leave and locals reclaim the café chairs. Qifqi for dinner at Taverna Kuka.",
        logistics:
          "Berat→Gjirokastër: one direct 8:30 bus (~3h) or change in Fier. Sleep in the old town — that's the whole point.",
      },
      {
        title: "Day 4 — Dawn bazaar, then Përmet",
        placeIds: ["gjirokaster-bazaar", "permet", "benje"],
        narrative:
          "Be in the bazaar 7–9am when it's yours alone. Late-morning furgon over to Përmet, the slow-food capital. Afternoon taxi to the Bënjë thermal pools — soak beside the Ottoman bridge as the light goes gold. Gliko and mountain tea in town after.",
        logistics:
          "Gjirokastër→Përmet furgons ~2–3/day, mornings (~300–500 lek) — have the guesthouse call the driver. Bënjë taxi ~1,000–1,500 lek each way, arrange the return.",
      },
      {
        title: "Day 5 — Vjosa river, then home",
        placeIds: ["vjosa", "permet"],
        narrative:
          "If it's April–October: morning rafting on Europe's first Wild River National Park (solo joiners welcome — you'll be slotted into a group). Then the long, beautiful ride back to Tirana. Or skip the raft and take the slow morning in Përmet you'll wish you had anyway.",
        logistics:
          "Book rafting a day ahead (€35–55 all-in). Përmet→Tirana buses run mornings; confirm the day before.",
      },
    ],
  },
  {
    slug: "6-7-days",
    days: "6–7 days",
    title: "The full loop — Alps, capital & stone towns",
    tagline:
      "The trip people come home raving about: fjord ferry, the best day-hike in the Balkans, Tirana's bunkers, and Gjirokastër at dawn.",
    stops: [
      {
        title: "Day 1 — Tirana, fast but right",
        placeIds: ["byrek-luani", "bunkart2-leaves", "komiteti", "grand-park", "oda"],
        narrative:
          "Byrek breakfast, Bunk'Art 2 + House of Leaves for the context you'll carry all week, coffee at Komiteti, the lake xhiro at 18:00, dinner at Oda. Afternoon bus to Shkodër if you want a head start — otherwise sleep in Tirana.",
        logistics:
          "Withdraw plenty of lek today — there are NO ATMs in the mountains. Tirana→Shkodër buses ~hourly, 400–500 lek, 2h.",
      },
      {
        title: "Day 2 — Shkodër by bicycle",
        placeIds: ["shkoder", "rozafa"],
        narrative:
          "Rent a bike like everyone else in town, roll the flat streets and the lakeside, then climb Rozafa Castle late afternoon for the best sunset view in the north. Coffee and dinner on the pedestrian street. Book tomorrow's 6:30 minibus + ferry tonight; leave your big bag at the guesthouse.",
        logistics:
          "Ferry ticket: komanilakeferry.com — book ahead, it sells out. Bag storage €2–6/day. Early night.",
      },
      {
        title: "Day 3 — The fjord ferry to Valbona",
        placeIds: ["komani-ferry"],
        narrative:
          "6:30am minibus to Koman, then 2.5 hours gliding through a flooded canyon that looks like Norway and costs €9. A waiting minibus takes you up to Valbona by ~2:30pm. Short valley stroll, then a guesthouse dinner that will not stop coming.",
        logistics:
          "Minibus ~800 lek + ferry €9–10 + minibus ~800 lek. Cash for everything. Guesthouse half-board ~€30–40 (Lazer Çardaku and Bujtina Arturi are well-loved).",
      },
      {
        title: "Day 4 — Over the Valbona Pass to Theth",
        placeIds: ["valbona-theth-hike", "theth"],
        narrative:
          "The big one: 6–8 hours over the 1,795 m pass, espresso at the shack near the top, and the descent into Theth's green bowl. Evening: stone church, sheep bells, mountains going pink, another endless dinner.",
        logistics:
          "Take the ~€10 taxi to the true trailhead (skips 3 km of riverbed). Start by 8am, 2L+ water, offline maps downloaded. Bags can go by road for ~€10–15. Pass open mid-June–Oct.",
      },
      {
        title: "Day 5 — Theth morning, back to civilization",
        placeIds: ["grunas", "theth"],
        narrative:
          "Morning walk to Grunas waterfall and the lock-in tower — a 20-minute window into the blood-feud code that ruled these valleys into living memory. Then the 11:00 or 17:00 bus down the (now paved!) road to Shkodër, and on to Tirana.",
        logistics: "Theth→Shkodër bus €10–12, ~2.5h. You can be in Tirana by evening.",
      },
      {
        title: "Day 6 — South to Gjirokastër",
        placeIds: ["gjirokaster-bazaar", "gjirokaster-castle", "skenduli-zekate", "qifqi"],
        narrative:
          "Morning bus south (5h — nap, you've earned it). Afternoon: castle and Cold War tunnel, then the Ottoman houses. Evening in the bazaar as it empties back to the locals. Qifqi for dinner.",
        logistics:
          "Tirana→Gjirokastër ~1,000–1,200 lek, book on gjirafa.travel. Sleep in the old town.",
      },
      {
        title: "Day 7 — Dawn bazaar, then choose your ending",
        placeIds: ["gjirokaster-bazaar", "benje", "butrint", "sarande"],
        narrative:
          "The bazaar at 7am, alone with the shopkeepers and the coffee smell. Then either: (a) a Përmet detour for the Bënjë thermal bridge soak, (b) down to Butrint's lagoon ruins at opening time via Sarandë, or (c) the slow ride back to Tirana with a jar of gliko in your bag.",
        logistics:
          "Flying out of Tirana? The Gjirokastër→Tirana ride is ~5h — leave margin. Sarandë is also 30 km from Corfu by ferry if her trip continues to Greece.",
      },
    ],
  },
];

export function itineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}
