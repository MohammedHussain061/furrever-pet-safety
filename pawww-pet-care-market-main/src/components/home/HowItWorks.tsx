import { Link } from "@tanstack/react-router";
import { ArrowRight, Nfc } from "lucide-react";
import tapTag from "@/assets/tap-tag.jpg";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    title: "Tap the tag",
    body: "Whoever finds your pet holds their phone near the Furrever tag. No app, no sign-up, no fuss.",
  },
  {
    title: "See who they are",
    body: "Your pet’s profile opens instantly with only the details you’ve chosen to share.",
  },
  {
    title: "Help them get home",
    body: "The finder calls or messages you, and can choose to share where they found your pet.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2.5rem] shadow-float">
            <img
              src={tapTag}
              alt="A finder holding a phone next to a pet's Furrever tag"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-lift sm:left-auto sm:right-8 sm:w-72">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Nfc className="size-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-ink">Profile opened in 1.2s</p>
              <p className="text-xs text-muted-foreground">Straight from the phone’s browser</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">How Furrever works</span>
          <h2 className="display-lg mt-3">Three taps between lost and home.</h2>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            Designed for the most stressful moment of a pet parent’s life — and for the kind stranger who
            wants to help.
          </p>
          <ol className="mt-10 space-y-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="group flex gap-5 rounded-2xl border border-transparent p-4 transition-colors hover:border-border hover:bg-card"
              >
                <span
                  className={
                    i === 1
                      ? "grid size-12 shrink-0 place-items-center rounded-full bg-accent font-display text-lg font-extrabold text-accent-foreground"
                      : "grid size-12 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground"
                  }
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button asChild variant="link" className="mt-4 px-4 text-[15px]">
            <Link to="/find">
              See what a finder sees <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
