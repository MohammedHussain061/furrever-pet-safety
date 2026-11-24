import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import reunion from "@/assets/reunion.jpg";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <div className="grid overflow-hidden rounded-[2.75rem] bg-primary lg:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-14 sm:px-14 lg:py-20">
            <span className="eyebrow text-accent">A little tag. A way back home.</span>
            <h2 className="display-lg mt-4 text-primary-foreground">Give them a way home.</h2>
            <p className="mt-4 max-w-md text-lg text-on-primary-muted">
              Choose a collar, register your pet in two minutes and decide exactly what a finder can see.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="xl" variant="peach">
                <Link to="/collars">
                  Shop collars <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="xl" variant="ghost-inverse">
                <Link to="/sign-in" search={{ mode: "register" }}>
                  Register your pet
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <img
              src={reunion}
              alt="A woman hugging her beagle after a happy reunion"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
