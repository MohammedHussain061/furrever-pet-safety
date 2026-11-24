import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "./Logo";

export function SiteFooter() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list!", { description: "We'll send pet-safety tips and launch news." });
    setEmail("");
  }

  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-4 font-serif text-xl leading-snug">A little tag. A way back home.</p>
          <form onSubmit={onSubmit} className="mt-6">
            <label htmlFor="footer-email" className="text-sm font-medium">
              Pet-safety tips, once a month
            </label>
            <div className="mt-2 flex overflow-hidden rounded-xl border border-charcoal-foreground/20 bg-charcoal-foreground/5 focus-within:border-accent">
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-charcoal-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid w-12 place-items-center bg-accent text-accent-foreground transition-opacity hover:opacity-90"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
        <FooterCol title="Shop">
          <FooterLink to="/collars">All collars</FooterLink>
          <Link to="/collars/$slug" params={{ slug: "powder-blue" }} className="footer-link">
            Powder blue
          </Link>
          <Link to="/collars/$slug" params={{ slug: "blush-pink" }} className="footer-link">
            Blush pink
          </Link>
          <Link to="/collars/$slug" params={{ slug: "charcoal" }} className="footer-link">
            Charcoal
          </Link>
        </FooterCol>
        <FooterCol title="Help">
          <FooterLink to="/find">Found a pet?</FooterLink>
          <Link to="/" hash="how" className="footer-link">
            How it works
          </Link>
          <Link to="/" hash="faq" className="footer-link">
            FAQ
          </Link>
        </FooterCol>
        <FooterCol title="Furrever">
          <FooterLink to="/about">Our story</FooterLink>
          <FooterLink to="/sign-in">Sign in</FooterLink>
          <FooterLink to="/dashboard">Pet dashboard</FooterLink>
        </FooterCol>
      </div>
      <div className="border-t border-charcoal-foreground/10">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-sm text-charcoal-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Furrever. Made with love for pets in India.</p>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full border border-charcoal-foreground/15" aria-label="Instagram">
              <Instagram className="size-4" />
            </span>
            <span className="grid size-9 place-items-center rounded-full border border-charcoal-foreground/15" aria-label="YouTube">
              <Youtube className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-normal text-charcoal-foreground">{title}</h4>
      <div className="mt-4 flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: "/collars" | "/find" | "/about" | "/sign-in" | "/dashboard"; children: React.ReactNode }) {
  return (
    <Link to={to} className="footer-link">
      {children}
    </Link>
  );
}
