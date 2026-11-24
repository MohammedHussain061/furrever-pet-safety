import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function PawMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <ellipse cx="16" cy="21" rx="7" ry="6" />
      <ellipse cx="7" cy="13" rx="3" ry="4" transform="rotate(-18 7 13)" />
      <ellipse cx="25" cy="13" rx="3" ry="4" transform="rotate(18 25 13)" />
      <ellipse cx="12" cy="7" rx="2.8" ry="3.8" />
      <ellipse cx="20" cy="7" rx="2.8" ry="3.8" />
    </svg>
  );
}

export function Logo({ tone = "ink", className }: { tone?: "ink" | "light"; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Furrever home"
      className={cn(
        "inline-flex items-center gap-2 font-display text-[26px] font-extrabold tracking-[-0.07em]",
        tone === "ink" ? "text-ink" : "text-primary-foreground",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-full bg-accent text-accent-foreground">
        <PawMark className="size-4.5" />
      </span>
      <span>
        furrever<span className="text-accent">.</span>
      </span>
    </Link>
  );
}
