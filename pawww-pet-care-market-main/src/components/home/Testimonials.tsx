import { Star } from "lucide-react";

const QUOTES = [
  {
    quote:
      "Max bolted through the gate during Diwali. Twenty minutes later a shopkeeper tapped his tag and called me. I still get emotional thinking about it.",
    name: "Rahul Menon",
    meta: "Dog dad, Bengaluru · Max, Golden retriever",
  },
  {
    quote:
      "I love that I decide what strangers see. Snowy’s profile shows her medical note and my number — nothing else.",
    name: "Meera Joseph",
    meta: "Cat parent, Kochi · Snowy, Persian",
  },
  {
    quote:
      "Our indie, Laddoo, is a master escape artist. The Charcoal collar is tough, looks great and the reflective stitching is perfect for night walks.",
    name: "Priya & Arjun",
    meta: "Pet parents, Pune · Laddoo, Indie",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/60 py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Pet parents</span>
            <h2 className="display-lg mt-3 max-w-xl">Stories that end at the front door.</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <figure
              key={q.name}
              className={
                i === 1
                  ? "card-hover flex flex-col rounded-3xl bg-primary p-8 text-primary-foreground"
                  : "card-hover flex flex-col rounded-3xl border border-border bg-card p-8"
              }
            >
              <div className="flex gap-1 text-coral">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className={i === 1 ? "mt-6 flex-1 font-serif text-xl leading-snug text-primary-foreground" : "mt-6 flex-1 font-serif text-xl leading-snug text-ink"}>
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-display font-bold">{q.name}</p>
                <p className={i === 1 ? "text-sm text-on-primary-muted" : "text-sm text-muted-foreground"}>{q.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
