import { Bell, Droplets, Nfc, ShieldCheck, Smartphone, Zap, RefreshCw, Hash } from "lucide-react";

const ITEMS = [
  { icon: Nfc, label: "NFC smart tag" },
  { icon: Smartphone, label: "Works with any phone" },
  { icon: Zap, label: "No battery, no charging" },
  { icon: Droplets, label: "Weather-sealed" },
  { icon: ShieldCheck, label: "You control what’s shared" },
  { icon: Bell, label: "Instant tap alerts" },
  { icon: RefreshCw, label: "Update details anytime" },
  { icon: Hash, label: "Printed backup ID" },
];

export function FeatureMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden py-10" aria-label="Furrever features">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {row.map(({ icon: Icon, label }, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-ink"
            aria-hidden={i >= ITEMS.length}
          >
            <Icon className="size-4 text-coral" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
