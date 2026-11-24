import { Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Check, MapPin } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";
import { Button } from "@/components/ui/button";
import { PawMark } from "@/components/site/Logo";

export function Hero() {
  return (
    <section className="bg-hero grain -mt-[72px] overflow-hidden rounded-b-[2.75rem] pt-[72px]">
      <div className="container-site grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-16">
        <div>
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-[13px] font-medium text-ink backdrop-blur">
            <PawMark className="size-3.5 text-coral" />
            Smart pet safety, made human
          </span>
          <h1 className="display-xl mt-6 animate-fade-up [animation-delay:80ms]">
            Lost? Let’s get
            <br />
            them <em className="font-serif font-normal not-italic tracking-[-0.02em] text-coral">home.</em>
          </h1>
          <p className="mt-6 max-w-lg animate-fade-up text-lg leading-relaxed text-foreground [animation-delay:160ms]">
            A little tag that makes a big difference. One tap from any phone opens your pet’s profile, so
            whoever finds them can reach you in seconds.
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <Button asChild size="xl">
              <Link to="/collars">
                Shop smart collars <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="soft">
              <Link to="/find">I found a pet</Link>
            </Button>
          </div>
          <ul className="mt-8 flex animate-fade-up flex-wrap gap-x-6 gap-y-3 text-sm font-medium [animation-delay:320ms]">
            {["Instant pet profile", "Optional location sharing", "No app required"].map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -right-10 -top-8 size-56 rounded-full bg-accent/70 blur-[2px]" aria-hidden />
          <div className="absolute -bottom-8 -left-8 size-40 rounded-full bg-primary/90" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tl-[9rem] border-8 border-card shadow-float">
            <img
              src={heroDog}
              alt="Golden retriever wearing an indigo Furrever collar with a white smart tag"
              className="size-full object-cover"
              fetchPriority="high"
            />
          </div>

          <div className="absolute -left-4 top-14 w-[250px] animate-fade-up rounded-2xl border border-border bg-card/95 p-4 shadow-lift backdrop-blur [animation-delay:600ms] sm:-left-14">
            <div className="flex items-start gap-3">
              <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                <span className="absolute inset-0 animate-ping-soft rounded-full bg-accent" aria-hidden />
                <Bell className="relative size-4" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">Bruno’s tag was tapped</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" /> Indiranagar · just now
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-10 w-[220px] animate-fade-up rounded-2xl border border-border bg-card/95 p-4 shadow-lift backdrop-blur [animation-delay:800ms] sm:-right-10">
            <p className="eyebrow">Finder can see</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Name", "Your number", "A friendly note"].map((t) => (
                <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
              <span className="size-1.5 rounded-full bg-success" /> Safe at home
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
