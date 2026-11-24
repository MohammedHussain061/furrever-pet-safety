import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Eye, MapPin, PencilLine } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";
import { Button } from "@/components/ui/button";

export function AppShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site">
        <div className="bg-ink-gradient relative overflow-hidden rounded-[2.75rem] px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-accent/25 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-accent">Your pet dashboard</span>
              <h2 className="display-lg mt-3 text-primary-foreground">Their whole story, in your pocket.</h2>
              <p className="mt-4 max-w-md text-lg text-on-primary-muted">
                Mark your pet as lost in one tap, see every scan as it happens, and keep their details fresh
                — from any phone or laptop.
              </p>
              <ul className="mt-8 space-y-3 text-primary-foreground">
                {["Mark as lost or found instantly", "See when and where the tag was tapped", "Share different details when lost"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="grid size-6 place-items-center rounded-full bg-accent text-accent-foreground">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="peach">
                  <Link to="/dashboard">
                    Explore the dashboard <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost-inverse">
                  <Link to="/sign-in" search={{ mode: "register" }}>
                    Register a pet
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="animate-float rounded-3xl border border-border bg-card p-6 shadow-float">
                <div className="flex items-center gap-4">
                  <img src={heroDog} alt="" className="size-16 rounded-2xl object-cover object-top" />
                  <div className="flex-1">
                    <p className="font-display text-2xl font-extrabold text-ink">Bruno</p>
                    <p className="text-sm text-muted-foreground">Golden retriever · 4 years</p>
                  </div>
                  <span className="rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
                    Safe
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-muted p-4">
                    <p className="eyebrow">Collar</p>
                    <p className="mt-1 font-display font-bold text-ink">PL-20481</p>
                  </div>
                  <div className="rounded-2xl bg-muted p-4">
                    <p className="eyebrow">Last tap</p>
                    <p className="mt-1 font-display font-bold text-ink">2 days ago</p>
                  </div>
                </div>
                <p className="mt-6 text-sm font-semibold text-ink">Recent activity</p>
                <ul className="mt-3 space-y-3">
                  {[
                    { icon: Eye, label: "Profile viewed by a finder", time: "2d", tone: "bg-tile-sky text-ink" },
                    { icon: MapPin, label: "Location shared · near Cubbon Park", time: "2d", tone: "bg-tile-rose text-coral" },
                    { icon: PencilLine, label: "Medical notes updated", time: "1w", tone: "bg-success-soft text-success" },
                  ].map(({ icon: Icon, label, time, tone }) => (
                    <li key={label} className="flex items-center gap-3 text-sm">
                      <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${tone}`}>
                        <Icon className="size-4" />
                      </span>
                      <span className="flex-1 text-foreground">{label}</span>
                      <span className="text-xs text-muted-foreground">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
