import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, HeartHandshake, MapPin, Nfc, Phone, RotateCcw, Search } from "lucide-react";
import { toast } from "sonner";
import tapTag from "@/assets/tap-tag.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { findPetByTagId, normalizeTagId, type DemoPet } from "@/lib/demo-pets";

export const Route = createFileRoute("/find")({
  head: () => ({
    meta: [
      { title: "Found a lost pet? — Furrever finder" },
      {
        name: "description",
        content: "Found a pet wearing a Furrever tag? Tap the tag or enter the collar ID to reach their family. No app needed.",
      },
      { property: "og:title", content: "Found a lost pet? — Furrever finder" },
      { property: "og:description", content: "Tap the tag or enter the collar ID to reach the pet's family. No app needed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FindPage,
});

type Result = { state: "idle" } | { state: "found"; pet: DemoPet } | { state: "missing"; id: string };

function FindPage() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result>({ state: "idle" });
  const [revealed, setRevealed] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    const pet = findPetByTagId(value);
    setRevealed(false);
    setResult(pet ? { state: "found", pet } : { state: "missing", id: normalizeTagId(value) });
  }

  function reset() {
    setResult({ state: "idle" });
    setValue("");
  }

  return (
    <SiteLayout>
      <section className="bg-hero -mt-[72px] rounded-b-[2.75rem] pt-[72px]">
        <div className="container-site pb-16 pt-10 text-center lg:pb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-[13px] font-medium text-ink">
            <HeartHandshake className="size-3.5 text-coral" /> Furrever finder
          </span>
          <h1 className="display-xl mx-auto mt-6 max-w-3xl">
            Found a lost pet? <span className="font-serif font-normal tracking-[-0.02em] text-coral">Thank you.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg">
            Take a breath — you’re already helping. Tap their tag or enter the collar ID to reach their family.
            No app needed.
          </p>
        </div>
      </section>

      <section className="container-site py-14 lg:py-20">
        {result.state === "idle" ? (
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <img src={tapTag} alt="Holding a phone near a Furrever tag" className="aspect-[16/9] w-full object-cover" />
              <div className="p-8">
                <span className="eyebrow">Option 1 · Tap the tag</span>
                <h2 className="mt-2 text-3xl font-bold">Hold your phone to the tag.</h2>
                <ol className="mt-6 space-y-3">
                  {["Unlock your phone.", "Hold the top of it near the round Furrever tag.", "Tap the notification to open the pet’s profile."].map(
                    (s, i) => (
                      <li key={s} className="flex items-center gap-4 text-[15px]">
                        <span className={i === 1 ? "grid size-9 shrink-0 place-items-center rounded-full bg-accent font-display font-bold text-accent-foreground" : "grid size-9 shrink-0 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground"}>
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col rounded-3xl border border-border bg-card p-8">
              <span className="eyebrow">Option 2 · Use the ID</span>
              <h2 className="mt-2 text-3xl font-bold">Enter the collar ID.</h2>
              <p className="mt-2 text-muted-foreground">It’s printed on the back of the tag, like PL-20481.</p>
              <label htmlFor="collar-id" className="mt-8 text-sm font-semibold text-ink">
                Collar ID
              </label>
              <div className="relative mt-2">
                <Nfc className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="collar-id"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="e.g. PL-20481"
                  autoComplete="off"
                  autoCapitalize="characters"
                  className="h-16 w-full rounded-2xl border border-input bg-background pl-12 pr-4 font-display text-xl font-bold tracking-wider text-ink placeholder:font-sans placeholder:text-base placeholder:font-normal placeholder:tracking-normal placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <Button type="submit" size="xl" className="mt-4 w-full">
                <Search /> Find their family
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Want to see how it works? Try the sample ID <button type="button" className="font-semibold text-ink underline underline-offset-4" onClick={() => setValue("PL-20481")}>PL-20481</button>.
              </p>
              <div className="mt-auto pt-8">
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="font-display font-bold text-ink">While you’re here</p>
                  <p className="mt-1 text-sm text-foreground">
                    Keep the pet calm and somewhere safe, away from traffic. A little water helps.
                  </p>
                </div>
              </div>
            </form>
          </div>
        ) : result.state === "found" ? (
          <div className="mx-auto max-w-4xl animate-fade-up overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <img src={result.pet.photo} alt={result.pet.name} className="h-full max-h-[460px] w-full object-cover object-top" />
              <div className="p-8 sm:p-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
                  <span className="size-1.5 rounded-full bg-success" /> Registered pet · {result.pet.tagId}
                </span>
                <h2 className="mt-4 text-4xl font-extrabold">We found {result.pet.name}’s family.</h2>
                <p className="mt-2 text-muted-foreground">
                  {result.pet.breed} · {result.pet.age}
                </p>
                <div className="mt-6 rounded-2xl bg-secondary p-5">
                  <p className="eyebrow">A note from {result.pet.ownerName}</p>
                  <p className="mt-2 font-serif text-lg leading-snug text-ink">“{result.pet.note}”</p>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Button size="lg" onClick={() => setRevealed(true)}>
                    <Phone /> {revealed ? result.pet.ownerPhoneMasked : `Contact ${result.pet.ownerName}`}
                  </Button>
                  <Button
                    size="lg"
                    variant="soft"
                    onClick={() =>
                      toast.success("Location shared", {
                        description: `${result.pet.ownerName} can now see where you found ${result.pet.name}.`,
                      })
                    }
                  >
                    <MapPin /> Share my location
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Shared by the owner: {result.pet.shared.join(" · ")}. Location sharing is always optional.
                </p>
                <button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:underline">
                  <RotateCcw className="size-3.5" /> Search another ID
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl animate-fade-up rounded-[2rem] border border-border bg-card p-10 text-center shadow-soft">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-danger-soft text-danger">
              <AlertCircle className="size-7" />
            </span>
            <h2 className="mt-6 text-3xl font-bold">We couldn’t find {result.id || "that ID"}.</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Check the ID for typos and try again, or hold your phone near the tag instead.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" onClick={() => setResult({ state: "idle" })}>
                Try again
              </Button>
              <Button size="lg" variant="soft" onClick={reset}>
                Use the tag instead
              </Button>
            </div>
          </div>
        )}

        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-3xl bg-primary p-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-primary-foreground">Is this your pet?</p>
            <p className="text-on-primary-muted">Sign in to mark them as lost and see every scan.</p>
          </div>
          <Button asChild variant="peach" size="lg">
            <Link to="/sign-in">
              Sign in <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
