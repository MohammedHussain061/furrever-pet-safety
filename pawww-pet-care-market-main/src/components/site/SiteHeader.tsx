import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", hash: "how", label: "How it works" },
  { to: "/collars", label: "Smart collars" },
  { to: "/find", label: "Find a pet" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="container-site flex items-center justify-center gap-2 py-2 text-[13px]">
          <span className="text-on-primary-muted">New</span>
          <span className="font-medium">The Charcoal collar now glows under headlights.</span>
          <Link
            to="/collars/$slug"
            params={{ slug: "charcoal" }}
            className="hidden items-center gap-1 font-semibold text-accent hover:underline sm:inline-flex"
          >
            Take a look <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...("hash" in item ? { hash: item.hash } : {})}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-foreground transition-colors hover:bg-muted hover:text-ink"
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: true, includeHash: true }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost">
              <Link to="/sign-in">Sign in</Link>
            </Button>
            <Button asChild>
              <Link to="/sign-in" search={{ mode: "register" }}>
                Register pet
              </Link>
            </Button>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5!" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm border-border bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-2">
                <Logo />
              </div>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    {...("hash" in item ? { hash: item.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 font-display text-2xl font-bold tracking-tight text-ink hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-10 grid gap-3">
                <Button asChild size="lg">
                  <Link to="/sign-in" search={{ mode: "register" }} onClick={() => setOpen(false)}>
                    Register pet
                  </Link>
                </Button>
                <Button asChild size="lg" variant="soft">
                  <Link to="/sign-in" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
