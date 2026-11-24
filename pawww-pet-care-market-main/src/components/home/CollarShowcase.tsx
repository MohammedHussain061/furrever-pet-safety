import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { collars } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";

export function CollarShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">The Furrever collar</span>
            <h2 className="display-lg mt-3 max-w-xl">Built to be noticed when it matters.</h2>
          </div>
          <Button asChild variant="soft" size="lg">
            <Link to="/collars">
              Compare all collars <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collars.map((c) => (
            <ProductCard key={c.slug} collar={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
