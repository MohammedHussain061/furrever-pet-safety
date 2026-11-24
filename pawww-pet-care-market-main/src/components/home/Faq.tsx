import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Does the person who finds my pet need an app?",
    a: "No. They simply hold their phone near the tag and your pet’s profile opens in their browser. If their phone doesn’t support NFC, they can type the printed collar ID at furrever’s Find a pet page.",
  },
  {
    q: "Does Furrever track my pet with GPS?",
    a: "No — Furrever is identification, not surveillance. We never track your pet in the background. A finder can choose to share their location with you when they tap the tag.",
  },
  {
    q: "Does the tag need charging?",
    a: "Never. The tag has no battery, so it’s always ready and there’s nothing to forget.",
  },
  {
    q: "What can a finder see?",
    a: "Only what you choose. Most pet parents share their pet’s name, a phone number and a friendly note. You can switch details on or off anytime from your dashboard.",
  },
  {
    q: "Can I update my details after buying?",
    a: "Yes. Change your number, address, medical notes or photos whenever you like — the tag always opens the latest version.",
  },
  {
    q: "Is it safe in the rain and the pool?",
    a: "The tag is weather-sealed for rain, puddles and splashy play. The collar webbing dries quickly and is easy to rinse clean.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Questions</span>
          <h2 className="display-lg mt-3">Good to know.</h2>
          <p className="mt-4 max-w-sm text-lg text-muted-foreground">
            Everything pet parents usually ask before giving their best friend a way home.
          </p>
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="rounded-3xl border border-border bg-card px-6 sm:px-8">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className={i === FAQS.length - 1 ? "border-b-0" : ""}>
              <AccordionTrigger className="py-6 font-display text-lg font-bold text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
