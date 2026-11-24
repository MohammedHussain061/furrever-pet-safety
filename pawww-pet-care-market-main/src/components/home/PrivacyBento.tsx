import { Bell, HeartPulse, MapPin, RefreshCw, Smartphone, Zap } from "lucide-react";
import catHome from "@/assets/cat-home.jpg";

const CARDS = [
  {
    icon: Bell,
    title: "Instant tap alerts",
    body: "Know the moment someone opens your pet’s profile, wherever you are.",
  },
  {
    icon: MapPin,
    title: "Location, only by choice",
    body: "Finders can share where they are. We never track your pet in the background.",
  },
  {
    icon: RefreshCw,
    title: "Always up to date",
    body: "Moved house or changed numbers? Update the profile in seconds — no new tag needed.",
  },
  {
    icon: HeartPulse,
    title: "Medical notes",
    body: "Allergies, medication or a nervous temperament — tell finders what matters.",
  },
  {
    icon: Zap,
    title: "Nothing to charge",
    body: "The tag has no battery, so it’s always ready — even after weeks of adventures.",
  },
];

export function PrivacyBento() {
  return (
    <section className="bg-secondary/60 py-20 lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Furrever</span>
          <h2 className="display-lg mt-3">Identification, not surveillance.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything a finder needs to help — and nothing you didn’t choose to share.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl sm:col-span-2 lg:col-span-6 lg:row-span-2">
            <img
              src={catHome}
              alt="Persian cat relaxing at home wearing a pink Furrever collar"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="relative flex h-full min-h-[440px] flex-col justify-end bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent p-7">
              <div className="max-w-sm rounded-2xl border border-border bg-card/95 p-5 shadow-lift backdrop-blur">
                <p className="font-display text-lg font-bold text-ink">Privacy, your way</p>
                <p className="mt-1 text-sm text-muted-foreground">Choose exactly what a finder sees.</p>
                <div className="mt-4 space-y-2.5">
                  {[
                    ["Pet’s name", true],
                    ["Your phone number", true],
                    ["Home address", false],
                  ].map(([label, on]) => (
                    <div key={label as string} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{label}</span>
                      <span
                        className={
                          on
                            ? "flex h-5 w-9 items-center justify-end rounded-full bg-primary p-0.5"
                            : "flex h-5 w-9 items-center justify-start rounded-full bg-input p-0.5"
                        }
                        aria-label={on ? "Shared" : "Hidden"}
                      >
                        <span className="size-4 rounded-full bg-card shadow-sm" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {CARDS.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className={
                "card-hover rounded-3xl border border-border bg-card p-6 " +
                (i === 4 ? "sm:col-span-2 sm:flex sm:items-center sm:gap-6 lg:col-span-12" : "lg:col-span-3")
              }
            >
              <span
                className={
                  i % 2 === 0
                    ? "grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"
                    : "grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"
                }
              >
                <Icon className="size-5" />
              </span>
              <div className={i === 4 ? "mt-4 sm:mt-0" : "mt-4"}>
                <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Smartphone className="size-4" /> Works with every NFC-enabled phone, plus a printed ID on every tag.
        </div>
      </div>
    </section>
  );
}
