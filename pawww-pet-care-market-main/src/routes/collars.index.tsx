import { createFileRoute } from "@tanstack/react-router";
import { Package, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import flatlay from "@/assets/collars-flatlay.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { COLLAR_SIZES, collars } from "@/lib/catalog";

export const Route = createFileRoute("/collars/")({
  head: () => ({
    meta: [
      { title: "Smart collars — Furrever" },
      {
        name: "description",
        content: "Shop Furrever smart collars in powder blue, blush pink and charcoal. Every collar includes an NFC smart tag.",
      },
      { property: "og:title", content: "Smart collars — Furrever" },
      { property: "og:description", content: "Three colours, one promise: a way back home. Every collar includes the Furrever smart tag." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollarsPage,
});

const PERKS = [
  { icon: Package, title: "Smart tag included", body: "Every collar ships with its NFC tag attached." },
  { icon: ShieldCheck, title: "Set up in 2 minutes", body: "Tap the tag with your phone to register." },
  { icon: Truck, title: "Ships across India", body: "Carefully packed and tracked to your door." },
  { icon: RotateCcw, title: "Easy size exchange", body: "Wrong fit? We’ll help you swap it." },
];

function CollarsPage() {
  return (
    <SiteLayout>
      <section className="bg-hero -mt-[72px] rounded-b-[2.75rem] pt-[72px]">
        <div className="container-site grid items-center gap-12 pb-16 pt-10 lg:grid-cols-2 lg:pb-20">
          <div>
            <span className="eyebrow">Smart collars</span>
            <h1 className="display-xl mt-4">
              Three colours. <span className="font-serif font-normal tracking-[-0.02em] text-coral">One promise.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-foreground">
              Soft, durable collars with the Furrever smart tag built in — so the people who find your pet can
              reach you in seconds.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border-8 border-card shadow-float">
            <img src={flatlay} alt="Powder blue, blush pink and charcoal Furrever collars" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collars.map((c) => (
              <ProductCard key={c.slug} collar={c} />
            ))}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-ink">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{title}</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Size guide</span>
                <h2 className="mt-2 text-3xl font-bold">Find the right fit.</h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Measure around your pet’s neck and add two fingers’ width for comfort.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {COLLAR_SIZES.map((s) => (
                <div key={s.id} className="rounded-2xl bg-muted p-5 text-center">
                  <p className="font-display text-3xl font-extrabold text-ink">{s.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.fit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
