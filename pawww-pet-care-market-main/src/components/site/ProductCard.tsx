import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatINR, tileClass, type Collar } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({ collar }: { collar: Collar }) {
  return (
    <Link
      to="/collars/$slug"
      params={{ slug: collar.slug }}
      className="group card-hover flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className={cn("relative aspect-square overflow-hidden", tileClass[collar.tile])}>
        <img
          src={collar.image}
          alt={`${collar.name} Furrever smart collar`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1 font-display text-[11px] font-bold tracking-[0.14em] text-ink backdrop-blur">
          {collar.code}
        </span>
        <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-card text-ink opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight">{collar.name}</h3>
          <span className="font-display text-lg font-bold text-ink">{formatINR(collar.price)}</span>
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{collar.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          View collar
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
