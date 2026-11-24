import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Heart, Leaf } from "lucide-react";
import reunion from "@/assets/reunion.jpg";
import catHome from "@/assets/cat-home.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our story — Furrever" },
      {
        name: "description",
        content: "Furrever builds smart pet tags that help lost pets get home — with privacy and kindness at the centre.",
      },
      { property: "og:title", content: "Our story — Furrever" },
      { property: "og:description", content: "Smart pet tags built around privacy, kindness and the way home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Eye, title: "Identification, not surveillance", body: "We help people identify your pet — we never track them or you." },
  { icon: Heart, title: "Designed for kindness", body: "Every screen is made for a stressed owner and a stranger who wants to help." },
  { icon: Leaf, title: "Built to last", body: "No batteries to replace, no subscriptions, no e-waste every year." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-hero -mt-[72px] rounded-b-[2.75rem] pt-[72px]">
        <div className="container-site grid items-center gap-12 pb-16 pt-10 lg:grid-cols-2 lg:pb-24">
          <div>
            <span className="eyebrow">Our story</span>
            <h1 className="display-xl mt-4">
              Every pet deserves a <span className="font-serif font-normal tracking-[-0.02em] text-coral">way home.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed">
              Furrever started with a simple question: when a pet gets lost, why is reaching their family still so
              hard? A name on a tag isn’t enough, and GPS trackers need charging, subscriptions and constant
              tracking. We wanted something kinder.
            </p>
          </div>
          <div className="relative">
            <img src={reunion} alt="A woman hugging her beagle" className="aspect-[4/5] w-full max-w-md rounded-[2.5rem] border-8 border-card object-cover shadow-float lg:ml-auto" />
            <img src={catHome} alt="" className="absolute -bottom-8 left-0 hidden aspect-square w-48 rounded-3xl border-8 border-card object-cover shadow-lift sm:block" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-3xl leading-snug text-ink sm:text-4xl">
              “A little tag. A way back home.” It’s more than our tagline — it’s the only promise we make.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-hover rounded-3xl border border-border bg-card p-8">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <Button asChild size="xl">
              <Link to="/collars">
                Shop collars <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="soft">
              <Link to="/find">Found a pet?</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
