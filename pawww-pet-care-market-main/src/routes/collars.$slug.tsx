import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, ShieldCheck, Truck, Zap } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { COLLAR_SIZES, collars, formatINR, getCollar, tileClass } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/collars/$slug")({
  loader: ({ params }) => {
    const collar = getCollar(params.slug);
    if (!collar) throw notFound();
    return { collar };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.collar.name ?? "Smart collar";
    const desc = loaderData?.collar.tagline ?? "A Furrever smart collar with NFC tag.";
    return {
      meta: [
        { title: `${name} smart collar — Furrever` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} smart collar — Furrever` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-site py-32 text-center">
        <h1 className="display-lg">We couldn’t find that collar.</h1>
        <Button asChild className="mt-8" size="lg">
          <Link to="/collars">See all collars</Link>
        </Button>
      </div>
    </SiteLayout>
  ),
  component: CollarPage,
});

function CollarPage() {
  const { collar } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<string>("M");
  const [qty, setQty] = useState(1);
  const others = collars.filter((c) => c.slug !== collar.slug);
  const mainImage = collar.gallery[active] ?? collar.image;

  function order() {
    toast.success(`${collar.name} collar · size ${size} × ${qty}`, {
      description: "Online checkout is coming soon — we’ll let you know the moment it opens.",
    });
  }

  return (
    <SiteLayout>
      <div className="container-site pt-6">
        <Link to="/collars" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-ink">
          <ArrowLeft className="size-4" /> All collars
        </Link>
      </div>
      <section className="container-site grid gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-12">
        <div>
          <div key={collar.slug} className={cn("overflow-hidden rounded-[2rem]", tileClass[collar.tile])}>
            <img src={mainImage} alt={`${collar.name} Furrever collar`} className="aspect-square w-full animate-fade-up object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {collar.gallery.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                className={cn(
                  "overflow-hidden rounded-2xl border-2 transition-all",
                  i === active ? "border-primary" : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                <img src={img} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="eyebrow">{collar.code}</span>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight">{collar.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{collar.tagline}</p>
          <p className="mt-6 font-display text-3xl font-extrabold text-ink">{formatINR(collar.price)}</p>
          <p className="text-sm text-muted-foreground">Smart tag included · Inclusive of taxes</p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-ink">Colour</p>
            <div className="mt-3 flex gap-3">
              {collars.map((c) => (
                <Link
                  key={c.slug}
                  to="/collars/$slug"
                  params={{ slug: c.slug }}
                  aria-label={c.name}
                  onClick={() => setActive(0)}
                  className={cn(
                    "size-10 rounded-full border-2 ring-offset-2 ring-offset-background transition-all",
                    c.swatch,
                    c.slug === collar.slug ? "border-primary ring-2 ring-primary" : "border-border hover:scale-110",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Size</p>
              <Link to="/collars" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-ink">
                Size guide
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {COLLAR_SIZES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSize(s.id)}
                  aria-pressed={size === s.id}
                  className={cn(
                    "rounded-xl border px-2 py-3 text-center transition-all",
                    size === s.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40",
                  )}
                >
                  <span className="block font-display font-bold">{s.label}</span>
                  <span className={cn("block text-[11px]", size === s.id ? "text-on-primary-muted" : "text-muted-foreground")}>{s.fit}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <div className="flex items-center rounded-xl border border-border bg-card">
              <button type="button" className="grid size-12 place-items-center text-ink" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center font-display font-bold text-ink" aria-live="polite">{qty}</span>
              <button type="button" className="grid size-12 place-items-center text-ink" onClick={() => setQty((q) => Math.min(9, q + 1))} aria-label="Increase quantity">
                <Plus className="size-4" />
              </button>
            </div>
            <Button size="lg" className="h-12 flex-1" onClick={order}>
              Order now · {formatINR(collar.price * qty)}
            </Button>
          </div>

          <ul className="mt-8 space-y-2.5">
            {collar.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-[15px]">
                <Check className="size-4 text-success" strokeWidth={3} /> {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs">
            {[
              { icon: Zap, label: "No battery" },
              { icon: ShieldCheck, label: "Privacy first" },
              { icon: Truck, label: "Ships across India" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl bg-muted p-4">
                <Icon className="mx-auto size-5 text-ink" />
                <p className="mt-2 font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="about">
              <AccordionTrigger className="font-display text-base font-bold text-ink hover:no-underline">About this collar</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">{collar.description}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="box">
              <AccordionTrigger className="font-display text-base font-bold text-ink hover:no-underline">What’s in the box</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                Furrever collar with smart tag attached, printed collar ID card and a quick-start guide.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup" className="border-b-0">
              <AccordionTrigger className="font-display text-base font-bold text-ink hover:no-underline">Setting it up</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                Tap the tag with your phone, create your account and add your pet’s details. It takes about two minutes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <h2 className="text-3xl font-bold">You might also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((c) => (
              <ProductCard key={c.slug} collar={c} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
