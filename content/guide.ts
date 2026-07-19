// Survival guide content — researched & verified July 2026.

export interface GuideSection {
  id: string;
  title: string;
  emoji: string;
  intro: string;
  items: { heading: string; body: string }[];
}

export const guideSections: GuideSection[] = [
  {
    id: "furgons",
    title: "Furgons & buses (how you actually get around)",
    emoji: "🚐",
    intro:
      "Albania runs on furgons — white minibuses with a cardboard destination sign in the windshield. There are no real timetables. They leave when full. This sounds chaotic; it works surprisingly well.",
    items: [
      {
        heading: "The golden rules",
        body: "Ask your hotel/guesthouse the night before — 'when does the furgon to X leave' is normal local knowledge. Be at the terminal 7–9am for long routes; last departures are often mid-afternoon. Pay the driver in cash lek.",
      },
      {
        heading: "Tirana's bus terminal",
        body: "Everything intercity leaves from the North & South Bus Terminal on the city outskirts (near Kamëz / Casa Italia) — NOT the center. Get there by Bolt (~€5–8) or the 'Kamëz/Instituti' city bus from near Skanderbeg Square (~40 lek). Street taxis will quote €12–15 — that's the tourist price, don't take it.",
      },
      {
        heading: "Typical fares (cash lek)",
        body: "Tirana–Shkodër ~400 lek · Tirana–Berat ~400–500 lek · Tirana–Gjirokastër ~1,000–1,200 lek · Tirana–Sarandë ~1,200–1,500 lek (5–6 hrs). Short hops 100–300 lek.",
      },
      {
        heading: "Book long hauls online",
        body: "travel.gjirafa.com (Gjirafa Travel) is the real booking platform — card/Apple Pay, QR tickets, covers major coach routes. Furgons stay off-platform and cash-only. Rule: Gjirafa for long hauls, show up with lek for everything else.",
      },
      {
        heading: "Airport → city",
        body: "LUNA airport bus: 400 lek (€4), hourly on the hour, 24/7, ~30 min, drops you behind the National Opera near Skanderbeg Square. No booking needed. Taxi is €20–25; Bolt usually cheaper.",
      },
    ],
  },
  {
    id: "money",
    title: "Money",
    emoji: "💶",
    intro:
      "The currency is the lek (1 EUR ≈ 98–100 lek). Cash is king — cards work in Tirana hotels and nicer restaurants, assume cash everywhere else.",
    items: [
      {
        heading: "Always pay in lek",
        body: "Tourist spots quote euros, but the euro price is rounded against you. And watch the 'old lek' habit: locals sometimes quote 10x prices — if a coffee 'costs 1,000', they mean 100 lek. It's honest confusion, not a scam.",
      },
      {
        heading: "ATM fee trap",
        body: "No Albanian ATM is free for foreign cards (~500–800 lek flat fee per withdrawal). Avoid Euronet completely. Use a major bank ATM (BKT, Credins, Union, Intesa), withdraw the maximum in one go (30,000–50,000 lek), and ALWAYS decline the conversion offer — 'withdraw in lek', never your home currency. Bringing euro cash and using an exchange bureau (këmbim valutor) in Tirana is a legit strategy.",
      },
      {
        heading: "Daily budget",
        body: "€30–45/day gets you guesthouses, furgons, byrek and a taverna dinner. €60–100 is comfortable. Byrek 70–100 lek · espresso 60–100 lek · taverna meal €5–8 · beer €1–3.",
      },
      {
        heading: "Tipping",
        body: "Not obligatory. Round up, or 5–10% in restaurants if you liked it. No tipping in cafés or taxis.",
      },
    ],
  },
  {
    id: "sim",
    title: "SIM & staying connected",
    emoji: "📶",
    intro:
      "EU roaming plans generally do NOT cover Albania. Get a local SIM or eSIM on arrival.",
    items: [
      {
        heading: "eSIM (easiest)",
        body: "Airalo (~$11/3GB, runs on One Albania) or Saily — set up before you land. For a week of maps + messaging, 3–5 GB is plenty. Vodafone Albania also sells an official tourist eSIM at home.vodafone.al/esim.",
      },
      {
        heading: "Physical SIM (best value)",
        body: "Vodafone and One kiosks are in airport arrivals — tourist packs ~€26 for 40–100 GB / 21 days. Bring your passport. City shops are slightly cheaper than the airport.",
      },
      {
        heading: "Mountain coverage",
        body: "Vodafone has the best rural coverage, but expect dead zones on Theth/Valbona trails regardless of carrier. Download offline maps — Organic Maps works great for Albanian trails.",
      },
    ],
  },
  {
    id: "culture",
    title: "Culture (read this one!)",
    emoji: "🤝",
    intro:
      "Albanians are among the most hospitable people in Europe — it's a point of honor called besa: 'the house belongs to God and the guest.'",
    items: [
      {
        heading: "The famous nod/shake reversal",
        body: "Traditionally: YES = shaking the head side to side, NO = a sharp upward nod, often with a little 'tsk'. It's real but fading — younger people use the international way, or a confusing hybrid. Rule: never trust the head. Listen for 'po' (yes) and 'jo' (no, sounds like 'yo') and confirm with words.",
      },
      {
        heading: "Coffee is a ritual, not a drink",
        body: "An espresso costs ~100 lek and buys the table for an hour or more — nobody rushes you, nobody brings the bill unasked. Albania has more cafés per capita than almost anywhere on earth. Being invited 'for a coffee' is a relationship gesture; the inviter pays. Sitting alone in a café as a woman is completely normal.",
      },
      {
        heading: "Xhiro — the evening walk",
        body: "Around 6–8pm whole towns dress up and stroll the main boulevard; some towns close streets to cars for it. Join it. It's the best free cultural activity in the country and totally solo-friendly.",
      },
      {
        heading: "Hospitality survival",
        body: "In guesthouses you WILL be fed to bursting and offered raki, fruit and coffee constantly. Refusing everything can offend — accept at least symbolically. Don't offer money for hospitality; a small gift or buying something from the family works better.",
      },
      {
        heading: "Dress & religion",
        body: "Cities and coast are fully European — wear what you want. Cover shoulders/knees in mosques (headscarf provided) and monasteries. Albania is famously secular: alcohol everywhere, relaxed everything, religious tolerance is a national pride point.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety (honest version)",
    emoji: "🛟",
    intro:
      "Albania is genuinely one of the safer European countries for solo women. Harassment levels are lower than Italy or Spain by most solo travelers' accounts. Locals actively look out for you.",
    items: [
      {
        heading: "Taxis",
        body: "No Uber. Bolt works in Tirana — tracked rides, upfront price, your best option. Elsewhere: Speed Taxi (yellow), Merr Taxi, or WhatsApp taxis your guesthouse recommends. Avoid unmarked cars at terminals. The main 'risk' in Albania is being overcharged, not endangered — agree the price before getting in any non-metered taxi.",
      },
      {
        heading: "At night",
        body: "Tirana center (Skanderbeg–Blloku) is busy and lit until past midnight. Small towns feel even safer, just deserted early. Standard big-city rules for empty peripheral streets.",
      },
      {
        heading: "Scams to know",
        body: "Very few. The list: taxi overcharging (the big one), the ATM conversion trick (always choose lek), occasional euro dual-pricing. The actual biggest danger in Albania is traffic — be careful as a pedestrian.",
      },
      {
        heading: "Emergency",
        body: "112 is the general emergency number (also 129 police, 127 ambulance). Solo hiking Theth–Valbona is popular and well-trafficked in season — just tell your guesthouse your plan.",
      },
    ],
  },
  {
    id: "food",
    title: "Food glossary",
    emoji: "🥟",
    intro:
      "Order by dish, not by restaurant. These are the words worth knowing.",
    items: [
      {
        heading: "Byrek",
        body: "THE street food — flaky filo pie, 70–100 lek a slice. Fillings: gjizë (curd cheese), spinach (me spinaq), tomato-onion, or meat. The best byrek places are holes in the wall with a queue of locals at 8am.",
      },
      {
        heading: "Tavë kosi",
        body: "The national dish: lamb baked in a tangy yogurt-egg custard. From Elbasan. Order it at least once, somewhere that looks like grandma runs the kitchen.",
      },
      {
        heading: "Fërgesë",
        body: "Tirana's specialty — peppers, tomatoes and gjizë cheese baked into a rich molten dip, eaten with bread. Usually vegetarian (confirm — some versions add liver).",
      },
      {
        heading: "Qifqi",
        body: "Gjirokastër's signature: fried rice balls with egg and mint. You basically can't get them anywhere else — eat them there.",
      },
      {
        heading: "Gliko",
        body: "Southern welcome ritual: whole figs or walnuts preserved in syrup, served with a spoon and a glass of water. Accept it — it's hospitality, not dessert.",
      },
      {
        heading: "Raki",
        body: "Homemade grape brandy, 40%+, offered at any hour including breakfast. Sip, don't shot. Declining is fine ('nuk pi' — I don't drink), but a token sip earns instant goodwill. Gëzuar! (cheers!)",
      },
      {
        heading: "Vegetarian?",
        body: "You'll eat well: byrek me spinaq, fërgesë, qifqi, stuffed peppers, japrak (vine leaves), tarator (cold yogurt-cucumber soup), fasule (bean stew — ask about meat stock), amazing produce and dairy. Say 'nuk ha mish' — I don't eat meat.",
      },
    ],
  },
];

export const phrases: { sq: string; say: string; en: string }[] = [
  { sq: "Përshëndetje", say: "pur-shun-DET-yeh", en: "Hello (formal)" },
  { sq: "Tung", say: "toong", en: "Hi" },
  { sq: "Mirëmëngjes", say: "meer-uh-mun-DYES", en: "Good morning" },
  { sq: "Mirëmbrëma", say: "meer-um-BRUH-ma", en: "Good evening" },
  { sq: "Mirupafshim", say: "meer-oo-PAF-sheem", en: "Goodbye" },
  { sq: "Faleminderit", say: "fah-leh-min-DEH-reet", en: "Thank you" },
  { sq: "Ju lutem", say: "yoo LOO-tem", en: "Please / you're welcome" },
  { sq: "Po / Jo", say: "poh / yoh", en: "Yes / No" },
  { sq: "Më falni", say: "muh FAHL-nee", en: "Excuse me / sorry" },
  { sq: "Sa kushton?", say: "sah koosh-TOHN", en: "How much is it?" },
  { sq: "Ku është...?", say: "koo USHT-uh", en: "Where is...?" },
  { sq: "Ku është tualeti?", say: "koo USHT-uh too-ah-LEH-tee", en: "Where's the toilet?" },
  { sq: "Një kafe, ju lutem", say: "nyuh kah-FEH yoo LOO-tem", en: "A coffee, please" },
  { sq: "Llogarinë, ju lutem", say: "log-ah-REE-nuh yoo LOO-tem", en: "The bill, please" },
  { sq: "Shumë e shijshme!", say: "SHOO-muh eh SHEESH-meh", en: "Very delicious!" },
  { sq: "Gëzuar!", say: "guh-ZOO-ar", en: "Cheers!" },
  { sq: "Nuk ha mish", say: "nook hah meesh", en: "I don't eat meat" },
  { sq: "Flisni anglisht?", say: "FLEES-nee ahn-GLEESHT", en: "Do you speak English?" },
  { sq: "Nuk kuptoj", say: "nook koop-TOY", en: "I don't understand" },
  { sq: "Ndihmë!", say: "NDEEH-muh", en: "Help!" },
];
